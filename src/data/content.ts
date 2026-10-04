import { projects } from "./projects";

export const personalInfo = {
  name: "Om Prakash Sharma",
  eyebrow: "TECH LEAD & SENIOR BACKEND ARCHITECT",
  titleHighlight: "Om Prakash Sharma",
  titlePrefix: "Hi, I’m ",
  description: "A Tech Lead & Backend Architect dedicated to engineering high-performance scalable systems, leading technical execution and turning complex challenges into robust production solutions.",
  chips: ["Technical Lead", "System Architecture", "JavaScript Engineer", "NodeJS", "Python", "Java", "React", "Angular", "PWA", "PostgreSQL", "MongoDB", "Docker/Kubernetes", "Nginx", "Jenkins", "Gcloud", "AWS"],
  stats: [
    { value: "11+", label: "Years Experience" },
    { value: `${projects.length}+`, label: "Projects Built" },
    { value: "20+", label: "Technologies" },
    { value: "100%", label: "Problem Solving" }
  ],
  aboutText: "I'm a software architect and backend specialist who loves building scalable, high-availability distributed systems from the ground up. I spend my time designing clean microservices, optimizing for low latency and turning complex business challenges into rock-solid, reliable tech infrastructure that just works.",
  contactSubtext: "I’m always open to discussing opportunities, collaborations or a good tech conversation.",
  footerText: `© ${new Date().getFullYear()} Om Prakash Sharma`
};

export const navLinks = [
  "home",
  "projects",
  "experience",
  "about"
];

export const skills = [
  ['Frontend', 'React, Angular, Ionic, PWA, Component architecture'],
  ['Backend', 'Node.js, Python, Express.js, NestJS, FastAPI, GraphQL, REST APIs, Streams'],
  ['Database', 'MongoDB, PostgreSQL, MSSQL, Redis'],
  ['DevOps', 'AWS, GCP, Docker, Docker Swarm, CI/CD, Nginx, Linux'],
  ['Communication', 'WebSocket, SSE, Redis Pub/Sub, gRPC'],
  ['System Design', 'Scalability, Caching, Load balancing, Patterns'],
  ['Security', 'OAuth2, RBAC, JWT, Rate limiting, Data encryption, OWASP practices'],
  ['Architecture', 'Modular Monolith, Microservices, Multi-Tenant, Event-Driven Systems']
];

export const tech = ['React', 'Angular', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'MSSQL', 'Docker', 'Nginx', 'Linux'];

export const notes = [
  { title: 'JavaScript — Closures', date: '2026' },
  { title: 'Node.js — Streams', date: '2026' },
  { title: 'gRPC vs REST', date: '2026' },
  { title: 'System Design — Notification System', date: '2026' }
];

export const repos = [
  { name: 'invoice-automation', stars: 12 },
  { name: 'mlms-portal', stars: 10 },
  { name: 'rpa-scripts', stars: 8 },
  { name: 'node-streams-demo', stars: 6 }
];

export const experiences = [
  {
    period: 'May 2023 — Present',
    role: 'Engineering Manager',
    highlight: 'Current Role',
    place: 'JioStar India Pvt. Ltd.',
    desc: 'Leading engineering teams, shaping technical roadmaps and product architecture, designing scalable backend systems and driving cross-functional delivery across internal business applications'
  },
  {
    period: 'Jan 2022 — May 2023',
    role: 'Technical Lead',
    highlight: '',
    place: 'Habilelabs Pvt. Ltd.',
    desc: 'Leading technical teams, driving architecture decisions, building scalable backend services and managing end-to-end product delivery.'
  },
  {
    period: 'Jun 2019 — Dec 2021',
    role: 'Associate Technical Lead',
    highlight: '',
    place: 'Habilelabs Pvt. Ltd.',
    desc: 'Led cross-functional development, optimized core backend workflows, and supervised architectural standards.'
  },
  {
    period: 'Jun 2017 — May 2019',
    role: 'Senior Software Engineer',
    highlight: '',
    place: 'Habilelabs Pvt. Ltd.',
    desc: 'Developed robust backend APIs, integrated scalable database solutions, and mentored junior developers.'
  },
  {
    period: 'Jun 2016 — May 2017',
    role: 'Web Developer',
    highlight: '',
    place: 'Habilelabs Pvt. Ltd.',
    desc: 'Built dynamic web applications, handled database operations, and executed full-stack integrations.'
  },
  {
    period: 'Jun 2015 — May 2016',
    role: 'Android Developer',
    highlight: '',
    place: 'Habilelabs Pvt. Ltd.',
    desc: 'Started career developing native Android mobile applications with rich user experience and optimized performance.'
  },
  {
    period: 'Jun 2014 — May 2015',
    role: 'Internship',
    highlight: '',
    place: 'Genx Soft Pvt. Ltd.',
    desc: 'Developed creative native Android mobile applications with rich UX and enhanced performance.'
  },
  {
    period: 'July 2011 — June 2015',
    role: 'Undergraduate',
    highlight: '',
    place: 'GIT Jaipur',
    desc: 'Completed Bachelor studies in Computer Science and Technology, building an Expense Tracking mobile app and a Centralized Data Sharing project.'
  }
];