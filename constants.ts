import { Job, Project, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Muhammad Huzaifa",
  role: "Software Engineer",
  summary: "Results-oriented Full Stack Software Engineer Developer with 4+ years of hands-on experience in end-to-end development. Skilled in architecting scalable server-side solutions, crafting intuitive user interfaces, and managing secure, efficient cloud deployments.",
  philosophy: "Software engineering is more than writing code; it's about creating maintainable, efficient, and robust structures. I approach every project with a focus on long-term viability and performance optimization.",
  email: "mhuzaifa150@gmail.com",
  linkedin: "https://www.linkedin.com/in/mhuzaifa",
  github: "https://github.com/mhuzaifa",
  resumeURL: "https://drive.google.com/file/d/1E7GN8c_5EsmrtQ5tKO4sc2DpAHSzs6fS/view?usp=sharing"
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Azura Suite",
    subtitle: "End-to-end commerce operations: inventory, listings, and AI-assisted media at scale.",
    description: "A comprehensive e-commerce operations platform that centralizes supplier and marketplace workflows into a single system. It enables seamless product import/export, stock synchronization, catalog creation, and listing management across multiple channels. The platform also provides real-time job tracking and analytics to monitor operations and performance. Additionally, it supports automated media processing and operational insights to streamline large-scale e-commerce management.",
    tech: ["Next.js", "Spring Boot", "PostgreSQL", "MongoDB", "Python", "Terraform", "GCP", "FigmaMake"],
    role: "Senior Software Architect",
    image: "/azurasuite.png",
    link: "",
    year: "2026"
  },
  {
    id: "p2",
    title: "OHOO Spring",
    subtitle: "Multi-supplier commerce hub: listings, orders, and dropshipping across Korean and global marketplaces.",
    description:
      "A multi-supplier e-commerce management platform designed to streamline operations across Korean and international marketplaces. It centralizes product listings, order processing, dropshipping workflows, and stock management into a unified system. The platform ensures consistent synchronization of supplier and marketplace data for reliable operations. It also provides multi-language and multi-currency support to enable seamless global e-commerce management.",
    tech: ["NestJS", "MongoDB", "DynamoDB", "AWS", "React", "TypeScript", "Docker"],
    role: "Senior Software Engineer",
    link: "https://spring.ohoolabs.com/",
    image: "/ohoo-spring.png",
    year: "2025 - 2026"
  },
  {
    id: "p3",
    title: "Redi-Admin",
    subtitle: "File Scanning System",
    description: "A multi-tenant security platform that continuously scans server files for anomalies, unauthorized access, or potential vulnerabilities. Teams can define custom detection rules, schedule recurring scans, and receive real-time alerts via email and SMS when suspicious activity is detected.",
    tech: ["Next.js", "Rust", "MongoDB", "Docker"],
    role: "Full Stack Software Engineer",
    image: "placeholder",
    year: "2025"
  },
  {
    id: "p4",
    title: "GREEN RECEIPT",
    subtitle: "Digital Receipt Automation",
    description: "Digital receipt automation platform that streamlines receipt processing and management. Built with NextJS and Kotlin Spring Boot as backend, featuring JWT authentication and PostgreSQL and MongoDB databases for secure, efficient receipt handling.",
    tech: ["NextJS", "Kotlin", "Spring Boot", "JWT", "PostgreSQL", "MongoDB", "AWS", "OpenAPI / Swagger"],
    role: "Full Stack Software Engineer",
    image: "placeholder",
    year: "2024 - 2025"
  },
  {
    id: "p5",
    title: "Zedtalent",
    subtitle: "Multi Talent Portal",
    description: "A Talent portal to create and manage multiple Resumes of a user. Features bulk JSON ingestion for exam modules, multi-part tests with nested question groups, and pluggable parsers for different question types.",
    tech: ["Java", "Spring Boot", "React.js", "AWS", "PostgreSQL", "MongoDB", "Docker"],
    role: "Full Stack Software Engineer",
    link: "",
    image: "placeholder",
    year: "2024"
  },
  {
    id: "p6",
    title: "Outstonne",
    subtitle: "Pinterest-style discovery: pins, collections, and profiles with Google OAuth.",
    description:
      "A Pinterest-inspired social media platform focused on public content discovery and user engagement. It allows users to create and share posts (pins), save them into collections, and interact through comments and profile-based social features. The platform emphasizes seamless onboarding with simple authentication and intuitive user flows. It is designed to encourage continuous interaction through content creation, exploration, and engagement cycles.",
    tech: ["React", "Express.js", "Sanity", "OAuth", "Tailwind CSS"],
    role: "Full Stack Software Engineer",
    link: "https://outstonne.netlify.app",
    image: "/outstonne.png",
    year: "2022"
  },

];

