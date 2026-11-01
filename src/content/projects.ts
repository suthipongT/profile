import type { ImageMetadata } from 'astro';

export type ProjectCategory = 'corporate-website' | 'crm' | 'cms' | 'erp-business-management';
type Localized = { en: string; th: string };

export type Project = {
  id: string;
  slug: string;
  category: ProjectCategory;
  status: 'draft' | 'approved';
  featured: boolean;
  content: {
    en: { name: string; summary: string; description: string; role: string; scope: string };
    th: { name: string; summary: string; description: string; role: string; scope: string };
  };
  technologies: readonly string[];
  screenshots?: readonly { image: ImageMetadata; alt: Localized; caption?: Localized }[];
  liveUrl?: string;
  repositoryUrl?: string;
};
export type DemoProject = Omit<Project, 'status'> & { kind: 'demo' };
export type ShowcaseProject = Project | DemoProject;

// Add only verified projects with publication approval. Local screenshots belong in src/assets/projects/.
export const projects: readonly Project[] = [];
export const approvedProjects = projects.filter((project) => project.status === 'approved');
