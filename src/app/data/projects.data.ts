import { Project, ProjectFilterOption } from '../models/project.model';

export const PROJECT_FILTERS: ProjectFilterOption[] = [
  { id: 'all', label: 'All Systems' },
  { id: 'enterprise', label: 'Global Enterprise' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'data', label: 'Data & AI' }
];

export const PROJECTS: Project[] = [
  {
    id: 'alex-support',
    title: 'Alex Support',
    subtitle: 'IT Operations',
    category: 'enterprise',
    description: 'Enterprise IT operations platform consolidating IT service ticketing, Active Directory identity synchronization, and hardware asset lifecycles into a single authoritative management console.',
    image: 'Images/AlexSupport.png',
    tags: ['Blazor', 'SQL Server', 'SignalR', 'Active Directory', 'C#'],
    metrics: [
      { value: '< 200ms', label: 'Query Latency' },
      { value: 'Multi-Role', label: 'RBAC Security' },
      { value: 'Real-Time', label: 'SignalR Streams' }
    ],
    liveUrl: 'https://drive.google.com/file/d/1ZuMClTVzxrLv37WLGy5-XTR_vb4_UskZ/view?usp=drive_link',
    isReversed: false
  },
  {
    id: 'inventex',
    title: 'Inventex',
    subtitle: 'Global WMS',
    category: 'enterprise',
    description: 'High-volume Warehouse Management System engineered for Texstyle international enterprise — managing real-time inventory movements, automated SKU batching, pallet bin allocation, and role-based QA controls.',
    image: 'Images/Inventex.png',
    tags: ['Rust API on .NET 10', 'SQL Server', 'Angular', 'SCSS', 'TypeScript', 'C#'],
    metrics: [
      { value: '99.9%', label: 'Dispatch Precision' },
      { value: 'Sub-second', label: 'Barcode Scan Sync' },
      { value: 'Rust FFI', label: 'Native Acceleration' }
    ],
    githubUrl: 'https://github.com/Abdelrahman2264/Inventex',
    isReversed: true
  },
  {
    id: 'safetystore',
    title: 'Safety Store',
    subtitle: 'HSE Governance',
    category: 'enterprise',
    description: 'Industrial Health, Safety, and Environment management platform — monitoring hazardous chemical inventories, employee medical clearances, PPE inventory thresholds, and incident reports in full regulatory compliance.',
    image: 'Images/safetystore.png',
    tags: ['Rust API', 'Angular', 'C#', 'TypeScript', 'SQL Server', 'Multi-language'],
    metrics: [
      { value: '100%', label: 'OSHA Compliance' },
      { value: 'Automated', label: 'Audit Logging' },
      { value: 'Multi-AZ', label: 'Cloud Architecture' }
    ],
    githubUrl: 'https://github.com/Abdelrahman2264/SafetyStore',
    isReversed: false
  },
  {
    id: 'medibook',
    title: 'MediBook',
    subtitle: 'Healthcare Platform',
    category: 'enterprise',
    description: 'Clinical coordination and patient scheduling system coordinating medical staff, examination rooms, and specialists — eliminating scheduling overlaps through real-time concurrency resolution.',
    image: 'Images/medibook.jpeg',
    tags: ['REST API', 'Angular', 'TypeScript', 'C#', 'SQL Server', 'SignalR'],
    metrics: [
      { value: 'Zero Overlap', label: 'Slot Concurrency' },
      { value: 'HIPAA Ready', label: 'Encrypted Records' },
      { value: 'Instant', label: 'Patient Notifs' }
    ],
    githubUrl: 'https://github.com/Abdelrahman2264/medibook_FrontEnd',
    isReversed: true
  },
  {
    id: 'souqly',
    title: 'Souqly',
    subtitle: 'E-Commerce',
    category: 'frontend',
    description: 'Responsive modern e-commerce client — product filtering, reactive cart synchronization, and multi-step checkout flows built as a decoupled Angular single-page application.',
    image: 'Images/Souqly.png',
    tags: ['Angular', 'TypeScript', 'Reactive Forms', 'RxJS', 'SCSS'],
    metrics: [
      { value: '60 FPS', label: 'Smooth Rendering' },
      { value: 'Full State', label: 'Cart Sync' },
      { value: 'Responsive', label: 'Mobile-First' }
    ],
    githubUrl: 'https://github.com/Abdelrahman2264/Souqly',
    isReversed: false
  },
  {
    id: 'inventory-hub',
    title: 'Inventory Hub',
    subtitle: 'Enterprise IT Assets',
    category: 'enterprise',
    description: 'Full-stack Blazor Server platform tracking enterprise infrastructure — switches, hypervisors, SAN storage, and laptops — with automated lifecycle depreciation, audit logs, and role security.',
    image: 'Images/Inventory.png',
    tags: ['Blazor', '.NET', 'SQL Server', 'RBAC', 'C#'],
    metrics: [
      { value: 'Complete', label: 'Asset Lifecycle' },
      { value: 'Automated', label: 'Depreciation Calc' },
      { value: 'Strict RBAC', label: 'Admin Security' }
    ],
    githubUrl: 'https://github.com/Abdelrahman2264/Inventory-Hub',
    isReversed: true
  },
  {
    id: 'savory-delights',
    title: 'Savory Delights',
    subtitle: 'Hospitality Platform',
    category: 'frontend',
    description: 'Modern culinary hospitality web platform — dynamic menu filtering, interactive reservation tables with live time-slot validation, and responsive mobile-first showcase pages.',
    image: 'Images/resturant.png',
    tags: ['Responsive UI', 'Menu Filtering', 'Reservations', 'JavaScript', 'CSS3'],
    metrics: [
      { value: 'Interactive', label: 'Table Booking' },
      { value: 'Live Slots', label: 'Time Validation' },
      { value: 'Fluid', label: 'Mobile Experience' }
    ],
    githubUrl: 'https://github.com/Abdelrahman2264/Savory-Delights',
    isReversed: false
  },
  {
    id: 'task-engine',
    title: 'Task Engine',
    subtitle: 'Workflow Engine',
    category: 'frontend',
    description: 'Keyboard-first personal productivity engine — instant local storage persistence, category matrix tagging, and animated state transitions.',
    image: 'Images/todo.png',
    tags: ['JavaScript', 'Task Architecture', 'Local Storage', 'CSS Animations'],
    metrics: [
      { value: 'Instant', label: 'Zero Latency' },
      { value: 'Local First', label: 'Persistent State' },
      { value: 'Hotkeys', label: 'Keyboard Navigation' }
    ],
    githubUrl: 'https://github.com/Abdelrahman2264/todo-app',
    isReversed: true
  },
  {
    id: 'imdb-pipeline',
    title: 'IMDb Intelligence Pipeline',
    subtitle: 'Data Science • ML',
    category: 'data',
    description: 'End-to-end data intelligence pipeline: automated web scraping via Selenium and IMDbPY, NoSQL document indexing in MongoDB, EDA with pandas, and an interactive Streamlit application featuring collaboration graphs and a RandomForest ML classification model.',
    image: 'Images/IMDb.png',
    tags: ['Selenium', 'MongoDB', 'Pandas', 'Scikit-learn', 'Streamlit', 'RandomForest ML'],
    metrics: [
      { value: '85%+', label: 'Prediction Accuracy' },
      { value: 'Automated', label: 'Selenium Ingestion' },
      { value: 'Interactive', label: 'Streamlit GUI' }
    ],
    githubUrl: 'https://github.com/Abdelrahman2264/IMDbMoviesAnalysis',
    isReversed: false
  }
];
