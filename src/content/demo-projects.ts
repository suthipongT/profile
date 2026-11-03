import type { DemoProject } from './projects';
import type { ImageMetadata } from 'astro';

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
const artwork = (name: string): ImageMetadata => ({ src: `${base}demo/${name}.svg`, width: 1440, height: 900, format: 'svg' });
const corporate = artwork('corporate');
const crm = artwork('crm');
const cms = artwork('cms');
const erp = artwork('erp');

// Fictional design samples. This module is imported only by an explicit preview build.
export const demoProjects = [
  {
    id: 'demo-corporate', slug: 'demo-corporate', kind: 'demo', category: 'corporate-website', featured: true,
    content: {
      en: { name: 'Fieldnote', summary: 'An editorial digital home for a design practice.', description: 'A sample corporate site concept with a clear service story, editorial type, and an inquiry path.', role: 'Interface design and frontend development', scope: 'Homepage, service overview, responsive navigation' },
      th: { name: 'Fieldnote', summary: 'เว็บไซต์สำหรับสตูดิโอออกแบบ', description: 'แนวคิดเว็บไซต์องค์กรที่เล่าเรื่องบริการด้วยตัวอักษรเด่นและมีช่องทางเริ่มต้นติดต่อที่ชัดเจน', role: 'ออกแบบหน้าจอและพัฒนาส่วนหน้า', scope: 'หน้าแรก ภาพรวมบริการ และเมนูรองรับหลายหน้าจอ' },
    },
    technologies: ['Astro', 'TypeScript', 'CSS'],
    screenshots: [{ image: corporate, alt: { en: 'Fictional Fieldnote website concept showing an editorial hero and services grid', th: 'ภาพแนวคิดเว็บไซต์ Fieldnote สมมติ แสดงส่วนเปิดหน้าแบบบรรณาธิการและรายการบริการ' }, caption: { en: 'Original interface artwork · fictional concept', th: 'ภาพหน้าจอออกแบบใหม่ · แนวคิดสมมติ' } }],
  },
  {
    id: 'demo-crm', slug: 'demo-crm', kind: 'demo', category: 'crm', featured: true,
    content: {
      en: { name: 'Relay', summary: 'A calm workspace for customer operations.', description: 'A sample CRM view that brings relationship status, next actions, and account context into one screen.', role: 'Product interface design and frontend development', scope: 'Pipeline overview, account list, activity panel' },
      th: { name: 'Relay', summary: 'พื้นที่ทำงานสำหรับทีมดูแลลูกค้า', description: 'แนวคิดหน้าจอ CRM ที่รวมสถานะความสัมพันธ์ งานถัดไป และบริบทบัญชีไว้ในมุมมองเดียว', role: 'ออกแบบหน้าจอผลิตภัณฑ์และพัฒนาส่วนหน้า', scope: 'ภาพรวมงานขาย รายการบัญชี และแผงกิจกรรม' },
    },
    technologies: ['TypeScript', 'Component UI', 'CSS'],
    screenshots: [{ image: crm, alt: { en: 'Fictional Relay CRM dashboard with pipeline columns, account list, and activity panel', th: 'ภาพแนวคิดระบบ Relay CRM สมมติ มีคอลัมน์งานขาย รายการบัญชี และแผงกิจกรรม' }, caption: { en: 'Original interface artwork · fictional concept', th: 'ภาพหน้าจอออกแบบใหม่ · แนวคิดสมมติ' } }],
  },
  {
    id: 'demo-cms', slug: 'demo-cms', kind: 'demo', category: 'cms', featured: true,
    content: {
      en: { name: 'Commonplace', summary: 'An editorial publishing desk for content teams.', description: 'A sample CMS interface balancing a writing canvas, publication controls, and content structure.', role: 'Product interface design and frontend development', scope: 'Content editor, publishing status, asset library' },
      th: { name: 'Commonplace', summary: 'พื้นที่จัดการเนื้อหาสำหรับทีมบรรณาธิการ', description: 'แนวคิดหน้าจอ CMS ที่จัดพื้นที่เขียน เครื่องมือเผยแพร่ และโครงสร้างเนื้อหาให้ใช้งานร่วมกัน', role: 'ออกแบบหน้าจอผลิตภัณฑ์และพัฒนาส่วนหน้า', scope: 'ตัวแก้ไขเนื้อหา สถานะเผยแพร่ และคลังสื่อ' },
    },
    technologies: ['TypeScript', 'Component UI', 'CSS'],
    screenshots: [{ image: cms, alt: { en: 'Fictional Commonplace CMS editor with content canvas, status controls, and media rail', th: 'ภาพแนวคิดตัวแก้ไข Commonplace CMS สมมติ มีพื้นที่เนื้อหา ตัวควบคุมสถานะ และแถบสื่อ' }, caption: { en: 'Original interface artwork · fictional concept', th: 'ภาพหน้าจอออกแบบใหม่ · แนวคิดสมมติ' } }],
  },
  {
    id: 'demo-erp', slug: 'demo-erp', kind: 'demo', category: 'erp-business-management', featured: true,
    content: {
      en: { name: 'Ledgerway', summary: 'An operations overview for business teams.', description: 'A sample ERP screen connecting purchase requests, inventory, and approvals through a readable dashboard.', role: 'Product interface design and frontend development', scope: 'Operations overview, request table, approval states' },
      th: { name: 'Ledgerway', summary: 'ภาพรวมการดำเนินงานสำหรับทีมธุรกิจ', description: 'แนวคิดหน้าจอ ERP ที่เชื่อมคำขอจัดซื้อ สินค้าคงคลัง และการอนุมัติไว้ในแดชบอร์ดที่อ่านง่าย', role: 'ออกแบบหน้าจอผลิตภัณฑ์และพัฒนาส่วนหน้า', scope: 'ภาพรวมการดำเนินงาน ตารางคำขอ และสถานะอนุมัติ' },
    },
    technologies: ['TypeScript', 'Component UI', 'CSS'],
    screenshots: [{ image: erp, alt: { en: 'Fictional Ledgerway ERP dashboard with operations metrics and a purchase request table', th: 'ภาพแนวคิดแดชบอร์ด Ledgerway ERP สมมติ มีภาพรวมการดำเนินงานและตารางคำขอจัดซื้อ' }, caption: { en: 'Original interface artwork · fictional concept', th: 'ภาพหน้าจอออกแบบใหม่ · แนวคิดสมมติ' } }],
  },
] satisfies readonly DemoProject[];
