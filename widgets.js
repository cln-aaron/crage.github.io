// CRAGE Lab · interactive widget library.
//
// Each widget is a self-contained constructor that mounts into a DOM
// container, owns its own state, and calls back when the user reaches a
// correct solution. It does not know about CTF scoring directly — it just
// notifies the lab framework via ctx.onSolve(), which then auto-fills and
// submits the flag.
//
// Widgets implemented:
//   classify       — items into buckets (covers stack mapping, RACI, etc.)
//   sortable       — re-order a list (priority, sequencing)
//   checklist      — multi-select with required/forbidden items
//   decision_tree  — Q&A wizard with branching, terminal nodes carry a label
//   sliders        — numeric inputs with a derived metric and a target
//   annotator      — clickable spans in a passage; toggle on/off
//   policy_builder — structured form with selects/inputs and required values
//   terminal       — tiny REPL with scripted command responses
//
// Each widget also supports a "godPrefill" mode (instructor view) that
// pre-fills the widget with the correct solution + a banner.

(function () {
  'use strict';

  const W = {};

  // ----- helpers -----
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
  const fmt = (s) => esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  const $ = (host, sel) => host.querySelector(sel);

  function statusEl() {
    const d = document.createElement('div');
    d.className = 'widget-status';
    return d;
  }
  function setStatus(el, msg, kind) {
    el.textContent = msg;
    el.className = 'widget-status' + (kind ? ' ' + kind : '');
  }

  function godBanner() {
    return '<div class="god-banner">// instructor view · solution pre-filled · click CHECK to verify</div>';
  }

  // ============================================================
  // 1. CLASSIFY — items into buckets via click-to-place
  // ============================================================
  W.classify = function (mount, cfg, ctx) {
    // cfg: { prompt?, items: [{id, text}], buckets: [{id, label, accent?}],
    //        solution: { itemId: bucketId } }
    const placement = {}; // itemId -> bucketId | null
    cfg.items.forEach((it) => { placement[it.id] = null; });
    let selected = null;

    const html = [];
    if (ctx.isGod) html.push(godBanner());
    if (cfg.prompt) html.push('<p class="widget-prompt">' + fmt(cfg.prompt) + '</p>');
    html.push('<div class="classify">');
    html.push('<div class="classify-pool"><div class="classify-pool-head">// items (click to select)</div><div class="classify-items" id="cl-pool"></div></div>');
    html.push('<div class="classify-buckets">');
    cfg.buckets.forEach((b) => {
      html.push('<div class="classify-bucket" data-bid="' + b.id + '">' +
        '<div class="classify-bucket-head">' + esc(b.label) + '</div>' +
        '<div class="classify-bucket-body" data-bid="' + b.id + '"></div></div>');
    });
    html.push('</div></div>');
    html.push('<div class="widget-actions"><button class="ghost-btn" id="cl-reset">RESET</button>' +
      '<button class="ghost-btn check" id="cl-check">CHECK</button></div>');
    mount.innerHTML = html.join('');
    const status = statusEl();
    mount.appendChild(status);

    function render() {
      const pool = $(mount, '#cl-pool');
      pool.innerHTML = '';
      cfg.items.forEach((it) => {
        if (placement[it.id]) return;
        const chip = document.createElement('button');
        chip.className = 'classify-chip' + (selected === it.id ? ' selected' : '');
        chip.textContent = it.text;
        chip.addEventListener('click', () => {
          selected = (selected === it.id ? null : it.id);
          render();
        });
        pool.appendChild(chip);
      });
      cfg.buckets.forEach((b) => {
        const body = mount.querySelector('.classify-bucket-body[data-bid="' + b.id + '"]');
        body.innerHTML = '';
        cfg.items.forEach((it) => {
          if (placement[it.id] !== b.id) return;
          const chip = document.createElement('button');
          chip.className = 'classify-chip placed';
          chip.textContent = it.text;
          chip.addEventListener('click', () => {
            placement[it.id] = null;
            render();
          });
          body.appendChild(chip);
        });
      });
    }

    mount.querySelectorAll('.classify-bucket').forEach((b) => {
      b.addEventListener('click', (e) => {
        // Click anywhere on the bucket — but only act if an item is selected
        if (e.target.closest('.classify-chip.placed')) return;
        if (!selected) return;
        placement[selected] = b.dataset.bid;
        selected = null;
        render();
      });
    });

    $(mount, '#cl-reset').addEventListener('click', () => {
      cfg.items.forEach((it) => { placement[it.id] = null; });
      selected = null;
      setStatus(status, '');
      render();
    });

    $(mount, '#cl-check').addEventListener('click', () => {
      const unplaced = cfg.items.filter((it) => !placement[it.id]);
      if (unplaced.length) {
        setStatus(status, 'still ' + unplaced.length + ' item(s) unplaced.', 'warn');
        return;
      }
      const wrong = cfg.items.filter((it) => placement[it.id] !== cfg.solution[it.id]);
      if (wrong.length) {
        setStatus(status, '✗ ' + wrong.length + ' item(s) misplaced.', 'danger');
        return;
      }
      setStatus(status, '✓ classification correct — flag unlocked.', 'ok');
      ctx.onSolve();
    });

    if (ctx.isGod) {
      cfg.items.forEach((it) => { placement[it.id] = cfg.solution[it.id]; });
    }
    render();
  };

  // ============================================================
  // 2. SORTABLE — drag-or-arrow reorder
  // ============================================================
  W.sortable = function (mount, cfg, ctx) {
    // cfg: { prompt?, items: [{id, text}], correctOrder: [id,...] }
    let order = cfg.items.map((i) => i.id);
    if (ctx.isGod) order = cfg.correctOrder.slice();
    else order = order.slice().sort(() => Math.random() - 0.5);

    const html = [];
    if (ctx.isGod) html.push(godBanner());
    if (cfg.prompt) html.push('<p class="widget-prompt">' + fmt(cfg.prompt) + '</p>');
    html.push('<ol class="sortable" id="srt"></ol>');
    html.push('<div class="widget-actions"><button class="ghost-btn check" id="srt-check">CHECK ORDER</button></div>');
    mount.innerHTML = html.join('');
    const status = statusEl();
    mount.appendChild(status);

    function render() {
      const list = $(mount, '#srt');
      list.innerHTML = '';
      order.forEach((id, i) => {
        const it = cfg.items.find((x) => x.id === id);
        const li = document.createElement('li');
        li.className = 'sortable-row';
        li.innerHTML =
          '<span class="sortable-rank">' + (i + 1) + '</span>' +
          '<span class="sortable-text">' + esc(it.text) + '</span>' +
          '<span class="sortable-ctrls">' +
            '<button class="ghost-btn small" data-act="up" ' + (i === 0 ? 'disabled' : '') + '>▲</button>' +
            '<button class="ghost-btn small" data-act="down" ' + (i === order.length - 1 ? 'disabled' : '') + '>▼</button>' +
          '</span>';
        li.querySelector('[data-act="up"]').addEventListener('click', () => {
          [order[i - 1], order[i]] = [order[i], order[i - 1]];
          render();
        });
        li.querySelector('[data-act="down"]').addEventListener('click', () => {
          [order[i + 1], order[i]] = [order[i], order[i + 1]];
          render();
        });
        list.appendChild(li);
      });
    }
    render();

    $(mount, '#srt-check').addEventListener('click', () => {
      const ok = order.every((id, i) => id === cfg.correctOrder[i]);
      if (ok) {
        setStatus(status, '✓ ordering correct — flag unlocked.', 'ok');
        ctx.onSolve();
      } else {
        const corrects = order.filter((id, i) => id === cfg.correctOrder[i]).length;
        setStatus(status, '✗ ' + corrects + ' / ' + order.length + ' positions correct.', 'danger');
      }
    });
  };

  // ============================================================
  // 3. CHECKLIST — multi-select with required + forbidden
  // ============================================================
  W.checklist = function (mount, cfg, ctx) {
    // cfg: { prompt?, items: [{id, text}], correct: [id,...] }  // only `correct` ids should be selected
    const sel = new Set();
    if (ctx.isGod) cfg.correct.forEach((id) => sel.add(id));

    const html = [];
    if (ctx.isGod) html.push(godBanner());
    if (cfg.prompt) html.push('<p class="widget-prompt">' + fmt(cfg.prompt) + '</p>');
    html.push('<div class="checklist" id="chk"></div>');
    html.push('<div class="widget-actions"><button class="ghost-btn check" id="chk-check">CHECK SELECTION</button></div>');
    mount.innerHTML = html.join('');
    const status = statusEl();
    mount.appendChild(status);

    function render() {
      const list = $(mount, '#chk');
      list.innerHTML = '';
      cfg.items.forEach((it) => {
        const row = document.createElement('label');
        row.className = 'checklist-row' + (sel.has(it.id) ? ' selected' : '');
        row.innerHTML =
          '<input type="checkbox" ' + (sel.has(it.id) ? 'checked' : '') + ' data-id="' + it.id + '">' +
          '<span>' + fmt(it.text) + '</span>';
        row.querySelector('input').addEventListener('change', (e) => {
          if (e.target.checked) sel.add(it.id); else sel.delete(it.id);
          render();
        });
        list.appendChild(row);
      });
    }
    render();

    $(mount, '#chk-check').addEventListener('click', () => {
      const correct = new Set(cfg.correct);
      const missing = cfg.correct.filter((id) => !sel.has(id));
      const extra = Array.from(sel).filter((id) => !correct.has(id));
      if (!missing.length && !extra.length) {
        setStatus(status, '✓ selection matches — flag unlocked.', 'ok');
        ctx.onSolve();
      } else {
        setStatus(status, '✗ ' + missing.length + ' missing, ' + extra.length + ' extra.', 'danger');
      }
    });
  };

  // ============================================================
  // 4. DECISION_TREE — Q&A wizard
  // ============================================================
  W.decision_tree = function (mount, cfg, ctx) {
    // cfg: { start, nodes: { nid: { q, a, b, ... } | { result, label } }, correctTerminal }
    let cursor = cfg.start;
    const path = [];

    const html = [];
    if (ctx.isGod) html.push(godBanner());
    if (cfg.prompt) html.push('<p class="widget-prompt">' + fmt(cfg.prompt) + '</p>');
    html.push('<div class="dtree" id="dt"></div>');
    html.push('<div class="widget-actions"><button class="ghost-btn" id="dt-restart">RESTART</button></div>');
    mount.innerHTML = html.join('');
    const status = statusEl();
    mount.appendChild(status);

    function step(nid) {
      cursor = nid;
      const n = cfg.nodes[nid];
      const tree = $(mount, '#dt');
      if (n.result) {
        path.push({ q: '(verdict)', a: n.label });
        tree.innerHTML = renderPath() +
          '<div class="dtree-terminal' + (nid === cfg.correctTerminal ? ' ok' : ' danger') + '">' +
          '<div class="dtree-tag">// verdict</div>' +
          '<div class="dtree-result">' + esc(n.label) + '</div></div>';
        if (nid === cfg.correctTerminal) {
          setStatus(status, '✓ correct verdict — flag unlocked.', 'ok');
          ctx.onSolve();
        } else {
          setStatus(status, '✗ wrong verdict — restart and retry.', 'danger');
        }
        return;
      }
      tree.innerHTML = renderPath() +
        '<div class="dtree-q"><div class="dtree-tag">// question</div>' +
        '<p>' + fmt(n.q) + '</p>' +
        '<div class="dtree-opts">' +
          n.options.map((o, i) =>
            '<button class="dtree-opt" data-go="' + o.go + '" data-label="' + esc(o.label) + '">' +
              esc(o.label) + '</button>'
          ).join('') +
        '</div></div>';
      tree.querySelectorAll('.dtree-opt').forEach((b) => {
        b.addEventListener('click', () => {
          path.push({ q: n.q, a: b.dataset.label });
          step(b.dataset.go);
        });
      });
    }

    function renderPath() {
      if (!path.length) return '';
      return '<ul class="dtree-path">' +
        path.slice(0, -1).map((p) =>
          '<li><span class="dtree-q-mini">' + esc(p.q) + '</span> → <strong>' + esc(p.a) + '</strong></li>'
        ).join('') + '</ul>';
    }

    $(mount, '#dt-restart').addEventListener('click', () => {
      path.length = 0;
      setStatus(status, '');
      step(cfg.start);
    });

    if (ctx.isGod) {
      // walk the tree following the path that leads to correctTerminal
      const target = cfg.correctTerminal;
      function findPath(from) {
        if (from === target) return [];
        const n = cfg.nodes[from];
        if (n.result) return null;
        for (const o of n.options) {
          const sub = findPath(o.go);
          if (sub) return [{ go: o.go, label: o.label, q: n.q }].concat(sub);
        }
        return null;
      }
      const p = findPath(cfg.start) || [];
      // Walk programmatically
      step(cfg.start);
      p.forEach((s) => {
        path.push({ q: s.q, a: s.label });
        cursor = s.go;
      });
      step(cursor);
    } else {
      step(cfg.start);
    }
  };

  // ============================================================
  // 5. SLIDERS — numeric inputs with derived metric
  // ============================================================
  W.sliders = function (mount, cfg, ctx) {
    // cfg: { prompt?, sliders: [{id, label, min, max, step, default, suffix?}],
    //        compute: "L*I" or string js-expression on state,
    //        display: "Composite: {result}",
    //        target: { min, max } | exact value,  // {result} must satisfy
    //        solutionState: optional { id: value } for god-prefill,
    //        rationale?: string shown after correct }
    const state = {};
    cfg.sliders.forEach((s) => { state[s.id] = (ctx.isGod && cfg.solutionState) ? cfg.solutionState[s.id] : s.default; });

    const html = [];
    if (ctx.isGod) html.push(godBanner());
    if (cfg.prompt) html.push('<p class="widget-prompt">' + fmt(cfg.prompt) + '</p>');
    html.push('<div class="sliders">');
    cfg.sliders.forEach((s) => {
      html.push('<div class="slider-row">' +
        '<label>' + esc(s.label) + '</label>' +
        '<input type="range" min="' + s.min + '" max="' + s.max + '" step="' + (s.step || 1) + '" value="' + state[s.id] + '" data-id="' + s.id + '">' +
        '<span class="slider-val" data-id="' + s.id + '">' + state[s.id] + (s.suffix || '') + '</span>' +
        '</div>');
    });
    html.push('</div>');
    html.push('<div class="slider-readout" id="sl-readout"></div>');
    html.push('<div class="widget-actions"><button class="ghost-btn check" id="sl-check">CHECK</button></div>');
    mount.innerHTML = html.join('');
    const status = statusEl();
    mount.appendChild(status);

    function compute() {
      let r;
      try {
        // Build a tiny scope and eval the expression.
        const fn = new Function(...Object.keys(state), 'return (' + cfg.compute + ')');
        r = fn(...Object.values(state));
      } catch (_) { r = null; }
      return r;
    }

    function render() {
      cfg.sliders.forEach((s) => {
        const inp = mount.querySelector('input[data-id="' + s.id + '"]');
        const val = mount.querySelector('.slider-val[data-id="' + s.id + '"]');
        inp.value = state[s.id];
        val.textContent = state[s.id] + (s.suffix || '');
      });
      const r = compute();
      let txt = (cfg.display || 'result: {result}').replace('{result}', String(r));
      $(mount, '#sl-readout').textContent = txt;
    }

    cfg.sliders.forEach((s) => {
      mount.querySelector('input[data-id="' + s.id + '"]').addEventListener('input', (e) => {
        state[s.id] = +e.target.value;
        render();
      });
    });

    $(mount, '#sl-check').addEventListener('click', () => {
      const r = compute();
      let pass = false;
      if (typeof cfg.target === 'object' && cfg.target !== null) {
        pass = (r >= cfg.target.min && r <= cfg.target.max);
      } else {
        pass = (r === cfg.target);
      }
      // Also require solutionState match if specified.
      if (pass && cfg.solutionState) {
        pass = Object.keys(cfg.solutionState).every((k) => state[k] === cfg.solutionState[k]);
      }
      if (pass) {
        setStatus(status, '✓ ' + (cfg.successText || 'target met') + ' — flag unlocked.', 'ok');
        ctx.onSolve();
      } else {
        setStatus(status, '✗ result = ' + r + ' — does not meet target.', 'danger');
      }
    });

    render();
  };

  // ============================================================
  // 6. ANNOTATOR — clickable spans in a passage
  // ============================================================
  W.annotator = function (mount, cfg, ctx) {
    // cfg: { prompt?, passage: "Plain text with <s id='t1'>spans</s>...",
    //        spans: [{id, text, correct?:bool}], correct: [id,...], minRequired? }
    const sel = new Set();
    if (ctx.isGod) cfg.correct.forEach((id) => sel.add(id));

    const html = [];
    if (ctx.isGod) html.push(godBanner());
    if (cfg.prompt) html.push('<p class="widget-prompt">' + fmt(cfg.prompt) + '</p>');
    // Render passage with spans
    let pass = cfg.passage;
    cfg.spans.forEach((sp) => {
      const re = new RegExp('\\{\\{' + sp.id + '\\}\\}', 'g');
      pass = pass.replace(re, '<button class="anno-span" data-id="' + sp.id + '">' + esc(sp.text) + '</button>');
    });
    html.push('<div class="annotator-passage">' + pass + '</div>');
    html.push('<div class="widget-actions"><button class="ghost-btn" id="an-reset">CLEAR</button>' +
      '<button class="ghost-btn check" id="an-check">CHECK</button></div>');
    mount.innerHTML = html.join('');
    const status = statusEl();
    mount.appendChild(status);

    function render() {
      mount.querySelectorAll('.anno-span').forEach((b) => {
        b.classList.toggle('selected', sel.has(b.dataset.id));
      });
    }
    mount.querySelectorAll('.anno-span').forEach((b) => {
      b.addEventListener('click', () => {
        const id = b.dataset.id;
        if (sel.has(id)) sel.delete(id); else sel.add(id);
        render();
      });
    });
    $(mount, '#an-reset').addEventListener('click', () => { sel.clear(); render(); setStatus(status, ''); });

    $(mount, '#an-check').addEventListener('click', () => {
      const correct = new Set(cfg.correct);
      const missing = cfg.correct.filter((id) => !sel.has(id));
      const extra = Array.from(sel).filter((id) => !correct.has(id));
      if (!missing.length && !extra.length) {
        setStatus(status, '✓ all spans correctly identified — flag unlocked.', 'ok');
        ctx.onSolve();
      } else {
        setStatus(status, '✗ ' + missing.length + ' missing, ' + extra.length + ' wrong.', 'danger');
      }
    });

    render();
  };

  // ============================================================
  // 7. POLICY_BUILDER — structured form with required values
  // ============================================================
  W.policy_builder = function (mount, cfg, ctx) {
    // cfg: { prompt?, fields: [{id, label, kind:'select'|'text'|'multi', options?, correct, hint?}],
    //        successText? }
    const state = {};
    cfg.fields.forEach((f) => {
      if (ctx.isGod) state[f.id] = f.correct;
      else state[f.id] = f.kind === 'multi' ? [] : '';
    });

    const html = [];
    if (ctx.isGod) html.push(godBanner());
    if (cfg.prompt) html.push('<p class="widget-prompt">' + fmt(cfg.prompt) + '</p>');
    html.push('<div class="policy">');
    cfg.fields.forEach((f) => {
      html.push('<div class="policy-row">' +
        '<label>' + esc(f.label) + '</label>');
      if (f.kind === 'select') {
        html.push('<select data-id="' + f.id + '">' +
          '<option value="">— pick —</option>' +
          f.options.map((o) => '<option value="' + esc(o) + '"' + (state[f.id] === o ? ' selected' : '') + '>' + esc(o) + '</option>').join('') +
          '</select>');
      } else if (f.kind === 'multi') {
        html.push('<div class="policy-multi">' +
          f.options.map((o) =>
            '<label class="policy-multi-opt"><input type="checkbox" data-id="' + f.id + '" data-val="' + esc(o) + '"' +
            (state[f.id].includes(o) ? ' checked' : '') + '>' + esc(o) + '</label>'
          ).join('') +
          '</div>');
      } else {
        html.push('<input type="text" data-id="' + f.id + '" value="' + esc(state[f.id]) + '">');
      }
      if (f.hint) html.push('<div class="policy-hint">' + esc(f.hint) + '</div>');
      html.push('</div>');
    });
    html.push('</div>');
    html.push('<div class="widget-actions"><button class="ghost-btn check" id="pb-check">SUBMIT POLICY</button></div>');
    mount.innerHTML = html.join('');
    const status = statusEl();
    mount.appendChild(status);

    mount.querySelectorAll('select[data-id]').forEach((s) => {
      s.addEventListener('change', (e) => { state[e.target.dataset.id] = e.target.value; });
    });
    mount.querySelectorAll('input[type="text"][data-id]').forEach((i) => {
      i.addEventListener('input', (e) => { state[e.target.dataset.id] = e.target.value; });
    });
    mount.querySelectorAll('input[type="checkbox"][data-id]').forEach((i) => {
      i.addEventListener('change', (e) => {
        const id = e.target.dataset.id, v = e.target.dataset.val;
        if (e.target.checked) { if (!state[id].includes(v)) state[id].push(v); }
        else { state[id] = state[id].filter((x) => x !== v); }
      });
    });

    $(mount, '#pb-check').addEventListener('click', () => {
      let bad = 0;
      cfg.fields.forEach((f) => {
        const got = state[f.id];
        if (f.kind === 'multi') {
          const corr = new Set(f.correct);
          if (!(got.length === f.correct.length && got.every((g) => corr.has(g)))) bad++;
        } else {
          const expected = String(f.correct).trim().toLowerCase();
          const actual = String(got).trim().toLowerCase();
          if (expected !== actual) bad++;
        }
      });
      if (bad === 0) {
        setStatus(status, '✓ policy complete and valid — flag unlocked.', 'ok');
        ctx.onSolve();
      } else {
        setStatus(status, '✗ ' + bad + ' field(s) need review.', 'danger');
      }
    });
  };

  // ============================================================
  // 8. TERMINAL — tiny scripted REPL
  // ============================================================
  W.terminal = function (mount, cfg, ctx) {
    // cfg: { prompt?, banner?, prompts: { '/^cmd ?$/': "response" | function },
    //        required: [regex],   // commands the user must successfully run
    //        prompt_str?: 'crage@lab:~$ ' }
    const required = (cfg.required || []).map((r) => ({ re: new RegExp(r), hit: false }));
    const promptStr = cfg.prompt_str || 'crage@lab:~$ ';

    const html = [];
    if (ctx.isGod) html.push(godBanner());
    if (cfg.prompt) html.push('<p class="widget-prompt">' + fmt(cfg.prompt) + '</p>');
    html.push('<div class="lab-terminal">' +
      '<div class="lab-term-head"><span class="dotsbar"><i></i><i></i><i></i></span><span class="lab-term-title">' + esc(cfg.terminal_title || 'lab terminal') + '</span></div>' +
      '<div class="lab-term-body" id="tm-out"></div>' +
      '<div class="lab-term-input-row"><span class="lab-term-prompt">' + esc(promptStr) + '</span>' +
      '<input type="text" id="tm-in" autocomplete="off" spellcheck="false"></div>' +
      '</div>');
    if (cfg.required_help) {
      html.push('<div class="terminal-hint">' + fmt(cfg.required_help) + '</div>');
    }
    html.push('<div class="widget-actions"><button class="ghost-btn check" id="tm-check">CHECK PROGRESS</button></div>');
    mount.innerHTML = html.join('');
    const status = statusEl();
    mount.appendChild(status);

    const out = $(mount, '#tm-out');
    const input = $(mount, '#tm-in');

    function write(text, cls) {
      const div = document.createElement('div');
      div.className = 'lab-term-line' + (cls ? ' ' + cls : '');
      div.textContent = text;
      out.appendChild(div);
      out.scrollTop = out.scrollHeight;
    }
    function writeRaw(html, cls) {
      const div = document.createElement('div');
      div.className = 'lab-term-line' + (cls ? ' ' + cls : '');
      div.innerHTML = html;
      out.appendChild(div);
      out.scrollTop = out.scrollHeight;
    }

    if (cfg.banner) write(cfg.banner, 'banner');

    function run(cmd) {
      writeRaw('<span class="lab-term-prompt-line">' + esc(promptStr) + '</span>' + esc(cmd), 'cmd');
      let matched = false;
      for (const key of Object.keys(cfg.prompts || {})) {
        const re = new RegExp(key);
        if (re.test(cmd)) {
          let resp = cfg.prompts[key];
          if (typeof resp === 'function') resp = resp(cmd);
          (Array.isArray(resp) ? resp : String(resp).split('\n')).forEach((line) => {
            write(line, 'out');
          });
          matched = true;
          break;
        }
      }
      if (!matched) write('command not recognised. try `help`.', 'warn');
      required.forEach((r) => { if (r.re.test(cmd)) r.hit = true; });
    }

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const c = input.value.trim();
        input.value = '';
        if (c) run(c);
      }
    });

    $(mount, '#tm-check').addEventListener('click', () => {
      const missing = required.filter((r) => !r.hit);
      if (missing.length === 0) {
        setStatus(status, '✓ investigation complete — flag unlocked.', 'ok');
        ctx.onSolve();
      } else {
        setStatus(status, '✗ ' + missing.length + ' required step(s) not yet completed.', 'danger');
      }
    });

    if (ctx.isGod && cfg.god_script) {
      cfg.god_script.forEach((c) => run(c));
    }

    setTimeout(() => input.focus(), 100);
  };

  window.LAB_WIDGETS = W;
})();
