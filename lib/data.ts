export const profile = {
  name: "Lahiru Asiri",
  role: "Associate Software Engineer",
  location: "Colombo, Sri Lanka",
  email: "lahiruasiri1@gmail.com",
  phone: "+94 70 140 3577",
  github: "https://github.com/lahiruAsiri",
  githubHandle: "/lahiruAsiri",
  linkedin: "https://www.linkedin.com/in/lahiru-asiri-maddumage",
  linkedinHandle: "/lahiru-asiri-maddumage",
  resume: "/Lahiru-Asiri-CV.pdf",
};

/** Career start (first role) — drives "years in industry". */
export const careerStart = "2025-01-01";
/** Current (associate) role start — drives the hero sentence. */
export const roleStart = "2025-11-01";

/** Whole-number decimal years elapsed since `from`, e.g. 1.7 */
export function yearsSince(from: string = careerStart): number {
  const start = new Date(from).getTime();
  const years = (Date.now() - start) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.max(0, Math.round(years * 10) / 10);
}

/** Months elapsed since `from`, counting the starting month (LinkedIn-style). */
export function monthsSince(from: string): number {
  const s = new Date(from);
  const n = new Date();
  const m =
    (n.getFullYear() - s.getFullYear()) * 12 + (n.getMonth() - s.getMonth()) + 1;
  return Math.max(0, m);
}

/** e.g. "10 months", "1 year 3 months". */
export function humanDuration(from: string): string {
  const total = monthsSince(from);
  if (total < 1) return "less than a month";
  const y = Math.floor(total / 12);
  const mo = total % 12;
  const parts: string[] = [];
  if (y) parts.push(`${y} year${y > 1 ? "s" : ""}`);
  if (mo) parts.push(`${mo} month${mo > 1 ? "s" : ""}`);
  return parts.join(" ");
}

/** Hero paragraph — the role duration is computed at build time. */
export function heroSummary(): string {
  return `Full-stack engineer building web, mobile and AI-driven products — React, Next.js and Vue on the front end, Node, NestJS and Spring Boot on the back end, React Native on mobile. ${humanDuration(
    roleStart
  )} into an associate role at Irusri Group, working across DevOps and CI/CD on AWS and Azure, RAG systems, n8n automation and Microsoft 365 administration. BSc (Hons) in Software Engineering, SLIIT.`;
}

export const stats = [
  { value: `${yearsSince()}`, label: "Years in industry", suffix: " yr" },
  { value: "10+", label: "Projects shipped" },
  { value: "15+", label: "Certifications" },
];

export const marquee = [
  "React",
  "Next.js",
  "Vue.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Spring Boot",
  "React Native",
  "RAG Systems",
  "n8n",
  "CI/CD",
  "Docker",
  "AWS",
  "Azure",
  "Microsoft 365",
  "Intune",
  "WordPress",
  "Shopify",
  "MongoDB",
  "Python",
];

export const about = {
  paragraphs: [
    "I'm a Software Engineering graduate from SLIIT with a strong foundation in OOP, data structures and agile delivery. My passion for building started at Ananda College, Colombo — today I ship production features across the stack, from React, Next.js and Vue front-ends to Node, NestJS and Spring Boot services.",
    "Beyond product work I set up DevOps and CI/CD automation on AWS and Azure, build AI-powered features with RAG systems and LLM APIs, automate workflows with n8n, deliver client sites on WordPress and Shopify, and handle Microsoft 365 administration — Intune device management, Entra ID, email migrations and account management.",
  ],
};

export const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux", "HTML / CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express", "Spring Boot", "REST APIs", "MVC"],
  },
  {
    title: "AI & Automation",
    items: ["RAG Systems", "LLM Integration", "OpenAI / Gemini API", "n8n", "Workflow Automation"],
  },
  {
    title: "DevOps & Cloud",
    items: ["CI/CD Pipelines", "Docker", "GitHub Actions", "AWS", "Azure", "Linux"],
  },
  {
    title: "Microsoft 365 & Endpoint",
    items: ["Microsoft 365 Admin", "Intune (MDM)", "Entra ID", "Email Migration", "Account Management"],
  },
  {
    title: "CMS & E-commerce",
    items: ["WordPress", "Shopify", "WooCommerce", "Headless CMS"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "Nativewind", "Kotlin"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Oracle", "Redis"],
  },
  {
    title: "Languages & Tools",
    items: ["Java", "Python", "Kotlin", "C / C++", "PHP", "Git / GitHub", "Postman", "Figma"],
  },
];

