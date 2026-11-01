import type { ProjectCategory } from './projects';

export type Locale = 'en' | 'th';

type Service = { category: ProjectCategory; description: string };
type Step = { title: string; description: string };
type TechnologyGroup = { title: string; items: string[] };

type Copy = {
  nav: { work: string; services: string; technology: string; process: string; about: string; contact: string };
  categoryLabels: Record<ProjectCategory, string>;
  heroEyebrow: string; heroTitle: string; heroDescription: string; heroCapabilitiesLabel: string;
  primaryAction: string; secondaryAction: string;
  workKicker: string; workTitle: string; workIntro: string; workEmptyTitle: string; workEmptyBody: string;
  previewBanner: string; previewTitlePrefix: string; previewMetaDescription: string;
  previewWorkIntro: string; previewWorkNotice: string; demoProjectLabel: string;
  demoRoleLabel: string; demoScopeLabel: string; demoTechnologyLabel: string;
  projectRoleLabel: string; projectScopeLabel: string; projectTechnologyLabel: string;
  projectLiveLabel: string; projectRepositoryLabel: string; projectImageLabel: string;
  servicesKicker: string; servicesTitle: string; servicesIntro: string; services: Service[];
  technologyKicker: string; technologyTitle: string; technologyIntro: string; technologyGroups: TechnologyGroup[];
  processKicker: string; processTitle: string; processIntro: string; processSteps: Step[];
  aboutKicker: string; aboutTitle: string; aboutBody: string; aboutNote: string;
  contactKicker: string; contactTitle: string; contactBody: string; contactAction: string;
  footer: string; mobileMenu: string; metaTitle: string; metaDescription: string;
};

