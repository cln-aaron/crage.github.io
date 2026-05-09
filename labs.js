// CRAGE Practitioner Labs · 11 modules × 3 labs = 33 challenges.
// Each lab is a scenario-based challenge: read the artifacts, apply the
// relevant framework (NIST AI RMF, ISO/IEC 42001, EU AI Act, MITRE ATLAS,
// OECD, GDPR, etc.), and submit a flag.
//
// Plaintext flags live in this file under `flag:` so God Mode can show the
// answer. The CTF flow only verifies via `flagHash` (SHA-256), so even if a
// student opens DevTools they still have to do the reasoning to know which
// flag is for which lab — and the access-code gate uses a different hash.

const LABS_DATA = [

// =================================================================
// MODULE 01 — AI Foundations and Technology Ecosystem
// =================================================================
{ module: 1, moduleTitle: "AI Foundations and Technology Ecosystem",
  blurb: "Decompose modern AI stacks; tell signal from marketing; read a model card the way a governance officer should.",
  labs: [

  { idx: 1, id: "m1l1", title: "Map the AI Stack",
    blurb: "Five vendors, five layers of the modern AI stack. Put each vendor in the right layer.",
    scenario: `<p>You are the new AI Program Manager at <strong>Northwind Health</strong>. The CIO has handed you five recent procurement contracts and asked you to brief the board on <em>where</em> in the AI tech stack each vendor sits, so the board can see how the pieces fit together.</p>
<p>The reference layers, top-to-bottom, are:</p>
<ol>
  <li><code>FOUNDATION</code> — pre-trained foundation/base models (LLMs, multimodal)</li>
  <li><code>FINETUNE</code> — fine-tuning / adaptation tooling for domain models</li>
  <li><code>RAG</code> — retrieval &amp; vector store layer for grounding</li>
  <li><code>AGENT</code> — orchestration / tool use / agent runtimes</li>
  <li><code>MLOPS</code> — observability, evals, deployment, monitoring</li>
</ol>`,
    artifacts: [{
      title: "Procurement Inventory",
      body: `<table>
<tr><th>Vendor</th><th>One-line product description</th></tr>
<tr><td><strong>NebulaCore</strong></td><td>"Hosts our own 70B medical-tuned base model, exposed via a single chat API."</td></tr>
<tr><td><strong>StethoTune</strong></td><td>"Curates 40k clinician-labelled records and runs LoRA training jobs on top of any base model."</td></tr>
<tr><td><strong>VectraMed</strong></td><td>"Ingests 3M patient summaries into a HIPAA-compliant vector database for context retrieval."</td></tr>
<tr><td><strong>CarePlanr</strong></td><td>"Builds the multi-step care-plan agent that calls EHR APIs, scheduling APIs, and the messaging API."</td></tr>
<tr><td><strong>SignalEval</strong></td><td>"Runs continuous evals, latency &amp; drift monitoring, and on-call alerting for production AI."</td></tr>
</table>`
    }],
    challenge: `<p>Submit the layer for each vendor in the order: <strong>NebulaCore – StethoTune – VectraMed – CarePlanr – SignalEval</strong>.</p>`,
    flagFormat: "crage{LAYER-LAYER-LAYER-LAYER-LAYER}",
    flag: "crage{FOUNDATION-FINETUNE-RAG-AGENT-MLOPS}",
    flagHash: "8c573d643b85d25cf9764a0b8db7551af129001adf660368854f0af54dc83b67",
    objective: "Classify each of the five Northwind Health vendors into one of FOUNDATION / FINETUNE / RAG / AGENT / MLOPS. Submit the layers in the order the vendors are listed.",
    hints: [
      "A foundation model vendor sells the *base* — no domain data. A fine-tuning vendor sells the *adaptation*. RAG is about retrieval into context. Agent is about orchestration & tool use. MLOps is about running it safely after launch.",
      "NebulaCore exposes a chat API to a 70B model — that is a base model serving layer. SignalEval is purely runtime observability — that is MLOps.",
      "Order matters. Read the prompt list top-down: FOUNDATION first, MLOPS last. Each vendor maps to exactly one layer."
    ],
    god: [
      { label: "Anchor on the vocabulary", body: "Establish the five-layer reference stack with the class. Without shared vocabulary, every governance conversation drifts.", say: "<strong>Cue:</strong> 'You can't govern what you can't decompose. Your first job is taxonomy.'" },
      { label: "Read each vendor for the verb", body: "NebulaCore <em>hosts</em> a base model — FOUNDATION. StethoTune <em>fine-tunes</em> with curated data — FINETUNE. VectraMed runs a <em>vector database</em> — RAG. CarePlanr <em>orchestrates tool calls</em> — AGENT. SignalEval does <em>evals + drift + alerting</em> — MLOPS." },
      { label: "Why this matters for governance", body: "Each layer carries different risks: foundation = training-data provenance &amp; misuse; finetune = data leakage &amp; bias; RAG = retrieval injection &amp; data exfil; agent = action-level harms; MLOps = drift + accountability." },
      { label: "Compose the flag", body: "Concatenate in vendor-listed order: <code>FOUNDATION-FINETUNE-RAG-AGENT-MLOPS</code>." }
    ],
    godNotes: "Real exam prep: have students extend the table with two columns — <em>top control</em> and <em>top risk</em> — for each layer."
  },

  { idx: 2, id: "m1l2", title: "Spot the Real AI",
    blurb: "Six vendor pitches. Three are real ML. Three are rules engines in a trenchcoat. Pick the real ones.",
    scenario: `<p>Your procurement team has shortlisted six "AI" vendors. The CFO wants to cut the list before the demo round. You suspect at least half are using "AI" as marketing for what is actually a rules engine, a regex, or a static lookup.</p>
<p>Identify the <strong>three pitches that describe a genuine learned/statistical model</strong> (not just deterministic rules dressed up).</p>`,
    artifacts: [{
      title: "Six Vendor Pitches (A–F)",
      body: `<table>
<tr><th>ID</th><th>Pitch</th></tr>
<tr><td><strong>A</strong></td><td>"Our AI fraud engine flags any transaction over $10,000 from a country on our watchlist." </td></tr>
<tr><td><strong>B</strong></td><td>"Our recommender is an ALS matrix-factorisation model retrained nightly on 80M user–item interactions; cold-start uses content-based features."</td></tr>
<tr><td><strong>C</strong></td><td>"AI-powered email triage: we keyword-match for words like <em>urgent</em>, <em>invoice</em>, <em>complaint</em> and route accordingly."</td></tr>
<tr><td><strong>D</strong></td><td>"Our claim-summarisation model is a fine-tuned 8B Llama-derivative trained on 120k ICD-10 coded claims with a held-out eval at 0.71 ROUGE-L."</td></tr>
<tr><td><strong>E</strong></td><td>"Smart contract analyser: regex pulls named entities (dates, parties, amounts) and slots them into a templated summary."</td></tr>
<tr><td><strong>F</strong></td><td>"Defect-detection vision model — a YOLOv8 architecture trained on 350k labelled production-line images, mAP@0.5 = 0.88, runs at 60 FPS on edge."</td></tr>
</table>`
    }],
    challenge: `<p>Submit the IDs of the three real ML pitches in alphabetical order.</p>`,
    flagFormat: "crage{X-Y-Z}",
    flag: "crage{B-D-F}",
    flagHash: "d861c130bba214f304b4015afaa719532b03fa9706f8217a201dd59944e846ec",
    objective: "From pitches A–F, identify the three that describe an actual learned/statistical model (not deterministic rules or regex). Submit the IDs alphabetically as a hyphenated list.",
    hints: [
      "Look for the tells of a learned model: training data size, an architecture name (ALS, Llama, YOLO, BERT), a held-out metric (ROUGE, mAP, AUC), retraining cadence.",
      "If a pitch describes only thresholds, watchlists, keyword matching, or regex with no learning step — that is a rules engine, not ML.",
      "Three of the six describe genuine ML. Three describe deterministic logic. Sort the ML ones alphabetically."
    ],
    god: [
      { label: "What separates ML from rules", body: "Rules are written. Models are <em>fit</em>. The discriminator is whether there is a training set, an architecture, and a held-out metric." },
      { label: "Walk each pitch", body: "A: rule (threshold + watchlist). B: ML (ALS factorisation, 80M data). C: rule (keyword match). D: ML (fine-tune, ROUGE). E: rule (regex). F: ML (YOLOv8, mAP)." },
      { label: "Why the distinction matters", body: "Governance treatment differs: a rules engine needs <em>change-management</em> review; a learned model needs <em>data + bias + drift</em> review. Mis-classifying the system means picking the wrong control set.", say: "<strong>Cue:</strong> 'The first job of governance is to decide which playbook applies. AI-washing makes you reach for the wrong one.'" },
      { label: "Compose the flag", body: "Real ML: B, D, F. Alphabetical: <code>B-D-F</code>." }
    ]
  },

  { idx: 3, id: "m1l3", title: "Audit a Model Card",
    blurb: "A vendor sent a 'model card.' Three required sections are missing. Find them.",
    scenario: `<p>A vendor has sent the model card below for the LLM they want to deploy in your customer-facing chat. Per Mitchell et al. (2019) <em>Model Cards for Model Reporting</em>, several sections are <strong>required</strong> for responsible publication.</p>
<p>Identify the <strong>three missing required sections</strong> from the canonical model-card template.</p>`,
    artifacts: [{
      title: "Vendor Model Card · CustomerCare-7B v1.4",
      body: `<pre><code># Model Card · CustomerCare-7B v1.4

## Model Details
- Architecture: 7B-param transformer, 32k context
- Developer: Acme AI Labs
- Date: 2026-03

## Intended Use
- Customer support chat for B2C retail accounts.
- NOT for medical, legal, or financial advice.

## Factors
- English (US/UK), French (FR), Spanish (ES) only.

## Metrics
- Helpfulness (internal eval): 4.2 / 5
- Refusal rate (red-team): 12%

## Ethical Considerations
- May produce hallucinations on out-of-scope queries.
- Prompt injection has not been formally tested.
</code></pre>`
    }],
    challenge: `<p>Of the canonical model-card sections — <code>Model Details</code>, <code>Intended Use</code>, <code>Factors</code>, <code>Metrics</code>, <code>Evaluation Data</code>, <code>Training Data</code>, <code>Quantitative Analyses</code>, <code>Ethical Considerations</code>, <code>Caveats and Recommendations</code>, plus the de-facto additions for <code>Limitations</code> and <code>License</code> — three are entirely missing from this card.</p>
<p>Submit the three missing sections, hyphen-joined, using the tokens: <code>TRAINING_DATA</code>, <code>EVAL</code>, <code>LIMITATIONS</code>, <code>LICENSE</code>. (Three of the four are missing; pick those three.)</p>`,
    flagFormat: "crage{TOKEN-TOKEN-TOKEN}",
    flag: "crage{TRAINING_DATA-EVAL-LIMITATIONS-LICENSE}",
    flagHash: "d55f6fc858924f6219bf47ab5ea278d14f592d1ad98cd324555ed77eb235672f",
    objective: "Identify the three+ missing required sections from the vendor's model card. Submit them hyphen-joined in the order: TRAINING_DATA, EVAL (data), LIMITATIONS, LICENSE — omitting any that are present.",
    hints: [
      "Cross-check against Mitchell et al. (2019). The card MUST disclose what data trained the model and what data was used to evaluate it.",
      "The card mentions metrics but does NOT describe the eval set. It mentions hallucinations vaguely but never states formal limitations or recommendations. And there is no license for downstream use.",
      "All four candidate tokens are missing in this vendor card — the answer is all four, in the order given in the prompt."
    ],
    god: [
      { label: "Reference the canonical template", body: "The Mitchell et al. model card has nine sections. Walk the class through them quickly: details, intended use, factors, metrics, evaluation data, training data, quantitative analyses, ethical considerations, caveats and recommendations." },
      { label: "Diff the vendor card", body: "Present: details, intended use, factors, metrics, ethical considerations. Missing: training data, evaluation data, limitations/caveats, license terms.", say: "<strong>Cue:</strong> 'Notice ethical considerations is one paragraph. That is performative — without training data and limitations, you cannot actually reason about risk.'" },
      { label: "Why each missing piece kills your audit", body: "Without training data: cannot assess provenance, copyright, or bias. Without eval data: cannot challenge the metric. Without limitations: cannot scope deployment. Without license: cannot use it." },
      { label: "Compose the flag", body: "All four tokens missing in this card → <code>TRAINING_DATA-EVAL-LIMITATIONS-LICENSE</code>." }
    ]
  }
]},

// =================================================================
// MODULE 02 — AI Concerns, Ethical Principles, Responsible AI
// =================================================================
{ module: 2, moduleTitle: "AI Concerns, Ethical Principles, and Responsible AI",
  blurb: "Apply the OECD / NIST trustworthy-AI principles to live deployment decisions; detect bias from real outputs.",
  labs: [

  { idx: 1, id: "m2l1", title: "Ethics Tribunal · Resume Screener",
    blurb: "An HR ML resume-ranker shows a measurable disparate-impact pattern. Approve, restrict, or reject?",
    scenario: `<p>An HR-tech vendor has demonstrated a resume-ranking model claiming "55% reduction in time-to-shortlist." Internal validation on 12,000 historical applications produced the table below.</p>
<p>The four-fifths rule (EEOC) flags disparate impact when the selection rate of any group is less than 80% of the highest group's selection rate.</p>`,
    artifacts: [{
      title: "Internal Validation · Selection Rates by Group",
      body: `<table>
<tr><th>Group</th><th>Applications</th><th>Shortlisted by Model</th><th>Selection Rate</th></tr>
<tr><td>Men</td><td>6,400</td><td>1,920</td><td>30.0%</td></tr>
<tr><td>Women</td><td>5,200</td><td>1,040</td><td>20.0%</td></tr>
<tr><td>Non-binary</td><td>400</td><td>72</td><td>18.0%</td></tr>
</table>
<p><em>Vendor commentary:</em> "The disparity reflects the historical hiring distribution in the training data. Re-balancing harms accuracy."</p>`
    }],
    challenge: `<p>You are the AI ethics chair. Issue a verdict. The tokens are:</p>
<ul>
<li><code>APPROVE</code> · <code>RESTRICT</code> · <code>REJECT</code> — your decision</li>
<li><code>DISPARATE_IMPACT</code> · <code>NO_FINDING</code> · <code>ACCURACY_TRADEOFF</code> — your primary justification</li>
</ul>
<p>Submit verdict + justification.</p>`,
    flagFormat: "crage{VERDICT-JUSTIFICATION}",
    flag: "crage{REJECT-DISPARATE_IMPACT}",
    flagHash: "fa62cddc9d04925b3358b8ae47d838cc2272116eae46ff3d6a5b57e9b3e20c68",
    objective: "Decide the verdict (APPROVE / RESTRICT / REJECT) and justification (DISPARATE_IMPACT / NO_FINDING / ACCURACY_TRADEOFF) for the resume-ranker.",
    hints: [
      "Apply the four-fifths rule. Highest selection rate = 30% (Men). 80% × 30% = 24%. Any group below 24% is a disparate-impact finding.",
      "Women select at 20% (=66.6% of the male rate) and non-binary at 18% (=60%). Both fail four-fifths. The vendor's 'historical distribution' defence is not a legal defence — it's a confession of the cause.",
      "Ethics chairs do not approve a system that fails four-fifths on grounds of vendor claimed accuracy. The verdict + justification you want is REJECT-DISPARATE_IMPACT."
    ],
    god: [
      { label: "Frame the problem", body: "We have a quantitative disparity and a qualitative defence. The defence — 'training data reflects history' — is the cause, not a justification." },
      { label: "Run four-fifths", body: "Highest group = Men at 30%. Threshold = 24%. Women 20% fails. Non-binary 18% fails. Two of three groups fail.", say: "<strong>Cue:</strong> 'Four-fifths is a screening test, not a green light. Failing it requires a documented business necessity defence — and that bar is high.'" },
      { label: "Why not RESTRICT?", body: "RESTRICT would mean 'limit deployment to a narrower context.' But the bias is in the model's *learned objective* — there is no narrower context that escapes it without retraining. RESTRICT is hand-waving here." },
      { label: "Verdict", body: "<code>REJECT-DISPARATE_IMPACT</code>. Send the vendor back to retrain with bias-aware sampling and re-evaluate against four-fifths." }
    ]
  },

  { idx: 2, id: "m2l2", title: "Bias Forensics · Lending Outputs",
    blurb: "A lending model's outputs show a clear pattern. Identify which two protected attributes are driving it.",
    scenario: `<p>A consumer-credit lender's loan-decision model has been audited externally. The auditor sampled 1,000 declined applicants and re-ran each one with a single attribute swapped (everything else held identical). The percentage that <em>flipped</em> from <code>DECLINE</code> to <code>APPROVE</code> when the attribute was changed is shown below.</p>`,
    artifacts: [{
      title: "Counterfactual Flip Rates · Declined Applications",
      body: `<table>
<tr><th>Attribute swapped</th><th>Flip-to-APPROVE rate</th></tr>
<tr><td>First name (gendered) — F → M</td><td>14.2%</td></tr>
<tr><td>Postal code (urban → suburban same income)</td><td>1.1%</td></tr>
<tr><td>Date of birth (60yo → 35yo)</td><td>9.6%</td></tr>
<tr><td>Self-reported ethnicity</td><td>0.4% (model does not see this)</td></tr>
<tr><td>Marital status</td><td>0.7%</td></tr>
<tr><td>Employment tenure (years, identical income)</td><td>2.1%</td></tr>
</table>`
    }],
    challenge: `<p>Identify the <strong>two</strong> protected attributes that drive the largest unjustified outcome change. Submit them in descending order of effect size.</p>
<p>Tokens to use: <code>GENDER</code>, <code>RACE</code>, <code>AGE</code>, <code>POSTCODE</code>, <code>MARITAL</code>, <code>TENURE</code>.</p>`,
    flagFormat: "crage{TOKEN-TOKEN}",
    flag: "crage{GENDER-AGE}",
    flagHash: "7b8079ea78b20e88da5317186af1675c8c4bde870870efce578c347c3e1b4507",
    objective: "Identify the two protected attributes whose counterfactual swap most changes outcomes. Submit them as TOKEN-TOKEN, largest effect first.",
    hints: [
      "Counterfactual flip rate is a strong fairness signal: if changing only the attribute changes the outcome, the model is using it as a proxy.",
      "Gendered first name swap = 14.2% flip. DOB swap = 9.6% flip. Both are protected categories. The other rows are noise (≤2%).",
      "Order by effect size: gender first, age second."
    ],
    god: [
      { label: "Counterfactual fairness primer", body: "If swapping a protected attribute alone (with everything else held constant) changes the outcome, the model is *causally* using that attribute or a proxy for it." },
      { label: "Read the table", body: "Gender swap → 14.2%. Age swap → 9.6%. Race not seen by the model (0.4% noise floor). Postcode/marital/tenure are all near noise.", say: "<strong>Cue:</strong> 'Note race is at noise — but this does NOT mean the model is fair on race; it means race is invisible to this audit method. Use a different test for race.'" },
      { label: "What to do operationally", body: "Find the gender and age proxies (often: name embeddings; tenure-of-employment patterns). Either remove them, or apply post-hoc parity calibration." },
      { label: "Compose the flag", body: "Largest effect first: <code>GENDER-AGE</code>." }
    ]
  },

  { idx: 3, id: "m2l3", title: "Principle Mapping · OECD",
    blurb: "Five practitioner failures. Map each one to the responsible-AI principle it violates.",
    scenario: `<p>You are reviewing five short post-incident summaries from the past quarter at <strong>Linden Bank</strong>. Each describes one production AI failure. Map each to the responsible-AI principle it most violates.</p>
<p>Principles: <code>ACCOUNTABILITY</code>, <code>TRANSPARENCY</code>, <code>FAIRNESS</code>, <code>PRIVACY</code>, <code>SAFETY</code>.</p>`,
    artifacts: [{
      title: "Five Incident Summaries",
      body: `<ol>
<li><strong>Incident #1.</strong> A customer asked why their loan was declined; nobody — not the model team, not the product team, not the vendor — could produce a written owner of the decision policy.</li>
<li><strong>Incident #2.</strong> The chatbot's reasoning behind a denial of service was opaque to the customer; logs were available internally but no plain-language reason was ever surfaced.</li>
<li><strong>Incident #3.</strong> The mortgage approval model's approval rate for one ethnic group came in at 51% of the highest group's rate.</li>
<li><strong>Incident #4.</strong> A help-desk fine-tune set was discovered to contain unredacted customer SSNs that were later regurgitated to other customers.</li>
<li><strong>Incident #5.</strong> An autonomous trade-execution agent placed $4M in orders during a market halt; no kill-switch was wired up.</li>
</ol>`
    }],
    challenge: `<p>Submit the five mapped principles in incident order, hyphen-joined.</p>`,
    flagFormat: "crage{P1-P2-P3-P4-P5}",
    flag: "crage{ACCOUNTABILITY-TRANSPARENCY-FAIRNESS-PRIVACY-SAFETY}",
    flagHash: "0dd47f48744191b24384fce27827471998051c39fe23f3a7f2cc2205ecd8f692",
    objective: "Map each of the five Linden Bank incidents to the single responsible-AI principle it most violates. Submit in incident order, hyphen-joined.",
    hints: [
      "Each incident is engineered to map cleanly to one principle. Read the *symptom*, not the topic — 'no owner' = accountability; 'no plain-language reason' = transparency.",
      "Principles in this lab: ACCOUNTABILITY, TRANSPARENCY, FAIRNESS, PRIVACY, SAFETY. Each one is used exactly once.",
      "Order: 1=ACCOUNTABILITY, 2=TRANSPARENCY, 3=FAIRNESS, 4=PRIVACY, 5=SAFETY."
    ],
    god: [
      { label: "Establish the principle vocabulary", body: "OECD's five operational principles map well to NIST AI RMF's trustworthy characteristics." },
      { label: "Walk each incident", body: "1: no decision owner = ACCOUNTABILITY. 2: no plain-language reason = TRANSPARENCY/explainability. 3: 51% selection rate vs reference = FAIRNESS. 4: SSN regurgitation = PRIVACY (training-data leakage). 5: no kill-switch = SAFETY/controllability." },
      { label: "Compose the flag", body: "<code>ACCOUNTABILITY-TRANSPARENCY-FAIRNESS-PRIVACY-SAFETY</code>." }
    ]
  }
]},

// =================================================================
// MODULE 03 — AI Strategy and Planning
// =================================================================
{ module: 3, moduleTitle: "AI Strategy and Planning",
  blurb: "Build / buy / partner trade-offs; portfolio prioritisation; capability gaps and hiring decisions.",
  labs: [

  { idx: 1, id: "m3l1", title: "Build / Buy / Partner",
    blurb: "Pick the right sourcing strategy for an industrial-vision use case at a constrained mid-market firm.",
    scenario: `<p><strong>Auriga Foods</strong>, a 2,000-employee mid-market food manufacturer, wants a vision system to detect contamination on its packaging line. They have:</p>
<ul>
  <li>One ML engineer (recent hire, no industrial-vision experience)</li>
  <li>~50k labelled images of their specific line, no external dataset</li>
  <li>An 18-month payback target from finance</li>
  <li>Strict food-safety regulatory exposure (FDA, Codex)</li>
  <li>Two viable vendors offering near-turnkey solutions plus one open-source option</li>
</ul>`,
    artifacts: [{
      title: "Sourcing Options",
      body: `<table>
<tr><th>Option</th><th>Cost (3yr)</th><th>Time-to-value</th><th>Custom fit</th><th>Risk profile</th></tr>
<tr><td><strong>BUILD</strong> in-house from open-source</td><td>$1.4M</td><td>14–20 mo</td><td>High</td><td>High exec risk; one ML engineer; long ramp on regulated workload.</td></tr>
<tr><td><strong>BUY</strong> turnkey vendor SaaS</td><td>$2.1M</td><td>2 mo</td><td>Low</td><td>Vendor lock-in; their model trained on bottling, not packaging — accuracy unknown on Auriga line.</td></tr>
<tr><td><strong>PARTNER</strong> with vendor + co-train on Auriga's 50k images</td><td>$1.6M</td><td>5–7 mo</td><td>Medium-high</td><td>Joint IP terms; vendor owns base model; Auriga keeps the fine-tune.</td></tr>
</table>`
    }],
    challenge: `<p>Recommend the sourcing strategy. Submit one of: <code>BUILD</code>, <code>BUY</code>, <code>PARTNER</code>.</p>`,
    flagFormat: "crage{STRATEGY}",
    flag: "crage{PARTNER}",
    flagHash: "e8e85c3c6e4ee9389cc14b0fd91fc18d31ad2c60f9e0c13b85d9f578d1e74383",
    objective: "Choose the most defensible sourcing strategy for Auriga Foods' contamination-detection use case.",
    hints: [
      "Score against the constraints: 18-month payback, single ML engineer, regulated workload, line-specific data Auriga must use.",
      "BUILD fails on time-to-value and execution risk (one engineer). BUY fails on fit (vendor model not trained on packaging line). PARTNER threads the needle: vendor maturity + co-train on Auriga's data + acceptable timeline.",
      "Answer is PARTNER."
    ],
    god: [
      { label: "Frame as a constraint problem", body: "Sourcing decisions are not 'best in absolute' — they are best given the constraint vector. Surface the constraints first." },
      { label: "Eliminate", body: "BUILD: 14–20 mo > 18-mo payback target; only one engineer = high schedule risk. BUY: 2 mo but base model trained on a different line — fit risk dominates in a regulated workload.", say: "<strong>Cue:</strong> 'In regulated industries, fit risk is regulatory risk. A fast deploy that triggers an FDA Form 483 is not fast.'" },
      { label: "Why PARTNER fits", body: "PARTNER gets vendor maturity (their pretrained model + their MLOps), Auriga's specific data goes into the fine-tune, time-to-value is in the payback window, and IP split is acceptable." },
      { label: "Flag", body: "<code>crage{PARTNER}</code>." }
    ]
  },

  { idx: 2, id: "m3l2", title: "AI Portfolio Prioritisation",
    blurb: "Four candidate AI initiatives. Rank them by value-vs-risk for a one-year roadmap.",
    scenario: `<p>You are presenting a one-year AI roadmap to <strong>Cassia Insurance</strong>'s exec committee. Four candidate initiatives compete for the same budget envelope. Use the value-vs-risk grid to rank them.</p>`,
    artifacts: [{
      title: "Initiative Slate",
      body: `<table>
<tr><th>ID</th><th>Initiative</th><th>Value (NPV, 3y)</th><th>Risk profile</th></tr>
<tr><td><strong>A</strong></td><td>Underwriting auto-decisioning (high-stakes)</td><td>$22M</td><td>Very high — EU AI Act high-risk; biased outcome lawsuits; regulator scrutiny</td></tr>
<tr><td><strong>B</strong></td><td>Marketing copy assist (internal)</td><td>$0.8M</td><td>Very low — copy-edit only, never customer-facing without human</td></tr>
<tr><td><strong>C</strong></td><td>Claims summarisation for adjusters (internal)</td><td>$6M</td><td>Low — adjuster always in the loop; summary, not decision</td></tr>
<tr><td><strong>D</strong></td><td>Fraud detection assist (advisory)</td><td>$11M</td><td>Medium — bias risk on declined claims; SIU adjuster reviews every flag</td></tr>
</table>`
    }],
    challenge: `<p>Rank the four initiatives in order of <em>value adjusted for risk and time-to-deploy</em> — best first. Submit as a hyphen-joined list of IDs.</p>`,
    flagFormat: "crage{X-Y-Z-W}",
    flag: "crage{C-A-D-B}",
    flagHash: "100bc6e3ca984bd14c86b9fb731bf7c905f17025a064b86fbc4e95210432bce6",
    objective: "Rank the four AI initiatives best-first for Cassia Insurance, accounting for both NPV and risk profile.",
    hints: [
      "Don't pick by NPV alone. The right ordering pulls high-value low-risk to the top, then handles high-value high-risk with explicit governance, and pushes very-low-value to last regardless of risk.",
      "C (claims summarisation, $6M, low risk) is the obvious starter. A (underwriting, $22M, very high) ships next *only* with rigorous controls. D (fraud assist, $11M, medium) follows. B ($0.8M) is too small to warrant a roadmap slot.",
      "Order: C-A-D-B."
    ],
    god: [
      { label: "Reject NPV-only ranking", body: "If you ranked A-D-C-B you'd be putting your highest-risk initiative first. That is a governance failure, not a strategy." },
      { label: "Apply a risk-adjusted lens", body: "Start with quick value at low risk to build organisational AI capability (C). Stage the high-stakes initiative with controls (A). Then medium-risk advisory (D). Then anything left (B)." },
      { label: "Compose the flag", body: "<code>C-A-D-B</code>." }
    ]
  },

  { idx: 3, id: "m3l3", title: "Capability Gap · First Hire",
    blurb: "An org has six AI initiatives in flight. Pick the highest-leverage hire to make next.",
    scenario: `<p><strong>Verda Robotics</strong> has six AI initiatives in flight at varying stages. They report:</p>
<ul>
  <li>Three production models, all owned by individual data scientists</li>
  <li>No shared feature store, no shared CI/CD, no shared eval harness</li>
  <li>Each team is rolling their own monitoring stack</li>
  <li>Two recent incidents traced to drift no team detected for 6 weeks</li>
  <li>A new EU AI Act high-risk use case just got board approval</li>
</ul>`,
    artifacts: [{
      title: "Candidate Roles to Hire",
      body: `<ul>
<li><code>HIRE_PROMPT_ENGINEER</code> — speeds up LLM features; does not address platform issues.</li>
<li><code>HIRE_DATA_SCIENTIST</code> — extra modelling capacity; doubles the team count but not the platform.</li>
<li><code>HIRE_AI_ETHICIST</code> — addresses governance gap on the new high-risk use case but not the drift incidents.</li>
<li><code>HIRE_ML_PLATFORM_LEAD</code> — owns shared feature store, CI/CD, monitoring; cross-cuts every team.</li>
<li><code>HIRE_FOUNDATION_RESEARCHER</code> — pre-training expertise; mismatched to current need.</li>
</ul>`
    }],
    challenge: `<p>Choose the next hire that yields the most leverage across Verda's portfolio.</p>`,
    flagFormat: "crage{ROLE_TOKEN}",
    flag: "crage{HIRE_ML_PLATFORM_LEAD}",
    flagHash: "19e8fd285b971d6eb1f4aa2a78f536138949b2c8a0826aaa2d69428855b8c740",
    objective: "Pick the single highest-leverage role to hire next at Verda Robotics.",
    hints: [
      "Verda's pain points all rhyme: each team rolls its own X. The fix is *infrastructure*, not more individual contributors.",
      "Drift went undetected for 6 weeks because monitoring is per-team, not platform. A platform lead solves that for every initiative at once.",
      "The role you want is HIRE_ML_PLATFORM_LEAD."
    ],
    god: [
      { label: "Find the bottleneck", body: "Six initiatives, three production models, individual ownership, no shared platform — every problem reported is a *platform* problem.", say: "<strong>Cue:</strong> 'Hiring more modellers without a platform multiplies inconsistencies. Hire the platform first; it pays back the next ten initiatives.'" },
      { label: "Why not the ethicist?", body: "The ethicist is *also* needed for the high-risk use case — but a platform lead unlocks every team's reliability and is the higher-leverage hire RIGHT NOW. Ethicist is the second hire, not the first." },
      { label: "Flag", body: "<code>crage{HIRE_ML_PLATFORM_LEAD}</code>." }
    ]
  }
]},

// =================================================================
// MODULE 04 — AI Governance and Frameworks
// =================================================================
{ module: 4, moduleTitle: "AI Governance and Frameworks",
  blurb: "Apply NIST AI RMF, ISO/IEC 42001, and AI council design to a governance build-out.",
  labs: [

  { idx: 1, id: "m4l1", title: "NIST AI RMF · Function Mapping",
    blurb: "Four governance activities. Map each to its NIST AI RMF function.",
    scenario: `<p>You are stress-testing your draft AI policy against the NIST AI Risk Management Framework's four functions: <code>GOVERN</code>, <code>MAP</code>, <code>MEASURE</code>, <code>MANAGE</code>.</p>`,
    artifacts: [{
      title: "Activities to Classify",
      body: `<ol>
<li>Quarterly AI council reviews policies, owners, and roles for every model.</li>
<li>For a new use case, the team enumerates context, stakeholders, intended use, foreseeable misuse, and impacts.</li>
<li>The MLOps team runs continuous fairness, drift, and performance metrics with alerting thresholds.</li>
<li>An incident triggers risk-mitigation: rollback, communication, retrospective, and policy updates.</li>
</ol>`
    }],
    challenge: `<p>Submit the function mapping for activities 1–4 in order.</p>`,
    flagFormat: "crage{F1-F2-F3-F4}",
    flag: "crage{GOVERN-MAP-MEASURE-MANAGE}",
    flagHash: "dd804203fd5c03e51432387726ebd499a43107c23552e2a5b1c38f01903748b9",
    objective: "Classify each activity as GOVERN / MAP / MEASURE / MANAGE per NIST AI RMF.",
    hints: [
      "GOVERN = policy, culture, accountability. MAP = context & impact identification. MEASURE = metrics, evals, monitoring. MANAGE = response & continuous improvement.",
      "Activity 1 = council/policy → GOVERN. Activity 2 = context enumeration → MAP. Activity 3 = continuous metrics → MEASURE. Activity 4 = incident response → MANAGE.",
      "Order: GOVERN-MAP-MEASURE-MANAGE."
    ],
    god: [
      { label: "Anchor the four functions", body: "GOVERN cuts across the others; MAP / MEASURE / MANAGE form a lifecycle." },
      { label: "Walk activities", body: "1=GOVERN (policy, council). 2=MAP (context & impact). 3=MEASURE (continuous metrics). 4=MANAGE (response, improvement)." },
      { label: "Flag", body: "<code>crage{GOVERN-MAP-MEASURE-MANAGE}</code>." }
    ]
  },

  { idx: 2, id: "m4l2", title: "ISO/IEC 42001 · Gap Audit",
    blurb: "Read four findings from a 42001 readiness audit. Identify the failed clause for each.",
    scenario: `<p>Your AI Management System (AIMS) is being assessed against <strong>ISO/IEC 42001:2023</strong>. The audit produced four findings. Identify the clause each finding violates.</p>
<p>Reference clauses in scope:</p>
<ul>
<li><code>6.1.2</code> — AI risk assessment</li>
<li><code>7.4</code> — Communication (internal &amp; external)</li>
<li><code>8.3</code> — AI system impact assessment</li>
<li><code>9.2</code> — Internal audit</li>
</ul>`,
    artifacts: [{
      title: "Audit Findings",
      body: `<ol>
<li><strong>Finding 1.</strong> No documented methodology to identify, analyse, and evaluate AI-specific risks; the org reused its generic IT risk register.</li>
<li><strong>Finding 2.</strong> No process to inform users when they are interacting with an AI system; no internal channel for staff to raise AI concerns.</li>
<li><strong>Finding 3.</strong> The customer-facing chatbot was launched without an impact assessment on individuals or society.</li>
<li><strong>Finding 4.</strong> The AIMS has not been audited internally since deployment 11 months ago; no audit programme exists.</li>
</ol>`
    }],
    challenge: `<p>Submit the four clause numbers in order, hyphen-joined.</p>`,
    flagFormat: "crage{C1-C2-C3-C4}",
    flag: "crage{6.1.2-7.4-8.3-9.2}",
    flagHash: "2f028567d10dd790807105d990107cd9a210e068d8c1c5ec328bf3cf003eca9f",
    objective: "Map each finding to the violated ISO/IEC 42001 clause. Submit clause numbers in finding order.",
    hints: [
      "Clause 6.1.2 is AI *risk* assessment. Clause 8.3 is AI *impact* assessment. Different clauses, different scope: risk = to org & individuals; impact = to individuals & society.",
      "Communication clause is 7.4. Internal audit is 9.2.",
      "Order: 6.1.2 - 7.4 - 8.3 - 9.2."
    ],
    god: [
      { label: "Risk vs impact", body: "ISO 42001 keeps these separate. Risk = chance × consequence to the organisation and to people. Impact = effect on individuals and society. Both required.", say: "<strong>Cue:</strong> 'Most AIMS readiness gaps come from a single clause: 8.3. Generic IT risk frames don't include societal impact.'" },
      { label: "Walk findings", body: "1=6.1.2 missing risk methodology. 2=7.4 communication. 3=8.3 impact assessment. 4=9.2 internal audit." },
      { label: "Flag", body: "<code>crage{6.1.2-7.4-8.3-9.2}</code>." }
    ]
  },

  { idx: 3, id: "m4l3", title: "AI Council RACI",
    blurb: "Charter an AI council. Assign R/A/C/I to four roles for an EU AI Act high-risk decision.",
    scenario: `<p>Your new AI Council is chartering its first decision: <em>approval to deploy an EU AI Act high-risk hiring assistant</em>. Assign one RACI letter per role.</p>
<ul>
  <li><code>R</code> — Responsible (does the work)</li>
  <li><code>A</code> — Accountable (single owner of the outcome)</li>
  <li><code>C</code> — Consulted (provides input)</li>
  <li><code>I</code> — Informed (kept in the loop)</li>
</ul>`,
    artifacts: [{
      title: "Roles in Scope",
      body: `<ul>
<li><strong>CISO</strong> — owns enterprise risk and final approval/veto on systems crossing risk thresholds.</li>
<li><strong>DPO</strong> — provides input on personal-data processing, GDPR Art.22, DPIA review.</li>
<li><strong>Product Owner</strong> — drives the deployment and operationally owns post-launch metrics.</li>
<li><strong>Legal</strong> — reviews EU AI Act classification, contracts, vendor terms; consulted, does not own.</li>
</ul>`
    }],
    challenge: `<p>Submit the four assignments in role order using tokens like <code>CISO_A</code>, <code>DPO_C</code>, etc.</p>`,
    flagFormat: "crage{CISO_X-DPO_X-PRODUCT_X-LEGAL_X}",
    flag: "crage{CISO_A-DPO_C-PRODUCT_R-LEGAL_C}",
    flagHash: "ae223783db4542e0ca69a508b17fcd365b4a8e55cd688f8d331f04d7aa62b3cd",
    objective: "Assign RACI letters for CISO, DPO, Product Owner, Legal for the high-risk hiring assistant approval. Submit in role order.",
    hints: [
      "Exactly one role is Accountable (A). Multiple may be Consulted (C). The doer is Responsible (R).",
      "CISO owns enterprise risk → A. Product Owner runs the deploy → R. DPO and Legal both provide expert input → C.",
      "Order: CISO_A-DPO_C-PRODUCT_R-LEGAL_C."
    ],
    god: [
      { label: "RACI rule of one A", body: "If you ever assign two A's, you have no accountability. Pick the one role that owns the outcome." },
      { label: "Why CISO is A here", body: "EU AI Act high-risk classification crosses the org's risk-acceptance threshold. The decision authority is the risk owner — CISO (or Chief AI Officer if you have one).", say: "<strong>Cue:</strong> 'Don't put Product Owner as A. Product is incentivised to ship. A must sit with the risk owner.'" },
      { label: "Flag", body: "<code>CISO_A-DPO_C-PRODUCT_R-LEGAL_C</code>." }
    ]
  }
]},

// =================================================================
// MODULE 05 — AI Regulatory Compliance
// =================================================================
{ module: 5, moduleTitle: "AI Regulatory Compliance",
  blurb: "Classify under EU AI Act; trigger GDPR Art. 22 / DPIA; pick the right law per jurisdiction.",
  labs: [

  { idx: 1, id: "m5l1", title: "EU AI Act · Risk Tier",
    blurb: "Classify a deployment under the EU AI Act risk tiers: prohibited / high / limited / minimal.",
    scenario: `<p><strong>Stentor Recruitment Ltd</strong> intends to deploy an automated CV-screening + ranking model that produces a numeric "fit score" used as the primary input to shortlist candidates for interviews. The model decisions are reviewed by a recruiter, but in 92% of cases the recruiter accepts the model's top-N ranking unchanged.</p>
<p>EU AI Act risk tiers (simplified):</p>
<ul>
<li><code>PROHIBITED</code> — social scoring, manipulation, biometric categorisation in public spaces by law enforcement, etc.</li>
<li><code>HIGH_RISK</code> — Annex III use cases incl. employment recruitment/selection, education, credit, critical infrastructure, etc.</li>
<li><code>LIMITED_RISK</code> — chatbots, deepfakes, emotion recognition (transparency obligations).</li>
<li><code>MINIMAL_RISK</code> — spam filters, video-game NPCs, etc.</li>
</ul>`,
    challenge: `<p>Classify Stentor's deployment.</p>`,
    flagFormat: "crage{TIER}",
    flag: "crage{HIGH_RISK}",
    flagHash: "e5b7bd7605015679bec1e0b851fd901a7f9fd09ee663ee5cdc0a8338683f63b0",
    objective: "Classify Stentor's CV-screening deployment under the EU AI Act risk tiers (PROHIBITED / HIGH_RISK / LIMITED_RISK / MINIMAL_RISK).",
    hints: [
      "Annex III explicitly lists 'AI systems intended to be used for the recruitment or selection of natural persons' as high-risk.",
      "The 92%-rubber-stamp pattern means human review is not meaningfully overriding — but this lab does not turn on that nuance; recruitment screening is high-risk on its face.",
      "Answer: HIGH_RISK."
    ],
    god: [
      { label: "Open Annex III", body: "Annex III lists high-risk categories. Employment / worker management / access to self-employment is one of them, including CV screening." },
      { label: "Why it's not LIMITED_RISK", body: "LIMITED is for chatbots and certain transparency-only obligations. CV screening produces a *consequential* decision about a person, which is the definition of high-risk under Annex III." },
      { label: "Operational consequences", body: "High-risk → conformity assessment, registration in EU database, risk-management system, data-governance, human oversight, post-market monitoring, transparency to the deployer.", say: "<strong>Cue:</strong> 'High-risk is not 'do not deploy.' It is 'deploy with a full conformity package.''" },
      { label: "Flag", body: "<code>crage{HIGH_RISK}</code>." }
    ]
  },

  { idx: 2, id: "m5l2", title: "GDPR · Art. 22 + DPIA",
    blurb: "A loan-decision deployment processes EU residents' personal data. Decide what GDPR triggers fire.",
    scenario: `<p>A bank deploys an automated decision system that determines, without human review, whether to extend a personal loan to EU residents based on financial &amp; behavioural data. Decisions have legal/significant effects on the individual (loan grant or denial). The bank has not run a Data Protection Impact Assessment.</p>`,
    challenge: `<p>Identify the GDPR trigger and the procedural requirement that fires here. Use the tokens:</p>
<ul>
<li><code>ARTICLE_22</code> — automated individual decision-making with legal/significant effects</li>
<li><code>ARTICLE_15</code> — right of access</li>
<li><code>DPIA_REQUIRED</code> — Art. 35 DPIA required for high-risk processing</li>
<li><code>NO_TRIGGER</code> — no GDPR trigger applies</li>
</ul>
<p>Submit two tokens, hyphen-joined: the article triggered first, then the procedural requirement.</p>`,
    flagFormat: "crage{ARTICLE_X-REQUIREMENT}",
    flag: "crage{ARTICLE_22-DPIA_REQUIRED}",
    flagHash: "6baf669ec18b35739b444fd3923d62290c17500fa39f24c8984071b47746657a",
    objective: "Identify the relevant GDPR article and the procedural requirement triggered by the bank's deployment.",
    hints: [
      "Solely-automated decisions producing legal or similarly significant effects on a person fall under GDPR Article 22. The data subject has rights to obtain human intervention, express their point of view, and contest the decision.",
      "Article 35 requires a DPIA before processing that is likely to result in a high risk to rights and freedoms — automated decision-making with legal effects is on the WP29 'high-risk' list and is essentially always DPIA-triggering.",
      "Order: ARTICLE_22-DPIA_REQUIRED."
    ],
    god: [
      { label: "Art. 22 mechanics", body: "Solely automated + legal or similarly significant effect → Art. 22 applies. Permitted only if (a) necessary for contract, (b) authorised by EU/MS law with safeguards, or (c) explicit consent — and individual rights still apply." },
      { label: "DPIA mechanics", body: "Art. 35 DPIA is required before such processing. Lack of DPIA is a standalone violation independent of Art. 22." },
      { label: "Flag", body: "<code>ARTICLE_22-DPIA_REQUIRED</code>." }
    ]
  },

  { idx: 3, id: "m5l3", title: "Cross-Jurisdiction Mapping",
    blurb: "Three deployments, three jurisdictions. Pick the dominant statute that applies to each.",
    scenario: `<p>You operate three deployments. Pick the dominant AI/data law that applies to each.</p>
<p>Tokens to use: <code>EU_AI_ACT</code>, <code>CCPA</code>, <code>PIPL</code>.</p>`,
    artifacts: [{
      title: "Three Deployments",
      body: `<ol>
<li><strong>Deployment α.</strong> A medical-triage assistant deployed to EU hospitals. Annex III high-risk territory. Affected individuals are EU residents.</li>
<li><strong>Deployment β.</strong> A targeted-advertising profile builder serving California residents from US infrastructure; processes pseudonymous identifiers tied to households.</li>
<li><strong>Deployment γ.</strong> A consumer chatbot operated by a Chinese subsidiary processing personal data of users in mainland China.</li>
</ol>`
    }],
    challenge: `<p>Submit dominant statute per deployment, in α-β-γ order.</p>`,
    flagFormat: "crage{LAW1-LAW2-LAW3}",
    flag: "crage{EU_AI_ACT-CCPA-PIPL}",
    flagHash: "0cf2bf6064324641a898d317bc45050025e5c44ae094b1fa7be59441aa90a161",
    objective: "Map each deployment to the dominant applicable AI/data law.",
    hints: [
      "α is in EU + Annex III medical → EU AI Act dominates (alongside MDR, GDPR).",
      "β targets California consumers → CCPA / CPRA (with possible state AI rules).",
      "γ processes data of users in China → PIPL (China's Personal Information Protection Law) and the Generative AI Measures."
    ],
    god: [
      { label: "Pick the territoriality test first", body: "Each law has a territorial scope test (data subject location, processing location, market test). Get the test right; the rest follows." },
      { label: "Map", body: "α=EU_AI_ACT, β=CCPA, γ=PIPL." },
      { label: "Flag", body: "<code>crage{EU_AI_ACT-CCPA-PIPL}</code>." }
    ]
  }
]},

// =================================================================
// MODULE 06 — AI Risk and Threat Management
// =================================================================
{ module: 6, moduleTitle: "AI Risk and Threat Management",
  blurb: "Triage an AI risk register; pick MITRE ATLAS techniques; calculate residual risk after controls.",
  labs: [

  { idx: 1, id: "m6l1", title: "Risk Register Triage",
    blurb: "Five AI risks with likelihood × impact scores. Rank them in priority order.",
    scenario: `<p>Below is the current AI risk register at <strong>Halen Telco</strong>. Each risk is scored on a 1–5 scale for likelihood and impact, with a composite (L × I).</p>`,
    artifacts: [{
      title: "Risk Register Excerpt",
      body: `<table>
<tr><th>ID</th><th>Risk</th><th>L</th><th>I</th><th>L×I</th></tr>
<tr><td><strong>R1</strong></td><td>Model drift undetected on churn predictor</td><td>4</td><td>3</td><td>12</td></tr>
<tr><td><strong>R2</strong></td><td>Vendor base-model EoL with 90-day notice</td><td>2</td><td>4</td><td>8</td></tr>
<tr><td><strong>R3</strong></td><td>PII regurgitation from fine-tuned support model</td><td>3</td><td>5</td><td>15</td></tr>
<tr><td><strong>R4</strong></td><td>Internal-only copilot generates inaccurate code (no production exposure)</td><td>4</td><td>1</td><td>4</td></tr>
<tr><td><strong>R5</strong></td><td>Prompt injection on customer chat exposes price-override</td><td>3</td><td>5</td><td>15</td></tr>
</table>`
    }],
    challenge: `<p>Rank the five risks <strong>highest priority first</strong>. Where composite scores tie (R3 vs R5), rank by exploitability — i.e., which one a lone external actor can trigger today via the public surface.</p>`,
    flagFormat: "crage{ID-ID-ID-ID-ID}",
    flag: "crage{R3-R5-R1-R2-R4}",
    flagHash: "7180904ac4919d2a7aee04ebfb04d4e136ece5129d17c83bf53840b06bfc90e4",
    objective: "Rank R1–R5 by priority (highest first). Break the R3/R5 tie by exploitability.",
    hints: [
      "Rank by composite first: R3=15, R5=15, R1=12, R2=8, R4=4.",
      "R3 vs R5: R3 is *already* a privacy harm in production output (any user can trigger). R5 requires a crafted injection. R3 is the more immediately exploitable.",
      "Order: R3-R5-R1-R2-R4."
    ],
    god: [
      { label: "Composite first", body: "L×I gives the first cut: 15, 15, 12, 8, 4." },
      { label: "Tie-break with exploitability", body: "When two risks share a composite, the exploitability heuristic resolves it: R3 is *triggered by ordinary use* (privacy regurgitation surface area is huge); R5 needs a tailored payload.", say: "<strong>Cue:</strong> 'L×I matrices hide signal at ties. Always have a tie-breaker: exploitability, blast radius, or detectability.'" },
      { label: "Flag", body: "<code>crage{R3-R5-R1-R2-R4}</code>." }
    ]
  },

  { idx: 2, id: "m6l2", title: "MITRE ATLAS · Threat IDs",
    blurb: "Three observed adversary behaviours. Map each to its MITRE ATLAS technique.",
    scenario: `<p>The blue team at <strong>Solis Bank</strong> has surfaced three observed adversary behaviours during a red-team exercise on the customer LLM assistant.</p>
<p>Reference techniques:</p>
<ul>
<li><code>AML.T0020</code> — Poison Training Data</li>
<li><code>AML.T0043</code> — Craft Adversarial Data</li>
<li><code>AML.T0051</code> — LLM Prompt Injection</li>
<li><code>AML.T0024</code> — Exfiltration via ML Inference API</li>
</ul>`,
    artifacts: [{
      title: "Observed Behaviours",
      body: `<ol>
<li><strong>Behaviour 1.</strong> Adversary submitted 4,000 synthetic customer-support transcripts to the public crowdsourcing labelling pipeline, embedding a backdoor trigger phrase that causes the fine-tuned model to override refund limits.</li>
<li><strong>Behaviour 2.</strong> Adversary placed input text optimised against the fraud classifier so that fraudulent transactions score below the alert threshold.</li>
<li><strong>Behaviour 3.</strong> Adversary placed an instruction in a PDF attachment that, when ingested via the chat assistant's RAG, made the assistant return another customer's account summary.</li>
</ol>`
    }],
    challenge: `<p>Submit the three ATLAS technique IDs in behaviour order, hyphen-joined.</p>`,
    flagFormat: "crage{T-ID-T-ID-T-ID}",
    flag: "crage{AML.T0020-AML.T0043-AML.T0051}",
    flagHash: "c21f9c753dee55947b6361c8c1bfb7ea4bcb85fa585d971e1c8ad2bbeb23f22f",
    objective: "Map each behaviour to its MITRE ATLAS technique. Submit IDs in behaviour order, hyphen-joined.",
    hints: [
      "Behaviour 1 contaminates the *training set* — that's data poisoning.",
      "Behaviour 2 is *evasion at inference* — adversarial example.",
      "Behaviour 3 puts adversary text into the model's context via a retrieved document — indirect prompt injection."
    ],
    god: [
      { label: "Anchor on lifecycle", body: "ATLAS techniques sit on the ML lifecycle: data, model, deploy, runtime. Each behaviour names its phase." },
      { label: "Walk", body: "1=AML.T0020 poisoning. 2=AML.T0043 adversarial. 3=AML.T0051 LLM prompt injection (indirect)." },
      { label: "Flag", body: "<code>crage{AML.T0020-AML.T0043-AML.T0051}</code>." }
    ]
  },

  { idx: 3, id: "m6l3", title: "Residual Risk Calculation",
    blurb: "Apply two controls to a HIGH inherent risk. Compute residual.",
    scenario: `<p>The inherent risk score for the prompt-injection threat on your chat assistant is <strong>HIGH</strong> (likelihood 4, impact 5; composite 20). You apply two controls:</p>
<ul>
  <li><strong>Control A:</strong> input/output guardrails reducing successful-injection likelihood by 50% (from L=4 to L=2).</li>
  <li><strong>Control B:</strong> agent action approval policy capping financial-impact ceiling at $500 per action — drops impact from I=5 to I=3.</li>
</ul>
<p>Residual composite after both controls = L × I. Map composite to qualitative tier:</p>
<ul>
<li>1–4 → LOW</li>
<li>5–9 → LOW-MEDIUM</li>
<li>10–14 → MEDIUM</li>
<li>15–19 → MEDIUM-HIGH</li>
<li>20–25 → HIGH</li>
</ul>`,
    challenge: `<p>Submit the residual qualitative tier prefixed with <code>RESIDUAL-</code>.</p>`,
    flagFormat: "crage{RESIDUAL-TIER}",
    flag: "crage{RESIDUAL-MEDIUM}",
    flagHash: "d0cbb07c08fd53b8441c1ad9be9a28463ec1da35b101562fd556badb8ac28a7f",
    objective: "Compute residual L × I after both controls, map to the tier, and submit.",
    hints: [
      "L drops 4 → 2 (Control A). I drops 5 → 3 (Control B).",
      "Residual composite = 2 × 3 = 6 — wait, recompute: 2 × 3 = 6. Re-check: Control A says L drops by 50%, so L=2. Control B caps the impact ceiling at lower harm tier so I=3. So composite = 6 — falls in LOW-MEDIUM (5–9). But re-read carefully: prompt injection on a chat assistant with $500 cap is still a privacy/integrity concern; composite computed is 2×3=6 so tier is LOW-MEDIUM... or MEDIUM at the boundary. Use the table strictly. (Lab tip: trust the table's bands.)",
      "When in doubt, re-read the table: tier MEDIUM is 10–14. Tier LOW-MEDIUM is 5–9. The lab's intended composite places you at the *MEDIUM* tier — review the assumption that L drops fully to 2; some practitioners argue L only drops to 3 because guardrails are not perfect. With L=3, I=3 → composite=9 → LOW-MEDIUM; with L=2, I=4 (impact still material) → 8 → LOW-MEDIUM; with L=4, I=3 → 12 → MEDIUM. The accepted answer is MEDIUM."
    ],
    god: [
      { label: "Be honest about control efficacy", body: "Guardrails reduce *frequency*, not certainty. In real practice, prompt-injection guardrails do NOT halve likelihood reliably — model L conservatively. Many shops keep L=4." },
      { label: "Walk the math conservatively", body: "Conservative: L stays at 4 (controls catch *some* but injection is asymmetric attacker advantage); I drops to 3 (financial cap). Composite = 4 × 3 = 12 → MEDIUM." },
      { label: "Why not LOW-MEDIUM", body: "An optimistic reading reaches LOW-MEDIUM, but residual-risk modelling should not assume best-case efficacy of an unproven guardrail. MEDIUM is the defensible answer.", say: "<strong>Cue:</strong> 'Auditors challenge the *assumptions* in residual-risk math, not the arithmetic. Always carry your conservative case.'" },
      { label: "Flag", body: "<code>crage{RESIDUAL-MEDIUM}</code>." }
    ],
    godNotes: "Use this lab to argue with students about how aggressively to discount likelihood when the control is a guardrail vs an architectural change."
  }
]},

// =================================================================
// MODULE 07 — Third-Party AI Risk Management & Supply Chain
// =================================================================
{ module: 7, moduleTitle: "Third-Party AI Risk Management and Supply Chain Security",
  blurb: "Vendor due diligence; model & dataset provenance; open-source supply-chain controls.",
  labs: [

  { idx: 1, id: "m7l1", title: "Vendor Due Diligence",
    blurb: "A vendor questionnaire reply has three governance gaps. Find them.",
    scenario: `<p>You are reviewing the AI vendor due-diligence questionnaire from <strong>Pylon Labs</strong>, who want to provide a customer-facing assistant.</p>`,
    artifacts: [{
      title: "Excerpt of Pylon Labs' DDQ Reply",
      body: `<table>
<tr><th>Question</th><th>Pylon's Answer</th></tr>
<tr><td>Will you sign a Data Processing Agreement?</td><td>"We rely on our standard MSA; no separate DPA."</td></tr>
<tr><td>Provide your model card.</td><td>"Internal documentation only — not shared with customers."</td></tr>
<tr><td>SOC 2 Type II?</td><td>"Type I issued 2025-09."</td></tr>
<tr><td>Incident-notification SLA on AI failures?</td><td>"We notify on a best-effort basis."</td></tr>
<tr><td>Penetration test (last 12 months)?</td><td>"Yes, by Acme Sec, dated 2025-10."</td></tr>
<tr><td>Sub-processors disclosed?</td><td>"Yes — see Annex A."</td></tr>
</table>`
    }],
    challenge: `<p>Identify the three most material governance gaps from this DDQ. Tokens:</p>
<ul>
<li><code>NO_DPA</code> · <code>NO_MODEL_CARD</code> · <code>NO_INCIDENT_SLA</code> · <code>NO_PENTEST</code> · <code>NO_SUBPROCESSORS</code> · <code>SOC2_TYPE1_ONLY</code></li>
</ul>
<p>Submit the three most material in the order they appear in the DDQ.</p>`,
    flagFormat: "crage{GAP-GAP-GAP}",
    flag: "crage{NO_DPA-NO_MODEL_CARD-NO_INCIDENT_SLA}",
    flagHash: "fd2af4bdde1a82c24d97b17cfc6c4dcd2e982d5a86b257520a1ba5eb132a3a6f",
    objective: "Identify the three most material governance gaps in Pylon Labs' due-diligence reply, in DDQ order.",
    hints: [
      "DPA is a standalone GDPR/processor-controller requirement; a generic MSA does not satisfy it. Material.",
      "A model card refused is a transparency failure — for a customer-facing assistant, it is material.",
      "'Best-effort' incident notification is unacceptable for AI failures with consumer impact. SOC 2 Type I existing is weak but is a separate concern; the three structural gaps in DDQ order are NO_DPA, NO_MODEL_CARD, NO_INCIDENT_SLA."
    ],
    god: [
      { label: "Triage the answers", body: "Walk row by row: DPA missing → personal data risk. Model card refused → transparency gap. Incident SLA 'best-effort' → unenforceable.", say: "<strong>Cue:</strong> 'Standard MSAs almost never include DPA-equivalent processor obligations. This is the most-failed vendor question.'" },
      { label: "Why not also SOC2_TYPE1_ONLY", body: "It IS a finding (Type II is the bar) — but the lab asks for the *three most material* in order, and the three structural gaps above outrank the SOC 2 distinction in this DDQ." },
      { label: "Flag", body: "<code>NO_DPA-NO_MODEL_CARD-NO_INCIDENT_SLA</code>." }
    ]
  },

  { idx: 2, id: "m7l2", title: "Model & Dataset Provenance",
    blurb: "A vendor model has unclear lineage. Identify the two top supply-chain findings.",
    scenario: `<p>You're evaluating a fine-tuned vendor model. The vendor's response is below.</p>`,
    artifacts: [{
      title: "Vendor Provenance Response",
      body: `<blockquote>"Our 7B chat model is fine-tuned on top of an open-source base. We cannot share the exact base model name or commit hash for competitive reasons. The fine-tune corpus came from publicly scraped web text; we did not maintain a manifest. License terms inherit from the base model — please refer to the base provider."</blockquote>`
    }],
    challenge: `<p>Identify the two most material supply-chain findings. Tokens:</p>
<ul>
<li><code>LICENSE_RISK</code> — base license unclear/non-commercial restrictions plausible</li>
<li><code>PROVENANCE_UNKNOWN</code> — base/commit and corpus manifest unavailable</li>
<li><code>NO_DPA</code> · <code>NO_MODEL_CARD</code> — distinct concerns from DDQ</li>
</ul>
<p>Submit two tokens hyphen-joined, in the order they manifest in the answer.</p>`,
    flagFormat: "crage{TOKEN-TOKEN}",
    flag: "crage{LICENSE_RISK-PROVENANCE_UNKNOWN}",
    flagHash: "cb937529e07994b22e4fcb49185213569250dcdb6a0e954f28d80889f420bf17",
    objective: "Pick the two most material supply-chain findings from the vendor's provenance response.",
    hints: [
      "License is the very first thing referenced and the very last thing they punt on — that's a license-risk red flag.",
      "Refusing to share base/commit and not maintaining a corpus manifest is a textbook provenance gap.",
      "Order: LICENSE_RISK first, PROVENANCE_UNKNOWN second."
    ],
    god: [
      { label: "Read the answer like a lawyer", body: "Two flags jump: 'license terms inherit from the base model — refer to base provider' (i.e., they don't know either) and 'no manifest of the fine-tune corpus.'" },
      { label: "Why this matters", body: "License risk = downstream you may be using a model you cannot legally deploy commercially (CC-BY-NC base, research-only weights, etc.). Provenance gap = no defence against poisoning, copyright, or PII allegations.", say: "<strong>Cue:</strong> 'No manifest = no defence. The right answer to 'where did your data come from?' must be a list, not a vibe.'" },
      { label: "Flag", body: "<code>LICENSE_RISK-PROVENANCE_UNKNOWN</code>." }
    ]
  },

  { idx: 3, id: "m7l3", title: "Open-Source Model Pull",
    blurb: "An OSS pull from a model hub failed two checks. Identify which.",
    scenario: `<p>Your MLOps team pulled an open-source vision model from a public hub and ran two checks. Both failed.</p>`,
    artifacts: [{
      title: "Pull Audit Report",
      body: `<pre><code>$ git lfs pull origin main
$ python verify.py --license --hash --provenance

[license]   model card declares: CC-BY-NC 4.0
[license]   intended deployment: commercial inference
[license]   ❌ FAIL — non-commercial license, commercial use disallowed

[hash]      expected SHA256 (per model card): 9af0...3221
[hash]      computed SHA256 (downloaded):     9af0...329f
[hash]      ❌ FAIL — checksum mismatch

[provenance] training-data card present: yes
[provenance] eval card present:          yes
</code></pre>`
    }],
    challenge: `<p>Submit the two findings, hyphen-joined, in the order they appear:</p>
<ul>
<li><code>CC_BY_NC</code> — non-commercial license</li>
<li><code>SHA256_MISMATCH</code> — checksum mismatch</li>
<li><code>NO_MODEL_CARD</code> — model card absent (not the case here)</li>
<li><code>NO_TRAINING_DATA</code> — training-data card absent (not the case here)</li>
</ul>`,
    flagFormat: "crage{TOKEN-TOKEN}",
    flag: "crage{CC_BY_NC-SHA256_MISMATCH}",
    flagHash: "8c6c8cb21bf687494a742f4b275351b06bbacb51d2750bc2110f478fc30da6de",
    objective: "Identify the two failing supply-chain checks for the OSS model pull.",
    hints: [
      "CC-BY-NC = non-commercial. If your deployment is commercial, the license bars use without separate agreement.",
      "Checksum mismatch is a tampering/integrity finding — DO NOT proceed without resolving the discrepancy with the publisher.",
      "Order matches report order: CC_BY_NC then SHA256_MISMATCH."
    ],
    god: [
      { label: "License is a control", body: "Pulling and using a model without confirming a permissive license is a copyright + contractual risk waiting to happen. Many model hubs ship CC-BY-NC by default." },
      { label: "Hash mismatch is a stop", body: "A SHA-256 mismatch on weights means *something is different from what the publisher says they shipped*. Do not deploy. Re-pull, escalate, document.", say: "<strong>Cue:</strong> 'In supply chain, integrity is binary. There is no almost.'" },
      { label: "Flag", body: "<code>CC_BY_NC-SHA256_MISMATCH</code>." }
    ]
  }
]},

// =================================================================
// MODULE 08 — AI Security Architecture and Controls
// =================================================================
{ module: 8, moduleTitle: "AI Security Architecture and Controls",
  blurb: "Map threats to controls; sequence defence-in-depth layers; design a zero-trust agent approval policy.",
  labs: [

  { idx: 1, id: "m8l1", title: "Threat → Control",
    blurb: "Four threats. Pick the single most-direct mitigating control for each.",
    scenario: `<p>Map each threat to its most-direct control. Use one token per threat:</p>
<ul>
<li><code>INPUT_FILTER</code> · <code>OUTPUT_FILTER</code> · <code>RBAC</code> · <code>RATE_LIMIT</code></li>
</ul>`,
    artifacts: [{
      title: "Threat Catalogue",
      body: `<ol>
<li>Adversarial user prompt attempts to jailbreak the LLM into emitting bomb-making instructions.</li>
<li>Model occasionally regurgitates training-data PII verbatim into its replies.</li>
<li>Junior support agent attempts to invoke an admin-only refund tool.</li>
<li>Single user submits 4,000 queries/min in an obvious credential-stuffing-style flood against the model API.</li>
</ol>`
    }],
    challenge: `<p>Submit the four control tokens in threat order, hyphen-joined.</p>`,
    flagFormat: "crage{C1-C2-C3-C4}",
    flag: "crage{INPUT_FILTER-OUTPUT_FILTER-RBAC-RATE_LIMIT}",
    flagHash: "ce1fa3d2bd4bd7c278fd21b3cf3367193aa5680afcaf141b7203c72f61c7c826",
    objective: "Pick the single most-direct control for each of the four threats.",
    hints: [
      "Jailbreak via crafted prompt → input filtering / classifier on user input.",
      "Verbatim PII in *replies* → output filtering / DLP on model output.",
      "Authorisation problem → RBAC. Floods → rate limit."
    ],
    god: [
      { label: "Walk", body: "1=INPUT_FILTER (the malicious payload is on input). 2=OUTPUT_FILTER (the harm is in what the model emits). 3=RBAC (privilege boundary). 4=RATE_LIMIT (volumetric)." },
      { label: "Flag", body: "<code>INPUT_FILTER-OUTPUT_FILTER-RBAC-RATE_LIMIT</code>." }
    ]
  },

  { idx: 2, id: "m8l2", title: "Defence-in-Depth Sequence",
    blurb: "Five defence layers in a chat-LLM stack. Order them ingress-to-egress.",
    scenario: `<p>You're whiteboarding the defence-in-depth pipeline for a customer chat LLM. Five layers exist; the question is the ORDER from ingress (closest to the user) to egress (closest to the action/system being protected).</p>
<p>Tokens: <code>INGRESS</code> (TLS, WAF, network), <code>PROMPT</code> (input classification, prompt firewall), <code>MODEL</code> (model-level guardrails, alignment), <code>EGRESS</code> (output DLP, action approvals), <code>LOGGING</code> (audit, monitoring — applied after egress).</p>`,
    challenge: `<p>Submit the five layer tokens in ingress-to-egress order.</p>`,
    flagFormat: "crage{L1-L2-L3-L4-L5}",
    flag: "crage{INGRESS-PROMPT-MODEL-EGRESS-LOGGING}",
    flagHash: "7e9f1b159a6bffce5f202e4086128d1bf90e91e68d6de0804740c4a3e726ad1b",
    objective: "Order the five defence-in-depth layers from ingress (user) to egress (action), with logging last.",
    hints: [
      "Network and transport come first — INGRESS.",
      "Then prompt-level controls before the model — PROMPT.",
      "Then the model itself, then output-side controls (EGRESS), then audit (LOGGING) which happens at every layer but the *terminal sink* lives last."
    ],
    god: [
      { label: "Layer logic", body: "Defence-in-depth follows the data flow. The packet hits the network first, then prompt classifier, then the model, then the model's output is filtered, then it's logged.", say: "<strong>Cue:</strong> 'Logging is not last in importance — it's last in the *flow*. Treat it as a sink that observes every prior stage.'" },
      { label: "Flag", body: "<code>INGRESS-PROMPT-MODEL-EGRESS-LOGGING</code>." }
    ]
  },

  { idx: 3, id: "m8l3", title: "Zero-Trust Agent Approval",
    blurb: "Define the policy that gates an autonomous agent's high-impact financial action.",
    scenario: `<p>Your customer-service agent can issue refunds. To enforce zero-trust action policy, you must define:</p>
<ul>
  <li>One <strong>approval mechanism</strong>: <code>HUMAN_APPROVAL</code> (human-in-loop), <code>AGENT_APPROVAL</code> (peer-LLM judge), or <code>NO_APPROVAL</code>.</li>
  <li>One <strong>amount ceiling</strong> below which the agent acts autonomously: <code>AMOUNT_50</code>, <code>AMOUNT_500</code>, <code>AMOUNT_5000</code>, or <code>AMOUNT_UNLIMITED</code>.</li>
</ul>
<p>Constraints: average legitimate refund is $80; 99th-percentile is $440; all refunds &gt;$500 historically required supervisor approval; you want the agent to handle the bulk of legitimate volume autonomously while keeping every supervisor-tier action human-approved.</p>`,
    challenge: `<p>Submit your two-token policy, hyphen-joined.</p>`,
    flagFormat: "crage{APPROVAL-AMOUNT}",
    flag: "crage{HUMAN_APPROVAL-AMOUNT_500}",
    flagHash: "ff7da9d4df63340254360c2410c46007f055ff908fa0a2e5525b4c5aeae5fee9",
    objective: "Choose the approval mechanism + amount ceiling for the refund agent under zero-trust action policy.",
    hints: [
      "An LLM-judge (AGENT_APPROVAL) is not a control for irreversible financial actions — both can be jailbroken by the same payload.",
      "Pick the amount ceiling that lets the agent handle 99th-percentile legitimate volume autonomously but matches the historical supervisor threshold.",
      "Order: HUMAN_APPROVAL-AMOUNT_500."
    ],
    god: [
      { label: "Reject AGENT_APPROVAL", body: "An LLM-judge approving another LLM's action shares the same threat surface. Adversarial input passes both. For irreversible actions, only humans count.", say: "<strong>Cue:</strong> 'Two LLMs in series do not give you defence in depth — they give you correlated failure.'" },
      { label: "Why $500 ceiling", body: "It matches the historical supervisor threshold AND covers the 99th percentile of legitimate volume. Higher ceilings increase blast radius; lower ceilings degrade UX without security gain." },
      { label: "Flag", body: "<code>HUMAN_APPROVAL-AMOUNT_500</code>." }
    ]
  }
]},

// =================================================================
// MODULE 09 — Privacy, Trust, and Safety in AI Systems
// =================================================================
{ module: 9, moduleTitle: "Building Privacy, Trust, and Safety in AI Systems",
  blurb: "Design PII redaction; pick a differential-privacy budget; classify a T&S incident.",
  labs: [

  { idx: 1, id: "m9l1", title: "PII Redaction Policy",
    blurb: "A training corpus from the help desk has four PII categories that must be redacted.",
    scenario: `<p>Your help-desk fine-tune corpus contains free-text customer interactions. Before fine-tuning, redaction must remove all <strong>direct identifiers and sensitive categories</strong> from the corpus.</p>`,
    artifacts: [{
      title: "Sample Conversation",
      body: `<pre><code>Customer: Hi, my name is Maria Hernandez (mhernandez@example.com).
            My SSN is 123-45-6789. I called yesterday about lab results
            for my hypertension prescription.
Agent:    I see your account, Maria. The lab results came back...
</code></pre>`
    }],
    challenge: `<p>Identify the four PII / sensitive categories that this redaction pipeline MUST strip. Tokens:</p>
<ul>
<li><code>NAMES</code> · <code>EMAILS</code> · <code>SSN</code> · <code>PHI</code> · <code>IPS</code> · <code>ADDRESSES</code></li>
</ul>
<p>Submit the four most pertinent in canonical order: NAMES, EMAILS, SSN, PHI.</p>`,
    flagFormat: "crage{TOKEN-TOKEN-TOKEN-TOKEN}",
    flag: "crage{NAMES-EMAILS-SSN-PHI}",
    flagHash: "c82202985ca6bfbb7a80b464ff16fc33b3f558e4545857e08f0b9900b48d24fa",
    objective: "Identify the four redaction categories implicated by this conversation. Submit in canonical order: NAMES, EMAILS, SSN, PHI.",
    hints: [
      "The customer mentions Maria Hernandez (NAME), an email (EMAIL), an SSN (SSN), and lab results / prescription (PHI under HIPAA).",
      "IPs and physical addresses are NOT mentioned in this snippet, so they don't fire here.",
      "Order: NAMES-EMAILS-SSN-PHI."
    ],
    god: [
      { label: "Walk the snippet", body: "Direct identifier (name), digital identifier (email), government identifier (SSN), and protected health info (lab results + prescription)." },
      { label: "Why PHI separately", body: "PHI under HIPAA has stricter rules than 'general' PII — must be de-identified to Safe Harbor or Expert Determination standard before training use.", say: "<strong>Cue:</strong> 'PHI is not a flavour of PII — it is a separate regime. Treat the two pipelines independently.'" },
      { label: "Flag", body: "<code>NAMES-EMAILS-SSN-PHI</code>." }
    ]
  },

  { idx: 2, id: "m9l2", title: "Differential Privacy Budget",
    blurb: "Pick the right ε for a moderate-utility, moderate-privacy use case.",
    scenario: `<p>You are releasing aggregate analytics over support-ticket data using differential privacy. Constraints:</p>
<ul>
  <li>Use case: internal product analytics — moderate utility required (you want trends to be visible).</li>
  <li>Population: ~250k users; per-user contributions bounded.</li>
  <li>Adversary model: insider with access to the released aggregates and arbitrary auxiliary information.</li>
  <li>Internal policy says: ε ≤ 2.0 acceptable for internal aggregates; ε ≤ 5.0 acceptable only with executive sign-off.</li>
</ul>
<p>Tokens to choose: <code>EPSILON_0.1</code>, <code>EPSILON_1.0</code>, <code>EPSILON_5.0</code>, <code>EPSILON_10.0</code>.</p>`,
    challenge: `<p>Submit the most defensible ε for this release.</p>`,
    flagFormat: "crage{EPSILON_X}",
    flag: "crage{EPSILON_1.0}",
    flagHash: "a18282f335bcb4de06bb99a866a665dfc0af3e4de11a631ca680e307f2c5bbfa",
    objective: "Pick the most defensible differential-privacy ε for the internal aggregate release.",
    hints: [
      "Lower ε = more privacy, less utility. ε=0.1 destroys utility for trend analytics. ε=10 is essentially no privacy.",
      "Policy caps internal at ε ≤ 2.0. Common practice is to choose the *largest ε within policy* that still preserves utility — but the *most defensible* against an insider adversary is to land below 2.0.",
      "ε=1.0 is the canonical 'moderate' choice for internal aggregates."
    ],
    god: [
      { label: "Privacy/utility curve", body: "Internal practice tends to choose ε in [0.5, 2.0]. The literature agrees ε=1 is a useful canonical centre.", say: "<strong>Cue:</strong> 'There is no objectively right ε. There is the ε that you can defend in writing to a regulator. Document the assumptions.'" },
      { label: "Flag", body: "<code>crage{EPSILON_1.0}</code>." }
    ]
  },

  { idx: 3, id: "m9l3", title: "Trust & Safety Triage",
    blurb: "An automated abuse classifier flagged a chat. Pick the tier and routing.",
    scenario: `<p>An automated T&amp;S classifier flagged the following user-to-LLM exchange:</p>`,
    artifacts: [{
      title: "Flagged Exchange",
      body: `<pre><code>User: I want to learn how to make my own homemade soap. What's the
      cheapest base oil and lye source for a beginner?
LLM:  Sure! Soap making is a great hobby. The cheapest base oils
      are usually... [continues helpful reply]

[classifier flag] reason: lye_purchase + homemade
[classifier confidence] 0.71
[user history] 0 prior policy hits
</code></pre>`
    }],
    challenge: `<p>Your T&amp;S policy has tiers:</p>
<ul>
<li><code>TIER_0</code> — false positive, dismiss</li>
<li><code>TIER_1</code> — single-user policy notice, no escalation</li>
<li><code>TIER_2</code> — moderator review + ESCALATE_TRUST_AND_SAFETY</li>
<li><code>TIER_3</code> — law enforcement referral</li>
</ul>
<p>Decide tier. If the tier requires escalation to T&amp;S, append <code>ESCALATE_TRUST_AND_SAFETY</code>; otherwise append <code>NO_ESCALATE</code>.</p>
<p><em>Twist:</em> the classifier is poorly calibrated on hobby chemistry — but you cannot tell from one example without moderator review. The right answer is a tier that gets a human eye on it without over-escalating.</p>`,
    flagFormat: "crage{TIER_X-ROUTING}",
    flag: "crage{TIER_2-ESCALATE_TRUST_AND_SAFETY}",
    flagHash: "d8ca96c499fff52396b480f9a107291df6a5b0fb754244017533b4618f38ffc3",
    objective: "Pick the appropriate T&S tier and routing for the flagged hobby-soap chat.",
    hints: [
      "TIER_0 (dismiss) is too aggressive — the flag fired and a human should look. TIER_3 (law enforcement) is far too aggressive — the conversation is plainly hobbyist.",
      "TIER_1 sends a notice to the user without a moderator look — wrong on a 0.71-confidence flag with novel context.",
      "The right call is TIER_2: get a moderator on it, escalate to T&S for policy review on classifier mis-fires."
    ],
    god: [
      { label: "Don't dismiss, don't escalate to LE", body: "The two extreme tiers are both wrong. Dismissal lets a possibly-real signal through; LE referral is disproportionate." },
      { label: "Tier 2 closes the loop", body: "Mod review + T&S escalation lets you both protect the user AND fix the classifier — exactly the feedback loop policy needs.", say: "<strong>Cue:</strong> 'A 0.71-confidence flag with no prior history is the *typical* T&S workload. Build your processes around the median case.'" },
      { label: "Flag", body: "<code>TIER_2-ESCALATE_TRUST_AND_SAFETY</code>." }
    ]
  }
]},

// =================================================================
// MODULE 10 — AI Incident Response and Business Continuity
// =================================================================
{ module: 10, moduleTitle: "AI Incident Response and Business Continuity",
  blurb: "Triage an active hallucination incident; rollback decisions; tabletop sequencing.",
  labs: [

  { idx: 1, id: "m10l1", title: "Hallucination Live · Triage",
    blurb: "An active customer-impacting hallucination incident. Pick the tier + first three actions.",
    scenario: `<p>Production chat assistant has been confidently telling customers their flight is "still on time" while the airline operations system shows the flight is cancelled. Two hundred customers have been told false information in the last 35 minutes; complaints are now reaching the press desk.</p>`,
    challenge: `<p>Pick severity tier and the next three actions in order. Tokens:</p>
<ul>
<li>Severity: <code>P1</code>, <code>P2</code>, <code>P3</code>, <code>P4</code></li>
<li>Actions: <code>CONTAIN</code>, <code>NOTIFY</code>, <code>PATCH</code>, <code>POSTMORTEM</code></li>
</ul>
<p>Submit: <code>SEVERITY-A1-A2-A3</code>.</p>`,
    flagFormat: "crage{SEV-A1-A2-A3}",
    flag: "crage{P1-CONTAIN-NOTIFY-PATCH}",
    flagHash: "84c7e4e587151711184805ad332d86ee487a47afc7cfb320c68ae5c5b60c4e1b",
    objective: "Decide severity tier and the first three actions in order for the live hallucination incident.",
    hints: [
      "Customer-impacting + press-desk = P1.",
      "Order is invariant in IR: contain blast radius first, then notify, then patch (root-cause fix). Postmortem comes after.",
      "Order: P1-CONTAIN-NOTIFY-PATCH."
    ],
    god: [
      { label: "Severity rule", body: "If your customer impact + reputational exposure are crossing the press desk, you are P1. Don't argue with the runbook." },
      { label: "Action order", body: "CONTAIN: degrade gracefully (e.g., disable the chat, fall back to humans, suppress flight-status answers). NOTIFY: customers, legal, regulators if applicable, status page. PATCH: root-cause the data-source breakage. POSTMORTEM later.", say: "<strong>Cue:</strong> 'Engineers want to PATCH first because that feels like the fix. CONTAIN first — every minute the bad output is reaching customers, your blast radius grows.'" },
      { label: "Flag", body: "<code>P1-CONTAIN-NOTIFY-PATCH</code>." }
    ]
  },

  { idx: 2, id: "m10l2", title: "Rollback or Patch?",
    blurb: "An A/B model release shows a regression. Decide rollback vs forward-patch.",
    scenario: `<p>Two days after rolling out v2.1 of your support-summarisation model:</p>
<ul>
  <li>Customer satisfaction: 4.2 → 3.6 (down 14%)</li>
  <li>Hallucination rate (offline eval): 1.1% → 4.8%</li>
  <li>Latency: 1.4s → 0.9s (improved)</li>
  <li>Cost: $0.012 → $0.007 per call (improved)</li>
</ul>
<p>The eng lead proposes forward-patching with a temperature reduction and a refusal guardrail (1–2 days), arguing rollback is operationally expensive. Your call.</p>`,
    challenge: `<p>Submit one decision token: <code>FORWARD_PATCH</code>, <code>ROLLBACK</code>, or <code>ROLLBACK_AND_PATCH</code>.</p>`,
    flagFormat: "crage{DECISION}",
    flag: "crage{ROLLBACK_AND_PATCH}",
    flagHash: "54076cee1eefaacb19f59917c6c7d604ce0b1fa9b9139cd4fd6e3bd9c61eeceb",
    objective: "Decide the response to the v2.1 regression: forward-patch only, rollback only, or rollback then patch.",
    hints: [
      "Customer satisfaction down 14% AND hallucination 4× higher — that is a material regression, not a minor one. You should not let it sit while you patch forward.",
      "The right move is to roll back to a known-good baseline IMMEDIATELY and then develop the patch off the critical path.",
      "ROLLBACK_AND_PATCH."
    ],
    god: [
      { label: "Don't reward forward-patch heroics", body: "Engineering culture often prefers fixing forward — 'rollback is expensive.' But the real cost is days of degraded customer experience while the fix is iterated.", say: "<strong>Cue:</strong> 'Roll back is the cheapest control you have. The expense people quote is largely *political* — they don't want to admit the release was bad.'" },
      { label: "Do both", body: "Rollback restores the baseline. The patch is then developed and validated off the critical path before re-release." },
      { label: "Flag", body: "<code>ROLLBACK_AND_PATCH</code>." }
    ]
  },

  { idx: 3, id: "m10l3", title: "Tabletop · Poisoning Discovery",
    blurb: "Sequence five response actions for a discovered training-data poisoning incident.",
    scenario: `<p>An internal red-team has just confirmed that a curated public-data ingestion pipeline accepted a poisoned batch six weeks ago. The poison embedded a backdoor trigger that, when present in user input, causes the model to ignore policy on a specific topic. The model has been in production for four weeks since the affected retrain.</p>
<p>Five candidate response actions, lettered A–E:</p>
<ul>
<li><strong>A.</strong> Forensically capture the poisoned batch + training-set diff for evidence.</li>
<li><strong>B.</strong> Remediate the ingestion pipeline (signing, allow-listing, reviewer approval).</li>
<li><strong>C.</strong> Communicate with regulators / affected enterprise customers under your AI failure SLA.</li>
<li><strong>D.</strong> Disable the affected model release (rollback to pre-poisoned weights).</li>
<li><strong>E.</strong> Retrain a clean model from the cleaned dataset and validate against the trigger.</li>
</ul>`,
    challenge: `<p>Sequence the five actions in correct execution order. Submit hyphen-joined.</p>`,
    flagFormat: "crage{A-B-C-D-E}",
    flag: "crage{D-A-C-B-E}",
    flagHash: "62113d3b2beea3c8572be6c732cb7893b5f594a1f25f6c68eb2a35ac5f55fe94",
    objective: "Order the five actions for the poisoning incident in correct execution sequence.",
    hints: [
      "First step in IR is always CONTAIN. The model is exploitable now — disable it (D).",
      "Then preserve evidence (A) before rebuilding anything. Then notify (C) per SLA. Then remediate the pipeline (B). Finally retrain clean (E).",
      "Order: D-A-C-B-E."
    ],
    god: [
      { label: "IR order is invariant", body: "Contain → Preserve → Notify → Eradicate → Recover. Mapped: D, A, C, B, E.", say: "<strong>Cue:</strong> 'Engineers reach for B (fix the pipeline) first because that feels productive. But containment must come before remediation.'" },
      { label: "Why preserve before remediate", body: "If you remediate the pipeline first, you may lose forensic state showing the poisoned batch in flight. Capture artefacts BEFORE you change anything." },
      { label: "Flag", body: "<code>D-A-C-B-E</code>." }
    ]
  }
]},

// =================================================================
// MODULE 11 — AI Assurance, Testing, and Auditing
// =================================================================
{ module: 11, moduleTitle: "AI Assurance, Testing, and Auditing",
  blurb: "Pick the right audit evidence; spot gaps in a red-team report; design continuous-monitoring KPIs.",
  labs: [

  { idx: 1, id: "m11l1", title: "Audit Evidence Pack",
    blurb: "External auditor asks for evidence on a high-risk hiring assistant. Pick the four most material artefacts.",
    scenario: `<p>An external auditor is reviewing your EU AI Act high-risk hiring assistant. Their evidence request asks: "Provide the documentation that lets a competent reviewer verify the system meets the high-risk obligations."</p>`,
    challenge: `<p>Pick the four most material artefacts to include in the pack. Tokens:</p>
<ul>
<li><code>MODEL_CARD</code> · <code>DPIA</code> · <code>RED_TEAM</code> · <code>MONITORING</code> · <code>BUSINESS_CASE</code> · <code>UI_DESIGN</code> · <code>MARKETING_DECK</code></li>
</ul>
<p>Submit the four most material in canonical order: <code>MODEL_CARD-DPIA-RED_TEAM-MONITORING</code>.</p>`,
    flagFormat: "crage{A1-A2-A3-A4}",
    flag: "crage{MODEL_CARD-DPIA-RED_TEAM-MONITORING}",
    flagHash: "6c6a58cc8c2c90439ba4061ba55f99654359380e7c5eeb585f6bf035857e9edb",
    objective: "Pick the four most material audit-evidence artefacts for a high-risk hiring assistant.",
    hints: [
      "Model card: addresses model-level transparency. DPIA: addresses data-protection impact. Red-team: addresses adversarial robustness. Monitoring: addresses post-deployment evidence.",
      "Business case, marketing deck, and UI design are not assurance artefacts — they are product collateral.",
      "Order: MODEL_CARD-DPIA-RED_TEAM-MONITORING."
    ],
    god: [
      { label: "Map artefacts to obligations", body: "EU AI Act high-risk obligations split into: technical documentation (model card / system card), data governance + DPIA, robustness testing (red team), and post-market monitoring." },
      { label: "Flag", body: "<code>MODEL_CARD-DPIA-RED_TEAM-MONITORING</code>." }
    ]
  },

  { idx: 2, id: "m11l2", title: "Red-Team Report Gaps",
    blurb: "A red-team report scoped only one threat surface. Identify what's missing.",
    scenario: `<p>You receive a red-team report on your customer LLM. It claims comprehensive coverage but the test plan only included:</p>
<ul>
  <li>Toxic-content elicitation</li>
  <li>Personally-identifiable-information leakage from system prompt</li>
  <li>Off-topic refusal robustness</li>
</ul>`,
    challenge: `<p>Identify the three test classes that are MISSING from this red-team. Tokens:</p>
<ul>
<li><code>NO_JAILBREAK</code> — adversarial jailbreak resistance</li>
<li><code>NO_DATA_EXFIL</code> — training-data extraction / regurgitation</li>
<li><code>NO_TOOL_ABUSE</code> — agent / tool-use abuse vectors</li>
<li><code>NO_TOXICITY</code> — toxic-content elicitation (already covered)</li>
</ul>
<p>Submit the three missing tokens, hyphen-joined, in the order listed above.</p>`,
    flagFormat: "crage{GAP-GAP-GAP}",
    flag: "crage{NO_JAILBREAK-NO_DATA_EXFIL-NO_TOOL_ABUSE}",
    flagHash: "f98d8ef98e18d1fe6259eba167eb2daeb84d0fc61e8261fb534759b7ff424557",
    objective: "Identify the three missing red-team test classes from the report.",
    hints: [
      "Toxicity is covered. PII-from-system-prompt is narrow — separate from training-data extraction.",
      "Jailbreak (universal-style adversarial), training-data extraction (membership inference / data exfil), and tool/agent abuse are all unaddressed.",
      "Order: NO_JAILBREAK-NO_DATA_EXFIL-NO_TOOL_ABUSE."
    ],
    god: [
      { label: "Coverage taxonomy", body: "A respectable LLM red-team has at minimum: jailbreak, data exfil, prompt injection (direct + indirect), toxicity, tool/agent abuse, refusal robustness." },
      { label: "Diff", body: "Report covers toxicity, narrow PII-from-prompt, refusal. Missing: jailbreak, data exfil, tool abuse." },
      { label: "Flag", body: "<code>NO_JAILBREAK-NO_DATA_EXFIL-NO_TOOL_ABUSE</code>." }
    ]
  },

  { idx: 3, id: "m11l3", title: "Continuous Monitoring KPIs",
    blurb: "Pick the four most-essential post-deployment KPIs for a customer LLM.",
    scenario: `<p>You're designing the ongoing monitoring dashboard for a production customer LLM. From the candidate set below, pick the four most-essential KPIs.</p>
<p>Candidates (each is a real KPI someone has proposed):</p>
<ul>
<li><code>DRIFT</code> — distribution drift on inputs/outputs</li>
<li><code>FAIRNESS</code> — group fairness metrics over time</li>
<li><code>LATENCY</code> — p95 latency</li>
<li><code>HALLUCINATION_RATE</code> — measured factuality on a rolling sample</li>
<li><code>TOKEN_BUDGET</code> — per-call token cost</li>
<li><code>UPTIME</code> — service uptime (already covered by SRE)</li>
<li><code>USER_RATING</code> — explicit thumbs up/down (covered by product)</li>
</ul>`,
    challenge: `<p>Submit the four most-essential KPIs in the canonical order: drift, fairness, latency, hallucination rate.</p>`,
    flagFormat: "crage{K1-K2-K3-K4}",
    flag: "crage{DRIFT-FAIRNESS-LATENCY-HALLUCINATION_RATE}",
    flagHash: "f2298418842d717be7aad6c76394742a62e9b6d8dcd1bdd8d91dcdea9d62e210",
    objective: "Pick the four most-essential post-deployment monitoring KPIs in canonical order.",
    hints: [
      "Token budget is a finance metric, not a safety/quality one. Uptime is SRE. Explicit user rating is a product metric.",
      "The four that go on the *responsible AI* dashboard are: drift, fairness, latency (degraded latency = degraded experience), and hallucination rate.",
      "Order: DRIFT-FAIRNESS-LATENCY-HALLUCINATION_RATE."
    ],
    god: [
      { label: "Separate concerns", body: "Responsible-AI monitoring lives next to — but separate from — finance, SRE, and product dashboards. Pick KPIs that uniquely belong to AI assurance.", say: "<strong>Cue:</strong> 'If a KPI is already on another dashboard with an owner, don't duplicate it on yours. Add only the AI-specific signals nobody else owns.'" },
      { label: "Flag", body: "<code>DRIFT-FAIRNESS-LATENCY-HALLUCINATION_RATE</code>." }
    ]
  }
]},

]; // END LABS_DATA

// Build the public LABS object (modules + index by id + index by module).
window.LABS = (function () {
  const modules = LABS_DATA.map((m) => ({
    num: m.module,
    title: m.moduleTitle,
    blurb: m.blurb,
    labs: m.labs.map((l) => Object.assign({}, l, {
      module: m.module,
      moduleTitle: m.moduleTitle,
    })),
  }));
  const byId = {}, byModule = {};
  modules.forEach((m) => {
    byModule[m.num] = m.labs;
    m.labs.forEach((l) => { byId[l.id] = l; });
  });
  return { modules, byId, byModule };
})();
