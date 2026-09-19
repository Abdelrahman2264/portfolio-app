export interface SkillItem {
  id: string;
  name: string;
  sub: string;
  scope: string;
  tier: string;
  projects: string[];
  level: number; // 1 to 5
  levelText: string;
  svgIcon: string;
}

export interface SkillModule {
  id: string;
  modCode: string;
  title: string;
  subtitle: string;
  category: 'backend' | 'aws' | 'data' | 'ai' | 'core' | 'ops';
  filterGroup: 'cloud-backend' | 'data-ai' | 'core-systems';
  statusText: string;
  statusColor?: string;
  headerSvgIcon: string;
  skills: SkillItem[];
}

export type SkillFilter = 'all' | 'cloud-backend' | 'data-ai' | 'core-systems';

export interface FilterOption {
  id: SkillFilter;
  label: string;
  icon: string;
}

export interface TelemetryState {
  tech: string;
  tier: string;
  scope: string;
  projects: string[];
  level: string;
  locked: boolean;
}
