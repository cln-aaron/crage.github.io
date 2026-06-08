// CRAGE Pre-Class Knowledge Check · UI + scoring + Formspree report.
// Behaviour:
//   - Access-code gate ("preclass") must be unlocked before the quiz starts.
//   - 60-minute countdown timer. Auto-submits when time runs out.
//   - Free navigation: Prev / Next + a jump palette of all question numbers.
//   - Answers editable until submission.
//   - Copy / paste / right-click / text selection blocked while the quiz is live.
//   - Result screen shows total score, percentage, time, weak-domain count,
//     and a per-module breakdown with status badges (STRONG / ADEQUATE / NEEDS REVIEW).
//   - Individual right/wrong answers are intentionally NOT shown.
//   - A structured report (name, email, score, per-module, weak domains) is
//     auto-POSTed to Formspree for the instructor.
(() => {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpqedpej';
  const Q = window.PRECLASS_QUESTIONS || [];
  const META = window.PRECLASS_META || { durationMinutes: 60, weakDomainPct: 60, modules: {} };
  const DURATION_MS = META.durationMinutes * 60 * 1000;
  const WEAK_PCT = META.weakDomainPct;

  const $ = (s) => document.querySelector(s);
  const preEl = $('#pre-quiz');
  const qScreen = $('#question-screen');
  const rScreen = $('#result-screen');
  const beginBtn = $('#begin-btn');
  const prevBtn = $('#prev-btn');
  const nextBtn = $('#next-btn');
  const submitBtn = $('#submit-btn');
  const qNum = $('#question-num');
  const qModule = $('#question-module');
  const qBody = $('#question-body');
  const qOpts = $('#question-options');
  const palette = $('#palette');
  const answeredCount = $('#answered-count');
  const examTimer = $('#quiz-timer');
  const examProgress = $('#quiz-progress');
  const preStatus = $('#pre-status');
  const reportStatus = $('#report-status');

  let idx = 0;
  let answers = new Array(Q.length).fill(null);
  let startMs = 0;
  let endMs = 0;
  let timerHandle = null;
  let submitted = false;
  let participant = { name: '', email: '' };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function startTimer() {
    startMs = Date.now();
    endMs = startMs + DURATION_MS;
    tick();
    timerHandle = setInterval(tick, 1000);
  }
  function stopTimer() {
    if (timerHandle) clearInterval(timerHandle);
    timerHandle = null;
  }
  function tick() {
    const remaining = Math.max(0, endMs - Date.now());
    const m = Math.floor(remaining / 60000);
    const s = Math.floor((remaining % 60000) / 1000);
    examTimer.textContent = pad2(m) + ':' + pad2(s);
    if (remaining <= 5 * 60 * 1000) examTimer.classList.add('warn');
    if (remaining <= 60 * 1000) examTimer.classList.add('danger');
    if (remaining === 0 && !submitted) finalise(true);
  }
  function elapsedSeconds() {
    return Math.floor((Date.now() - startMs) / 1000);
  }

  function renderQuestion() {
    const q = Q[idx];
    qNum.textContent = 'Question ' + (idx + 1) + ' of ' + Q.length;
    qModule.textContent = '// Module ' + q.module + ' · ' + (META.modules[q.module] || '');
    qBody.innerHTML = esc(q.q);
    qOpts.innerHTML = '';
    ['A','B','C','D'].forEach((letter) => {
      const wrap = document.createElement('label');
      wrap.className = 'exam-option' + (answers[idx] === letter ? ' selected' : '');
      wrap.innerHTML =
        '<input type="radio" name="opt" value="' + letter + '"' +
        (answers[idx] === letter ? ' checked' : '') + '>' +
        '<span class="opt-letter">' + letter + '</span>' +
        '<span class="opt-text">' + esc(q.options[letter]) + '</span>';
      wrap.querySelector('input').addEventListener('change', () => {
        answers[idx] = letter;
        updateMeta();
        renderPalette();
        wrap.parentNode.querySelectorAll('.exam-option').forEach((el) => el.classList.remove('selected'));
        wrap.classList.add('selected');
      });
      qOpts.appendChild(wrap);
    });
    prevBtn.disabled = (idx === 0);
    nextBtn.disabled = (idx === Q.length - 1);
    renderPalette();
    updateMeta();
  }

  function renderPalette() {
    palette.innerHTML = '';
    Q.forEach((q, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'pal-cell' +
        (i === idx ? ' current' : '') +
        (answers[i] !== null ? ' answered' : '');
      btn.textContent = (i + 1);
      btn.addEventListener('click', () => { idx = i; renderQuestion(); });
      palette.appendChild(btn);
    });
  }

  function updateMeta() {
    const n = answers.filter((a) => a !== null).length;
    answeredCount.textContent = n;
    examProgress.textContent = (idx + 1) + ' / ' + Q.length;
  }

  // ---- Scoring & report ----
  function buildResult() {
    let correct = 0;
    const perModule = {};
    Object.keys(META.modules).forEach((m) => {
      perModule[m] = { total: 0, correct: 0, name: META.modules[m] };
    });
    Q.forEach((q, i) => {
      const mod = q.module;
      perModule[mod].total++;
      if (answers[i] === q.correct) {
        perModule[mod].correct++;
        correct++;
      }
    });
    const weak = Object.entries(perModule)
      .map(([m, v]) => ({ m: +m, name: v.name, pct: v.total ? Math.round(100 * v.correct / v.total) : 0, correct: v.correct, total: v.total }))
      .filter((x) => x.pct < WEAK_PCT)
      .sort((a, b) => a.pct - b.pct);
    return {
      total: Q.length,
      correct,
      pct: Math.round(100 * correct / Q.length),
      timeSeconds: elapsedSeconds(),
      perModule,
      weakDomains: weak,
    };
  }

  function showResult(result, autoSubmit) {
    submitted = true;
    stopTimer();
    enableSelection();
    preEl.hidden = true;
    qScreen.hidden = true;
    rScreen.hidden = false;
    examTimer.classList.remove('warn', 'danger');

    $('#result-score').textContent = result.correct + ' / ' + result.total;
    $('#result-pct').textContent = result.pct + '%';
    const mins = Math.floor(result.timeSeconds / 60);
    const secs = result.timeSeconds % 60;
    $('#result-time').textContent = mins + 'm ' + pad2(secs) + 's';
    $('#result-weakcount').textContent = result.weakDomains.length + ' / 11';

    const banner = $('#result-banner');
    if (autoSubmit) {
      banner.textContent = '⏰ Time is up — your quiz was auto-submitted.';
      banner.className = 'result-banner warn';
    } else {
      banner.textContent = 'Submission received. Your trainer has been notified.';
      banner.className = 'result-banner pass';
    }

    const list = $('#domain-list');
    list.innerHTML = '';
    const ordered = Object.entries(result.perModule)
      .map(([m, v]) => ({ m: +m, ...v }))
      .sort((a, b) => a.m - b.m);
    ordered.forEach((d) => {
      const pct = d.total ? Math.round(100 * d.correct / d.total) : 0;
      let cls = 'strong', tag = 'STRONG';
      if (pct < WEAK_PCT) { cls = 'weak'; tag = 'NEEDS REVIEW'; }
      else if (pct < 80) { cls = 'adequate'; tag = 'ADEQUATE'; }
      const row = document.createElement('div');
      row.className = 'domain-row ' + cls;
      row.innerHTML =
        '<div class="domain-meta">' +
          '<span class="domain-code">M' + d.m + '</span>' +
          '<span class="domain-name">' + esc(d.name) + '</span>' +
          '<span class="domain-status ' + cls + '">' + tag + '</span>' +
        '</div>' +
        '<div class="domain-bar"><span style="width:' + pct + '%"></span></div>' +
        '<div class="domain-score">' + d.correct + ' / ' + d.total + ' &middot; ' + pct + '%</div>';
      list.appendChild(row);
    });

    sendReport(result);
  }

  function buildReportLines(result) {
    const lines = [];
    lines.push('CRAGE Masterclass — Pre-Class Knowledge Check Report');
    lines.push('');
    lines.push('Participant: ' + participant.name + ' <' + participant.email + '>');
    lines.push('Submitted:   ' + new Date().toISOString());
    lines.push('');
    lines.push('Total score: ' + result.correct + ' / ' + result.total + '  (' + result.pct + '%)');
    lines.push('Time taken:  ' + Math.floor(result.timeSeconds / 60) + 'm ' + pad2(result.timeSeconds % 60) + 's');
    lines.push('');
    lines.push('Domain breakdown:');
    Object.entries(result.perModule)
      .map(([m, v]) => ({ m: +m, ...v }))
      .sort((a, b) => a.m - b.m)
      .forEach((d) => {
        const pct = d.total ? Math.round(100 * d.correct / d.total) : 0;
        const tag = pct < WEAK_PCT ? 'NEEDS REVIEW' : (pct < 80 ? 'ADEQUATE' : 'STRONG');
        lines.push('  M' + d.m + ' ' + d.name + ' — ' + d.correct + '/' + d.total + ' (' + pct + '%)  ' + tag);
      });
    lines.push('');
    if (result.weakDomains.length === 0) {
      lines.push('No weak domains (below ' + WEAK_PCT + '%).');
    } else {
      lines.push('Weak domains (<' + WEAK_PCT + '%):');
      result.weakDomains.forEach((d) => {
        lines.push('  - M' + d.m + ' ' + d.name + ' (' + d.pct + '%)');
      });
    }
    return lines.join('\n');
  }

  async function sendReport(result) {
    reportStatus.textContent = 'Delivering report to trainer…';
    reportStatus.className = 'report-status info';
    const fd = new FormData();
    fd.append('_subject', 'CRAGE Masterclass · Pre-Class Knowledge Check report · ' + participant.name);
    fd.append('name', participant.name);
    fd.append('email', participant.email);
    fd.append('total_score', result.correct + ' / ' + result.total);
    fd.append('percentage', result.pct + '%');
    fd.append('time_taken_seconds', String(result.timeSeconds));
    fd.append('time_taken', Math.floor(result.timeSeconds / 60) + 'm ' + pad2(result.timeSeconds % 60) + 's');
    fd.append('weak_domain_count', String(result.weakDomains.length));
    fd.append('weak_domains', result.weakDomains.map((d) => 'M' + d.m + ' ' + d.name + ' (' + d.pct + '%)').join(' | ') || 'none');
    Object.entries(result.perModule).forEach(([m, v]) => {
      const pct = v.total ? Math.round(100 * v.correct / v.total) : 0;
      fd.append('module_M' + m, v.correct + '/' + v.total + ' (' + pct + '%) — ' + v.name);
    });
    fd.append('report', buildReportLines(result));
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST', body: fd, headers: { 'Accept': 'application/json' },
      });
      if (res.ok) {
        reportStatus.textContent = '✓ Your report has been sent to the trainer.';
        reportStatus.className = 'report-status ok';
      } else {
        reportStatus.innerHTML = '⚠ The report did not go through automatically. ' +
          'Please screenshot this page and send it to your trainer.';
        reportStatus.className = 'report-status warn';
      }
    } catch (e) {
      reportStatus.innerHTML = '⚠ Network error sending report. Please screenshot this page and send it to your trainer.';
      reportStatus.className = 'report-status warn';
    }
  }

  function finalise(autoSubmit) {
    if (submitted) return;
    const result = buildResult();
    showResult(result, !!autoSubmit);
  }

  // ---- Anti-copy wiring ----
  function disableSelection() {
    document.body.classList.add('no-select');
    document.addEventListener('copy', preventClipboard, true);
    document.addEventListener('cut', preventClipboard, true);
    document.addEventListener('paste', preventClipboard, true);
    document.addEventListener('contextmenu', preventCtx, true);
    document.addEventListener('selectstart', preventDefault, true);
    document.addEventListener('dragstart', preventDefault, true);
    document.addEventListener('keydown', preventCopyKeys, true);
  }
  function enableSelection() {
    document.body.classList.remove('no-select');
    document.removeEventListener('copy', preventClipboard, true);
    document.removeEventListener('cut', preventClipboard, true);
    document.removeEventListener('paste', preventClipboard, true);
    document.removeEventListener('contextmenu', preventCtx, true);
    document.removeEventListener('selectstart', preventDefault, true);
    document.removeEventListener('dragstart', preventDefault, true);
    document.removeEventListener('keydown', preventCopyKeys, true);
  }
  function preventClipboard(e) { e.preventDefault(); }
  function preventCtx(e) { e.preventDefault(); }
  function preventDefault(e) { e.preventDefault(); }
  function preventCopyKeys(e) {
    if ((e.ctrlKey || e.metaKey) && ['c','C','v','V','x','X','a','A','p','P','s','S','u','U'].includes(e.key)) {
      e.preventDefault();
    }
  }
  window.addEventListener('beforeunload', (e) => {
    if (!submitted && timerHandle) {
      e.preventDefault();
      e.returnValue = '';
    }
  });

  // ---- Begin flow ----
  function actuallyBeginQuiz() {
    preEl.hidden = true;
    qScreen.hidden = false;
    rScreen.hidden = true;
    idx = 0;
    answers = new Array(Q.length).fill(null);
    submitted = false;
    renderQuestion();
    startTimer();
    disableSelection();
  }

  function tryBegin() {
    const nameEl = $('#quiz-name');
    const emailEl = $('#quiz-email');
    const name = (nameEl.value || '').trim();
    const email = (emailEl.value || '').trim();
    if (!name || !email) {
      preStatus.textContent = '⚠ Please enter your name and email so your report can be sent to the trainer.';
      preStatus.className = 'qform-status warn';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      preStatus.textContent = '⚠ Please enter a valid email address.';
      preStatus.className = 'qform-status warn';
      return;
    }
    participant.name = name;
    participant.email = email;
    preStatus.textContent = '';
    preStatus.className = 'qform-status';

    // Gate: require the preclass access code.
    if (window.Gates && Gates.isUnlocked('preclass')) {
      actuallyBeginQuiz();
    } else if (window.Gates) {
      Gates.prompt('preclass', () => actuallyBeginQuiz());
    } else {
      actuallyBeginQuiz();
    }
  }

  // ---- Bindings ----
  beginBtn.addEventListener('click', tryBegin);
  prevBtn.addEventListener('click', () => { if (idx > 0) { idx--; renderQuestion(); } });
  nextBtn.addEventListener('click', () => { if (idx < Q.length - 1) { idx++; renderQuestion(); } });
  submitBtn.addEventListener('click', () => {
    const unanswered = answers.filter((a) => a === null).length;
    const msg = unanswered > 0
      ? unanswered + ' question(s) left unanswered. Submit anyway?'
      : 'Submit your quiz? You cannot resume after this.';
    if (!confirm(msg)) return;
    finalise(false);
  });

  examProgress.textContent = '— / ' + Q.length;
})();
