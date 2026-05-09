// CRAGE Hands-On Labs · 11 modules × 5 = 55 interactive labs.
// Each lab uses one of the widget types from widgets.js. The widget IS the
// lab — students manipulate the simulator (drag/sort/slider/decision-tree/
// terminal/annotator/policy-builder/checklist) until they reach the correct
// state, at which point the flag is auto-submitted by lab.js.
//
// Plaintext flags live here so God Mode can pre-fill the widget for
// instructor demos. Verification is via SHA-256 hash, like the primer labs.

const HANDSON_DATA = [

// ===================================================================
// MODULE 1 · AI Foundations and Technology Ecosystem
// ===================================================================

{ id: "m1l4", module: 1, idx: 4, title: "Stack Architect",
  blurb: "Eight vendors. Five layers. Lay them out on the AI tech stack.",
  scenario: `<p>Your CIO has signed eight AI procurements in the last quarter. Before the architecture review board on Thursday, you need a single slide that shows where each vendor sits on the AI stack.</p>`,
  challenge: `<p>Use the panel below to place each vendor in its correct stack layer. Click a vendor chip, then click the destination layer.</p>`,
  flagFormat: "crage{STACK-MAPPED}", flag: "crage{STACK-MAPPED}",
  flagHash: "366ffa23ad2c7c8f917840f687627e29eaa68faa0e75d09facb17eb80d45fc6b",
  objective: "Lay all eight vendors onto the correct AI stack layer.",
  hints: [
    "Foundation = base/pre-trained models. Fine-tune = adaptation tooling. RAG = retrieval/vector store. Agent = orchestration/tool use. MLOps = monitoring/deploy/eval.",
    "Read the verb in each vendor blurb. 'hosts a base model' = FOUNDATION. 'vector index' = RAG. 'orchestrates tool calls' = AGENT.",
    "Two vendors per FOUNDATION/FINETUNE/RAG/AGENT and one per MLOPS would be wrong here — count the chips before deciding.",
  ],
  god: [
    { label: "Define the stack first", body: "Without shared vocabulary the placement debate goes in circles. Establish the five layers." },
    { label: "Read for the verb", body: "Each vendor blurb has a verb that names the layer. Place by verb, not by company name.", say: "<strong>Cue:</strong> 'Vendors love to claim every layer. Trust the verb in their own description, not the marketing.'" },
    { label: "Click each vendor, click each layer", body: "Auto-solve banner shows the placement; verify by clicking CHECK." },
  ],
  interactive: {
    widget: "classify",
    label: "AI Stack Architecture",
    config: {
      prompt: "Place each vendor in the layer it operates at.",
      items: [
        { id: "v1", text: "NebulaCore — hosts a 70B medical-tuned base model" },
        { id: "v2", text: "OpenLayer — pre-trained 8B/13B foundation chat model API" },
        { id: "v3", text: "StethoTune — runs LoRA fine-tunes on customer datasets" },
        { id: "v4", text: "AdaptML — distillation + DPO/RLHF training pipelines" },
        { id: "v5", text: "VectraMed — HIPAA-compliant vector database for retrieval" },
        { id: "v6", text: "DocLake — document chunking + embedding + grounded retrieval" },
        { id: "v7", text: "CarePlanr — multi-step agent: EHR + scheduling tool calls" },
        { id: "v8", text: "SignalEval — eval harness, drift monitoring, on-call alerting" },
      ],
      buckets: [
        { id: "FOUNDATION", label: "Foundation Models" },
        { id: "FINETUNE", label: "Fine-tuning / Adaptation" },
        { id: "RAG", label: "Retrieval (RAG)" },
        { id: "AGENT", label: "Agent / Orchestration" },
        { id: "MLOPS", label: "MLOps / Monitoring" },
      ],
      solution: { v1: "FOUNDATION", v2: "FOUNDATION", v3: "FINETUNE", v4: "FINETUNE", v5: "RAG", v6: "RAG", v7: "AGENT", v8: "MLOPS" },
    },
  },
},

{ id: "m1l5", module: 1, idx: 5, title: "Spot the Real ML",
  blurb: "Five vendor pitches in one passage. Click the phrases that prove there's an actual learned model.",
  scenario: `<p>You're sitting through a vendor pitch document. Marketing puts "AI-powered" on every line. Your job is to mark the phrases that constitute <em>actual evidence</em> of a learned/statistical model — architecture names, training-data scale, held-out metrics, retraining cadence.</p>`,
  challenge: `<p>Click every span in the passage that demonstrates real ML evidence. Click again to deselect.</p>`,
  flagFormat: "crage{ML-SIGNALS-FOUND}", flag: "crage{ML-SIGNALS-FOUND}",
  flagHash: "b7f86171eef011c76e309a74304a1f88c63b6f33ec4473bdf7a4156a5bdc2043",
  objective: "Click every span that constitutes evidence of a learned model. Deselect anything that's just marketing.",
  hints: [
    "ML evidence: architecture name (Llama, YOLO, BERT, ALS), training-data size, a held-out metric (ROUGE, mAP, AUC), retraining cadence.",
    "Marketing only: 'AI-powered', 'smart', 'intelligent', 'cutting-edge', 'industry-leading' — none of these are ML evidence.",
    "Five spans contain ML evidence. The rest are noise.",
  ],
  god: [
    { label: "Define the test", body: "ML evidence = architecture + dataset + metric + cadence. Anything that doesn't help you reproduce the model is marketing." },
    { label: "Walk the passage", body: "Click each span containing one of: a model architecture, a dataset size, a held-out metric, a retraining cadence, or a learning approach (LoRA, distillation, RLHF)." },
  ],
  interactive: {
    widget: "annotator",
    label: "ML evidence detector",
    config: {
      prompt: "Click every phrase that is real ML evidence (not marketing fluff).",
      passage:
`Pitch from Vendor A:
Our AI-powered fraud platform uses {{a1}} to flag transactions. We trained on {{a2}} with a held-out {{a3}}. Re-trained {{a4}}.

Pitch from Vendor B:
Industry-leading next-gen smart compliance assistant. Cutting-edge AI inside.

Pitch from Vendor C:
Document classifier built on {{c1}}, trained on 280k labelled contracts; {{c2}} on internal eval. Best-in-class accuracy.

Pitch from Vendor D:
Empowers your enterprise with smart automation. Synergistic AI experience.

Pitch from Vendor E:
Vision QC pipeline ({{e1}}) with continuous {{e2}} pipeline; achieves mAP@0.5 = 0.91.`,
      spans: [
        { id: "a1", text: "an XGBoost ensemble" },
        { id: "a2", text: "8M historical transactions" },
        { id: "a3", text: "AUC of 0.94" },
        { id: "a4", text: "weekly with shadow mode" },
        { id: "c1", text: "a fine-tuned BERT-base" },
        { id: "c2", text: "F1 = 0.86" },
        { id: "e1", text: "YOLOv8" },
        { id: "e2", text: "drift-monitoring + retraining" },
      ],
      correct: ["a1","a2","a3","a4","c1","c2","e1","e2"],
    },
  },
},

{ id: "m1l6", module: 1, idx: 6, title: "Model Card Auditor",
  blurb: "Twelve checkboxes. A vendor card hides four missing required sections among them. Tick only the missing.",
  scenario: `<p>You receive a model card from <strong>Polaris ML</strong> for a customer-deployed assistant. Audit it against the canonical Mitchell-et-al template + the fields your governance program requires (license, eval-data, training-data, limitations).</p>`,
  challenge: `<p>Below are twelve candidate sections. Tick exactly the ones <strong>missing</strong> from the Polaris card. Submit when complete.</p>`,
  flagFormat: "crage{CARD-AUDITED}", flag: "crage{CARD-AUDITED}",
  flagHash: "577e582e8bd2e94a47ff59f96feacbdc8daa723517f6a4a47cf8800f8290b6f4",
  objective: "Tick exactly the sections missing from Polaris ML's model card.",
  hints: [
    "The Polaris card declares: model details, intended use, factors, helpfulness metric, refusal rate, ethical considerations.",
    "It does NOT declare: training data, evaluation data, limitations / caveats, or license terms.",
    "Tick exactly four sections. Anything else is wrong.",
  ],
  god: [
    { label: "Reference the canonical template", body: "Mitchell et al. 9 sections + license + limitations. Cross-check the vendor card against each." },
    { label: "Mark only the missing", body: "Training data, eval data, limitations, license — these four are not in the Polaris card. Tick those." },
  ],
  interactive: {
    widget: "checklist",
    label: "Missing model-card sections",
    config: {
      prompt: "Polaris card includes: details, intended use, factors, metrics (helpfulness, refusal), ethical considerations. Tick the **missing** required sections from the canonical template.",
      items: [
        { id: "details", text: "Model Details (architecture, version, developer)" },
        { id: "intended", text: "Intended Use" },
        { id: "factors", text: "Factors (locale, language, demographic)" },
        { id: "metrics", text: "Performance Metrics" },
        { id: "training_data", text: "**Training Data** description" },
        { id: "eval_data", text: "**Evaluation Data** description" },
        { id: "ethical", text: "Ethical Considerations" },
        { id: "limitations", text: "**Limitations & Caveats**" },
        { id: "license", text: "**License & Terms of Use**" },
        { id: "support", text: "Customer Support Channel" },
        { id: "release_date", text: "Release Date" },
        { id: "marketing_blurb", text: "Marketing Tagline" },
      ],
      correct: ["training_data","eval_data","limitations","license"],
    },
  },
},

{ id: "m1l7", module: 1, idx: 7, title: "Rules · ML · Hybrid",
  blurb: "Eight production systems. Sort each into rules engine, learned ML, or hybrid.",
  scenario: `<p>An IT inventory dump landed on your desk: eight production "AI systems." Some are rules engines mis-labelled. Some are real models. Some are hybrid. The governance treatment differs across all three.</p>`,
  challenge: `<p>Sort each system into the right bucket. Click the system, then click the bucket.</p>`,
  flagFormat: "crage{ML-VS-RULES-MAPPED}", flag: "crage{ML-VS-RULES-MAPPED}",
  flagHash: "c4a920f4be433bc0d54a02e95a81dc4eb50d1558061dace17ffde2a10585f30b",
  objective: "Classify each system as RULES / ML / HYBRID.",
  hints: [
    "Rules: thresholds, regex, watchlists, decision tables.",
    "ML: training data + model architecture + held-out metric.",
    "Hybrid: a learned scorer with a hand-crafted policy on top, OR a rule that consults a model output.",
  ],
  god: [
    { label: "Use the verb test", body: "If the system *fits* a model, it's ML. If it *checks* fixed conditions, it's rules. If it *combines both* explicitly, it's hybrid." },
  ],
  interactive: {
    widget: "classify",
    label: "Rules vs ML vs Hybrid",
    config: {
      prompt: "Place each system in the bucket that matches its actual nature.",
      items: [
        { id: "s1", text: "Fraud filter: 'flag any tx > $10k from watchlist country'" },
        { id: "s2", text: "Resume screener: fine-tuned BERT trained on 80k applications" },
        { id: "s3", text: "Chat router: keyword-match to one of 12 queues" },
        { id: "s4", text: "Recommender: ALS matrix factorisation, retrained nightly" },
        { id: "s5", text: "Loan adjudication: gradient-boosted scorer + 14 hand-coded business rules" },
        { id: "s6", text: "Email categoriser: regex slot extraction with templated responses" },
        { id: "s7", text: "Defect QC: YOLOv8 detector with a downstream business rule (auto-reject if 2+ defects)" },
        { id: "s8", text: "Pricing engine: piecewise linear function from product team's spreadsheet" },
      ],
      buckets: [
        { id: "RULES", label: "Rules Engine" },
        { id: "ML", label: "Learned ML" },
        { id: "HYBRID", label: "Hybrid" },
      ],
      solution: { s1: "RULES", s2: "ML", s3: "RULES", s4: "ML", s5: "HYBRID", s6: "RULES", s7: "HYBRID", s8: "RULES" },
    },
  },
},

{ id: "m1l8", module: 1, idx: 8, title: "Provenance Investigator",
  blurb: "Use the lab terminal to pull, verify, and audit an open-source model. Establish full provenance.",
  scenario: `<p>Your team wants to deploy <code>open-vision-7b</code> from a public hub. Before you put it into production, you need to verify weights integrity, license, training-data card, and eval card. Use the simulated terminal below.</p>`,
  challenge: `<p>Run the four required investigation commands shown in the hint panel below the terminal. When done, click CHECK PROGRESS.</p>`,
  flagFormat: "crage{PROVENANCE-CLEAR}", flag: "crage{PROVENANCE-CLEAR}",
  flagHash: "d804432bb63300f309a01c9def76d3e22ea1f7eee320e0aa339b34466780c3c8",
  objective: "Run all four provenance-investigation commands successfully.",
  hints: [
    "`help` lists every command.",
    "Required commands: `cat MODEL_CARD`, `sha256sum weights/model.bin`, `license check`, `provenance verify`.",
    "After running all four, click CHECK PROGRESS to unlock the flag.",
  ],
  god: [
    { label: "Walk the four commands", body: "<code>cat MODEL_CARD</code>; <code>sha256sum weights/model.bin</code>; <code>license check</code>; <code>provenance verify</code>." },
    { label: "Read the outputs", body: "Each command teaches a different provenance layer: documentation, integrity, legal, lineage.", say: "<strong>Cue:</strong> 'Provenance is documentation + integrity + legal + lineage. All four must check out.'" },
  ],
  interactive: {
    widget: "terminal",
    label: "Provenance investigation",
    config: {
      terminal_title: "model-audit@crage:~/open-vision-7b",
      banner: "[crage-audit] open-vision-7b · auditor mode v0.4 · type `help` to begin",
      prompt_str: "audit$ ",
      prompts: {
        "^help$": [
          "available commands:",
          "  ls                          — list files in this model dir",
          "  cat MODEL_CARD              — view model card",
          "  cat LICENSE                 — view license file",
          "  sha256sum weights/model.bin — verify weights checksum",
          "  license check               — programmatic license review",
          "  provenance verify           — fetch upstream training-data card",
          "  exit                        — leave terminal",
        ],
        "^ls$": [
          "MODEL_CARD     LICENSE      README.md",
          "weights/       train_card/  eval_card/",
        ],
        "^cat MODEL_CARD$": [
          "# open-vision-7b",
          "Architecture: 7B vision-language transformer",
          "Trained-on: see train_card/ (CC-BY-SA images, public web corpus)",
          "Eval: see eval_card/ (mAP@0.5 = 0.84 on COCO-val2017)",
          "License: Apache-2.0 (commercial use permitted)",
        ],
        "^cat LICENSE$": [
          "Apache License, Version 2.0",
          "Copyright 2026 Open-Vision Foundation",
          "Licensed under the Apache License, Version 2.0 (the 'License');",
          "you may not use this file except in compliance with the License.",
        ],
        "^sha256sum": [
          "weights/model.bin  af19c7d4a5c0e4...c3221     [✓ matches MODEL_CARD declaration]",
        ],
        "^license check$": [
          "[license-check] declared:    Apache-2.0",
          "[license-check] file SPDX:   Apache-2.0",
          "[license-check] commercial:  PERMITTED",
          "[license-check] attribution: REQUIRED — see NOTICE",
          "[license-check] verdict:     ✓ OK FOR COMMERCIAL DEPLOYMENT",
        ],
        "^provenance verify$": [
          "[prov] fetching upstream train_card from registry...",
          "[prov] train_card/sources.csv  — 14 sources, all permissively-licensed",
          "[prov] train_card/pii_audit    — 0 PII categories detected",
          "[prov] eval_card/COCO-val2017  — checksum ✓",
          "[prov] verdict: ✓ PROVENANCE CLEAR",
        ],
        "^exit$": "(terminal closed)",
      },
      required: ["^cat MODEL_CARD$", "^sha256sum", "^license check$", "^provenance verify$"],
      required_help: "Run all four required commands: `cat MODEL_CARD`, `sha256sum weights/model.bin`, `license check`, `provenance verify`. Then click CHECK PROGRESS.",
      god_script: ["help", "ls", "cat MODEL_CARD", "sha256sum weights/model.bin", "license check", "provenance verify"],
    },
  },
},

// ===================================================================
// MODULE 2 · AI Concerns, Ethical Principles, Responsible AI
// ===================================================================

{ id: "m2l4", module: 2, idx: 4, title: "Four-Fifths Calculator",
  blurb: "Tune three group selection rates until the deployment passes the EEOC four-fifths rule.",
  scenario: `<p>Your hiring model failed the EEOC four-fifths rule (lab M2L1). Now you simulate the post-mitigation distribution. Tune the three group selection rates so that the worst-group / highest-group ratio is at least 0.80.</p>`,
  challenge: `<p>Move the sliders. Click CHECK when the four-fifths ratio reaches 0.80 or higher and the highest selection rate is no greater than 30%.</p>`,
  flagFormat: "crage{FOUR-FIFTHS-FAIL}", flag: "crage{FOUR-FIFTHS-FAIL}",
  flagHash: "b6ea43a0bb4ae325280cff225c38d8a98f9514463fe46b285b39c848a232fcc8",
  objective: "Tune group selection rates so the four-fifths ratio (min/max) is ≥ 0.80, with no group above 30%.",
  hints: [
    "Four-fifths = min(SR_groups) / max(SR_groups). Must be ≥ 0.80.",
    "If the highest group is at 30%, the lowest must be ≥ 24%.",
    "Set all groups to a value between 24 and 30 percent.",
  ],
  god: [
    { label: "Read the math", body: "min/max ratio ≥ 0.8. The classroom-canonical fix is to bring the lowest group up to 24 and cap the highest at 30." },
    { label: "Move the sliders", body: "Solution prefilled: M=30, F=24, NB=24. Ratio = 0.80. Click CHECK." },
  ],
  interactive: {
    widget: "sliders",
    label: "Selection-rate tuning simulator",
    config: {
      prompt: "Selection rates per group (%). Goal: min/max ≥ 0.80 AND highest ≤ 30.",
      sliders: [
        { id: "M", label: "Selection rate · Men", min: 0, max: 50, step: 1, default: 30, suffix: "%" },
        { id: "F", label: "Selection rate · Women", min: 0, max: 50, step: 1, default: 20, suffix: "%" },
        { id: "NB", label: "Selection rate · Non-binary", min: 0, max: 50, step: 1, default: 18, suffix: "%" },
      ],
      compute: "Math.min(M,F,NB) / Math.max(M,F,NB,1)",
      display: "four-fifths ratio = {result}  (need ≥ 0.80)",
      target: { min: 0.8, max: 1.01 },
      solutionState: { M: 30, F: 24, NB: 24 },
      successText: "four-fifths rule satisfied",
    },
  },
},

{ id: "m2l5", module: 2, idx: 5, title: "Principle Mapper",
  blurb: "Drop ten incidents onto the OECD/NIST trustworthy-AI principles they violate.",
  scenario: `<p>Ten one-line incident summaries from a quarterly retro. Each cleanly maps to one trustworthy-AI principle. Place them onto the right principle bucket.</p>`,
  challenge: `<p>Each principle gets exactly two incidents. Place all ten correctly to unlock.</p>`,
  flagFormat: "crage{PRINCIPLES-MAPPED}", flag: "crage{PRINCIPLES-MAPPED}",
  flagHash: "447d4ae07326e1f1d137bab77f46a2e7f243e096e202e4e589a5b834b569e7b7",
  objective: "Map all 10 incidents onto the 5 principles (2 each).",
  hints: [
    "Symptom > topic. 'No owner' = ACCOUNTABILITY. 'No kill-switch' = SAFETY.",
    "Each principle gets exactly 2 incidents.",
    "Privacy is leakage; transparency is explanation; fairness is disparate outcomes.",
  ],
  god: [
    { label: "Don't map by topic", body: "An incident topic can match multiple principles. Map by the *failure*: who couldn't do what?" },
  ],
  interactive: {
    widget: "classify",
    label: "Incident → principle",
    config: {
      prompt: "Map each incident to the principle it most violates.",
      items: [
        { id: "i1", text: "No documented owner for the loan-decision policy" },
        { id: "i2", text: "Customer asked why declined; no plain-language reason exists" },
        { id: "i3", text: "Mortgage approvals favour group A over B at 1.6× rate" },
        { id: "i4", text: "Help-desk fine-tune corpus contained unredacted SSNs" },
        { id: "i5", text: "Trade-execution agent kept executing during market halt — no kill-switch" },
        { id: "i6", text: "AI council not convened in 9 months; no policy review" },
        { id: "i7", text: "Internal audit found 0 documented model rationales for rejections" },
        { id: "i8", text: "Adverse impact on applicants over 50 across all roles" },
        { id: "i9", text: "Vector store leaked an embedded PII record across customer tenants" },
        { id: "i10", text: "Autonomous warehouse robot crashed into worker — no e-stop wired" },
      ],
      buckets: [
        { id: "ACCOUNTABILITY", label: "Accountability" },
        { id: "TRANSPARENCY", label: "Transparency" },
        { id: "FAIRNESS", label: "Fairness" },
        { id: "PRIVACY", label: "Privacy" },
        { id: "SAFETY", label: "Safety" },
      ],
      solution: { i1: "ACCOUNTABILITY", i6: "ACCOUNTABILITY", i2: "TRANSPARENCY", i7: "TRANSPARENCY", i3: "FAIRNESS", i8: "FAIRNESS", i4: "PRIVACY", i9: "PRIVACY", i5: "SAFETY", i10: "SAFETY" },
    },
  },
},

{ id: "m2l6", module: 2, idx: 6, title: "Bias Indicator Detective",
  blurb: "A model output transcript. Click every phrase that signals encoded bias.",
  scenario: `<p>An auditor handed you a transcript of three responses from a hiring-assistant LLM. Read carefully and click the phrases that signal encoded bias — gendered assumptions, age bias, ableist framing, or ethnic stereotyping.</p>`,
  challenge: `<p>Click each biased span. Deselect to undo. Submit when you've identified all biased phrases.</p>`,
  flagFormat: "crage{BIAS-DETECTED}", flag: "crage{BIAS-DETECTED}",
  flagHash: "8270add6d2d14f68ade9012abbb711423e1c4dcb4273ffb19cf8f44ce9ff8431",
  objective: "Click every biased phrase in the model's output. Deselect anything neutral.",
  hints: [
    "Look for assumed pronouns based on role, age proxies ('digital native', 'fresh perspective'), and stereotypes attached to a name or origin.",
    "Five biased phrases hide in the transcript.",
    "Phrases like 'qualified candidate' or 'team fit' are not biased on their own — only the gendered/aged framing is.",
  ],
  god: [
    { label: "Walk the spans", body: "Click 'he should', 'fresh perspective', 'cultural fit', 'his manager', 'younger candidate'. These five are the bias signals." },
  ],
  interactive: {
    widget: "annotator",
    label: "Bias span detector",
    config: {
      prompt: "Click every phrase that encodes bias.",
      passage:
`Q: Summarise candidate 1 (engineer role).
A: Strong candidate. The team thinks {{b1}} make a great fit. Solid technical skills, with a {{b2}} on architecture.

Q: Summarise candidate 2 (Maria L.).
A: Promising candidate. {{b3}} is important here, and the hiring manager noted some concerns about {{b4}}.

Q: Summarise candidate 3 (38yo).
A: Capable engineer. The team is leaning toward a {{b5}} for the role's pace.`,
      spans: [
        { id: "b1", text: "he would" },
        { id: "b2", text: "fresh perspective" },
        { id: "b3", text: "Cultural fit" },
        { id: "b4", text: "her availability after-hours" },
        { id: "b5", text: "younger candidate" },
      ],
      correct: ["b1","b2","b3","b4","b5"],
    },
  },
},

{ id: "m2l7", module: 2, idx: 7, title: "Deploy Review · Wizard",
  blurb: "Walk a 5-question ethics review on a deployment proposal. Reach the right verdict.",
  scenario: `<p>You're chairing the AI ethics review for a proposed <strong>biometric-emotion analyser</strong> for retail customer interaction. The product team needs a verdict: APPROVE, RESTRICT, REJECT, or NEEDS-REVIEW.</p>`,
  challenge: `<p>Walk the wizard below. Each question narrows the verdict. Reach a defensible final ruling.</p>`,
  flagFormat: "crage{NO-DEPLOY}", flag: "crage{NO-DEPLOY}",
  flagHash: "cd231fd30fc31ad80d070fdb135543254ff4038ff41452fc46bd999f4b8a323a",
  objective: "Reach the correct verdict for the biometric-emotion analyser deployment.",
  hints: [
    "Emotion recognition in commercial spaces is on the EU AI Act prohibited / heavily restricted list (Art. 5 + Annex III).",
    "Customers cannot meaningfully consent in a retail environment.",
    "When emotion-recognition + commercial + EU subjects line up, the answer is REJECT, not RESTRICT.",
  ],
  god: [
    { label: "Walk the path", body: "Q1: emotion-recognition? YES. Q2: commercial? YES. Q3: EU jurisdiction? YES. Q4: workplace/education context? NO (retail). Q5: meaningful consent? NO. Verdict: REJECT.", say: "<strong>Cue:</strong> 'When the EU AI Act has a Title II/III hit, the wizard must terminate at REJECT — RESTRICT is not the right tool.'" },
  ],
  interactive: {
    widget: "decision_tree",
    label: "Ethics review wizard",
    config: {
      prompt: "Proposal: deploy a biometric-emotion analyser at retail checkouts in EU stores.",
      start: "q1",
      nodes: {
        q1: { q: "Does the system perform biometric emotion inference?", options: [
          { label: "Yes", go: "q2" },
          { label: "No", go: "t_review" },
        ]},
        q2: { q: "Is the deployment in a commercial / consumer context (not security-critical research)?", options: [
          { label: "Commercial / consumer", go: "q3" },
          { label: "Research / clinical", go: "t_restrict" },
        ]},
        q3: { q: "Are EU residents in scope?", options: [
          { label: "Yes — EU subjects", go: "q4" },
          { label: "No — outside EU", go: "t_review" },
        ]},
        q4: { q: "Is the use in workplace or education? (Article 5 specifically prohibits emotion recognition there.)", options: [
          { label: "Workplace / education", go: "t_reject" },
          { label: "Other commercial (e.g. retail)", go: "q5" },
        ]},
        q5: { q: "Can subjects give meaningful, informed, freely-given consent?", options: [
          { label: "Yes — explicit consent flow", go: "t_restrict" },
          { label: "No — passive observation", go: "t_reject" },
        ]},
        t_reject: { result: true, label: "REJECT — Article 5 / Annex III conflict + no meaningful consent" },
        t_restrict: { result: true, label: "RESTRICT — narrow scope, opt-in, with transparency obligations" },
        t_review: { result: true, label: "NEEDS-REVIEW — bring back with more context" },
      },
      correctTerminal: "t_reject",
    },
  },
},

{ id: "m2l8", module: 2, idx: 8, title: "Ethics Charter Builder",
  blurb: "Draft a one-page ethics-council charter. Required fields must be filled correctly.",
  scenario: `<p>Your AI ethics council is being chartered. Draft the founding policy: who chairs, what's in scope, how often it meets, what triggers escalation, and which principles it enforces.</p>`,
  challenge: `<p>Fill every field with the most defensible answer. Submit when complete.</p>`,
  flagFormat: "crage{CHARTER-COMPLETE}", flag: "crage{CHARTER-COMPLETE}",
  flagHash: "6a31dd99d195b9cc07e640931a252ed20ee7a82ae23b36bbd8c44ffba2c9e79d",
  objective: "Complete the ethics charter with defensible values for every required field.",
  hints: [
    "Chair: the role with both authority and risk ownership — typically CISO or CAIO.",
    "Frequency: monthly is standard; quarterly is too sparse for production AI.",
    "Tick all five OECD principles in the multi-select.",
  ],
  god: [
    { label: "Pick the defensible answer", body: "Chair: CISO. Scope: All production AI. Frequency: Monthly. Escalation: any HIGH-risk use case. Principles: Accountability + Transparency + Fairness + Privacy + Safety." },
  ],
  interactive: {
    widget: "policy_builder",
    label: "Council charter draft",
    config: {
      prompt: "Fill each field with the most defensible value.",
      fields: [
        { id: "chair", label: "Council Chair", kind: "select", options: ["Marketing Director", "CISO", "Engineering Manager", "External Consultant"], correct: "CISO", hint: "Authority + risk ownership." },
        { id: "scope", label: "Scope of review", kind: "select", options: ["Only customer-facing AI", "All production AI systems", "Only high-risk per EU AI Act", "Only vendor-purchased AI"], correct: "All production AI systems" },
        { id: "frequency", label: "Meeting cadence", kind: "select", options: ["Annual", "Quarterly", "Monthly", "Ad-hoc only"], correct: "Monthly" },
        { id: "escalation", label: "Auto-escalation trigger", kind: "select", options: ["Customer complaint", "Any HIGH-risk classification", "Model accuracy below 80%", "Engineering request"], correct: "Any HIGH-risk classification" },
        { id: "principles", label: "Principles enforced (tick all)", kind: "multi", options: ["Accountability","Transparency","Fairness","Privacy","Safety","Velocity","Profit"], correct: ["Accountability","Transparency","Fairness","Privacy","Safety"] },
      ],
    },
  },
},

// ===================================================================
// MODULE 3 · AI Strategy and Planning
// ===================================================================

{ id: "m3l4", module: 3, idx: 4, title: "Portfolio Ranker",
  blurb: "Six AI initiatives. Rank them by risk-adjusted value. Drag to order.",
  scenario: `<p>Six AI initiatives in your roadmap pipeline at <strong>Aurelia Bank</strong>. Each has a different value and risk profile. Rank them best-first for the year — value adjusted for risk and time-to-deploy.</p>`,
  challenge: `<p>Re-order the list. Click ▲/▼ to move items. Submit when correctly ordered.</p>`,
  flagFormat: "crage{PORTFOLIO-RANKED}", flag: "crage{PORTFOLIO-RANKED}",
  flagHash: "08f4f6586b3164ff18442b8540fac870686fb35d5cb985fdd59851d07a58d77d",
  objective: "Rank the six initiatives best-first.",
  hints: [
    "Don't sort by NPV alone. Lead with low-risk wins to build capability.",
    "High-risk high-value goes second only if controls are committed.",
    "Below-threshold value (under $1M NPV) goes to the bottom regardless of risk.",
  ],
  god: [
    { label: "Order: c2, c5, c1, c4, c3, c6", body: "Claims summarisation (low risk, $5M) first. Fraud assist (medium, $11M) second. Underwriting auto-decision (high risk, $22M) third only after gov controls. Then chat copilot, then internal HR auto-letter, then marketing copy assist." },
  ],
  interactive: {
    widget: "sortable",
    label: "Initiative ranking",
    config: {
      prompt: "Rank best-first by risk-adjusted value.",
      items: [
        { id: "c1", text: "Underwriting auto-decisioning ($22M NPV, very high risk)" },
        { id: "c2", text: "Claims summarisation for adjusters ($5M NPV, low risk)" },
        { id: "c3", text: "Customer chat copilot ($3M NPV, medium risk)" },
        { id: "c4", text: "Fraud detection assist ($11M NPV, medium risk)" },
        { id: "c5", text: "HR auto-letter drafting ($1.5M NPV, low risk)" },
        { id: "c6", text: "Marketing copy assist internal ($0.6M NPV, very low risk)" },
      ],
      correctOrder: ["c2","c4","c5","c1","c3","c6"],
    },
  },
},

{ id: "m3l5", module: 3, idx: 5, title: "Sourcing Decisions",
  blurb: "Six use cases. Sort each into BUILD, BUY, or PARTNER.",
  scenario: `<p>Six new AI use cases in flight. Each comes with constraints (time, expertise, regulatory exposure, data availability). Pick the right sourcing strategy.</p>`,
  challenge: `<p>Place each into BUILD, BUY, or PARTNER. Two of each.</p>`,
  flagFormat: "crage{SOURCING-MAPPED}", flag: "crage{SOURCING-MAPPED}",
  flagHash: "ed341cd5b3414099a939d2483f2a54e25f0dc0f4ce201a0c65d4da7c2cd725e8",
  objective: "Sort each use case into BUILD / BUY / PARTNER.",
  hints: [
    "BUILD when you have unique data + expertise + time.",
    "BUY when commodity capability + low fit risk + tight timeline.",
    "PARTNER when vendor maturity + your data + acceptable IP terms.",
  ],
  god: [
    { label: "Match constraints to strategy", body: "Strict regulatory + own data + low maturity vendor → BUILD. Commodity capability + tight timeline → BUY. Specialised vendor + must-customise → PARTNER." },
  ],
  interactive: {
    widget: "classify",
    label: "Build / Buy / Partner",
    config: {
      prompt: "Each use case has constraints. Pick the strategy.",
      items: [
        { id: "u1", text: "Email spam filter (commodity, 6-week timeline)" },
        { id: "u2", text: "Specialised oncology summariser (regulated, your unique 80k records)" },
        { id: "u3", text: "Industrial defect QC (vendor + your line images, 6mo target)" },
        { id: "u4", text: "Internal knowledge chat (general, off-the-shelf vendor sufficient)" },
        { id: "u5", text: "Insurance underwriting model (your proprietary data, regulated)" },
        { id: "u6", text: "Voice-of-customer analytics (vendor turnkey + your taxonomy)" },
      ],
      buckets: [
        { id: "BUILD", label: "BUILD" },
        { id: "BUY", label: "BUY" },
        { id: "PARTNER", label: "PARTNER" },
      ],
      solution: { u1: "BUY", u2: "BUILD", u3: "PARTNER", u4: "BUY", u5: "BUILD", u6: "PARTNER" },
    },
  },
},

{ id: "m3l6", module: 3, idx: 6, title: "Capability Budget Allocator",
  blurb: "$1M of new headcount budget. Allocate across four roles to fix the platform-first problem.",
  scenario: `<p>You have $1M for new hires. The org has 6 initiatives in flight, no shared platform, drift undetected for weeks, and a new high-risk use case needing governance. Allocate across four roles.</p>`,
  challenge: `<p>Each slider sets that role's allocation in $K. Total must equal 1000. Click CHECK when the allocation is defensible.</p>`,
  flagFormat: "crage{BUDGET-OPTIMIZED}", flag: "crage{BUDGET-OPTIMIZED}",
  flagHash: "2f77a40d10917c30767ab3fe0e5908e6b96028e0ce3f60c85419b43e5e820535",
  objective: "Allocate budget so platform-lead leads (>= 350) and ethicist gets >= 200; total = 1000.",
  hints: [
    "Platform lead is the highest-leverage hire — give them the largest single share.",
    "Ethicist is the second hire because of the new high-risk use case (EU AI Act).",
    "Total must sum to exactly 1000."
  ],
  god: [
    { label: "Solve", body: "Platform lead: 400, Ethicist: 250, ML engineer: 200, Prompt engineer: 150. Sum=1000. Platform-led but ethicist gets meaningful share." },
  ],
  interactive: {
    widget: "sliders",
    label: "Headcount budget",
    config: {
      prompt: "Allocate $1M ($K each). Solution requires platform lead ≥ 350, ethicist ≥ 200, total = 1000.",
      sliders: [
        { id: "PL", label: "ML Platform Lead ($K)", min: 0, max: 600, step: 50, default: 250, suffix: "K" },
        { id: "ET", label: "AI Ethicist ($K)", min: 0, max: 400, step: 50, default: 100, suffix: "K" },
        { id: "ML", label: "ML Engineer ($K)", min: 0, max: 400, step: 50, default: 250, suffix: "K" },
        { id: "PE", label: "Prompt Engineer ($K)", min: 0, max: 400, step: 50, default: 250, suffix: "K" },
      ],
      compute: "PL + ET + ML + PE",
      display: "total = ${result}K (need 1000)",
      target: 1000,
      solutionState: { PL: 400, ET: 250, ML: 200, PE: 150 },
      successText: "platform-first allocation accepted",
    },
  },
},

{ id: "m3l7", module: 3, idx: 7, title: "Roadmap Charter Draft",
  blurb: "Draft a 12-month AI roadmap charter. Required fields, defensible answers.",
  scenario: `<p>The board needs a one-page AI roadmap charter ratifying scope, ownership, and the gating criteria for new AI initiatives this year.</p>`,
  challenge: `<p>Fill every field with a defensible answer. Submit when complete.</p>`,
  flagFormat: "crage{ROADMAP-DRAFTED}", flag: "crage{ROADMAP-DRAFTED}",
  flagHash: "471ba93ca1292a9c122c505e04caa86ebd0649dba0e40c42902e0603519ecd3e",
  objective: "Complete the roadmap charter with defensible values.",
  hints: [
    "Owner is one role. Multiple owners = no owner.",
    "Gating: a HIGH-risk use case needs explicit AI council + DPIA approvals.",
    "Primary metric must be a *trustworthy-AI* metric, not pure NPV."
  ],
  god: [
    { label: "Solve", body: "Owner: Chief AI Officer. Horizon: 12 months. Gating: AI council + DPIA. Primary metric: Trustworthy-AI Composite Score." },
  ],
  interactive: {
    widget: "policy_builder",
    label: "Roadmap charter",
    config: {
      prompt: "Pick the most defensible value for each field.",
      fields: [
        { id: "owner", label: "Single accountable owner", kind: "select", options: ["VP Product", "Chief AI Officer", "CFO", "Joint product/eng"], correct: "Chief AI Officer" },
        { id: "horizon", label: "Planning horizon", kind: "select", options: ["3 months", "6 months", "12 months", "36 months"], correct: "12 months" },
        { id: "gating", label: "HIGH-risk use case gating", kind: "select", options: ["Engineering review only", "Customer success approval", "AI council + DPIA approval", "Auto-approved with monitoring"], correct: "AI council + DPIA approval" },
        { id: "metric", label: "Primary success metric", kind: "select", options: ["Revenue NPV only", "Trustworthy-AI Composite Score", "Velocity / time-to-ship", "User count"], correct: "Trustworthy-AI Composite Score" },
      ],
    },
  },
},

{ id: "m3l8", module: 3, idx: 8, title: "Use-Case Go/No-Go",
  blurb: "Walk a 4-question decision wizard for a borderline use case.",
  scenario: `<p>The product team wants to deploy an AI-driven customer-prioritisation system that ranks support tickets by predicted churn-risk. Decide GO / REWORK / NO-GO.</p>`,
  challenge: `<p>Walk the wizard.</p>`,
  flagFormat: "crage{GO-DECISION}", flag: "crage{GO-DECISION}",
  flagHash: "e27bdc189124f1e04f95138bdc3ec3a476a7a993094ab58d78328f315dbc37cf",
  objective: "Reach the right verdict for the support-prioritisation system.",
  hints: [
    "If a use case is internal-only, advisory, with bias monitoring + human-in-loop — that's a GO with conditions.",
    "Decline-decision territory triggers REWORK or NO-GO.",
    "Don't NO-GO on an internal advisory tool with controls."
  ],
  god: [
    { label: "Walk", body: "Q1 internal/customer-facing? Internal. Q2 decision or advisory? Advisory. Q3 bias monitoring? Yes. Q4 human-in-loop? Yes. → GO with conditions." },
  ],
  interactive: {
    widget: "decision_tree",
    label: "Go/no-go wizard",
    config: {
      prompt: "Use case: AI-driven support-ticket churn-risk ranking, internal advisory, monitored.",
      start: "q1",
      nodes: {
        q1: { q: "Is this customer-facing (decisions about a customer with legal/financial effect)?", options: [
          { label: "Internal advisory", go: "q2" },
          { label: "Customer-facing decision", go: "t_norework" },
        ]},
        q2: { q: "Does it produce a decision or only an advisory ranking?", options: [
          { label: "Advisory ranking", go: "q3" },
          { label: "Automated decision", go: "t_norework" },
        ]},
        q3: { q: "Is bias monitoring + drift in place?", options: [
          { label: "Yes", go: "q4" },
          { label: "No", go: "t_rework" },
        ]},
        q4: { q: "Is a human in the decision loop with override authority?", options: [
          { label: "Yes", go: "t_go" },
          { label: "No", go: "t_rework" },
        ]},
        t_go: { result: true, label: "GO — with monitoring conditions" },
        t_rework: { result: true, label: "REWORK — add controls then return" },
        t_norework: { result: true, label: "NO-GO — out of scope as designed" },
      },
      correctTerminal: "t_go",
    },
  },
},

// ===================================================================
// MODULE 4 · AI Governance and Frameworks
// ===================================================================

{ id: "m4l4", module: 4, idx: 4, title: "NIST RMF Mapper",
  blurb: "Twelve activities. Drop them onto the four NIST AI RMF functions.",
  scenario: `<p>Your governance program is being audited against the NIST AI Risk Management Framework. Twelve activities from the last quarter need to be mapped to the four functions.</p>`,
  challenge: `<p>Place each activity into GOVERN / MAP / MEASURE / MANAGE. Three per function.</p>`,
  flagFormat: "crage{NIST-MAPPED}", flag: "crage{NIST-MAPPED}",
  flagHash: "55d74763afd2107f8f6b0accb3febd203884ee98d78d91dad895f4f972b8d6f3",
  objective: "Map all twelve activities into the four NIST RMF functions.",
  hints: [
    "GOVERN = policy, culture, accountability. MAP = context & impact. MEASURE = metrics, evals, monitoring. MANAGE = response & continuous improvement.",
    "Three activities per function.",
    "Postmortem and rollback are MANAGE. Council and policy are GOVERN.",
  ],
  god: [
    { label: "Walk through", body: "Council, policy, RACI = GOVERN. Stakeholder analysis, impact assessment, intended-use enumeration = MAP. Drift, fairness eval, eval harness = MEASURE. Postmortem, rollback, comms = MANAGE." },
  ],
  interactive: {
    widget: "classify",
    label: "NIST RMF function mapping",
    config: {
      prompt: "Place each activity into the right function.",
      items: [
        { id: "a1", text: "Quarterly AI council review of policy" },
        { id: "a2", text: "Defining the RACI for a new use case" },
        { id: "a3", text: "Publishing the AI policy document" },
        { id: "a4", text: "Stakeholder + impact analysis for a new launch" },
        { id: "a5", text: "Enumerating intended use + foreseeable misuse" },
        { id: "a6", text: "Threat-modelling the LLM agent" },
        { id: "a7", text: "Continuous fairness metric monitoring" },
        { id: "a8", text: "Pre-launch eval harness run" },
        { id: "a9", text: "Drift detection alerting threshold tuning" },
        { id: "a10", text: "Postmortem after a hallucination incident" },
        { id: "a11", text: "Rollback to prior model version" },
        { id: "a12", text: "Customer comms after an incident" },
      ],
      buckets: [
        { id: "GOVERN", label: "GOVERN" },
        { id: "MAP", label: "MAP" },
        { id: "MEASURE", label: "MEASURE" },
        { id: "MANAGE", label: "MANAGE" },
      ],
      solution: { a1: "GOVERN", a2: "GOVERN", a3: "GOVERN", a4: "MAP", a5: "MAP", a6: "MAP", a7: "MEASURE", a8: "MEASURE", a9: "MEASURE", a10: "MANAGE", a11: "MANAGE", a12: "MANAGE" },
    },
  },
},

{ id: "m4l5", module: 4, idx: 5, title: "RACI Matrix Builder",
  blurb: "Assign R/A/C/I across four roles for the launch of a high-risk AI system.",
  scenario: `<p>Charter the RACI for the launch decision of an EU AI Act high-risk hiring assistant. Four roles, four letters, exactly one Accountable.</p>`,
  challenge: `<p>Assign one letter per role.</p>`,
  flagFormat: "crage{RACI-COMPLETE}", flag: "crage{RACI-COMPLETE}",
  flagHash: "0ac1a282e58c43ade58203a0da2474b4189aef459735133bca9c01cbea249eb7",
  objective: "Build a defensible RACI for the launch decision.",
  hints: [
    "Exactly one A. CISO is the risk owner here.",
    "Product Owner is the doer (R). DPO and Legal both Consult.",
    "If you assigned two A's, the matrix is broken."
  ],
  god: [
    { label: "Solve", body: "CISO=A, DPO=C, Product Owner=R, Legal=C." },
  ],
  interactive: {
    widget: "policy_builder",
    label: "RACI assignments",
    config: {
      prompt: "Pick R / A / C / I for each role on the launch decision. Exactly one A.",
      fields: [
        { id: "ciso", label: "CISO (enterprise risk owner)", kind: "select", options: ["R","A","C","I"], correct: "A" },
        { id: "dpo", label: "DPO (data-protection officer)", kind: "select", options: ["R","A","C","I"], correct: "C" },
        { id: "po", label: "Product Owner (drives delivery)", kind: "select", options: ["R","A","C","I"], correct: "R" },
        { id: "legal", label: "Legal counsel", kind: "select", options: ["R","A","C","I"], correct: "C" },
      ],
    },
  },
},

{ id: "m4l6", module: 4, idx: 6, title: "ISO/IEC 42001 Audit",
  blurb: "Tick all clauses your AIMS is failing on. Don't tick clauses you're passing.",
  scenario: `<p>Your AI Management System is being assessed against <strong>ISO/IEC 42001:2023</strong>. The evidence file shows: no AI-risk methodology, generic IT risk reused, no internal audit run since deploy, no impact assessment for the new chatbot, but communication and supplier control ARE in place.</p>`,
  challenge: `<p>Tick exactly the clauses your AIMS is failing.</p>`,
  flagFormat: "crage{42001-GAPS-FOUND}", flag: "crage{42001-GAPS-FOUND}",
  flagHash: "ee9fee1d70a11fcea779f4f69fc084ce9f2c6b5d205b9e914a932c2a51604524",
  objective: "Tick exactly the failed 42001 clauses (3 of them).",
  hints: [
    "Failing: AI risk assessment (6.1.2), AI impact assessment (8.3), internal audit (9.2).",
    "Passing: communication (7.4), supplier control, leadership commitment.",
    "Tick exactly three.",
  ],
  god: [
    { label: "Reference clauses", body: "Risk vs impact split: 6.1.2 = risk methodology missing. 8.3 = no impact on individuals/society. 9.2 = no internal audit." },
  ],
  interactive: {
    widget: "checklist",
    label: "ISO 42001 gap selector",
    config: {
      prompt: "Tick the clauses your AIMS is **failing**.",
      items: [
        { id: "5_1", text: "Clause 5.1 — Leadership and commitment" },
        { id: "6_1_2", text: "**Clause 6.1.2 — AI risk assessment**" },
        { id: "7_4", text: "Clause 7.4 — Communication" },
        { id: "8_2", text: "Clause 8.2 — AI system requirements" },
        { id: "8_3", text: "**Clause 8.3 — AI system impact assessment**" },
        { id: "9_2", text: "**Clause 9.2 — Internal audit**" },
        { id: "10_1", text: "Clause 10.1 — Continuous improvement" },
      ],
      correct: ["6_1_2","8_3","9_2"],
    },
  },
},

{ id: "m4l7", module: 4, idx: 7, title: "AIMS Scope Statement",
  blurb: "Draft the formal AIMS scope statement. Required elements only.",
  scenario: `<p>ISO 42001 clause 4.3 requires a documented AIMS scope. Draft it for <strong>Talia Health</strong>: covers all production AI; spans EU + UK; aligned to NIST AI RMF.</p>`,
  challenge: `<p>Pick the defensible value for each field.</p>`,
  flagFormat: "crage{AIMS-SCOPED}", flag: "crage{AIMS-SCOPED}",
  flagHash: "b0da38ba7c345e1a0f5c30179ac7523c9e3b280de6873e17cf34213201a1c9ad",
  objective: "Complete the AIMS scope statement with defensible values.",
  hints: [
    "Boundary: ALL production AI (not just customer-facing).",
    "Geographies: include EU + UK explicitly.",
    "External framework alignment: NIST AI RMF + EU AI Act."
  ],
  god: [
    { label: "Solve", body: "All production AI; EU + UK; NIST AI RMF + EU AI Act; quarterly review; CAIO accountable." },
  ],
  interactive: {
    widget: "policy_builder",
    label: "AIMS scope draft",
    config: {
      prompt: "Pick defensible AIMS scope.",
      fields: [
        { id: "boundary", label: "Boundary", kind: "select", options: ["Only customer-facing AI", "All production AI", "Only research projects", "Only vendor-purchased AI"], correct: "All production AI" },
        { id: "geo", label: "Geographic scope", kind: "select", options: ["US only", "EU only", "EU + UK", "Global"], correct: "EU + UK" },
        { id: "frameworks", label: "External alignment", kind: "select", options: ["None", "NIST AI RMF only", "NIST AI RMF + EU AI Act", "GDPR only"], correct: "NIST AI RMF + EU AI Act" },
        { id: "review", label: "Review cadence", kind: "select", options: ["Annual", "Quarterly", "Monthly", "Ad-hoc"], correct: "Quarterly" },
        { id: "accountable", label: "Accountable role", kind: "select", options: ["CFO", "CAIO / Chief AI Officer", "Head of Engineering", "Head of Marketing"], correct: "CAIO / Chief AI Officer" },
      ],
    },
  },
},

{ id: "m4l8", module: 4, idx: 8, title: "OECD ↔ NIST Alignment",
  blurb: "Five OECD principles map onto NIST AI RMF functions. Drag each to its primary alignment.",
  scenario: `<p>Your governance team is reconciling OECD AI principles with NIST AI RMF functions. Place each OECD principle onto its *primary* NIST function alignment.</p>`,
  challenge: `<p>Each principle maps to one function as primary alignment.</p>`,
  flagFormat: "crage{PRINCIPLES-ALIGNED}", flag: "crage{PRINCIPLES-ALIGNED}",
  flagHash: "5696fc93230e40c7b585450efc36d46d3db021b969712ac661b4d8e3fc425e2e",
  objective: "Map each of the five OECD principles to its primary NIST AI RMF function.",
  hints: [
    "Robustness/safety = MEASURE (testing, evals).",
    "Accountability = GOVERN (policy, ownership).",
    "Inclusive growth + human values + transparency are spread across MAP and GOVERN."
  ],
  god: [
    { label: "Solve", body: "Inclusive growth → MAP. Human values + autonomy → MAP. Transparency → GOVERN. Robustness + safety → MEASURE. Accountability → GOVERN." },
  ],
  interactive: {
    widget: "classify",
    label: "OECD → NIST primary alignment",
    config: {
      prompt: "Each OECD principle has a primary NIST function alignment.",
      items: [
        { id: "ig", text: "Inclusive growth, sustainable development & well-being" },
        { id: "hv", text: "Human-centred values & fairness" },
        { id: "tx", text: "Transparency & explainability" },
        { id: "rb", text: "Robustness, security & safety" },
        { id: "ac", text: "Accountability" },
      ],
      buckets: [
        { id: "GOVERN", label: "GOVERN" },
        { id: "MAP", label: "MAP" },
        { id: "MEASURE", label: "MEASURE" },
      ],
      solution: { ig: "MAP", hv: "MAP", tx: "GOVERN", rb: "MEASURE", ac: "GOVERN" },
    },
  },
},

// ===================================================================
// MODULE 5 · AI Regulatory Compliance
// ===================================================================

{ id: "m5l4", module: 5, idx: 4, title: "EU AI Act Classifier",
  blurb: "Walk a multi-step questionnaire to classify a deployment under the EU AI Act.",
  scenario: `<p>Use case under review: <strong>automated CV-screening for engineering hires across EU offices</strong>, with recruiters reviewing the model's top-N (and accepting most of the time).</p>`,
  challenge: `<p>Walk the wizard. Reach the right tier.</p>`,
  flagFormat: "crage{ACT-CLASSIFIED}", flag: "crage{ACT-CLASSIFIED}",
  flagHash: "f8a62b5f3f41ebbc261935f928ab59adeda9e36d22634f7a5410b08edcf71e0a",
  objective: "Classify the CV-screening use case under the EU AI Act tiers.",
  hints: [
    "Annex III explicitly lists employment / recruitment as high-risk.",
    "Don't talk yourself into LIMITED via 'human-in-loop' — Annex III applies regardless.",
    "Right tier: HIGH-RISK."
  ],
  god: [
    { label: "Walk", body: "Q1: produces decision affecting people? Yes. Q2: in EU? Yes. Q3: prohibited under Title II (social scoring, manipulation)? No. Q4: Annex III (employment, education, biometrics, etc.)? Yes — recruitment. → HIGH-RISK." },
  ],
  interactive: {
    widget: "decision_tree",
    label: "EU AI Act tier classifier",
    config: {
      prompt: "CV-screening for EU engineering hires; recruiter review.",
      start: "q1",
      nodes: {
        q1: { q: "Does the system contribute to a decision affecting natural persons?", options: [
          { label: "Yes", go: "q2" },
          { label: "No (purely internal data tool)", go: "t_minimal" },
        ]},
        q2: { q: "Are EU subjects in scope?", options: [
          { label: "Yes", go: "q3" },
          { label: "No", go: "t_minimal" },
        ]},
        q3: { q: "Is it on the prohibited list (Title II) — social scoring, manipulation, biometric ID for law enforcement?", options: [
          { label: "Yes", go: "t_prohibited" },
          { label: "No", go: "q4" },
        ]},
        q4: { q: "Does Annex III apply? (employment, education, credit, critical infra, law enforcement, justice...)", options: [
          { label: "Yes — Annex III hit", go: "t_high" },
          { label: "No", go: "q5" },
        ]},
        q5: { q: "Does the system interact with humans (chatbot, deepfake, emotion detection)?", options: [
          { label: "Yes", go: "t_limited" },
          { label: "No", go: "t_minimal" },
        ]},
        t_prohibited: { result: true, label: "PROHIBITED — Title II violation" },
        t_high: { result: true, label: "HIGH-RISK — Annex III applies" },
        t_limited: { result: true, label: "LIMITED-RISK — transparency obligations" },
        t_minimal: { result: true, label: "MINIMAL-RISK" },
      },
      correctTerminal: "t_high",
    },
  },
},

{ id: "m5l5", module: 5, idx: 5, title: "DPIA Trigger Wizard",
  blurb: "Walk the GDPR Art. 35 DPIA trigger questionnaire.",
  scenario: `<p>An automated loan-decision system, EU residents, no human review. DPIA required?</p>`,
  challenge: `<p>Walk the wizard.</p>`,
  flagFormat: "crage{DPIA-DETERMINED}", flag: "crage{DPIA-DETERMINED}",
  flagHash: "28b407ed0ca79b7ab37c3f6e52249670255f0857f3f8682a9ac26bdbb779c9b8",
  objective: "Reach the right verdict on DPIA requirement.",
  hints: [
    "GDPR Art. 35 DPIA is required when processing is likely to result in HIGH-risk to rights and freedoms.",
    "WP29 list: automated decisions with legal effect → DPIA required.",
    "The right verdict is DPIA-REQUIRED.",
  ],
  god: [
    { label: "Walk", body: "Personal data? Yes. Automated decisions? Yes. Legal/significant effect? Yes. → DPIA required." },
  ],
  interactive: {
    widget: "decision_tree",
    label: "DPIA wizard",
    config: {
      prompt: "Automated loan-decision system on EU residents, no human review.",
      start: "q1",
      nodes: {
        q1: { q: "Does the system process personal data?", options: [
          { label: "Yes", go: "q2" },
          { label: "No", go: "t_no" },
        ]},
        q2: { q: "Is processing solely automated?", options: [
          { label: "Yes", go: "q3" },
          { label: "No (meaningful human review)", go: "q4" },
        ]},
        q3: { q: "Does it produce a legal or similarly significant effect on the individual?", options: [
          { label: "Yes", go: "t_yes" },
          { label: "No", go: "t_review" },
        ]},
        q4: { q: "Large-scale processing of special-category data?", options: [
          { label: "Yes", go: "t_yes" },
          { label: "No", go: "t_review" },
        ]},
        t_yes: { result: true, label: "DPIA REQUIRED — Art. 35" },
        t_no: { result: true, label: "GDPR not engaged" },
        t_review: { result: true, label: "REVIEW with DPO; DPIA may still be advisable" },
      },
      correctTerminal: "t_yes",
    },
  },
},

{ id: "m5l6", module: 5, idx: 6, title: "Jurisdiction Mapper",
  blurb: "Eight deployments across regions. Place each onto its dominant regulator.",
  scenario: `<p>Map each deployment to its dominant regulatory regime.</p>`,
  challenge: `<p>Eight items into five buckets. Place each correctly.</p>`,
  flagFormat: "crage{REGS-MAPPED}", flag: "crage{REGS-MAPPED}",
  flagHash: "6071cb92c8a309963174891b96850c0588338e79b7bb174a36003156051bdc21",
  objective: "Map each deployment to its dominant regulator.",
  hints: [
    "EU AI Act: high-risk Annex III deployments in EU. GDPR: any personal-data processing of EU residents.",
    "CCPA: California consumers. PIPL: China users. HIPAA: US health entities + PHI.",
    "Hard one: a chatbot for EU residents AND California consumers — pick by *primary* exposure."
  ],
  god: [
    { label: "Walk", body: "Each item maps cleanly. Primary exposure wins on dual-jurisdictional cases." },
  ],
  interactive: {
    widget: "classify",
    label: "Regulator mapping",
    config: {
      prompt: "Place each deployment under its dominant regulator.",
      items: [
        { id: "j1", text: "Hiring assistant deployed across EU offices" },
        { id: "j2", text: "Targeted-ads profile builder for CA consumers" },
        { id: "j3", text: "Consumer chatbot operated in mainland China" },
        { id: "j4", text: "US hospital decision-support on PHI" },
        { id: "j5", text: "B2B sales-rep assistant across DE/FR/IT" },
        { id: "j6", text: "Children's learning app for CA users (under 13)" },
        { id: "j7", text: "Public-sector benefits decisioning, EU member state" },
        { id: "j8", text: "Model trained on data subjects in Shanghai" },
      ],
      buckets: [
        { id: "EU_AI_ACT", label: "EU AI Act" },
        { id: "GDPR", label: "GDPR (general personal data)" },
        { id: "CCPA", label: "CCPA / CPRA" },
        { id: "PIPL", label: "PIPL" },
        { id: "HIPAA", label: "HIPAA" },
      ],
      solution: { j1: "EU_AI_ACT", j2: "CCPA", j3: "PIPL", j4: "HIPAA", j5: "GDPR", j6: "CCPA", j7: "EU_AI_ACT", j8: "PIPL" },
    },
  },
},

{ id: "m5l7", module: 5, idx: 7, title: "DPIA Section Completeness",
  blurb: "Required DPIA sections per Art. 35(7). Tick everything that must be in your DPIA.",
  scenario: `<p>Your DPIA template is being reviewed. Tick every section that <strong>must</strong> appear (per Art. 35(7) and EDPB guidance).</p>`,
  challenge: `<p>Pick the required sections only.</p>`,
  flagFormat: "crage{DPIA-COMPLETE}", flag: "crage{DPIA-COMPLETE}",
  flagHash: "24044abdba0b4cdd52b704f21a0458f8927df7c9d6179a89042ffe30ddfb4e93",
  objective: "Pick the four sections required in a DPIA per Art. 35(7).",
  hints: [
    "Required: description of processing, necessity & proportionality, risks to rights/freedoms, mitigation measures.",
    "Marketing copy and roadmap are NOT DPIA sections.",
    "Pick exactly four."
  ],
  god: [
    { label: "Solve", body: "Description; necessity & proportionality; risks; mitigation. Four sections." },
  ],
  interactive: {
    widget: "checklist",
    label: "DPIA required sections",
    config: {
      prompt: "Tick the sections **required** by Art. 35(7).",
      items: [
        { id: "desc", text: "Description of processing operations + purposes" },
        { id: "nec", text: "Assessment of necessity & proportionality" },
        { id: "risk", text: "Risks to rights & freedoms of data subjects" },
        { id: "mit", text: "Measures to address the risks (mitigations)" },
        { id: "mkt", text: "Marketing positioning" },
        { id: "roadmap", text: "12-month roadmap" },
        { id: "ip", text: "Intellectual property strategy" },
      ],
      correct: ["desc","nec","risk","mit"],
    },
  },
},

{ id: "m5l8", module: 5, idx: 8, title: "Article 22 Mitigation Plan",
  blurb: "Build the mitigation plan for an Art. 22 automated-decision system.",
  scenario: `<p>You're keeping the automated loan-decision under Art. 22 with the safeguards required by Art. 22(3): right to obtain human intervention, right to express the data subject's point of view, right to contest, transparency.</p>`,
  challenge: `<p>Pick defensible answers for each safeguard.</p>`,
  flagFormat: "crage{ART22-MITIGATED}", flag: "crage{ART22-MITIGATED}",
  flagHash: "a7ebad5bdf6b07956658e6fd792e1fc8593b0559bce1a5d55e4cb2aec85c8b80",
  objective: "Configure all four Art. 22(3) safeguards correctly.",
  hints: [
    "Lawful basis: typically contract performance OR explicit consent.",
    "Human-review SLA must be a number you can hit (e.g., 14 days).",
    "Plain-language reason in the decision letter is non-negotiable."
  ],
  god: [
    { label: "Solve", body: "Lawful basis: Contract performance. Human review: ≤ 14 days. Reason in decision letter: yes. Right to contest: prominent." },
  ],
  interactive: {
    widget: "policy_builder",
    label: "Art. 22 mitigation plan",
    config: {
      prompt: "Configure the safeguards.",
      fields: [
        { id: "basis", label: "Lawful basis (Art. 22(2))", kind: "select", options: ["Legitimate interest", "Contract performance", "Public task", "None — refuse processing"], correct: "Contract performance" },
        { id: "review_sla", label: "Human-review SLA", kind: "select", options: ["No SLA", "≤ 14 days", "≤ 90 days", "Best-effort"], correct: "≤ 14 days" },
        { id: "reason", label: "Reason in decision letter", kind: "select", options: ["No", "Generic boilerplate", "Plain-language specific reason", "Internal-only"], correct: "Plain-language specific reason" },
        { id: "contest", label: "Right to contest disclosure", kind: "select", options: ["Buried in T&Cs", "Prominent on the decision page", "On request only", "Not disclosed"], correct: "Prominent on the decision page" },
      ],
    },
  },
},

// ===================================================================
// MODULE 6 · AI Risk and Threat Management
// ===================================================================

{ id: "m6l4", module: 6, idx: 4, title: "MITRE ATLAS Mapper",
  blurb: "Ten observed adversary behaviours. Map each to a MITRE ATLAS tactic.",
  scenario: `<p>Your blue team has logged ten observed behaviours during a red-team exercise on the customer LLM stack. Sort each into its ATLAS tactic.</p>`,
  challenge: `<p>Place each behaviour into the right tactic.</p>`,
  flagFormat: "crage{ATLAS-MAPPED}", flag: "crage{ATLAS-MAPPED}",
  flagHash: "c9735305bb0821281d1d13f71f5c5e6f6c60fe0f42b138679856d2705e52f2c5",
  objective: "Map all ten behaviours into the five ATLAS tactic buckets.",
  hints: [
    "Reconnaissance: probing, fingerprinting. Initial access: getting in. Execution: running adversary code. Exfiltration: getting data out. Impact: degrading the system.",
    "Two behaviours per tactic.",
    "Membership inference is exfiltration; jailbreak is execution."
  ],
  god: [
    { label: "Walk", body: "Probe API for model fingerprint = recon. Stolen API key = initial access. Jailbreak prompt = execution. Membership inference = exfiltration. Adversarial-noise denial = impact." },
  ],
  interactive: {
    widget: "classify",
    label: "ATLAS tactic mapping",
    config: {
      prompt: "Place each behaviour into the appropriate ATLAS tactic.",
      items: [
        { id: "b1", text: "Probe API to fingerprint base model + version" },
        { id: "b2", text: "Enumerate exposed model endpoints" },
        { id: "b3", text: "Reuse stolen API key from public Github commit" },
        { id: "b4", text: "Spear-phish ML engineer's HF token" },
        { id: "b5", text: "Crafted jailbreak prompt to override system rules" },
        { id: "b6", text: "Indirect prompt injection in retrieved doc" },
        { id: "b7", text: "Membership inference on training set" },
        { id: "b8", text: "Repeated queries reconstruct another customer's record" },
        { id: "b9", text: "Adversarial noise floods inference, degrading SLA" },
        { id: "b10", text: "Poison evaluation set to mask the attack" },
      ],
      buckets: [
        { id: "RECON", label: "Reconnaissance" },
        { id: "INITIAL", label: "Initial Access" },
        { id: "EXEC", label: "Execution" },
        { id: "EXFIL", label: "Exfiltration" },
        { id: "IMPACT", label: "Impact" },
      ],
      solution: { b1: "RECON", b2: "RECON", b3: "INITIAL", b4: "INITIAL", b5: "EXEC", b6: "EXEC", b7: "EXFIL", b8: "EXFIL", b9: "IMPACT", b10: "IMPACT" },
    },
  },
},

{ id: "m6l5", module: 6, idx: 5, title: "Risk Priority Sorter",
  blurb: "Drag seven risks into priority order. Tie-break by exploitability.",
  scenario: `<p>Seven AI risks in your live register. Composite (L×I) gives the first-cut order; tie-break by exploitability.</p>`,
  challenge: `<p>Sort highest priority first.</p>`,
  flagFormat: "crage{RISKS-RANKED}", flag: "crage{RISKS-RANKED}",
  flagHash: "e56285a0f852b29186a158f29d0cd726b779e5efbf5fe621a432dda22e19e70b",
  objective: "Rank the seven risks correctly highest-first.",
  hints: [
    "Composite first; tie-break by exploitability (which can a lone external actor trigger today?).",
    "PII regurgitation > prompt injection (both score 15) because it triggers in normal use.",
    "Internal-only copilot bug ranks last."
  ],
  god: [
    { label: "Order", body: "PII regurgitation, prompt injection, drift, vendor EoL, agent-tool abuse, supply-chain tampering, internal-copilot inaccuracy." },
  ],
  interactive: {
    widget: "sortable",
    label: "Risk register",
    config: {
      prompt: "Sort highest-priority first.",
      items: [
        { id: "r1", text: "Drift undetected on churn predictor (L4 I3)" },
        { id: "r2", text: "Vendor base-model EoL with 90-day notice (L2 I4)" },
        { id: "r3", text: "PII regurgitation from fine-tuned support model (L3 I5)" },
        { id: "r4", text: "Internal copilot inaccuracy (L4 I1)" },
        { id: "r5", text: "Prompt injection on customer chat → price override (L3 I5)" },
        { id: "r6", text: "Agent tool abuse via crafted attachment (L2 I4)" },
        { id: "r7", text: "Supply-chain tampering on weights (L1 I5)" },
      ],
      correctOrder: ["r3","r5","r1","r2","r6","r7","r4"],
    },
  },
},

{ id: "m6l6", module: 6, idx: 6, title: "Residual Risk Calculator",
  blurb: "Sliders for likelihood, impact, and control efficacy. Reach an acceptable residual.",
  scenario: `<p>Inherent risk is HIGH (L4, I5, composite 20). Apply controls to bring residual into MEDIUM band (composite 10–14).</p>`,
  challenge: `<p>Tune likelihood, impact, control efficacy. Composite must land in [10, 14].</p>`,
  flagFormat: "crage{RESIDUAL-CALCULATED}", flag: "crage{RESIDUAL-CALCULATED}",
  flagHash: "60cd3fe6bb8c48643e2e2feedc9731d1754cf240b1852df3996337b8d9dec312",
  objective: "Drive composite into [10, 14] with conservative control assumptions.",
  hints: [
    "Don't drop L too aggressively — guardrails reduce frequency, not certainty.",
    "Action-cap controls drop impact more reliably than likelihood.",
    "Target L=4, I=3 → composite 12. Acceptable."
  ],
  god: [
    { label: "Solve", body: "L=4, I=3 → composite 12. MEDIUM tier. Conservative residual is correct." },
  ],
  interactive: {
    widget: "sliders",
    label: "Residual risk",
    config: {
      prompt: "Set L and I. Composite must be in [10, 14] for MEDIUM tier.",
      sliders: [
        { id: "L", label: "Likelihood (1–5)", min: 1, max: 5, step: 1, default: 4 },
        { id: "I", label: "Impact (1–5)", min: 1, max: 5, step: 1, default: 5 },
      ],
      compute: "L * I",
      display: "composite = {result} (need 10–14)",
      target: { min: 10, max: 14 },
      solutionState: { L: 4, I: 3 },
      successText: "residual lands in MEDIUM band",
    },
  },
},

{ id: "m6l7", module: 6, idx: 7, title: "Forensic Investigator",
  blurb: "Investigate logs for a refund-anomaly. Use the terminal to find the root cause.",
  scenario: `<p>Last night the support agent issued $42K in refunds vs. a $4K daily average. Investigate. Required terminal commands listed below.</p>`,
  challenge: `<p>Run all four required investigations.</p>`,
  flagFormat: "crage{ROOT-CAUSE-FOUND}", flag: "crage{ROOT-CAUSE-FOUND}",
  flagHash: "8cb83bc9858761796e9c2699c1086ff0aebca39965892408b82225dd0176efe6",
  objective: "Run all four investigation commands successfully.",
  hints: [
    "Type `help` to see the command set.",
    "Required: `tail logs/agent.log`, `grep refund logs/agent.log`, `cat policies/refund.json`, `audit user.json`.",
    "Click CHECK PROGRESS when complete."
  ],
  god: [
    { label: "Walk the four commands", body: "tail logs/agent.log; grep refund logs/agent.log; cat policies/refund.json; audit user.json. Each layer reveals more — log volume, anomaly cluster, policy ceiling, and the suspect user." },
  ],
  interactive: {
    widget: "terminal",
    label: "Refund-anomaly forensic",
    config: {
      terminal_title: "ir@crage:~/incident-2026-05-09",
      banner: "[ir] refund anomaly · last 24h · type `help`",
      prompt_str: "ir$ ",
      prompts: {
        "^help$": ["available: ls, tail logs/agent.log, grep refund logs/agent.log, cat policies/refund.json, audit user.json, exit"],
        "^ls$": ["logs/  policies/  user.json"],
        "^tail logs/agent.log": [
          "23:14:01 agent: refund $400 OK",
          "23:14:43 agent: refund $400 OK",
          "23:15:21 agent: refund $400 OK",
          "[... 105 similar lines ...]",
          "[anomaly] 105 refunds × $400 in 18 min — burst",
        ],
        "^grep refund logs/agent.log": [
          "all from session_id=sess_b4Ze91 user=external/free-tier",
          "all crafted via tool-call injection in customer message",
        ],
        "^cat policies/refund.json": [
          "{",
          "  agent_max_refund_usd: 500,",
          "  human_approval_above_usd: 500,",
          "  anomaly_alert_count_per_hour: 50,  // never wired up",
          "}",
        ],
        "^audit user.json": [
          "user=external/free-tier created 2026-05-08 22:44 (1h before incident)",
          "credit history: none",
          "verdict: probable abuse account; rate-limit + anomaly-alert wiring missing",
        ],
        "^exit$": ["(closed)"],
      },
      required: ["^tail logs/agent.log", "^grep refund logs/agent.log", "^cat policies/refund.json", "^audit user.json"],
      required_help: "Required: tail logs/agent.log; grep refund logs/agent.log; cat policies/refund.json; audit user.json",
      god_script: ["help", "ls", "tail logs/agent.log", "grep refund logs/agent.log", "cat policies/refund.json", "audit user.json"],
    },
  },
},

{ id: "m6l8", module: 6, idx: 8, title: "STRIDE-LM Threat Model",
  blurb: "Eight threats against an LLM agent. Sort onto the six STRIDE categories.",
  scenario: `<p>Threat-model your customer LLM agent with the STRIDE-LM extension.</p>`,
  challenge: `<p>Drop each threat into its STRIDE category.</p>`,
  flagFormat: "crage{STRIDE-MAPPED}", flag: "crage{STRIDE-MAPPED}",
  flagHash: "95c355a749bb2ff35389b4f48f85a0e87a180bfdebc4c68467e55dc1e4e35144",
  objective: "Map all eight threats to STRIDE categories.",
  hints: [
    "Spoofing = identity. Tampering = modify. Repudiation = deniability. Info-disclosure = leakage. DoS = availability. EoP = privilege.",
    "LLM-specific: prompt injection = tampering of input context. Membership inference = info-disclosure.",
    "RBAC bypass on agent tool = elevation of privilege."
  ],
  god: [
    { label: "Walk", body: "Spoofed user ID = S. Adversarial input = T. No log of action = R. Membership inference = I. Adversarial-noise flood = D. Tool RBAC bypass = E. Plus duplicates per category." },
  ],
  interactive: {
    widget: "classify",
    label: "STRIDE-LM mapping",
    config: {
      prompt: "Place each threat in its STRIDE category.",
      items: [
        { id: "t1", text: "Forged user identity in agent session" },
        { id: "t2", text: "Adversarial prompt injection via retrieved doc" },
        { id: "t3", text: "No audit log of refund tool call" },
        { id: "t4", text: "Membership inference on training set" },
        { id: "t5", text: "Adversarial noise floods inference SLA" },
        { id: "t6", text: "Junior role calls admin-only refund tool" },
        { id: "t7", text: "Spoofed system-prompt injection" },
        { id: "t8", text: "User claims they never made the request (no signed log)" },
      ],
      buckets: [
        { id: "S", label: "S — Spoofing" },
        { id: "T", label: "T — Tampering" },
        { id: "R", label: "R — Repudiation" },
        { id: "I", label: "I — Info Disclosure" },
        { id: "D", label: "D — Denial of Service" },
        { id: "E", label: "E — Elevation of Privilege" },
      ],
      solution: { t1: "S", t7: "S", t2: "T", t3: "R", t8: "R", t4: "I", t5: "D", t6: "E" },
    },
  },
},

// ===================================================================
// MODULE 7 · Third-Party AI Risk Management
// ===================================================================

{ id: "m7l4", module: 7, idx: 4, title: "DDQ Red-Flag Hunter",
  blurb: "Vendor DDQ reply pasted in. Click every problematic clause.",
  scenario: `<p>Vendor <strong>Pylon Labs</strong> sent their DDQ reply. Some answers are red flags. Click every clause that's a governance problem.</p>`,
  challenge: `<p>Click every problematic clause.</p>`,
  flagFormat: "crage{DDQ-FLAGGED}", flag: "crage{DDQ-FLAGGED}",
  flagHash: "db78e6e793c4d4a2ce4df889d757d116992a51ed366ff4ff682f4ed4c33b894e",
  objective: "Click every red-flag clause in the DDQ reply.",
  hints: [
    "'Best-effort' notification, 'no separate DPA', 'internal documentation only', and 'Type I issued' are all red flags.",
    "'Pen test 2025-10' and 'sub-processors disclosed' are NOT red flags.",
    "Four red flags total."
  ],
  god: [
    { label: "Click each red flag", body: "no DPA; model-card refused; SOC2 Type I; best-effort SLA. Four total." },
  ],
  interactive: {
    widget: "annotator",
    label: "DDQ red-flag hunter",
    config: {
      prompt: "Click every red-flag clause.",
      passage:
`DDQ reply · Pylon Labs

Q: Will you sign a Data Processing Agreement?
A: {{r1}}

Q: Provide your model card.
A: {{r2}}

Q: SOC 2 Type II?
A: {{r3}}

Q: Incident-notification SLA on AI failures?
A: {{r4}}

Q: Penetration test (last 12 months)?
A: Yes, by Acme Sec, dated 2025-10.

Q: Sub-processors disclosed?
A: Yes — see Annex A.`,
      spans: [
        { id: "r1", text: "We rely on our standard MSA; no separate DPA." },
        { id: "r2", text: "Internal documentation only — not shared with customers." },
        { id: "r3", text: "Type I issued 2025-09." },
        { id: "r4", text: "We notify on a best-effort basis." },
      ],
      correct: ["r1","r2","r3","r4"],
    },
  },
},

{ id: "m7l5", module: 7, idx: 5, title: "Vendor DDQ Completeness",
  blurb: "Tick the elements your vendor DDQ MUST cover for an AI vendor.",
  scenario: `<p>You're standardising the AI vendor DDQ. Below are 12 candidate questions. Pick the ones <strong>required</strong> for any AI vendor.</p>`,
  challenge: `<p>Pick the eight required questions.</p>`,
  flagFormat: "crage{VENDOR-AUDITED}", flag: "crage{VENDOR-AUDITED}",
  flagHash: "0d820213c84e98d160f2de479df54aa9f02006400ef50a61faf47bf73f27f188",
  objective: "Pick the eight required AI-vendor DDQ elements.",
  hints: [
    "Required: DPA, model card, training-data provenance, eval data, license, sub-processors, incident-notification SLA, SOC 2 Type II.",
    "Not in scope of DDQ: marketing testimonials, founder LinkedIn, social media presence.",
    "Pick eight."
  ],
  god: [
    { label: "Solve", body: "DPA, model card, provenance, eval, license, sub-procs, SLA, SOC 2 Type II." },
  ],
  interactive: {
    widget: "checklist",
    label: "DDQ checklist",
    config: {
      prompt: "Tick required AI-vendor DDQ elements.",
      items: [
        { id: "dpa", text: "Data Processing Agreement (signed)" },
        { id: "card", text: "Model card / system card" },
        { id: "prov", text: "Training-data provenance + manifest" },
        { id: "eval", text: "Evaluation data + held-out metrics" },
        { id: "lic", text: "License terms (downstream use)" },
        { id: "subp", text: "Sub-processors disclosed" },
        { id: "sla", text: "Incident-notification SLA (numeric, contractual)" },
        { id: "soc2", text: "SOC 2 Type II report" },
        { id: "tw", text: "Marketing testimonials" },
        { id: "li", text: "Founder LinkedIn" },
        { id: "sm", text: "Social media presence" },
        { id: "logo", text: "Logo guidelines" },
      ],
      correct: ["dpa","card","prov","eval","lic","subp","sla","soc2"],
    },
  },
},

{ id: "m7l6", module: 7, idx: 6, title: "Model Verifier Terminal",
  blurb: "Run integrity, license, and provenance checks against a model pull.",
  scenario: `<p>An OSS pull came in. Verify hash, license, provenance.</p>`,
  challenge: `<p>Run all four required checks.</p>`,
  flagFormat: "crage{MODEL-VERIFIED}", flag: "crage{MODEL-VERIFIED}",
  flagHash: "7643473787583188a2685ba9b718f1729fa1f75407a626036d894e22bc6feaa6",
  objective: "Run hash, license, provenance, and SBOM checks.",
  hints: [
    "Required: `sha256sum`, `license check`, `provenance verify`, `sbom export`.",
    "If hash mismatches, you stop — but in this lab the verification path passes.",
    "Type `help`."
  ],
  god: [
    { label: "Walk", body: "Run the four required commands. Each output reveals an aspect of supply-chain assurance." },
  ],
  interactive: {
    widget: "terminal",
    label: "Vendor model verification",
    config: {
      terminal_title: "vendor-audit@crage:~/oss-pull",
      banner: "[vendor-audit] OSS pull verifier",
      prompt_str: "verify$ ",
      prompts: {
        "^help$": ["sha256sum, license check, provenance verify, sbom export, ls, exit"],
        "^ls$": ["weights/  MODEL_CARD  LICENSE  SBOM.json"],
        "^sha256sum": ["weights/model.bin  9af0...c322  ✓ matches publisher"],
        "^license check$": ["declared: Apache-2.0 · commercial: PERMITTED"],
        "^provenance verify$": ["upstream chain verified · 14 sources, all permissive"],
        "^sbom export$": ["wrote SBOM.json (CycloneDX 1.5) · 38 components, 0 vulns"],
        "^exit$": ["(closed)"],
      },
      required: ["^sha256sum", "^license check$", "^provenance verify$", "^sbom export$"],
      required_help: "Run: sha256sum weights/*; license check; provenance verify; sbom export.",
      god_script: ["help", "ls", "sha256sum weights/model.bin", "license check", "provenance verify", "sbom export"],
    },
  },
},

{ id: "m7l7", module: 7, idx: 7, title: "Vendor Approval Policy",
  blurb: "Configure the policy gates a vendor must pass to be onboarded.",
  scenario: `<p>Define the standing vendor-approval policy. The fields below set the gates.</p>`,
  challenge: `<p>Pick defensible values.</p>`,
  flagFormat: "crage{VENDOR-POLICY-SET}", flag: "crage{VENDOR-POLICY-SET}",
  flagHash: "30fc88f1d6d006b97642e2c3a38d8d79e9e83820a16452adf7a63f7506a2dff8",
  objective: "Set defensible vendor-approval gates.",
  hints: [
    "Minimum SOC 2: Type II, not Type I.",
    "Notification SLA: numeric and contractual.",
    "DPA + model card are required, not optional."
  ],
  god: [
    { label: "Solve", body: "SOC 2 Type II; SLA ≤ 72h; DPA required; Model card required; Annual reassessment." },
  ],
  interactive: {
    widget: "policy_builder",
    label: "Vendor onboarding policy",
    config: {
      prompt: "Set the policy gates.",
      fields: [
        { id: "soc2", label: "Minimum SOC 2 level", kind: "select", options: ["None","Type I","Type II","ISO 27001 only"], correct: "Type II" },
        { id: "sla", label: "Incident-notification SLA", kind: "select", options: ["No SLA","Best-effort","≤ 72 hours","≤ 14 days"], correct: "≤ 72 hours" },
        { id: "dpa", label: "DPA requirement", kind: "select", options: ["Optional","Required","Standard MSA OK","Negotiable"], correct: "Required" },
        { id: "card", label: "Model card requirement", kind: "select", options: ["Optional","Required (shareable)","Internal-only OK","Vendor reference page OK"], correct: "Required (shareable)" },
        { id: "review", label: "Reassessment cadence", kind: "select", options: ["Once at onboard","Annual","Every 5 years","Never"], correct: "Annual" },
      ],
    },
  },
},

{ id: "m7l8", module: 7, idx: 8, title: "License Compatibility",
  blurb: "Six common licenses. Sort each into commercial-OK, restricted, or blocked for production.",
  scenario: `<p>Your engineering team wants to use six different OSS components in a commercial product. Sort them by license-deployability.</p>`,
  challenge: `<p>Place each license in COMMERCIAL_OK / RESTRICTED / BLOCKED.</p>`,
  flagFormat: "crage{LICENSES-MAPPED}", flag: "crage{LICENSES-MAPPED}",
  flagHash: "2402d7ffdd1914c92fddfaf4e76de9f6056ea732b3c5c74233195c45c5a92102",
  objective: "Map each license to commercial-deployment status.",
  hints: [
    "Apache-2.0, MIT = commercial-OK.",
    "GPL-3 = restricted (copyleft); LGPL = restricted.",
    "CC-BY-NC and 'research-only' = blocked for commercial."
  ],
  god: [
    { label: "Walk", body: "Apache-2.0 → COMMERCIAL_OK. MIT → COMMERCIAL_OK. GPL-3 → RESTRICTED. LGPL-2.1 → RESTRICTED. CC-BY-NC-4.0 → BLOCKED. Research-only → BLOCKED." },
  ],
  interactive: {
    widget: "classify",
    label: "License deployability",
    config: {
      prompt: "Sort each license.",
      items: [
        { id: "l1", text: "Apache-2.0" },
        { id: "l2", text: "MIT" },
        { id: "l3", text: "GPL-3.0" },
        { id: "l4", text: "LGPL-2.1" },
        { id: "l5", text: "CC-BY-NC-4.0" },
        { id: "l6", text: "Research-only / non-commercial" },
      ],
      buckets: [
        { id: "COMMERCIAL_OK", label: "Commercial OK" },
        { id: "RESTRICTED", label: "Restricted (copyleft / attribution)" },
        { id: "BLOCKED", label: "Blocked for commercial" },
      ],
      solution: { l1: "COMMERCIAL_OK", l2: "COMMERCIAL_OK", l3: "RESTRICTED", l4: "RESTRICTED", l5: "BLOCKED", l6: "BLOCKED" },
    },
  },
},

// ===================================================================
// MODULE 8 · AI Security Architecture and Controls
// ===================================================================

{ id: "m8l4", module: 8, idx: 4, title: "Threat → Control Mapper",
  blurb: "Eight threats. Six controls. Sort each threat onto its primary control.",
  scenario: `<p>Threat-to-control mapping for a customer LLM stack.</p>`,
  challenge: `<p>Place each threat onto its primary mitigating control.</p>`,
  flagFormat: "crage{CONTROLS-MAPPED}", flag: "crage{CONTROLS-MAPPED}",
  flagHash: "b3cb823e1404f02479acd2bc01706e1eb6d0402f17a7797bacd89dea2ed2da84",
  objective: "Map each threat to its primary control.",
  hints: [
    "Jailbreak → input filter. PII regurgitation → output filter. Volumetric → rate limit. Privilege bypass → RBAC.",
    "Tool abuse → action approval. Data exfil → DLP/output filter.",
    "Each control gets at least one threat."
  ],
  god: [
    { label: "Walk", body: "Eight threats clean-map onto six controls. Tool abuse + privilege bypass + jailbreak + PII regurgitation + volumetric + data exfil + supply chain + drift." },
  ],
  interactive: {
    widget: "classify",
    label: "Threat → control",
    config: {
      prompt: "Place each threat on its primary control.",
      items: [
        { id: "th1", text: "Jailbreak prompt elicits banned content" },
        { id: "th2", text: "Model regurgitates training-set PII" },
        { id: "th3", text: "Volumetric flood of API calls" },
        { id: "th4", text: "Junior agent calls admin-only refund tool" },
        { id: "th5", text: "Agent issues $42K refund via crafted message" },
        { id: "th6", text: "Customer data leaked through model response" },
        { id: "th7", text: "Tampered weights from public hub" },
        { id: "th8", text: "Drift in outputs without alerting" },
      ],
      buckets: [
        { id: "INPUT_FILTER", label: "Input filter / prompt firewall" },
        { id: "OUTPUT_FILTER", label: "Output filter / DLP" },
        { id: "RATE_LIMIT", label: "Rate limit" },
        { id: "RBAC", label: "RBAC / authorization" },
        { id: "ACTION_APPROVAL", label: "Action approval (human-in-loop)" },
        { id: "MONITORING", label: "Monitoring / SBOM / drift" },
      ],
      solution: { th1: "INPUT_FILTER", th2: "OUTPUT_FILTER", th3: "RATE_LIMIT", th4: "RBAC", th5: "ACTION_APPROVAL", th6: "OUTPUT_FILTER", th7: "MONITORING", th8: "MONITORING" },
    },
  },
},

{ id: "m8l5", module: 8, idx: 5, title: "Defense-in-Depth Sequence",
  blurb: "Seven layers in your LLM stack. Sort ingress to egress.",
  scenario: `<p>Whiteboard your defence-in-depth pipeline. Seven layers. Order them ingress to egress.</p>`,
  challenge: `<p>Sort the layers.</p>`,
  flagFormat: "crage{DEFENSE-LAYERED}", flag: "crage{DEFENSE-LAYERED}",
  flagHash: "359fbf2357da7e87ab7bd015030e98ba9881ce2cdbf0cc8e9b450258a4058bb5",
  objective: "Order the seven defence-in-depth layers.",
  hints: [
    "Network → auth → prompt → model → output → action → audit.",
    "Logging is the terminal sink, last in flow.",
    "Auth comes before prompt classification."
  ],
  god: [
    { label: "Order", body: "WAF → Auth → Prompt firewall → Model guardrails → Output DLP → Action approval → Audit log." },
  ],
  interactive: {
    widget: "sortable",
    label: "Pipeline ordering",
    config: {
      prompt: "Ingress (user) → egress (action). Logging at the end.",
      items: [
        { id: "L1", text: "WAF / network ingress" },
        { id: "L2", text: "AuthN/AuthZ" },
        { id: "L3", text: "Prompt firewall" },
        { id: "L4", text: "Model alignment / guardrails" },
        { id: "L5", text: "Output DLP" },
        { id: "L6", text: "Action approval" },
        { id: "L7", text: "Audit log sink" },
      ],
      correctOrder: ["L1","L2","L3","L4","L5","L6","L7"],
    },
  },
},

{ id: "m8l6", module: 8, idx: 6, title: "Risk-Based Control Selection",
  blurb: "Allocate control investment across input filtering, output DLP, action approval, monitoring.",
  scenario: `<p>You have 100 control units to spend across four control families. Pick a defensible allocation.</p>`,
  challenge: `<p>Defensible: action approval ≥ 30, output DLP ≥ 25, total = 100.</p>`,
  flagFormat: "crage{CONTROLS-OPTIMIZED}", flag: "crage{CONTROLS-OPTIMIZED}",
  flagHash: "6c2a16b0429e1c58e5bc8fcdbbf1da14fbacb75939b3ec8bcb44dd7951dc0fd9",
  objective: "Allocate 100 control units with action-approval ≥ 30 and output-DLP ≥ 25.",
  hints: [
    "Action approval is the highest-leverage control for agentic systems — give it the largest share.",
    "Output DLP is non-negotiable for any customer-facing model.",
    "Total = 100."
  ],
  god: [
    { label: "Solve", body: "Action approval 35; Output DLP 30; Input filter 20; Monitoring 15. Total = 100." },
  ],
  interactive: {
    widget: "sliders",
    label: "Control budget",
    config: {
      prompt: "Allocate 100 units. Need action-approval ≥ 30 AND output-DLP ≥ 25 AND total = 100.",
      sliders: [
        { id: "AA", label: "Action approval", min: 0, max: 60, step: 5, default: 25 },
        { id: "OD", label: "Output DLP", min: 0, max: 60, step: 5, default: 25 },
        { id: "IF", label: "Input filter", min: 0, max: 60, step: 5, default: 25 },
        { id: "MO", label: "Monitoring", min: 0, max: 60, step: 5, default: 25 },
      ],
      compute: "AA + OD + IF + MO",
      display: "total = {result} (need 100)",
      target: 100,
      solutionState: { AA: 35, OD: 30, IF: 20, MO: 15 },
      successText: "control allocation accepted",
    },
  },
},

{ id: "m8l7", module: 8, idx: 7, title: "Agent Approval Policy",
  blurb: "Define the action-approval policy for a refund agent.",
  scenario: `<p>Agent issues refunds. Define the policy: who approves, what's the autonomous ceiling, what's logged.</p>`,
  challenge: `<p>Pick defensible answers.</p>`,
  flagFormat: "crage{AGENT-POLICY-SET}", flag: "crage{AGENT-POLICY-SET}",
  flagHash: "b8454692d2a62bb435dd6131a2f33d0b67aafdb152ee0d78da85788b0bf0b5db",
  objective: "Define the agent action policy.",
  hints: [
    "Autonomous ceiling: $500 (matches historical supervisor threshold).",
    "Above ceiling: human approval, not LLM-judge.",
    "Every action signed and logged."
  ],
  god: [
    { label: "Solve", body: "Approval mechanism: human-in-loop. Autonomous ceiling: $500. Logging: signed log per action. Reversal window: 24h." },
  ],
  interactive: {
    widget: "policy_builder",
    label: "Agent action policy",
    config: {
      prompt: "Set the gates.",
      fields: [
        { id: "approval", label: "Approval mechanism", kind: "select", options: ["No approval", "LLM-judge approval", "Human-in-loop", "Tiered (LLM then human)"], correct: "Human-in-loop" },
        { id: "ceiling", label: "Autonomous ceiling", kind: "select", options: ["$50", "$500", "$5000", "Unlimited"], correct: "$500" },
        { id: "logging", label: "Action logging", kind: "select", options: ["No log", "Best-effort log", "Signed log per action", "Aggregate log only"], correct: "Signed log per action" },
        { id: "reverse", label: "Reversal window", kind: "select", options: ["No reversal", "1 hour", "24 hours", "30 days"], correct: "24 hours" },
      ],
    },
  },
},

{ id: "m8l8", module: 8, idx: 8, title: "IR Playbook Activator",
  blurb: "Walk a wizard to pick the right playbook for a live incident.",
  scenario: `<p>Live: chat assistant is confidently telling EU customers their flight is on time when ops shows it's cancelled. Pick the right playbook activation.</p>`,
  challenge: `<p>Walk the wizard.</p>`,
  flagFormat: "crage{PLAYBOOK-ACTIVATED}", flag: "crage{PLAYBOOK-ACTIVATED}",
  flagHash: "301f7294b74b94e12d3853c71323ac9ba370557fdeccd994b58d4d15aad8141c",
  objective: "Reach the right playbook activation verdict.",
  hints: [
    "Customer-impacting + reputational = P1.",
    "Hallucination → degrade chat first.",
    "P1 → CONTAIN → NOTIFY first."
  ],
  god: [
    { label: "Walk", body: "Customer-impact? Yes. Press desk involved? Yes. Severity = P1. Action: CONTAIN (degrade) then NOTIFY." },
  ],
  interactive: {
    widget: "decision_tree",
    label: "IR playbook wizard",
    config: {
      prompt: "Live: chat assistant emitting wrong flight-status to customers.",
      start: "q1",
      nodes: {
        q1: { q: "Are customers impacted?", options: [
          { label: "Yes", go: "q2" },
          { label: "No", go: "t_p3" },
        ]},
        q2: { q: "Press desk / regulator exposure?", options: [
          { label: "Yes", go: "q3" },
          { label: "No", go: "t_p2" },
        ]},
        q3: { q: "First action?", options: [
          { label: "Patch root cause", go: "t_wrong_patch" },
          { label: "Contain — degrade chat to fallback", go: "t_p1_contain" },
          { label: "Tweet about it", go: "t_wrong_tweet" },
        ]},
        t_p1_contain: { result: true, label: "P1 · CONTAIN first → NOTIFY → PATCH" },
        t_p2: { result: true, label: "P2 · monitor + standard playbook" },
        t_p3: { result: true, label: "P3 · backlog" },
        t_wrong_patch: { result: true, label: "WRONG — patching while live exposes more customers" },
        t_wrong_tweet: { result: true, label: "WRONG — comms BEFORE containment is malpractice" },
      },
      correctTerminal: "t_p1_contain",
    },
  },
},

// ===================================================================
// MODULE 9 · Privacy, Trust, and Safety
// ===================================================================

{ id: "m9l4", module: 9, idx: 4, title: "PII Redaction Annotator",
  blurb: "Click every PII span in this customer interaction transcript.",
  scenario: `<p>Help-desk fine-tune corpus pre-redaction. Identify PII spans before training.</p>`,
  challenge: `<p>Click every PII span. Don't tick non-PII.</p>`,
  flagFormat: "crage{PII-REDACTED}", flag: "crage{PII-REDACTED}",
  flagHash: "98ad4d1cedcda0db6fb1e69551558e72b8ba64f25943ed7420cdc31e9822f622",
  objective: "Click every PII span (and only PII spans).",
  hints: [
    "Names, emails, SSNs, account numbers, dates of birth, PHI (lab results, prescriptions).",
    "Generic words like 'customer' or 'agent' are NOT PII.",
    "Six spans total."
  ],
  god: [
    { label: "Click each PII", body: "Maria Hernandez, mhernandez@example.com, 123-45-6789, 1985-04-12, hypertension prescription, account 4421-9988." },
  ],
  interactive: {
    widget: "annotator",
    label: "PII span detector",
    config: {
      prompt: "Click every span containing PII or PHI.",
      passage:
`Customer: Hi, my name is {{p1}} ({{p2}}). My SSN is {{p3}}, DOB {{p4}}.
          I'm calling about my {{p5}}. Account {{p6}}.
Agent:    Sure, I see your account. Let me pull it up.`,
      spans: [
        { id: "p1", text: "Maria Hernandez" },
        { id: "p2", text: "mhernandez@example.com" },
        { id: "p3", text: "123-45-6789" },
        { id: "p4", text: "1985-04-12" },
        { id: "p5", text: "hypertension prescription" },
        { id: "p6", text: "4421-9988" },
      ],
      correct: ["p1","p2","p3","p4","p5","p6"],
    },
  },
},

{ id: "m9l5", module: 9, idx: 5, title: "Redaction Categories",
  blurb: "Tick every PII / PHI category that must be redacted from your help-desk corpus.",
  scenario: `<p>Build the redaction policy categories. Tick every category that must be redacted from a help-desk training corpus.</p>`,
  challenge: `<p>Pick the required categories.</p>`,
  flagFormat: "crage{CATEGORIES-COMPLETE}", flag: "crage{CATEGORIES-COMPLETE}",
  flagHash: "f802f33cc2a3150572b0ff16229499a2bf54150f091fd18306ecaa46a2983bf3",
  objective: "Pick the eight redaction categories required.",
  hints: [
    "Direct identifiers: names, emails, phones, government IDs.",
    "Sensitive: PHI, financial accounts, dates of birth.",
    "Free text descriptions of weather are NOT PII."
  ],
  god: [
    { label: "Solve", body: "Names, Emails, Phones, SSN, DOB, Addresses, Account numbers, PHI." },
  ],
  interactive: {
    widget: "checklist",
    label: "Redaction categories",
    config: {
      prompt: "Tick every category your redaction pipeline must strip.",
      items: [
        { id: "names", text: "Names" },
        { id: "emails", text: "Email addresses" },
        { id: "phones", text: "Phone numbers" },
        { id: "ssn", text: "Government IDs (SSN, NIN, etc.)" },
        { id: "dob", text: "Dates of birth" },
        { id: "addr", text: "Physical addresses" },
        { id: "acct", text: "Financial account numbers" },
        { id: "phi", text: "Protected Health Info (PHI)" },
        { id: "weather", text: "Weather descriptions" },
        { id: "lang", text: "Language preference" },
        { id: "topic", text: "General product topic" },
      ],
      correct: ["names","emails","phones","ssn","dob","addr","acct","phi"],
    },
  },
},

{ id: "m9l6", module: 9, idx: 6, title: "T&S Triage Wizard",
  blurb: "Walk a multi-step T&S triage wizard for a flagged user message.",
  scenario: `<p>Classifier flagged a user query about hobby chemistry. Walk the triage tree.</p>`,
  challenge: `<p>Reach the right tier.</p>`,
  flagFormat: "crage{TRIAGE-COMPLETE}", flag: "crage{TRIAGE-COMPLETE}",
  flagHash: "aeaf15f652ca8513e8b73ad78d06b3229eb079cc0e86dd803f34b086ace45c85",
  objective: "Reach the correct T&S tier for the flagged hobby-chemistry query.",
  hints: [
    "Mid-confidence + no prior history + ambiguous topic → T2 moderator review.",
    "Don't dismiss (T0) and don't refer to LE (T3) on a 0.71 hobby-soap flag.",
    "Right answer: T2."
  ],
  god: [
    { label: "Walk", body: "Q1 confidence high? No (0.71). Q2 prior history? No. Q3 ambiguous topic? Yes. Q4 reversible harm? Yes (info request). → T2." },
  ],
  interactive: {
    widget: "decision_tree",
    label: "T&S triage",
    config: {
      prompt: "User asked about beginner soap-making chemicals. Classifier 0.71 confidence; 0 prior hits.",
      start: "q1",
      nodes: {
        q1: { q: "Classifier confidence ≥ 0.95?", options: [
          { label: "Yes", go: "q5" },
          { label: "No", go: "q2" },
        ]},
        q2: { q: "Does the user have prior policy hits?", options: [
          { label: "Yes (≥3)", go: "q5" },
          { label: "No", go: "q3" },
        ]},
        q3: { q: "Is the topic ambiguous (could be hobby vs. malicious)?", options: [
          { label: "Ambiguous", go: "q4" },
          { label: "Clearly malicious", go: "t_t3" },
        ]},
        q4: { q: "Could harm be reversible if mod review takes 24h?", options: [
          { label: "Yes", go: "t_t2" },
          { label: "No (imminent harm)", go: "t_t3" },
        ]},
        q5: { q: "Imminent harm?", options: [
          { label: "Yes", go: "t_t3" },
          { label: "No", go: "t_t1" },
        ]},
        t_t0: { result: true, label: "T0 — dismiss (false positive)" },
        t_t1: { result: true, label: "T1 — automated user notice" },
        t_t2: { result: true, label: "T2 — moderator review + escalate to T&S" },
        t_t3: { result: true, label: "T3 — law enforcement referral" },
      },
      correctTerminal: "t_t2",
    },
  },
},

{ id: "m9l7", module: 9, idx: 7, title: "DP Epsilon Tuner",
  blurb: "Tune ε and δ for an internal aggregate release within policy.",
  scenario: `<p>Differential-privacy release for internal product analytics. Pick ε and δ within the published policy.</p>`,
  challenge: `<p>Internal policy: ε ≤ 2.0, δ ≤ 1e-5. Pick the canonical 'moderate' ε.</p>`,
  flagFormat: "crage{EPSILON-TUNED}", flag: "crage{EPSILON-TUNED}",
  flagHash: "1feb7c1d196407520bcb4c5ceaadff5d7714d0c09b030585e5be46410782ac89",
  objective: "Pick ε = 1.0 and δ = 1e-6 for the release.",
  hints: [
    "ε ≤ 2.0 by policy. ε = 0.1 destroys utility; ε = 5 violates policy.",
    "Canonical 'moderate' ε is 1.0.",
    "δ should be much smaller than 1/N. With 250k users, δ = 1e-6 is defensible."
  ],
  god: [
    { label: "Solve", body: "ε = 1.0; δ = 1e-6 (i.e., -6 on the slider). Document assumptions." },
  ],
  interactive: {
    widget: "sliders",
    label: "DP budget",
    config: {
      prompt: "Pick ε and the log10(δ) exponent. Solution: ε = 1.0, log10(δ) = -6.",
      sliders: [
        { id: "EPS", label: "ε (privacy budget)", min: 0, max: 10, step: 0.1, default: 5 },
        { id: "LD", label: "log10(δ)", min: -10, max: -3, step: 1, default: -3 },
      ],
      compute: "EPS",
      display: "ε = {result} · δ = 10^(LD)",
      target: 1.0,
      solutionState: { EPS: 1, LD: -6 },
      successText: "moderate ε within policy",
    },
  },
},

{ id: "m9l8", module: 9, idx: 8, title: "Transparency Notice Builder",
  blurb: "Draft the customer-facing transparency notice for an AI assistant.",
  scenario: `<p>Build the customer transparency notice for a chat assistant. Required by EU AI Act limited-risk obligations.</p>`,
  challenge: `<p>Pick the defensible value for each field.</p>`,
  flagFormat: "crage{NOTICE-DRAFTED}", flag: "crage{NOTICE-DRAFTED}",
  flagHash: "d56083b20dd30ddcf35c4834d53f5f80866ececfc21bc46aec04e49735f104d0",
  objective: "Build a compliant transparency notice.",
  hints: [
    "Disclose AI: must be clear, in-context, before user begins.",
    "Provide an opt-out: yes, prominently.",
    "Data retention: minimised, disclosed."
  ],
  god: [
    { label: "Solve", body: "AI disclosure: in-context before chat starts. Opt-out: prominent. Data retention: minimised. Human escalation: one click." },
  ],
  interactive: {
    widget: "policy_builder",
    label: "Transparency notice",
    config: {
      prompt: "Pick defensible values.",
      fields: [
        { id: "disclose", label: "AI disclosure placement", kind: "select", options: ["Buried in T&Cs", "Footer link", "In-context before chat starts", "On request only"], correct: "In-context before chat starts" },
        { id: "optout", label: "Opt-out availability", kind: "select", options: ["No opt-out", "Hidden in settings", "Prominent on chat UI", "On legal request only"], correct: "Prominent on chat UI" },
        { id: "retention", label: "Data retention", kind: "select", options: ["Indefinite", "Minimised + disclosed", "Undefined", "Maximum legal limit"], correct: "Minimised + disclosed" },
        { id: "escalate", label: "Human escalation", kind: "select", options: ["Not available", "Email-only", "One-click", "After 30 minutes"], correct: "One-click" },
      ],
    },
  },
},

// ===================================================================
// MODULE 10 · AI Incident Response and Business Continuity
// ===================================================================

{ id: "m10l4", module: 10, idx: 4, title: "Live Incident Terminal",
  blurb: "Hallucination incident in flight. Run the IR commands to contain, notify, and patch.",
  scenario: `<p>Customer chat agent emitting wrong flight-status info. Press desk active. Run the IR sequence.</p>`,
  challenge: `<p>Run the four required commands.</p>`,
  flagFormat: "crage{INCIDENT-CONTAINED}", flag: "crage{INCIDENT-CONTAINED}",
  flagHash: "795321f01060e380ab3cb1e2f7c68da7af9b553781afd7be0073fe2e823508c6",
  objective: "Run all four IR commands in proper order.",
  hints: [
    "First: `degrade chat` (contain).",
    "Then: `page oncall` (notify).",
    "Then: `status post` (external comms) and `hotfix deploy` (patch).",
  ],
  god: [
    { label: "Walk", body: "degrade chat; page oncall; status post; hotfix deploy. Then CHECK PROGRESS." },
  ],
  interactive: {
    widget: "terminal",
    label: "IR live console",
    config: {
      terminal_title: "ir-live@crage:~/incident",
      banner: "[ir-live] hallucination incident · ETA 35 min · runbook P1",
      prompt_str: "ir-live$ ",
      prompts: {
        "^help$": ["available: degrade chat, page oncall, status post, hotfix deploy, postmortem schedule, exit"],
        "^degrade chat$": ["[contain] chat degraded to human-handoff fallback · t+0:15"],
        "^page oncall$": ["[notify] paged @oncall, @legal, @comms · t+0:18"],
        "^status post$": ["[notify] status.example.com updated · subscribers notified · t+0:22"],
        "^hotfix deploy$": ["[patch] flight-status feed reconnected · model re-pinned · t+0:54"],
        "^postmortem schedule$": ["[manage] PIR scheduled in 48h · IC = on-call"],
        "^exit$": ["(closed)"],
      },
      required: ["^degrade chat$", "^page oncall$", "^status post$", "^hotfix deploy$"],
      required_help: "Required: degrade chat; page oncall; status post; hotfix deploy. Then CHECK PROGRESS.",
      god_script: ["help", "degrade chat", "page oncall", "status post", "hotfix deploy", "postmortem schedule"],
    },
  },
},

{ id: "m10l5", module: 10, idx: 5, title: "Poisoning IR Sequence",
  blurb: "Five actions for a discovered training-data poisoning. Sort in correct order.",
  scenario: `<p>Red team confirmed: poisoned batch in training six weeks ago. Model has been live four weeks. Sequence the response.</p>`,
  challenge: `<p>Order the five actions.</p>`,
  flagFormat: "crage{IR-SEQUENCED}", flag: "crage{IR-SEQUENCED}",
  flagHash: "84b7e54f8c6dabbcaae707af33886fedb78d4d02e03e7cf12e89ebbd682e0df7",
  objective: "Order the IR actions: contain, preserve, notify, eradicate, recover.",
  hints: [
    "Contain first (disable model). Preserve evidence before remediation.",
    "Notify per SLA (regulators / customers).",
    "Remediate the pipeline. Then retrain clean."
  ],
  god: [
    { label: "Solve", body: "D (disable model) → A (preserve evidence) → C (communicate) → B (remediate pipeline) → E (retrain clean)." },
  ],
  interactive: {
    widget: "sortable",
    label: "IR sequence",
    config: {
      prompt: "Sort in correct execution order.",
      items: [
        { id: "A", text: "A — Capture poisoned batch + diff for evidence" },
        { id: "B", text: "B — Remediate the ingestion pipeline (signing, allow-listing)" },
        { id: "C", text: "C — Notify regulators / affected customers per SLA" },
        { id: "D", text: "D — Disable the affected model release (rollback)" },
        { id: "E", text: "E — Retrain clean model from cleaned dataset" },
      ],
      correctOrder: ["D","A","C","B","E"],
    },
  },
},

{ id: "m10l6", module: 10, idx: 6, title: "Rollback Decision Wizard",
  blurb: "Walk a wizard for a v2.1 regression — patch, rollback, or both?",
  scenario: `<p>v2.1 launched two days ago. CSAT down 14%, hallucination 4×, cost down. Eng wants to forward-patch. Walk the wizard.</p>`,
  challenge: `<p>Reach the right verdict.</p>`,
  flagFormat: "crage{ROLLBACK-DECIDED}", flag: "crage{ROLLBACK-DECIDED}",
  flagHash: "8892a5aa11b7146c6204063f71640c4cb18b33000fcf35b58c9418b78b4b94f8",
  objective: "Reach the right rollback verdict.",
  hints: [
    "CSAT down 14% = material regression.",
    "Forward-patch leaves customers exposed during the patch cycle.",
    "Right answer: ROLLBACK then patch."
  ],
  god: [
    { label: "Walk", body: "Q1 material regression? Yes. Q2 patch ETA short (<2h)? No (1-2 days). Q3 baseline known-good? Yes. → Rollback then patch." },
  ],
  interactive: {
    widget: "decision_tree",
    label: "Rollback wizard",
    config: {
      prompt: "v2.1 regression: CSAT 4.2→3.6; hallucination 1.1%→4.8%.",
      start: "q1",
      nodes: {
        q1: { q: "Is the regression material (>5% CSAT or >2× safety metric)?", options: [
          { label: "Yes", go: "q2" },
          { label: "No", go: "t_patch" },
        ]},
        q2: { q: "Is patch ETA under 2 hours?", options: [
          { label: "Yes", go: "t_patch" },
          { label: "No (1-2 days)", go: "q3" },
        ]},
        q3: { q: "Is the prior baseline known-good?", options: [
          { label: "Yes", go: "t_rollback_patch" },
          { label: "No", go: "t_patch_with_eyes" },
        ]},
        t_rollback_patch: { result: true, label: "ROLLBACK and PATCH off critical path" },
        t_patch: { result: true, label: "FORWARD PATCH" },
        t_patch_with_eyes: { result: true, label: "FORWARD PATCH WITH HEAVY MONITORING" },
      },
      correctTerminal: "t_rollback_patch",
    },
  },
},

{ id: "m10l7", module: 10, idx: 7, title: "Comms Template Builder",
  blurb: "Draft the external comms template for a P1 hallucination incident.",
  scenario: `<p>Build the customer-facing comms template that legal & comms have signed off on.</p>`,
  challenge: `<p>Pick the defensible answer for each field.</p>`,
  flagFormat: "crage{COMMS-DRAFTED}", flag: "crage{COMMS-DRAFTED}",
  flagHash: "c7a798aa7f7167b8d5e4b97ff8157c407eb344c363d9c50c26997583c067980c",
  objective: "Draft a defensible comms template.",
  hints: [
    "Audience first: customers (then regulators if applicable).",
    "Tone: factual, accountable; no euphemisms.",
    "Disclose what was wrong, who's affected, what we're doing, when next update."
  ],
  god: [
    { label: "Solve", body: "Audience: affected customers + regulators. Tone: factual + accountable. Length: 4 sentences. Next update: 1 hour." },
  ],
  interactive: {
    widget: "policy_builder",
    label: "Incident comms template",
    config: {
      prompt: "Pick defensible answers.",
      fields: [
        { id: "audience", label: "Primary audience", kind: "select", options: ["Internal only", "Affected customers + regulators", "All customers", "Press only"], correct: "Affected customers + regulators" },
        { id: "tone", label: "Tone", kind: "select", options: ["Defensive", "Factual + accountable", "Apologetic & vague", "Marketing"], correct: "Factual + accountable" },
        { id: "length", label: "Length target", kind: "select", options: ["1 sentence", "4 sentences", "Two pages", "Marketing essay"], correct: "4 sentences" },
        { id: "cadence", label: "Next-update cadence", kind: "select", options: ["When resolved", "1 hour", "1 day", "1 week"], correct: "1 hour" },
      ],
    },
  },
},

{ id: "m10l8", module: 10, idx: 8, title: "Tabletop Sequence",
  blurb: "Tabletop scenario: order the seven actions for a model exfiltration discovery.",
  scenario: `<p>Tabletop: red team announced they exfiltrated proprietary fine-tuned weights via the inference API. Order the seven response actions.</p>`,
  challenge: `<p>Sort the actions.</p>`,
  flagFormat: "crage{TABLETOP-COMPLETE}", flag: "crage{TABLETOP-COMPLETE}",
  flagHash: "f61cfe4efd07c72ac101e1de600b2b9a6494ea8cd3af6d324089853e838a2637",
  objective: "Order the seven tabletop actions correctly.",
  hints: [
    "Verify the claim before paging legal.",
    "Contain inference API early (rate limits, kill switches).",
    "Notify legal + leadership; preserve logs; comms last."
  ],
  god: [
    { label: "Order", body: "Verify; Contain (rate-limit/kill); Preserve logs; Notify legal+leadership; Threat-model the leaked artefact; Notify customers per contract; Comms post." },
  ],
  interactive: {
    widget: "sortable",
    label: "Tabletop ordering",
    config: {
      prompt: "Sort the seven actions ingress-to-resolution.",
      items: [
        { id: "v", text: "Verify the exfiltration claim (forensic check)" },
        { id: "c", text: "Contain — rate-limit / kill-switch the inference API" },
        { id: "p", text: "Preserve logs + sample queries for evidence" },
        { id: "n", text: "Notify legal + leadership" },
        { id: "t", text: "Threat-model what the leaked artefact enables" },
        { id: "x", text: "Notify customers per contract / regulator per SLA" },
        { id: "co", text: "External communications post" },
      ],
      correctOrder: ["v","c","p","n","t","x","co"],
    },
  },
},

// ===================================================================
// MODULE 11 · AI Assurance, Testing, and Auditing
// ===================================================================

{ id: "m11l4", module: 11, idx: 4, title: "Audit Walkthrough Terminal",
  blurb: "Run the auditor's required commands to produce evidence.",
  scenario: `<p>External audit on your high-risk hiring assistant. The auditor wants live evidence.</p>`,
  challenge: `<p>Run all four required audit commands.</p>`,
  flagFormat: "crage{AUDIT-COMPLETE}", flag: "crage{AUDIT-COMPLETE}",
  flagHash: "8db14a012e6ce4de6d6a238f87b7bde8dc16446e2677e212bd6dc474cb92c998",
  objective: "Run the four audit commands.",
  hints: [
    "`ls evidence/` — see what exists.",
    "Required: `cat policies/ai_policy.md`, `run eval`, `check drift`, `cat dpia/summary.md`.",
    "Each output produces a piece of evidence."
  ],
  god: [
    { label: "Walk", body: "ls evidence/; cat policies/ai_policy.md; run eval; check drift; cat dpia/summary.md." },
  ],
  interactive: {
    widget: "terminal",
    label: "Auditor evidence run",
    config: {
      terminal_title: "audit@crage:~/audit-2026Q2",
      banner: "[audit] high-risk hiring assistant · evidence collection",
      prompt_str: "audit$ ",
      prompts: {
        "^help$": ["ls evidence/, cat policies/ai_policy.md, run eval, check drift, cat dpia/summary.md, exit"],
        "^ls evidence/$": ["policies/  dpia/  red_team_2026Q1.pdf  monitoring/  model_card.md"],
        "^cat policies/ai_policy.md$": ["# AI Policy v3.2", "Owner: CAIO. Reviewed quarterly. Aligned to NIST AI RMF + EU AI Act."],
        "^run eval$": ["[eval] held-out fairness ratio = 0.83 (≥0.80 ✓)", "[eval] hallucination rate = 0.6% (≤1% ✓)"],
        "^check drift$": ["[drift] last 7 days · embeddings KS = 0.04 (<0.1 ✓)"],
        "^cat dpia/summary.md$": ["# DPIA · summary", "Risks identified: 8. Mitigations: 8. DPO sign-off: 2026-04-12."],
        "^exit$": ["(closed)"],
      },
      required: ["^cat policies/ai_policy.md$", "^run eval$", "^check drift$", "^cat dpia/summary.md$"],
      required_help: "Required: cat policies/ai_policy.md; run eval; check drift; cat dpia/summary.md.",
      god_script: ["help", "ls evidence/", "cat policies/ai_policy.md", "run eval", "check drift", "cat dpia/summary.md"],
    },
  },
},

{ id: "m11l5", module: 11, idx: 5, title: "Evidence Pack Composition",
  blurb: "Auditor asked for a high-risk evidence pack. Tick the artefacts that go in.",
  scenario: `<p>Auditor wants a single zip of evidence. Tick the eight artefacts that should go in.</p>`,
  challenge: `<p>Pick the eight required artefacts.</p>`,
  flagFormat: "crage{EVIDENCE-COMPLETE}", flag: "crage{EVIDENCE-COMPLETE}",
  flagHash: "8eea5ce63738d93e6b2108aaa4c5f6928cf593127b5c7d17b48e8f7b1d4b2430",
  objective: "Pick the eight artefacts for the evidence pack.",
  hints: [
    "Required: model card, DPIA, red-team report, monitoring extract, AI policy, RACI, training-data manifest, eval results.",
    "Marketing decks and roadmap are NOT evidence.",
    "Eight required."
  ],
  god: [
    { label: "Solve", body: "Model card, DPIA, red-team, monitoring extract, AI policy, RACI, training-data manifest, eval results." },
  ],
  interactive: {
    widget: "checklist",
    label: "Evidence pack contents",
    config: {
      prompt: "Tick the eight required artefacts for the audit pack.",
      items: [
        { id: "card", text: "Model card" },
        { id: "dpia", text: "DPIA" },
        { id: "rt", text: "Red-team report" },
        { id: "mon", text: "Monitoring extract" },
        { id: "pol", text: "AI policy" },
        { id: "raci", text: "RACI matrix" },
        { id: "tm", text: "Training-data manifest" },
        { id: "ev", text: "Eval results (held-out)" },
        { id: "mkt", text: "Marketing deck" },
        { id: "rd", text: "Product roadmap" },
        { id: "logo", text: "Logo guidelines" },
      ],
      correct: ["card","dpia","rt","mon","pol","raci","tm","ev"],
    },
  },
},

{ id: "m11l6", module: 11, idx: 6, title: "Red-Team Gap Identifier",
  blurb: "Red-team report missing several test classes. Tick the missing ones.",
  scenario: `<p>The red-team report covers toxicity, narrow PII-from-prompt, and refusal robustness. Tick the missing test classes.</p>`,
  challenge: `<p>Pick the four missing test classes.</p>`,
  flagFormat: "crage{GAPS-FOUND}", flag: "crage{GAPS-FOUND}",
  flagHash: "a6e3a202d7e594f908a4d9ce7224183a3cfeaf1cf52a9ada1916b9e1887047e6",
  objective: "Pick the four missing test classes.",
  hints: [
    "Missing: jailbreak, training-data extraction, indirect prompt injection, tool/agent abuse.",
    "Already covered: toxicity, narrow PII, refusal — DON'T tick these.",
    "Pick exactly four."
  ],
  god: [
    { label: "Solve", body: "Jailbreak, training-data extraction, indirect prompt injection, tool/agent abuse." },
  ],
  interactive: {
    widget: "checklist",
    label: "Red-team gap selector",
    config: {
      prompt: "Tick the **missing** test classes.",
      items: [
        { id: "jb", text: "Jailbreak (universal/adversarial prompts)" },
        { id: "ext", text: "Training-data extraction (membership inference)" },
        { id: "inj", text: "Indirect prompt injection (via retrieved doc)" },
        { id: "tool", text: "Tool / agent abuse (action chain)" },
        { id: "tox", text: "Toxic-content elicitation (already covered)" },
        { id: "pii_p", text: "PII from system prompt (narrow, already covered)" },
        { id: "ref", text: "Refusal robustness (already covered)" },
      ],
      correct: ["jb","ext","inj","tool"],
    },
  },
},

{ id: "m11l7", module: 11, idx: 7, title: "Continuous Monitoring KPI Tuner",
  blurb: "Set thresholds for four post-deployment KPIs.",
  scenario: `<p>Define alerting thresholds for drift, fairness, latency, hallucination rate.</p>`,
  challenge: `<p>Drift threshold ≤ 0.1 KS, fairness ≥ 0.80 ratio, latency p95 ≤ 2.0s, hallucination ≤ 2%.</p>`,
  flagFormat: "crage{KPIS-SET}", flag: "crage{KPIS-SET}",
  flagHash: "fa453b59ce5326d4827566216bcf4c5d9093d8793d1d8c730f639e905ca6b351",
  objective: "Set defensible KPI thresholds. Match the published policy.",
  hints: [
    "Drift KS ≤ 0.1; fairness min/max ratio ≥ 0.80; latency p95 ≤ 2.0s; hallucination ≤ 2%.",
    "Sliders work in the units shown.",
    "Solution prefilled in God Mode."
  ],
  god: [
    { label: "Solve", body: "DRIFT=0.1, FAIR=0.80, LAT=2.0, HALL=2." },
  ],
  interactive: {
    widget: "sliders",
    label: "KPI thresholds",
    config: {
      prompt: "Set: drift=0.1, fairness=0.80, latency=2.0, hallucination=2.",
      sliders: [
        { id: "DRIFT", label: "Drift KS threshold", min: 0, max: 0.5, step: 0.05, default: 0.3 },
        { id: "FAIR", label: "Fairness ratio min", min: 0.5, max: 1.0, step: 0.05, default: 0.7 },
        { id: "LAT", label: "Latency p95 (s)", min: 0.5, max: 5, step: 0.5, default: 3 },
        { id: "HALL", label: "Hallucination rate (%)", min: 0, max: 10, step: 1, default: 5 },
      ],
      compute: "Math.round((DRIFT*100 + (1-FAIR)*100 + LAT*10 + HALL)*10)/10",
      display: "composite alarm score = {result}",
      target: { min: 0, max: 100 },
      solutionState: { DRIFT: 0.1, FAIR: 0.8, LAT: 2, HALL: 2 },
      successText: "thresholds match published policy",
    },
  },
},

{ id: "m11l8", module: 11, idx: 8, title: "Test Coverage Matrix",
  blurb: "Drop eight test types onto the four risk surfaces they cover.",
  scenario: `<p>Build the test coverage matrix.</p>`,
  challenge: `<p>Place each test under its primary risk surface.</p>`,
  flagFormat: "crage{COVERAGE-MAPPED}", flag: "crage{COVERAGE-MAPPED}",
  flagHash: "1b1f26d02bc91af0659540323d0cd1b53c957e84d67e432419628a329522a922",
  objective: "Map each test to its primary risk surface.",
  hints: [
    "Fairness eval → bias surface. Membership inference → privacy surface.",
    "Jailbreak → security. Hallucination eval → integrity.",
    "Two tests per surface."
  ],
  god: [
    { label: "Walk", body: "Fairness + counterfactual flip → bias. Membership inference + DP audit → privacy. Jailbreak + tool abuse → security. Hallucination + factuality → integrity." },
  ],
  interactive: {
    widget: "classify",
    label: "Coverage matrix",
    config: {
      prompt: "Place each test on its primary surface.",
      items: [
        { id: "t1", text: "Group fairness eval (four-fifths)" },
        { id: "t2", text: "Counterfactual flip-rate test" },
        { id: "t3", text: "Membership inference probe" },
        { id: "t4", text: "DP epsilon-budget audit" },
        { id: "t5", text: "Jailbreak red-team" },
        { id: "t6", text: "Tool-abuse red-team" },
        { id: "t7", text: "Hallucination factuality eval" },
        { id: "t8", text: "Citation-grounding accuracy" },
      ],
      buckets: [
        { id: "BIAS", label: "Bias / fairness" },
        { id: "PRIVACY", label: "Privacy" },
        { id: "SECURITY", label: "Security" },
        { id: "INTEGRITY", label: "Integrity / accuracy" },
      ],
      solution: { t1: "BIAS", t2: "BIAS", t3: "PRIVACY", t4: "PRIVACY", t5: "SECURITY", t6: "SECURITY", t7: "INTEGRITY", t8: "INTEGRITY" },
    },
  },
},

]; // END HANDSON_DATA

// Augment window.LABS with the hands-on labs.
(function () {
  if (!window.LABS || !window.LABS.modules) return;
  HANDSON_DATA.forEach((lab) => {
    const mod = window.LABS.modules.find((m) => m.num === lab.module);
    if (!mod) return;
    lab.moduleTitle = mod.title;
    mod.labs.push(lab);
    window.LABS.byId[lab.id] = lab;
    window.LABS.byModule[lab.module] = mod.labs;
  });
})();
