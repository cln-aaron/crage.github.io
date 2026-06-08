// CRAGE Masterclass · Pre-Class Knowledge Check
// 60 multiple-choice questions distributed across all 11 modules.
// Per-question `module` tag drives the module-by-module result breakdown.
//
// Distribution:
//   M1 Foundations               5
//   M2 Ethics                    5
//   M3 Strategy                  5
//   M4 Governance & Frameworks   6
//   M5 Compliance                6
//   M6 Risk & Threat             6
//   M7 Third-Party / Supply      5
//   M8 Security Architecture     6
//   M9 Privacy, Trust, Safety    6
//   M10 IR & BCP                 5
//   M11 Assurance, Test, Audit   5
//
// These questions are pitched at PRE-CLASS baseline — they probe what a
// student should plausibly already know before the masterclass starts, so
// the trainer can spot weak domains.

window.PRECLASS_QUESTIONS = [

// ===== Module 1 · AI Foundations and Technology Ecosystem =====
{ id: 1, module: 1, correct: "C",
  q: "Which best describes the relationship between AI, ML, and Deep Learning?",
  options: { A: "Three independent disciplines with no overlap", B: "Deep Learning ⊇ ML ⊇ AI", C: "AI ⊇ ML ⊇ Deep Learning", D: "ML and Deep Learning are the same thing" } },
{ id: 2, module: 1, correct: "B",
  q: "Which architecture is widely associated with modern Large Language Models?",
  options: { A: "Convolutional Neural Networks", B: "Transformers", C: "Decision Trees", D: "Naive Bayes" } },
{ id: 3, module: 1, correct: "A",
  q: "A system learns from labelled examples (input → correct output) to predict labels on new data. Which ML paradigm is this?",
  options: { A: "Supervised learning", B: "Unsupervised learning", C: "Reinforcement learning", D: "Self-supervised learning" } },
{ id: 4, module: 1, correct: "D",
  q: "Retrieval-Augmented Generation (RAG) primarily aims to...",
  options: { A: "Replace fine-tuning entirely", B: "Train an LLM from scratch", C: "Quantise an LLM for edge devices", D: "Ground an LLM's outputs in retrieved, up-to-date documents" } },
{ id: 5, module: 1, correct: "B",
  q: "Why are GPUs widely used for AI training rather than general-purpose CPUs?",
  options: { A: "GPUs are cheaper than CPUs at any scale", B: "GPUs are highly parallel and well-suited to large matrix maths", C: "GPUs have larger main memory than CPUs", D: "CPUs cannot run neural networks" } },

// ===== Module 2 · AI Concerns, Ethical Principles, Responsible AI =====
{ id: 6, module: 2, correct: "C",
  q: "Which of the following is one of the OECD AI Principles?",
  options: { A: "Maximise model perplexity", B: "Maximise shareholder value", C: "Accountability", D: "Cloud-first deployment" } },
{ id: 7, module: 2, correct: "A",
  q: "An AI system trained on historical data reproduces past discriminatory outcomes even though the modelling pipeline is technically sound. Which bias type best describes this?",
  options: { A: "Historical / societal bias", B: "Confirmation bias", C: "Sampling bias", D: "Algorithmic bias" } },
{ id: 8, module: 2, correct: "B",
  q: "An organisation wants automated decisions to be defensible and someone clearly answerable for outcomes. Which responsible-AI principle is most directly engaged?",
  options: { A: "Privacy", B: "Accountability", C: "Sustainability", D: "Inclusion" } },
{ id: 9, module: 2, correct: "C",
  q: "Explainability in AI primarily means...",
  options: { A: "Achieving the highest possible accuracy", B: "Encrypting model weights end-to-end", C: "Providing understandable reasons for model outputs", D: "Removing personal data from training sets" } },
{ id: 10, module: 2, correct: "D",
  q: "AI automation gradually narrows certain roles' relevance, even though nobody is fired. From a CRAGE perspective this is best classified as which concern type?",
  options: { A: "Privacy concern", B: "Long-term concern", C: "Ethical concern", D: "Societal concern" } },

// ===== Module 3 · AI Strategy and Planning =====
{ id: 11, module: 3, correct: "A",
  q: "An org has six AI initiatives in flight, no shared platform, and recurring drift incidents. Which next hire has the highest leverage?",
  options: { A: "ML platform lead", B: "Junior data scientist", C: "Prompt engineer", D: "Foundation-model researcher" } },
{ id: 12, module: 3, correct: "B",
  q: "Which is the most defensible 'first step' when considering whether to fund an AI initiative?",
  options: { A: "Pick the largest possible model", B: "Define the business problem, success metrics, and risk profile", C: "Buy GPUs", D: "Hire 10 ML engineers" } },
{ id: 13, module: 3, correct: "C",
  q: "An AI use case demands a vendor's mature base model fine-tuned on the company's proprietary data, with shared IP terms. Which sourcing strategy fits best?",
  options: { A: "Buy", B: "Build", C: "Partner / co-develop", D: "Open-source DIY" } },
{ id: 14, module: 3, correct: "D",
  q: "A pilot meets technical thresholds but operators report workflow friction. Before scaling, leadership should infer...",
  options: { A: "Scale immediately", B: "Abandon the pilot", C: "Ignore the friction", D: "The system needs refinement before scaling" } },
{ id: 15, module: 3, correct: "A",
  q: "Which is *not* normally part of an AI business-case review?",
  options: { A: "GPU brand recognition", B: "Strategic alignment", C: "Risk assessment", D: "ROI / TCO" } },

// ===== Module 4 · AI Governance and Frameworks =====
{ id: 16, module: 4, correct: "B",
  q: "Which framework introduces the four functions GOVERN, MAP, MEASURE, MANAGE for AI risk?",
  options: { A: "ISO 27001", B: "NIST AI Risk Management Framework", C: "PCI-DSS", D: "ITIL" } },
{ id: 17, module: 4, correct: "C",
  q: "Which standard formalises an AI Management System (AIMS) as a certifiable management system, similar in spirit to ISO 27001 for security?",
  options: { A: "ISO 9001", B: "ISO/IEC 27701", C: "ISO/IEC 42001", D: "ISO 31000" } },
{ id: 18, module: 4, correct: "A",
  q: "Within a RACI matrix for a high-risk AI launch, how many roles should be marked 'A' (Accountable)?",
  options: { A: "Exactly one", B: "At least three", C: "All of them", D: "None — it is optional" } },
{ id: 19, module: 4, correct: "D",
  q: "An organisation where executive-level risk appetite must be translated into coordinated org-wide guidance before reaching execution would set up which kind of body?",
  options: { A: "Engineering guild", B: "Working group", C: "Ethics panel", D: "Steering committee" } },
{ id: 20, module: 4, correct: "B",
  q: "A multinational with diverse local regulators wants business lines to keep discretion while a central body sets common standards. Which governance model fits?",
  options: { A: "Centralized", B: "Federated", C: "DAO-driven", D: "Outsourced" } },
{ id: 21, module: 4, correct: "C",
  q: "The single accountable executive for the AI portfolio — strategy, risk, public positioning — is most commonly titled...",
  options: { A: "Chief Marketing Officer", B: "VP Engineering", C: "Chief AI Officer (CAIO)", D: "General Counsel" } },

// ===== Module 5 · AI Regulatory Compliance =====
{ id: 22, module: 5, correct: "B",
  q: "The EU AI Act classifies systems into how many primary risk tiers?",
  options: { A: "Two — high and low", B: "Four — prohibited, high, limited, minimal", C: "Six — corresponding to OWASP categories", D: "It does not classify by risk" } },
{ id: 23, module: 5, correct: "C",
  q: "Which GDPR article governs solely-automated decisions producing legal or similarly significant effects on individuals?",
  options: { A: "Article 5", B: "Article 17", C: "Article 22", D: "Article 35" } },
{ id: 24, module: 5, correct: "D",
  q: "Which GDPR article requires a Data Protection Impact Assessment (DPIA) when processing is likely to result in a high risk to rights and freedoms?",
  options: { A: "Article 5", B: "Article 22", C: "Article 25", D: "Article 35" } },
{ id: 25, module: 5, correct: "A",
  q: "A US lender's AI denies a consumer's credit application. Which federal law most directly drives the requirement to give the consumer specific adverse-action reasons?",
  options: { A: "FCRA (Fair Credit Reporting Act)", B: "TCPA", C: "HIPAA", D: "GLBA" } },
{ id: 26, module: 5, correct: "C",
  q: "An EU bank deploys AI to assess creditworthiness of natural persons. Under the EU AI Act, this is most likely...",
  options: { A: "Prohibited", B: "Limited-risk", C: "High-risk (Annex III)", D: "Minimal-risk" } },
{ id: 27, module: 5, correct: "B",
  q: "AI-generated voices in outbound calls to US consumers are regulated in the same manner as artificial / prerecorded robocalls by which regulator?",
  options: { A: "SEC", B: "FCC", C: "FDA", D: "FAA" } },

// ===== Module 6 · AI Risk and Threat Management =====
{ id: 28, module: 6, correct: "D",
  q: "A Risk Priority Number (RPN) under FMEA is computed as the product of which three factors?",
  options: { A: "Cost × probability × time", B: "Likelihood × impact × velocity", C: "Severity × frequency × revenue", D: "Severity × occurrence × detectability" } },
{ id: 29, module: 6, correct: "A",
  q: "A risk diagram with a single failure event in the centre, prevention controls fanning left, and impact-reduction controls fanning right is called...",
  options: { A: "Bow-tie analysis", B: "FMEA", C: "Monte Carlo simulation", D: "STRIDE" } },
{ id: 30, module: 6, correct: "C",
  q: "An attacker repeatedly queries a model's API and replicates its behaviour without ever breaching the network. This is best described as...",
  options: { A: "Adversarial evasion", B: "Membership inference", C: "Model stealing", D: "Data poisoning" } },
{ id: 31, module: 6, correct: "B",
  q: "An attacker uploads crafted training samples into a crowdsourced labelling pipeline so the resulting model behaves badly on a hidden trigger. This is...",
  options: { A: "Model inversion", B: "Data poisoning", C: "Model stealing", D: "Membership inference" } },
{ id: 32, module: 6, correct: "D",
  q: "An organisation decides not to deploy a borderline AI use case at all because residual risk after controls remains unacceptable. Which risk-treatment option is this?",
  options: { A: "Acceptance", B: "Transfer", C: "Mitigation", D: "Avoidance" } },
{ id: 33, module: 6, correct: "A",
  q: "MITRE ATLAS is best described as...",
  options: { A: "A knowledge base of adversarial tactics and techniques against AI/ML systems", B: "An ISO management-system standard", C: "A US sectoral regulation for financial AI", D: "A privacy enhancing technology" } },

// ===== Module 7 · Third-Party AI Risk Management and Supply Chain Security =====
{ id: 34, module: 7, correct: "A",
  q: "The first step of a TPRM programme for AI vendors should be...",
  options: { A: "Identifying and mapping vendors and their AI components", B: "Signing the contract", C: "Running a SOC 2 audit yourself", D: "Onboarding into production" } },
{ id: 35, module: 7, correct: "B",
  q: "An AI vendor that will process personal data of EU residents typically requires which contract type in addition to standard commercial terms?",
  options: { A: "Master Service Agreement only", B: "Data Processing Agreement (DPA)", C: "Non-Disclosure Agreement only", D: "Software license agreement only" } },
{ id: 36, module: 7, correct: "C",
  q: "Why is SOC 2 Type II generally preferred over Type I when evaluating an AI vendor?",
  options: { A: "Type II is cheaper for the vendor", B: "Type I covers more controls", C: "Type II tests operating effectiveness over a period, not just design at a point in time", D: "They are equivalent" } },
{ id: 37, module: 7, correct: "D",
  q: "An open-source model is released under a 'non-commercial' (CC-BY-NC) license. Bundling it in a commercial product is...",
  options: { A: "Permitted with attribution", B: "Permitted under fair use", C: "Permitted with copyleft", D: "Blocked — non-commercial license disallows commercial use" } },
{ id: 38, module: 7, correct: "B",
  q: "An auditor finds a vendor used customer data beyond the agreed purpose and shared it with third parties. This is which type of vendor failure?",
  options: { A: "Biased decision logic", B: "Unauthorised secondary data use", C: "Poor data quality", D: "Unreliable output" } },

// ===== Module 8 · AI Security Architecture and Controls =====
{ id: 39, module: 8, correct: "A",
  q: "Successive layered controls so a single compromise doesn't grant unrestricted downstream access. Which principle is this?",
  options: { A: "Defence in depth", B: "Open by default", C: "Implicit trust", D: "Need to know" } },
{ id: 40, module: 8, correct: "D",
  q: "Network access is never implicitly trusted based on location; every request is authenticated, authorised, and continuously validated. Which model is this?",
  options: { A: "Perimeter-only security", B: "DMZ", C: "Implicit trust", D: "Zero Trust" } },
{ id: 41, module: 8, correct: "B",
  q: "Each service account is granted only the minimum permissions needed for its task; standing administrative access is removed. Which principle is this?",
  options: { A: "Defence in depth", B: "Least privilege", C: "Open by default", D: "Need-to-know" } },
{ id: 42, module: 8, correct: "C",
  q: "An LLM is wrapped with a layer that detects and blocks jailbreak attempts in user input before reaching the model. This is best described as...",
  options: { A: "Output DLP", B: "RBAC", C: "Input filter / prompt firewall", D: "Encryption at rest" } },
{ id: 43, module: 8, correct: "D",
  q: "Before an autonomous agent issues any refund over $500, a human must approve via an out-of-band workflow. Which control is this?",
  options: { A: "TLS", B: "Encryption at rest", C: "Rate limiting", D: "Human-in-the-loop action approval" } },
{ id: 44, module: 8, correct: "B",
  q: "Which OWASP Top 10 for LLMs entry covers crafted prompts that override system instructions or extract sensitive information?",
  options: { A: "LLM02 — Insecure Output Handling", B: "LLM01 — Prompt Injection", C: "LLM03 — Training Data Poisoning", D: "LLM10 — Model Theft" } },

// ===== Module 9 · Building Privacy, Trust, and Safety in AI Systems =====
{ id: 45, module: 9, correct: "C",
  q: "Which technique replaces direct identifiers with surrogate tokens but keeps a mapping under access control, so re-identification is possible if legally required?",
  options: { A: "Anonymisation", B: "Encryption", C: "Pseudonymisation", D: "Hashing" } },
{ id: 46, module: 9, correct: "B",
  q: "Adding calibrated statistical noise to query results so an adversary cannot tell whether any single individual was in the dataset (parameterised by ε) is called...",
  options: { A: "Tokenisation", B: "Differential privacy", C: "Homomorphic encryption", D: "k-anonymity" } },
{ id: 47, module: 9, correct: "D",
  q: "Which technique allows computation directly on encrypted data without decryption at any stage?",
  options: { A: "Tokenisation", B: "TLS", C: "AES-256", D: "Homomorphic encryption" } },
{ id: 48, module: 9, correct: "A",
  q: "Hospitals train a shared model without centralising patient data — each site trains locally and only model updates are aggregated. Which approach is this?",
  options: { A: "Federated learning", B: "Differential privacy", C: "Pseudonymisation", D: "Homomorphic encryption" } },
{ id: 49, module: 9, correct: "C",
  q: "Privacy controls — minimisation, purpose limitation, access constraints — are embedded into a system's architecture from the earliest design stage, not retrofitted. Which principle is this?",
  options: { A: "Privacy by Default", B: "Data localisation", C: "Privacy by Design", D: "Privacy by oversight" } },
{ id: 50, module: 9, correct: "B",
  q: "Cloud data destroyed by deleting the encryption keys that protect it (storage itself can be reused) is called...",
  options: { A: "Physical destruction", B: "Cryptographic erasure", C: "Secure wiping", D: "Randomisation" } },

// ===== Module 10 · AI Incident Response and Business Continuity =====
{ id: 51, module: 10, correct: "A",
  q: "After an AI incident is detected, what is the next IR phase?",
  options: { A: "Containment", B: "Lessons learned", C: "Preparation", D: "Recovery" } },
{ id: 52, module: 10, correct: "C",
  q: "Time from the first observable abnormal sign to the moment the issue is formally identified is which IR metric?",
  options: { A: "MTTR", B: "MTTC", C: "MTTD (Mean Time to Detect)", D: "MTBF" } },
{ id: 53, module: 10, correct: "D",
  q: "A CRO identifies which AI models support core financial functions and estimates the impact if they were unavailable, in order to set recovery priorities and acceptable downtime. Which process is this?",
  options: { A: "Disaster recovery planning", B: "Post-incident review", C: "Incident response lifecycle", D: "Business Impact Analysis (BIA)" } },
{ id: 54, module: 10, correct: "B",
  q: "RTO (Recovery Time Objective) and RPO (Recovery Point Objective) — what do they describe?",
  options: { A: "RTO = data-loss tolerance; RPO = downtime tolerance", B: "RTO = downtime tolerance; RPO = data-loss tolerance", C: "Both describe MTTR", D: "Both describe MTBF" } },
{ id: 55, module: 10, correct: "A",
  q: "A new model version is exposed to a small hidden 5% of users while the rest stay on the current version. If the small slice is healthy, exposure expands. Which rollout strategy is this?",
  options: { A: "Canary rollout", B: "Big-bang deployment", C: "Shadow mode", D: "Offline evaluation only" } },

// ===== Module 11 · AI Assurance, Testing, and Auditing =====
{ id: 56, module: 11, correct: "B",
  q: "An independent third-party firm reviews AI controls and issues an opinion suitable for customer assurance reports (e.g. SOC 2). Which audit type is this?",
  options: { A: "Internal audit", B: "External / third-party assurance", C: "Regulatory audit", D: "Penetration test" } },
{ id: 57, module: 11, correct: "C",
  q: "Which set of KPIs would you expect on a responsible-AI monitoring dashboard for a production LLM (vs an SRE or finance dashboard)?",
  options: { A: "Token cost, latency, uptime, user rating", B: "Cost, churn, NPS, MAU", C: "Drift, fairness, latency, hallucination rate", D: "CTR, conversion, retention, ARPU" } },
{ id: 58, module: 11, correct: "D",
  q: "An artefact that documents the origin, curation process, constraints, and known limitations of a dataset itself — independent of any model — is best called a...",
  options: { A: "Model card", B: "Decision log", C: "Transparency report", D: "Datasheet for datasets" } },
{ id: 59, module: 11, correct: "A",
  q: "An artefact published alongside a deployed model describing architecture, intended use, factors, evaluation, ethical considerations, limitations, and license is called a...",
  options: { A: "Model card", B: "Datasheet", C: "Decision log", D: "AI Bill of Materials (AIBOM)" } },
{ id: 60, module: 11, correct: "B",
  q: "A regulator requires adverse automated decisions be defensible to applicants and regulators, regardless of which specific explainability technique is used. Which governance concept is this?",
  options: { A: "Feature attribution", B: "Right to explanation", C: "User consent rights", D: "Data localisation" } },

];

window.PRECLASS_META = {
  durationMinutes: 60,
  passMarkPct: 60,
  weakDomainPct: 60,
  modules: {
    1:  "AI Foundations and Technology Ecosystem",
    2:  "AI Concerns, Ethical Principles, Responsible AI",
    3:  "AI Strategy and Planning",
    4:  "AI Governance and Frameworks",
    5:  "AI Regulatory Compliance",
    6:  "AI Risk and Threat Management",
    7:  "Third-Party AI Risk Management & Supply Chain",
    8:  "AI Security Architecture and Controls",
    9:  "Privacy, Trust, and Safety in AI Systems",
    10: "AI Incident Response and Business Continuity",
    11: "AI Assurance, Testing, and Auditing",
  },
};
