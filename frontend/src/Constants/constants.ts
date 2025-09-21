import type { FooterLinks } from '../types/index';

export const NAV_LINKS  = [
  { name: 'Home', href: '#', current: true },
  { name: 'Scan', href: '#scan', current: false },
  { name: 'Results', href: '#results', current: false },
  { name: 'History', href: '#history', current: false },
  { name: 'Documentation', href: '#docs', current: false },
];

// Footer Links
 export const footerLinks: FooterLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'API', href: '#api' },
    { name: 'Documentation', href: '#docs' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Security', href: '#security' },
    { name: 'Compliance', href: '#compliance' },
  ],
  resources: [
    { name: 'Help Center', href: '#help' },
    { name: 'Community', href: '#community' },
    { name: 'Webinars', href: '#webinars' },
    { name: 'Tutorials', href: '#tutorials' },
  ],
};