/**
 * Portfolio content — AI Full-Stack Engineer positioning.
 */

export const site = {
  name: "Haleeludheen N",
  role: "AI Full-Stack Engineer",
  tagline:
    "I build production AI features — RAG, document chat, and agent workflows — inside scalable React, Node.js, and enterprise web platforms.",
  email: "Halee03@outlook.com",
  phone: "+91 95448 40771",
  phoneHref: "tel:+919544840771",
  github: "https://github.com/haaleel",
  linkedin: "https://www.linkedin.com/in/haleeludheen-n",
  location: "Kochi, Kerala, India",
  url: "",
  yearsExperience: "4+ years",
  employer: "Global Infonet",
};

export const aboutParagraphs = [
  "I’m an AI-focused full-stack engineer with 4+ years of experience building production web applications in React, Next.js, Node.js, and TypeScript. My main focus today is shipping practical AI inside real business software — turning company documents and workflows into fast, reliable chat and semantic search.",
  "At Global Infonet, I design and ship LLM-powered search, RAG pipelines, and async background indexing on enterprise SharePoint and CMS platforms, connecting OpenAI (ChatGPT) and Anthropic (Claude) models to grounded company data with strict access controls.",
  "Alongside AI work, I own the full engineering stack: monorepo architecture (pnpm, Turborepo), MVP/layered services, NestJS & Express APIs, security hardening (OAuth 2.0, Azure AD, JWT, RBAC, XSS & Helmet protection), and cloud/VPS deployments across Azure, Docker, Nginx, and Cloudflare.",
];

export type AiCapability = {
  title: string;
  summary: string;
  tags: string[];
};

export const aiCapabilities: AiCapability[] = [
  {
    title: "RAG & Grounded Document Chat",
    summary:
      "End-to-end retrieval pipelines that ingest, chunk, index, and search enterprise documents so ChatGPT and Claude answer strictly from real company files.",
    tags: [
      "OpenAI API",
      "Claude API",
      "RAG",
      "Embeddings",
      "Semantic Search",
      "Prompt Guardrails",
    ],
  },
  {
    title: "AI Agents & Async Indexing Pipelines",
    summary:
      "Queue-backed background workers and agent-style tool flows that sync CMS updates, run multi-step retrieval, and keep AI responses fast and up to date.",
    tags: [
      "Agent Workflows",
      "Async Queues",
      "Background Workers",
      "Retrieval Orchestration",
      "Streaming Chat UI",
    ],
  },
  {
    title: "Full-Stack Web & Enterprise Platforms",
    summary:
      "Clean, modular frontends and APIs that host AI features seamlessly inside everyday products — from Next.js & NestJS monorepos to SharePoint SPFx.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "MongoDB",
      "SharePoint SPFx",
      "Expo",
    ],
  },
  {
    title: "Security, Cloud & Production Delivery",
    summary:
      "Enterprise auth, API hardening, and multi-environment hosting so AI and web workloads stay secure and reliable in production.",
    tags: [
      "Azure App Service",
      "Container Apps",
      "Key Vault",
      "OAuth 2.0 / Azure AD",
      "Helmet & XSS",
      "Docker",
      "Nginx",
      "Cloudflare",
    ],
  },
];

export type RoleItem = {
  dates: string;
  title: string;
  company: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const roles: RoleItem[] = [
  {
    dates: "2024 — PRESENT",
    title: "Software Engineer · AI & Full Stack",
    company: "Global Infonet",
    summary:
      "Lead developer on production AI chat and semantic search inside enterprise SharePoint CMS platforms, alongside full-stack React/SPFx and Node.js services.",
    highlights: [
      "Built RAG document chat & search connecting CMS libraries to ChatGPT and Claude with grounded citations and permission-aware retrieval.",
      "Engineered queue workers and agent-style orchestration for automatic document ingestion, indexing, and multi-step answers.",
      "Hardened APIs and frontends with Azure AD OAuth 2.0, JWT/RBAC, XSS sanitization, and Helmet; deployed on Azure (App Service, Container Apps, Key Vault), VPS/Nginx, and Cloudflare.",
    ],
    tags: [
      "OpenAI / Claude",
      "RAG",
      "Agent Flows",
      "React",
      "TypeScript",
      "Node.js",
      "SharePoint SPFx",
      "Azure",
    ],
  },
  {
    dates: "2022 — 2023",
    title: "Associate Software Engineer",
    company: "Global Infonet",
    summary:
      "Delivered full-stack React and Node.js applications, REST APIs, and SharePoint Online workflows for enterprise teams.",
    highlights: [
      "Built reusable React & SPFx interfaces integrated with Microsoft Graph, REST APIs, and structured document libraries.",
      "Implemented input validation, output encoding, XSS mitigation, and clean modular service layers.",
    ],
    tags: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "SharePoint",
      "Microsoft Graph",
      "REST APIs",
    ],
  },
];

export type Project = {
  name: string;
  label: string;
  summary: string;
  points: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Enterprise AI Document Chat & Intelligent CMS",
    label: "Production AI System · Enterprise CMS",
    summary:
      "An AI-native layer on top of enterprise SharePoint CMS that lets teams ask questions in plain English and get grounded answers from internal documents.",
    points: [
      "Background workers automatically sync, parse, and index CMS documents as files change.",
      "RAG retrieval pipeline fetches relevant passages and orchestrates ChatGPT / Claude responses inside a clean chat UI.",
      "Protected with Azure AD OAuth 2.0, RBAC document permissions, and Azure Key Vault secrets.",
    ],
    tags: [
      "RAG",
      "LLM APIs",
      "Semantic Search",
      "Node.js",
      "React / SPFx",
      "Azure",
    ],
  },
  {
    name: "Multi-Platform B2B Marketplace",
    label: "Live Product · Sole Engineer",
    summary:
      "End-to-end B2B commerce platform architected solo across web, API, and mobile in a shared TypeScript monorepo.",
    points: [
      "pnpm & Turborepo monorepo powering Next.js web, NestJS backend, MongoDB, and Expo mobile with shared Zod contracts.",
      "Clean MVP/layered modules and singleton service patterns with JWT auth, Helmet, and XSS/injection hardening.",
      "Containerized with Docker, GitHub Actions CI/CD, Nginx reverse proxy on VPS, and Cloudflare edge.",
    ],
    tags: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Monorepo",
      "MongoDB",
      "Expo",
      "Docker",
      "Nginx",
    ],
  },
];

export const education = {
  degree: "B.Sc. in Cyber Forensics",
  school: "Mahatma Gandhi University",
  place: "Kochi, Kerala, India",
  dates: "2017 — 2021",
};

export const languages = [
  { name: "English", level: "Upper Intermediate (B2)" },
  { name: "Malayalam", level: "Native" },
  { name: "Tamil", level: "Upper Intermediate" },
];
