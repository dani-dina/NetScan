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
    { name: 'Documentation', href: '/docs' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
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

export const DOCUMENTATION_CATEGORIES = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Begin your journey with Netscan - setup and basic usage',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction to Netscan',
        icon: 'IntroductionIcon',
        content: `Netscan is a powerful web application security scanner designed to help developers and security professionals identify vulnerabilities in their web applications.`
      },
      {
        id: 'installation',
        title: 'Installation Guide',
        icon: 'InstallationIcon',
        content: `To install Netscan, you can use our CLI tool or integrate it directly into your development workflow.`
      },
      {
        id: 'quick-start',
        title: 'Quick Start',
        icon: 'RocketIcon',
        content: `Get up and running in minutes with our quick start guide.`
      }
    ]
  },
  {
    id: 'scanning',
    title: 'Scanning',
    description: 'Learn how to perform security scans and interpret results',
    sections: [
      {
        id: 'scan-types',
        title: 'Scan Types',
        icon: 'ScanIcon',
        content: `Netscan offers various scan types including vulnerability assessment, penetration testing, and compliance scanning.`
      },
      {
        id: 'scan-configuration',
        title: 'Scan Configuration',
        icon: 'SettingsIcon',
        content: `Customize your scans with advanced configuration options.`
      },
      {
        id: 'results-interpretation',
        title: 'Results Interpretation',
        icon: 'ChartIcon',
        content: `Learn how to read and understand your scan results.`
      }
    ]
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Connect Netscan with your development tools and workflows',
    sections: [
      {
        id: 'ci-cd',
        title: 'CI/CD Integration',
        icon: 'CICDIcon',
        content: `Integrate Netscan into your continuous integration and deployment pipelines.`
      },
      {
        id: 'api',
        title: 'API Usage',
        icon: 'APIIcon',
        content: `Use our REST API to programmatically control Netscan.`
      },
      {
        id: 'webhooks',
        title: 'Webhooks',
        icon: 'WebhookIcon',
        content: `Set up webhooks to receive real-time notifications.`
      }
    ]
  },
  {
    id: 'security',
    title: 'Security Features',
    description: 'Advanced security capabilities and compliance',
    sections: [
      {
        id: 'vulnerability-db',
        title: 'Vulnerability Database',
        icon: 'DatabaseIcon',
        content: `Access our comprehensive database of known vulnerabilities.`
      },
      {
        id: 'compliance',
        title: 'Compliance Standards',
        icon: 'ShieldIcon',
        content: `Meet various compliance standards including OWASP, NIST, and PCI DSS.`
      },
      {
        id: 'remediation',
        title: 'Remediation Guidance',
        icon: 'FixIcon',
        content: `Get detailed guidance on fixing identified vulnerabilities.`
      }
    ]
  }
];

export const SEARCH_PLACEHOLDER = 'Search documentation...';
export const DOCUMENTATION_TITLE = 'Netscan Documentation';
export const DOCUMENTATION_SUBTITLE = 'Everything you need to know about using Netscan';