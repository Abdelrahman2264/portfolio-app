export interface TimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  badges: string[];
  highlightBadge?: string;
  description: string;
}