export const experience = [
  {
    period: "Nov 2025 — Present",
    length: `${monthsSince(roleStart)} mos`,
    role: "Associate Software Engineer",
    company: "Irusri Group",
    type: "Full-time · Hybrid · Colombo, Sri Lanka",
    detail:
      "Shipping full-stack features across React / Next.js and Node / NestJS / Spring Boot. Setting up CI/CD pipelines and containerised deploys on AWS and Azure, and building AI features backed by RAG systems and n8n automation. Also running Microsoft 365 administration — Intune, Entra ID, email migrations and account management — and delivering client sites on WordPress and Shopify.",
    stack: [
      "React",
      "Next.js",
      "NestJS",
      "Spring Boot",
      "CI/CD",
      "Docker",
      "AWS",
      "Azure",
      "RAG Systems",
      "n8n",
      "Microsoft 365",
      "Intune",
      "WordPress",
      "Shopify",
    ],
  },
  {
    period: "Jan 2025 — Nov 2025",
    length: "11 mos",
    role: "Software Engineer Intern",
    company: "Irusri Group",
    type: "Internship · Hybrid · Colombo, Sri Lanka",
    detail:
      "First professional role — built web application features with the MERN stack, and learned production workflows, Git-based collaboration, code review and agile delivery.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Git", "REST APIs"],
  },
];

export const education = [
  {
    title: "BSc (Hons) in Information Technology",
    meta: "Specialising in Software Engineering · Graduate",
    place: "Sri Lanka Institute of Information Technology (SLIIT), Malabe",
  },
  {
    title: "GCE Advanced Level — Physical Science",
    meta: "Physics · Chemistry · ICT",
    place: "Ananda College, Colombo (2011 — 2019)",
  },
];

export const projects = [
  {
    no: "01",
    kind: "Web App",
    title: "Book Factory Management System",
    description:
      "MERN application with inventory, material, order and transport management modules for a book factory.",
    tech: ["MongoDB", "Express", "React", "Node"],
    link: "https://github.com/lahiruAsiri/Book-Factory-Management-System",
  },
  {
    no: "02",
    kind: "AI · Web",
    title: "ProMentor Education",
    description:
      "Drag-and-drop coding mentor with automated code explanations and corrections, powered by the Gemini API.",
    tech: ["React", "Node", "Express", "Gemini API"],
    link: "https://github.com/lahiruAsiri/ProMentor-Education-Application",
  },
  {
    no: "03",
    kind: "Mobile",
    title: "MomCare App",
    description:
      "Mobile app for pregnant women and new mothers — baby growth tracking, health tips, doctor access and clinic reminders.",
    tech: ["React Native", "Node", "Express", "MongoDB"],
    link: "https://github.com/lahiruAsiri/MomCare-App",
  },
  {
    no: "04",
    kind: "Web App",
    title: "Smart Waste Management",
    description:
      "Tracks bin levels, optimises collection routes and reports real-time updates to reduce operational cost.",
    tech: ["React", "Spring Boot"],
    link: "https://github.com/lahiruAsiri/Smart-Waste-Management-System",
  },
  {
    no: "05",
    kind: "Java · MVC",
    title: "Vehicle Service Station System",
    description:
      "Web app for a vehicle service station — account creation, vehicle management and transport service tracking.",
    tech: ["Java", "MVC", "Apache Tomcat", "JavaScript"],
    link: "https://github.com/lahiruAsiri/Vehicle-And-Fuel-Management-System",
  },
  {
    no: "06",
    kind: "Game",
    title: "ShadowStrike Mobile Game",
    description:
      "Mobile game with score persistence, intuitive gameplay mechanics and a user-friendly interface.",
    tech: ["Kotlin", "Android"],
    link: "https://github.com/lahiruAsiri/ShadowStrike-Mobile-Game",
  },
  {
    no: "07",
    kind: "Mobile",
    title: "Task Manager App",
    description:
      "CRUD-based task manager with a stress-relief companion — intuitive UI, robust backend services and smooth cross-device performance.",
    tech: ["Kotlin", "Android"],
    link: "https://github.com/lahiruAsiri/Task-Manager-App",
  },
];

export const certifications = [
  { title: "AI/ML Engineer — Stage 1", meta: "SLIIT · 2024" },
  { title: "Programming in Python", meta: "Univ. of Moratuwa · 2024" },
  { title: "Web Development", meta: "Univ. of Moratuwa · 2024" },
  { title: "JS Algorithms & Data Structures", meta: "freeCodeCamp · 2024" },
  { title: "Responsive Web Design", meta: "freeCodeCamp · 2024" },
  { title: "Problem Solving", meta: "HackerRank · 2024" },
  { title: "Java (Basic)", meta: "HackerRank · 2024" },
  { title: "JavaScript (Basic)", meta: "HackerRank · 2024" },
  { title: "Python (Basic)", meta: "HackerRank · 2024" },
  { title: "CSS (Basic)", meta: "HackerRank · 2024" },
  { title: "SQL Intermediate", meta: "Sololearn · 2024" },
  { title: "JavaScript Intermediate", meta: "Sololearn · 2024" },
  { title: "Java Intermediate", meta: "Sololearn · 2024" },
  { title: "Angular", meta: "Sololearn · 2024" },
  { title: "Front-end for Beginners", meta: "Sololearn · 2024" },
];

export const designSkills = [
  "Figma",
  "Adobe Illustrator",
  "Photoshop",
  "After Effects",
  "Canva",
  "UI / UX Design",
  "Prototyping",
  "Creative Ideation",
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
