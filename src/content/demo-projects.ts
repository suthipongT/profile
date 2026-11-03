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
      en: { name: 'Fieldnote', summary: 'An editorial digital home for a design practice.', description: 'Presents the practice and its services, with a clear path for visitors to make an inquiry.', role: 'Interface design and frontend development', scope: 'Homepage, service overview, responsive navigation' },
      th: { name: 'Fieldnote', summary: 'เว็บไซต์สำหรับสตูดิโอออกแบบ', description: 'นำเสนอสตูดิโอและบริการ พร้อมช่องทางให้ผู้สนใจเริ่มต้นติดต่อ', role: 'ออกแบบหน้าจอและพัฒนาส่วนหน้า', scope: 'หน้าแรก ภาพรวมบริการ และเมนูรองรับหลายหน้าจอ' },
    },
    technologies: ['Astro', 'TypeScript', 'CSS'],
    screenshots: [{ image: corporate, alt: { en: 'Fictional Fieldnote website concept showing an editorial hero and services grid', th: 'ภาพแนวคิดเว็บไซต์ Fieldnote สมมติ แสดงส่วนเปิดหน้าแบบบรรณาธิการและรายการบริการ' }, caption: { en: 'Original interface artwork · fictional concept', th: 'ภาพหน้าจอออกแบบใหม่ · แนวคิดสมมติ' } }],
  },
  {
    id: 'demo-crm', slug: 'demo-crm', kind: 'demo', category: 'crm', featured: true,
    content: {
      en: { name: 'Relay', summary: 'A calm workspace for customer operations.', description: 'Brings customer accounts, sales stages, and upcoming activity together for the customer team.', role: 'Product interface design and frontend development', scope: 'Pipeline overview, account list, activity panel' },
      th: { name: 'Relay', summary: 'พื้นที่ทำงานสำหรับทีมดูแลลูกค้า', description: 'รวมข้อมูลบัญชีลูกค้า ขั้นตอนการขาย และกิจกรรมถัดไป เพื่อให้ทีมดูแลลูกค้าติดตามงานได้ในหน้าจอเดียว', role: 'ออกแบบหน้าจอผลิตภัณฑ์และพัฒนาส่วนหน้า', scope: 'ภาพรวมงานขาย รายการบัญชี และแผงกิจกรรม' },
    },
    technologies: ['TypeScript', 'Component UI', 'CSS'],
    screenshots: [{ image: crm, alt: { en: 'Fictional Relay CRM dashboard with pipeline columns, account list, and activity panel', th: 'ภาพแนวคิดระบบ Relay CRM สมมติ มีคอลัมน์งานขาย รายการบัญชี และแผงกิจกรรม' }, caption: { en: 'Original interface artwork · fictional concept', th: 'ภาพหน้าจอออกแบบใหม่ · แนวคิดสมมติ' } }],
  },
  {
    id: 'demo-cms', slug: 'demo-cms', kind: 'demo', category: 'cms', featured: true,
    content: {
      en: { name: 'Commonplace', summary: 'An editorial publishing desk for content teams.', description: 'Gives content teams a place to edit articles, manage media, and review publishing status.', role: 'Product interface design and frontend development', scope: 'Content editor, publishing status, asset library' },
      th: { name: 'Commonplace', summary: 'พื้นที่จัดการเนื้อหาสำหรับทีมบรรณาธิการ', description: 'ช่วยทีมเนื้อหาเขียนบทความ จัดการสื่อ และดูสถานะการเผยแพร่ในพื้นที่เดียว', role: 'ออกแบบหน้าจอผลิตภัณฑ์และพัฒนาส่วนหน้า', scope: 'ตัวแก้ไขเนื้อหา สถานะเผยแพร่ และคลังสื่อ' },
    },
    technologies: ['TypeScript', 'Component UI', 'CSS'],
    screenshots: [{ image: cms, alt: { en: 'Fictional Commonplace CMS editor with content canvas, status controls, and media rail', th: 'ภาพแนวคิดตัวแก้ไข Commonplace CMS สมมติ มีพื้นที่เนื้อหา ตัวควบคุมสถานะ และแถบสื่อ' }, caption: { en: 'Original interface artwork · fictional concept', th: 'ภาพหน้าจอออกแบบใหม่ · แนวคิดสมมติ' } }],
  },
  {
    id: 'demo-erp', slug: 'demo-erp', kind: 'demo', category: 'erp-business-management', featured: true,
    content: {
      en: { name: 'Ledgerway', summary: 'An operations overview for business teams.', description: 'Brings purchase requests, inventory, and approval status together for business operations teams.', role: 'Product interface design and frontend development', scope: 'Operations overview, request table, approval states' },
      th: { name: 'Ledgerway', summary: 'ภาพรวมการดำเนินงานสำหรับทีมธุรกิจ', description: 'รวมคำขอจัดซื้อ สินค้าคงคลัง และสถานะการอนุมัติ เพื่อให้ทีมติดตามงานดำเนินการได้ในหน้าเดียว', role: 'ออกแบบหน้าจอผลิตภัณฑ์และพัฒนาส่วนหน้า', scope: 'ภาพรวมการดำเนินงาน ตารางคำขอ และสถานะอนุมัติ' },
    },
    technologies: ['TypeScript', 'Component UI', 'CSS'],
    screenshots: [{ image: erp, alt: { en: 'Fictional Ledgerway ERP dashboard with operations metrics and a purchase request table', th: 'ภาพแนวคิดแดชบอร์ด Ledgerway ERP สมมติ มีภาพรวมการดำเนินงานและตารางคำขอจัดซื้อ' }, caption: { en: 'Original interface artwork · fictional concept', th: 'ภาพหน้าจอออกแบบใหม่ · แนวคิดสมมติ' } }],
  },
] satisfies readonly DemoProject[];
