import {
  BrainCircuit,
  Code2,
  Cpu,
  DatabaseZap,
  GitBranch,
  Network,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import type { Service } from "@/types/service";

export const profile = {
  name: "M. jawad Ahsan",
  role: "AI/ML Engineer and Full Stack Developer",
  email: "m.jawadahs@gmail.com",
  location: "Lahore, Pakistan",
  bio: "I am working in developing AI-powered applications and full-stack solutions with Python, Machine Learning, Deep Learning, NLP, LLMs, Generative AI, FastAPI, Next.js, and NestJS. I enjoy building scalable systems, clean APIs, and intuitive user experiences while continuously exploring new technologies..",
  socials: [
    { label: "GitHub", href: "https://github.com/jawadahsan131" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-jawad-12a536282/" },
    { label: "X", href: "https://x.com/" }
  ]
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const skills = [
  { name: "LLM Integration", value: 55 },
  { name: "FastAPI Systems", value: 55 },
  { name: "Next.js Interfaces", value: 45 },
  { name: "MLOps Pipelines", value: 15 },
  { name: "Vector Search", value: 78 }
];

export const stack = [
  "Python",
  "TypeScript",
  "FastAPI",
  "Next.js",
  "PyTorch",
  "LangChain",
  "Postgres",
  "Redis",
  "Docker",
  "Kubernetes",
  "OpenTelemetry",
  "Tailwind CSS"
];

export const timeline = [
  {
    year: "2026",
    title: "AI Systems Building",
    detail: "Building AI-powered applications  with Python, Machine Learning, Deep Learning, NLP, LLMs, Generative AI, FastAPI."
  },
  {
    year: "2025",
    title: "Virtual Internship - AI/ML Engineer",
    detail: "Focused on building web applications for AI models, Training Models for supervised learning, creating fast backend APIs."
  },
  {
    year: "2025",
    title: "Machine Learning Projects",
    detail: "Worked on various machine learning projects, including model evaluation, fine-tuning, and deployment of ML models."
  }
];

export const education = [
  {
    degree: "BS Artificial Intelligence",
    institution: "Superior University",
    detail: "Focused on distributed systems, data engineering, and machine learning model evaluation."
  },
  {
    degree: "Fsc Pre-Engineering",
    institution: "Superior College Lahore",
    detail: "Specialized in model serving, container orchestration, observability, and secure API deployment."
  }
];

export const  certifications = [
  "Machine Learning with Python",
  "FastAPI Production ",
  "NestJS & NextJS Fundamentals",
  "Backend Development with Python",
];

export const interests = ["Explaining AI Decisions", "Code Documentation", "Using Open-Source AI Models", "Exploring New AI Research", "Learning New Programming Languages"];

export const services: Service[] = [
  {
    icon: BrainCircuit,
    title: "AI/ML Engineering",
    description: "Training, fine-tuning, evaluation, and inference optimization for practical machine learning systems.",
    deliverables: ["Model evaluation plan", "Fine-tuning pipeline", "Optimized inference API", "Monitoring checklist"]
  },
  {
    icon: Network,
    title: "Backend API Development",
    description: "FastAPI and async service development with clean contracts, validation, observability, and deployment readiness.",
    deliverables: ["REST API design", "Pydantic schemas", "Async workers", "OpenAPI documentation"]
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Next.js interfaces paired with FastAPI backends for fast, durable, maintainable product experiences.",
    deliverables: ["App Router frontend", "Reusable UI system", "Contact or auth flows", "Production deployment"]
  },
  {
    icon: DatabaseZap,
    title: "LLM Integration",
    description: "RAG pipelines, vector stores, prompt evaluation, and retrieval workflows built around real product constraints.",
    deliverables: ["RAG architecture", "Vector index setup", "Prompt test suite", "Source-grounded responses"]
  },
  {
    icon: Cpu,
    title: "MLOps & Infrastructure",
    description: "CI/CD, GPU scheduling, containerization, model versioning, and health checks for production ML workloads.",
    deliverables: ["Docker images", "CI/CD pipeline", "Kubernetes manifests", "Telemetry dashboards"]
  },
  {
    icon: ShieldCheck,
    title: "Technical Consulting",
    description: "Architecture reviews, code audits, roadmaps, and implementation plans for complex AI and platform initiatives.",
    deliverables: ["Architecture audit", "Risk register", "Delivery roadmap", "Implementation backlog"]
  }
];

export const galleryItems = [
  {
    title: "Embedding Atlas",
    category: "AI Visualizations",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Inference Control Room",
    category: "Infra",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "RAG Architecture Map",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Model Evaluation Lab",
    category: "Research",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Telemetry Interface",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Vector Store Flow",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "GPU Fabric",
    category: "Infra",
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Experiment Notebook",
    category: "Research",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Agent Workspace",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  }
];

export const stats = [
  { label: "Projects", value: "3+" },
  { label: "Skills", value: "6+" },
  { label: "Years Experience", value: "Fresher" },
  { label: "Education", value: "BS AI" }
];

export const serviceProcess = [
  { step: "01", title: "Discovery", detail: "Clarify goals, risks, constraints, and the measurable outcome." },
  { step: "02", title: "Planning", detail: "Define architecture, milestones, success criteria, and delivery rhythm." },
  { step: "03", title: "Execution", detail: "Build in tight loops with demos, tests, documentation, and observability." },
  { step: "04", title: "Delivery", detail: "Ship production-ready artifacts with handoff notes and next-step guidance." }
];

export const featuredSignals = [
  { icon: Sparkles, label: "Working Domain | ML DL NLP", value: "" },
  { icon: GitBranch, label: "Backend Development | FastAPI Nest.js", value: "" },
  { icon: Cpu, label: "GenAI LLM Integration RAG", value: "" }
];
