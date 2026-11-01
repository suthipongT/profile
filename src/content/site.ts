export type Locale = 'en' | 'th';

type Card = { number: string; title: string; description: string; detail: string };
type Copy = {
  langLabel: string;
  nav: { about: string; expertise: string; stack: string; projects: string; experience: string; contact: string };
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroNote: string;
  primaryAction: string;
  secondaryAction: string;
  availability: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutBody: string;
  aboutAside: string;
  expertiseKicker: string;
  expertiseTitle: string;
  expertiseIntro: string;
  expertise: Card[];
  stackKicker: string;
  stackTitle: string;
  stackBody: string;
  stackGroups: { label: string; items: string[] }[];
  projectsKicker: string;
  projectsTitle: string;
  projectsIntro: string;
  projectCards: Card[];
  experienceKicker: string;
  experienceTitle: string;
  experienceBody: string;
  experienceItems: string[];
  contactKicker: string;
  contactTitle: string;
  contactBody: string;
  contactAction: string;
  footer: string;
  mobileMenu: string;
  metaDescription: string;
};

export const copy: Record<Locale, Copy> = {
  en: {
    langLabel: 'English',
    nav: { about: 'About', expertise: 'Expertise', stack: 'Tech stack', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    eyebrow: 'SOFTWARE DEVELOPER · PORTFOLIO',
    heroTitle: 'Thoughtful software, built for the real world.',
    heroDescription: 'I’m Suthipong Toonritsa, a web developer. This portfolio is being rebuilt to present verified work, technical decisions, and the people they serve.',
    heroNote: 'Portfolio content is in review. Project and career details below are clearly marked drafts.',
    primaryAction: 'Explore the work',
    secondaryAction: 'Get in touch',
    availability: 'Open to meaningful conversations',
    aboutKicker: '01 / ABOUT',
    aboutTitle: 'A clear view of how I work.',
    aboutBody: 'I build for clarity, maintainability, and an experience that feels considered at every screen size. The details of my background are being verified before publication.',
    aboutAside: 'This site itself is a static Astro project with TypeScript, Tailwind CSS, bilingual routes, and a GitHub Pages friendly build.',
    expertiseKicker: '02 / FOCUS AREAS',
    expertiseTitle: 'The engineering principles behind the work.',
    expertiseIntro: 'These are the focus areas for this portfolio. Personal case studies will be added only after their details are verified.',
    expertise: [
      { number: '01', title: 'Interface engineering', description: 'Semantic structure, responsive layouts, and accessible interaction patterns.', detail: 'Focus area · project evidence pending' },
      { number: '02', title: 'Performance-minded delivery', description: 'Static rendering, efficient assets, and a small browser-side footprint.', detail: 'Focus area · project evidence pending' },
      { number: '03', title: 'Maintainable systems', description: 'Typed content, reusable components, and predictable build and release paths.', detail: 'Focus area · project evidence pending' },
    ],
    stackKicker: '03 / TECH STACK',
    stackTitle: 'Tools with a purpose.',
    stackBody: 'The site implementation uses the tools below. A separate, verified personal skills list will replace this foundation note later.',
    stackGroups: [
      { label: 'Site foundation', items: ['Astro', 'TypeScript', 'Tailwind CSS'] },
      { label: 'Delivery', items: ['Static HTML', 'GitHub Pages', 'pnpm'] },
    ],
    projectsKicker: '04 / FEATURED PROJECTS',
    projectsTitle: 'Selected work, in preparation.',
    projectsIntro: 'No project is presented as completed work until its ownership, scope, and results are confirmed. These slots show the information each case study will include.',
    projectCards: [
      { number: '01 / DRAFT', title: 'Project case study', description: 'Problem, audience, and the reason the project exists.', detail: 'Project identity and link pending verification' },
      { number: '02 / DRAFT', title: 'Technical approach', description: 'Architecture, tools, tradeoffs, and individual contribution.', detail: 'Implementation details pending verification' },
      { number: '03 / DRAFT', title: 'Outcome & learning', description: 'Evidence of impact, constraints, and what changed after release.', detail: 'Results pending verification' },
    ],
    experienceKicker: '05 / EXPERIENCE',
    experienceTitle: 'Experience, with the facts first.',
    experienceBody: 'A verified career timeline is being prepared. The previous site contained template employment and education entries, so they are intentionally excluded here.',
    experienceItems: ['Role and organization', 'Dates and responsibilities', 'Technologies and outcomes'],
    contactKicker: '06 / CONTACT',
    contactTitle: 'Let’s start a conversation.',
    contactBody: 'For now, the verified public GitHub profile is the contact route. A preferred professional contact method can be added after approval.',
    contactAction: 'View GitHub profile',
    footer: 'Built with care. Content under review.',
    mobileMenu: 'Navigation menu',
    metaDescription: 'Suthipong Toonritsa’s software developer portfolio. Explore a modern, bilingual site built with Astro, TypeScript, and Tailwind CSS.',
  },
  th: {
    langLabel: 'ไทย',
    nav: { about: 'เกี่ยวกับ', expertise: 'แนวทาง', stack: 'เทคโนโลยี', projects: 'ผลงาน', experience: 'ประสบการณ์', contact: 'ติดต่อ' },
    eyebrow: 'นักพัฒนาซอฟต์แวร์ · พอร์ตโฟลิโอ',
    heroTitle: 'ซอฟต์แวร์ที่ใส่ใจรายละเอียด เพื่อการใช้งานจริง',
    heroDescription: 'ผมชื่อ Suthipong Toonritsa เป็นนักพัฒนาเว็บ พอร์ตโฟลิโอนี้กำลังจัดทำใหม่เพื่อแสดงผลงานที่ตรวจสอบได้ การตัดสินใจด้านเทคนิค และผู้ใช้งานที่ได้รับประโยชน์',
    heroNote: 'เนื้อหาพอร์ตโฟลิโออยู่ระหว่างตรวจสอบ รายละเอียดโครงการและประสบการณ์ด้านล่างระบุชัดเจนว่าเป็นฉบับร่าง',
    primaryAction: 'ดูผลงาน',
    secondaryAction: 'ติดต่อ',
    availability: 'ยินดีพูดคุยเกี่ยวกับโอกาสที่น่าสนใจ',
    aboutKicker: '01 / เกี่ยวกับ',
    aboutTitle: 'แนวทางการทำงานที่ชัดเจน',
    aboutBody: 'ผมให้ความสำคัญกับความชัดเจน การดูแลรักษาโค้ด และประสบการณ์ใช้งานบนทุกขนาดหน้าจอ รายละเอียดประวัติส่วนตัวกำลังตรวจสอบก่อนเผยแพร่',
    aboutAside: 'เว็บไซต์นี้สร้างแบบสแตติกด้วย Astro, TypeScript และ Tailwind CSS มีหน้าแยกภาษา และรองรับ GitHub Pages',
    expertiseKicker: '02 / แนวทาง',
    expertiseTitle: 'หลักคิดเบื้องหลังงานวิศวกรรม',
    expertiseIntro: 'หัวข้อเหล่านี้เป็นแนวทางของพอร์ตโฟลิโอ กรณีศึกษาจริงจะเพิ่มหลังตรวจสอบข้อมูลแล้วเท่านั้น',
    expertise: [
      { number: '01', title: 'การพัฒนาส่วนติดต่อ', description: 'โครงสร้าง HTML ที่มีความหมาย เลย์เอาต์ยืดหยุ่น และรูปแบบการโต้ตอบที่เข้าถึงได้', detail: 'หัวข้อที่สนใจ · รอตรวจสอบหลักฐานผลงาน' },
      { number: '02', title: 'ประสิทธิภาพในการส่งมอบ', description: 'การสร้างหน้าแบบสแตติก การจัดการไฟล์อย่างเหมาะสม และลด JavaScript บนเบราว์เซอร์', detail: 'หัวข้อที่สนใจ · รอตรวจสอบหลักฐานผลงาน' },
      { number: '03', title: 'ระบบที่ดูแลต่อได้', description: 'ข้อมูลที่กำหนดชนิดชัดเจน คอมโพเนนต์ใช้ซ้ำ และขั้นตอน build กับ release ที่คาดเดาได้', detail: 'หัวข้อที่สนใจ · รอตรวจสอบหลักฐานผลงาน' },
    ],
    stackKicker: '03 / เทคโนโลยี',
    stackTitle: 'เลือกเครื่องมือให้เหมาะกับงาน',
    stackBody: 'เครื่องมือด้านล่างใช้สร้างเว็บไซต์นี้ รายการทักษะส่วนบุคคลที่ตรวจสอบแล้วจะเพิ่มภายหลัง',
    stackGroups: [
      { label: 'พื้นฐานเว็บไซต์', items: ['Astro', 'TypeScript', 'Tailwind CSS'] },
      { label: 'การส่งมอบ', items: ['Static HTML', 'GitHub Pages', 'pnpm'] },
    ],
    projectsKicker: '04 / ผลงานเด่น',
    projectsTitle: 'กำลังเตรียมข้อมูลผลงาน',
    projectsIntro: 'จะไม่แสดงโครงการว่าเป็นผลงานจริงก่อนยืนยันเจ้าของ ขอบเขต และผลลัพธ์ ส่วนนี้แสดงข้อมูลที่แต่ละกรณีศึกษาจะต้องมี',
    projectCards: [
      { number: '01 / ฉบับร่าง', title: 'กรณีศึกษาโครงการ', description: 'ปัญหา กลุ่มผู้ใช้ และเหตุผลที่สร้างโครงการ', detail: 'รอยืนยันชื่อโครงการและลิงก์' },
      { number: '02 / ฉบับร่าง', title: 'แนวทางด้านเทคนิค', description: 'สถาปัตยกรรม เครื่องมือ ข้อแลกเปลี่ยน และหน้าที่ที่รับผิดชอบ', detail: 'รอยืนยันรายละเอียดการพัฒนา' },
      { number: '03 / ฉบับร่าง', title: 'ผลลัพธ์และบทเรียน', description: 'หลักฐานผลกระทบ ข้อจำกัด และสิ่งที่เปลี่ยนหลังเผยแพร่', detail: 'รอยืนยันผลลัพธ์' },
    ],
    experienceKicker: '05 / ประสบการณ์',
    experienceTitle: 'ประสบการณ์ที่อ้างอิงข้อเท็จจริง',
    experienceBody: 'กำลังจัดทำลำดับประสบการณ์ที่ตรวจสอบได้ เว็บไซต์เดิมมีข้อมูลการทำงานและการศึกษาจากเทมเพลต จึงไม่ได้นำมาแสดงที่นี่',
    experienceItems: ['ตำแหน่งและองค์กร', 'ช่วงเวลาและหน้าที่', 'เทคโนโลยีและผลลัพธ์'],
    contactKicker: '06 / ติดต่อ',
    contactTitle: 'เริ่มพูดคุยกัน',
    contactBody: 'ขณะนี้ใช้โปรไฟล์ GitHub สาธารณะที่ยืนยันได้เป็นช่องทางติดต่อ สามารถเพิ่มช่องทางติดต่อสำหรับงานหลังได้รับการอนุมัติ',
    contactAction: 'ดูโปรไฟล์ GitHub',
    footer: 'สร้างด้วยความใส่ใจ · เนื้อหาอยู่ระหว่างตรวจสอบ',
    mobileMenu: 'เมนูนำทาง',
    metaDescription: 'พอร์ตโฟลิโอนักพัฒนาซอฟต์แวร์ของ Suthipong Toonritsa เว็บไซต์สองภาษาที่สร้างด้วย Astro, TypeScript และ Tailwind CSS',
  },
};
