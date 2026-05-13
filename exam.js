// CRAGE Practice Exam · UI + scoring.
// Timer starts when the user clicks Begin. Copy/paste/right-click/text-select
// are all disabled on the question screen. After submission the user sees a
// final score, percentage, time taken, and pass/fail verdict — no per-question
// review.
(() => {
  const PASS_PCT = 70;
  const QS = window.QUESTIONS || [];

  const $ = (s) => document.querySelector(s);
  const pre = $('#pre-exam');
  const qScreen = $('#question-screen');
  const rScreen = $('#result-screen');
  const beginBtn = $('#begin-btn');
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

  let answers = new Array(QS.length).fill(null);
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

  // === Bindings ===
  beginBtn.addEventListener('click', () => {
    pre.hidden = true;
    qScreen.hidden = false;
    rScreen.hidden = true;
    idx = 0;
    answers = new Array(QS.length).fill(null);
    renderQuestion();
    startTimer();
    disableSelection();
  });
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
    examProgress.textContent = '0 / ' + QS.length;
  });

  examProgress.textContent = '0 / ' + QS.length;
})();