export const copy: Record<Locale, Copy> = {
  en: {
    nav: { work: 'Selected work', services: 'Services', technology: 'Technology', process: 'Process', about: 'About', contact: 'Contact' },
    categoryLabels: {
      'corporate-website': 'Corporate websites', crm: 'CRM systems', cms: 'CMS platforms',
      'erp-business-management': 'ERP / business management',
    },
    heroEyebrow: 'INDEPENDENT SOFTWARE DEVELOPMENT',
    heroTitle: 'Websites and business software, built with purpose.',
    heroDescription: 'I’m Suthipong Toonritsa. I work with clients on clear, usable digital tools shaped around their business needs.',
    heroCapabilitiesLabel: 'What I can build',
    primaryAction: 'View selected work', secondaryAction: 'Contact',
    workKicker: '01 / SELECTED WORK', workTitle: 'The work, in context.',
    workIntro: 'Approved projects will be shown with real interface screenshots and a clear account of the role, scope, and technology.',
    workEmptyTitle: 'Case studies are in preparation.',
    workEmptyBody: 'Project details and screenshots are being reviewed for publication. No unverified work is presented as a completed client project.',
    previewBanner: 'DESIGN PREVIEW · Fictional interface concepts only. No client work is shown.',
    previewTitlePrefix: 'Design sample preview',
    previewMetaDescription: 'Unpublished design preview with fictional corporate website, CRM, CMS, and ERP interface concepts. These are not client projects.',
    previewWorkIntro: 'Four fictional interface concepts show how the project showcase could look once real, approved work is available.',
    previewWorkNotice: 'SAMPLE WORK ONLY · These concepts, screens, roles, scopes, and technology lists are illustrative. They are not completed client projects.',
    demoProjectLabel: 'DESIGN SAMPLE / FICTIONAL CONCEPT',
    demoRoleLabel: 'Example role', demoScopeLabel: 'Example scope', demoTechnologyLabel: 'Example technology',
    projectRoleLabel: 'Role', projectScopeLabel: 'Scope', projectTechnologyLabel: 'Technology',
    projectLiveLabel: 'View live site', projectRepositoryLabel: 'View source repository', projectImageLabel: 'Open full-size image',
    servicesKicker: '02 / SERVICES', servicesTitle: 'Software for the way your business works.',
    servicesIntro: 'These are the types of projects I can discuss and scope with a client. The right solution depends on the work it needs to support.',
    services: [
      { category: 'corporate-website', description: 'Clear, responsive websites that explain a business and help visitors find the right next step.' },
      { category: 'crm', description: 'Customer information and workflows organized around the people who use them.' },
      { category: 'cms', description: 'Content tools that make publishing and maintaining a website more manageable.' },
      { category: 'erp-business-management', description: 'Custom tools for connected business records, operations, and internal processes.' },
    ],
    technologyKicker: '03 / TECHNOLOGY', technologyTitle: 'A practical technical foundation.',
    technologyIntro: 'These capabilities are demonstrated in this portfolio. Technology choices for client work will be described only in approved case studies.',
    technologyGroups: [
      { title: 'Interface engineering', items: ['Responsive layouts', 'Accessible navigation', 'English / Thai pages'] },
      { title: 'Web stack', items: ['Astro', 'TypeScript', 'Tailwind CSS'] },
      { title: 'Delivery & quality', items: ['Static Site Generation', 'SEO metadata', 'GitHub Pages', 'pnpm'] },
    ],
    processKicker: '04 / PROCESS', processTitle: 'A clear path from idea to delivery.',
    processIntro: 'A proposed four-step framework. Scope and working arrangements are agreed for each project.',
    processSteps: [
      { title: 'Discovery', description: 'Understand the business need, users, and current workflow.' },
      { title: 'Solution planning', description: 'Define the scope, technical approach, and priorities together.' },
      { title: 'Development & review', description: 'Build in reviewable stages and refine against the agreed requirements.' },
      { title: 'Launch & handover', description: 'Prepare the agreed release and hand over the information needed to use it.' },
    ],
    aboutKicker: '05 / ABOUT', aboutTitle: 'A developer focused on useful software.',
    aboutBody: 'I’m Suthipong Toonritsa, an independent software developer. I value clear requirements, maintainable implementation, and interfaces that make sense to the people using them.',
    aboutNote: 'Specific project work and outcomes will be published only after their details are verified.',
    contactKicker: '06 / CONTACT', contactTitle: 'Have a project in mind?',
    contactBody: 'The public GitHub profile is the currently verified way to reach me. A dedicated client inquiry channel can be added after approval.',
    contactAction: 'View GitHub profile',
    footer: 'Independent software development · Project content under review',
    mobileMenu: 'Navigation menu',
    metaTitle: 'Suthipong Toonritsa | Business Websites & Software Development',
    metaDescription: 'Independent software development for corporate websites, CRM, CMS, and ERP or business management systems. Explore services and approved work.',
  },
  th: {
    nav: { work: 'ผลงาน', services: 'บริการ', technology: 'เทคโนโลยี', process: 'ขั้นตอน', about: 'เกี่ยวกับ', contact: 'ติดต่อ' },
    categoryLabels: {
      'corporate-website': 'เว็บไซต์องค์กร', crm: 'ระบบ CRM', cms: 'แพลตฟอร์ม CMS',
      'erp-business-management': 'ระบบ ERP / บริหารธุรกิจ',
    },
    heroEyebrow: 'รับพัฒนาซอฟต์แวร์อิสระ',
    heroTitle: 'เว็บไซต์และซอฟต์แวร์ธุรกิจที่สร้างเพื่อการใช้งานจริง',
    heroDescription: 'ผมชื่อ Suthipong Toonritsa ทำงานร่วมกับลูกค้าเพื่อสร้างเครื่องมือดิจิทัลที่ชัดเจน ใช้งานได้จริง และเหมาะกับความต้องการของธุรกิจ',
    heroCapabilitiesLabel: 'งานที่รับพัฒนา',
    primaryAction: 'ดูผลงาน', secondaryAction: 'ติดต่อ',
    workKicker: '01 / ผลงาน', workTitle: 'ผลงานพร้อมบริบทของงาน',
    workIntro: 'โครงการที่ได้รับอนุมัติจะแสดงภาพหน้าจอจริง พร้อมบทบาท ขอบเขตงาน และเทคโนโลยีที่ใช้',
    workEmptyTitle: 'กำลังเตรียมกรณีศึกษา',
    workEmptyBody: 'รายละเอียดโครงการและภาพหน้าจออยู่ระหว่างตรวจสอบก่อนเผยแพร่ จะไม่แสดงงานที่ยังไม่ยืนยันว่าเป็นโครงการลูกค้าที่เสร็จแล้ว',
    previewBanner: 'ตัวอย่างงานออกแบบ · เป็นแนวคิดหน้าจอสมมติเท่านั้น ไม่มีผลงานลูกค้าในหน้านี้',
    previewTitlePrefix: 'ตัวอย่างงานออกแบบ',
    previewMetaDescription: 'หน้าตัวอย่างงานออกแบบที่ยังไม่เผยแพร่ แสดงแนวคิดหน้าจอเว็บไซต์องค์กร CRM, CMS และ ERP ซึ่งไม่ใช่โครงการลูกค้า',
    previewWorkIntro: 'แนวคิดหน้าจอสมมติสี่แบบแสดงรูปแบบการนำเสนอผลงาน ก่อนเพิ่มโครงการจริงที่ได้รับอนุมัติ',
    previewWorkNotice: 'ตัวอย่างสมมติเท่านั้น · แนวคิด หน้าจอ บทบาท ขอบเขต และเทคโนโลยีเป็นเพียงตัวอย่าง ไม่ใช่โครงการลูกค้าที่เสร็จแล้ว',
    demoProjectLabel: 'ตัวอย่างงานออกแบบ / แนวคิดสมมติ',
    demoRoleLabel: 'ตัวอย่างบทบาท', demoScopeLabel: 'ตัวอย่างขอบเขต', demoTechnologyLabel: 'ตัวอย่างเทคโนโลยี',
    projectRoleLabel: 'บทบาท', projectScopeLabel: 'ขอบเขตงาน', projectTechnologyLabel: 'เทคโนโลยี',
    projectLiveLabel: 'ดูเว็บไซต์', projectRepositoryLabel: 'ดูซอร์สโค้ด', projectImageLabel: 'เปิดภาพขนาดเต็ม',
    servicesKicker: '02 / บริการ', servicesTitle: 'ซอฟต์แวร์ที่เหมาะกับรูปแบบการทำงานของธุรกิจ',
    servicesIntro: 'ประเภทงานเหล่านี้สามารถพูดคุยและกำหนดขอบเขตร่วมกับลูกค้าได้ แนวทางที่เหมาะสมขึ้นอยู่กับงานที่ระบบต้องรองรับ',
    services: [
      { category: 'corporate-website', description: 'เว็บไซต์ที่อ่านง่าย รองรับหลายขนาดหน้าจอ และช่วยให้ผู้เข้าชมพบข้อมูลหรือขั้นตอนถัดไป' },
      { category: 'crm', description: 'จัดระเบียบข้อมูลลูกค้าและขั้นตอนการทำงานให้เหมาะกับผู้ใช้งานจริง' },
      { category: 'cms', description: 'เครื่องมือจัดการเนื้อหาที่ช่วยให้ทีมเผยแพร่และดูแลเว็บไซต์ได้สะดวกขึ้น' },
      { category: 'erp-business-management', description: 'เครื่องมือเฉพาะงานสำหรับข้อมูล การดำเนินงาน และกระบวนการภายในธุรกิจ' },
    ],
    technologyKicker: '03 / เทคโนโลยี', technologyTitle: 'พื้นฐานทางเทคนิคที่เลือกใช้ตามงาน',
    technologyIntro: 'ความสามารถเหล่านี้มีตัวอย่างให้เห็นในพอร์ตโฟลิโอนี้ ส่วนเทคโนโลยีของโครงการลูกค้าจะระบุในกรณีศึกษาที่ได้รับอนุมัติเท่านั้น',
    technologyGroups: [
      { title: 'การพัฒนาส่วนติดต่อ', items: ['เลย์เอาต์รองรับหลายหน้าจอ', 'เมนูที่เข้าถึงได้', 'หน้าเว็บภาษาอังกฤษ / ไทย'] },
      { title: 'เทคโนโลยีเว็บ', items: ['Astro', 'TypeScript', 'Tailwind CSS'] },
      { title: 'การส่งมอบและคุณภาพ', items: ['Static Site Generation', 'ข้อมูล SEO', 'GitHub Pages', 'pnpm'] },
    ],
    processKicker: '04 / ขั้นตอน', processTitle: 'แนวทางทำงานที่ชัดเจนตั้งแต่ต้นจนส่งมอบ',
    processIntro: 'กรอบการทำงานเบื้องต้นสี่ขั้นตอน โดยตกลงขอบเขตและรูปแบบการทำงานสำหรับแต่ละโครงการ',
    processSteps: [
      { title: 'ทำความเข้าใจงาน', description: 'พูดคุยเรื่องความต้องการ ผู้ใช้งาน และขั้นตอนการทำงานปัจจุบัน' },
      { title: 'วางแผนแนวทาง', description: 'กำหนดขอบเขต แนวทางทางเทคนิค และลำดับความสำคัญร่วมกัน' },
      { title: 'พัฒนาและทบทวน', description: 'พัฒนาเป็นช่วงที่ตรวจสอบได้ และปรับตามความต้องการที่ตกลงกัน' },
      { title: 'เผยแพร่และส่งมอบ', description: 'เตรียมเผยแพร่ตามที่ตกลง และส่งต่อข้อมูลที่จำเป็นต่อการใช้งาน' },
    ],
    aboutKicker: '05 / เกี่ยวกับ', aboutTitle: 'นักพัฒนาที่ให้ความสำคัญกับซอฟต์แวร์ที่ใช้งานได้จริง',
    aboutBody: 'ผมชื่อ Suthipong Toonritsa เป็นนักพัฒนาซอฟต์แวร์อิสระ ให้ความสำคัญกับความต้องการที่ชัดเจน โค้ดที่ดูแลต่อได้ และหน้าจอที่เข้าใจง่ายสำหรับผู้ใช้งาน',
    aboutNote: 'รายละเอียดผลงานและผลลัพธ์จะเผยแพร่หลังตรวจสอบข้อเท็จจริงแล้วเท่านั้น',
    contactKicker: '06 / ติดต่อ', contactTitle: 'มีโครงการที่อยากพูดคุยไหม',
    contactBody: 'ขณะนี้โปรไฟล์ GitHub สาธารณะเป็นช่องทางติดต่อที่ยืนยันได้ สามารถเพิ่มช่องทางสำหรับลูกค้าโดยเฉพาะหลังได้รับอนุมัติ',
    contactAction: 'ดูโปรไฟล์ GitHub',
    footer: 'พัฒนาซอฟต์แวร์อิสระ · เนื้อหาผลงานอยู่ระหว่างตรวจสอบ',
    mobileMenu: 'เมนูนำทาง',
    metaTitle: 'Suthipong Toonritsa | เว็บไซต์ธุรกิจและพัฒนาซอฟต์แวร์',
    metaDescription: 'บริการพัฒนาซอฟต์แวร์อิสระสำหรับเว็บไซต์องค์กร ระบบ CRM, CMS และ ERP หรือระบบบริหารธุรกิจ ดูบริการและผลงานที่ได้รับอนุมัติ',
  },
};
