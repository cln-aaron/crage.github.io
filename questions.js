// CRAGE Exam Practice · 100 questions covering the same concepts as the
// EC-Council CRAGE blueprint. Scenarios, names, and details differ from the
// reference set; the underlying concept tested is identical.
//
// Per-question structure:
//   id        — sequential
//   topic     — short topic tag for scoreboard
//   q         — scenario text (HTML allowed)
//   options   — { A, B, C, D }
//   correct   — "A" | "B" | "C" | "D"

window.QUESTIONS = [

{ id: 1, topic: "Assurance", correct: "C",
  q: "A multinational telecommunications carrier runs several AI capabilities across business units in different jurisdictions. Assurance teams need an ongoing capability that observes production behaviour, detects deviations from expected performance patterns, and surfaces issues for investigation before they escalate into regulatory or operational findings. The capability is required to operate continuously throughout the AI lifecycle, not as periodic reviews. Which emerging AI assurance capability applies here?",
  options: { A: "Privacy-preserving evaluation", B: "Explainability assessment", C: "Model monitoring and drift detection", D: "Automated testing" } },

{ id: 2, topic: "Incident Severity", correct: "B",
  q: "Maya, a Chief Risk Officer at a logistics operator, is reviewing an AI-related safety event in an automated warehouse. An autonomous picker misread sensor data during normal operations and made an unexpected manoeuvre on the shop floor. No worker was injured, but the event created a clear risk of physical harm and exposed unsafe AI behaviour around humans. How should Maya classify this incident's severity for response and escalation?",
  options: { A: "Low severity", B: "High severity", C: "Medium severity", D: "Critical" } },

{ id: 3, topic: "Vendor Contracts", correct: "C",
  q: "Hari Mehta is Head of AI Procurement for a global insurance group. As his team onboards an external AI provider for claims-decision systems used across regions, Hari ensures the contract specifies uptime targets, response windows for outages, resolution times, accuracy benchmarks, and enforceable remedies if the vendor misses commitments. Which contractual component is Hari primarily defining?",
  options: { A: "SLOs", B: "Data Ownership Clauses", C: "SLAs", D: "Licensing Rights" } },

{ id: 4, topic: "NLP Preprocessing", correct: "D",
  q: "Vega Analytics is building a sentiment-analysis pipeline. The engineering team is finalising preprocessing specs that convert raw product reviews into machine-readable inputs. The AI Program Manager must approve the step where long paragraphs are broken into smaller units such as words or sub-words. Which preprocessing stage is being approved?",
  options: { A: "Lemmatization", B: "Stemming", C: "Sentiment scoring", D: "Tokenization" } },

{ id: 5, topic: "Testing", correct: "A",
  q: "Aiden Park is Senior AI Quality Lead at a parcel-routing firm rolling out an AI to automate dispatch decisions across regions. Each component passes isolated tests, yet after launch routing errors spike when the model interacts with the live data bus and partner APIs. Post-incident analysis shows failures only when the full system operates together. Which testing focus should Aiden have prioritised to surface these problems before launch?",
  options: { A: "Integration testing", B: "User acceptance testing", C: "Model performance testing", D: "Data validation" } },

{ id: 6, topic: "EU AI Act", correct: "C",
  q: "Priya Sharma is a Strategy Lead assessing regulatory obligations for an AI-enabled university admissions tool that scores and ranks applicants. Its outputs directly influence admissions decisions affecting individuals' access to education. Under the EU AI Act risk-based classification, how should this system be categorised?",
  options: { A: "Minimal-risk", B: "Limited-risk", C: "High-risk", D: "Prohibited" } },

{ id: 7, topic: "Audit Evidence", correct: "D",
  q: "During a supervisory inquiry into an AI-enabled lending capability, a financial regulator asks Sophie Almeida, Lead External AI Auditor, to assess whether the system's internal decision logic can be examined, whether underlying assumptions and constraints are explicitly defined, and whether changes to those elements are subject to formal oversight. The review excludes predictive-accuracy validation and training-data review. Which category of audit evidence should Sophie focus on?",
  options: { A: "Performance evidence", B: "Compliance evidence", C: "Model evidence", D: "Algorithm evidence" } },

{ id: 8, topic: "Compliance Program", correct: "A",
  q: "VertaPay, a global digital-payments provider, deploys AI models across regions for automated customer decisions. As Head of AI Compliance, Jordan Lee observes that the same expectations exist everywhere, yet teams interpret and apply required safeguards differently when introducing model changes, producing inconsistent adherence. Which component would most directly address this issue?",
  options: { A: "Compliance Controls", B: "Policy Framework", C: "Training and Awareness", D: "Documentation and Audit Trails" } },

{ id: 9, topic: "Complaint Handling", correct: "A",
  q: "Niall Ferguson is a Governance Lead handling user concerns about AI behaviour. After an applicant raises that an AI screener produced a biased outcome, leadership wants to respond in a way that restores confidence for future users too. Niall warns that quick comms and surface fixes will erode trust if the same complaints recur. Which element of the complaint-handling framework is Niall prioritising?",
  options: { A: "Root-cause analysis", B: "Timely acknowledgment", C: "Transparent response process", D: "Feedback loop" } },

{ id: 10, topic: "AI Liability", correct: "D",
  q: "A global remittance company runs an AI system that influences how transactions are handled across its payment network. Over months, outcomes diverge from expected patterns; the change is gradual, but no intervention is taken until customer impact is significant. Responsibility is assessed based on who was positioned to observe behaviour, apply judgement, and act when outcomes drifted. Under AI liability frameworks, which party bears most direct responsibility?",
  options: { A: "Developers", B: "Governments / Regulators", C: "Organizations", D: "Deployers / Operators" } },

{ id: 11, topic: "Incident Response", correct: "B",
  q: "Centralised observability detects an anomaly, and a SaaS firm declares an AI security incident across several inference services. Forensics confirm models, datasets, and decision logic are intact. The root issue is execution-layer weakness: legacy runtime libraries and shared container images expose exploitable surfaces. The team replaces vulnerable dependencies, hardens runtime configs, rebuilds images, and removes unsafe execution paths before reintroducing services. Which eradication-phase activity best matches?",
  options: { A: "Feature Engineering", B: "Security Patching", C: "Model Remediation", D: "Policy Updates" } },

{ id: 12, topic: "Interpretability", correct: "A",
  q: "Renata Costa is a Strategy Lead ensuring the company's generative AI is interpretable for non-technical reviewers. To help executives see which input portions most influence a generated response, she approves a technique that visually highlights how the model allocates internal focus across the input — without requiring readers to understand the model architecture. Which interpretability technique is Renata applying?",
  options: { A: "Attention maps", B: "Fact sheets", C: "Feature attribution", D: "Interactive dashboards" } },

{ id: 13, topic: "Privacy Regulation", correct: "A",
  q: "Theo Banks is the Governance Lead at a Los Angeles–based tech firm operating an AI recommendation system that personalises services and dynamically influences consumer pricing. To stay compliant, Theo must ensure consumers are informed about the automated decision-making and understand how their evaluations affect pricing. Which regulatory framework imposes this transparency requirement in California?",
  options: { A: "CCPA", B: "GDPR", C: "LGPD", D: "DPDP Act" } },

{ id: 14, topic: "Testing", correct: "B",
  q: "QualiSense Labs is testing a new customer-service chatbot. Which kind of testing would best identify whether the model provides accurate answers to expected customer queries?",
  options: { A: "Only testing server hardware performance", B: "Functional testing with predefined test cases for expected customer scenarios", C: "Reviewing the colour scheme of the chat UI", D: "Testing the office internet speed" } },

{ id: 15, topic: "Vendor Risk", correct: "B",
  q: "Aaron Park, a Data Protection Officer at a global services firm, conducts a post-engagement review of an externally sourced AI capability. He finds that data shared with the vendor was repurposed beyond the agreed use, passed to other parties, and processed downstream — none of it covered by existing agreements or oversight. Which real-world AI vendor failure scenario does this describe?",
  options: { A: "Biased decision logic", B: "Unauthorized secondary data use", C: "Poor data quality management", D: "Unreliable model output" } },

{ id: 16, topic: "Deployment", correct: "B",
  q: "Kairos Marine deploys autonomous inspection drones over deep-water platforms. The original proposal routes video feeds to a central cloud service. As CTO, Diana Reeves identifies that satellite connectivity is unstable and high latency could cause crashes during critical manoeuvres. She mandates an architecture that lets drones process data and decide navigation locally without internet. Which specific deployment strategy is this?",
  options: { A: "Multi-Cloud Orchestration", B: "Edge AI Deployment", C: "Federated Learning", D: "Data Lakehouse Architecture" } },

{ id: 17, topic: "IP Protection", correct: "B",
  q: "Mira Sato, a Chief Risk Officer, suspects a competitor is profiting from a stolen copy of her firm's proprietary model. Unable to inspect their servers, she sends a secret trigger phrase to their public API. The model emits a unique, pre-defined output string that her team intentionally embedded during training. Which IP-protection technique is Mira using?",
  options: { A: "Cryptographic signing", B: "Model watermarking", C: "Model obfuscation", D: "Model fingerprinting" } },

{ id: 18, topic: "Availability Controls", correct: "D",
  q: "Lara Croft, an AI Program Manager, runs a multi-tenant generative AI platform. Free-tier users sometimes monopolise shared GPUs by sending burst traffic, degrading latency for premium tenants. Without provisioning more hardware, she configures the API gateway to restrict the frequency of API calls per key over a sliding time window. Which availability control is Lara enforcing?",
  options: { A: "Segmentation", B: "Load balancing", C: "API key management", D: "Rate limiting" } },

{ id: 19, topic: "Data Handling", correct: "C",
  q: "Julian Marks is the CRO of an organisation entering research collaboration that requires sharing sensitive datasets externally. He needs to reduce risk of direct identification by the partner while preserving the organisation's internal ability to re-link records for future legal or audit obligations. Which data handling approach best fits this dual requirement?",
  options: { A: "Anonymization", B: "Data masking", C: "Pseudonymization", D: "Generalization" } },

{ id: 20, topic: "Assurance", correct: "B",
  q: "A regional bank's AI system supports automated credit-exposure assessments. During a governance review, leadership must demonstrate how past oversight decisions were handled and how conclusions reached at earlier points in time can be revisited if needed — substantiating the oversight approach to historical scrutiny. Which AI assurance mechanism best addresses this?",
  options: { A: "Validation", B: "Auditing", C: "Testing", D: "Monitoring" } },

{ id: 21, topic: "Risk Analysis", correct: "D",
  q: "Cara Donovan runs a structured safety assessment for an AI clinical decision-support system. She synthesises severity of harm, probability of occurrence, and the organisation's ability to detect issues before adverse outcomes into a single quantitative measure that enables comparative ranking of failures and guides mitigation focus. What is this quantitative value commonly called?",
  options: { A: "Likelihood Index", B: "Impact Coefficient Number", C: "Risk Threshold Number", D: "Risk Priority Number" } },

{ id: 22, topic: "Pilot Evaluation", correct: "A",
  q: "Marcus Yeoh, an AI Project Lead, reviews outcomes of a short pilot for an internal AI support chatbot. Quantitative metrics meet thresholds, but frontline feedback shows added cognitive load and workflow friction. Before authorising further investment, which course of action should leadership infer from these mixed signals?",
  options: { A: "Refinement Needs", B: "Fail-Fast Decision", C: "Scale Recommendation", D: "Success Indicators" } },

{ id: 23, topic: "Business Case", correct: "D",
  q: "Helix Retail was preparing to approve an AI initiative to improve inventory planning. Initial results suggested technical viability. Before final approval, Diego Vargas, VP of Enterprise Transformation, paused the initiative after identifying uncertainty around the value the organisation would realise relative to the resources needed to sustain the solution over time. Which AI business-case element did Diego apply?",
  options: { A: "Risk Assessment", B: "Implementation Roadmap", C: "Strategic Alignment", D: "ROI Analysis" } },

{ id: 24, topic: "Secure Design", correct: "B",
  q: "Anya Petrova, Data Protection Officer at a fintech, specifies that sensitive customer identifiers must be replaced with non-sensitive substitutes and that all stored data must be protected by cryptographic safeguards, so unauthorised access to storage would not yield meaningful identification. Which secure design pattern is Anya applying?",
  options: { A: "Least Privilege and Access Control", B: "Data Privacy and Protection", C: "Data Integrity and Provenance", D: "Ethical AI and Fairness" } },

{ id: 25, topic: "Assurance", correct: "C",
  q: "Hugo Travers is the AI Assurance Manager at a retail bank. The technical team demonstrates the credit-risk model meets accuracy thresholds, but when compliance reviewers ask for explanations of specific risk scores, the team cannot describe how individual inputs drove the outcomes for a non-technical audience. Which assurance capability addresses this gap?",
  options: { A: "Privacy-enhancing technologies", B: "Model monitoring and drift detection", C: "Explainable AI (XAI)", D: "Automated testing and validation" } },

{ id: 26, topic: "Healthcare AI", correct: "B",
  q: "After a major AI rollout in a hospital network, clinicians report rising delays in updating critical model versions, increasing misdiagnosis risk during rapid outbreaks. The analytics director and IT architects disagree on what to invest in. Which balanced approach most effectively addresses both safety and operational efficiency?",
  options: { A: "Delay all updates until executive review is complete", B: "Establish a version-controlled model registry, invest in automated continuous validation, and implement rollback procedures aligned to safety triggers", C: "Require clinicians to approve all model changes manually with no tool support", D: "Outsource post-deployment evaluation entirely to external vendors" } },

{ id: 27, topic: "ML Paradigm", correct: "D",
  q: "AutoStore is deploying autonomous robots to navigate a changing warehouse floor. The robots receive no map; they learn to navigate by trial and error, receiving a reward when they reach a destination and a penalty when they hit an obstacle. Which machine learning approach describes this?",
  options: { A: "Supervised Learning", B: "Semi-Supervised Learning", C: "Unsupervised Learning", D: "Reinforcement Learning" } },

{ id: 28, topic: "Emerging Tech", correct: "C",
  q: "A global enterprise runs AI-driven employee training in shared digital environments where participants interact with each other and AI-generated elements. Existing data, model, and infrastructure controls do not adequately cover what happens during these live sessions: in-session AI behaviour, real-time participant actions, and enforcement of organisational standards within the environment itself. AI governance must integrate with which technology?",
  options: { A: "Blockchain", B: "Cloud and Edge Computing", C: "AR/VR and Metaverse Platforms", D: "Robotics and Autonomous Systems" } },

{ id: 29, topic: "Crisis Management", correct: "A",
  q: "GridCity experiences a cascading failure: a traffic-control AI malfunction triggers power-grid AI disruptions, which in turn affect water-treatment AI. Regulators and the public are watching. How should the team manage this complex incident?",
  options: { A: "Establish multi-domain crisis management with dependency mapping, circuit breakers, life-safety recovery, coordinated response teams, and public dashboards", B: "Shut down all AI systems permanently", C: "Focus only on the traffic system as the root cause", D: "Treat each failure as a separate incident" } },

{ id: 30, topic: "Deployment Strategy", correct: "B",
  q: "Aurora Software prepares to release a major update of its user-facing AI app — a newly trained model promising better accuracy. Given the user base, leadership is wary of model surprises in production. The release manager deploys the new model to a small, hidden 5% of users while the rest stay on the current model; if the 5% goes well, the release expands. Which deployment rollout is this?",
  options: { A: "Big Bang Deployment", B: "Canary Rollout", C: "Shadow Mode", D: "Offline Evaluation" } },

{ id: 31, topic: "Cost Management", correct: "B",
  q: "A consumer-goods company is scaling an AI-based demand-forecasting capability from pilot to enterprise. Discussion focuses on visible expenses like compute and engineering. Adrian Kohl, the AI Finance Governance Lead, warns that recurring expenditures across the AI lifecycle are not yet fully understood. What should be done first?",
  options: { A: "Cost-benefit analysis", B: "Cost component identification", C: "Budget allocation", D: "Spend prioritization" } },

{ id: 32, topic: "Vulnerability Mgmt", correct: "D",
  q: "Esme Walker, AI Security Assurance Lead at a SaaS provider, receives a consolidated report listing weaknesses across model-serving API, container images, and third-party dependencies. Some allow limited data exposure under rare conditions; others could harm model integrity if exploited. Leadership asks her to decide which need immediate remediation. Which vulnerability-management step is Esme performing?",
  options: { A: "Identification", B: "Mitigation", C: "Monitoring and continuous improvement", D: "Assessment" } },

{ id: 33, topic: "Benchmarking", correct: "D",
  q: "ApexPay deploys AI to automate transaction reviews. Internal metrics show improvement, but leadership cannot tell whether the gains are competitive externally or merely internal variance. The analytics team introduces a step that places the system's outcomes within a broader external performance landscape. Which aspect of benchmarking did they apply?",
  options: { A: "Captured initial state before implementation", B: "Identified areas where AI could maximise impact", C: "Fostered a culture of excellence", D: "Compared key metrics against industry standards" } },

{ id: 34, topic: "Governance Policy", correct: "A",
  q: "A bank's customer-risk AI model is adjusted periodically as conditions change. Teams can describe individual updates, but during a governance review the organisation cannot demonstrate a unified, traceable approach to how changes are managed across the model's lifecycle. Which governance policy was most clearly insufficient?",
  options: { A: "Model Update and Change Control Policy", B: "Compliance and Regulatory Alignment Policy", C: "Model Monitoring and Performance Management Policy", D: "Model Deployment Approval Policy" } },

{ id: 35, topic: "AI Security", correct: "D",
  q: "A fintech offers AI-based credit scoring via external API. Over time, Hassan Yusuf, Head of AI Platform Security, sees legitimate-looking but unusual usage from certain clients — high-volume, systematically varied submissions across income ranges, credit history, and transactions. Months later, competing firms ship credit-scoring solutions producing the same thresholds, confidence patterns, and edge-case behaviours. Forensics show no breach, no code exposure — only extensive querying. What attack most likely occurred?",
  options: { A: "Adversarial evasion attack", B: "Membership inference", C: "Model inversion attack", D: "Model stealing attack" } },

{ id: 36, topic: "Third Parties", correct: "A",
  q: "Dieter Lang, CTO of a global digital-services firm, contracts an external provider for elastic compute, managed storage, integrated security, and a managed environment for developing and operating ML workloads. Internal teams retain application logic, model governance, and compliance; the provider operates and secures the underlying infrastructure. Which third-party role best describes the provider?",
  options: { A: "Cloud Providers", B: "AI-as-a-Service (API) Providers", C: "Data Vendors", D: "Model Providers" } },

{ id: 37, topic: "Quantum AI", correct: "B",
  q: "QuantaSafe needs to validate a quantum-classical hybrid AI system used in cryptographic applications. Traditional testing fails due to superposition and entanglement. Which validation framework fits?",
  options: { A: "Use only classical testing methods", B: "Quantum process tomography, Bell tests, randomized benchmarking, noise-adapted validation, and quantum advantage verification via classical hardness", C: "Skip testing for quantum components", D: "Wait for quantum testing standards to emerge" } },

{ id: 38, topic: "Vendor Lifecycle", correct: "B",
  q: "An e-commerce firm integrated a third-party AI customer-support service at scale. Months later, questions arise about how the vendor has been operating across jurisdictions, and the firm cannot show that vendor practices still align with required obligations. Visibility into post-onboarding operation is missing. Which action would have most directly addressed this gap?",
  options: { A: "Ensure Legal Data Movement", B: "Monitor and Verify Compliance", C: "Understand Applicable Regulations", D: "Embed Compliance into Contracts" } },

{ id: 39, topic: "Ethics", correct: "B",
  q: "Lara Whitman, Head of Consumer Credit Policy at a retail bank, sees a persistent outcome divergence across demographic cohorts in an AI pre-screening capability, even though core financial-risk indicators are consistent. Documentation shows no intent to differentiate on prohibited characteristics, yet the pattern is stable across regions. Which AI ethics principle is most directly implicated?",
  options: { A: "Transparency", B: "Fairness", C: "Human-centric values", D: "Accountability" } },

{ id: 40, topic: "Infrastructure", correct: "A",
  q: "Saul Vega, CTO, is fixing slow GenAI model development. The existing compute is great for transactional and storage workloads but struggles with the parallel numerical computation that dominates training. He authorises hardware accelerators purpose-built to optimise throughput for those mathematically intensive workloads. Which hardware is Saul prioritising?",
  options: { A: "Graphics Processing Units (GPUs)", B: "Network Attached Storage (NAS)", C: "Solid State Drives (SSDs)", D: "Relational Database Servers" } },

{ id: 41, topic: "Defense Layers", correct: "A",
  q: "A logistics firm runs an AI decision component for routing and fuel optimisation, exposed via standard operational interfaces. Over time, repeated structured interaction lets external parties anticipate and reverse-engineer aspects of decision logic, exposing internal mechanisms. Which defence-in-depth layer should be strengthened?",
  options: { A: "Model Security Layer", B: "Access Control and Authentication Layer", C: "Data Protection Layer", D: "Network and Infrastructure Security Layer" } },

{ id: 42, topic: "Frameworks", correct: "D",
  q: "Emily Watson, Regulatory Compliance Advisor at a multinational, is prepping for an external audit of AI systems used in customer decisioning. She needs a structured approach that categorises AI-related risks, maps them to governance and control mechanisms, and ensures consistent documentation from design through deployment and monitoring. Which framework fits?",
  options: { A: "FMEA", B: "Bow-Tie Analysis", C: "Monte Carlo Simulation", D: "NIST AI Risk Management Framework" } },

{ id: 43, topic: "AI Applications", correct: "C",
  q: "Lucas Bergen, VP of Infrastructure at a telco, reviews an autonomous AI capability running across the service delivery fabric. It interprets live signals — throughput variability, congestion, reliability — and adjusts routing and capacity to sustain SLOs as demand shifts. Interventions are real-time in an adaptive control loop, not alerts. Which AI application domain best fits?",
  options: { A: "Anomaly Detection", B: "Predictive Maintenance", C: "Network Optimization", D: "Robotic Process Automation" } },

{ id: 44, topic: "Privacy Architecture", correct: "B",
  q: "Marcus Tan, CRO of a healthtech startup, is scaling a diagnostic AI on sensitive patient data. Centralising large volumes of medical records creates outsized exposure if breached. He approves an architecture that improves the model across users while minimising central exposure to raw data and staying within healthcare privacy expectations. Which architecture is Marcus enabling?",
  options: { A: "Edge processing", B: "Federated learning", C: "End-to-end security", D: "Decentralization" } },

{ id: 45, topic: "Regulation", correct: "A",
  q: "A bank under supervisory exam is asked whether it can meaningfully review and challenge automated decisions when disputes arise, and whether governance can detect and remediate disparate impacts across customer segments. The exam is less about system performance and more about how outcomes are governed. Which regulatory objective is primarily being evaluated?",
  options: { A: "Fairness and accountability", B: "Operational efficiency", C: "Data minimization", D: "System scalability" } },

{ id: 46, topic: "Asset Mgmt", correct: "D",
  q: "Internal audit at a global bank traces which dataset trained a specific credit model, the timestamp of its last update, who approved the change, and the supporting documentation. The capability lets the org explain historic decisions and demonstrate accountability. Which asset-management requirement is being exercised?",
  options: { A: "Access control and security", B: "Lifecycle reviews and compliance", C: "Risk management and decommissioning", D: "Versioning and traceability" } },

{ id: 47, topic: "Security Testing", correct: "C",
  q: "Kira Patel, a Cloud AI Security Engineer, is reviewing AI services in public cloud after a year of expansion (more inference endpoints, automated ingestion pipelines, partner APIs). She systematically identifies external exposure points, how data and requests flow, and where new integrations introduce entry points. Which security testing is she performing?",
  options: { A: "Risk prioritization", B: "Monte Carlo modeling", C: "Attack surface analysis", D: "KPI evaluation" } },

{ id: 48, topic: "Scaling", correct: "A",
  q: "Nova Industries pilots an AI in one unit, then extends it to finance, ops, and support. Model and deployment are unchanged, but teams report materially different outcomes. Investigations show no architectural fragmentation, adequate sponsorship, and regular cross-team meetings, yet rollouts slip as each unit validates outputs differently. Which scaling requirement was missing?",
  options: { A: "Standardized AI Architecture", B: "Cross-Functional Coordination", C: "High-Quality Data Foundations", D: "Strong Governance" } },

{ id: 49, topic: "Recovery", correct: "B",
  q: "Thomas Reyes, Chief AI Officer, is recovering from an AI incident. The model is fixed, but before full automation is restored he wants to confirm safe real-world behaviour. The updated model processes live inputs while its outputs are observed only and do not affect business decisions. What protective strategy is being applied?",
  options: { A: "Controlled rollout", B: "Shadow evaluation mode", C: "Functional validation testing", D: "Full production deployment" } },

{ id: 50, topic: "Development", correct: "C",
  q: "Aria Park, an AI Program Manager, enforces a policy where security activities — architecture review, static code analysis, vulnerability testing — are integrated into every project phase from requirements to rollout, not done once before release. Which development approach is she enforcing?",
  options: { A: "Threat Intelligence Integration", B: "Rapid Application Development (RAD)", C: "Secure Software Development Lifecycle (SSDLC)", D: "Continuous Deployment" } },

{ id: 51, topic: "AI Applications", correct: "B",
  q: "Mira Saluja leads a pilot for early disease detection at a hospital. She selects a deep-learning solution that processes high-dimensional inputs from imaging equipment to identify subtle tissue irregularities and micro-calcifications, flagging regions for specialist review. How is this initiative best classified?",
  options: { A: "Genomic Sequencing and Analysis", B: "Medical Imaging and Diagnostics", C: "Predictive Analytics", D: "Robotic Surgical Automation" } },

{ id: 52, topic: "Governance", correct: "B",
  q: "A large organisation sets up AI governance committees, defines internal standards, and assigns ownership roles. As initiatives expand across departments, governance is applied inconsistently — some teams escalate through formal channels, others proceed independently, and coordination between strategic and operational layers weakens. Which component is most directly lacking?",
  options: { A: "Risk and Compliance", B: "Operating Model", C: "Policies / Procedures / Standards", D: "Organization Roles and Responsibilities" } },

{ id: 53, topic: "Governance", correct: "B",
  q: "Sophie Marlow, Head of AI Governance at an insurer, oversees an AI claim-scoring system. Over time, changes are made; during a review, stakeholders provide inconsistent explanations of how those changes were handled and how oversight is maintained. Performance reports exist, but effective control during the review cannot be demonstrated. Which governance element is missing?",
  options: { A: "Cross-Functional Coordination", B: "Strong Governance", C: "High-Quality Data Foundations", D: "Standardized AI Architecture" } },

{ id: 54, topic: "Governance Structure", correct: "D",
  q: "Hannah Liu is a Strategy Lead ensuring AI use stays aligned with long-term values, risk appetite, and public commitments. As AI scales, ethical considerations are handled inconsistently and too late. She proposes a centralised oversight body that evaluates initiatives early, arbitrates innovation-vs-responsibility trade-offs, and gives organisation-wide ethical guidance. Which internal structure should Hannah establish?",
  options: { A: "EU Trustworthy AI Guidelines", B: "NIST AI Risk Management Framework", C: "OECD AI Principles", D: "Company AI Ethics Boards" } },

{ id: 55, topic: "Governance Entity", correct: "D",
  q: "Linda Park, CISO at a regulated firm, identifies that executive risk appetite is clear, but different teams interpret directives differently when defining controls and standards, and execution teams lack authority to resolve conflicts or clarify intent. She needs an entity that translates strategic decisions into coordinated organisation-wide guidance applied consistently before work reaches execution. Which governance entity fits?",
  options: { A: "Ethics panels", B: "AI governance board", C: "Working groups", D: "Steering committees" } },

{ id: 56, topic: "Readiness", correct: "D",
  q: "Orion Systems tried to move an internal AI pilot to a production workflow across business units. Shortly after launch, internal disagreements slowed progress, responsibilities for AI-driven outcomes were unclear, and teams followed inconsistent expectations before pushing changes. Maria Chen, Head of Enterprise AI Governance, intervenes to bring structure and consistency to how the organisation handles AI decisions. Which readiness dimension did Maria primarily address?",
  options: { A: "Business Readiness", B: "Data Readiness", C: "Architecture Readiness", D: "Governance and Risk Readiness" } },

{ id: 57, topic: "Security Principles", correct: "A",
  q: "Lior Hadar, System Architect, is designing security for a predictive-maintenance AI that ingests data from connected assets and external sources. Rather than relying on any single safeguard, he arranges successive controls so a compromise of one does not yield unrestricted access downstream — attacker movement is constrained and impact contained even after initial bypass. Which principle is being applied?",
  options: { A: "Defense in Depth", B: "Least Privilege", C: "Secure by Design", D: "Zero Trust" } },

{ id: 58, topic: "IR Metrics", correct: "B",
  q: "James Tan, Chief AI Officer, reviews post-incident metrics after model drift. He measures the time between the first observable signs of abnormal behaviour and the moment the issue was formally identified and logged. This is used to assess monitoring effectiveness. Which IR metric is James evaluating?",
  options: { A: "Mean Time to Contain", B: "Mean Time to Detect", C: "Mean Time to Recover", D: "Mean Time to Respond" } },

{ id: 59, topic: "Risk Methodology", correct: "C",
  q: "Jenna Adams, an AI risk lead at a transportation tech firm, is doing a pre-deployment assurance pass on a navigation AI. She directs her team to systematically explore credible-but-non-observed conditions: degraded input integrity, disrupted real-time dependencies, and intentional input manipulation, asking how the system might fail or propagate harm. Which risk-identification technique is Jenna applying?",
  options: { A: "Threat modeling", B: "Quantitative risk scoring", C: "Scenario analysis", D: "Historical data analysis" } },

{ id: 60, topic: "Bias Detection", correct: "A",
  q: "Owen Grant, Responsible AI Review Lead at a recruitment platform, sees that candidates from certain groups receive positive recommendations at significantly lower rates even though qualification profiles look similar. He wants to assess whether outcome distributions differ across groups regardless of underlying qualifications. Which bias-detection method fits?",
  options: { A: "Statistical parity", B: "Calibration", C: "Equality of opportunity", D: "Fairness through awareness" } },

{ id: 61, topic: "Architecture", correct: "D",
  q: "A breach review shows an attacker exploited a public web server, then moved laterally into the AI training environment and accessed sensitive datasets. Kevin O'Brien, the AI Security Lead, notes individual systems were hardened but ingestion pipelines, training infrastructure, and inference services were not isolated, amplifying the impact. Which AI security architecture principle should be enforced?",
  options: { A: "Micro-services", B: "Infrastructure Hardening", C: "Containerization", D: "Segmentation" } },

{ id: 62, topic: "TPRM", correct: "D",
  q: "Andrei Foster is a Third-Party Risk Lead in San Francisco. Before engaging an AI vendor whose models influence automated decisions on sensitive data, he evaluates technical maturity, governance, ethical safeguards, security controls, and regulatory readiness — by reviewing documentation, validating evidence, and assessing long-term trustworthiness. What process is Andrei performing?",
  options: { A: "Vendor Performance Tracking", B: "Vendor Role Mapping", C: "Risk Profiling and Categorization", D: "Vendor Due Diligence" } },

{ id: 63, topic: "Incident Routing", correct: "C",
  q: "Linda Park, CRO, runs a high-severity AI incident with operational and regulatory risk. She follows a predefined structure where incidents progressively move through levels — from responders to senior leadership — and the final decisions on risk acceptance, resource allocation, and external comms approval reach executive leadership (CIO and CISO). What is this structured routing model called?",
  options: { A: "Regulatory engagement", B: "Communication matrix", C: "Escalation hierarchy", D: "Notification strategy" } },

{ id: 64, topic: "Frameworks", correct: "B",
  q: "James Sterling, CRO, is choosing an enterprise framework to govern AI security risk. He wants something supporting the full security lifecycle — identify, protect, detect, respond, recover — usable for AI models, data, and supporting infrastructure, and supporting structured repeatable governance (not just a list of vulnerabilities or attack techniques). Which framework should James adopt?",
  options: { A: "MITRE ATLAS", B: "NIST Cybersecurity Framework (CSF)", C: "OWASP Top 10", D: "ISO 27001 controls" } },

{ id: 65, topic: "OECD", correct: "D",
  q: "Victoria Park, Strategy Lead, advises a board picking an external governance framework. The board stresses AI adoption must promote broad societal benefit, support sustainable social conditions over time, and avoid amplifying existing inequalities. Which OECD principle best captures this emphasis?",
  options: { A: "Robustness and safety", B: "Accountability", C: "Human-centered fairness", D: "Inclusive growth and well-being" } },

{ id: 66, topic: "Crisis Management", correct: "D",
  q: "MediPharma discovers a drug-discovery AI has produced subtly biased results for six months, potentially affecting trials for 50 drugs in 30 countries. Regulators are investigating, patients are at risk, and billions in R&D are exposed. Which crisis-management strategy is most appropriate?",
  options: { A: "Halt all drug trials immediately worldwide", B: "Continue trials while investigating", C: "Deny any problems exist", D: "Establish a global crisis command with risk stratification, parallel validation, transparent communication, and patient monitoring" } },

{ id: 67, topic: "Privacy", correct: "D",
  q: "Tomás O'Brien, CDO of a health-tech firm, prepares a dataset for training a clinical model. To prevent the model from memorising or exposing specific records, his team applies a technique that injects controlled statistical noise so the model learns general patterns while individual confidentiality is preserved. Which technique is this?",
  options: { A: "Homomorphic Encryption", B: "Data Provenance Tracking", C: "Tokenization", D: "Differential Privacy" } },

{ id: 68, topic: "TPRM", correct: "A",
  q: "Karthik Iyer is an AI Governance Manager at a Singapore bank onboarding multiple AI vendors (data pipelines, pretrained models, cloud analytics). Before any risk assessment or contractual control, he establishes complete visibility into which vendors are involved, what AI components they supply, and how their tech connects with internal systems. Which TPRM step is Karthik executing?",
  options: { A: "Identification and Mapping", B: "Contractual and Compliance Controls", C: "Due Diligence and Risk Assessment", D: "Integration and Continuous Monitoring" } },

{ id: 69, topic: "Lifecycle Governance", correct: "B",
  q: "A review of halted AI initiatives finds the failures didn't come from model architecture, training, or data prep. The issues trace back to a missing checkpoint that should have established purpose, scope boundaries, and acceptable risk exposure before technical work began. Which lifecycle stage of governance broke down?",
  options: { A: "Design governance", B: "Problem definition governance", C: "Training governance", D: "Data preparation governance" } },

{ id: 70, topic: "Verification", correct: "C",
  q: "A financial firm's AI fraud-detection system shows delayed alerts and inconsistent responses during a peak-volume period. Model logic and inputs are intact. Leadership wants to know whether the deployed system can sustain real-world demand without degrading responsiveness, stability, or user experience. Which verification category fits?",
  options: { A: "Data pipeline verification techniques", B: "Integration verification techniques", C: "Non-functional verification techniques", D: "Deployment and operational verification techniques" } },

{ id: 71, topic: "IR Phases", correct: "C",
  q: "Julian Reyes, CISO, finds an AI chatbot producing offensive and inappropriate responses due to abnormal behaviour. To limit immediate user and reputational harm while investigation continues, he orders the chatbot's automated responses suspended. Which IR phase is Julian invoking?",
  options: { A: "Recovery", B: "Eradication", C: "Containment", D: "Analysis and triage" } },

{ id: 72, topic: "Verification", correct: "A",
  q: "A hiring platform's AI underperforms for applicants from newly onboarded regions despite stable infrastructure and unchanged logic. Historical review shows the model trained primarily on data from earlier markets, with recent operational data only partially incorporated. The assurance review focuses on whether learning signals reflect the environment the model now operates in. Which technique addresses this?",
  options: { A: "Training data verification", B: "Performance testing", C: "Deployment validation", D: "Bias and fairness testing" } },

{ id: 73, topic: "Ethics", correct: "D",
  q: "A logistics firm's AI dynamically prioritises shipments during disruptions. After a prioritisation error causes contractual penalties, Andrew Collins, Director of Digital Operations, finds no formal ownership for approving updates, defining usage boundaries, or accepting operational risk when the system misbehaves. Which ethical principle is affected?",
  options: { A: "Fairness", B: "Transparency", C: "Privacy", D: "Accountability" } },

{ id: 74, topic: "Testing", correct: "B",
  q: "An insurer rolls out an AI claims-triage platform. Component checks during dev are clean. But when the platform is exercised across varied operating conditions, response patterns become inconsistent and performance degrades in ways not previously observed — only visible when the whole solution is exercised across its full operational workflow. Which functional testing type best surfaces this?",
  options: { A: "Integration Testing", B: "System Testing", C: "Unit Testing", D: "Acceptance Testing" } },

{ id: 75, topic: "BCP", correct: "B",
  q: "A data centre hosting multiple AI models has been flooded and evacuated. AI services need to keep running during disaster recovery. Which continuity approach should they implement?",
  options: { A: "Immediately rebuild in the same location", B: "Activate a pre-positioned disaster-recovery site with replicated models, traffic redirection with load balancing, model-consistency checksums, a temporary operations centre with remote staff, and cloud bursting for excess capacity", C: "Wait for the facility to dry before resuming", D: "Cease all operations until full recovery" } },

{ id: 76, topic: "Architectures", correct: "A",
  q: "Your AI team is building a machine translation engine for enterprise and regulatory use, where long, complex sentences must translate accurately. The previous RNN-based model struggled because it processed words sequentially. The new architecture must use self-attention to process the whole sequence in parallel and handle long-range dependencies. Which deep-learning architecture fits?",
  options: { A: "Transformer Networks", B: "Radial Basis Function Networks", C: "Autoencoders", D: "Convolutional Neural Networks (CNNs)" } },

{ id: 77, topic: "AI Risk Type", correct: "C",
  q: "A services firm introduces AI automation for routine work across departments. Over quarters, certain roles stop receiving new assignments, career progression narrows, and teams depend on a smaller set of specialists. No one is fired and AI runs within governance, but workforce planning reports a growing skill mismatch with the new AI-driven work. Which type of AI concern is this?",
  options: { A: "Ethical concern", B: "Long-term concern", C: "Societal concern", D: "Privacy and security concern" } },

{ id: 78, topic: "Governance Model", correct: "B",
  q: "At a large bank, AI is mostly built and managed inside individual business lines for local regulatory fit. Recent exams show that when AI risks span units, escalation is inconsistent, enterprise ownership is unclear, and the institution can't show consistent enforcement of governance. Regulators expect clearer lines of authority spanning the org. Gregory, CRO, must pick a model that satisfies that, even if business-unit discretion shrinks. Which model fits?",
  options: { A: "Hybrid AI governance model", B: "Centralized AI governance model", C: "DAO-driven model", D: "Federated AI governance model" } },

{ id: 79, topic: "Privacy Tech", correct: "C",
  q: "Sara Lin, CISO of a multinational bank, is concerned that repeated analytical queries on a spending-pattern AI could reverse-engineer individual transaction patterns from outputs even though direct identifiers are removed. She wants reduced inference risk while still allowing reliable population-level insight. Which technique fits?",
  options: { A: "Pseudonymization", B: "Generalization", C: "Differential privacy", D: "Data masking" } },

{ id: 80, topic: "Cryptography", correct: "B",
  q: "Victor Singh, CDO of a financial services firm, mandates that analytical computations on highly sensitive customer data must run directly on protected data, with neither the AI model nor the execution environment ever seeing plaintext. Which cryptographic technique does this require?",
  options: { A: "Tokenization", B: "Homomorphic Encryption", C: "AES-256 Encryption", D: "Transport Layer Security (TLS)" } },

{ id: 81, topic: "Compliance Focus", correct: "D",
  q: "An organisation deploys an AI system that runs automated functions alongside human operators in transportation. During a compliance assessment, reviewers examine how operational boundaries are defined and how human oversight is maintained when automated functions are active. Which compliance focus is being evaluated?",
  options: { A: "Network performance", B: "Vendor oversight", C: "Data security", D: "Safety and responsibility alignment" } },

{ id: 82, topic: "AI Risk Type", correct: "D",
  q: "A defence research org is experimenting with advanced autonomous systems that independently select and prioritise operational objectives. Michael Anders, chair of the AI Oversight Board, notes the system adapts faster than supervisors can evaluate. No incident yet, but leadership cannot define how human control, responsibility, and intervention would be maintained if it acted in unintended ways. Which category of AI concern is this?",
  options: { A: "Privacy and security concerns", B: "Societal concerns", C: "Ethical concerns", D: "Long-term concerns" } },

{ id: 83, topic: "Data Destruction", correct: "A",
  q: "David Chen is migrating historical customer transaction data to a cloud analytics platform. Conventional deletion may not suffice in a cloud where storage, backups, and infrastructure reuse are abstracted from his direct control. He needs an approach giving verifiable, irreversible protection against recovery while remaining compatible with shared cloud storage. Which method should he adopt?",
  options: { A: "Cryptographic erasure", B: "Physical destruction", C: "Secure wiping", D: "Randomization" } },

{ id: 84, topic: "Standards", correct: "C",
  q: "Peter Lin, CRO, wants a globally recognised standard that formalises AI governance as a management system across the lifecycle — internal accountability and external assurance. Which standard fits?",
  options: { A: "NIST AI Risk Management Framework", B: "EU AI Act", C: "ISO/IEC 42001", D: "ISO/IEC 23894" } },

{ id: 85, topic: "Regulation", correct: "B",
  q: "Thomas Yeong, Governance Lead, oversees an AI-driven background screening tool used in hiring. The system produces an automated assessment that negatively affects a candidate's eligibility. CFPB oversight applies. To ensure procedural fairness and due process, what must be provided to the affected individual?",
  options: { A: "SOTIF breach report", B: "Adverse-action notice", C: "BAA certification", D: "Prior express consent" } },

{ id: 86, topic: "Roles", correct: "D",
  q: "Sara Lin, CISO, faces an external review pointing out the organisation can't explain discrepancies between successive outputs of the same AI, even though business-level rationales are approved and input sources governed elsewhere. She wants accountability assigned to the role responsible for continuity and internal coherence of the system components that directly shape decision behaviour across releases. Which role fits?",
  options: { A: "Data steward", B: "Business owner", C: "AIOps team", D: "Model custodian" } },

{ id: 87, topic: "AI Classification", correct: "B",
  q: "Dr. Aris is classifying a legacy chess-playing system from the 1990s. It picks moves only from the current board state via predefined logic and exhaustive search; it neither remembers prior matches nor adapts strategy over time. Which AI classification fits?",
  options: { A: "Theory of Mind AI", B: "Reactive Machines", C: "Self-Aware AI", D: "Limited Memory AI" } },

{ id: 88, topic: "Procurement", correct: "B",
  q: "Jonathan Reed, AI Procurement Lead at a financial services firm, evaluates third-party providers for a risk-scoring capability that handles highly sensitive customer data. He emphasises confidentiality, integrity, and resilience across the full AI solution lifecycle — focusing on how vendors safeguard access, limit unnecessary data exposure, and respond to security incidents. Which criterion is he primarily applying?",
  options: { A: "Responsible and Ethical AI Practices", B: "Security and Data Privacy Measures", C: "Vendor Reputation and Track Record", D: "Data Localization, Contractual Flexibility and Support" } },

{ id: 89, topic: "Procurement", correct: "B",
  q: "Orion Health, a healthcare technology vendor, was shortlisted after demos and references, and contracts finalised to meet a tight rollout. During deployment planning, internal teams find the AI model behaves inconsistently across certain patient groups — concerns that were never examined before contracting. Addressing them now would force revisiting earlier decisions and slip the rollout. Which procurement stage went wrong?",
  options: { A: "Identify Potential AI Vendors and Solutions", B: "Conduct Risk and Technical Evaluations", C: "Monitor Performance and Compliance Continuously", D: "Negotiate Contracts and Risk Allocation Controls" } },

{ id: 90, topic: "Ethics", correct: "D",
  q: "A healthcare analytics firm embeds an AI recommender into chronic-care workflows that materially influences when clinicians intensify treatment. During a compliance exam, reviewers ask the firm to justify several specific recommendations. Aggregate validation and accuracy benchmarks are available, but the firm cannot reconstruct how individual patient factors drove those specific recommendations. Which ethics principle is most directly challenged?",
  options: { A: "Sustainability", B: "Safety and security", C: "Accountability", D: "Transparency" } },

{ id: 91, topic: "Risk Analysis", correct: "D",
  q: "Hannah Brooks, an AI Risk Mapping Specialist at a manufacturer, builds a visual diagram for a predictive-maintenance AI that traces how corrupted or incomplete training data could trigger a major failure and incorrect maintenance decisions. The diagram clearly separates controls that prevent failure (data validation) from controls that reduce impact (fallback rules, human review). Which risk-analysis technique is Hannah using?",
  options: { A: "Risk matrix", B: "Scenario analysis", C: "FMEA", D: "Bow-Tie Analysis" } },

{ id: 92, topic: "Privacy Governance", correct: "A",
  q: "Robert Chen, CISO, must approve an AI-driven recruitment system handling sensitive applicant data at scale. Approval cannot be technical readiness alone; regulators and internal oversight require evidence that privacy risks were systematically evaluated, mitigations documented, and data handling assessed before any real applicant data is processed. Which formally recognised governance activity provides this?",
  options: { A: "Privacy Impact Assessments", B: "Risk assessment framework", C: "Privacy Risk Identification", D: "Algorithmic Impact Assessments" } },

{ id: 93, topic: "Architectures", correct: "C",
  q: "Optic Inc. is building an industrial defect-classification system that must extract spatial features from very large images. The team needs an architecture optimised for local spatial pattern detection through layered filters and pooling. Which deep learning architecture is the best fit?",
  options: { A: "Transformer Networks", B: "Recurrent Neural Networks", C: "Convolutional Neural Networks (CNNs)", D: "Autoencoders" } },

{ id: 94, topic: "Bias Type", correct: "A",
  q: "A multinational recruitment firm uses an AI to shortlist technical roles. Jonathan Meyers, Head of Talent Analytics, finds that applicants with certain career paths and phrasing styles are consistently ranked higher even when qualifications are comparable. The training data appears balanced; the model's learned ranking logic favours certain keyword combinations from optimisation. Which type of bias best explains this?",
  options: { A: "Algorithmic bias", B: "Societal bias", C: "Confirmation bias", D: "Data bias" } },

{ id: 95, topic: "Continuity", correct: "D",
  q: "Claire Nguyen, CRO, is assessing AI-enabled financial systems for continuity. She identifies which AI models support core financial transactions (fraud detection, payment authorisation), evaluates the operational, financial, and regulatory consequences if those systems became unavailable or misbehaved, and uses the result to determine recovery priorities and acceptable downtime thresholds. Which process is Claire performing?",
  options: { A: "Disaster recovery planning", B: "Post-incident review", C: "Incident response lifecycle", D: "Business Impact Analysis" } },

{ id: 96, topic: "Privacy Architecture", correct: "A",
  q: "A consumer goods firm is designing a new analytics platform that will ingest customer behaviour data. Rather than retrofitting privacy controls late, leadership requires that privacy considerations — minimisation, purpose limitation, access constraints — be embedded into the system's architecture and processes from the earliest design stage. Which principle is being applied?",
  options: { A: "Privacy by Design", B: "Privacy by Default", C: "Data minimisation alone", D: "Purpose limitation alone" } },

{ id: 97, topic: "Documentation", correct: "C",
  q: "An assurance review finds the organisation cannot provide standardised, repeatable documentation describing the origin, curation process, constraints, and known limitations of the data used to train and operate its AI systems. Leadership wants a formal artefact dedicated to documenting characteristics and stewardship of data assets themselves, independent of any specific model or decision use. Which artefact serves this purpose?",
  options: { A: "Model cards", B: "Transparency reports", C: "Data sheets", D: "Decision logs" } },

{ id: 98, topic: "Leadership", correct: "A",
  q: "Marcus Thorne, Chief Innovation Officer, observes that business units across the company independently select AI tools and start projects without shared standards, coordination, or long-term alignment. Systems don't integrate, oversight is inconsistent, and executives lack a consolidated view of investments. He needs a leadership decision defining priorities, alignment mechanisms, and long-term direction for AI adoption org-wide. Which category fits?",
  options: { A: "AI Strategy", B: "Data Modernization", C: "AI Planning", D: "Pilot Development" } },

{ id: 99, topic: "Governance Concept", correct: "B",
  q: "Michael Yoo, CRO of a bank, deploys an AI loan-approval system across multiple jurisdictions. Compliance highlights that adverse decisions must be defensible to applicants and regulators, especially when automated decisions materially affect individuals. Michael requires the organisation to be able to justify such decisions for accountability and regulatory scrutiny, independent of the specific technique used to derive explanations. Which governance concept is this?",
  options: { A: "Feature attribution", B: "Right to explanation", C: "User consent rights", D: "Transparency obligations" } },

{ id: 100, topic: "Regulator", correct: "B",
  q: "Rachel Brooks, CISO of a telecommunications provider, oversees an AI system using synthetic AI-generated voices for outbound consumer calls. The org must implement caller identification, obtain appropriate consent, and provide immediate opt-out — because AI-generated voices are regulated in the same manner as traditional robocalls. Which regulator classifies AI-generated voices under the same rules as artificial or prerecorded robocalls?",
  options: { A: "SEC", B: "FCC", C: "FDA", D: "FINRA" } },

];

window.QUESTIONS_BY_TOPIC = (function () {
  const m = {};
  window.QUESTIONS.forEach((q) => { (m[q.topic] = m[q.topic] || []).push(q.id); });
  return m;
})();
