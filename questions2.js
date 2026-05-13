// CRAGE Practice Exam · Set 2 · 200 questions covering the eleven CRAGE
// modules. Scenarios are fresh; underlying concepts overlap with Set 1 plus
// broader coverage (NIST AI RMF functions, ISO/IEC 42001 clauses, EU AI Act
// tiers, MITRE ATLAS tactics, fairness metrics, privacy techniques, IR
// phases, audit evidence types).
window.QUESTIONS_SET2 = [

// ===== Module 1 · AI Foundations and Technology Ecosystem =====

{ id: 1, topic: "ML Paradigm", correct: "D",
  q: "A drone-delivery startup trains a control policy that learns by interacting with a simulated city — receiving positive reward for successful deliveries and penalties for collisions, late arrivals, or excessive battery use. No labelled trajectories are provided up front. Which ML paradigm is being used?",
  options: { A: "Supervised learning", B: "Unsupervised learning", C: "Self-supervised learning", D: "Reinforcement learning" } },

{ id: 2, topic: "Architectures", correct: "C",
  q: "A retail chain wants an AI that classifies product images to detect mislabelled SKUs. The team needs an architecture that uses local receptive fields and pooling to extract spatial features from image data. Which architecture fits best?",
  options: { A: "Transformer", B: "Recurrent Neural Network", C: "Convolutional Neural Network", D: "Autoencoder" } },

{ id: 3, topic: "Architectures", correct: "A",
  q: "A legal-tech firm builds a long-document summariser. The architecture must process the full document in parallel using self-attention to capture long-range dependencies across thousands of tokens. Which architecture is most appropriate?",
  options: { A: "Transformer", B: "Convolutional Neural Network", C: "Radial Basis Function Network", D: "Recurrent Neural Network" } },

{ id: 4, topic: "Architectures", correct: "B",
  q: "A bank wants to detect anomalies in transaction data by training a model that learns to compress and reconstruct typical transactions, flagging high reconstruction error as anomalous. Which architecture is best suited?",
  options: { A: "GAN", B: "Autoencoder", C: "CNN", D: "Transformer" } },

{ id: 5, topic: "Architectures", correct: "D",
  q: "A studio is generating synthetic training data for an image-classification model. The team uses two networks — a generator that produces fake samples and a discriminator that learns to distinguish real from fake — trained in a min-max game. Which architecture is this?",
  options: { A: "Autoencoder", B: "Transformer", C: "CNN", D: "Generative Adversarial Network" } },

{ id: 6, topic: "NLP Preprocessing", correct: "B",
  q: "Before training a sentiment model, the team converts the words 'running, runs, ran' into the canonical dictionary form 'run'. Which preprocessing step is this?",
  options: { A: "Tokenization", B: "Lemmatization", C: "Stop-word removal", D: "Stemming" } },

{ id: 7, topic: "NLP Preprocessing", correct: "A",
  q: "Before sentiment scoring, the team converts free-text reviews into numeric vectors that capture semantic similarity, so similar reviews land near each other in a shared vector space. Which technique is this?",
  options: { A: "Embedding", B: "Tokenization", C: "Stemming", D: "Lemmatization" } },

{ id: 8, topic: "Hardware", correct: "B",
  q: "Google's internal team designs a custom silicon chip optimised specifically for matrix multiplication used in neural-network workloads, with low precision and high throughput. Which hardware class is this?",
  options: { A: "GPU", B: "TPU", C: "FPGA", D: "ASIC for crypto-mining" } },

{ id: 9, topic: "Hardware", correct: "C",
  q: "A defence contractor needs a reconfigurable hardware accelerator that can be reprogrammed for different ML workloads after deployment to the field. Which hardware fits?",
  options: { A: "GPU", B: "TPU", C: "FPGA", D: "Mainframe CPU" } },

{ id: 10, topic: "Deployment", correct: "C",
  q: "A wearable health device runs an arrhythmia-detection model directly on the device, with no round-trip to the cloud. Battery and inference latency are the dominant constraints. Which deployment pattern is this?",
  options: { A: "Cloud inference", B: "Federated learning", C: "On-device / edge AI", D: "Serverless inference" } },

{ id: 11, topic: "Generative AI", correct: "C",
  q: "A customer-support bot retrieves the three most relevant policy excerpts from a vector index and includes them in the LLM prompt so the answer is grounded in current internal documents. Which GenAI pattern is this?",
  options: { A: "Fine-tuning", B: "Prompt engineering only", C: "Retrieval-Augmented Generation (RAG)", D: "Reinforcement Learning from Human Feedback (RLHF)" } },

{ id: 12, topic: "Generative AI", correct: "D",
  q: "After supervised fine-tuning, a foundation-model team collects human preference rankings between pairs of model outputs and trains a reward model that further tunes the LLM via policy optimisation. Which technique is this?",
  options: { A: "Self-supervised pre-training", B: "RAG", C: "Knowledge distillation", D: "Reinforcement Learning from Human Feedback (RLHF)" } },

{ id: 13, topic: "Generative AI", correct: "B",
  q: "A clinical-summary team takes an open-weight 7B base model and continues training it on 40,000 curated physician notes to specialise its behaviour for their domain. Which technique is this?",
  options: { A: "Pre-training from scratch", B: "Fine-tuning", C: "Quantisation", D: "Prompt caching" } },

{ id: 14, topic: "Foundation Models", correct: "C",
  q: "An AI program manager describes a model that has been pre-trained on vast amounts of broad, unlabelled data and can be adapted to many downstream tasks via fine-tuning or prompting. What is this model commonly called?",
  options: { A: "Edge model", B: "Specialist model", C: "Foundation model", D: "Federated model" } },

{ id: 15, topic: "AI Stack", correct: "B",
  q: "A team uses a managed service that exposes a pre-trained large language model as an API; the customer never sees the weights. Which layer of the AI stack does this represent?",
  options: { A: "Hardware", B: "AI-as-a-Service / Model API", C: "Vector store", D: "MLOps observability" } },

{ id: 16, topic: "AI Stack", correct: "D",
  q: "An MLOps team runs continuous evals, latency monitoring, fairness drift detection, and on-call alerting for production AI services. Which layer of the AI stack is this?",
  options: { A: "Foundation models", B: "Fine-tuning", C: "Retrieval", D: "MLOps / observability" } },

{ id: 17, topic: "Documentation", correct: "B",
  q: "Before publishing an internal model to a model registry, the team is required to document architecture, intended use, limitations, training data, evaluation data, ethical considerations, and license. What artefact is this?",
  options: { A: "Datasheet for datasets", B: "Model card", C: "Decision log", D: "AIBOM" } },

{ id: 18, topic: "AI vs ML vs DL", correct: "C",
  q: "A new engineer asks how AI, ML, and DL relate. Which statement most accurately captures the relationship?",
  options: { A: "AI, ML and DL are three independent disciplines with no overlap", B: "DL is broader than ML which is broader than AI", C: "DL is a subset of ML which is a subset of AI", D: "ML is a subset of DL which is a subset of AI" } },

// ===== Module 2 · AI Concerns, Ethics, Responsible AI =====

{ id: 19, topic: "OECD Principles", correct: "A",
  q: "An OECD principle stresses that AI should benefit people and the planet, drive inclusive growth and sustainable development, and reduce inequality. Which principle is this?",
  options: { A: "Inclusive growth, sustainable development and well-being", B: "Robustness, security and safety", C: "Accountability", D: "Transparency and explainability" } },

{ id: 20, topic: "OECD Principles", correct: "C",
  q: "Which OECD AI principle requires that those who design, deploy or operate AI be answerable for its proper functioning and consistent with the other principles?",
  options: { A: "Transparency and explainability", B: "Human-centered values", C: "Accountability", D: "Robustness and safety" } },

{ id: 21, topic: "OECD Principles", correct: "B",
  q: "An AI is reviewed against the OECD principle requiring it to function appropriately, not pose unreasonable safety risks, and be resilient to attacks throughout its lifecycle. Which principle is this?",
  options: { A: "Inclusive growth", B: "Robustness, security and safety", C: "Human-centered values and fairness", D: "Accountability" } },

{ id: 22, topic: "Fairness Metrics", correct: "A",
  q: "A bank wants to verify that loan-approval rates are similar across demographic groups, regardless of qualifications. Which group-fairness metric captures this?",
  options: { A: "Statistical parity (demographic parity)", B: "Equalized odds", C: "Equality of opportunity", D: "Predictive parity" } },

{ id: 23, topic: "Fairness Metrics", correct: "B",
  q: "An insurer wants true-positive and false-positive rates to be equal across groups. Which fairness metric is this?",
  options: { A: "Statistical parity", B: "Equalized odds", C: "Calibration", D: "Counterfactual fairness" } },

{ id: 24, topic: "Fairness Metrics", correct: "C",
  q: "A recruiter wants the true-positive rate (recall) for qualified applicants to be equal across groups, accepting that base rates may differ. Which fairness metric matches?",
  options: { A: "Statistical parity", B: "Equalized odds", C: "Equality of opportunity", D: "Demographic parity" } },

{ id: 25, topic: "Fairness Metrics", correct: "D",
  q: "An audit shows that, conditional on a predicted score of 0.8, applicants from different groups actually default at the same rate. Which fairness property is this called?",
  options: { A: "Equalized odds", B: "Statistical parity", C: "Equality of opportunity", D: "Calibration" } },

{ id: 26, topic: "Bias Types", correct: "B",
  q: "An audit shows the training set contains far more examples of one demographic than another, leading the model to underperform on the minority group. Which bias type is this?",
  options: { A: "Algorithmic bias", B: "Sampling bias", C: "Confirmation bias", D: "Anchoring bias" } },

{ id: 27, topic: "Bias Types", correct: "C",
  q: "An AI trained on historical lending data reproduces past discriminatory lending patterns, even though the modelling pipeline is technically sound and the dataset is large. Which bias type is this?",
  options: { A: "Algorithmic bias", B: "Sampling bias", C: "Historical / societal bias", D: "Confirmation bias" } },

{ id: 28, topic: "Bias Types", correct: "A",
  q: "A team finds that the optimiser favours certain feature combinations in a way that produces disparate impact, even when the input data is balanced and provenance is clean. Which bias type is this?",
  options: { A: "Algorithmic bias", B: "Data bias", C: "Sampling bias", D: "Label noise" } },

{ id: 29, topic: "Bias Types", correct: "D",
  q: "A human-annotator team labelled training data inconsistently — different annotators using different criteria for the same edge cases. Which bias type results from this?",
  options: { A: "Algorithmic bias", B: "Selection bias", C: "Historical bias", D: "Label bias" } },

{ id: 30, topic: "Trustworthy AI", correct: "C",
  q: "NIST's trustworthy-AI characteristics include validity & reliability, safety, security & resilience, accountability & transparency, explainability & interpretability, privacy-enhanced, and one more. Which is the seventh?",
  options: { A: "Profitability", B: "Velocity", C: "Fair (with harmful bias managed)", D: "Open source" } },

{ id: 31, topic: "Human Oversight", correct: "B",
  q: "The EU AI Act requires that high-risk AI systems be designed so that natural persons can effectively oversee them, including the ability to intervene and stop the system. Which obligation is this?",
  options: { A: "Conformity assessment", B: "Human oversight", C: "Post-market monitoring", D: "Risk management system" } },

{ id: 32, topic: "Explainability Techniques", correct: "B",
  q: "An XAI technique generates a local linear approximation around a specific prediction to identify which features mattered most for that single output. Which technique is this?",
  options: { A: "SHAP", B: "LIME", C: "Counterfactual explanation", D: "Attention map" } },

{ id: 33, topic: "Explainability Techniques", correct: "A",
  q: "A model-explanation method based on coalitional game theory attributes the prediction to each feature by computing its marginal contribution across all feature coalitions. Which technique is this?",
  options: { A: "SHAP", B: "LIME", C: "Saliency map", D: "Anchors" } },

{ id: 34, topic: "Explainability Techniques", correct: "C",
  q: "An XAI technique provides 'what if' explanations of the form: 'if your income had been £3,000 higher, the loan would have been approved.' Which technique is this?",
  options: { A: "LIME", B: "SHAP", C: "Counterfactual explanation", D: "Attention map" } },

{ id: 35, topic: "Ethics Charter", correct: "C",
  q: "The board wants a single artefact that publicly states the organisation's responsible-AI principles, scope, decision authority, and escalation. Which artefact best fits?",
  options: { A: "Model card", B: "DPIA", C: "AI ethics charter", D: "RACI matrix" } },

{ id: 36, topic: "Complaint Handling", correct: "A",
  q: "A user complaint about an AI outcome must be addressed not just by reverting the specific case but by tracing what caused similar outcomes so the root issue is fixed for future users. Which element of complaint handling is this?",
  options: { A: "Root-cause analysis", B: "Timely acknowledgement", C: "Transparent response", D: "Feedback loop" } },

// ===== Module 3 · AI Strategy and Planning =====

{ id: 37, topic: "Sourcing", correct: "A",
  q: "A bank needs an email-spam filter and a vendor offers an off-the-shelf SaaS that handles the task with minimal customisation, on a 6-week rollout. Which sourcing strategy fits?",
  options: { A: "Buy", B: "Build", C: "Partner", D: "Open-source roll-your-own" } },

{ id: 38, topic: "Sourcing", correct: "B",
  q: "A regulated insurer holds proprietary actuarial data central to its competitive moat and faces strict regulatory oversight; off-the-shelf solutions don't fit the regulatory context. Which sourcing strategy fits?",
  options: { A: "Buy", B: "Build", C: "Outsource entirely", D: "Use ChatGPT directly" } },

{ id: 39, topic: "Sourcing", correct: "C",
  q: "A food manufacturer wants industrial-vision QC tuned to its specific line. A vendor offers a mature base model that must be fine-tuned on the manufacturer's images, on a 6-month timeline. Which sourcing strategy fits?",
  options: { A: "Build", B: "Buy", C: "Partner", D: "Reseller agreement" } },

{ id: 40, topic: "Business Case", correct: "D",
  q: "Before approving an AI initiative, leadership evaluates expected return relative to total cost over the planning horizon, including model training, monitoring, and maintenance. Which business-case element is being applied?",
  options: { A: "Risk Assessment", B: "Strategic Alignment", C: "Implementation Roadmap", D: "ROI Analysis" } },

{ id: 41, topic: "Business Case", correct: "B",
  q: "An AI initiative is reviewed against the company's stated long-term direction, ensuring the proposed solution supports the strategic priorities published by the board. Which business-case element is this?",
  options: { A: "ROI Analysis", B: "Strategic Alignment", C: "Implementation Roadmap", D: "Risk Assessment" } },

{ id: 42, topic: "Cost Mgmt", correct: "B",
  q: "Before scaling an AI pilot enterprise-wide, the finance team must first enumerate every recurring cost embedded across the AI lifecycle — compute, storage, fine-tuning, monitoring, retraining, vendor fees. Which step is this?",
  options: { A: "Budget allocation", B: "Cost component identification", C: "Spend prioritization", D: "Cost-benefit analysis" } },

{ id: 43, topic: "Capability Gap", correct: "C",
  q: "An org with 6 in-flight AI initiatives, no shared platform, recurring drift incidents, and a new high-risk use case must pick its next hire. Which role provides the highest leverage?",
  options: { A: "Prompt engineer", B: "Junior data scientist", C: "ML platform lead", D: "Foundation-model researcher" } },

{ id: 44, topic: "Pilot Evaluation", correct: "A",
  q: "A short pilot meets technical thresholds but qualitative feedback shows friction in daily use. Before expanding, leadership concludes the system needs more iteration before scaling. Which interpretation is this?",
  options: { A: "Refinement Needs", B: "Scale Recommendation", C: "Fail-Fast Decision", D: "Success Indicators" } },

{ id: 45, topic: "Use Case Prioritization", correct: "C",
  q: "Four AI initiatives compete for the same budget. The roadmap places low-risk quick wins first to build capability, then phases in high-value initiatives with explicit controls. Which prioritisation approach is this?",
  options: { A: "NPV-only", B: "Voice-of-customer ranking", C: "Risk-adjusted value", D: "Random allocation" } },

{ id: 46, topic: "AI Maturity", correct: "B",
  q: "An assessment characterises an organisation along stages — exploratory, experimental, formalised, optimised, transformational — to plan investment. What kind of model is this?",
  options: { A: "Compliance framework", B: "AI maturity model", C: "Risk register", D: "Cost model" } },

{ id: 47, topic: "Strategy", correct: "A",
  q: "A board approves an org-wide document that defines priorities, alignment, governance, and long-term direction for AI adoption across all business units. What category of decision is this?",
  options: { A: "AI strategy", B: "AI project plan", C: "AI pilot list", D: "AI hiring plan" } },

{ id: 48, topic: "Use Case Prioritization", correct: "D",
  q: "A planning grid plots AI initiatives on two axes: business value and implementation risk. Initiatives are then prioritised by quadrant. Which framework is this?",
  options: { A: "RACI", B: "FMEA", C: "SWOT", D: "Value-Risk matrix" } },

// ===== Module 4 · AI Governance and Frameworks =====

{ id: 49, topic: "NIST AI RMF", correct: "A",
  q: "Which function of the NIST AI Risk Management Framework cuts across all others and addresses culture, policy, accountability, and integration of risk management into the organisation?",
  options: { A: "GOVERN", B: "MAP", C: "MEASURE", D: "MANAGE" } },

{ id: 50, topic: "NIST AI RMF", correct: "B",
  q: "Which NIST AI RMF function focuses on establishing the context — intended use, stakeholders, capabilities, foreseeable misuse, and societal impacts?",
  options: { A: "GOVERN", B: "MAP", C: "MEASURE", D: "MANAGE" } },

{ id: 51, topic: "NIST AI RMF", correct: "C",
  q: "Which NIST AI RMF function focuses on tracking risk through quantitative and qualitative metrics, evaluations, audits, and monitoring?",
  options: { A: "GOVERN", B: "MAP", C: "MEASURE", D: "MANAGE" } },

{ id: 52, topic: "NIST AI RMF", correct: "D",
  q: "Which NIST AI RMF function focuses on prioritising, responding to, and continuously improving identified risks throughout the AI lifecycle?",
  options: { A: "GOVERN", B: "MAP", C: "MEASURE", D: "MANAGE" } },

{ id: 53, topic: "ISO/IEC 42001", correct: "A",
  q: "Which ISO/IEC 42001 clause requires the organisation to determine internal and external issues relevant to the AI Management System and identify interested parties and the scope of the AIMS?",
  options: { A: "Clause 4 — Context of the organisation", B: "Clause 6 — Planning", C: "Clause 8 — Operation", D: "Clause 9 — Performance evaluation" } },

{ id: 54, topic: "ISO/IEC 42001", correct: "B",
  q: "Which ISO/IEC 42001 clause covers planning, including risk and opportunity identification and AI objectives and treatment plans?",
  options: { A: "Clause 4 — Context", B: "Clause 6 — Planning", C: "Clause 8 — Operation", D: "Clause 10 — Improvement" } },

{ id: 55, topic: "ISO/IEC 42001", correct: "C",
  q: "Which ISO/IEC 42001 clause requires AI system impact assessment — covering effects on individuals, groups, and society?",
  options: { A: "Clause 5 — Leadership", B: "Clause 6.1.2 — Risk assessment", C: "Clause 8.3 — AI system impact assessment", D: "Clause 9.2 — Internal audit" } },

{ id: 56, topic: "ISO/IEC 23894", correct: "B",
  q: "Which ISO standard provides AI-specific risk-management guidance and complements ISO/IEC 42001 by offering risk treatment guidance through the lifecycle?",
  options: { A: "ISO 27001", B: "ISO/IEC 23894", C: "ISO 9001", D: "ISO 31000 (general only)" } },

{ id: 57, topic: "Governance Models", correct: "B",
  q: "A regulator expects clear lines of authority spanning all business units for AI risk decisions. Discretion at the unit level must shrink in favour of consistent enterprise-level enforcement. Which governance model fits?",
  options: { A: "Federated", B: "Centralized", C: "DAO-driven", D: "Hybrid" } },

{ id: 58, topic: "Governance Models", correct: "A",
  q: "A multinational with diverse local regulatory contexts wants each business line to retain operational discretion, while a small central body sets common policies and standards. Which governance model fits?",
  options: { A: "Federated", B: "Centralized", C: "Decentralized DAO", D: "Outsourced" } },

{ id: 59, topic: "Roles", correct: "B",
  q: "The single accountable executive for the entire AI portfolio, owning strategy, risk, and external positioning, is most appropriately called the...",
  options: { A: "Chief Marketing Officer", B: "Chief AI Officer (CAIO)", C: "Engineering Director", D: "Head of Product" } },

{ id: 60, topic: "Roles", correct: "C",
  q: "The role most directly responsible for evaluating personal-data processing, advising on DPIAs, and engaging the data-protection authority is...",
  options: { A: "CISO", B: "CFO", C: "Data Protection Officer (DPO)", D: "Head of Marketing" } },

{ id: 61, topic: "Roles", correct: "D",
  q: "Continuity and internal coherence of model components across releases — version control, integrity, reproducibility of decisions — most appropriately belongs to which role?",
  options: { A: "Business owner", B: "Data steward", C: "Compliance officer", D: "Model custodian" } },

{ id: 62, topic: "Governance Bodies", correct: "B",
  q: "Strategic risk-appetite decisions translated into organisation-wide guidance and applied consistently across business units is the remit of which body?",
  options: { A: "Working group", B: "Steering committee", C: "Ethics panel", D: "Engineering guild" } },

{ id: 63, topic: "Governance Bodies", correct: "C",
  q: "A standing internal body that evaluates AI initiatives early, arbitrates trade-offs between innovation and ethics, and issues organisation-wide ethical guidance is best described as a...",
  options: { A: "Risk committee", B: "Steering committee", C: "Company AI Ethics Board", D: "Audit committee" } },

{ id: 64, topic: "RACI", correct: "A",
  q: "In a RACI matrix for a high-risk AI launch, exactly one role must be marked 'A'. Why?",
  options: { A: "Accountability is singular; two A's mean no accountability", B: "Two A's let the organisation share the blame more fairly", C: "RACI does not constrain the number of A's", D: "A is optional — only R, C, and I are required" } },

{ id: 65, topic: "AIMS Scope", correct: "C",
  q: "The most defensible AIMS scope statement for a multinational health-tech firm should cover what?",
  options: { A: "Only customer-facing AI", B: "Only research projects", C: "All production AI systems", D: "Only vendor-purchased AI" } },

{ id: 66, topic: "Frameworks", correct: "D",
  q: "An organisation wants a structured, audit-ready, lifecycle-wide approach to AI risk that maps controls from design to deployment to monitoring. Which framework fits?",
  options: { A: "OWASP Top 10", B: "MITRE ATT&CK", C: "ISO 27002", D: "NIST AI Risk Management Framework" } },

// ===== Module 5 · AI Regulatory Compliance =====

{ id: 67, topic: "EU AI Act", correct: "A",
  q: "A government plans to deploy a real-time biometric identification system for general law-enforcement surveillance in public spaces. Under the EU AI Act, which tier most likely applies?",
  options: { A: "Prohibited", B: "High-risk", C: "Limited-risk", D: "Minimal-risk" } },

{ id: 68, topic: "EU AI Act", correct: "B",
  q: "A medical-device manufacturer ships AI-assisted diagnostic software for EU hospitals. Under the EU AI Act, which tier applies?",
  options: { A: "Prohibited", B: "High-risk (Annex III + sectoral regulation)", C: "Limited-risk", D: "Minimal-risk" } },

{ id: 69, topic: "EU AI Act", correct: "C",
  q: "A customer-facing chatbot interacts with EU users and must clearly disclose that they are conversing with an AI. Under the EU AI Act, which tier applies?",
  options: { A: "High-risk", B: "Prohibited", C: "Limited-risk (transparency obligations)", D: "Minimal-risk" } },

{ id: 70, topic: "EU AI Act", correct: "D",
  q: "A spam filter classifies emails in a consumer email client. Under the EU AI Act tiering, which category applies?",
  options: { A: "Prohibited", B: "High-risk", C: "Limited-risk", D: "Minimal-risk" } },

{ id: 71, topic: "EU AI Act", correct: "A",
  q: "A government deploys an AI to score citizens for general social standing across multiple unrelated contexts. Under the EU AI Act, which tier applies?",
  options: { A: "Prohibited", B: "High-risk", C: "Limited-risk", D: "Minimal-risk" } },

{ id: 72, topic: "GDPR", correct: "C",
  q: "Solely-automated decisions producing legal or similarly significant effects on EU residents are governed by which GDPR article, which also requires safeguards including the right to human intervention?",
  options: { A: "Article 15", B: "Article 17", C: "Article 22", D: "Article 32" } },

{ id: 73, topic: "GDPR", correct: "B",
  q: "Which GDPR article requires a Data Protection Impact Assessment when processing is likely to result in a high risk to the rights and freedoms of natural persons?",
  options: { A: "Article 22", B: "Article 35", C: "Article 25", D: "Article 5" } },

{ id: 74, topic: "GDPR", correct: "D",
  q: "Which GDPR principle requires technical and organisational measures to be integrated into processing from the start, by design and by default?",
  options: { A: "Lawfulness", B: "Fairness and transparency", C: "Accuracy", D: "Data protection by design and by default (Art. 25)" } },

{ id: 75, topic: "CCPA / CPRA", correct: "A",
  q: "A California-based AI service uses automated decision-making to personalise pricing for consumers. Which regulatory framework most directly governs the transparency obligation?",
  options: { A: "CCPA / CPRA", B: "GDPR", C: "LGPD", D: "DPDP Act" } },

{ id: 76, topic: "BIPA", correct: "B",
  q: "A retail chain in Illinois rolls out a facial-recognition system for store entry. Which state-level law most directly imposes biometric consent, notice and retention requirements?",
  options: { A: "CCPA", B: "BIPA (Illinois Biometric Information Privacy Act)", C: "COPPA", D: "FERPA" } },

{ id: 77, topic: "NYC AEDT", correct: "C",
  q: "A New York City employer uses an automated employment-decision tool to screen candidates. Local Law 144 (the AEDT law) requires what?",
  options: { A: "Annual penetration test", B: "Submission to FINRA", C: "Independent bias audit + candidate notice", D: "Quarterly board sign-off" } },

{ id: 78, topic: "Colorado SB21-169", correct: "D",
  q: "Colorado's SB21-169 requires insurers using AI/external consumer data to test their models and processes for what type of impact?",
  options: { A: "Cybersecurity impact only", B: "Latency impact", C: "Carbon-footprint impact", D: "Unfair discrimination based on protected classes" } },

{ id: 79, topic: "HIPAA", correct: "A",
  q: "A US hospital deploys an AI clinical decision-support tool that processes PHI from outpatient encounters. Which framework most directly governs the handling of this data?",
  options: { A: "HIPAA", B: "PCI-DSS", C: "SOX", D: "FERPA" } },

{ id: 80, topic: "FDA SaMD", correct: "B",
  q: "An AI algorithm intended for medical purposes (diagnosis, prevention, monitoring) without being part of a hardware medical device is classified under which framework?",
  options: { A: "FDA OTC drug review", B: "FDA Software as a Medical Device (SaMD)", C: "FDA food labelling", D: "FDA blood bank rules" } },

{ id: 81, topic: "FDA GMLP", correct: "C",
  q: "The FDA's principles for managing continuously-learning AI in medical devices — including transparent change-control plans and real-world performance monitoring — are best known as...",
  options: { A: "ISO 14971", B: "ICH Q9", C: "Good Machine Learning Practice (GMLP)", D: "21 CFR Part 11" } },

{ id: 82, topic: "Fed SR 11-7", correct: "B",
  q: "A US bank's model-risk-management policy must comply with which Federal Reserve guidance, covering effective challenge, governance, development controls, validation, and ongoing monitoring of models?",
  options: { A: "OCC 2024-01", B: "SR 11-7 (Federal Reserve Supervisory Guidance on Model Risk Management)", C: "SOX 404", D: "Basel III" } },

{ id: 83, topic: "FCRA", correct: "D",
  q: "An AI-driven credit-screening tool returns a negative outcome that affects a US consumer's ability to obtain a loan. Which federal law most directly requires the consumer be provided with an adverse-action notice?",
  options: { A: "GLBA", B: "HIPAA", C: "TCPA", D: "FCRA (Fair Credit Reporting Act)" } },

{ id: 84, topic: "PIPL", correct: "C",
  q: "A consumer chatbot operated by a subsidiary in mainland China processes personal data of users in China. Which framework most directly applies?",
  options: { A: "GDPR", B: "CCPA", C: "PIPL (Personal Information Protection Law)", D: "DPDP Act" } },

{ id: 85, topic: "FCC", correct: "B",
  q: "AI-generated voices used in outbound calls in the United States are regulated in the same manner as artificial or prerecorded robocalls by which regulator?",
  options: { A: "SEC", B: "FCC", C: "FDA", D: "FINRA" } },

{ id: 86, topic: "CFPB", correct: "A",
  q: "A US-regulated lender's AI denies a loan and must provide an adverse-action notice with specific reasons under which agency's oversight?",
  options: { A: "CFPB", B: "FCC", C: "FAA", D: "EEOC alone" } },

// ===== Module 6 · AI Risk and Threat Management =====

{ id: 87, topic: "Risk Methodology", correct: "B",
  q: "A team systematically lists potential failure modes for each component of an AI pipeline, scoring severity, occurrence and detectability, then synthesises a Risk Priority Number for each. Which technique is this?",
  options: { A: "Bow-tie analysis", B: "FMEA (Failure Modes and Effects Analysis)", C: "Monte Carlo simulation", D: "STRIDE" } },

{ id: 88, topic: "Risk Methodology", correct: "C",
  q: "A risk analyst visualises a single failure event in the centre, with prevention controls fanning out on the left and impact-reduction controls fanning out on the right. Which technique is this?",
  options: { A: "FMEA", B: "Monte Carlo simulation", C: "Bow-tie analysis", D: "Fault-tree analysis" } },

{ id: 89, topic: "Risk Methodology", correct: "A",
  q: "A finance team runs thousands of randomised simulations across uncertain inputs to estimate the distribution of outcomes for an AI-driven trading strategy. Which technique is this?",
  options: { A: "Monte Carlo simulation", B: "Bow-tie analysis", C: "FMEA", D: "Scenario analysis" } },

{ id: 90, topic: "Risk Methodology", correct: "D",
  q: "Before deploying a navigation AI, the team systematically explores credible-but-non-observed conditions: degraded input integrity, disrupted dependencies, intentional manipulation. Which technique is this?",
  options: { A: "Quantitative risk scoring", B: "Historical data analysis", C: "Threat modelling", D: "Scenario analysis" } },

{ id: 91, topic: "Risk Treatment", correct: "B",
  q: "The board accepts a residual risk on an AI use case after controls are applied, formally documenting the decision and the rationale. Which risk-treatment option is this?",
  options: { A: "Avoidance", B: "Acceptance", C: "Mitigation", D: "Transfer" } },

{ id: 92, topic: "Risk Treatment", correct: "C",
  q: "An organisation buys cybersecurity insurance to cover financial loss from a potential AI breach. Which risk-treatment option is this?",
  options: { A: "Avoidance", B: "Acceptance", C: "Transfer", D: "Mitigation" } },

{ id: 93, topic: "Risk Treatment", correct: "D",
  q: "An organisation decides not to deploy an AI capability at all because the residual risk after controls remains unacceptable. Which risk-treatment option is this?",
  options: { A: "Mitigation", B: "Transfer", C: "Acceptance", D: "Avoidance" } },

{ id: 94, topic: "MITRE ATLAS", correct: "A",
  q: "An adversary probes a public AI API to fingerprint the underlying model architecture and version. Which ATLAS tactic does this represent?",
  options: { A: "Reconnaissance", B: "Initial Access", C: "Execution", D: "Exfiltration" } },

{ id: 95, topic: "MITRE ATLAS", correct: "B",
  q: "An attacker uses a stolen HuggingFace token leaked in a public commit to access a private model repository. Which ATLAS tactic is this?",
  options: { A: "Reconnaissance", B: "Initial Access", C: "Discovery", D: "Impact" } },

{ id: 96, topic: "MITRE ATLAS", correct: "C",
  q: "An attacker injects an instruction into a retrieved document that causes a customer-facing LLM agent to perform an unintended action. Which ATLAS tactic is this?",
  options: { A: "Reconnaissance", B: "Initial Access", C: "Execution (LLM prompt injection)", D: "Exfiltration" } },

{ id: 97, topic: "MITRE ATLAS", correct: "D",
  q: "Over months an attacker submits crafted queries and reconstructs another customer's profile from the model's responses. Which ATLAS tactic is this?",
  options: { A: "Reconnaissance", B: "Initial Access", C: "Execution", D: "Exfiltration" } },

{ id: 98, topic: "Threat Models", correct: "A",
  q: "A team threat-models an LLM agent using Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, and Elevation of privilege. Which framework is this?",
  options: { A: "STRIDE", B: "PASTA", C: "OCTAVE", D: "DREAD" } },

{ id: 99, topic: "Threat Models", correct: "B",
  q: "A privacy-focused threat-modelling framework with seven categories — Linkability, Identifiability, Non-repudiation, Detectability, Disclosure of information, Unawareness, Non-compliance — is best known as...",
  options: { A: "STRIDE", B: "LINDDUN", C: "PASTA", D: "TRIKE" } },

{ id: 100, topic: "AI Attacks", correct: "C",
  q: "An attacker crafts inputs that lie just inside a model's decision boundary to bypass detection at inference time, without compromising training. Which attack is this?",
  options: { A: "Data poisoning", B: "Model stealing", C: "Adversarial evasion", D: "Membership inference" } },

{ id: 101, topic: "AI Attacks", correct: "A",
  q: "An attacker submits crafted training samples to a crowdsourced labelling pipeline so the resulting model contains a backdoor trigger. Which attack is this?",
  options: { A: "Data poisoning", B: "Adversarial evasion", C: "Model inversion", D: "Model stealing" } },

{ id: 102, topic: "AI Attacks", correct: "B",
  q: "An attacker queries a trained model thousands of times with carefully constructed inputs to infer whether a specific record was part of its training set. Which attack is this?",
  options: { A: "Model stealing", B: "Membership inference", C: "Data poisoning", D: "Adversarial evasion" } },

{ id: 103, topic: "AI Attacks", correct: "D",
  q: "An attacker exploits a model's output to reconstruct sensitive training inputs — for instance, recovering faces from a face-recognition model. Which attack is this?",
  options: { A: "Model stealing", B: "Membership inference", C: "Data poisoning", D: "Model inversion" } },

{ id: 104, topic: "AI Attacks", correct: "A",
  q: "Forensics shows no breach and no source-code exposure — only extensive structured querying over months. Competitors then ship near-identical decision behaviour. Which attack is this?",
  options: { A: "Model stealing", B: "Model inversion", C: "Adversarial evasion", D: "Supply-chain compromise" } },

{ id: 105, topic: "Residual Risk", correct: "C",
  q: "Inherent risk L=4, I=5 (composite 20). After two controls — guardrails (L drops to 4 in a conservative case) and a $500 action cap (I drops to 3) — what is the residual composite?",
  options: { A: "5", B: "8", C: "12", D: "20" } },

// ===== Module 7 · Third-Party AI Risk and Supply Chain =====

{ id: 106, topic: "TPRM Lifecycle", correct: "A",
  q: "Before any risk assessment or contract control, the first step of a TPRM program for AI vendors is to establish visibility into which vendors are involved, what AI components they supply, and how they connect to internal systems. What is this step?",
  options: { A: "Identification and mapping", B: "Due diligence and risk assessment", C: "Contractual controls", D: "Continuous monitoring" } },

{ id: 107, topic: "TPRM Lifecycle", correct: "B",
  q: "After visibility is established, the next TPRM step is a structured evaluation of the vendor's technical maturity, governance, ethical safeguards, security controls, and regulatory readiness. What is this step?",
  options: { A: "Identification", B: "Vendor due diligence", C: "Onboarding", D: "Exit planning" } },

{ id: 108, topic: "TPRM Lifecycle", correct: "C",
  q: "After due diligence, the org formalises uptime guarantees, response timelines, incident SLAs, IP terms, and data processing terms in the agreement. Which step is this?",
  options: { A: "Identification", B: "Due diligence", C: "Contractual & compliance controls", D: "Continuous monitoring" } },

{ id: 109, topic: "TPRM Lifecycle", correct: "D",
  q: "After onboarding, the organisation maintains visibility into whether the vendor continues to meet its agreed obligations and any new risks emerging in their service. Which TPRM step is this?",
  options: { A: "Identification", B: "Due diligence", C: "Contract negotiation", D: "Continuous monitoring" } },

{ id: 110, topic: "Vendor Contracts", correct: "B",
  q: "A vendor agreement specifies that the vendor will only process personal data for purposes the controller has authorised, will assist with data-subject rights, and will not engage sub-processors without consent. Which contract type is this?",
  options: { A: "MSA", B: "Data Processing Agreement (DPA)", C: "Business Associate Agreement (BAA)", D: "License agreement" } },

{ id: 111, topic: "Vendor Contracts", correct: "C",
  q: "A US healthcare provider engages a vendor that will receive PHI to provide AI services. Which contract type is required by HIPAA?",
  options: { A: "DPA", B: "MSA", C: "Business Associate Agreement (BAA)", D: "SOC 2 attestation" } },

{ id: 112, topic: "Vendor Contracts", correct: "A",
  q: "A vendor SLA promises 99.9% uptime, mean response time under 1 hour, resolution time under 8 hours, and service credits if missed. These represent...",
  options: { A: "Externally-enforceable obligations (SLAs)", B: "Internal performance targets (SLOs)", C: "Best-effort goals", D: "Operational metrics only" } },

{ id: 113, topic: "SOC 2", correct: "B",
  q: "An AI vendor offers a SOC 2 Type II report covering 12 months of operating effectiveness across the five Trust Services Criteria. This is preferred over a Type I report because...",
  options: { A: "Type II is cheaper for the vendor", B: "Type II tests operating effectiveness over time, not just design at a point in time", C: "Type II skips control descriptions", D: "Type I is no longer recognised by auditors" } },

{ id: 114, topic: "Third-Party Roles", correct: "A",
  q: "A provider delivers elastic compute, managed storage, integrated security controls, and a managed ML platform. The customer retains application logic and governance. Which third-party role is this?",
  options: { A: "Cloud provider", B: "Data vendor", C: "Model provider", D: "AI-as-a-Service provider" } },

{ id: 115, topic: "Third-Party Roles", correct: "C",
  q: "A vendor licenses pre-trained model weights to enterprise customers, who then fine-tune and serve them in their own environment. Which third-party role is this?",
  options: { A: "Cloud provider", B: "Data vendor", C: "Model provider", D: "MLOps tooling vendor" } },

{ id: 116, topic: "Third-Party Roles", correct: "D",
  q: "A vendor exposes pre-trained foundation-model capabilities only via a managed API; customers never access the weights. Which third-party role is this?",
  options: { A: "Cloud provider", B: "Model provider", C: "Data vendor", D: "AI-as-a-Service (API) provider" } },

{ id: 117, topic: "Licenses", correct: "B",
  q: "A commercial product wants to bundle a model whose weights are released under CC-BY-NC-4.0. What is the most accurate licensing assessment?",
  options: { A: "Permitted with attribution", B: "Blocked — non-commercial license disallows commercial use", C: "Permitted with copyleft", D: "Permitted under fair use" } },

{ id: 118, topic: "Licenses", correct: "A",
  q: "An engineering team wants to bundle a library released under Apache-2.0 in a commercial AI product. What is the licensing impact?",
  options: { A: "Permitted commercial use; preserve NOTICE and attribution", B: "Blocked — viral copyleft", C: "Permitted only for non-commercial use", D: "Permitted but requires source disclosure" } },

{ id: 119, topic: "Licenses", correct: "C",
  q: "Bundling code under GPL-3.0 inside a closed-source commercial AI product typically requires...",
  options: { A: "No additional action", B: "Only an attribution notice", C: "Releasing the combined work's source under GPL-compatible terms (copyleft)", D: "Paying a per-seat fee" } },

{ id: 120, topic: "Vendor Risk", correct: "B",
  q: "An audit finds that a vendor used customer data beyond the agreed purpose, shared it with other parties, and processed it in ways neither contracted nor visible. Which AI vendor failure scenario is this?",
  options: { A: "Biased decision logic", B: "Unauthorized secondary data use", C: "Poor data quality", D: "Unreliable model output" } },

{ id: 121, topic: "Vendor Provenance", correct: "D",
  q: "A vendor declines to share the base model name or commit hash and did not maintain a manifest of the fine-tune corpus. Their model card simply says 'license follows the base.' Which two findings are most material?",
  options: { A: "Latency + cost", B: "UI design + branding", C: "Marketing + customer references", D: "License risk + provenance unknown" } },

{ id: 122, topic: "Procurement", correct: "B",
  q: "During AI vendor evaluation, leadership emphasises confidentiality, integrity, and resilience across the full lifecycle, with attention to data access, exposure minimisation, and incident response. Which criterion is being applied?",
  options: { A: "Vendor reputation", B: "Security and data privacy measures", C: "Pricing flexibility", D: "Data localisation" } },

{ id: 123, topic: "Procurement", correct: "C",
  q: "A vendor is shortlisted on demos and references but model bias is discovered only after contracts are signed and rollout planning begins. Which procurement stage went wrong?",
  options: { A: "Identify potential vendors", B: "Negotiate contracts", C: "Conduct risk & technical evaluations", D: "Monitor performance" } },

// ===== Module 8 · AI Security Architecture and Controls =====

{ id: 124, topic: "Defense Strategy", correct: "A",
  q: "A security architect intentionally arranges successive controls so a compromise of one does not yield unrestricted downstream access. Which principle is this?",
  options: { A: "Defense in depth", B: "Least privilege", C: "Zero trust", D: "Secure by design" } },

{ id: 125, topic: "Defense Strategy", correct: "B",
  q: "A team assigns each service account only the minimum permissions needed to perform its task, removing standing administrator access. Which principle is this?",
  options: { A: "Defense in depth", B: "Least privilege", C: "Open by default", D: "Need to know" } },

{ id: 126, topic: "Defense Strategy", correct: "D",
  q: "Network access is never implicitly trusted based on location; every request is authenticated, authorised, and continuously validated. Which model is this?",
  options: { A: "Implicit trust", B: "Perimeter-only security", C: "DMZ", D: "Zero trust" } },

{ id: 127, topic: "Architecture", correct: "C",
  q: "After lateral movement compromised an AI training environment through a public web server, the architect isolates data ingestion, training, and inference into separate network segments with policy-controlled traffic between them. Which principle is this?",
  options: { A: "Microservices", B: "Containerisation", C: "Segmentation", D: "Tokenisation" } },

{ id: 128, topic: "Architecture", correct: "B",
  q: "An AI workload is packaged with all its dependencies in a lightweight image that runs identically across environments, with image-signing and SBOM validation. Which approach is this?",
  options: { A: "Virtualisation", B: "Containerisation", C: "Serverless", D: "Bare-metal" } },

{ id: 129, topic: "Authorization", correct: "A",
  q: "A junior support agent attempts to invoke an admin-only refund tool and is blocked because their assigned role does not have that permission. Which control is this?",
  options: { A: "RBAC (Role-Based Access Control)", B: "Rate limiting", C: "Input filter", D: "Encryption at rest" } },

{ id: 130, topic: "Authorization", correct: "B",
  q: "An access policy grants permission only if the requesting subject's attributes (department, clearance), the resource's attributes (sensitivity), and contextual attributes (time, location) all match the policy. Which model is this?",
  options: { A: "RBAC", B: "ABAC (Attribute-Based Access Control)", C: "MAC", D: "DAC" } },

{ id: 131, topic: "Controls", correct: "C",
  q: "A multi-tenant LLM platform restricts the number of API calls per key in a sliding window to prevent free-tier users from degrading premium users. Which control is this?",
  options: { A: "Segmentation", B: "Load balancing", C: "Rate limiting", D: "Encryption" } },

{ id: 132, topic: "Controls", correct: "D",
  q: "A customer-facing LLM is wrapped with a layer that detects and blocks jailbreak attempts in user input before the prompt reaches the model. Which control is this?",
  options: { A: "Output DLP", B: "Encryption at rest", C: "RBAC", D: "Input filter / prompt firewall" } },

{ id: 133, topic: "Controls", correct: "B",
  q: "An LLM's reply is inspected by a downstream filter that redacts any PII before the response reaches the end-user. Which control is this?",
  options: { A: "Input filter", B: "Output filter / DLP", C: "Containerisation", D: "Network segmentation" } },

{ id: 134, topic: "Controls", correct: "A",
  q: "Before an autonomous agent issues any refund over $500, a human must approve via an out-of-band workflow. Which control is this?",
  options: { A: "Human-in-the-loop action approval", B: "Rate limiting", C: "TLS termination", D: "Encryption" } },

{ id: 135, topic: "Supply Chain", correct: "B",
  q: "Each model artifact in the registry is signed by the publisher, and consumers verify the signature and SHA-256 before deployment. Which supply-chain control is this?",
  options: { A: "SBOM", B: "Model signing / cryptographic verification", C: "Tokenisation", D: "Rate limiting" } },

{ id: 136, topic: "Supply Chain", correct: "A",
  q: "An SBOM-like artifact documents every model component, dataset, dependency, and version used to produce a deployed AI system. This is commonly called an...",
  options: { A: "AI Bill of Materials (AIBOM)", B: "EULA", C: "AUP", D: "DPA" } },

{ id: 137, topic: "Vulnerability Mgmt", correct: "A",
  q: "A vulnerability-management cycle starts by enumerating known assets and finding weaknesses through scanning, threat-intel, or red-team output. Which step is this?",
  options: { A: "Identification", B: "Assessment", C: "Mitigation", D: "Continuous improvement" } },

{ id: 138, topic: "Vulnerability Mgmt", correct: "B",
  q: "A team triages a list of newly found vulnerabilities and decides which require immediate remediation based on exploitability, impact, and blast radius. Which step is this?",
  options: { A: "Identification", B: "Assessment", C: "Mitigation", D: "Monitoring" } },

{ id: 139, topic: "NIST CSF", correct: "A",
  q: "Which NIST Cybersecurity Framework function develops organisational understanding to manage cybersecurity risk to systems, people, assets, data, and capabilities?",
  options: { A: "Identify", B: "Protect", C: "Detect", D: "Respond" } },

{ id: 140, topic: "NIST CSF", correct: "B",
  q: "Which NIST CSF function develops and implements appropriate safeguards to ensure delivery of critical services?",
  options: { A: "Identify", B: "Protect", C: "Detect", D: "Recover" } },

{ id: 141, topic: "NIST CSF", correct: "C",
  q: "Which NIST CSF function develops and implements activities to identify the occurrence of a cybersecurity event?",
  options: { A: "Identify", B: "Protect", C: "Detect", D: "Respond" } },

{ id: 142, topic: "NIST CSF", correct: "D",
  q: "Which NIST CSF function develops and implements activities to maintain plans for resilience and restore capabilities impaired by a cybersecurity incident?",
  options: { A: "Identify", B: "Protect", C: "Respond", D: "Recover" } },

{ id: 143, topic: "Development", correct: "C",
  q: "Architecture review, static code analysis, threat modelling, and vulnerability testing are embedded into every phase of an AI project from requirements through rollout. Which approach is this?",
  options: { A: "Continuous deployment", B: "Rapid Application Development", C: "Secure Software Development Lifecycle (SSDLC)", D: "DevSecOps marketing" } },

{ id: 144, topic: "Frameworks", correct: "B",
  q: "A CRO wants an enterprise framework covering identify / protect / detect / respond / recover for AI models, data and infrastructure, supporting structured repeatable governance rather than a list of vulnerabilities. Which framework fits?",
  options: { A: "MITRE ATLAS", B: "NIST Cybersecurity Framework", C: "OWASP Top 10 for LLMs", D: "ISO 27017 alone" } },

// ===== Module 9 · Privacy, Trust, and Safety =====

{ id: 145, topic: "PII vs PHI", correct: "C",
  q: "An employee gives a customer's name, email, SSN, and details about their hypertension prescription. Which combination is correct?",
  options: { A: "Name + email = PHI", B: "SSN = PHI", C: "Prescription + diagnosis = PHI; name + email + SSN = PII", D: "None of these are PII or PHI" } },

{ id: 146, topic: "De-identification", correct: "B",
  q: "A researcher replaces a customer's direct identifiers with a token (e.g. CUST_8a1c). The mapping is kept under access control in case re-linking is later needed for legal purposes. Which technique is this?",
  options: { A: "Anonymisation", B: "Pseudonymisation", C: "Encryption", D: "Hashing" } },

{ id: 147, topic: "De-identification", correct: "A",
  q: "A dataset is irreversibly stripped of all direct and indirect identifiers so that no party can re-identify the underlying subjects, even with auxiliary information. Which technique is this?",
  options: { A: "Anonymisation", B: "Pseudonymisation", C: "Tokenisation", D: "Differential privacy" } },

{ id: 148, topic: "De-identification", correct: "D",
  q: "A dataset is grouped so each record is indistinguishable from at least k-1 other records on quasi-identifiers. Which property is this?",
  options: { A: "l-diversity", B: "t-closeness", C: "Differential privacy", D: "k-anonymity" } },

{ id: 149, topic: "De-identification", correct: "A",
  q: "Beyond k-anonymity, a property requires that each equivalence class contain at least l different values for the sensitive attribute. Which property is this?",
  options: { A: "l-diversity", B: "t-closeness", C: "k-anonymity", D: "Differential privacy" } },

{ id: 150, topic: "Privacy Tech", correct: "C",
  q: "A team adds calibrated noise to query results so an adversary cannot tell whether any individual was in the dataset, parameterised by ε. Which technique is this?",
  options: { A: "Pseudonymisation", B: "Generalisation", C: "Differential privacy", D: "Tokenisation" } },

{ id: 151, topic: "Privacy Tech", correct: "B",
  q: "A bank computes analytics directly on encrypted data without decrypting at any stage. Neither the model nor the execution environment ever sees plaintext. Which technique is this?",
  options: { A: "Tokenisation", B: "Homomorphic encryption", C: "AES-256", D: "TLS" } },

{ id: 152, topic: "Privacy Tech", correct: "D",
  q: "Three banks want to jointly train a fraud-detection model without revealing their individual customer data to one another. They use a cryptographic protocol that computes the function over distributed inputs while keeping each input private. Which technique is this?",
  options: { A: "Differential privacy", B: "Tokenisation", C: "Pseudonymisation", D: "Secure Multi-Party Computation (SMPC)" } },

{ id: 153, topic: "Privacy Tech", correct: "A",
  q: "A healthcare platform trains a shared model across hospitals without centralising patient data — each hospital trains locally and only model updates are aggregated. Which approach is this?",
  options: { A: "Federated learning", B: "Homomorphic encryption", C: "Differential privacy", D: "Pseudonymisation" } },

{ id: 154, topic: "Privacy Paradigms", correct: "A",
  q: "Privacy controls — minimisation, purpose limitation, access constraints — are embedded into a system's architecture and processes from the earliest design stage rather than added later. Which principle is this?",
  options: { A: "Privacy by design", B: "Privacy by default", C: "Data localisation", D: "Privacy by oversight" } },

{ id: 155, topic: "Privacy Paradigms", correct: "B",
  q: "When a user signs up, all privacy settings are configured to the most privacy-protective option without the user having to opt out. Which principle is this?",
  options: { A: "Privacy by design", B: "Privacy by default", C: "Opt-in consent", D: "Lawful basis" } },

{ id: 156, topic: "Privacy Paradigms", correct: "C",
  q: "An organisation collects only the personal data strictly necessary to deliver the stated service. Which GDPR principle is this?",
  options: { A: "Lawfulness, fairness, transparency", B: "Accuracy", C: "Data minimisation", D: "Integrity and confidentiality" } },

{ id: 157, topic: "Privacy Paradigms", correct: "D",
  q: "Data collected for one stated purpose may not be processed for a different, incompatible purpose. Which GDPR principle is this?",
  options: { A: "Data minimisation", B: "Storage limitation", C: "Accuracy", D: "Purpose limitation" } },

{ id: 158, topic: "Cryptography", correct: "B",
  q: "Cloud data is destroyed by deleting the encryption keys that protect it, rendering the ciphertext unrecoverable while the underlying storage can continue to be reused. Which method is this?",
  options: { A: "Physical destruction", B: "Cryptographic erasure", C: "Secure wiping", D: "Randomisation" } },

{ id: 159, topic: "Cryptography", correct: "D",
  q: "An organisation generates a deterministic surrogate value to replace a sensitive identifier in a downstream system; the mapping is held in a secure vault. Which technique is this?",
  options: { A: "Hashing", B: "Encryption", C: "Encoding", D: "Tokenisation" } },

{ id: 160, topic: "Privacy Governance", correct: "A",
  q: "Before deployment of an AI handling sensitive applicant data, the organisation must produce an auditable record evaluating privacy risks, mitigations, and data handling. Which formally recognised activity provides this?",
  options: { A: "Privacy Impact Assessment (PIA)", B: "Generic risk register", C: "Privacy Risk Identification only", D: "Algorithmic Impact Assessment" } },

{ id: 161, topic: "Privacy Governance", correct: "B",
  q: "A formal assessment of a high-risk automated decision-making system that evaluates impact on rights and freedoms of natural persons, beyond pure security or operational risk, is called a...",
  options: { A: "Threat model", B: "Algorithmic Impact Assessment (AIA)", C: "Risk-Control Self-Assessment", D: "Service Organisation Control 2" } },

{ id: 162, topic: "Trust & Safety", correct: "C",
  q: "An automated abuse classifier flags a low-confidence, ambiguous query with no prior history. The tier should route to moderator review and escalation to T&S rather than dismissing or referring to law enforcement. Which tier is this?",
  options: { A: "T0 — dismiss", B: "T1 — automated user notice", C: "T2 — moderator review + escalate to T&S", D: "T3 — law enforcement referral" } },

// ===== Module 10 · AI Incident Response and BCP =====

{ id: 163, topic: "IR Phases", correct: "A",
  q: "An organisation creates playbooks, sets up on-call schedules, runs tabletop exercises, and pre-positions tools before any incident occurs. Which IR phase is this?",
  options: { A: "Preparation", B: "Detection", C: "Containment", D: "Recovery" } },

{ id: 164, topic: "IR Phases", correct: "B",
  q: "Centralised observability tooling flags an anomaly and the response team is paged. Which IR phase is this?",
  options: { A: "Preparation", B: "Detection & analysis", C: "Containment", D: "Eradication" } },

{ id: 165, topic: "IR Phases", correct: "C",
  q: "After detection, the team isolates the affected services, blocks the malicious account, and degrades the impacted feature to limit further harm. Which IR phase is this?",
  options: { A: "Detection", B: "Preparation", C: "Containment", D: "Recovery" } },

{ id: 166, topic: "IR Phases", correct: "D",
  q: "After containment, the team replaces vulnerable runtime libraries, hardens runtime configurations, and removes unsafe execution paths. Which IR phase is this?",
  options: { A: "Detection", B: "Containment", C: "Preparation", D: "Eradication" } },

{ id: 167, topic: "IR Phases", correct: "A",
  q: "Once eradication is complete, the team restores service from clean baselines, validates behaviour, and gradually returns to full production. Which IR phase is this?",
  options: { A: "Recovery", B: "Detection", C: "Eradication", D: "Preparation" } },

{ id: 168, topic: "IR Phases", correct: "B",
  q: "After service is restored, the team conducts a blameless retrospective, documents what worked and what failed, and updates playbooks and policies. Which IR phase is this?",
  options: { A: "Containment", B: "Lessons learned (post-incident review)", C: "Preparation", D: "Eradication" } },

{ id: 169, topic: "IR Metrics", correct: "A",
  q: "Time elapsed from the first observable sign of abnormal behaviour to the moment the issue is formally identified and logged is which metric?",
  options: { A: "Mean Time to Detect (MTTD)", B: "Mean Time to Respond (MTTR)", C: "Mean Time to Contain (MTTC)", D: "Mean Time to Recover" } },

{ id: 170, topic: "IR Metrics", correct: "B",
  q: "Time elapsed from identification to the moment the immediate blast radius is bounded and harm stops growing is which metric?",
  options: { A: "MTTD", B: "Mean Time to Contain (MTTC)", C: "Mean Time to Recover", D: "Mean Time to Eradicate" } },

{ id: 171, topic: "IR Metrics", correct: "D",
  q: "Time elapsed from the start of the incident to full restoration of normal service is which metric?",
  options: { A: "MTTD", B: "MTTC", C: "MTTR-respond", D: "MTTR (Mean Time to Recover)" } },

{ id: 172, topic: "Severity", correct: "A",
  q: "An AI failure causes customer-impacting harm, regulatory exposure, and press attention all at once. Which severity tier is this?",
  options: { A: "P1 / Critical", B: "P2 / High", C: "P3 / Medium", D: "P4 / Low" } },

{ id: 173, topic: "Severity", correct: "B",
  q: "An incident with risk of physical harm to a worker, where no one was injured but unsafe AI behaviour was observed, is best classified as...",
  options: { A: "Low severity", B: "High severity", C: "Critical severity", D: "Informational only" } },

{ id: 174, topic: "Escalation", correct: "C",
  q: "Incidents progressively move through levels — from on-call responders to senior leadership — depending on severity, with executives approving risk acceptance and external comms on critical incidents. What is this called?",
  options: { A: "Communication matrix", B: "Notification strategy", C: "Escalation hierarchy", D: "Regulatory engagement" } },

{ id: 175, topic: "BCP", correct: "D",
  q: "A CRO identifies which AI models support core financial functions and estimates the operational, financial, and regulatory impact if they were unavailable. The result is used to prioritise recovery. Which process is this?",
  options: { A: "Disaster recovery planning", B: "Post-incident review", C: "Incident response lifecycle", D: "Business Impact Analysis (BIA)" } },

{ id: 176, topic: "BCP", correct: "A",
  q: "The maximum tolerable time a service can be down before unacceptable consequences occur is which metric?",
  options: { A: "RTO (Recovery Time Objective)", B: "RPO (Recovery Point Objective)", C: "MTBF", D: "MTTR" } },

{ id: 177, topic: "BCP", correct: "B",
  q: "The maximum acceptable amount of data loss measured in time (e.g. 15 minutes of transactions) is which metric?",
  options: { A: "RTO", B: "RPO (Recovery Point Objective)", C: "MTTD", D: "MTTC" } },

{ id: 178, topic: "BCP", correct: "C",
  q: "A disaster-recovery site is fully synchronised with production and can take over within minutes of failover. Which site type is this?",
  options: { A: "Cold site", B: "Warm site", C: "Hot site", D: "Mobile site" } },

{ id: 179, topic: "BCP", correct: "A",
  q: "A disaster-recovery site has hardware and basic connectivity but minimal data; bringing it online requires restoring from backups, taking hours. Which site type is this?",
  options: { A: "Cold site", B: "Warm site", C: "Hot site", D: "Active-active cluster" } },

{ id: 180, topic: "Crisis Mgmt", correct: "B",
  q: "A cascading AI failure simultaneously affects multiple critical-infrastructure systems with public safety implications. The most appropriate response is to...",
  options: { A: "Shut down all AI systems permanently", B: "Establish multi-domain crisis management with dependency mapping, circuit breakers, coordinated response, and public dashboards", C: "Treat each system failure independently", D: "Pause investigations until lawyers are engaged" } },

{ id: 181, topic: "Recovery", correct: "C",
  q: "After fixing an AI model post-incident, the team runs the updated model on live inputs without letting its outputs affect business decisions, monitoring behaviour before full re-activation. Which strategy is this?",
  options: { A: "Big-bang deployment", B: "Canary rollout", C: "Shadow mode", D: "Blue-green deployment" } },

{ id: 182, topic: "Rollout", correct: "A",
  q: "A new model version is exposed to a small, hidden 5% of users while the remaining 95% continue on the existing version. If the small slice is healthy, exposure expands. Which strategy is this?",
  options: { A: "Canary rollout", B: "Big-bang deployment", C: "Shadow mode", D: "Offline evaluation only" } },

{ id: 183, topic: "Rollout", correct: "D",
  q: "Two identical production environments — 'blue' (live) and 'green' (new version) — are kept in parallel; traffic is cut over to 'green' in one step with the ability to flip back. Which strategy is this?",
  options: { A: "Canary rollout", B: "Big-bang deployment", C: "Shadow mode", D: "Blue-green deployment" } },

// ===== Module 11 · AI Assurance, Testing, and Auditing =====

{ id: 184, topic: "Audit Evidence", correct: "D",
  q: "A regulator asks an auditor to evaluate whether the system's internal decision logic can be examined, whether assumptions and constraints are explicitly defined, and whether changes to those elements are subject to formal oversight. The review explicitly excludes accuracy validation. Which evidence category is this?",
  options: { A: "Performance evidence", B: "Compliance evidence", C: "Model evidence", D: "Algorithm evidence" } },

{ id: 185, topic: "Audit Evidence", correct: "A",
  q: "An auditor examines training-data quality, eval-set composition, and statistical performance results. Which evidence category is this?",
  options: { A: "Performance evidence", B: "Algorithm evidence", C: "Governance evidence", D: "Compliance evidence" } },

{ id: 186, topic: "Audit Evidence", correct: "B",
  q: "An auditor reviews the model architecture, training pipeline, and reproducibility artefacts. Which evidence category is this?",
  options: { A: "Algorithm evidence", B: "Model evidence", C: "Performance evidence", D: "Operational evidence" } },

{ id: 187, topic: "Audit Evidence", correct: "C",
  q: "An auditor reviews how the AI maps to regulatory and internal-policy requirements — including DPIAs, conformity assessments, and policy sign-offs. Which evidence category is this?",
  options: { A: "Algorithm evidence", B: "Model evidence", C: "Compliance evidence", D: "Performance evidence" } },

{ id: 188, topic: "Audit Types", correct: "A",
  q: "An internal team reviews controls and processes against the organisation's own policies and standards, reporting to executive leadership. Which audit type is this?",
  options: { A: "Internal audit", B: "External audit", C: "Regulatory audit", D: "Certification audit" } },

{ id: 189, topic: "Audit Types", correct: "B",
  q: "An independent third-party firm reviews AI controls and issues an opinion suitable for customer assurance reports (e.g. SOC 2). Which audit type is this?",
  options: { A: "Internal audit", B: "External audit / third-party assurance", C: "Regulatory audit", D: "Penetration test" } },

{ id: 190, topic: "Continuous Monitoring", correct: "C",
  q: "A responsible-AI dashboard for a production LLM must include which four KPIs at minimum, distinct from finance and SRE dashboards?",
  options: { A: "Token cost, latency, uptime, user rating", B: "Cost, churn, NPS, MAU", C: "Drift, fairness, latency, hallucination rate", D: "CTR, conversion, retention, ARPU" } },

{ id: 191, topic: "Red Teaming", correct: "A",
  q: "An offensive-security team simulates adversaries — jailbreaks, prompt injection, data exfiltration, tool abuse — to identify weaknesses before real attackers do. Which team is this?",
  options: { A: "Red team", B: "Blue team", C: "Purple team", D: "White team" } },

{ id: 192, topic: "Red Teaming", correct: "D",
  q: "Red and blue teams work together in real time — red attacks, blue defends, and both share observations to improve detections — in which arrangement?",
  options: { A: "Pen test", B: "Bug bounty", C: "Tabletop", D: "Purple team" } },

{ id: 193, topic: "Red Team Coverage", correct: "C",
  q: "A red-team report covers toxicity, narrow PII-from-prompt, and refusal robustness. The most material missing test classes are most likely...",
  options: { A: "Branding and UX testing", B: "Load testing and uptime checks", C: "Jailbreak, training-data extraction, tool / agent abuse, indirect prompt injection", D: "Spam-folder coverage" } },

{ id: 194, topic: "Documentation", correct: "A",
  q: "A formal artefact documents the characteristics and stewardship of data assets themselves — origin, curation process, constraints, and known limitations — independent of any model or decision use. What is this?",
  options: { A: "Datasheets for datasets", B: "Model cards", C: "Decision logs", D: "Transparency reports" } },

{ id: 195, topic: "Documentation", correct: "B",
  q: "A formal artefact published with a deployed system describes the model's architecture, intended use, factors, evaluation, ethical considerations, limitations, and license. What is this?",
  options: { A: "Datasheet", B: "Model card", C: "Decision log", D: "AIBOM" } },

{ id: 196, topic: "Documentation", correct: "D",
  q: "An auditor asks for a record showing every individual model decision, with timestamp, inputs, outputs, model version, and human overrides for high-impact cases. What artefact is this?",
  options: { A: "Model card", B: "Datasheet", C: "Transparency report", D: "Decision log" } },

{ id: 197, topic: "Right to Explanation", correct: "B",
  q: "A regulator requires that adverse automated decisions are defensible to applicants and regulators, independent of the specific technique used to derive explanations. Which governance concept is this?",
  options: { A: "Feature attribution", B: "Right to explanation", C: "User consent", D: "Data localisation" } },

{ id: 198, topic: "Versioning", correct: "C",
  q: "An auditor traces which dataset trained a specific model, when it was last updated, who approved the change, and the supporting documentation, demonstrating accountability for historic decisions. Which asset-management requirement is this?",
  options: { A: "Access control", B: "Lifecycle reviews", C: "Versioning and traceability", D: "Decommissioning" } },

{ id: 199, topic: "Assurance Capability", correct: "C",
  q: "A bank's risk-scoring model meets accuracy thresholds but the team can't describe how individual inputs drove a specific customer score for non-technical reviewers. Which assurance capability addresses this gap?",
  options: { A: "Differential privacy", B: "Drift detection", C: "Explainable AI (XAI)", D: "Synthetic data generation" } },

{ id: 200, topic: "Assurance Capability", correct: "A",
  q: "A multinational telco needs continuous observation of production AI behaviour, deviation detection, and timely investigation before issues escalate. Which AI assurance capability is being applied?",
  options: { A: "Model monitoring and drift detection", B: "Explainability assessment", C: "Privacy-preserving evaluation", D: "Automated testing" } },

];
