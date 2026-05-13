// CRAGE Practice Exam · Set 4 · 200 questions across the eleven CRAGE
// modules with fresh scenarios. Same conceptual ground as Sets 1–3 plus
// extra coverage of agentic AI risks, model evaluation metrics, RAG
// failure modes, sustainability/green AI, AI accessibility, model-card
// vs system-card distinctions, AI Liability Directive, and US AI EO.
window.QUESTIONS_SET4 = [

// ===== Module 1 · AI Foundations =====

{ id: 1, topic: "ML Paradigm", correct: "C",
  q: "An e-commerce team trains a fraud-flag model on transactions tagged 'fraud' or 'legit'. Which paradigm is this?",
  options: { A: "Reinforcement", B: "Unsupervised", C: "Supervised", D: "Self-supervised" } },

{ id: 2, topic: "ML Paradigm", correct: "D",
  q: "An LLM team trains by predicting the next token across vast unlabelled text, with the data structure providing supervision. Which paradigm is this?",
  options: { A: "Supervised", B: "Reinforcement", C: "Unsupervised", D: "Self-supervised" } },

{ id: 3, topic: "ML Paradigm", correct: "B",
  q: "A small labelled dataset is augmented with a much larger unlabelled corpus to improve model performance. Which paradigm is this?",
  options: { A: "Reinforcement", B: "Semi-supervised", C: "Unsupervised", D: "Self-supervised" } },

{ id: 4, topic: "Architectures", correct: "C",
  q: "A team builds an architecture to translate sentences in parallel using self-attention, capturing long-range dependencies. Which architecture fits?",
  options: { A: "CNN", B: "RNN", C: "Transformer", D: "RBF" } },

{ id: 5, topic: "Architectures", correct: "A",
  q: "A team builds an architecture optimised for hand-written-digit recognition using local convolutions and pooling. Which architecture fits?",
  options: { A: "CNN", B: "Transformer", C: "Autoencoder", D: "GAN" } },

{ id: 6, topic: "Architectures", correct: "D",
  q: "A team needs a generator and discriminator trained against each other to produce realistic synthetic faces. Which architecture fits?",
  options: { A: "CNN", B: "RNN", C: "Autoencoder", D: "GAN" } },

{ id: 7, topic: "Generative AI", correct: "B",
  q: "A customer-support bot retrieves the top-3 internal docs from a vector index and includes them in the LLM prompt to ground answers. Which technique is this?",
  options: { A: "Fine-tuning", B: "Retrieval-Augmented Generation (RAG)", C: "Pre-training", D: "Distillation" } },

{ id: 8, topic: "Generative AI", correct: "A",
  q: "A team adapts a 70B base model by training only small low-rank adapter matrices, freezing base weights. Which technique is this?",
  options: { A: "LoRA (Low-Rank Adaptation)", B: "Quantisation", C: "RAG", D: "Pruning" } },

{ id: 9, topic: "Generative AI", correct: "C",
  q: "An LLM is aligned by collecting human preference rankings and training a reward model that further tunes the LLM via policy optimisation. Which technique is this?",
  options: { A: "Self-supervised pre-training", B: "Knowledge distillation", C: "RLHF", D: "RAG" } },

{ id: 10, topic: "Hardware", correct: "B",
  q: "Custom Google silicon optimised specifically for tensor operations in neural-network workloads is best classified as a...",
  options: { A: "GPU", B: "TPU", C: "FPGA", D: "Mainframe CPU" } },

{ id: 11, topic: "Hardware", correct: "C",
  q: "A reconfigurable hardware accelerator that can be reprogrammed for different ML workloads after deployment is a...",
  options: { A: "GPU", B: "TPU", C: "FPGA", D: "ASIC" } },

{ id: 12, topic: "Deployment", correct: "D",
  q: "A wearable health device runs an arrhythmia model directly on-device with no round-trip to the cloud. Which deployment pattern is this?",
  options: { A: "Cloud inference", B: "Federated learning", C: "Serverless inference", D: "Edge / on-device" } },

{ id: 13, topic: "AI Stack", correct: "B",
  q: "A vendor sells an embedding service plus a managed vector index used to build RAG. Which AI stack layer is this?",
  options: { A: "Foundation model", B: "Retrieval (RAG) layer", C: "Fine-tuning service", D: "MLOps" } },

{ id: 14, topic: "AI Stack", correct: "A",
  q: "A vendor offers a service that helps assemble multi-step LLM agent workflows with tool calls, planners, and memory. Which AI stack layer is this?",
  options: { A: "Agent / orchestration layer", B: "Foundation model", C: "Retrieval", D: "Hardware" } },

{ id: 15, topic: "Foundation Models", correct: "C",
  q: "A model 'pre-trained on broad data at scale, adaptable to many downstream tasks via fine-tuning or prompting' is best called a...",
  options: { A: "Edge model", B: "Specialist model", C: "Foundation model", D: "Federated model" } },

{ id: 16, topic: "Documentation", correct: "B",
  q: "Before deploying an in-house LLM, the team publishes a structured artefact covering architecture, intended use, factors, metrics, training data, evaluation data, ethical considerations, limitations, license. What is this?",
  options: { A: "Datasheet", B: "Model card", C: "Decision log", D: "AIBOM" } },

{ id: 17, topic: "Embeddings", correct: "A",
  q: "A vector representation that places semantically similar texts near each other in a shared space is called a...",
  options: { A: "Embedding", B: "Token", C: "Vocabulary", D: "Manifest" } },

{ id: 18, topic: "Tokenization", correct: "D",
  q: "A subword tokeniser breaks 'tokenization' into 'token', '##ization' to handle out-of-vocabulary words. This technique is broadly called...",
  options: { A: "Stemming", B: "Lemmatization", C: "Stop-word removal", D: "Subword tokenisation (BPE / WordPiece)" } },

// ===== Module 2 · Ethics =====

{ id: 19, topic: "OECD Principles", correct: "A",
  q: "Which OECD principle requires that AI promote inclusive growth, sustainable development, and well-being while reducing inequality?",
  options: { A: "Inclusive growth, sustainable development and well-being", B: "Robustness, security and safety", C: "Accountability", D: "Transparency and explainability" } },

{ id: 20, topic: "OECD Principles", correct: "C",
  q: "Which OECD principle requires that those who design, deploy or operate AI be answerable for proper functioning consistent with the other principles?",
  options: { A: "Transparency", B: "Inclusive growth", C: "Accountability", D: "Robustness" } },

{ id: 21, topic: "OECD Principles", correct: "D",
  q: "Which OECD principle requires AI systems to function in a robust, secure and safe way throughout their lifecycle, with risks continually managed?",
  options: { A: "Inclusive growth", B: "Accountability", C: "Transparency", D: "Robustness, security and safety" } },

{ id: 22, topic: "Fairness Metrics", correct: "B",
  q: "Across groups, the predicted positive rate is equal. Which fairness metric is this?",
  options: { A: "Equalized odds", B: "Statistical parity (demographic parity)", C: "Calibration", D: "Equality of opportunity" } },

{ id: 23, topic: "Fairness Metrics", correct: "A",
  q: "Among truly positive cases, recall is equal across groups. Which fairness metric is this?",
  options: { A: "Equality of opportunity", B: "Statistical parity", C: "Calibration", D: "Predictive parity" } },

{ id: 24, topic: "Fairness Metrics", correct: "C",
  q: "True-positive AND false-positive rates are equal across groups. Which fairness metric is this?",
  options: { A: "Statistical parity", B: "Calibration", C: "Equalized odds", D: "Counterfactual fairness" } },

{ id: 25, topic: "Fairness Metrics", correct: "D",
  q: "At any predicted score, actual outcome rates match across groups. Which fairness metric is this?",
  options: { A: "Statistical parity", B: "Equalized odds", C: "Equality of opportunity", D: "Calibration" } },

{ id: 26, topic: "Bias Types", correct: "C",
  q: "Training data over-represents one demographic, leading to underperformance on minorities. Which bias type is this?",
  options: { A: "Algorithmic bias", B: "Historical bias", C: "Sampling / representation bias", D: "Confirmation bias" } },

{ id: 27, topic: "Bias Types", correct: "B",
  q: "Historical lending discrimination is reproduced because the training data faithfully reflects past discriminatory decisions. Which bias type is this?",
  options: { A: "Algorithmic bias", B: "Historical / societal bias", C: "Sampling bias", D: "Label bias" } },

{ id: 28, topic: "Bias Types", correct: "A",
  q: "Optimisation favours certain feature combinations that produce disparate impact, even with balanced inputs. Which bias type is this?",
  options: { A: "Algorithmic bias", B: "Data bias", C: "Sampling bias", D: "Label noise" } },

{ id: 29, topic: "Bias Types", correct: "D",
  q: "Annotators applied different criteria for similar edge cases, producing inconsistent labels. Which bias type is this?",
  options: { A: "Algorithmic bias", B: "Sampling bias", C: "Historical bias", D: "Label bias" } },

{ id: 30, topic: "Trustworthy AI", correct: "C",
  q: "Which characteristic in NIST's trustworthy-AI list refers to 'fair with harmful bias managed'?",
  options: { A: "Privacy-enhanced", B: "Accountable", C: "Fair (with harmful bias managed)", D: "Explainable" } },

{ id: 31, topic: "Human Oversight", correct: "B",
  q: "EU AI Act obligation that high-risk AI be designed so natural persons can effectively oversee it, including ability to intervene and stop it, is called...",
  options: { A: "Conformity assessment", B: "Human oversight", C: "Post-market monitoring", D: "Risk management system" } },

{ id: 32, topic: "Explainability", correct: "C",
  q: "An XAI technique generates a local linear approximation around a single prediction to identify feature importance for that single output. Which is this?",
  options: { A: "SHAP", B: "Anchors", C: "LIME", D: "Counterfactual" } },

{ id: 33, topic: "Explainability", correct: "A",
  q: "An XAI technique attributes the prediction to features by computing each feature's marginal contribution across all coalitions. Which is this?",
  options: { A: "SHAP", B: "LIME", C: "Saliency", D: "Anchors" } },

{ id: 34, topic: "Explainability", correct: "B",
  q: "An XAI technique provides 'what if' explanations: 'if income were £3k higher, the loan would have been approved.' Which is this?",
  options: { A: "LIME", B: "Counterfactual explanation", C: "SHAP", D: "Anchors" } },

{ id: 35, topic: "Ethics Charter", correct: "B",
  q: "An organisation publishes a single artefact stating its responsible-AI principles, scope, decision authority, and escalation. What is this?",
  options: { A: "Model card", B: "AI ethics charter", C: "DPIA", D: "RACI" } },

{ id: 36, topic: "Concerns", correct: "D",
  q: "Workforce displacement and skill mismatches caused by AI automation across years are best classified as which type of AI concern?",
  options: { A: "Privacy concern", B: "Ethical concern", C: "Long-term concern", D: "Societal concern" } },

// ===== Module 3 · Strategy =====

{ id: 37, topic: "Sourcing", correct: "B",
  q: "An AI use case requires unique proprietary data, deep domain expertise, and produces a strategic competitive moat. Which sourcing strategy fits?",
  options: { A: "Buy", B: "Build", C: "Partner", D: "Outsource everything" } },

{ id: 38, topic: "Sourcing", correct: "A",
  q: "A commodity AI use case (general spam filtering) with a tight delivery window and no strategic differentiation is best handled by which sourcing strategy?",
  options: { A: "Buy", B: "Build", C: "Open-source roll-your-own", D: "DIY" } },

{ id: 39, topic: "Sourcing", correct: "C",
  q: "A team needs an AI that combines a vendor's mature pretrained model with the org's proprietary data; both parties contribute IP. Which sourcing strategy fits?",
  options: { A: "Buy", B: "Build", C: "Partner / co-develop", D: "Outsource everything" } },

{ id: 40, topic: "Business Case", correct: "D",
  q: "An AI proposal is reviewed for whether expected value exceeds total lifecycle cost. Which business-case element is being applied?",
  options: { A: "Strategic Alignment", B: "Risk Assessment", C: "Implementation Roadmap", D: "ROI / NPV Analysis" } },

{ id: 41, topic: "Business Case", correct: "A",
  q: "An AI proposal is reviewed for whether it advances the org's published strategy and risk appetite. Which business-case element is being applied?",
  options: { A: "Strategic Alignment", B: "ROI Analysis", C: "Risk Assessment", D: "Implementation Roadmap" } },

{ id: 42, topic: "Cost Mgmt", correct: "B",
  q: "Before scaling an AI from pilot to enterprise, the finance team enumerates every recurring cost across compute, storage, fine-tuning, monitoring, retraining, and vendor fees. Which step is this?",
  options: { A: "Budget allocation", B: "Cost component identification", C: "Spend prioritisation", D: "Cost-benefit analysis" } },

{ id: 43, topic: "Capability Gap", correct: "C",
  q: "Six AI initiatives are in flight, no shared platform exists, drift went undetected for weeks. Which next hire delivers most leverage?",
  options: { A: "Junior data scientist", B: "Prompt engineer", C: "ML platform lead", D: "Foundation-model researcher" } },

{ id: 44, topic: "Pilot Evaluation", correct: "A",
  q: "Pilot quantitative metrics meet the threshold but operators report friction in everyday use. Before scaling, leadership concludes the system needs more iteration. Which interpretation is this?",
  options: { A: "Refinement needs", B: "Scale recommendation", C: "Fail-fast decision", D: "Success indicators" } },

{ id: 45, topic: "Use Case Prioritisation", correct: "D",
  q: "Initiatives are placed on a 2D grid of business value vs implementation risk, then sequenced by quadrant. Which framework is this?",
  options: { A: "RACI", B: "MoSCoW", C: "FMEA", D: "Value-Risk matrix" } },

{ id: 46, topic: "Strategy", correct: "A",
  q: "An exec board approves an org-wide document defining priorities, alignment, governance, and long-term direction for AI adoption. Which decision category is this?",
  options: { A: "AI strategy", B: "AI project plan", C: "AI pilot list", D: "AI hiring plan" } },

{ id: 47, topic: "Maturity", correct: "B",
  q: "An AI assessment characterises the org along stages — exploratory, experimental, formalised, optimised, transformational. What kind of model is this?",
  options: { A: "Risk register", B: "AI maturity model", C: "Compliance framework", D: "Cost model" } },

{ id: 48, topic: "Sourcing Decision", correct: "D",
  q: "An organisation adopts a build-buy-partner decision framework. The most foundational factor is...",
  options: { A: "Vendor logo recognisability", B: "Engineer language preferences", C: "Office snack quality", D: "Strategic value, time-to-market, capability fit, and risk profile" } },

// ===== Module 4 · Governance =====

{ id: 49, topic: "NIST AI RMF", correct: "B",
  q: "Which NIST AI RMF function focuses on enumerating context, intended use, foreseeable misuse, and impact?",
  options: { A: "GOVERN", B: "MAP", C: "MEASURE", D: "MANAGE" } },

{ id: 50, topic: "NIST AI RMF", correct: "C",
  q: "Which NIST AI RMF function focuses on quantitative and qualitative metrics, evals, monitoring, and audit?",
  options: { A: "GOVERN", B: "MAP", C: "MEASURE", D: "MANAGE" } },

{ id: 51, topic: "NIST AI RMF", correct: "A",
  q: "Which NIST AI RMF function cuts across the others and addresses culture, policy, accountability, and integration of AI risk into the organisation?",
  options: { A: "GOVERN", B: "MAP", C: "MEASURE", D: "MANAGE" } },

{ id: 52, topic: "NIST AI RMF", correct: "D",
  q: "Which NIST AI RMF function focuses on prioritising, responding to, and continuously improving identified risks throughout the AI lifecycle?",
  options: { A: "GOVERN", B: "MAP", C: "MEASURE", D: "MANAGE" } },

{ id: 53, topic: "ISO/IEC 42001", correct: "C",
  q: "Which ISO/IEC 42001 clause requires an AI system impact assessment that addresses effects on individuals, groups, and society?",
  options: { A: "Clause 4 — Context", B: "Clause 6.1.2 — Risk Assessment", C: "Clause 8.3 — AI System Impact Assessment", D: "Clause 9.2 — Internal Audit" } },

{ id: 54, topic: "ISO/IEC 42001", correct: "B",
  q: "Which ISO/IEC 42001 clause requires the org to define internal/external issues, interested parties, and AIMS scope?",
  options: { A: "Clause 5", B: "Clause 4 — Context", C: "Clause 6", D: "Clause 8" } },

{ id: 55, topic: "ISO/IEC 42001", correct: "D",
  q: "Which ISO/IEC 42001 clause covers internal audit of the AI Management System?",
  options: { A: "Clause 4", B: "Clause 6", C: "Clause 8", D: "Clause 9.2 — Internal Audit" } },

{ id: 56, topic: "ISO Standards", correct: "C",
  q: "Which ISO standard provides AI-specific risk management guidance that complements ISO 31000?",
  options: { A: "ISO 27001", B: "ISO 9001", C: "ISO/IEC 23894", D: "ISO 21434" } },

{ id: 57, topic: "Governance Models", correct: "A",
  q: "A regulator expects clear lines of authority spanning all business units, with consistent enterprise enforcement of AI risk decisions. Which governance model fits?",
  options: { A: "Centralized", B: "Federated", C: "DAO", D: "Outsourced" } },

{ id: 58, topic: "Governance Models", correct: "B",
  q: "A multinational with diverse local regulatory contexts wants each business line to retain operational discretion while a central body sets common standards. Which model fits?",
  options: { A: "Centralized", B: "Federated", C: "Hybrid", D: "DAO" } },

{ id: 59, topic: "Governance Models", correct: "C",
  q: "An organisation combines a central AI governance office (policy) with local ML teams (execution within those policies). Which model is this?",
  options: { A: "Centralized", B: "Federated", C: "Hybrid", D: "DAO" } },

{ id: 60, topic: "Roles", correct: "A",
  q: "The single accountable executive for the entire AI portfolio — strategy, risk, and external positioning — is most appropriately the...",
  options: { A: "Chief AI Officer (CAIO)", B: "CMO", C: "VP Engineering", D: "Chief Architect" } },

{ id: 61, topic: "Roles", correct: "C",
  q: "The role most directly responsible for evaluating personal-data processing, advising on DPIAs, and engaging the data-protection authority is...",
  options: { A: "CISO", B: "CFO", C: "Data Protection Officer", D: "Engineering Manager" } },

{ id: 62, topic: "Roles", correct: "B",
  q: "Continuity and internal coherence of model components across releases — version control, integrity, reproducibility — belongs to which role?",
  options: { A: "Business owner", B: "Model custodian", C: "Marketing lead", D: "AIOps junior" } },

{ id: 63, topic: "Governance Bodies", correct: "D",
  q: "Strategic risk-appetite decisions need translation into coordinated, organisation-wide guidance applied consistently before work reaches execution. Which body fits?",
  options: { A: "Working group", B: "Ethics panel", C: "Engineering guild", D: "Steering committee" } },

{ id: 64, topic: "Governance Bodies", correct: "A",
  q: "An internal body evaluates AI initiatives early, arbitrates trade-offs between innovation and ethics, and gives organisation-wide ethical guidance. Which body fits?",
  options: { A: "Company AI Ethics Board", B: "Risk committee", C: "Audit committee", D: "Steering committee" } },

{ id: 65, topic: "RACI", correct: "B",
  q: "Why must exactly one role be marked 'A' in a RACI for a high-risk AI launch?",
  options: { A: "RACI doesn't constrain A's", B: "Accountability is singular; two A's mean nobody is accountable", C: "Two A's let blame be shared", D: "The 'A' is optional" } },

{ id: 66, topic: "EU AI Office", correct: "B",
  q: "Under the EU AI Act, which body within the European Commission is tasked with overseeing implementation, especially for general-purpose AI models?",
  options: { A: "European Data Protection Board", B: "European AI Office", C: "ENISA", D: "European Court of Justice" } },

// ===== Module 5 · Compliance =====

{ id: 67, topic: "EU AI Act Tiers", correct: "C",
  q: "An AI chatbot for EU consumers must clearly disclose that users are interacting with AI. Under the EU AI Act, which tier applies?",
  options: { A: "Prohibited", B: "High-risk", C: "Limited-risk (transparency obligations)", D: "Minimal-risk" } },

{ id: 68, topic: "EU AI Act Tiers", correct: "A",
  q: "A municipality wants real-time biometric identification for general law-enforcement surveillance in public. Under the EU AI Act, which tier most likely applies?",
  options: { A: "Prohibited", B: "High-risk", C: "Limited-risk", D: "Minimal-risk" } },

{ id: 69, topic: "EU AI Act Tiers", correct: "B",
  q: "An EU bank deploys AI for creditworthiness assessment of natural persons. Under the EU AI Act, which tier applies?",
  options: { A: "Prohibited", B: "High-risk (Annex III — credit-scoring)", C: "Limited-risk", D: "Minimal-risk" } },

{ id: 70, topic: "EU AI Act Tiers", correct: "D",
  q: "An AI-powered video-game NPC adapts based on player input. Under the EU AI Act, which tier applies?",
  options: { A: "Prohibited", B: "High-risk", C: "Limited-risk", D: "Minimal-risk" } },

{ id: 71, topic: "EU AI Act Obligations", correct: "C",
  q: "Before placing a high-risk AI system on the EU market, providers must complete which formal procedure?",
  options: { A: "Penetration test", B: "OECD self-assessment", C: "Conformity assessment + EU declaration of conformity", D: "Customer survey" } },

{ id: 72, topic: "GDPR", correct: "B",
  q: "Which GDPR article governs solely-automated decisions producing legal or similarly significant effects, granting the data subject a right to human intervention?",
  options: { A: "Article 5", B: "Article 22", C: "Article 17", D: "Article 33" } },

{ id: 73, topic: "GDPR", correct: "A",
  q: "Which GDPR article requires a Data Protection Impact Assessment when processing is likely to result in a high risk to rights and freedoms?",
  options: { A: "Article 35", B: "Article 22", C: "Article 25", D: "Article 6" } },

{ id: 74, topic: "GDPR", correct: "C",
  q: "Which GDPR principle requires personal data to be collected for specified, explicit and legitimate purposes and not further processed in incompatible ways?",
  options: { A: "Lawfulness", B: "Data minimisation", C: "Purpose limitation", D: "Accuracy" } },

{ id: 75, topic: "GDPR", correct: "D",
  q: "Which GDPR right allows a data subject to obtain transmission of their data in a structured machine-readable format and transmit it to another controller?",
  options: { A: "Right to access", B: "Right to erasure", C: "Right to object", D: "Right to data portability" } },

{ id: 76, topic: "GDPR", correct: "A",
  q: "Article 25 of the GDPR codifies which two operational privacy principles?",
  options: { A: "Data protection by design and by default", B: "Lawfulness and accuracy", C: "Storage limitation and accuracy", D: "Consent and legitimate interest" } },

{ id: 77, topic: "US Sectoral", correct: "B",
  q: "A US healthcare provider engages an AI vendor that will receive PHI. Which contract type is required by HIPAA?",
  options: { A: "DPA", B: "Business Associate Agreement (BAA)", C: "MSA only", D: "SOC 2" } },

{ id: 78, topic: "US Sectoral", correct: "C",
  q: "The Federal Reserve's SR 11-7 supervisory guidance on model risk management requires which combination?",
  options: { A: "Annual penetration test only", B: "External marketing reviews", C: "Effective challenge, governance, development controls, validation, and ongoing monitoring", D: "Quarterly board surveys" } },

{ id: 79, topic: "US Sectoral", correct: "D",
  q: "An adverse-action notice with specific reasons must be provided to a US consumer when an AI denies a credit application. Which law most directly governs?",
  options: { A: "TCPA", B: "GLBA", C: "HIPAA", D: "FCRA" } },

{ id: 80, topic: "US Sectoral", correct: "A",
  q: "AI-generated voices in outbound calls to US consumers are regulated as artificial or prerecorded robocalls by which regulator?",
  options: { A: "FCC", B: "SEC", C: "FAA", D: "FTC alone" } },

{ id: 81, topic: "US Sectoral", correct: "B",
  q: "An AI tool intended for medical purposes (diagnosis, prevention, monitoring) without being part of a hardware medical device falls under which framework?",
  options: { A: "HIPAA only", B: "FDA Software as a Medical Device (SaMD)", C: "OSHA", D: "21 CFR 11" } },

{ id: 82, topic: "International", correct: "C",
  q: "A consumer chatbot operated by a Chinese subsidiary processes data of users in mainland China. Which framework most directly applies?",
  options: { A: "GDPR", B: "CCPA", C: "PIPL", D: "DPDP Act" } },

{ id: 83, topic: "International", correct: "D",
  q: "An AI vendor serving customers across Brazil must comply primarily with which national data-protection law?",
  options: { A: "GDPR", B: "PIPL", C: "POPIA", D: "LGPD" } },

{ id: 84, topic: "International", correct: "B",
  q: "An AI vendor serving consumers in India must primarily comply with which national personal-data protection law?",
  options: { A: "GDPR", B: "DPDP Act 2023", C: "PIPL", D: "LGPD" } },

{ id: 85, topic: "EU NIS2", correct: "A",
  q: "A critical-infrastructure operator in the EU is subject to incident reporting and risk management obligations under which directive — distinct from the EU AI Act but relevant to AI-supported essential services?",
  options: { A: "NIS2 Directive", B: "GDPR", C: "ePrivacy", D: "PSD2" } },

{ id: 86, topic: "EU DORA", correct: "B",
  q: "An EU financial entity using third-party AI for critical operations must meet ICT risk management and incident reporting obligations under which regulation?",
  options: { A: "MiFID II", B: "DORA (Digital Operational Resilience Act)", C: "EMIR", D: "AIFMD" } },

// ===== Module 6 · Risk =====

{ id: 87, topic: "Risk Methodology", correct: "B",
  q: "A team systematically lists potential failure modes, scoring severity, occurrence and detectability, then synthesises an RPN. Which technique is this?",
  options: { A: "Bow-tie", B: "FMEA", C: "Monte Carlo", D: "STRIDE" } },

{ id: 88, topic: "Risk Methodology", correct: "A",
  q: "An analyst visualises a single failure event in the centre, with prevention controls fanning left and impact-reduction controls fanning right. Which technique is this?",
  options: { A: "Bow-tie analysis", B: "FMEA", C: "STRIDE", D: "PASTA" } },

{ id: 89, topic: "Risk Methodology", correct: "C",
  q: "A finance team runs thousands of randomised simulations across uncertain inputs to estimate the distribution of outcomes. Which technique is this?",
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
  q: "After applying controls, the board explicitly decides to live with residual risk because cost of further mitigation outweighs benefit. Which option is this?",
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
  q: "An attacker submits crafted training samples to a crowdsourced labelling pipeline so the resulting model contains a backdoor trigger. Which attack is this?",
  options: { A: "Data poisoning", B: "Model stealing", C: "Membership inference", D: "Adversarial evasion" } },

{ id: 99, topic: "AI Attacks", correct: "B",
  q: "An attacker queries a trained model thousands of times to determine whether a specific record was part of training. Which attack is this?",
  options: { A: "Model inversion", B: "Membership inference", C: "Model stealing", D: "Adversarial evasion" } },

{ id: 100, topic: "AI Attacks", correct: "C",
  q: "Forensics shows no breach and no source-code exposure — only extensive structured querying for months. Competitors then ship near-identical decision behaviour. Which attack is this?",
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
  q: "A privacy-focused threat-modelling framework with categories Linkability, Identifiability, Non-repudiation, Detectability, Disclosure, Unawareness, Non-compliance is best known as...",
  options: { A: "STRIDE", B: "LINDDUN", C: "PASTA", D: "DREAD" } },

{ id: 105, topic: "Drift Types", correct: "A",
  q: "The input distribution of a deployed model has changed (customer demographics shift), even though the relationship between inputs and outputs has not. Which drift type is this?",
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
  q: "After onboarding, the org maintains visibility into whether the vendor continues to meet agreed obligations and any new risks. Which step is this?",
  options: { A: "Identification", B: "Due diligence", C: "Contracting", D: "Continuous monitoring" } },

{ id: 111, topic: "Vendor Contracts", correct: "B",
  q: "An agreement specifies that the vendor will only process personal data for the controller's authorised purposes, will assist with data-subject rights, and will not engage sub-processors without consent. Which contract type is this?",
  options: { A: "MSA", B: "Data Processing Agreement (DPA)", C: "BAA", D: "License agreement" } },

{ id: 112, topic: "Vendor Contracts", correct: "C",
  q: "An SLA promises 99.9% uptime, response < 1h, resolution < 8h, with service credits if missed. These represent...",
  options: { A: "Internal goals", B: "Best-effort targets", C: "Externally-enforceable obligations", D: "Marketing language" } },

{ id: 113, topic: "Vendor Contracts", correct: "D",
  q: "A US healthcare provider engages a vendor that will receive PHI. Which contract type is required by HIPAA in addition to standard terms?",
  options: { A: "DPA", B: "MSA", C: "Standard SaaS agreement", D: "Business Associate Agreement (BAA)" } },

{ id: 114, topic: "Vendor Assurance", correct: "A",
  q: "A vendor offers a SOC 2 Type II report. Why is this preferred over Type I?",
  options: { A: "Type II tests operating effectiveness over a period; Type I is point-in-time design", B: "Type II is cheaper", C: "Type I covers more controls", D: "They are equivalent" } },

{ id: 115, topic: "Third-Party Roles", correct: "B",
  q: "A provider delivers elastic compute, managed storage, security, and a managed ML platform; the customer retains application logic and governance. Which role?",
  options: { A: "AI-as-a-Service provider", B: "Cloud provider", C: "Model provider", D: "Data vendor" } },

{ id: 116, topic: "Third-Party Roles", correct: "C",
  q: "A provider exposes pre-trained foundation-model capabilities only via a managed API; customers never access weights. Which role?",
  options: { A: "Cloud provider", B: "Model provider", C: "AI-as-a-Service (API) provider", D: "Data vendor" } },

{ id: 117, topic: "Third-Party Roles", correct: "D",
  q: "A vendor licenses pre-trained model weights to enterprise customers, who fine-tune and serve them in their own environment. Which role?",
  options: { A: "Cloud provider", B: "Data vendor", C: "AI-as-a-Service", D: "Model provider" } },

{ id: 118, topic: "Licenses", correct: "A",
  q: "A team wants to bundle weights released under CC-BY-NC-4.0 in a commercial product. What is the most accurate licensing assessment?",
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
  q: "Each service account is granted only the minimum permissions for its task; standing administrative access is removed. Which principle is this?",
  options: { A: "Defence in depth", B: "Least privilege", C: "Open by default", D: "Network trust" } },

{ id: 126, topic: "Defence Strategy", correct: "D",
  q: "Network access is never implicitly trusted based on location; every request is authenticated, authorised, and continuously validated. Which model is this?",
  options: { A: "DMZ-based", B: "Implicit trust", C: "Perimeter security", D: "Zero trust" } },

{ id: 127, topic: "Architecture", correct: "C",
  q: "After lateral movement compromised an AI training environment, the architect isolates ingestion, training, and inference into separate network segments. Which principle is this?",
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
  q: "A team triages newly discovered vulnerabilities and decides which require immediate remediation based on exploitability, impact, blast radius. Which step is this?",
  options: { A: "Identification", B: "Assessment", C: "Mitigation", D: "Monitoring" } },

{ id: 138, topic: "NIST CSF", correct: "A",
  q: "Which NIST CSF function develops organisational understanding to manage cybersecurity risk to systems, people, assets, data, capabilities?",
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
  q: "An enterprise wants a framework covering identify / protect / detect / respond / recover for AI models, data, and infrastructure. Which framework fits?",
  options: { A: "MITRE ATLAS", B: "OWASP Top 10 for LLMs", C: "NIST Cybersecurity Framework", D: "ISO 27001 controls only" } },

{ id: 143, topic: "OWASP LLM", correct: "A",
  q: "Which OWASP Top 10 for LLMs entry covers manipulating LLM input through crafted prompts to override system instructions or extract sensitive information?",
  options: { A: "LLM01 — Prompt Injection", B: "LLM02 — Insecure Output Handling", C: "LLM03 — Training Data Poisoning", D: "LLM10 — Model Theft" } },

{ id: 144, topic: "OWASP LLM", correct: "B",
  q: "Which OWASP Top 10 for LLMs entry covers an LLM whose output is consumed downstream without sanitisation, leading to XSS, SSRF, or RCE?",
  options: { A: "LLM01 — Prompt Injection", B: "LLM02 — Insecure Output Handling", C: "LLM06 — Sensitive Info Disclosure", D: "LLM05 — Supply Chain" } },

// ===== Module 9 · Privacy & Trust =====

{ id: 145, topic: "PII vs PHI", correct: "C",
  q: "Which combination is most accurate?",
  options: { A: "Name + email = PHI", B: "SSN = PHI only", C: "Name + email + SSN = PII; medical diagnosis + prescription = PHI", D: "None of these are PII or PHI" } },

{ id: 146, topic: "De-identification", correct: "A",
  q: "A researcher replaces direct identifiers with a token (CUST_8a1c). The mapping is held under access control in case re-linking is later needed. Which technique is this?",
  options: { A: "Pseudonymisation", B: "Anonymisation", C: "Encryption", D: "Hashing" } },

{ id: 147, topic: "De-identification", correct: "B",
  q: "A dataset is irreversibly stripped of direct and indirect identifiers so no party can re-identify the underlying subjects. Which technique is this?",
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
  q: "Cloud data is destroyed by deleting the encryption keys protecting it, rendering the ciphertext unrecoverable while the storage itself can be reused. Which method is this?",
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
  q: "A low-confidence ambiguous query with no prior history should route to moderator review and escalation rather than dismissal or LE referral. Which T&S tier is this?",
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
  q: "Incidents progressively move through levels — from on-call responders to senior leadership — depending on severity, with executives approving risk acceptance. What is this called?",
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
  q: "A new model version is exposed to a small, hidden 5% of users while the rest stay on the existing version. If the small slice is healthy, exposure expands. Which strategy is this?",
  options: { A: "Canary rollout", B: "Big-bang deployment", C: "Shadow mode", D: "Offline evaluation" } },

{ id: 185, topic: "Rollout", correct: "D",
  q: "Two identical production environments — 'blue' (live) and 'green' (new version) — are kept in parallel; traffic is cut over to 'green' in one step with the ability to flip back. Which strategy is this?",
  options: { A: "Canary rollout", B: "Big-bang deployment", C: "Shadow mode", D: "Blue-green deployment" } },

// ===== Module 11 · Audit / Assurance =====

{ id: 186, topic: "Audit Evidence", correct: "D",
  q: "A regulator asks an auditor to evaluate whether the system's internal decision logic can be examined, whether assumptions and constraints are explicitly defined, and whether changes are subject to formal oversight. Which evidence category is this?",
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
  q: "An auditor asks for a record showing every individual model decision, with timestamp, inputs, outputs, model version, and human overrides. What artefact is this?",
  options: { A: "Model card", B: "Datasheet", C: "Decision log", D: "AIBOM" } },

{ id: 199, topic: "Right to Explanation", correct: "B",
  q: "A regulator requires that adverse automated decisions are defensible to applicants and regulators, independent of the specific technique used to derive explanations. Which governance concept is this?",
  options: { A: "Feature attribution", B: "Right to explanation", C: "User consent", D: "Data localisation" } },

{ id: 200, topic: "Versioning", correct: "C",
  q: "An auditor traces which dataset trained a specific model, when it was last updated, who approved the change, and the supporting documentation, demonstrating accountability for historic decisions. Which asset-management requirement is this?",
  options: { A: "Access control", B: "Lifecycle reviews", C: "Versioning and traceability", D: "Decommissioning" } },

];
