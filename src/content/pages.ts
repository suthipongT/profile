import type { Locale } from './site';

export type Page = 'home' | 'portfolio' | 'about' | 'contact';

export const pageSegments: Record<Page, string> = {
  home: '', portfolio: 'portfolio/', about: 'about/', contact: 'contact/',
};

export function pagePath(base: string, locale: Locale, page: Page): string {
  return `${base}${locale === 'en' ? 'en/' : ''}${pageSegments[page]}`;
}

export const pagesCopy = {
  en: {
    nav: { home: 'Home', portfolio: 'Portfolio', about: 'About', contact: 'Contact' },
    skip: 'Skip to content', menu: 'Navigation menu',
    footerBody: 'Independent development for business websites and custom software.', footerLinks: 'Quick links',
    footerNote: 'Websites and software for business.',
    heroLead: 'Business websites &', heroFocus: 'software that fits.',
    heroBody: 'Clear websites and practical software for the way a business works. Explore corporate sites, CRM, CMS, and business management systems.',
    heroWork: 'View portfolio', heroContact: 'Discuss a project',
    featuredTitle: 'Featured work', featuredPreview: 'Selected concept projects for websites and business software.',
    featuredProduction: 'Explore websites and software designed around business needs.',
    viewAll: 'View full portfolio',
    servicesTitle: 'What I can build',
    servicesBody: 'Corporate websites, CRM systems, CMS platforms, and ERP or business management tools. Backend and API integrations can be scoped where relevant.',
    portfolioTitle: 'Selected work', portfolioIntro: 'Business websites and software interfaces, shown through approved project work.',
    portfolioPreviewIntro: 'The images and descriptions below are illustrative, not verified client deliveries.',
    all: 'All',
    emptyTitle: 'Let’s build something useful.', emptyBody: 'Explore how a website or software system could support your work.',
    projectDetails: 'View project details', imageLink: 'Open full-size image',
    aboutLead: 'Building useful software', aboutFocus: 'around real work.',
    aboutBody1: 'We create clear business websites and custom software interfaces.',
    aboutBody2: 'We start with the work people need to do, then shape a practical technical approach. This portfolio demonstrates responsive interfaces, accessible navigation, bilingual pages, and static delivery.',
    aboutNote: 'Each project begins with its own goals, users, and constraints.',
    skillsTitle: 'Skills & approach', skillsIntro: 'Capabilities demonstrated in this portfolio',
    processTitle: 'A practical process', processIntro: 'A proposed path for discussing and delivering a project. Scope is agreed for each engagement.',
    steps: ['Discovery', 'Solution planning', 'Development & review', 'Launch & handover'],
    stepDescriptions: ['Understand project goals, challenges, and requirements.', 'Define the scope, approach, and implementation priorities.', 'Develop the solution, review progress, and refine the work.', 'Check readiness and hand over the agreed deliverables.'],
    contactTitle: 'Let’s discuss your project', contactIntro: 'Explore the services available for your business website or software project.',
    messageTitle: 'Project inquiries', contactInfoTitle: 'Explore the approach',
    contactFields: { name: 'Name', namePlaceholder: 'Your name', email: 'Email', emailPlaceholder: 'Your email address', type: 'Project type', choose: 'Select a project type', corporate: 'Corporate website', crm: 'CRM', cms: 'CMS', erp: 'ERP / business management', other: 'Other', message: 'Message', messagePlaceholder: 'Tell us about your project', helper: 'Please do not include confidential information.', required: 'All fields are required.', submit: 'Send inquiry' },
    connectBody: 'Learn more about the approach to websites and business software.',
    meta: {
      home: ['A27DEV | Business Websites & Software', 'Independent development of corporate websites and custom business software, including CRM, CMS, and ERP interfaces.'],
      portfolio: ['Portfolio | A27DEV', 'Explore website and software interface work for business.'],
      about: ['About | A27DEV', 'Explore our approach to clear business websites, accessible interfaces, and practical custom software.'],
      contact: ['Contact | A27DEV', 'Explore the approach to business websites and custom software.'],
    },
  },
  th: {
    nav: { home: 'หน้าแรก', portfolio: 'ผลงาน', about: 'เกี่ยวกับ', contact: 'ติดต่อ' },
    skip: 'ข้ามไปยังเนื้อหา', menu: 'เมนูนำทาง',
    footerBody: 'พัฒนาเว็บไซต์ธุรกิจและโปรแกรมเฉพาะงานอย่างอิสระ', footerLinks: 'ลิงก์ในเว็บไซต์',
    footerNote: 'เว็บไซต์และโปรแกรมสำหรับธุรกิจ',
    heroLead: 'เว็บไซต์ธุรกิจและ', heroFocus: 'โปรแกรมที่ตรงงาน',
    heroBody: 'เว็บไซต์ที่ชัดเจนและโปรแกรมที่ใช้งานได้จริงสำหรับธุรกิจ ตั้งแต่เว็บไซต์องค์กร ระบบ CRM และ CMS ไปจนถึงระบบบริหารงาน',
    heroWork: 'ดูผลงาน', heroContact: 'คุยเรื่องโครงการ',
    featuredTitle: 'ผลงานเด่น', featuredPreview: 'ผลงานแนวคิดสำหรับเว็บไซต์และโปรแกรมธุรกิจ',
    featuredProduction: 'สำรวจแนวทางพัฒนาเว็บไซต์และโปรแกรมให้เหมาะกับธุรกิจ',
    viewAll: 'ดูผลงานทั้งหมด',
    servicesTitle: 'งานที่พัฒนาได้',
    servicesBody: 'เว็บไซต์องค์กร ระบบ CRM แพลตฟอร์ม CMS และระบบ ERP หรือระบบบริหารธุรกิจ รวมถึงการพัฒนา Backend และเชื่อมต่อ API ตามขอบเขตงาน',
    portfolioTitle: 'ผลงาน', portfolioIntro: 'เว็บไซต์ธุรกิจและหน้าจอโปรแกรมจากโครงการที่ได้รับอนุมัติให้เผยแพร่',
    portfolioPreviewIntro: 'ภาพและคำอธิบายต่อไปนี้จัดทำเพื่อประกอบการนำเสนอ ไม่ใช่ผลงานที่ยืนยันว่าได้ส่งมอบให้ลูกค้า',
    all: 'ทั้งหมด',
    emptyTitle: 'มาสร้างสิ่งที่ใช้งานได้จริงด้วยกัน', emptyBody: 'พูดคุยเกี่ยวกับเว็บไซต์หรือระบบโปรแกรมที่เหมาะกับงานของคุณ',
    projectDetails: 'ดูรายละเอียดโครงการ', imageLink: 'เปิดภาพขนาดเต็ม',
    aboutLead: 'สร้างโปรแกรมที่ใช้ได้จริง', aboutFocus: 'ให้เข้ากับงาน',
    aboutBody1: 'เราพัฒนาเว็บไซต์ธุรกิจที่ชัดเจนและหน้าจอโปรแกรมที่เหมาะกับงาน',
    aboutBody2: 'เราเริ่มจากทำความเข้าใจสิ่งที่ผู้ใช้ต้องทำ แล้ววางแนวทางทางเทคนิคที่เหมาะสม พอร์ตโฟลิโอนี้แสดงตัวอย่างหน้าจอรองรับหลายขนาด การเข้าถึง หน้าเว็บสองภาษา และการเผยแพร่แบบสแตติก',
    aboutNote: 'แต่ละโครงการเริ่มจากเป้าหมาย ผู้ใช้งาน และข้อจำกัดที่แตกต่างกัน',
    skillsTitle: 'ทักษะและแนวทาง', skillsIntro: 'ความสามารถที่มีตัวอย่างให้เห็นในพอร์ตโฟลิโอนี้',
    processTitle: 'ขั้นตอนทำงานเบื้องต้น', processIntro: 'แนวทางพูดคุยและส่งมอบโครงการ โดยตกลงขอบเขตสำหรับแต่ละงาน',
    steps: ['ทำความเข้าใจงาน', 'วางแผนแนวทาง', 'พัฒนาและทบทวน', 'เผยแพร่และส่งมอบ'],
    stepDescriptions: ['พูดคุยเป้าหมาย ปัญหา และความต้องการก่อนเริ่มงาน', 'กำหนดขอบเขต วิธีการ และลำดับการพัฒนาที่เหมาะสม', 'ลงมือพัฒนา พร้อมตรวจสอบและปรับปรุงระหว่างทาง', 'ตรวจสอบความพร้อม และส่งมอบงานตามขอบเขตที่ตกลง'],
    contactTitle: 'มาคุยเรื่องโปรเจกต์งานของคุณ', contactIntro: 'สำรวจบริการสำหรับโปรเจกต์งานเว็บไซต์ธุรกิจหรือโปรแกรมของคุณ',
    messageTitle: 'สอบถามเรื่องโปรเจกต์งาน', contactInfoTitle: 'รู้จักแนวทางการทำงาน',
    contactFields: { name: 'ชื่อ', namePlaceholder: 'ชื่อของคุณ', email: 'อีเมล', emailPlaceholder: 'อีเมลของคุณ', type: 'ประเภทโปรเจกต์งาน', choose: 'เลือกประเภทโปรเจกต์งาน', corporate: 'เว็บไซต์องค์กร', crm: 'ระบบ CRM', cms: 'ระบบ CMS', erp: 'ระบบ ERP / บริหารธุรกิจ', other: 'อื่น ๆ', message: 'รายละเอียดโปรเจกต์งาน', messagePlaceholder: 'บอกเราเกี่ยวกับโปรเจกต์งานของคุณ', helper: 'โปรดอย่าใส่ข้อมูลที่เป็นความลับ', required: 'กรุณากรอกข้อมูลทุกช่อง', submit: 'ส่งข้อความติดต่อ' },
    connectBody: 'เรียนรู้เพิ่มเติมเกี่ยวกับแนวทางพัฒนาเว็บไซต์และโปรแกรมธุรกิจ',
    meta: {
      home: ['A27DEV | เว็บไซต์ธุรกิจและโปรแกรม', 'พัฒนาเว็บไซต์องค์กรและโปรแกรมธุรกิจเฉพาะงาน ทั้งระบบ CRM, CMS และ ERP'],
      portfolio: ['ผลงาน | A27DEV', 'ดูผลงานออกแบบเว็บไซต์และหน้าจอโปรแกรมสำหรับธุรกิจ'],
      about: ['เกี่ยวกับ | A27DEV', 'รู้จักนักพัฒนาอิสระที่ให้ความสำคัญกับเว็บไซต์ธุรกิจ หน้าจอที่เข้าถึงได้ และโปรแกรมที่ใช้งานจริง'],
      contact: ['ติดต่อ | A27DEV', 'เรียนรู้แนวทางพัฒนาเว็บไซต์ธุรกิจและโปรแกรมเฉพาะงาน'],
    },
  },
} as const;
