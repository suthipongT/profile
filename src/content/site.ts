import type { ProjectCategory } from './projects';

export type Locale = 'en' | 'th';

type Copy = {
  categoryLabels: Record<ProjectCategory, string>;
  technologyGroups: readonly { title: string; items: readonly string[] }[];
  projectLiveLabel: string;
  projectRepositoryLabel: string;
};

// Only capabilities demonstrated by this repository are described here.
export const copy: Record<Locale, Copy> = {
  en: {
    categoryLabels: {
      'corporate-website': 'Corporate websites',
      crm: 'CRM systems',
      cms: 'CMS platforms',
      'erp-business-management': 'ERP / business management',
    },
    technologyGroups: [
      { title: 'Interface engineering', items: ['Responsive layouts', 'Accessible navigation', 'English / Thai pages'] },
      { title: 'Web stack', items: ['Astro', 'TypeScript', 'Tailwind CSS'] },
      { title: 'Delivery & quality', items: ['Static Site Generation', 'SEO metadata', 'GitHub Pages', 'pnpm'] },
    ],
    projectLiveLabel: 'View live site',
    projectRepositoryLabel: 'View source repository',
  },
  th: {
    categoryLabels: {
      'corporate-website': 'เว็บไซต์องค์กร',
      crm: 'ระบบ CRM',
      cms: 'แพลตฟอร์ม CMS',
      'erp-business-management': 'ระบบ ERP / บริหารธุรกิจ',
    },
    technologyGroups: [
      { title: 'การพัฒนาส่วนติดต่อ', items: ['เลย์เอาต์รองรับหลายหน้าจอ', 'เมนูที่เข้าถึงได้', 'หน้าเว็บภาษาอังกฤษ / ไทย'] },
      { title: 'เทคโนโลยีเว็บ', items: ['Astro', 'TypeScript', 'Tailwind CSS'] },
      { title: 'การส่งมอบและคุณภาพ', items: ['Static Site Generation', 'ข้อมูล SEO', 'GitHub Pages', 'pnpm'] },
    ],
    projectLiveLabel: 'ดูเว็บไซต์',
    projectRepositoryLabel: 'ดูซอร์สโค้ด',
  },
};
