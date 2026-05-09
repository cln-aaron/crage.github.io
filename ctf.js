// Shared CTF infrastructure: scoring, timing, flag verification, session export.
(function () {
  const STORAGE_KEY = 'crage:ctf-session';
  const POINTS_BASE = 1000;
  const HINT_COSTS = [100, 200, 300];
  const FAST_BONUS_SECS = 240;
  const FAST_BONUS = 500;
  const MIN_SCORE = 100;

  function loadSession() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return newSession();
  }
  function newSession() {
    return {
      session_id: 'sess_' + Math.random().toString(36).slice(2, 10),
      started_at: new Date().toISOString(),
      labs: {},
    };
  }
  function saveSession(s) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (_) {}
  }

  async function sha256Hex(s) {
    const buf = new TextEncoder().encode(s);
    const hash = await crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(hash))
      .map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  function calcScore(hintsUsed, timeSecs) {
    let score = POINTS_BASE;
    for (let i = 0; i < hintsUsed && i < HINT_COSTS.length; i++) score -= HINT_COSTS[i];
    if (timeSecs <= FAST_BONUS_SECS) score += FAST_BONUS;
    return Math.max(MIN_SCORE, score);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  // Render markdown-lite (bold, code, line breaks) for hint text.
  function inlineFmt(s) {
    return escapeHtml(s)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  }

  const CTF = {
    config: null,
    session: loadSession(),
    state: { hintsUsed: 0, completed: false, startedAt: null },

    register(cfg) {
      this.config = cfg;
      this.state.startedAt = Date.now();
      const labRecord = this.session.labs[cfg.id] || {
        started_at: new Date().toISOString(),
        completed_at: null, score: 0, hints_used: 0,
        time_seconds: 0, completed: false,
      };
      this.session.labs[cfg.id] = labRecord;
      saveSession(this.session);
      this.state.hintsUsed = labRecord.hints_used || 0;
      this.state.completed = !!labRecord.completed;
    },

    revealHint(idx) {
      if (this.state.completed) return;
      if (idx + 1 > this.state.hintsUsed) {
        this.state.hintsUsed = idx + 1;
        const lab = this.session.labs[this.config.id];
        lab.hints_used = this.state.hintsUsed;
        saveSession(this.session);
      }
    },

    async checkFlag(input) {
      const cleaned = (input || '').trim();
      if (!cleaned) return { ok: false, reason: 'empty' };
      const got = await sha256Hex(cleaned);
      if (got !== this.config.flagHash) return { ok: false, reason: 'wrong' };
      if (!this.state.completed) {
        this.state.completed = true;
        const elapsed = Math.round((Date.now() - this.state.startedAt) / 1000);
        const score = calcScore(this.state.hintsUsed, elapsed);
        const lab = this.session.labs[this.config.id];
        lab.completed = true;
        lab.completed_at = new Date().toISOString();
        lab.time_seconds = elapsed;
        lab.score = score;
        saveSession(this.session);
        return { ok: true, score, time: elapsed, hintsUsed: this.state.hintsUsed };
      }
      const lab = this.session.labs[this.config.id];
      return { ok: true, score: lab.score, time: lab.time_seconds, hintsUsed: lab.hints_used, alreadyDone: true };
    },

    totalScore() {
      return Object.values(this.session.labs).reduce((s, l) => s + (l.score || 0), 0);
    },
    totalTime() {
      return Object.values(this.session.labs).reduce((s, l) => s + (l.time_seconds || 0), 0);
    },
    completedCount() {
      return Object.values(this.session.labs).filter((l) => l.completed).length;
    },

    isCompleted(labId) {
      return !!(this.session.labs[labId] && this.session.labs[labId].completed);
    },
    labScore(labId) {
      return (this.session.labs[labId] && this.session.labs[labId].score) || 0;
    },

    exportSession() {
      const session = this.session;
      const summary = {
        ...session,
        ended_at: new Date().toISOString(),
        total_score: this.totalScore(),
        total_time_seconds: this.totalTime(),
        completed_count: this.completedCount(),
      };
      return JSON.stringify(summary, null, 2);
    },

    downloadSession() {
      const blob = new Blob([this.exportSession()], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'crage-ctf-' + this.session.session_id + '.json';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
    },

    resetAll() {
      this.session = newSession();
      saveSession(this.session);
      this.state = { hintsUsed: 0, completed: false, startedAt: Date.now() };
    },

    fmtTime(secs) {
      const m = Math.floor(secs / 60), s = secs % 60;
      return m + 'm ' + s.toString().padStart(2, '0') + 's';
    },

    installMissionSidebar(mount) {
      const cfg = this.config;
      if (!cfg) throw new Error('CTF.register() must be called first');
      mount.innerHTML =
        '<h2>Mission</h2>' +
        '<div class="mission-objective">' +
          '<div class="mission-tag">// objective</div>' +
          '<p>' + inlineFmt(cfg.objective) + '</p>' +
        '</div>' +
        '<div class="mission-hints" id="mission-hints">' +
          cfg.hints.map((h, i) =>
            '<div class="mission-hint" data-hint-idx="' + i + '">' +
              '<button class="hint-reveal-btn" data-i="' + i + '">' +
                'reveal hint ' + (i + 1) + '  <span class="hint-cost">(-' + HINT_COSTS[i] + ' pts)</span>' +
              '</button>' +
              '<div class="hint-body" hidden>' + inlineFmt(h) + '</div>' +
            '</div>'
          ).join('') +
        '</div>' +
        '<div class="mission-flag">' +
          '<div class="mission-tag">// flag</div>' +
          '<div class="flag-input-row">' +
            '<input type="text" class="flag-input" id="flag-input" autocomplete="off" placeholder="crage{...}">' +
            '<button class="flag-submit" id="flag-submit">SUBMIT</button>' +
          '</div>' +
          '<div class="flag-status" id="flag-status"></div>' +
        '</div>' +
        '<div class="mission-score" id="mission-score"></div>' +
        '<div class="mission-foot">' +
          '<a class="mission-link" href="app.html?mode=ctf">← back to challenges</a>' +
        '</div>';

      mount.querySelectorAll('.hint-reveal-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const i = +btn.dataset.i;
          CTF.revealHint(i);
          const wrap = btn.closest('.mission-hint');
          const body = wrap.querySelector('.hint-body');
          body.hidden = false;
          btn.disabled = true;
          btn.style.opacity = '0.55';
          updateScore();
        });
      });

      const flagInput = mount.querySelector('#flag-input');
      const flagSubmit = mount.querySelector('#flag-submit');
      const flagStatus = mount.querySelector('#flag-status');

      async function submitFlag() {
        const result = await CTF.checkFlag(flagInput.value);
        if (result.ok) {
          flagStatus.textContent = result.alreadyDone
            ? '✓ already solved · ' + result.score + ' pts'
            : '✓ flag accepted · ' + result.score + ' pts · ' + CTF.fmtTime(result.time);
          flagStatus.className = 'flag-status ok';
          updateScore();
        } else if (result.reason === 'empty') {
          flagStatus.textContent = 'enter a flag';
          flagStatus.className = 'flag-status warn';
        } else {
          flagStatus.textContent = '✗ wrong flag';
          flagStatus.className = 'flag-status danger';
        }
      }
      flagSubmit.addEventListener('click', submitFlag);
      flagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); submitFlag(); }
      });

      function updateScore() {
        const el = mount.querySelector('#mission-score');
        const s = CTF.session.labs[cfg.id];
        if (!el || !s) return;
        if (s.completed) {
          el.innerHTML = '<span class="ok">solved</span> · ' + s.score + ' pts · ' +
            CTF.fmtTime(s.time_seconds) + ' · ' + (s.hints_used || 0) + ' hints';
        } else {
          el.textContent = 'hints used: ' + (CTF.state.hintsUsed) + ' / 3';
        }
      }
      updateScore();

      // Restore previously revealed hints if returning to a lab
      if (CTF.state.hintsUsed > 0) {
        for (let i = 0; i < CTF.state.hintsUsed; i++) {
          const wrap = mount.querySelector('[data-hint-idx="' + i + '"]');
          if (wrap) {
            wrap.querySelector('.hint-body').hidden = false;
            const btn = wrap.querySelector('.hint-reveal-btn');
            btn.disabled = true;
            btn.style.opacity = '0.55';
          }
        }
      }
    },
  };

  window.CTF = CTF;
  window.CTF.escapeHtml = escapeHtml;
  window.CTF.inlineFmt = inlineFmt;
})();
