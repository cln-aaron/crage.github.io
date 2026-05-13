// Generic access-code gate for Challenge Mode and Exam Practice Sets 1–4.
// Plaintext codes are NEVER in this file — only SHA-256 hashes.
// All codes expire at the EXPIRY_EPOCH_MS instant (Saturday 16 May 2026
// 23:59 Singapore time = 15:59:00 UTC). After that moment, no code is
// accepted regardless of what the user types.
//
// To rotate any code, compute the new SHA-256 and replace the matching hash:
//   $ printf '%s' 'NEW12DIGITCODE' | sha256sum
(() => {
  const EXPIRY_EPOCH_MS = 1778947140000; // Sat 16 May 2026 23:59 SGT
  const GATES = {
    challenge: { hash: '57c8e0bf674c21abd8a4a0d16a3808ba4d854d6777e0d5502590c96b82b3b04a', label: 'Challenge Mode' },
    set1:      { hash: '77eba9f4e5e2a93ad80c7257208d463ceaf6398f903f304ee154ce0b1f9be451', label: 'Practice Set 1' },
    set2:      { hash: 'cd48ed034d08cfa54f29f57cd51d2221596d9bb891ed578474c460ba6612f579', label: 'Practice Set 2' },
    set3:      { hash: '2afd3b7c5bcd1c012c4058eb2308917d9ef444b3ee9f7c3913c1c7eb4e42199e', label: 'Practice Set 3' },
    set4:      { hash: 'ac66d35e29b04678aa5d58328390e0b06547931fcb16ba6c02b732c4e01f150f', label: 'Practice Set 4' },
    set5:      { hash: 'd6e117a54f74fb34fe62a35abad6ad270d0a8d5dc5a261f562316e4956d36e01', label: 'Practice Set 5' },
    set6:      { hash: '44df122893b47a895ab651c128d68c63344b64211c10a0b908861fcc41566d91', label: 'Practice Set 6' },
  };
  const STORAGE_PREFIX = 'crage:gate:';

  async function sha256Hex(s) {
    const buf = new TextEncoder().encode(s);
    const hash = await crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(hash))
      .map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  function isExpired() { return Date.now() > EXPIRY_EPOCH_MS; }

  function isUnlocked(id) {
    if (isExpired()) return false;
    return sessionStorage.getItem(STORAGE_PREFIX + id) === 'true';
  }

  // Ensure exactly one modal exists in the DOM (lazy injection).
  function ensureModal() {
    let modal = document.getElementById('gate-modal');
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = 'gate-modal';
    modal.className = 'auth-modal';
    modal.hidden = true;
    modal.innerHTML =
      '<div class="auth-card">' +
        '<div class="auth-head">' +
          '<span class="auth-icon">🔒</span>' +
          '<span class="auth-title" id="gate-title">Access code required</span>' +
          '<button class="auth-close" id="gate-close" title="Close">×</button>' +
        '</div>' +
        '<div class="auth-body">' +
          '<p id="gate-msg">Enter the 12-digit access code to continue.</p>' +
          '<div class="auth-input-row">' +
            '<input type="password" inputmode="numeric" maxlength="12" pattern="[0-9]{12}" ' +
              'id="gate-input" autocomplete="off" placeholder="••••••••••••">' +
            '<button class="auth-submit" id="gate-submit">UNLOCK</button>' +
          '</div>' +
          '<div class="auth-status" id="gate-status"></div>' +
          '<div class="auth-hint">Access code is shared by the instructor at session start. Codes expire Sat 16 May 23:59 SGT.</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);
    return modal;
  }

  // Prompt the user to unlock a gate. Calls onSuccess() if already unlocked
  // or after successful unlock. Calls onCancel() if they bail.
  function prompt(id, onSuccess, onCancel) {
    if (!GATES[id]) {
      console.error('Unknown gate:', id);
      return;
    }
    if (isUnlocked(id)) { onSuccess && onSuccess(); return; }

    const modal = ensureModal();
    const input = modal.querySelector('#gate-input');
    const submit = modal.querySelector('#gate-submit');
    const close = modal.querySelector('#gate-close');
    const status = modal.querySelector('#gate-status');
    const title = modal.querySelector('#gate-title');
    const msg = modal.querySelector('#gate-msg');

    title.textContent = GATES[id].label + ' · access code required';
    msg.textContent = 'Enter the 12-digit access code to unlock ' + GATES[id].label + '.';
    input.value = '';
    status.textContent = '';
    status.className = 'auth-status';
    submit.disabled = false;

    if (isExpired()) {
      status.textContent = '✗ access codes expired (Sat 16 May 23:59 SGT).';
      status.className = 'auth-status danger';
      submit.disabled = true;
    }

    modal.hidden = false;
    setTimeout(() => input.focus(), 50);

    function closeModal() {
      modal.hidden = true;
      input.value = '';
      submit.disabled = false;
      // remove handlers so they don't stack across prompts
      submit.onclick = null;
      close.onclick = null;
      input.onkeydown = null;
      modal.onclick = null;
      onCancel && onCancel();
    }
    close.onclick = closeModal;
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };

    async function tryUnlock() {
      if (isExpired()) {
        status.textContent = '✗ access codes expired.';
        status.className = 'auth-status danger';
        return;
      }
      const code = (input.value || '').trim();
      if (!/^\d{12}$/.test(code)) {
        status.textContent = 'access code is exactly 12 digits.';
        status.className = 'auth-status warn';
        return;
      }
      submit.disabled = true;
      status.textContent = 'verifying...';
      status.className = 'auth-status info';
      try {
        const got = await sha256Hex(code);
        if (got === GATES[id].hash) {
          sessionStorage.setItem(STORAGE_PREFIX + id, 'true');
          status.textContent = '✓ access granted.';
          status.className = 'auth-status ok';
          setTimeout(() => {
            modal.hidden = true;
            submit.onclick = null;
            close.onclick = null;
            input.onkeydown = null;
            modal.onclick = null;
            onSuccess && onSuccess();
          }, 500);
        } else {
          status.textContent = '✗ access denied. wrong code.';
          status.className = 'auth-status danger';
          submit.disabled = false;
          input.select();
        }
      } catch (e) {
        status.textContent = 'crypto error: ' + e.message;
        status.className = 'auth-status danger';
        submit.disabled = false;
      }
    }

    submit.onclick = tryUnlock;
    input.onkeydown = (e) => {
      if (e.key === 'Enter') { e.preventDefault(); tryUnlock(); }
      if (e.key === 'Escape') closeModal();
    };
  }

  window.Gates = {
    isUnlocked,
    isExpired,
    prompt,
    EXPIRY_EPOCH_MS,
  };
})();
