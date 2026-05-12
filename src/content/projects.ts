export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  jobTag: 'Giza' | 'Adidas' | 'BBVA';
  accentColor: string;
  summary: string;
  problem: string;
  built: string[];
  architecture: string[];
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
    impact: [
      'Established the technical foundation for ZKML platform workflows.',
      'Created a clearer service boundary between orchestration, execution, and storage.',
      'Made the platform easier to extend as model execution requirements evolved.',
    ],
    technologies: ['Python', 'Rust', 'GCP', 'Pub/Sub', 'GCS', 'Distributed systems', 'ZKML'],
  },
  {
    slug: 'recommendation-mlops',
    title: 'Recommendation Systems MLOps',
    eyebrow: 'MLOps / production ML',
    jobTag: 'Adidas',
    accentColor: '#111111',
    summary:
      'MLOps standards and tooling for recommendation-system teams running batch inference and production ML workflows.',
    problem:
      'Multiple teams needed consistent practices for deploying, monitoring, and operating recommendation workloads with less manual coordination.',
    built: [
      'Standardized best practices and shared tooling for MLOps workflows.',
      'Built CI/CD pipelines for ML and ETL delivery.',
      'Developed monitoring and alerting around batch inference behavior.',
    ],
    architecture: [
      'Databricks-based workload execution.',
      'Jenkins pipelines for deployment automation.',
      'Monitoring flows focused on model drift and inference health.',
    ],
    impact: [
      'Improved consistency across recommendation-system delivery.',
      'Reduced friction in ML workload deployment.',
      'Improved visibility into model drift and batch inference quality.',
    ],
    technologies: ['Databricks', 'Jenkins', 'CI/CD', 'Batch inference', 'Monitoring', 'Model drift'],
  },
  {
    slug: 'emr-databricks-migration',
    title: 'EMR to Databricks Migration',
    eyebrow: 'Data platform migration',
    jobTag: 'Adidas',
    accentColor: '#111111',
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
    impact: [
      'Moved critical workloads from EMR to Databricks.',
      'Made delivery workflows more repeatable.',
      'Helped teams converge on shared platform practices.',
    ],
    technologies: ['Databricks', 'EMR', 'Jenkins', 'CI/CD', 'ETL', 'MLOps'],
  },
  {
    slug: 'data-ai-platform-services',
    title: 'Data & AI Platform Services',
    eyebrow: 'Internal platform / ML lifecycle',
    jobTag: 'BBVA',
    accentColor: '#1464a5',
    summary:
      'Core platform services and SDKs for ETL, ML lifecycle workflows, governance, and business-facing feature delivery.',
    problem:
      'Data and ML teams needed reusable internal services that made lifecycle workflows, governance, and feature delivery easier to build on.',
    built: [
      'Built Python microservices and SDKs for platform workflows.',
      'Developed ETL tooling, ML lifecycle services, and governance flows.',
      'Worked with business teams to deliver features on a hybrid cloud platform.',
    ],
    architecture: [
      'Python microservices and reusable SDKs.',
      'FastAPI services for platform-facing APIs.',
      'AWS services including SageMaker, EMR, S3, and Lambda.',
    ],
    impact: [
      'Created reusable platform components for Data and AI workflows.',
      'Improved developer experience for internal teams.',
      'Supported business-facing delivery on shared infrastructure.',
    ],
    technologies: ['Python', 'FastAPI', 'SDKs', 'AWS', 'SageMaker', 'EMR', 'S3', 'Lambda'],
  },
  {
    slug: 'onnx-inference-framework',
    title: 'ONNX Inference Framework',
    eyebrow: 'ML serving / inference',
    jobTag: 'BBVA',
    accentColor: '#1464a5',
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
    impact: [
      'Improved portability of ML inference workloads.',
      'Created reusable serving patterns for platform teams.',
      'Helped bridge ML lifecycle tooling with production service APIs.',
    ],
    technologies: ['ONNX', 'Python', 'FastAPI', 'ML infrastructure', 'Microservices'],
  },
];
