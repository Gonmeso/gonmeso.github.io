export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Giza',
    role: 'Lead Backend Developer / Lead Platform Engineer',
    period: 'Jun 2023 - Present',
    location: 'Madrid, Spain',
    summary:
      'Backend architecture, Google Cloud infrastructure, and delivery pipelines for systems in the DeFi and ZKML space.',
    highlights: [
      'Owned Google Cloud infrastructure, CI/CD, and system architecture with Terraform, FastAPI, Cloud Run, and Cloud SQL.',
      'Developed microservices for fund management and optimization, supporting 5k daily users and high-volume operations.',
      'Built the initial ZKML platform for managing and executing verifiable ML models using Python, Rust, Pub/Sub, and GCS.',
    ],
    technologies: ['Python', 'FastAPI', 'GCP', 'Terraform', 'Cloud Run', 'Cloud SQL', 'Pub/Sub', 'GCS', 'Rust', 'TypeScript'],
  },
  {
    company: 'Adidas',
    role: 'MLOps Engineer',
    period: 'Jun 2022 - Jun 2023',
    location: 'Zaragoza, Spain',
    summary:
      'MLOps for recommendation systems, with a focus on standards, migration work, monitoring, and deployment tooling.',
    highlights: [
      'Standardized MLOps best practices and tooling across recommendation-system teams.',
      'Led migration of ML and ETL workloads from EMR to Databricks.',
      'Built Jenkins-based CI/CD pipelines and monitoring for batch inference and model drift detection.',
    ],
    technologies: ['Databricks', 'Jenkins', 'CI/CD', 'Batch inference', 'Monitoring', 'Model drift'],
  },
  {
    company: 'BBVA Next Technologies',
    role: 'ML Engineer',
    period: 'Nov 2018 - May 2022',
    location: 'Madrid, Spain',
    summary:
      'Core Data and AI platform development across Python services, SDKs, ETL, ML lifecycle tooling, and cloud ML infrastructure.',
    highlights: [
      'Developed Python microservices and SDKs for ETL, ML lifecycle workflows, and governance.',
      'Built scalable ML infrastructure including an ONNX-based inference framework and FastAPI services.',
      'Contributed to a hybrid cloud AI platform on AWS with SageMaker, EMR, S3, and Lambda.',
    ],
    technologies: ['Python', 'Microservices', 'SDKs', 'ONNX', 'FastAPI', 'AWS', 'SageMaker', 'EMR', 'S3', 'Lambda'],
  },
  {
    company: 'Grupo Solutio',
    role: 'Backend Engineer',
    period: 'Feb 2018 - Nov 2018',
    location: 'Madrid, Spain',
    summary:
      'Backend engineering role before specializing further in platform, cloud, and ML infrastructure work.',
    highlights: ['Built and maintained backend services as part of engineering delivery teams.'],
    technologies: ['Backend engineering', 'Service development'],
  },
];

export const education = [
  {
    title: "Data Science Master's degree",
    place: 'Universitat Oberta de Catalunya',
    period: '2017 - 2019',
  },
  {
    title: 'Electrical Engineering Degree',
    place: 'Universidad Politecnica de Madrid',
    period: '2011 - 2017',
  },
];

export const certifications = [
  'AWS Solutions Architect Associate',
  'Microsoft Certified: Azure AI Fundamentals',
  'Udacity Data Engineer Nanodegree',
];
