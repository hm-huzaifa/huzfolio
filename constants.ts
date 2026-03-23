import { Job, Project, SkillCategory } from "./types";

export const RESUME_DATA = {
  name: "Muhammad Huzaifa",
  role: "Software Engineer",
  summary: "Results-oriented Full Stack Software Engineer Developer with 4+ years of hands-on experience in end-to-end development. Skilled in architecting scalable server-side solutions, crafting intuitive user interfaces, and managing secure, efficient cloud deployments.",
  philosophy: "Software engineering is more than writing code; it's about creating maintainable, efficient, and robust structures. I approach every project with a focus on long-term viability and performance optimization.",
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Azura Suite",
    subtitle: "Pending",
    description: "Pending",
    tech: ["Next.js", "Spring Boot", "PostgreSQL", "Python", "Terraform", "GCS"],
    role: "Full Stack Engineer",
    image: "/alertica.png",
    link: "",
    year: "2026"
  },
  {
    id: "p2",
    title: "Redi-Admin",
    subtitle: "File Scanning System",
    description: "A multi-tenant security platform that continuously scans server files for anomalies, unauthorized access, or potential vulnerabilities. Teams can define custom detection rules, schedule recurring scans, and receive real-time alerts via email and SMS when suspicious activity is detected.",
    tech: ["Next.js", "Rust", "MongoDB", "Docker"],
    role: "Full Stack Engineer",
    image: "/alertica.png",
    year: "2025"
  },
  {
    id: "p3",
    title: "OHOO Spring",
    subtitle: "Change it",
    description: "Change it",
    tech: ["Node.js", "React", "Python", "Flask", "MySQL", "Docker"],
    role: "ML Engineer",
    github: "https://github.com/hm-huzaifa",
    link: "https://spring.ohoolabs.com/",
    image: "/ohoo-spring.png",
    year: "2025"
  },
  {
    id: "p4",
    title: "GREEN RECEIPT",
    subtitle: "Digital Receipt Automation",
    description: "Digital receipt automation platform that streamlines receipt processing and management. Built with NextJS and Kotlin Spring Boot as backend, featuring JWT authentication and PostgreSQL and MongoDB databases for secure, efficient receipt handling.",
    tech: ["NextJS", "Kotlin", "Spring Boot", "JWT", "PostgreSQL", "MongoDB", "AWS", "OpenAPI / Swagger"],
    role: "Full Stack Engineer",
    image: "placeholder",
    year: "2024"
  },
  {
    id: "p4",
    title: "Zedtalent",
    subtitle: "Multi Talent Portal",
    description: "A Talent portal to create and manage multiple Resumes of a user. Features bulk JSON ingestion for exam modules, multi-part tests with nested question groups, and pluggable parsers for different question types.",
    tech: ["Java", "Spring Boot", "React.js", "AWS", "PostgreSQL", "MongoDB", "Docker"],
    role: "Full Stack Engineer",
    link: "",
    image: "placeholder",
    year: "2024"
  },
  {
    id: "p5",
    title: "Outstonne",
    subtitle: "Pending",
    description: "Pending",
    tech: ["React.js", "Tailwind", "Sanity"],
    role: "Full Stack Engineer",
    link: "",
    image: "placeholder",
    year: "2024"
  },

];

export const EXPERIENCE: Job[] = [
  {
    id: "j1",
    company: "Zedfour Technology",
    role: "Software Engineer",
    period: "JANUARY 2024 - MARCH 2025",
    location: "Hybrid - Lahore, Pakistan",
    description: "Pending"
  },
  {
    id: "j2",
    company: "OHOO LABS",
    role: "Software Engineer",
    period: "APRIL 2025 - PRESENT",
    location: "Remote - Seoul, South Korea",
    description: "Pending"
  },
  {
    id: "j3",
    company: "Zedfour Technology",
    role: "Senior Software Engineer",
    period: "SEPTEMBER 2025 - PRESENT",
    location: "Onsite - Lahore, Pakistan",
    description: "Pending"
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "CORE",
    items: ["Java", "Spring Boot", "Spring Security", "Node.js", "NestJS", "Express.js", "JS/TS", "Python"]
  },
  {
    category: "FRONTEND",
    items: ["Next.js", "React.js", "Tailwind", "ShadCN UI", "Figma"]
  },
  {
    category: "INFRA",
    items: ["Docker", "Kubernetes", "Terraform", "DevOps", "CI/CD", "GCP", "AWS"]
  },
  {
    category: "DATA",
    items: ["PostgreSQL", "MongoDB", "MySQL", "RESTful APIs", "JWT", "OpenAPI"]
  }
];