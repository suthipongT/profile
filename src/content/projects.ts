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
};
export type DemoProject = Omit<Project, 'status'> & { kind: 'demo' };
export type ShowcaseProject = Project | DemoProject;

// Add only verified projects with publication approval. Local screenshots belong in src/assets/projects/.
export const projects: readonly Project[] = [];
export const approvedProjects = projects.filter((project) => project.status === 'approved');

// Keep source order so editors control the presentation order.
export function featuredProjects<T extends { featured: boolean }>(items: readonly T[]): T[] {
  return items.filter((item) => item.featured === true).slice(0, 2);
}

// A single, stable slug defines each Portfolio fragment and must be unique per build.
export function validateProjectSlugs(items: readonly { slug: string }[]): void {
  const seen = new Set<string>();
  for (const { slug } of items) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || seen.has(slug)) {
      throw new Error(`Invalid or duplicate project slug: ${slug}`);
    }
    seen.add(slug);
  }
}

export function projectAnchor(slug: string): string {
  return `project-${slug}`;
}
