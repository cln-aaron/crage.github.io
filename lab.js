// Lab page renderer. Pulls the lab config from labs.js by ?id= and renders
// the scenario/artifacts/challenge in the centre pane and either the CTF
// mission sidebar or the God Mode walkthrough on the left.
(() => {
  const params = new URLSearchParams(location.search);
  const labId = params.get('id');
  const isGod = params.get('mode') === 'god' && sessionStorage.getItem('crage:god-unlock') === 'true';
  const MODE = isGod ? 'god' : 'ctf';

  const lab = (window.LABS && LABS.byId && LABS.byId[labId]) || null;
  const titleBar = document.getElementById('lab-title-bar');
  const subBar = document.getElementById('lab-sub-bar');
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');
  const modeBadge = document.getElementById('mode-badge');
  const labFoot = document.getElementById('lab-foot');
  const hubLink = document.getElementById('hub-link');
  hubLink.href = 'app.html?mode=' + MODE;

  modeBadge.textContent = MODE === 'god' ? 'GOD MODE' : 'CHALLENGE';
  modeBadge.className = 'badge ' + (MODE === 'god' ? 'god' : 'ctf');

  if (!lab) {
    titleBar.textContent = 'Lab not found';
    content.innerHTML = '<div class="scenario"><p>Unknown lab id: <code>' +
      (labId || '(none)') + '</code>. <a href="app.html?mode=' + MODE + '">Back to hub</a>.</p></div>';
    return;
  }

  // Title bar + footer
  document.title = 'CRAGE Lab · ' + lab.id.toUpperCase() + ' · ' + lab.title;
  titleBar.textContent = lab.title;
  subBar.textContent = '// Module ' + lab.module + ' · ' + lab.id.toUpperCase();
  labFoot.innerHTML = 'Module ' + lab.module + ' · ' + lab.title +
    ' &middot; <a href="app.html?mode=' + MODE + '" class="credit-link">back to hub</a>';

  // Prev/next nav within module
  const siblings = (LABS.byModule[lab.module] || []).slice().sort((a, b) => a.idx - b.idx);
  const idx = siblings.findIndex((l) => l.id === lab.id);
  const navHtml = siblings.map((l, i) => {
    return '<a href="lab.html?id=' + l.id + '&mode=' + MODE + '"' +
      (i === idx ? ' class="active"' : '') + '>' +
      l.id.toUpperCase().replace('M' + lab.module + 'L', 'L') + '</a>';
  }).join('');
  document.getElementById('lab-nav').innerHTML = navHtml;

  // Render content (scenario + artifacts + challenge)
  const blocks = [];
  blocks.push('<h1>' + lab.title + '</h1>');
  blocks.push('<div class="lab-sub">Module ' + lab.module + ' · ' + (lab.moduleTitle || '') +
    ' · ' + lab.id.toUpperCase() + '</div>');

  blocks.push('<div class="scenario"><h3>Scenario</h3>' + lab.scenario + '</div>');

  if (lab.artifacts && lab.artifacts.length) {
    lab.artifacts.forEach((a) => {
      blocks.push(
        '<div class="artifact"><h3>Artifact · ' + CTF.escapeHtml(a.title) + '</h3>' +
        (a.collapsed
          ? '<details' + (a.open ? ' open' : '') + '><summary>show / hide</summary>' + a.body + '</details>'
          : a.body) +
        '</div>'
      );
    });
  }

  blocks.push(
    '<div class="challenge"><h3>Your challenge</h3>' + lab.challenge +
    '<div class="flag-format">Flag format: <code>' + CTF.escapeHtml(lab.flagFormat || 'crage{...}') + '</code></div>' +
    '</div>'
  );

  if (lab.interactive) {
    blocks.push('<div class="interactive"><h3>Hands-on · ' + CTF.escapeHtml(lab.interactive.label || lab.interactive.widget) + '</h3>' +
      '<div id="widget-mount"></div></div>');
  }

  content.innerHTML = blocks.join('');

  // Mount interactive widget if present
  if (lab.interactive) {
    const widgetMount = document.getElementById('widget-mount');
    const widgetFn = window.LAB_WIDGETS && window.LAB_WIDGETS[lab.interactive.widget];
    if (widgetFn) {
      widgetFn(widgetMount, lab.interactive.config, {
        isGod: MODE === 'god',
        onSolve: () => {
          if (MODE !== 'ctf') return;
          const flagInput = document.getElementById('flag-input');
          const flagSubmit = document.getElementById('flag-submit');
          if (flagInput && flagSubmit) {
            flagInput.value = lab.flag;
            flagSubmit.click();
          }
        },
      });
    } else {
      widgetMount.innerHTML = '<p style="color:var(--danger)">unknown widget: ' + CTF.escapeHtml(lab.interactive.widget) + '</p>';
    }
  }

  // Sidebar: CTF mission OR God walkthrough
  if (MODE === 'ctf') {
    CTF.register({
      id: lab.id,
      name: lab.title,
      objective: lab.objective,
      hints: lab.hints,
      flagHash: lab.flagHash,
    });
    CTF.installMissionSidebar(sidebar);
  } else {
    sidebar.classList.add('god');
    const stepsHtml = (lab.god || []).map((s, i) =>
      '<li class="god-step">' +
        '<div class="step-head"><span class="num">' + (i + 1) + '</span><span class="label">' +
          CTF.escapeHtml(s.label) + '</span></div>' +
        (s.body ? '<p>' + s.body + '</p>' : '') +
        (s.say ? '<div class="say">' + s.say + '</div>' : '') +
      '</li>').join('');

    sidebar.innerHTML =
      '<h2>God Mode :: walkthrough</h2>' +
      '<div class="mission-objective" style="border-left-color: var(--gold)">' +
        '<div class="mission-tag">// objective</div>' +
        '<p>' + CTF.inlineFmt(lab.objective) + '</p>' +
      '</div>' +
      '<ol class="steps">' + stepsHtml + '</ol>' +
      '<div class="god-answer"><span class="lbl">// flag</span><strong>' +
        CTF.escapeHtml(lab.flag || '(see walkthrough)') + '</strong></div>' +
      (lab.godNotes ? '<div class="say" style="margin-top:0.8rem">' + lab.godNotes + '</div>' : '') +
      '<div class="guide-foot"><a class="mission-link" href="app.html?mode=god">← back to hub</a></div>';
  }
})();
