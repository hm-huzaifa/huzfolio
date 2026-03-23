export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  role?: string;
  link?: string;
  github?: string;
  image: string;
  year: string;
}

export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}

export interface SkillCategory {
  category: string;
  items: string[];
}