/** How many experience bullets to show before "Read more" */
export const EXPERIENCE_BULLETS_PREVIEW = 2;

/** Newest-first (reverse chronological) */
export const EXPERIENCE: Job[] = [
  {
    id: "j3",
    company: "Zedfour Technology",
    role: "Senior Software Engineer",
    period: "SEPTEMBER 2025 - PRESENT",
    location: "Hybrid - Lahore, Pakistan",
    description: [
      "Developed AI-powered product image generation with Gemini Studio and Python pipelines, producing hyper-realistic multi-angle assets from supplier inputs to reduce photography costs.",
      "Built multimodal image validation (Gemini, Python) to automate QC across large volumes of AI-generated assets and protect supplier data accuracy.",
      "Engineered automated image resizing and multi-resolution export workflows to standardize media for multiple marketplaces.",
      "Built supplier and marketplace stock monitoring with Spring Boot APIs, Python sync jobs, Next.js dashboards, and MongoDB/PostgreSQL analytics.",
      "Translated Figma design systems into modular Next.js and Spring Boot components; shipped production operational dashboards with REST APIs.",
      "Architected a multi-vendor inventory platform centralizing product, pricing, and supplier operations with scalable relational models and full-stack services.",
    ],
  },
  {
    id: "j2",
    company: "OHOO LABS",
    role: "Software Engineer",
    period: "APRIL 2025 - PRESENT",
    location: "Remote - Seoul, South Korea",
    description: [
      "Delivered a unified multi-marketplace e-commerce platform for listings, orders, and dropshipping by integrating partner APIs with NestJS, MongoDB, and DynamoDB.",
      "Automated order, shipment, and refund lifecycles across providers with robust validation and error handling on AWS.",
      "Built scheduled batch pipelines for inactive users and data cleanup using DynamoDB, AWS CLI, and Node.js.",
      "Shipped an end-to-end survey analytics system: ingest PDF/Excel/Word/images, compute aggregates, and AI-assisted analysis with Next.js and the ChatGPT API.",
      "Accelerated UI delivery using Figma MCP and AI-assisted design-to-code (React, Next.js, Tailwind CSS).",
      "Developed AI background removal and inpainting microservices with Python, GPU acceleration (MPS/CUDA), and optimized model execution.",
    ],
  },
  {
    id: "j1",
    company: "Zedfour Technology",
    role: "Software Engineer",
    period: "JANUARY 2024 - MARCH 2025",
    location: "Remote - Lahore, Pakistan",
    description: [
      "Architected a scalable talent profile platform end-to-end with modular Java/Spring Boot services and MongoDB, including secure multi-role access via JWT and Spring Security.",
      "Built a dynamic resume creation flow in React with rich text and client-side PDF export.",
      "Delivered receipt automation with event-driven Kotlin Spring Boot services, MongoDB, and email/SMS notifications.",
      "Improved backend scalability using modular architecture and Spring Cache; shipped operational dashboards with Next.js and Shadcn UI.",
      "Integrated finance-domain APIs for contractor, bidding, and loan workflows (Spring Boot, Angular 17) and led Angular 13→17 migration for performance and maintainability.",
      "Implemented secure document and dynamic PDF generation (Spring Boot, React) and managed AWS EC2/RDS (PostgreSQL) with Docker-based CI/CD to ECS.",
    ],
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