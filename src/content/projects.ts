import adidasModelDriftPipeline from '../assets/adidas-model-drift.png';
import bbvaAiPlatform from '../assets/bbva-ai-platform.png';

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  jobTag: 'Giza' | 'Adidas' | 'BBVA';
  accentColor: string;
  period: string;
  role: string;
  systemType: string;
  scale: string;
  summary: string;
  problem: string;
  diagram?: {
    src: string;
    alt: string;
  };
  built: string[];
  architecture: string[];
  decisions: string[];
  impact: string[];
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: 'fund-management-optimization',
    title: 'Fund Management & Optimization Platform',
    eyebrow: 'Backend architecture / DeFi operations',
    jobTag: 'Giza',
    accentColor: '#f97316',
    period: 'Jun 2023 - Present',
    role: 'Backend and platform owner',
    systemType: 'Fund operations backend',
    scale: '5k daily users, high-volume financial workflows',
    summary:
      'A production backend platform for managing high-volume fund operations and optimization workflows.',
    problem:
      'The system needed to support daily operational users, reliable execution paths, and high-volume financial workflows while staying clear enough for a small engineering team to evolve.',
    built: [
      'Designed and implemented backend services for fund management and optimization.',
      'Built core Python services and execution-facing TypeScript components.',
      'Created infrastructure and delivery workflows for repeatable production releases.',
    ],
    architecture: [
      'FastAPI services deployed on Cloud Run.',
      'Cloud SQL for relational persistence.',
      'Terraform-managed Google Cloud infrastructure.',
      'CI/CD workflows for service delivery and operational consistency.',
    ],
    decisions: [
      'Kept service boundaries centered on fund operations so product workflows stayed understandable.',
      'Used managed cloud services where operational reliability mattered more than infrastructure novelty.',
      'Made delivery repeatable with Terraform and CI/CD instead of manual production changes.',
    ],
    impact: [
      'Supported 5k daily users.',
      'Handled high-volume operations including $4B volume and $40M peak figures from public resume material.',
      'Improved the reliability and maintainability of core backend workflows.',
    ],
    technologies: ['Python', 'FastAPI', 'TypeScript', 'GCP', 'Cloud Run', 'Cloud SQL', 'Terraform', 'CI/CD'],
  },
  {
    slug: 'verifiable-ml-platform',
    title: 'Verifiable ML Execution Platform',
    eyebrow: 'ZKML / distributed systems',
    jobTag: 'Giza',
    accentColor: '#f97316',
    period: 'Jun 2023 - Present',
    role: 'Platform backend engineer',
    systemType: 'Verifiable ML execution platform',
    scale: 'Foundation for model registration and execution workflows',
    summary:
      'An initial platform for managing and executing verifiable machine-learning models across distributed cloud services.',
    problem:
      'The product needed a foundation for registering, managing, and executing ML models in a way that could support verifiable computation workflows.',
    built: [
      'Developed the initial model management and execution platform.',
      'Connected Python services with Rust components where lower-level execution was needed.',
      'Created asynchronous workflows for model execution and artifact handling.',
    ],
    architecture: [
      'Python services for orchestration and API workflows.',
      'Rust components for execution-oriented responsibilities.',
      'Pub/Sub for asynchronous coordination.',
      'GCS for model and artifact storage.',
    ],
    decisions: [
      'Separated orchestration, execution, and storage concerns so the platform could evolve safely.',
      'Used asynchronous coordination for execution workflows that did not fit a single request lifecycle.',
      'Kept lower-level execution responsibilities close to Rust components where that boundary made sense.',
    ],
    impact: [
      'Established the technical foundation for ZKML platform workflows.',
      'Created a clearer service boundary between orchestration, execution, and storage.',
      'Made the platform easier to extend as model execution requirements evolved.',
    ],
    technologies: ['Python', 'Rust', 'GCP', 'Pub/Sub', 'GCS', 'Distributed systems', 'ZKML'],
  },
  {
    slug: 'recommendation-mlops',
    title: 'Detecting Model Drift for a Recommendation System',
    eyebrow: 'Adidas / MLOps / production ML',
    jobTag: 'Adidas',
    accentColor: '#111111',
    period: 'Jun 2022 - Jun 2023',
    role: 'MLOps engineer',
    systemType: 'Model drift monitoring workflow',
    scale: 'Daily metrics across recommendation model versions',
    summary:
      'An incremental monitoring system for detecting drift in a product-page recommendation model and helping data scientists decide when to retrain.',
    problem:
      'I was responsible for the MLOps side of several recommendation-system pipelines at Adidas. One of them powered the recommendations shown on product detail pages, and the model was retrained on a fixed two-week schedule. The team needed a clearer way to understand whether that schedule was enough, whether a newly trained model was actually better, and when model performance was starting to deteriorate before the next planned retraining window.',
    diagram: {
      src: adidasModelDriftPipeline,
      alt: 'Architecture diagram showing the Adidas model drift monitoring pipeline from Jenkins scheduling through AWS batch inference, metrics reporting, and alerts.',
    },
    built: [
      'Worked with data scientists to define the model metrics that mattered for drift and performance monitoring.',
      'Added a Jenkins pipeline step that calculated and persisted the daily metrics after each run.',
      'Built a historical view of those metrics so the team could compare the current model against previous days and previous model versions.',
      'Created a static metrics report that data scientists could download and review while broader dashboard access was still unavailable.',
      'Designed an alerting layer where data scientists could define metric-specific rules, thresholds, and deterioration patterns in Python.',
    ],
    architecture: [
      'Jenkins orchestrated the training and monitoring steps in the existing ML pipeline.',
      'Amazon SageMaker trained the model on the two-week schedule and stored versioned artifacts in Amazon S3.',
      'Amazon EMR ran the daily batch inference job and the metric computation step for drift detection.',
      'Amazon S3 stored the daily input data, predictions, and metric results as a time series.',
      'Jenkins artifacts exposed the generated static report for manual review.',
      'Rule-based alerting evaluated drift conditions and sent notifications to team channels.',
      'The design kept the first version simple while leaving a path to publish the same metrics into Grafana later.',
    ],
    decisions: [
      'Started with downloadable static reports because dashboard access was not ready yet.',
      'Let data scientists define rules in Python so alerting stayed close to their model knowledge.',
      'Persisted daily metrics as history so retraining decisions could compare model versions, not just one run.',
    ],
    impact: [
      'Gave the team daily visibility into how the recommendation model was behaving between scheduled retraining runs.',
      'Helped data scientists reason about whether a new model should replace the current one.',
      'Created an early-warning mechanism for performance degradation before the two-week retraining cycle.',
      'Turned drift monitoring into an extensible Python workflow instead of a one-off manual check.',
    ],
    technologies: ['Python', 'Jenkins', 'Amazon SageMaker', 'Amazon EMR', 'Amazon S3', 'Slack', 'Model drift'],
  },
  {
    slug: 'emr-databricks-migration',
    title: 'EMR to Databricks Migration',
    eyebrow: 'Data platform migration',
    jobTag: 'Adidas',
    accentColor: '#111111',
    period: 'Jun 2022 - Jun 2023',
    role: 'MLOps migration engineer',
    systemType: 'ML and ETL platform migration',
    scale: 'Critical workloads moved from EMR to Databricks',
    summary:
      'Migration of ML and ETL workloads from EMR to Databricks with supporting delivery automation.',
    problem:
      'Existing workloads needed to move to a more standardized execution environment while preserving delivery velocity and operational clarity.',
    built: [
      'Led migration paths for ML and ETL workloads.',
      'Created deployment workflows for Databricks jobs.',
      'Aligned pipelines and team practices around the new platform.',
    ],
    architecture: [
      'Databricks for workload execution.',
      'Jenkins for CI/CD and deployment orchestration.',
      'Reusable delivery patterns for ML and ETL jobs.',
    ],
    decisions: [
      'Standardized deployment workflows so migrated jobs could be operated consistently.',
      'Moved workloads incrementally to reduce disruption while teams adapted to Databricks.',
      'Kept reusable delivery patterns visible so later migrations did not become bespoke projects.',
    ],
    impact: [
      'Moved critical workloads from EMR to Databricks.',
      'Made delivery workflows more repeatable.',
      'Helped teams converge on shared platform practices.',
    ],
    technologies: ['Databricks', 'EMR', 'Jenkins', 'CI/CD', 'ETL', 'MLOps'],
  },
  {
    slug: 'data-ai-platform-services',
    title: 'Hybrid Cloud AI Platform',
    eyebrow: 'BBVA / hybrid cloud / ML platform',
    jobTag: 'BBVA',
    accentColor: '#1464a5',
    period: 'Nov 2018 - May 2022',
    role: 'Junior ML platform engineer',
    systemType: 'Hybrid private cloud and AWS AI platform',
    scale: 'Reusable workflows for data engineering, training, and inference',
    summary:
      'A hybrid cloud platform that helped data scientists use AWS services from the bank environment without losing the security and compliance model of the private cloud.',
    problem:
      'At BBVA, we were trying to reduce friction for data scientists who needed scalable cloud compute while still working inside the bank security model. The goal was to connect the private cloud environment with AWS through Direct Connect, so workloads could use public cloud services without sending traffic through the open internet. I was more junior in this project, and my contribution was focused on making the platform usable for data engineering and early ML deployment workflows.',
    diagram: {
      src: bbvaAiPlatform,
      alt: 'Architecture diagram showing the BBVA hybrid cloud AI platform connecting BBVA private cloud, Bitbucket, Jenkins on Kubernetes, AWS Direct Connect, and AWS services.',
    },
    built: [
      'Helped define repository-based JSON configuration files where teams described the steps their workflow needed to run.',
      'Worked on the data engineering path, especially EMR configuration aligned with the bank security practices.',
      'Supported workflows that used S3 for data storage and EMR for batch data processing jobs.',
      'Helped support data pipelines written in Scala or Python with PySpark, depending on the team and workload.',
      'Explored SageMaker for model training, model deployment, and online inference through SageMaker endpoints.',
      'Contributed to platform automation that reacted to Bitbucket project changes and connected repository configuration with AWS execution workflows.',
    ],
    architecture: [
      'Direct Connect linked the bank private cloud environment with AWS while keeping traffic off the public internet.',
      'Projects were hosted in Bitbucket, with workflow steps defined in JSON files inside each project repository.',
      'CI/CD ran through Jenkins deployed on Kubernetes.',
      'The JSON configuration created or reused AWS Step Functions to orchestrate the execution flow.',
      'AWS Lambda automation handled project-change detection and workflow glue logic.',
      'EMR and S3 supported data engineering workloads and data storage.',
      'The architecture supported both batch-oriented projects and projects that needed real-time inference.',
      'SageMaker supported ML training and online inference through managed endpoints.',
    ],
    decisions: [
      'Kept workflow definitions in repository JSON so deployments were explicit and reviewable.',
      'Used AWS-managed compute where it reduced deployment friction for data scientists.',
      'Treated network connectivity and security practices as part of the platform design, not as an afterthought.',
    ],
    impact: [
      'Made it easier for data scientists to use AWS compute while staying within bank compliance constraints.',
      'Created a repeatable path for batch data engineering jobs using EMR, S3, Scala, and PySpark.',
      'Helped validate SageMaker as a path for model training and online inference deployments.',
    ],
    technologies: [
      'AWS',
      'Direct Connect',
      'Bitbucket',
      'Jenkins',
      'Kubernetes',
      'Step Functions',
      'Lambda',
      'SageMaker',
      'EMR',
      'S3',
      'Scala',
      'PySpark',
    ],
  },
  {
    slug: 'onnx-inference-framework',
    title: 'ONNX Inference Framework',
    eyebrow: 'ML serving / inference',
    jobTag: 'BBVA',
    accentColor: '#1464a5',
    period: 'Nov 2018 - May 2022',
    role: 'ML serving engineer',
    systemType: 'ONNX inference framework',
    scale: 'Reusable serving path for production ML workloads',
    summary:
      'A scalable inference framework using ONNX and service APIs to support production ML execution.',
    problem:
      'ML models needed a more portable and scalable serving path that could fit platform standards and production service expectations.',
    built: [
      'Created core inference framework components around ONNX.',
      'Exposed inference capabilities through backend services.',
      'Integrated the framework into broader ML platform workflows.',
    ],
    architecture: [
      'ONNX-based model execution.',
      'FastAPI services for serving and integration.',
      'Platform components designed for reuse by multiple workflows.',
    ],
    decisions: [
      'Used ONNX to improve model portability across serving environments.',
      'Put inference behind service APIs so ML execution could fit production integration patterns.',
      'Built reusable framework pieces instead of one-off serving code for individual models.',
    ],
    impact: [
      'Improved portability of ML inference workloads.',
      'Created reusable serving patterns for platform teams.',
      'Helped bridge ML lifecycle tooling with production service APIs.',
    ],
    technologies: ['ONNX', 'Python', 'FastAPI', 'ML infrastructure', 'Microservices'],
  },
];
