// CRAGE Practice Exam · Set 3 · 200 questions covering the eleven CRAGE
// modules with fresh scenarios and broader coverage of generative AI risks,
// LLM-specific threats, drift types, sectoral regulation, AI lifecycle,
// emerging governance roles, and sustainability.
window.QUESTIONS_SET3 = [

// ===== Module 1 · AI Foundations =====

{ id: 1, topic: "ML Paradigm", correct: "C",
  q: "A bank trains a fraud-detection model on a labelled dataset of past transactions, each tagged 'fraud' or 'legitimate'. Which paradigm is this?",
  options: { A: "Reinforcement learning", B: "Unsupervised learning", C: "Supervised learning", D: "Self-supervised learning" } },

{ id: 2, topic: "ML Paradigm", correct: "B",
  q: "An analytics team groups customers into clusters based on spending patterns without any pre-existing labels. Which paradigm is this?",
  options: { A: "Supervised", B: "Unsupervised", C: "Reinforcement", D: "Semi-supervised" } },

{ id: 3, topic: "ML Paradigm", correct: "D",
  q: "A speech-model team trains by predicting masked tokens in unlabelled audio, using the structure of the data itself as supervision signal. Which paradigm is this?",
  options: { A: "Supervised", B: "Reinforcement", C: "Unsupervised", D: "Self-supervised" } },

{ id: 4, topic: "Architectures", correct: "B",
  q: "A team picks an architecture specifically suited to sequential time-series sensor data, where the order of inputs matters and the model maintains state between steps. Which architecture is the most natural fit?",
  options: { A: "CNN", B: "Recurrent Neural Network", C: "Transformer (encoder-only)", D: "GAN" } },

{ id: 5, topic: "Architectures", correct: "A",
  q: "A satellite-imagery team builds an architecture optimised for spatial pattern detection across very large images using filters and pooling. Which architecture fits?",
  options: { A: "Convolutional Neural Network", B: "Transformer", C: "Autoencoder", D: "RBF Network" } },

{ id: 6, topic: "Architectures", correct: "C",
  q: "A team designs an architecture that compresses input into a low-dimensional latent representation and reconstructs the original — useful for anomaly detection and dimensionality reduction. Which is this?",
  options: { A: "CNN", B: "Transformer", C: "Autoencoder", D: "RNN" } },

{ id: 7, topic: "Generative AI", correct: "C",
  q: "A team improves a chatbot's groundedness by retrieving the top-k relevant policy documents from a vector store and concatenating them into the LLM prompt. Which technique is this?",
  options: { A: "Fine-tuning", B: "RLHF", C: "Retrieval-Augmented Generation (RAG)", D: "Distillation" } },

{ id: 8, topic: "Generative AI", correct: "A",
  q: "An LLM team replaces RLHF with a simpler, more stable preference-optimisation method that does not require training a separate reward model. Which technique is this?",
  options: { A: "Direct Preference Optimization (DPO)", B: "RAG", C: "PEFT", D: "LoRA" } },

{ id: 9, topic: "Generative AI", correct: "D",
  q: "A team adapts a 70B base model to a domain by training only a small set of low-rank adapter matrices, freezing the base weights to save compute. Which technique is this?",
  options: { A: "RLHF", B: "DPO", C: "RAG", D: "LoRA (Low-Rank Adaptation)" } },

{ id: 10, topic: "Hardware", correct: "B",
  q: "A startup needs maximum tokens-per-second on a small budget by running a quantised LLM on consumer-grade silicon designed primarily for graphics-style parallel maths. Which hardware fits?",
  options: { A: "FPGA", B: "GPU", C: "Mainframe CPU", D: "Floppy disk" } },

{ id: 11, topic: "Hardware", correct: "C",
  q: "A team runs ML inference on a battery-powered hearing aid, where every milliwatt matters. Which hardware class is best suited?",
  options: { A: "TPU pod", B: "GPU farm", C: "Tiny ML / NPU on-device", D: "On-prem datacentre" } },

{ id: 12, topic: "Deployment", correct: "A",
  q: "A team chooses to host a fine-tuned LLM on cloud GPU instances behind a managed API rather than on user devices. Which deployment pattern is this?",
  options: { A: "Cloud inference", B: "Edge AI", C: "Federated learning", D: "On-device" } },

{ id: 13, topic: "AI Stack", correct: "C",
  q: "A vendor sells an embedding service and a managed vector index that customers use to build RAG over their internal documents. Which AI stack layer is this?",
  options: { A: "Foundation model", B: "Fine-tuning service", C: "Retrieval (RAG) layer", D: "MLOps observability" } },

{ id: 14, topic: "AI Stack", correct: "B",
  q: "A team uses a service that helps assemble multi-step LLM agent workflows with tool calls, planners, and memory. Which AI stack layer is this?",
  options: { A: "Foundation model", B: "Agent / orchestration layer", C: "RAG layer", D: "Hardware" } },

{ id: 15, topic: "Foundation Models", correct: "B",
  q: "A model is described as 'pre-trained on broad data at scale, adaptable to many downstream tasks via fine-tuning or prompting.' What term applies?",
  options: { A: "Edge model", B: "Foundation model", C: "Specialist model", D: "Federated model" } },

{ id: 16, topic: "Documentation", correct: "A",
  q: "Before deploying an in-house LLM, the team is asked to publish a structured artefact covering architecture, intended use, factors, metrics, training data, evaluation data, ethical considerations, limitations, and license. What artefact is this?",
  options: { A: "Model card", B: "Datasheet", C: "Decision log", D: "AIBOM" } },

{ id: 17, topic: "AI Definitions", correct: "B",
  q: "Which definition most accurately describes 'deep learning'?",
  options: { A: "Any rule-based expert system", B: "A subfield of ML using neural networks with multiple hidden layers", C: "A general optimisation method unrelated to neural networks", D: "A type of database query language" } },

{ id: 18, topic: "Tokenization", correct: "D",
  q: "A subword tokeniser breaks the word 'tokenization' into 'token', '##ization' to handle out-of-vocabulary words. What is this technique broadly called?",
  options: { A: "Stemming", B: "Lemmatization", C: "Stop-word removal", D: "Subword tokenisation (e.g. WordPiece, BPE)" } },

// ===== Module 2 · Ethics =====

{ id: 19, topic: "OECD Principles", correct: "D",
  q: "An OECD principle requires that AI systems should function in a robust, secure and safe way throughout their entire lifecycle, with risks continually assessed and managed. Which principle is this?",
  options: { A: "Inclusive growth", B: "Accountability", C: "Transparency and explainability", D: "Robustness, security and safety" } },

{ id: 20, topic: "OECD Principles", correct: "A",
  q: "Which OECD principle requires meaningful information about AI systems so that those affected can understand and challenge outcomes?",
  options: { A: "Transparency and explainability", B: "Inclusive growth", C: "Accountability", D: "Robustness" } },

{ id: 21, topic: "OECD Principles", correct: "C",
  q: "Which OECD principle requires that AI respect the rule of law, human rights, democratic values, diversity, and include appropriate safeguards (e.g. human determination)?",
  options: { A: "Inclusive growth", B: "Robustness, security and safety", C: "Human-centered values and fairness", D: "Accountability" } },

{ id: 22, topic: "NIST Trustworthy AI", correct: "B",
  q: "Which characteristic in NIST's trustworthy-AI list refers to 'harmful bias managed' as part of AI being fair?",
  options: { A: "Accountable", B: "Fair (with harmful bias managed)", C: "Privacy-enhanced", D: "Explainable" } },

{ id: 23, topic: "Fairness Metrics", correct: "C",
  q: "An audit asks: across groups, is the predicted positive rate equal? This corresponds to which fairness metric?",
  options: { A: "Equalized odds", B: "Equality of opportunity", C: "Statistical parity (demographic parity)", D: "Calibration" } },

{ id: 24, topic: "Fairness Metrics", correct: "A",
  q: "An audit asks: among truly positive cases, is the recall equal across groups? This corresponds to which fairness metric?",
  options: { A: "Equality of opportunity", B: "Statistical parity", C: "Calibration", D: "Predictive parity" } },

{ id: 25, topic: "Fairness Metrics", correct: "B",
  q: "An audit asks: at any predicted score, do the actual outcome rates match across groups? This corresponds to which fairness metric?",
  options: { A: "Statistical parity", B: "Calibration", C: "Equalized odds", D: "Counterfactual fairness" } },

{ id: 26, topic: "Bias Types", correct: "D",
  q: "A model trained on Western-origin medical images underperforms on patient populations not represented in the training data. Which bias type best describes this?",
  options: { A: "Algorithmic bias", B: "Confirmation bias", C: "Label bias", D: "Sampling / representation bias" } },

{ id: 27, topic: "Bias Types", correct: "A",
  q: "An audit confirms that historical lending discrimination is reproduced by an AI trained on legitimate historical decisions, even though processing is technically sound. Which bias type is this?",
  options: { A: "Historical / societal bias", B: "Algorithmic bias", C: "Sampling bias", D: "Label bias" } },

{ id: 28, topic: "Bias Types", correct: "B",
  q: "Reviewers cherry-pick model outputs that confirm pre-existing beliefs about the system, ignoring counter-evidence. Which bias type is this?",
  options: { A: "Sampling bias", B: "Confirmation bias", C: "Algorithmic bias", D: "Selection bias" } },

{ id: 29, topic: "Explainability", correct: "C",
  q: "Which XAI technique attributes a single prediction to features by treating prediction as a coalitional-game value function and computing each feature's marginal contribution?",
  options: { A: "LIME", B: "Saliency map", C: "SHAP", D: "Anchors" } },

{ id: 30, topic: "Explainability", correct: "B",
  q: "Which XAI technique creates a 'what-if' alternative — the smallest change to inputs that would have flipped the decision — to explain the original outcome?",
  options: { A: "LIME", B: "Counterfactual explanation", C: "Attention map", D: "Anchors" } },

{ id: 31, topic: "Human Oversight", correct: "C",
  q: "An obligation under the EU AI Act that natural persons can effectively oversee a high-risk AI, including ability to interpret outputs and intervene, is most directly called...",
  options: { A: "Conformity assessment", B: "Risk management system", C: "Human oversight", D: "Post-market monitoring" } },

{ id: 32, topic: "Ethics Operations", correct: "A",
  q: "After a complaint about biased outcomes, leadership prioritises identifying the underlying cause so similar issues are prevented for future users — not just patching the visible symptom. Which complaint-handling element is this?",
  options: { A: "Root-cause analysis", B: "Timely acknowledgement", C: "Transparent response", D: "Feedback loop" } },

{ id: 33, topic: "Ethics Operations", correct: "B",
  q: "An organisation publicly publishes its responsible-AI principles, scope, decision authority, and escalation path in a single artefact. What is this?",
  options: { A: "Model card", B: "AI ethics charter", C: "Risk register", D: "RACI" } },

{ id: 34, topic: "Concerns", correct: "D",
  q: "AI automation reduces certain roles' relevance in an organisation, narrows career paths, and creates skill mismatches over years. From a CRAGE classification standpoint, this is most accurately called what?",
  options: { A: "Privacy concern", B: "Long-term concern", C: "Ethical concern", D: "Societal concern" } },

{ id: 35, topic: "Concerns", correct: "B",
  q: "Defence research is using autonomous systems that adapt faster than human supervisors; leadership cannot articulate how human control would be maintained if something went wrong. From a CRAGE classification standpoint, this is most accurately called what?",
  options: { A: "Societal concern", B: "Long-term / existential concern", C: "Ethical concern", D: "Privacy concern" } },

{ id: 36, topic: "Concerns", correct: "C",
  q: "An AI infers sensitive attributes from seemingly anonymous interactions, even though direct identifiers are removed. From a CRAGE classification standpoint, this is most accurately called what?",
  options: { A: "Long-term concern", B: "Societal concern", C: "Privacy and security concern", D: "Ethical concern" } },

// ===== Module 3 · Strategy =====

{ id: 37, topic: "Sourcing", correct: "B",
  q: "An AI use case requires unique proprietary data, deep domain expertise, and produces a strategic competitive moat. Which sourcing strategy fits?",
  options: { A: "Buy", B: "Build", C: "Partner", D: "Crowd-source" } },

{ id: 38, topic: "Sourcing", correct: "A",
  q: "An AI use case is commodity in nature (general spam filtering), with an extremely tight delivery window and no strategic differentiation. Which sourcing strategy fits?",
  options: { A: "Buy", B: "Build", C: "Open-source roll-your-own", D: "DIY" } },

{ id: 39, topic: "Sourcing", correct: "C",
  q: "A team needs an AI that combines a vendor's mature pretrained model with the organisation's own proprietary data; both parties contribute IP. Which sourcing strategy fits?",
  options: { A: "Buy", B: "Build", C: "Partner / co-develop", D: "Outsource everything" } },

{ id: 40, topic: "Business Case", correct: "C",
  q: "An AI proposal is reviewed for whether it advances the organisation's published strategy and risk appetite. Which business-case element is being applied?",
  options: { A: "ROI Analysis", B: "Risk Assessment", C: "Strategic Alignment", D: "Implementation Roadmap" } },

{ id: 41, topic: "Business Case", correct: "D",
  q: "An AI proposal is reviewed for the discounted future cash flows minus all expected lifecycle costs. Which business-case element is being applied?",
  options: { A: "Strategic Alignment", B: "Risk Assessment", C: "Implementation Roadmap", D: "ROI / NPV Analysis" } },

{ id: 42, topic: "Cost Mgmt", correct: "A",
  q: "Before scaling an AI from pilot to enterprise, the finance team enumerates every recurring spend across compute, storage, fine-tuning, monitoring, retraining, and vendor fees. Which step is this?",
  options: { A: "Cost component identification", B: "Budget allocation", C: "Spend prioritisation", D: "Cost-benefit analysis" } },

{ id: 43, topic: "Capability Gap", correct: "C",
  q: "Six AI initiatives are in flight, no shared platform exists, and drift went undetected for weeks. Which next hire delivers the most leverage?",
  options: { A: "Junior data scientist", B: "Prompt engineer", C: "ML platform lead", D: "Foundation-model researcher" } },

{ id: 44, topic: "Pilot Evaluation", correct: "D",
  q: "Pilot quantitative metrics meet the threshold but operators report friction in everyday use. Before scaling, leadership concludes the system needs more iteration. Which interpretation is this?",
  options: { A: "Scale recommendation", B: "Fail-fast decision", C: "Success indicators", D: "Refinement needs" } },

{ id: 45, topic: "Use Case Prioritisation", correct: "A",
  q: "Initiatives are placed on a 2D grid of business value vs implementation risk, then sequenced by quadrant. Which framework is this?",
  options: { A: "Value-Risk matrix", B: "RACI", C: "FMEA", D: "MoSCoW" } },

{ id: 46, topic: "Strategy", correct: "B",
  q: "An exec-board approves an org-wide document defining priorities, alignment, governance, and long-term direction for AI adoption. Which decision category is this?",
  options: { A: "AI project plan", B: "AI strategy", C: "AI pilot list", D: "AI hiring plan" } },

{ id: 47, topic: "Maturity", correct: "C",
  q: "An AI maturity assessment characterises the org along stages such as exploratory, experimental, formalised, optimised, transformational. What is this kind of model?",
  options: { A: "Compliance framework", B: "Risk register", C: "AI maturity model", D: "Cost model" } },

{ id: 48, topic: "Strategic Alignment", correct: "D",
  q: "An organisation adopts a build-buy-partner decision framework. Which factor is most foundational to deciding among them?",
  options: { A: "Vendor logo recognisability", B: "How many engineers like Rust", C: "Whether the office has free coffee", D: "Strategic value, time-to-market, capability fit, and risk profile" } },

// ===== Module 4 · Governance =====

{ id: 49, topic: "NIST AI RMF", correct: "B",
  q: "Which NIST AI RMF function focuses on enumerating context, intended use, foreseeable misuse, and impact?",
  options: { A: "GOVERN", B: "MAP", C: "MEASURE", D: "MANAGE" } },

{ id: 50, topic: "NIST AI RMF", correct: "C",
  q: "Which NIST AI RMF function focuses on quantitative & qualitative metrics, evals, monitoring, and audit?",
  options: { A: "GOVERN", B: "MAP", C: "MEASURE", D: "MANAGE" } },

{ id: 51, topic: "NIST AI RMF", correct: "A",
  q: "Which NIST AI RMF function cuts across the others and addresses culture, policy, accountability, and integration of AI risk into the organisation?",
  options: { A: "GOVERN", B: "MAP", C: "MEASURE", D: "MANAGE" } },

{ id: 52, topic: "ISO/IEC 42001", correct: "C",
  q: "Which ISO/IEC 42001 clause requires an AI system impact assessment that addresses effects on individuals, groups, and society?",
  options: { A: "Clause 4 — Context", B: "Clause 6.1.2 — AI Risk Assessment", C: "Clause 8.3 — AI System Impact Assessment", D: "Clause 9.2 — Internal Audit" } },

{ id: 53, topic: "ISO/IEC 42001", correct: "B",
  q: "Which ISO/IEC 42001 clause requires the org to define internal/external issues, interested parties, and the scope of the AI Management System?",
  options: { A: "Clause 5", B: "Clause 4 — Context", C: "Clause 6", D: "Clause 8" } },

{ id: 54, topic: "ISO/IEC 42001", correct: "D",
  q: "Which ISO/IEC 42001 clause covers internal audit of the AI Management System?",
  options: { A: "Clause 4", B: "Clause 6", C: "Clause 8", D: "Clause 9.2 — Internal Audit" } },

{ id: 55, topic: "ISO Standards", correct: "C",
  q: "Which ISO standard provides AI-specific risk management guidance and is intended to complement ISO 31000?",
  options: { A: "ISO 27001", B: "ISO 9001", C: "ISO/IEC 23894", D: "ISO 21434" } },

{ id: 56, topic: "Governance Models", correct: "A",
  q: "A regulator expects clear lines of authority spanning all business units, with consistent enterprise enforcement of AI risk decisions. Which governance model fits?",
  options: { A: "Centralized", B: "Federated", C: "Decentralized DAO", D: "Outsourced" } },

{ id: 57, topic: "Governance Models", correct: "B",
  q: "A multinational with diverse local regulatory contexts wants each business line to retain operational discretion while a central body sets common standards. Which governance model fits?",
  options: { A: "Centralized", B: "Federated", C: "Hybrid", D: "DAO" } },

{ id: 58, topic: "Governance Models", correct: "C",
  q: "An organisation combines a central AI governance office that owns policy with local ML teams that own execution within those policies. Which governance model is this?",
  options: { A: "Centralized", B: "Federated", C: "Hybrid", D: "DAO" } },

{ id: 59, topic: "Roles", correct: "A",
  q: "The single accountable executive for the entire AI portfolio — strategy, risk, and external positioning — is most appropriately the...",
  options: { A: "Chief AI Officer (CAIO)", B: "VP Engineering", C: "Chief Marketing Officer", D: "Chief Architect" } },

{ id: 60, topic: "Roles", correct: "C",
  q: "The role most directly responsible for evaluating personal-data processing, advising on DPIAs, and engaging the data-protection authority is...",
  options: { A: "CISO", B: "CFO", C: "Data Protection Officer", D: "Engineering Manager" } },

{ id: 61, topic: "Roles", correct: "B",
  q: "Continuity and internal coherence of model components across releases — version control, integrity, reproducibility — is the responsibility of which role?",
  options: { A: "Business owner", B: "Model custodian", C: "Marketing lead", D: "AIOps junior" } },

{ id: 62, topic: "Governance Bodies", correct: "D",
  q: "Strategic risk-appetite decisions need to be translated into coordinated, organisation-wide guidance and applied consistently before work reaches execution. Which body fits?",
  options: { A: "Working group", B: "Ethics panel", C: "Engineering guild", D: "Steering committee" } },

{ id: 63, topic: "Governance Bodies", correct: "A",
  q: "An internal body evaluates AI initiatives early, arbitrates trade-offs between innovation and ethics, and gives organisation-wide ethical guidance. Which body fits?",
  options: { A: "Company AI Ethics Board", B: "Risk committee", C: "Audit committee", D: "Steering committee" } },

{ id: 64, topic: "RACI", correct: "B",
  q: "Why must exactly one role be marked 'A' in a RACI for a high-risk AI launch?",
  options: { A: "RACI doesn't constrain A's", B: "Accountability is singular; two A's mean nobody is accountable", C: "Two A's let blame be shared", D: "The 'A' is optional" } },

{ id: 65, topic: "AIMS Scope", correct: "A",
  q: "The most defensible AIMS scope statement for a multinational health-tech firm should cover what?",
  options: { A: "All production AI systems", B: "Only customer-facing AI", C: "Only research AI", D: "Only vendor-purchased AI" } },

{ id: 66, topic: "EU AI Office", correct: "B",
  q: "Under the EU AI Act, which body within the European Commission is tasked with overseeing implementation, especially for general-purpose AI models?",
  options: { A: "European Data Protection Board", B: "European AI Office", C: "ENISA", D: "European Court of Justice" } },

// ===== Module 5 · Compliance =====

{ id: 67, topic: "EU AI Act Tiers", correct: "C",
  q: "An organisation deploys an AI chatbot for EU consumers; users must be told they are interacting with AI. Under the EU AI Act, which tier applies?",
  options: { A: "Prohibited", B: "High-risk", C: "Limited-risk (transparency obligations)", D: "Minimal-risk" } },

{ id: 68, topic: "EU AI Act Tiers", correct: "A",
  q: "A municipality wants to deploy real-time biometric identification for general law-enforcement surveillance in public spaces. Under the EU AI Act, which tier most likely applies?",
  options: { A: "Prohibited", B: "High-risk", C: "Limited-risk", D: "Minimal-risk" } },

{ id: 69, topic: "EU AI Act Tiers", correct: "B",
  q: "An EU bank deploys AI to assess creditworthiness of natural persons. Under the EU AI Act, which tier applies?",
  options: { A: "Prohibited", B: "High-risk (Annex III — credit-scoring of natural persons)", C: "Limited-risk", D: "Minimal-risk" } },

{ id: 70, topic: "EU AI Act Tiers", correct: "D",
  q: "An AI-powered video-game NPC adapts its behaviour based on player input. Under the EU AI Act, which tier applies?",
  options: { A: "Prohibited", B: "High-risk", C: "Limited-risk", D: "Minimal-risk" } },

{ id: 71, topic: "EU AI Act Obligations", correct: "C",
  q: "Before placing a high-risk AI system on the EU market, providers must complete which formal procedure?",
  options: { A: "Penetration test", B: "OECD self-assessment", C: "Conformity assessment + EU declaration of conformity", D: "Customer survey" } },

{ id: 72, topic: "EU AI Act Obligations", correct: "A",
  q: "A high-risk AI system in the EU must maintain logs that allow traceability of operation throughout its lifetime. This obligation is broadly called...",
  options: { A: "Record-keeping / event logging", B: "Marketing analytics", C: "Telemetry export", D: "Customer support" } },

{ id: 73, topic: "GDPR", correct: "B",
  q: "Which GDPR article governs solely-automated decisions producing legal or similarly significant effects, granting the data subject a right to human intervention?",
  options: { A: "Article 5", B: "Article 22", C: "Article 17", D: "Article 33" } },

{ id: 74, topic: "GDPR", correct: "A",
  q: "Which GDPR article requires a Data Protection Impact Assessment when processing is likely to result in a high risk to rights and freedoms?",
  options: { A: "Article 35", B: "Article 22", C: "Article 25", D: "Article 6" } },

{ id: 75, topic: "GDPR", correct: "C",
  q: "Which GDPR principle requires that personal data be collected for specified, explicit and legitimate purposes and not further processed in a manner incompatible with those purposes?",
  options: { A: "Lawfulness", B: "Data minimisation", C: "Purpose limitation", D: "Accuracy" } },

{ id: 76, topic: "GDPR", correct: "D",
  q: "Which GDPR right allows a data subject to obtain transmission of their data in a structured, commonly used, machine-readable format and transmit it to another controller?",
  options: { A: "Right to access", B: "Right to erasure", C: "Right to object", D: "Right to data portability" } },

{ id: 77, topic: "GDPR", correct: "A",
  q: "Article 25 of the GDPR codifies which two operational privacy principles?",
  options: { A: "Data protection by design and by default", B: "Lawfulness and accuracy", C: "Storage limitation and accuracy", D: "Consent and legitimate interest" } },

{ id: 78, topic: "US Sectoral", correct: "B",
  q: "A US healthcare provider engages an AI vendor that will receive PHI to provide AI services. Which contract type is required by HIPAA?",
  options: { A: "DPA", B: "Business Associate Agreement (BAA)", C: "MSA only", D: "SOC 2" } },

{ id: 79, topic: "US Sectoral", correct: "C",
  q: "The Federal Reserve's SR 11-7 supervisory guidance on model risk management requires which combination of practices?",
  options: { A: "Annual penetration test only", B: "External marketing reviews", C: "Effective challenge, governance, development controls, validation, and ongoing monitoring", D: "Quarterly board satisfaction surveys" } },

{ id: 80, topic: "US Sectoral", correct: "D",
  q: "An adverse-action notice with specific reasons must be provided to a US consumer when an AI denies a credit application. Which law most directly governs?",
  options: { A: "TCPA", B: "GLBA", C: "HIPAA", D: "FCRA (Fair Credit Reporting Act)" } },

{ id: 81, topic: "US Sectoral", correct: "A",
  q: "AI-generated voices used in outbound calls to US consumers are regulated in the same manner as artificial or prerecorded robocalls by which regulator?",
  options: { A: "FCC", B: "SEC", C: "FAA", D: "FTC alone" } },

{ id: 82, topic: "US Sectoral", correct: "B",
  q: "An AI tool intended for medical purposes (diagnosis, prevention, monitoring) without being part of a hardware medical device falls under which framework?",
  options: { A: "HIPAA only", B: "FDA Software as a Medical Device (SaMD)", C: "OSHA", D: "21 CFR 11" } },

{ id: 83, topic: "International", correct: "C",
  q: "A consumer chatbot operated by a Chinese subsidiary processes data of users in mainland China. Which framework most directly applies?",
  options: { A: "GDPR", B: "CCPA", C: "PIPL", D: "DPDP Act" } },

{ id: 84, topic: "International", correct: "D",
  q: "An AI vendor serving customers across Brazil must comply primarily with which national data protection law?",
  options: { A: "GDPR", B: "PIPL", C: "POPIA", D: "LGPD" } },

{ id: 85, topic: "EU NIS2", correct: "A",
  q: "A critical-infrastructure operator in the EU is subject to incident reporting and risk management obligations under which directive — distinct from the EU AI Act but relevant to AI-supported essential services?",
  options: { A: "NIS2 Directive", B: "GDPR", C: "ePrivacy", D: "PSD2" } },

{ id: 86, topic: "EU DORA", correct: "B",
  q: "An EU financial entity using third-party AI for critical operations must meet ICT-risk-management and incident-reporting obligations under which regulation?",
  options: { A: "MiFID II", B: "DORA (Digital Operational Resilience Act)", C: "EMIR", D: "AIFMD" } },

// ===== Module 6 · Risk =====

{ id: 87, topic: "Risk Methodology", correct: "B",
  q: "A team systematically lists potential failure modes, scoring severity, occurrence and detectability, then synthesises an RPN. Which technique is this?",
  options: { A: "Bow-tie", B: "FMEA", C: "Monte Carlo", D: "STRIDE" } },

{ id: 88, topic: "Risk Methodology", correct: "A",
  q: "An analyst visualises a single failure event in the centre, with prevention controls fanning left and impact-reduction controls fanning right. Which technique is this?",
  options: { A: "Bow-tie analysis", B: "FMEA", C: "STRIDE", D: "PASTA" } },

{ id: 89, topic: "Risk Methodology", correct: "C",
  q: "A finance team runs thousands of simulations across uncertain inputs to estimate the distribution of outcomes. Which technique is this?",
  options: { A: "FMEA", B: "Bow-tie", C: "Monte Carlo simulation", D: "Scenario analysis" } },

{ id: 90, topic: "Risk Methodology", correct: "D",
  q: "Before deploying a navigation AI, the team systematically explores credible-but-non-observed conditions: degraded inputs, disrupted dependencies, intentional manipulation. Which technique is this?",
  options: { A: "Quantitative scoring", B: "Historical analysis", C: "Threat modelling", D: "Scenario analysis" } },

{ id: 91, topic: "RPN", correct: "B",
  q: "A Risk Priority Number is computed by multiplying which three factors?",
  options: { A: "Cost × probability × time", B: "Severity × occurrence × detectability", C: "Likelihood × impact × velocity", D: "Severity × frequency × revenue" } },

{ id: 92, topic: "Risk Treatment", correct: "C",
  q: "An organisation decides not to deploy an AI capability at all because residual risk after controls remains unacceptable. Which option is this?",
  options: { A: "Acceptance", B: "Mitigation", C: "Avoidance", D: "Transfer" } },

{ id: 93, topic: "Risk Treatment", correct: "B",
  q: "An organisation buys cybersecurity insurance to cover financial loss from a potential AI breach. Which option is this?",
  options: { A: "Acceptance", B: "Transfer", C: "Avoidance", D: "Mitigation" } },

{ id: 94, topic: "Risk Treatment", correct: "A",
  q: "After applying controls, the board explicitly decides to live with the remaining residual risk because cost of further mitigation outweighs benefit. Which option is this?",
  options: { A: "Risk acceptance", B: "Risk avoidance", C: "Risk transfer", D: "Risk monitoring" } },

{ id: 95, topic: "MITRE ATLAS", correct: "B",
  q: "An attacker probes a public AI API to fingerprint the underlying model architecture. Which ATLAS tactic is this?",
  options: { A: "Initial access", B: "Reconnaissance", C: "Execution", D: "Exfiltration" } },

{ id: 96, topic: "MITRE ATLAS", correct: "C",
  q: "An attacker injects a malicious instruction inside a retrieved web page that the LLM agent later treats as authoritative. Which ATLAS tactic is this?",
  options: { A: "Reconnaissance", B: "Initial access", C: "Execution (LLM prompt injection)", D: "Persistence" } },

{ id: 97, topic: "MITRE ATLAS", correct: "D",
  q: "Over months an attacker submits crafted queries and reconstructs another customer's profile from the responses. Which ATLAS tactic is this?",
  options: { A: "Reconnaissance", B: "Initial access", C: "Execution", D: "Exfiltration" } },

{ id: 98, topic: "AI Attacks", correct: "A",
  q: "An attacker submits crafted training samples to a crowdsourced labelling pipeline so the resulting model contains a backdoor trigger phrase. Which attack is this?",
  options: { A: "Data poisoning", B: "Model stealing", C: "Membership inference", D: "Adversarial evasion" } },

{ id: 99, topic: "AI Attacks", correct: "B",
  q: "An attacker queries a trained model thousands of times to determine whether a specific record was part of its training set. Which attack is this?",
  options: { A: "Model inversion", B: "Membership inference", C: "Model stealing", D: "Adversarial evasion" } },

{ id: 100, topic: "AI Attacks", correct: "C",
  q: "Forensics shows no breach, no source-code exposure — only extensive structured querying over months. Competitors then ship near-identical decision behaviour. Which attack is this?",
  options: { A: "Membership inference", B: "Adversarial evasion", C: "Model stealing", D: "Supply chain compromise" } },

{ id: 101, topic: "AI Attacks", correct: "D",
  q: "An attacker exploits model outputs to reconstruct sensitive training inputs (e.g., recovering faces from a face-recognition model). Which attack is this?",
  options: { A: "Membership inference", B: "Model stealing", C: "Adversarial evasion", D: "Model inversion" } },

{ id: 102, topic: "AI Attacks", correct: "A",
  q: "Crafted inputs lie just inside a model's decision boundary to bypass detection at inference time, without compromising training. Which attack is this?",
  options: { A: "Adversarial evasion", B: "Data poisoning", C: "Model stealing", D: "Supply chain compromise" } },

{ id: 103, topic: "Threat Modelling", correct: "C",
  q: "A team threat-models an LLM agent with the categories Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. Which framework is this?",
  options: { A: "PASTA", B: "OCTAVE", C: "STRIDE", D: "TRIKE" } },

{ id: 104, topic: "Threat Modelling", correct: "B",
  q: "A privacy-focused threat-modelling framework with seven categories — Linkability, Identifiability, Non-repudiation, Detectability, Disclosure, Unawareness, Non-compliance — is best known as...",
  options: { A: "STRIDE", B: "LINDDUN", C: "PASTA", D: "DREAD" } },

{ id: 105, topic: "Drift Types", correct: "A",
  q: "The input distribution of a deployed model has changed (e.g. customer demographics shift), even though the relationship between inputs and outputs has not. Which drift type is this?",
  options: { A: "Covariate / data drift", B: "Concept drift", C: "Prior probability drift", D: "Label drift" } },

{ id: 106, topic: "Drift Types", correct: "B",
  q: "The relationship between inputs and the target has changed — what 'fraud' looks like is genuinely different now than at training time. Which drift type is this?",
  options: { A: "Covariate drift", B: "Concept drift", C: "Prior probability drift", D: "Sampling drift" } },

// ===== Module 7 · TPRM =====

{ id: 107, topic: "TPRM Lifecycle", correct: "A",
  q: "Before any risk assessment, the first step of TPRM for AI vendors is to establish visibility into which vendors are involved, what they supply, and how they connect. Which step is this?",
  options: { A: "Identification and mapping", B: "Due diligence and risk assessment", C: "Contractual controls", D: "Continuous monitoring" } },

{ id: 108, topic: "TPRM Lifecycle", correct: "B",
  q: "After visibility, the TPRM step is a structured evaluation of vendor technical maturity, governance, ethics, security, and regulatory readiness. Which step is this?",
  options: { A: "Identification", B: "Vendor due diligence", C: "Onboarding", D: "Exit planning" } },

{ id: 109, topic: "TPRM Lifecycle", correct: "C",
  q: "After due diligence, the org formalises uptime guarantees, IP terms, DPAs, and incident SLAs in the agreement. Which step is this?",
  options: { A: "Identification", B: "Due diligence", C: "Contractual & compliance controls", D: "Continuous monitoring" } },

{ id: 110, topic: "TPRM Lifecycle", correct: "D",
  q: "After onboarding, the org maintains visibility into whether the vendor continues to meet its agreed obligations and any new risks. Which step is this?",
  options: { A: "Identification", B: "Due diligence", C: "Contracting", D: "Continuous monitoring" } },

{ id: 111, topic: "Vendor Contracts", correct: "B",
  q: "A vendor agreement specifies that the vendor will only process personal data for the controller's authorised purposes, will assist with data-subject rights, and will not engage sub-processors without consent. Which contract type is this?",
  options: { A: "MSA", B: "Data Processing Agreement (DPA)", C: "BAA", D: "License agreement" } },

{ id: 112, topic: "Vendor Contracts", correct: "C",
  q: "An SLA promises 99.9% uptime, response < 1h, resolution < 8h, with service credits if missed. These are best characterised as...",
  options: { A: "Internal goals", B: "Best-effort targets", C: "Externally-enforceable obligations", D: "Marketing language" } },

{ id: 113, topic: "Vendor Contracts", correct: "D",
  q: "A US healthcare provider engages a vendor that will receive PHI. Which contract type is required by HIPAA in addition to standard contractual terms?",
  options: { A: "DPA", B: "MSA", C: "Standard SaaS agreement", D: "Business Associate Agreement (BAA)" } },

{ id: 114, topic: "Vendor Assurance", correct: "A",
  q: "A vendor offers a SOC 2 Type II report. Why is this preferred over Type I?",
  options: { A: "Type II tests operating effectiveness over a period; Type I is a point-in-time design assessment", B: "Type II is shorter and cheaper", C: "Type I covers more controls", D: "Both are equivalent" } },

{ id: 115, topic: "Third-Party Roles", correct: "B",
  q: "A provider delivers elastic compute, managed storage, security, and a managed ML platform; the customer retains application logic and governance. Which role?",
  options: { A: "AI-as-a-Service provider", B: "Cloud provider", C: "Model provider", D: "Data vendor" } },

{ id: 116, topic: "Third-Party Roles", correct: "C",
  q: "A provider exposes pre-trained foundation-model capabilities only via a managed API; customers never access the weights. Which role?",
  options: { A: "Cloud provider", B: "Model provider", C: "AI-as-a-Service (API) provider", D: "Data vendor" } },

{ id: 117, topic: "Third-Party Roles", correct: "D",
  q: "A vendor licenses pre-trained model weights to enterprise customers, who fine-tune and serve them in their own environment. Which role?",
  options: { A: "Cloud provider", B: "Data vendor", C: "AI-as-a-Service", D: "Model provider" } },

{ id: 118, topic: "Licenses", correct: "A",
  q: "A team wants to bundle weights released under CC-BY-NC-4.0 into a commercial product. What is the most accurate licensing assessment?",
  options: { A: "Blocked — non-commercial license disallows commercial use", B: "Permitted with attribution", C: "Permitted under fair use", D: "Permitted with copyleft" } },

{ id: 119, topic: "Licenses", correct: "B",
  q: "A library licensed under Apache-2.0 is bundled in a commercial AI product. Which obligation primarily applies?",
  options: { A: "Release source under GPL", B: "Preserve NOTICE and attribution; patent and copyright notices retained", C: "Pay a per-seat fee", D: "Restricted to non-commercial" } },

{ id: 120, topic: "Licenses", correct: "C",
  q: "Embedding GPL-3.0 code inside a closed-source commercial AI product typically requires...",
  options: { A: "No additional action", B: "Attribution only", C: "Releasing the combined work's source under GPL-compatible terms", D: "Annual royalty" } },

{ id: 121, topic: "Vendor Failures", correct: "B",
  q: "An audit finds that a vendor used customer data beyond the agreed purpose, shared it with third parties, and processed it in unauthorised ways. Which AI vendor failure is this?",
  options: { A: "Biased decision logic", B: "Unauthorized secondary data use", C: "Poor data quality", D: "Unreliable model output" } },

{ id: 122, topic: "Procurement", correct: "B",
  q: "A vendor evaluation emphasises confidentiality, integrity, and resilience across the lifecycle, with attention to access, data exposure, and incident response. Which criterion is being applied?",
  options: { A: "Vendor reputation", B: "Security and data privacy measures", C: "Pricing flexibility", D: "Data localisation" } },

{ id: 123, topic: "Procurement", correct: "B",
  q: "A vendor was shortlisted on demos and references but model bias was discovered only after contracts were signed. Which procurement stage went wrong?",
  options: { A: "Identify potential vendors", B: "Conduct risk & technical evaluations", C: "Negotiate contracts", D: "Continuous monitoring" } },

// ===== Module 8 · Security =====

{ id: 124, topic: "Defence Strategy", correct: "A",
  q: "A security architect intentionally arranges successive controls so a single compromise does not yield unrestricted downstream access. Which principle is this?",
  options: { A: "Defence in depth", B: "Least privilege", C: "Open by default", D: "Need-to-know" } },

{ id: 125, topic: "Defence Strategy", correct: "B",
  q: "Each service account is granted only the minimum permissions needed for its task; standing administrative access is removed. Which principle is this?",
  options: { A: "Defence in depth", B: "Least privilege", C: "Open by default", D: "Network trust" } },

{ id: 126, topic: "Defence Strategy", correct: "D",
  q: "Network access is never implicitly trusted based on location; every request is authenticated, authorised, and continuously validated. Which model is this?",
  options: { A: "DMZ-based", B: "Implicit trust", C: "Perimeter security", D: "Zero trust" } },

{ id: 127, topic: "Architecture", correct: "C",
  q: "After lateral movement compromised an AI training environment, the architect isolates ingestion, training, and inference into separate network segments with controlled traffic between them. Which principle is this?",
  options: { A: "Microservices", B: "Containerisation", C: "Network segmentation", D: "Tokenisation" } },

{ id: 128, topic: "Architecture", correct: "D",
  q: "An AI workload is packaged with its dependencies into a lightweight image that runs identically across environments, with image signing and SBOM validation. Which approach is this?",
  options: { A: "Bare-metal", B: "Virtualisation only", C: "Serverless", D: "Containerisation" } },

{ id: 129, topic: "Authorisation", correct: "A",
  q: "A junior support agent attempts to invoke an admin-only refund tool and is blocked because their assigned role lacks that permission. Which control is this?",
  options: { A: "RBAC", B: "Rate limiting", C: "Output filter", D: "Encryption at rest" } },

{ id: 130, topic: "Authorisation", correct: "B",
  q: "A policy grants access only when subject attributes (clearance), resource attributes (sensitivity), and context attributes (time, location) all match. Which model is this?",
  options: { A: "RBAC", B: "ABAC", C: "MAC", D: "DAC" } },

{ id: 131, topic: "Controls", correct: "C",
  q: "A multi-tenant LLM platform restricts API calls per key in a sliding window so noisy tenants don't degrade premium users. Which control is this?",
  options: { A: "Segmentation", B: "Load balancing", C: "Rate limiting", D: "Encryption" } },

{ id: 132, topic: "Controls", correct: "D",
  q: "An LLM is wrapped with a layer that detects and blocks jailbreak attempts in user input before the prompt reaches the model. Which control is this?",
  options: { A: "Output DLP", B: "Encryption at rest", C: "RBAC", D: "Input filter / prompt firewall" } },

{ id: 133, topic: "Controls", correct: "B",
  q: "An LLM's reply is inspected by a downstream filter that redacts any PII before reaching the end-user. Which control is this?",
  options: { A: "Input filter", B: "Output filter / DLP", C: "Containerisation", D: "Network segmentation" } },

{ id: 134, topic: "Controls", correct: "A",
  q: "Before an autonomous agent issues any refund over $500, a human must approve via an out-of-band workflow. Which control is this?",
  options: { A: "Human-in-the-loop action approval", B: "Rate limit", C: "TLS", D: "Encryption" } },

{ id: 135, topic: "Supply Chain", correct: "C",
  q: "Each model artefact is signed by its publisher; consumers verify the signature and the SHA-256 hash before deployment. Which supply-chain control is this?",
  options: { A: "Tokenisation", B: "Rate limiting", C: "Model signing / cryptographic verification", D: "DPA" } },

{ id: 136, topic: "Supply Chain", correct: "B",
  q: "An SBOM-style document enumerates every model component, dataset, and dependency used to produce a deployed AI system. This is commonly called an...",
  options: { A: "EULA", B: "AIBOM (AI Bill of Materials)", C: "AUP", D: "DPA" } },

{ id: 137, topic: "Vulnerability Mgmt", correct: "B",
  q: "A team triages newly discovered vulnerabilities and decides which require immediate remediation based on exploitability, impact, and blast radius. Which step is this?",
  options: { A: "Identification", B: "Assessment", C: "Mitigation", D: "Monitoring" } },

{ id: 138, topic: "NIST CSF", correct: "A",
  q: "Which NIST CSF function develops organisational understanding to manage cybersecurity risk to systems, people, assets, data, and capabilities?",
  options: { A: "Identify", B: "Protect", C: "Detect", D: "Respond" } },

{ id: 139, topic: "NIST CSF", correct: "C",
  q: "Which NIST CSF function develops and implements activities to identify the occurrence of a cybersecurity event?",
  options: { A: "Identify", B: "Protect", C: "Detect", D: "Recover" } },

{ id: 140, topic: "NIST CSF", correct: "D",
  q: "Which NIST CSF function maintains plans for resilience and restores capabilities impaired by a cybersecurity incident?",
  options: { A: "Identify", B: "Detect", C: "Respond", D: "Recover" } },

{ id: 141, topic: "Development", correct: "B",
  q: "Architecture review, threat modelling, static analysis, and vulnerability testing are embedded in every project phase from requirements to rollout. Which approach is this?",
  options: { A: "Continuous Deployment", B: "Secure Software Development Lifecycle (SSDLC)", C: "Rapid Application Development", D: "Marketing-led development" } },

{ id: 142, topic: "Frameworks", correct: "C",
  q: "An enterprise wants a framework covering identify / protect / detect / respond / recover for AI models, data, and infrastructure — supporting structured repeatable governance, not a vulnerability list. Which framework fits?",
  options: { A: "MITRE ATLAS", B: "OWASP Top 10 for LLMs", C: "NIST Cybersecurity Framework", D: "ISO 27001 controls only" } },

{ id: 143, topic: "OWASP LLM", correct: "A",
  q: "Which OWASP Top 10 for LLMs entry covers manipulating LLM input through crafted prompts to override system instructions or extract sensitive information?",
  options: { A: "LLM01 — Prompt Injection", B: "LLM02 — Insecure Output Handling", C: "LLM03 — Training Data Poisoning", D: "LLM10 — Model Theft" } },

{ id: 144, topic: "OWASP LLM", correct: "B",
  q: "Which OWASP Top 10 for LLMs entry covers an LLM whose output is consumed downstream without proper sanitisation, leading to XSS, SSRF, or RCE?",
  options: { A: "LLM01 — Prompt Injection", B: "LLM02 — Insecure Output Handling", C: "LLM06 — Sensitive Information Disclosure", D: "LLM05 — Supply Chain Vulnerabilities" } },

// ===== Module 9 · Privacy & Trust =====

{ id: 145, topic: "PII vs PHI", correct: "C",
  q: "Which combination is most accurate?",
  options: { A: "Name + email = PHI", B: "SSN = PHI only", C: "Name + email + SSN = PII; medical diagnosis + prescription = PHI", D: "None of these are PII or PHI" } },

{ id: 146, topic: "De-identification", correct: "A",
  q: "A researcher replaces direct identifiers with a token (e.g. CUST_8a1c). The mapping is held under access control in case re-linking is later needed for legal purposes. Which technique is this?",
  options: { A: "Pseudonymisation", B: "Anonymisation", C: "Encryption", D: "Hashing" } },

{ id: 147, topic: "De-identification", correct: "B",
  q: "A dataset is irreversibly stripped of direct and indirect identifiers so no party can re-identify the underlying subjects, even with auxiliary data. Which technique is this?",
  options: { A: "Pseudonymisation", B: "Anonymisation", C: "Tokenisation", D: "Differential privacy" } },

{ id: 148, topic: "De-identification", correct: "C",
  q: "A dataset is grouped so each record is indistinguishable from at least k-1 other records on quasi-identifiers. Which property is this?",
  options: { A: "l-diversity", B: "t-closeness", C: "k-anonymity", D: "Differential privacy" } },

{ id: 149, topic: "De-identification", correct: "D",
  q: "Beyond k-anonymity, each equivalence class must contain at least l different sensitive-attribute values. Which property is this?",
  options: { A: "k-anonymity", B: "t-closeness", C: "Differential privacy", D: "l-diversity" } },

{ id: 150, topic: "De-identification", correct: "A",
  q: "A property requires that the distribution of sensitive attributes within any equivalence class is close to the overall distribution. Which property is this?",
  options: { A: "t-closeness", B: "k-anonymity", C: "l-diversity", D: "Differential privacy" } },

{ id: 151, topic: "Privacy Tech", correct: "C",
  q: "A team adds calibrated noise to query results so an adversary cannot tell whether any individual was in the dataset, parameterised by ε. Which technique is this?",
  options: { A: "Pseudonymisation", B: "Tokenisation", C: "Differential privacy", D: "k-anonymity" } },

{ id: 152, topic: "Privacy Tech", correct: "B",
  q: "A bank computes analytics directly on encrypted data, with neither model nor environment ever seeing plaintext. Which technique is this?",
  options: { A: "Tokenisation", B: "Homomorphic encryption", C: "TLS", D: "AES-256" } },

{ id: 153, topic: "Privacy Tech", correct: "D",
  q: "Three banks jointly train a fraud-detection model without revealing individual customer data to one another, using a cryptographic protocol. Which technique is this?",
  options: { A: "Differential privacy", B: "Pseudonymisation", C: "Tokenisation", D: "Secure Multi-Party Computation (SMPC)" } },

{ id: 154, topic: "Privacy Tech", correct: "A",
  q: "Hospitals train a shared model without centralising patient data — each hospital trains locally and only model updates are aggregated. Which approach is this?",
  options: { A: "Federated learning", B: "Homomorphic encryption", C: "Differential privacy", D: "Pseudonymisation" } },

{ id: 155, topic: "Privacy Paradigms", correct: "B",
  q: "Privacy controls — minimisation, purpose limitation, access constraints — are embedded into a system's architecture from the earliest design stage. Which principle is this?",
  options: { A: "Privacy by default", B: "Privacy by design", C: "Data localisation", D: "Privacy by oversight" } },

{ id: 156, topic: "Privacy Paradigms", correct: "C",
  q: "When a user signs up, all privacy settings are set to the most privacy-protective option without the user having to opt out. Which principle is this?",
  options: { A: "Privacy by design", B: "Opt-in consent", C: "Privacy by default", D: "Lawful basis" } },

{ id: 157, topic: "Privacy Paradigms", correct: "A",
  q: "An organisation collects only the personal data strictly necessary to deliver the stated service. Which GDPR principle is this?",
  options: { A: "Data minimisation", B: "Purpose limitation", C: "Storage limitation", D: "Accuracy" } },

{ id: 158, topic: "Privacy Paradigms", correct: "D",
  q: "Personal data must not be retained for longer than is necessary for the purposes for which it is processed. Which GDPR principle is this?",
  options: { A: "Data minimisation", B: "Lawfulness", C: "Accuracy", D: "Storage limitation" } },

{ id: 159, topic: "Cryptography", correct: "B",
  q: "Cloud data is destroyed by deleting the encryption keys protecting it, rendering the ciphertext unrecoverable while the storage itself can continue to be reused. Which method is this?",
  options: { A: "Physical destruction", B: "Cryptographic erasure", C: "Secure wiping", D: "Randomisation" } },

{ id: 160, topic: "Cryptography", correct: "A",
  q: "An organisation generates a deterministic surrogate value to replace a sensitive identifier in a downstream system; the mapping is held in a secure vault. Which technique is this?",
  options: { A: "Tokenisation", B: "Hashing", C: "Encryption", D: "Encoding" } },

{ id: 161, topic: "Privacy Governance", correct: "C",
  q: "Before deploying an AI handling sensitive applicant data, the organisation must produce an auditable record evaluating privacy risks, mitigations, and data handling. Which formally recognised activity provides this?",
  options: { A: "Generic risk register", B: "Privacy Risk Identification only", C: "Privacy Impact Assessment (PIA / DPIA)", D: "Algorithmic Impact Assessment" } },

{ id: 162, topic: "Privacy Governance", correct: "D",
  q: "An assessment of a high-risk automated decision-making system that evaluates impact on rights and freedoms beyond pure security risk is called...",
  options: { A: "Threat model", B: "Risk-Control Self-Assessment", C: "SOC 2", D: "Algorithmic Impact Assessment (AIA)" } },

{ id: 163, topic: "Trust & Safety", correct: "C",
  q: "An automated abuse classifier flags a low-confidence, ambiguous query with no prior history. The right action is moderator review and escalation rather than dismissal or LE referral. Which T&S tier is this?",
  options: { A: "T0 — dismiss", B: "T1 — automated user notice", C: "T2 — moderator review + escalate to T&S", D: "T3 — law enforcement referral" } },

// ===== Module 10 · IR / BCP =====

{ id: 164, topic: "IR Phases", correct: "A",
  q: "An organisation builds runbooks, sets up on-call schedules, and runs tabletop exercises before any incident. Which IR phase is this?",
  options: { A: "Preparation", B: "Detection", C: "Containment", D: "Recovery" } },

{ id: 165, topic: "IR Phases", correct: "B",
  q: "Centralised observability flags an anomaly and the response team is paged. Which IR phase is this?",
  options: { A: "Preparation", B: "Detection & analysis", C: "Containment", D: "Eradication" } },

{ id: 166, topic: "IR Phases", correct: "C",
  q: "After detection, the team isolates affected services, blocks malicious accounts, and degrades the impacted feature to limit further harm. Which IR phase is this?",
  options: { A: "Detection", B: "Preparation", C: "Containment", D: "Recovery" } },

{ id: 167, topic: "IR Phases", correct: "D",
  q: "After containment, the team replaces vulnerable runtime libraries, hardens configurations, and removes unsafe execution paths. Which IR phase is this?",
  options: { A: "Detection", B: "Containment", C: "Preparation", D: "Eradication" } },

{ id: 168, topic: "IR Phases", correct: "A",
  q: "Once eradication is complete, the team restores service from clean baselines, validates behaviour, and gradually returns to full production. Which IR phase is this?",
  options: { A: "Recovery", B: "Detection", C: "Eradication", D: "Preparation" } },

{ id: 169, topic: "IR Phases", correct: "B",
  q: "After service is restored, the team conducts a blameless retrospective and updates playbooks. Which IR phase is this?",
  options: { A: "Containment", B: "Lessons learned (post-incident review)", C: "Preparation", D: "Eradication" } },

{ id: 170, topic: "IR Metrics", correct: "C",
  q: "Time elapsed from the first observable abnormal sign to the moment the issue is formally identified is which metric?",
  options: { A: "MTTR", B: "MTTC", C: "Mean Time to Detect (MTTD)", D: "MTBF" } },

{ id: 171, topic: "IR Metrics", correct: "B",
  q: "Time elapsed from identification to the moment the immediate blast radius is bounded is which metric?",
  options: { A: "MTTD", B: "Mean Time to Contain (MTTC)", C: "Mean Time to Recover", D: "Dwell time" } },

{ id: 172, topic: "IR Metrics", correct: "A",
  q: "Time elapsed from start of incident to full restoration of normal service is which metric?",
  options: { A: "Mean Time to Recover (MTTR)", B: "MTTD", C: "MTTC", D: "MTBF" } },

{ id: 173, topic: "Severity", correct: "B",
  q: "An incident with risk of physical harm to a worker, where no one was injured but unsafe AI behaviour was observed, is best classified as...",
  options: { A: "Low severity", B: "High severity", C: "Critical severity", D: "Informational only" } },

{ id: 174, topic: "Severity", correct: "A",
  q: "An AI failure causes customer-impacting harm, regulatory exposure, and press attention all at once. Which severity tier is this?",
  options: { A: "P1 / Critical", B: "P2 / High", C: "P3 / Medium", D: "P4 / Low" } },

{ id: 175, topic: "Escalation", correct: "C",
  q: "Incidents progressively move through levels — from on-call responders to senior leadership — depending on severity, with executives approving risk acceptance and external comms on critical incidents. What is this called?",
  options: { A: "Communication matrix", B: "Notification strategy", C: "Escalation hierarchy", D: "Regulatory engagement" } },

{ id: 176, topic: "BCP", correct: "D",
  q: "A CRO identifies which AI models support core financial functions and estimates operational, financial, and regulatory impact if they were unavailable, prioritising recovery accordingly. Which process is this?",
  options: { A: "Disaster recovery planning", B: "Post-incident review", C: "IR lifecycle", D: "Business Impact Analysis (BIA)" } },

{ id: 177, topic: "BCP Metrics", correct: "A",
  q: "The maximum tolerable time a service can be down before unacceptable consequences occur is which metric?",
  options: { A: "RTO (Recovery Time Objective)", B: "RPO", C: "MTBF", D: "MTTR" } },

{ id: 178, topic: "BCP Metrics", correct: "B",
  q: "The maximum acceptable amount of data loss measured in time (e.g. 15 minutes of transactions) is which metric?",
  options: { A: "RTO", B: "RPO (Recovery Point Objective)", C: "MTTD", D: "MTTC" } },

{ id: 179, topic: "DR Sites", correct: "C",
  q: "A disaster-recovery site fully synchronised with production that can take over within minutes of failover is which type?",
  options: { A: "Cold site", B: "Warm site", C: "Hot site", D: "Mobile site" } },

{ id: 180, topic: "DR Sites", correct: "B",
  q: "A DR site has hardware and partial data replication but requires some manual catch-up before going live (typically hours, not minutes). Which type?",
  options: { A: "Cold site", B: "Warm site", C: "Hot site", D: "Active-active cluster" } },

{ id: 181, topic: "DR Sites", correct: "A",
  q: "A DR site has hardware and basic connectivity but minimal data; bringing it online requires restoring from backups, taking hours to days. Which type?",
  options: { A: "Cold site", B: "Warm site", C: "Hot site", D: "Active-active" } },

{ id: 182, topic: "Crisis Mgmt", correct: "B",
  q: "A cascading AI failure simultaneously affects multiple critical-infrastructure systems with public safety implications. The most appropriate response is to...",
  options: { A: "Shut down all AI systems permanently", B: "Establish multi-domain crisis management with dependency mapping, circuit breakers, coordinated response, and public dashboards", C: "Treat each system failure independently", D: "Pause investigations until lawyers are engaged" } },

{ id: 183, topic: "Recovery", correct: "C",
  q: "After fixing an AI model post-incident, the team runs the updated model on live inputs without letting its outputs affect business decisions, monitoring behaviour before full re-activation. Which strategy is this?",
  options: { A: "Big-bang deployment", B: "Canary rollout", C: "Shadow mode", D: "Blue-green deployment" } },

{ id: 184, topic: "Rollout", correct: "A",
  q: "A new model version is exposed to a small, hidden 5% of users while the remaining 95% continue on the existing version. If the small slice is healthy, exposure expands. Which strategy is this?",
  options: { A: "Canary rollout", B: "Big-bang deployment", C: "Shadow mode", D: "Offline evaluation" } },

{ id: 185, topic: "Rollout", correct: "D",
  q: "Two identical production environments — 'blue' (live) and 'green' (new version) — are kept in parallel; traffic is cut over to 'green' in one step with the ability to flip back. Which strategy is this?",
  options: { A: "Canary rollout", B: "Big-bang deployment", C: "Shadow mode", D: "Blue-green deployment" } },

// ===== Module 11 · Audit / Assurance =====

{ id: 186, topic: "Audit Evidence", correct: "D",
  q: "A regulator asks an auditor to evaluate whether the system's internal decision logic can be examined, whether assumptions and constraints are explicitly defined, and whether changes to those elements are subject to formal oversight. Which evidence category is this?",
  options: { A: "Performance evidence", B: "Compliance evidence", C: "Model evidence", D: "Algorithm evidence" } },

{ id: 187, topic: "Audit Evidence", correct: "A",
  q: "An auditor examines training-data quality, eval-set composition, and statistical performance results. Which evidence category is this?",
  options: { A: "Performance evidence", B: "Algorithm evidence", C: "Governance evidence", D: "Compliance evidence" } },

{ id: 188, topic: "Audit Evidence", correct: "B",
  q: "An auditor reviews the model architecture, training pipeline, and reproducibility artefacts. Which evidence category is this?",
  options: { A: "Algorithm evidence", B: "Model evidence", C: "Performance evidence", D: "Operational evidence" } },

{ id: 189, topic: "Audit Evidence", correct: "C",
  q: "An auditor reviews how the AI maps to regulatory and policy requirements — DPIAs, conformity assessments, sign-offs. Which evidence category is this?",
  options: { A: "Algorithm evidence", B: "Model evidence", C: "Compliance evidence", D: "Performance evidence" } },

{ id: 190, topic: "Audit Types", correct: "A",
  q: "An internal team reviews controls and processes against the organisation's own policies and standards, reporting to executive leadership. Which audit type is this?",
  options: { A: "Internal audit", B: "External audit", C: "Regulatory audit", D: "Certification audit" } },

{ id: 191, topic: "Audit Types", correct: "B",
  q: "An independent third-party firm reviews AI controls and issues an opinion suitable for customer assurance reports (e.g. SOC 2). Which audit type is this?",
  options: { A: "Internal audit", B: "External audit / third-party assurance", C: "Regulatory audit", D: "Penetration test" } },

{ id: 192, topic: "Continuous Monitoring", correct: "C",
  q: "A responsible-AI dashboard for a production LLM must include which four KPIs at minimum, distinct from finance and SRE dashboards?",
  options: { A: "Token cost, latency, uptime, user rating", B: "Cost, churn, NPS, MAU", C: "Drift, fairness, latency, hallucination rate", D: "CTR, conversion, retention, ARPU" } },

{ id: 193, topic: "Red Teaming", correct: "A",
  q: "An offensive-security team simulates adversaries — jailbreaks, prompt injection, data exfiltration, tool abuse — to identify weaknesses before real attackers. Which team is this?",
  options: { A: "Red team", B: "Blue team", C: "Purple team", D: "White team" } },

{ id: 194, topic: "Red Teaming", correct: "C",
  q: "Red and blue teams work together in real time — red attacks, blue defends, both share observations to improve detections. Which arrangement is this?",
  options: { A: "Pen test", B: "Bug bounty", C: "Purple team", D: "Tabletop" } },

{ id: 195, topic: "Red Team Coverage", correct: "B",
  q: "A red-team report covers toxicity, narrow PII-from-prompt, and refusal robustness. The most material missing test classes are most likely...",
  options: { A: "Branding and UX", B: "Jailbreak, training-data extraction, tool / agent abuse, indirect prompt injection", C: "Load testing", D: "Spam coverage" } },

{ id: 196, topic: "Documentation", correct: "B",
  q: "A formal artefact documents the characteristics and stewardship of data assets themselves — origin, curation, constraints, limitations — independent of any model. What is this?",
  options: { A: "Model card", B: "Datasheet for datasets", C: "Decision log", D: "Transparency report" } },

{ id: 197, topic: "Documentation", correct: "A",
  q: "A formal artefact published alongside a deployed system describes the model's architecture, intended use, factors, evaluation, ethical considerations, limitations, and license. What is this?",
  options: { A: "Model card", B: "Datasheet", C: "Decision log", D: "AIBOM" } },

{ id: 198, topic: "Documentation", correct: "C",
  q: "An auditor asks for a record showing every individual model decision, with timestamp, inputs, outputs, model version, and human overrides for high-impact cases. What artefact is this?",
  options: { A: "Model card", B: "Datasheet", C: "Decision log", D: "AIBOM" } },

{ id: 199, topic: "Right to Explanation", correct: "B",
  q: "A regulator requires that adverse automated decisions are defensible to applicants and regulators, independent of the specific technique used to derive explanations. Which governance concept is this?",
  options: { A: "Feature attribution", B: "Right to explanation", C: "User consent", D: "Data localisation" } },

{ id: 200, topic: "Versioning", correct: "C",
  q: "An auditor traces which dataset trained a specific model, when it was last updated, who approved the change, and the supporting documentation, demonstrating accountability for historic decisions. Which asset-management requirement is this?",
  options: { A: "Access control", B: "Lifecycle reviews", C: "Versioning and traceability", D: "Decommissioning" } },

];
