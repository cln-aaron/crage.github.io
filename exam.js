// CRAGE Practice Exam · UI + scoring.
// Timer starts when the user clicks Begin. Copy/paste/right-click/text-select
// are all disabled on the question screen. After submission the user sees a
// final score, percentage, time taken, and pass/fail verdict — no per-question
// review.
(() => {
  const PASS_PCT = 70;
  const SETS = {
    '1': { name: 'Set 1', gate: 'set1', questions: window.QUESTIONS || [] },
    '2': { name: 'Set 2', gate: 'set2', questions: window.QUESTIONS_SET2 || [] },
    '3': { name: 'Set 3', gate: 'set3', questions: window.QUESTIONS_SET3 || [] },
    '4': { name: 'Set 4', gate: 'set4', questions: window.QUESTIONS_SET4 || [] },
    '5': { name: 'Set 5', gate: 'set5', questions: window.QUESTIONS_SET5 || [] },
    '6': { name: 'Set 6', gate: 'set6', questions: window.QUESTIONS_SET6 || [] },
  };

  const $ = (s) => document.querySelector(s);
  const pre = $('#pre-exam');
  const qScreen = $('#question-screen');
  const rScreen = $('#result-screen');
  const beginSet1Btn = $('#begin-set1-btn');
  const beginSet2Btn = $('#begin-set2-btn');
  const beginSet3Btn = $('#begin-set3-btn');
  const beginSet4Btn = $('#begin-set4-btn');
  const beginSet5Btn = $('#begin-set5-btn');
  const beginSet6Btn = $('#begin-set6-btn');
  const prevBtn = $('#prev-btn');
  const nextBtn = $('#next-btn');
  const submitBtn = $('#submit-btn');
  const qNum = $('#question-num');
  const qTopic = $('#question-topic');
  const qBody = $('#question-body');
  const qOptions = $('#question-options');
  const answeredCount = $('#answered-count');
  const examTimer = $('#exam-timer');
  const examProgress = $('#exam-progress');
  const retakeBtn = $('#retake-btn');
  const examModeBadge = $('#exam-mode-badge');

  let activeSet = '1';
  let QS = SETS['1'].questions;
  let answers = [];
  let idx = 0;
  let startTime = 0;
  let timerHandle = null;
  let submitted = false;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function fmtTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  function startTimer() {
    startTime = Date.now();
    timerHandle = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      examTimer.textContent = fmtTime(elapsed);
    }, 1000);
  }

  function stopTimer() {
    if (timerHandle) clearInterval(timerHandle);
    timerHandle = null;
  }

  function elapsedSeconds() {
    return Math.floor((Date.now() - startTime) / 1000);
  }

  function renderQuestion() {
    const q = QS[idx];
    qNum.textContent = 'Question ' + (idx + 1) + ' of ' + QS.length;
    qTopic.textContent = '// ' + (q.topic || '').toLowerCase();
    qBody.innerHTML = esc(q.q);
    qOptions.innerHTML = '';
    ['A', 'B', 'C', 'D'].forEach((letter) => {
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
        wrap.parentNode.querySelectorAll('.exam-option').forEach((el) => el.classList.remove('selected'));
        wrap.classList.add('selected');
      });
      qOptions.appendChild(wrap);
    });
    prevBtn.disabled = (idx === 0);
    if (idx === QS.length - 1) {
      nextBtn.hidden = true;
      submitBtn.hidden = false;
    } else {
      nextBtn.hidden = false;
      submitBtn.hidden = true;
    }
    updateMeta();
  }

  function updateMeta() {
    const n = answers.filter((a) => a !== null).length;
    answeredCount.textContent = n;
    examProgress.textContent = (idx + 1) + ' / ' + QS.length;
  }

  function showResult() {
    submitted = true;
    stopTimer();
    pre.hidden = true;
    qScreen.hidden = true;
    rScreen.hidden = false;
    enableSelection();

    let correctCount = 0;
    QS.forEach((q, i) => {
      if (answers[i] === q.correct) correctCount++;
    });
    const pct = Math.round((correctCount / QS.length) * 1000) / 10;
    const pass = pct >= PASS_PCT;
    const taken = elapsedSeconds();

    $('#result-score').textContent = correctCount + ' / ' + QS.length;
    $('#result-pct').textContent = pct + '%';
    $('#result-time').textContent = fmtTime(taken).replace('0', '').slice(0, -3) + 'm ' + (taken % 60) + 's';
    $('#result-time').textContent = Math.floor(taken / 60) + 'm ' + (taken % 60).toString().padStart(2, '0') + 's';
    const verdictEl = $('#result-verdict');
    verdictEl.textContent = pass ? 'PASS' : 'FAIL';
    verdictEl.className = 'result-value ' + (pass ? 'pass' : 'fail');
    const banner = $('#result-banner');
    banner.textContent = pass
      ? '✓ Pass mark met — well done.'
      : '✗ Below the ' + PASS_PCT + '% pass mark — retake when ready.';
    banner.className = 'result-banner ' + (pass ? 'pass' : 'fail');
  }

  // === Anti-copy/paste/select wiring ===
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
    if ((e.ctrlKey || e.metaKey) && ['c', 'C', 'v', 'V', 'x', 'X', 'a', 'A', 'p', 'P', 's', 'S', 'u', 'U'].includes(e.key)) {
      e.preventDefault();
    }
  }

  // Warn on tab close / refresh during the exam.
  function beforeUnload(e) {
    if (!submitted && timerHandle) {
      e.preventDefault();
      e.returnValue = '';
      return '';
    }
  }
  window.addEventListener('beforeunload', beforeUnload);

  function beginSet(setKey) {
    activeSet = setKey;
    QS = SETS[setKey].questions;
    if (!QS || QS.length === 0) {
      alert('That set has no questions loaded.');
      return;
    }
    examModeBadge.textContent = 'EXAM · ' + SETS[setKey].name;
    pre.hidden = true;
    qScreen.hidden = false;
    rScreen.hidden = true;
    idx = 0;
    answers = new Array(QS.length).fill(null);
    renderQuestion();
    startTimer();
    disableSelection();
  }

  // === Bindings ===
  function gatedBegin(setKey) {
    const gate = SETS[setKey].gate;
    if (window.Gates && Gates.isUnlocked(gate)) { beginSet(setKey); return; }
    if (window.Gates) {
      Gates.prompt(gate, () => {
        refreshLocks();
        beginSet(setKey);
      });
    } else {
      beginSet(setKey);
    }
  }
  function refreshLocks() {
    Object.keys(SETS).forEach((k) => {
      const gate = SETS[k].gate;
      const lockEl = document.getElementById(gate + '-lock');
      if (lockEl && window.Gates && Gates.isUnlocked(gate)) {
        lockEl.textContent = '🔓';
        lockEl.classList.add('unlocked');
      }
    });
  }
  refreshLocks();
  beginSet1Btn.addEventListener('click', () => gatedBegin('1'));
  beginSet2Btn.addEventListener('click', () => gatedBegin('2'));
  beginSet3Btn.addEventListener('click', () => gatedBegin('3'));
  beginSet4Btn.addEventListener('click', () => gatedBegin('4'));
  beginSet5Btn.addEventListener('click', () => gatedBegin('5'));
  beginSet6Btn.addEventListener('click', () => gatedBegin('6'));
  prevBtn.addEventListener('click', () => {
    if (idx > 0) { idx--; renderQuestion(); }
  });
  nextBtn.addEventListener('click', () => {
    if (idx < QS.length - 1) { idx++; renderQuestion(); }
  });
  submitBtn.addEventListener('click', () => {
    const unanswered = answers.filter((a) => a === null).length;
    if (unanswered > 0) {
      if (!confirm(unanswered + ' question(s) left unanswered. Submit anyway?')) return;
    } else {
      if (!confirm('Submit exam? You cannot resume after this.')) return;
    }
    showResult();
  });
  retakeBtn.addEventListener('click', () => {
    submitted = false;
    rScreen.hidden = true;
    pre.hidden = false;
    examTimer.textContent = '00:00';
    examProgress.textContent = '— / —';
    examModeBadge.textContent = 'EXAM';
  });

  examProgress.textContent = '— / —';
})();
