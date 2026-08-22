export type ProjectCategory = 
  | 'STRATEGY'
  | 'MARKETING'
  | 'WEB'
  | 'PRODUCT'
  | 'TECHNOLOGY'
  | 'RESEARCH'
  | 'DESIGN'
  | 'PERSONAL'
  | 'ESTRATEGIA'
  | 'INVESTIGACIÓN'
  | 'TECNOLOGÍA'
  | 'PRODUCTO'
  | 'DISEÑO';

export type CreativeFilter = 
  | 'ALL'
  | 'POKER'
  | 'CAMPAIGNS'
  | 'SOCIAL'
  | 'POSTERS'
  | 'EXPERIMENTAL'
  | 'TODOS'
  | 'CAMPAÑAS'
  | 'POSTERS'
  | 'EXPERIMENTOS';

export interface ProjectMetric {
  value: string;
  label: string;
  sublabel?: string;
  isPlanned?: boolean;
}

export interface CaseStudySection {
  stepNumber: string;
  title: string;
  subtitle?: string;
  content: string[];
  bulletPoints?: string[];
  diagramType?: 'funnel' | 'metrics' | 'porter' | 'workflow' | 'stack';
  quote?: string;
  imagePlaceholder?: string;
}

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  tier: 1 | 2 | 3;
  categories: (ProjectCategory | string)[];
  tags: string[];
  year: string;
  role: string;
  featured: boolean;
  coverImage: string;
  summary: string;
  
  // Real quantitative or qualitative metrics
  metrics?: ProjectMetric[];
  
  // Flag for whether metrics are real results or planned next phase
  hasRealMetrics: boolean;
  
  // Structured sections
  challenge: string;
  approach: string;
  build: string;
  creative?: string;
  resultsOrNextPhaseTitle: string;
  resultsOrNextPhaseContent: string[];
  learnings: string[];
  
  // Links
  externalLinks?: {
    website?: string;
    behance?: string;
    github?: string;
    demo?: string;
    thesisPdfDownload?: boolean;
    thesisPdfName?: string;
  };
  
  // Step-by-step deep dive
  detailedSections?: CaseStudySection[];
}

export interface CreativeItem {
  id: string;
  title: string;
  category: CreativeFilter;
  year: string;
  tools: string[];
  description: string;
  behanceUrlPlaceholder: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  gradientOrTheme: string;
  mockupType: 'flyer' | 'poster' | 'social' | 'campaign' | '3d';
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: string[];
}

export interface ProgramTool {
  name: string;
  category: string;
  categoryLabel: string;
  percentage: number;
  level: string;
  iconKey: string;
  accentColor: string;
  description: string;
}

export interface ToolCategory {
  category: string;
  items: string[];
}

export interface LabExperiment {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  technologies: string[];
  highlight: string;
  interactiveType?: string;
}
