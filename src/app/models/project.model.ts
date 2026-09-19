export type ProjectCategory = 'all' | 'enterprise' | 'frontend' | 'data';

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'enterprise' | 'frontend' | 'data';
  description: string;
  image: string;
  tags: string[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  isReversed?: boolean; // Alternating layout
}

export interface ProjectFilterOption {
  id: ProjectCategory;
  label: string;
}
