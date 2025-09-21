// NavLink type
export type NavLink = {
  name: string;
  href: string;
  current: boolean;
};

// Type for individual link
type Link = {
  name: string;
  href: string;
};

// FooterLinks type 
export type FooterLinks = {
  product: Link[];
  company: Link[];
  legal: Link[];
  resources: Link[];
};

// Social link with icon
export type SocialLink = {
  name: string;
  href: string;
  icon: string; 
};

export interface DocumentationSection {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
}

export interface DocumentationCategory {
  id: string;
  title: string;
  description: string;
  sections: DocumentationSection[];
}

export interface SearchResult {
  id: string;
  title: string;
  category: string;
  content: string;
  path: string;
}