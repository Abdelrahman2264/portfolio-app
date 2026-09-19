import { SkillModule, FilterOption } from '../models/skills.model';

export const FILTER_OPTIONS: FilterOption[] = [
  { id: 'all', label: 'All Modules (6)', icon: '⚡' },
  { id: 'cloud-backend', label: 'Cloud & .NET', icon: '☁️' },
  { id: 'data-ai', label: 'Data & AI', icon: '🤖' },
  { id: 'core-systems', label: 'Core & Systems', icon: '🛠️' }
];

export const SKILL_MODULES: SkillModule[] = [
  // MOD 01: Enterprise .NET Stack
  {
    id: 'backend',
    modCode: 'MOD.01 // BACKEND ARCHITECTURE',
    title: 'Enterprise .NET Systems',
    subtitle: 'High-concurrency Web APIs, Clean CQRS & event pipelines',
    category: 'backend',
    filterGroup: 'cloud-backend',
    statusText: 'PRODUCTION READY',
    headerSvgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 10l3-2 3 2v4l-3 2-3-2z"/></svg>`,
    skills: [
      {
        id: 'aspnet-core',
        name: 'ASP.NET Core / MVC',
        sub: 'REST APIs • Middleware • JWT',
        scope: 'REST APIs, Dependency Injection, Middleware, Filters & Auth',
        tier: 'Enterprise Backend Tier',
        projects: ['Souqly Logistics', 'Safetystore ERP', 'Resturant POS'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><line x1="6" y1="6.5" x2="6.01" y2="6.5"/><line x1="6" y1="17.5" x2="6.01" y2="17.5"/></svg>`
      },
      {
        id: 'csharp',
        name: 'C# (.NET 8 / 9 / 10)',
        sub: 'Type-Safe • Concurrency • Async',
        scope: 'Generics, Async/Await, Memory Optimization & Modern Syntax',
        tier: 'Primary Enterprise Runtime',
        projects: ['All 9 Production Systems', 'Live Backends'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
      },
      {
        id: 'clean-arch',
        name: 'Clean Architecture',
        sub: 'CQRS • MediatR • DDD Patterns',
        scope: 'Domain Separation, MediatR Handlers, Repository & UnitOfWork',
        tier: 'System Design Pattern',
        projects: ['Safetystore ERP', 'AlexSupport Desk', 'Souqly'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>`
      },
      {
        id: 'ef-core',
        name: 'EF Core • LINQ',
        sub: 'Migrations • Compiled Queries • ORM',
        scope: 'Code-First Migrations, Split Queries, Shadow Properties & Indexes',
        tier: 'ORM & Query Optimization',
        projects: ['Souqly', 'Safetystore', 'Inventex', 'Todo'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><path d="M8.5 7.5l7 7M8.5 6h7M18 8.5v7"/></svg>`
      },
      {
        id: 'rest-signalr',
        name: 'REST APIs • SignalR',
        sub: 'Real-Time Hubs • WebSockets • SSE',
        scope: 'Bi-directional WebSockets, Notification Hubs & Scalable Event Push',
        tier: 'Real-Time Communications',
        projects: ['AlexSupport Service Desk', 'Souqly Live Tracking'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h4l3-7 4 14 3-7h6"/></svg>`
      },
      {
        id: 'blazor',
        name: 'Blazor (Server • WASM)',
        sub: 'C# In Browser • Interactive UI',
        scope: 'Stateful Real-Time Components & Single-Language Full-Stack .NET',
        tier: 'Component Web Framework',
        projects: ['AlexSupport Internal Desk', 'Enterprise Portals'],
        level: 4,
        levelText: '4/5 • Advanced Engineering',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
      },
      {
        id: 'rust-ffi',
        name: 'Rust API Integration',
        sub: 'Native FFI • Low Latency • Safety',
        scope: 'Safe Native Interop (FFI), Memory Density & Low-Latency Calculations',
        tier: 'High-Performance Systems',
        projects: ['Enterprise Acceleration Modules'],
        level: 4,
        levelText: '4/5 • Systems Engineering',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M6.34 17.66l1.42-1.42M16.24 7.76l1.42-1.42"/></svg>`
      },
      {
        id: 'jquery-ajax',
        name: 'jQuery • AJAX',
        sub: 'Asynchronous DOM • Legacy Support',
        scope: 'Asynchronous In-Page Requests & Enterprise Legacy Portal Support',
        tier: 'Compatibility & Dynamic UI',
        projects: ['Inventex Inventory', 'Safetystore Portal'],
        level: 4,
        levelText: '4/5 • Production Support',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`
      }
    ]
  },

  // MOD 02: AWS Cloud & Infrastructure
  {
    id: 'aws',
    modCode: 'MOD.02 // CLOUD INFRASTRUCTURE',
    title: 'Cloud & Infrastructure (AWS)',
    subtitle: 'Elastic compute clusters, managed databases & containers',
    category: 'aws',
    filterGroup: 'cloud-backend',
    statusText: 'AWS NATIVE',
    statusColor: '#f59e0b',
    headerSvgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    skills: [
      {
        id: 'aws-ec2',
        name: 'AWS EC2',
        sub: 'Auto-Scaling • Linux/Win • Elastic IP',
        scope: 'Auto-scaling instances, Ubuntu/Linux daemons, Nginx reverse proxy',
        tier: 'Scalable Cloud Compute',
        projects: ['Souqly Logistics', 'Safetystore Cloud Node'],
        level: 5,
        levelText: '5/5 • Core Infrastructure',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><line x1="6" y1="6.5" x2="6.01" y2="6.5"/><line x1="6" y1="17.5" x2="6.01" y2="17.5"/></svg>`
      },
      {
        id: 'aws-s3',
        name: 'AWS S3',
        sub: 'Secure Buckets • Presigned URLs',
        scope: 'Buckets, Pre-signed Upload URLs, Static Web & Lifecycle Rules',
        tier: 'Distributed Object Storage',
        projects: ['Souqly Media', 'Medibook EHR', 'Safetystore'],
        level: 5,
        levelText: '5/5 • Core Infrastructure',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>`
      },
      {
        id: 'aws-rds',
        name: 'AWS RDS',
        sub: 'Multi-AZ • SQL Server • Automated Backup',
        scope: 'Multi-AZ Failover, Automated Daily Backups & Parameter Groups',
        tier: 'Managed Cloud Relational DB',
        projects: ['Souqly Production Database', 'Enterprise Hub'],
        level: 5,
        levelText: '5/5 • Core Infrastructure',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></svg>`
      },
      {
        id: 'aws-lambda',
        name: 'AWS Lambda',
        sub: 'Serverless Tasks • Event Ingestion',
        scope: 'Microsecond Ingestion, S3 Trigger Pipelines, Webhook Handlers',
        tier: 'Event-Driven Serverless',
        projects: ['Souqly Webhooks', 'Image Resizer Worker'],
        level: 4,
        levelText: '4/5 • Cloud Native',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 20l5-12 4 12M15 16h-6M18 4l-4 8"/></svg>`
      },
      {
        id: 'docker',
        name: 'Docker Containers',
        sub: 'Multi-Stage Builds • Microservices',
        scope: 'Multi-stage Dockerfiles, Compose Orchestration & Environment Parity',
        tier: 'Containerization & Portability',
        projects: ['All Production Systems', 'Microservices'],
        level: 5,
        levelText: '5/5 • Core Infrastructure',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19a11 11 0 0 0 16 0"/><rect x="3" y="10" width="3" height="3"/><rect x="7" y="10" width="3" height="3"/><rect x="11" y="10" width="3" height="3"/><rect x="7" y="6" width="3" height="3"/><rect x="11" y="6" width="3" height="3"/><rect x="15" y="10" width="3" height="3"/></svg>`
      },
      {
        id: 'cloudwatch',
        name: 'CloudWatch',
        sub: 'Telemetry • Alarms • Structured Logs',
        scope: 'Metric Dashboards, Alerting SNS, Synthetic Probes & Log Streams',
        tier: 'Cloud Observability',
        projects: ['Souqly Infrastructure', 'AWS Production Hub'],
        level: 5,
        levelText: '5/5 • Core Infrastructure',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><polyline points="12 6 12 12 16 14"/></svg>`
      },
      {
        id: 'iam',
        name: 'IAM & Cloud Security',
        sub: 'Least Privilege • Roles • Policies',
        scope: 'Role-based Security, Least Privilege JSON Policies, STS Credentials',
        tier: 'Cloud Identity Governance',
        projects: ['Enterprise Cloud Environment'],
        level: 5,
        levelText: '5/5 • Core Infrastructure',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="2"/></svg>`
      },
      {
        id: 'iis',
        name: 'IIS Server',
        sub: 'App Pools • Reverse Proxy • SSL',
        scope: 'Application Pools, URL Rewrite, SSL Bindings & Worker Processes',
        tier: 'Windows Enterprise Hosting',
        projects: ['Internal Corporate Portals'],
        level: 4,
        levelText: '4/5 • Production Hosting',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><path d="M9 15h6"/></svg>`
      }
    ]
  },

  // MOD 03: Data Tier & Persistence
  {
    id: 'data',
    modCode: 'MOD.03 // DATA ARCHITECTURE',
    title: 'Data Engineering & DB',
    subtitle: 'Relational databases, distributed schemas & ETL pipelines',
    category: 'data',
    filterGroup: 'data-ai',
    statusText: 'ACID COMPLIANT',
    statusColor: '#10b981',
    headerSvgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    skills: [
      {
        id: 'sql-server',
        name: 'SQL Server',
        sub: 'Stored Procs • T-SQL • Index Tuning',
        scope: 'Stored Procedures, Dynamic T-SQL, Execution Plan Analysis & ACID',
        tier: 'Primary Relational Engine',
        projects: ['Safetystore', 'Souqly', 'AlexSupport', 'Resturant POS'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="3"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="7" cy="7" r="1"/><circle cx="11" cy="7" r="1"/></svg>`
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        sub: 'Document Store • Aggregations • Atlas',
        scope: 'BSON Schemas, Document Storage, Geospatial Indexing & Atlas',
        tier: 'Document Database',
        projects: ['Souqly Catalog', 'Modern Document Storage'],
        level: 4,
        levelText: '4/5 • Production Scale',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2s-6 6-6 11a6 6 0 0 0 12 0c0-5-6-11-6-11z"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`
      },
      {
        id: 'etl',
        name: 'ETL Pipelines',
        sub: 'Automated Extraction • Batch Sync',
        scope: 'Bulk Transformation, Validation, Normalization & Cross-DB Sync',
        tier: 'Data Integration & Transformation',
        projects: ['IMDb Dataset Analytics', 'Souqly Pipeline'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><polyline points="15 6 21 12 15 18"/><line x1="3" y1="6" x2="9" y2="6"/><line x1="3" y1="18" x2="9" y2="18"/></svg>`
      },
      {
        id: 'selenium',
        name: 'Selenium',
        sub: 'Headless Scraping • Browser Testing',
        scope: 'Dynamic JS Scraping, Robotic Browser Control, Data Harvesting',
        tier: 'Web Ingestion & Headless Scraping',
        projects: ['Automated Web Scrapers', 'E-commerce Data Feeds'],
        level: 4,
        levelText: '4/5 • Systems Engineering',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>`
      },
      {
        id: 'jupyter',
        name: 'Jupyter Notebooks',
        sub: 'EDA • Model Prototyping • Python',
        scope: 'Statistical Modeling, Reproducible Research & Visualization',
        tier: 'Exploratory Data Science',
        projects: ['IMDb Revenue Prediction Engine'],
        level: 5,
        levelText: '5/5 • Core Data Science',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M5.5 8.5a8 8 0 0 1 13 0M5.5 15.5a8 8 0 0 0 13 0"/><circle cx="17" cy="7" r="1.2"/></svg>`
      },
      {
        id: 'imdbpy',
        name: 'IMDbPY API',
        sub: 'Media Metadata • Box Office Ingestion',
        scope: 'High-Volume Film Metadata Fetching & Algorithmic Modeling',
        tier: 'Media Data Integration',
        projects: ['IMDb Revenue Prediction Engine'],
        level: 4,
        levelText: '4/5 • Data Integration',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8v8M10 8l2 5 2-5v8M18 8v8"/></svg>`
      }
    ]
  },

  // MOD 04: Applied AI & Machine Learning
  {
    id: 'ai',
    modCode: 'MOD.04 // APPLIED AI & ML',
    title: 'Data Science & AI',
    subtitle: 'Predictive modeling, regression pipelines & neural layers',
    category: 'ai',
    filterGroup: 'data-ai',
    statusText: 'PREDICTIVE ENGINE',
    statusColor: '#a855f7',
    headerSvgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    skills: [
      {
        id: 'scikit-learn',
        name: 'Scikit-learn',
        sub: 'Ensembles • Regression • Tuning',
        scope: 'Ensemble Methods, Random Forests, Gradient Boost & Pipelines',
        tier: 'Machine Learning Framework',
        projects: ['IMDb Box Office Revenue Predictor'],
        level: 5,
        levelText: '5/5 • Core Data Science',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7" cy="17" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="17" cy="17" r="3"/><line x1="9.5" y1="15" x2="14.5" y2="9"/></svg>`
      },
      {
        id: 'pandas-numpy',
        name: 'Pandas • NumPy',
        sub: 'Vectorized Ops • DataFrames • Tensors',
        scope: 'Matrix Math, High-Performance Filtering, Vectorized Operations',
        tier: 'Numerical & Tabular Computing',
        projects: ['IMDb Predictor', 'Data Pipeline Systems'],
        level: 5,
        levelText: '5/5 • Core Data Science',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`
      },
      {
        id: 'ml-pipelines',
        name: 'Machine Learning',
        sub: 'Predictive Modeling • Evaluation',
        scope: 'Feature Engineering, Cross-Validation, R2 Scoring & Residuals',
        tier: 'Predictive Systems',
        projects: ['IMDb Revenue Prediction Engine'],
        level: 5,
        levelText: '5/5 • Core Data Science',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="3"/></svg>`
      },
      {
        id: 'streamlit',
        name: 'Streamlit',
        sub: 'Interactive AI Dashboards • Rapid GUI',
        scope: 'Reactive Analytics Web Dashboards & Real-Time Model Inference',
        tier: 'Interactive Data UI',
        projects: ['IMDb Revenue Prediction Web App'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 20 2 20 12 2"/><circle cx="12" cy="15" r="2"/></svg>`
      },
      {
        id: 'power-bi',
        name: 'Power BI',
        sub: 'DAX • Star Schema • Executive KPIs',
        scope: 'DAX Measures, Star Schemas, Executive KPI Visualizations',
        tier: 'Business Intelligence & Analytics',
        projects: ['Safetystore Financial Analytics'],
        level: 4,
        levelText: '4/5 • Enterprise Analytics',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="4"/><line x1="12" y1="20" x2="12" y2="10"/><line x1="6" y1="20" x2="6" y2="15"/></svg>`
      },
      {
        id: 'tensorflow',
        name: 'TensorFlow',
        sub: 'Neural Layers • Deep Learning • Graph',
        scope: 'Neural Layers, Loss Optimization & Model Export',
        tier: 'Deep Learning Framework',
        projects: ['Deep Learning & Computer Vision Research'],
        level: 4,
        levelText: '4/5 • Applied AI',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
      },
      {
        id: 'eda',
        name: 'Data Cleaning • EDA',
        sub: 'Imputation • Feature Transforms • Dist',
        scope: 'Outlier Detection, Skewness Correction & Feature Scaling',
        tier: 'Feature Engineering Pipeline',
        projects: ['IMDb Revenue Prediction Engine'],
        level: 5,
        levelText: '5/5 • Core Data Science',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`
      }
    ]
  },

  // MOD 05: Languages & Core Runtime
  {
    id: 'core',
    modCode: 'MOD.05 // RUNTIME & LANGUAGES',
    title: 'Languages & Core Runtime',
    subtitle: 'Type-safe enterprise languages, web runtimes & scripting',
    category: 'core',
    filterGroup: 'core-systems',
    statusText: 'MULTI-PARADIGM',
    statusColor: '#0284c7',
    headerSvgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    skills: [
      {
        id: 'csharp-lang',
        name: 'C#',
        sub: 'Enterprise Backend • Strongly-Typed',
        scope: 'Object-Oriented, Memory Management, Async Tasks & Generics',
        tier: 'Primary Enterprise Language',
        projects: ['All .NET Web & Desktop Systems'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        sub: 'Strict Types • Enterprise Frontend',
        scope: 'Interfaces, Generics, Strong Typing & Scalable SPA Architecture',
        tier: 'Modern Type-Safe Frontend',
        projects: ['AlexSupport Platform', 'Angular Portals'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 8h6M10 8v8M14 16c1 1 2.5 1 3.5 0s.5-2-.5-2.5-3-1-3-2.5 1.5-2 3.5-1.5"/></svg>`
      },
      {
        id: 'angular',
        name: 'Angular',
        sub: 'RxJS • Dependency Injection • Forms',
        scope: 'Modules, Reactive Forms, RxJS Observables, Route Guards',
        tier: 'Enterprise Frontend Framework',
        projects: ['AlexSupport Platform', 'Internal Enterprise Portals'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 6 4 18 12 22 20 18 22 6 12 2"/><polygon points="12 6 7 17 9.5 17 10.5 14 13.5 14 14.5 17 17 17 12 6"/><line x1="11" y1="12" x2="13" y2="12"/></svg>`
      },
      {
        id: 'javascript',
        name: 'JavaScript (ES6+)',
        sub: 'Async/Await • Event Loops • DOM',
        scope: 'Closures, Promises, Fetch API & DOM Engineering',
        tier: 'Web Standard Runtime',
        projects: ['All Production Web Frontends'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12v3a1.5 1.5 0 0 0 3 0v-4M15 15.5c1 .5 2 .5 2.5 0s0-1.5-.5-2-2.5-.5-2.5-2 1-1.5 2-1.5"/></svg>`
      },
      {
        id: 'python',
        name: 'Python',
        sub: 'Data Science • Automation • Pandas',
        scope: 'Data Structures, NumPy Vectors, Scrapers & Automation',
        tier: 'AI & Automation Scripting',
        projects: ['IMDb Predictor', 'Data Extraction Scripts'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8 2 8 4 8 5v2h4v1H6C4 8 3 10 3 12s1 4 3 4h2v-2a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2V5c0-1.5-1.5-3-4-3z"/><path d="M12 22c4 0 4-2 4-3v-2h-4v-1h6c2 0 3-2 3-4s-1-4-3-4h-2v2a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v4c0 1.5 1.5 3 4 3z"/></svg>`
      },
      {
        id: 'sql-lang',
        name: 'SQL',
        sub: 'Query Optimization • Complex Joins',
        scope: 'Window Functions, CTEs, Joins, Triggers & Transactions',
        tier: 'Declarative Query Language',
        projects: ['All Database Layers'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`
      },
      {
        id: 'cpp',
        name: 'C++',
        sub: 'Pointers • Data Structures • Memory',
        scope: 'Memory Management, Pointers, Algorithms & OOP Foundations',
        tier: 'Low-Level Systems Language',
        projects: ['Computer Science & Systems Foundations'],
        level: 4,
        levelText: '4/5 • Academic Rigor',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="12" r="5"/><path d="M15 12h3M16.5 10.5v3M19 12h3M20.5 10.5v3"/></svg>`
      },
      {
        id: 'java-r',
        name: 'Java • R',
        sub: 'OOP Paradigms • Statistical Rigor',
        scope: 'Object-Oriented Architecture (Java) & Statistical Hypothesis Testing (R)',
        tier: 'Polyglot Engineering',
        projects: ['Enterprise Foundations & Analytics'],
        level: 4,
        levelText: '4/5 • Polyglot',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/></svg>`
      }
    ]
  },

  // MOD 06: Software Engineering & Reliability
  {
    id: 'ops',
    modCode: 'MOD.06 // SYS ENGINEERING',
    title: 'Software Engineering & Practices',
    subtitle: 'Architectural patterns, CI/CD automation & OpenAPI tooling',
    category: 'ops',
    filterGroup: 'core-systems',
    statusText: 'ENTERPRISE GRADE',
    statusColor: '#06b6d4',
    headerSvgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    skills: [
      {
        id: 'patterns-oop',
        name: 'Design Patterns • OOP',
        sub: 'SOLID • Factory • Strategy • CQRS',
        scope: 'SOLID, Repository, UnitOfWork, Factory, Strategy & Decorator',
        tier: 'Architecture Methodology',
        projects: ['All Enterprise Systems Architecture'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`
      },
      {
        id: 'system-analysis',
        name: 'System Analysis',
        sub: 'UML • Schema Design • Architecture',
        scope: 'ERD Schemas, Use-Cases, Sequence Diagrams & Enterprise Flow',
        tier: 'Software Engineering Lifecycle',
        projects: ['AlexSupport Desk', 'Safetystore ERP', 'Souqly'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
      },
      {
        id: 'git-github',
        name: 'Git • GitHub CI/CD',
        sub: 'Branch Flow • Code Reviews • Actions',
        scope: 'Feature Branching, Pull Request Reviews, Actions & Semantic Versioning',
        tier: 'Version Control & CI/CD',
        projects: ['All Production Codebases & Repositories'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="9" r="3"/><line x1="6" y1="9" x2="6" y2="15"/><path d="M9 9a9 9 0 0 1 6-3"/></svg>`
      },
      {
        id: 'postman-swagger',
        name: 'Postman • Swagger',
        sub: 'OpenAPI Docs • Automated Test Suites',
        scope: 'OpenAPI Specifications, Automated Integration Tests & Mock Servers',
        tier: 'API Verification & Docs',
        projects: ['All ASP.NET Core Web APIs'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
      },
      {
        id: 'vs-vscode',
        name: 'Visual Studio • VS Code',
        sub: 'Memory Diagnostics • Remote Debugging',
        scope: 'Memory Profiling, Diagnostic Tools, Remote Debugging & Extensions',
        tier: 'IDE & Profiling Toolchain',
        projects: ['Primary Daily Development Environment'],
        level: 5,
        levelText: '5/5 • Core Toolchain',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="16 2 22 6 22 18 16 22 8 15 2 12 8 9 16 2"/><line x1="16" y1="6" x2="16" y2="18"/></svg>`
      },
      {
        id: 'css-scss',
        name: 'Mobile-First CSS / SCSS',
        sub: 'Fluid Layouts • Dark Mode • 60fps Motion',
        scope: 'CSS Variables, Flexbox/Grid, Dark/Light Themes & Smooth 60fps Motion',
        tier: 'Responsive Design Engineering',
        projects: ['All User Interfaces & Web Portals'],
        level: 5,
        levelText: '5/5 • Core Specialization',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="11" y1="18" x2="13" y2="18"/></svg>`
      }
    ]
  }
];
