# CRAGE Practitioner Labs

Hands-on lab exercises and a 100-question practice exam for the
**EC-Council CRAGE** (Certified Responsible AI Governance &amp; Ethics) class.

- 11 modules &times; 8 challenges = **88 labs** (3 scenario primers + 5 interactive hands-on labs per module).
- Two practice exams: **Set 1** (100 questions) and **Set 2** (200 questions), both covering all eleven modules.

Static site, no build step. Open `index.html` in a browser, or serve the
directory with any static file server (`python3 -m http.server`).

## Modes

- **Challenge Mode** &mdash; default. Each lab is a CTF-style challenge:
  a real-world artefact (model card, vendor DDQ, incident summary, risk
  register, &hellip;) plus an objective. Submit a flag. Three hints
  available, each costs points. Session JSON exportable from the hub.
- **God Mode** &mdash; instructor view. Step-by-step walkthrough with
  framework citations, reasoning, and the final answer pre-revealed.
  Locked behind a 12-digit numeric access code stored as SHA-256 only
  (`auth.js`). Rotate the code with:
  ```
  printf '%s' 'NEW12DIGITCODE' | sha256sum
  ```
  and replace `EXPECTED_HASH` in `auth.js`.

## Modules

1. AI Foundations and Technology Ecosystem
2. AI Concerns, Ethical Principles, and Responsible AI
3. AI Strategy and Planning
4. AI Governance and Frameworks
5. AI Regulatory Compliance
6. AI Risk and Threat Management
7. Third-Party AI Risk Management and Supply Chain Security
8. AI Security Architecture and Controls
9. Building Privacy, Trust, and Safety in AI Systems
10. AI Incident Response and Business Continuity
11. AI Assurance, Testing, and Auditing

## File map

| File | Purpose |
| --- | --- |
| `index.html` | Landing &mdash; mode selector + access-code modal |
| `app.html` | Hub &mdash; lists all 11 modules / 33 labs, scoreboard |
| `lab.html` + `lab.js` | Single lab renderer (templates from `labs.js`) |
| `labs.js` | 33 primer lab configs &mdash; scenario, artefacts, challenge, hints, god walkthrough, hashed flags |
| `labs-handson.js` | 55 hands-on lab configs &mdash; each pinned to one of eight widget types, auto-augments `window.LABS` |
| `widgets.js` | Eight reusable interactive widget types: classify, sortable, checklist, decision_tree, sliders, annotator, policy_builder, terminal |
| `exam.html` + `exam.js` | Timed 100-question practice exam with live timer, copy/paste disabled, score-only result |
| `questions.js` | Practice Set 1 &mdash; 100 multiple-choice questions across the eleven CRAGE modules |
| `questions2.js` | Practice Set 2 &mdash; 200 multiple-choice questions, broader concept coverage |
| `ctf.js` | Scoring, hint costs, flag verification, session export |
| `auth.js` | God-mode SHA-256 access-code gate |
| `styles.css` | Theme |

## Flag format

`crage{...}`. All flag verification is SHA-256 client-side; plaintext flags
live in `labs.js` only because God Mode displays them. Rotating a flag
requires updating both `flag` (plaintext) and `flagHash` (SHA-256) in the
matching lab entry.
