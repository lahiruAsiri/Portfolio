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
  website: "https://www.lahiruasiri.me",
  websiteLabel: "lahiruasiri.me",
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
  )} into an associate role at Irusri Group, working across DevOps and CI/CD on AWS, Azure, GCP and VPS, RAG systems, n8n automation and Microsoft 365 administration. BSc (Hons) in Software Engineering, SLIIT.`;
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
  "GCP",
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
    "Beyond product work I set up DevOps and CI/CD automation across AWS, Azure, GCP and self-managed VPS servers, build AI-powered features with RAG systems and LLM APIs, automate workflows with n8n, deliver client sites on WordPress and Shopify, and handle Microsoft 365 administration — Intune device management, Entra ID, email migrations and account management.",
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
    items: ["Docker", "Kubernetes", "Linux", "CI/CD Pipelines", "GitHub Actions", "AWS", "Azure", "GCP", "VPS"],
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
    items: ["React Native", "Expo", "Nativewind"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Oracle", "Redis"],
  },
  {
    title: "Languages & Tools",
    items: ["Java", "Python", "C / C++", "PHP", "Git / GitHub", "Postman", "Figma"],
  },
];

export const experience = [
  {
    period: "Nov 2025 - Present",
    length: `${monthsSince(roleStart)} mos`,
    role: "Associate Software Engineer",
    company: "Irusri Group",
    type: "Full-time, Colombo, Sri Lanka",
    detail:
      "Shipping full-stack features across React / Next.js and Node / NestJS / Spring Boot. Setting up CI/CD pipelines and containerised deploys on AWS, Azure, GCP and VPS servers, and building AI features backed by RAG systems and n8n automation. Also running Microsoft 365 administration — Intune, Entra ID, email migrations and account management — and delivering client sites on WordPress and Shopify.",
    bullets: [
      "Build and ship full-stack features across React, Next.js and Vue front-ends and Node, NestJS and Spring Boot services.",
      "Containerise applications with Docker and deploy to AWS, Azure and GCP, and run Kubernetes on self-managed VPS servers, with GitHub Actions CI/CD on Linux.",
      "Develop AI-powered features using RAG systems and LLM APIs (OpenAI, Gemini), and automate internal workflows with n8n.",
      "Administer Microsoft 365, including Intune device management, Entra ID, email migrations and account provisioning.",
      "Deliver and maintain client websites on WordPress and Shopify.",
    ],
    stack: [
      "React",
      "Next.js",
      "NestJS",
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "Linux",
      "CI/CD",
      "AWS",
      "Azure",
      "GCP",
      "VPS",
      "RAG Systems",
      "n8n",
      "Microsoft 365",
      "Intune",
      "WordPress",
      "Shopify",
    ],
  },
  {
    period: "Jan 2025 - Nov 2025",
    length: "11 mos",
    role: "Software Engineer Intern",
    company: "Irusri Group",
    type: "Internship, Colombo, Sri Lanka",
    detail:
      "First professional role, building web application features with the MERN stack and learning production workflows, Git-based collaboration, code review and agile delivery.",
    bullets: [
      "Built web application features end to end with the MERN stack (MongoDB, Express, React, Node).",
      "Followed production workflows: Git-based collaboration, pull-request code review and agile delivery.",
      "Contributed to REST API design and front-end integration.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Git", "REST APIs"],
  },
];

/** Concise professional summary for the CV — experience length is derived. */
export function cvSummary(): string {
  return `Full-stack software engineer with ${yearsSince()}+ years of experience at Irusri Group, building web, mobile and AI-powered products. Works across React, Next.js, Vue, Node, NestJS and Spring Boot, with hands-on experience in Docker, Linux and CI/CD across AWS, Azure and GCP, plus Kubernetes on self-managed VPS servers. Also builds RAG-based AI features, automates workflows with n8n, delivers WordPress and Shopify sites, and administers Microsoft 365 (Intune, Entra ID, email migrations). BSc (Hons) in Software Engineering, SLIIT. Solid grounding in OOP, data structures, REST API design and agile delivery.`;
}

export const education = [
  {
    title:
      "Bachelor of Science (Honours) in Information Technology, Specializing in Software Engineering",
    meta: "Graduate",
    place: "Sri Lanka Institute of Information Technology (SLIIT), Malabe, Sri Lanka",
    period: "2022 - 2026",
  },
  {
    title: "GCE Advanced Level & GCE Ordinary Level",
    meta: "Advanced Level: Physical Science Stream with ICT",
    place: "Ananda College, Colombo, Sri Lanka",
    period: "",
  },
];

type Project = {
  no: string;
  kind: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  repos?: { label: string; url: string }[];
  /** set false to keep on the site but leave out of the CV */
  cv?: boolean;
};

export const projects: Project[] = [
  {
    no: "01",
    kind: "Research · AI",
    title: "SmartBus Transit App",
    description:
      "Research project: a real-time public-transport app with live bus tracking, crowd forecasting for future time slots, and ETA prediction. Predictions come from a Bus ETA Engine (XGBoost Regressor) and a Hybrid Crowd Forecasting Engine (Random Forest Regressor); an edge-optimised NLP Intent Engine (TF-IDF with balanced Logistic Regression) answers transit queries offline at millisecond latency.",
    tech: ["React Native", "Expo", "TypeScript", "Firebase", "Python", "Flask", "scikit-learn", "XGBoost"],
    link: "https://github.com/lahiruAsiri/SmartBusApp",
  },
  {
    no: "02",
    kind: "Microservices · DevSecOps",
    title: "NovaTech E-Commerce Platform",
    description:
      "Full-stack e-commerce platform. The backend is split into NestJS microservices (an API gateway plus admin, product, order and notification services) with JWT auth, Swagger docs and Prisma on Azure SQL; a Next.js frontend consumes them through the gateway. Each service has a GitHub Actions pipeline that builds a Docker image, runs a Snyk vulnerability scan and a SonarCloud quality gate, and deploys to Azure Web Apps.",
    tech: ["NestJS", "Next.js", "TypeScript", "Microservices", "API Gateway", "Prisma", "Docker", "GitHub Actions", "Snyk", "SonarCloud", "Azure"],
    link: "https://github.com/lahiruAsiri/NovaTech-Backend",
    repos: [
      { label: "Backend", url: "https://github.com/lahiruAsiri/NovaTech-Backend" },
      { label: "Frontend", url: "https://github.com/lahiruAsiri/NovaTech-Frontend" },
    ],
  },
  {
    no: "03",
    kind: "Web App",
    title: "Book Factory Management System",
    description:
      "MERN-stack web application for a book factory, covering inventory, raw-material, order and transport management. Includes role-based access, low-stock alerts and reporting dashboards.",
    tech: ["MongoDB", "Express", "React", "Node"],
    link: "https://github.com/lahiruAsiri/Book-Factory-Management-System",
  },
  {
    no: "04",
    kind: "AI · Web",
    title: "ProMentor Education",
    description:
      "Interactive coding-mentor platform with a drag-and-drop block editor. Uses the Gemini API to generate step-by-step explanations, detect mistakes and suggest corrections in real time for beginner programmers.",
    tech: ["React", "Node", "Express", "Gemini API"],
    link: "https://github.com/lahiruAsiri/ProMentor-Education-Application",
  },
  {
    no: "05",
    kind: "Mobile",
    title: "MomCare App",
    description:
      "Cross-platform mobile app for expectant and new mothers. Tracks baby growth, delivers personalised health tips and reminders, and helps users find doctors and manage clinic visits from a single place.",
    tech: ["React Native", "Node", "Express", "MongoDB"],
    link: "https://github.com/lahiruAsiri/MomCare-App",
  },
  {
    no: "06",
    kind: "Web App",
    title: "Smart Waste Management",
    description:
      "Web platform that monitors bin fill-levels, optimises collection routes and pushes real-time status updates, cutting fuel use and operational cost for waste-collection operators.",
    tech: ["React", "Spring Boot"],
    link: "https://github.com/lahiruAsiri/Smart-Waste-Management-System",
  },
  {
    no: "07",
    kind: "Java · MVC",
    title: "Vehicle Service Station System",
    description:
      "Java MVC web application for a vehicle service station, handling customer accounts, vehicle records, service scheduling and transport-service tracking through an intuitive interface.",
    tech: ["Java", "MVC", "Apache Tomcat", "JavaScript"],
    link: "https://github.com/lahiruAsiri/Vehicle-And-Fuel-Management-System",
  },
  {
    no: "08",
    kind: "Game",
    title: "ShadowStrike Mobile Game",
    description:
      "Android game with responsive gameplay mechanics, persistent high-score storage and a clean, user-friendly interface.",
    tech: ["Android", "Java"],
    link: "https://github.com/lahiruAsiri/ShadowStrike-Mobile-Game",
    cv: false,
  },
  {
    no: "09",
    kind: "Mobile",
    title: "Task Manager App",
    description:
      "Android app pairing a CRUD task manager with a stress-relief companion. Focuses on an intuitive UI, reliable local persistence and smooth performance across devices.",
    tech: ["Android", "Java"],
    link: "https://github.com/lahiruAsiri/Task-Manager-App",
    cv: false,
  },
];

export const certifications = [
  { title: "AI/ML Engineer (Stage 1)", meta: "SLIIT · 2024", issuer: "SLIIT", year: "2024", id: "s66947u3d9", image: "/certificates/ai-ml-engineer-stage-1.jpg" },
  { title: "Programming in Python", meta: "Univ. of Moratuwa · 2024", issuer: "University of Moratuwa (CODL)", year: "2024", id: "f13BPvg81O", image: "/certificates/programming-in-python.jpg" },
  { title: "Web Development", meta: "Univ. of Moratuwa · 2024", issuer: "University of Moratuwa (CODL)", year: "2024", id: "uupgfDk114", image: "/certificates/web-development.jpg" },
  { title: "JS Algorithms & Data Structures", meta: "freeCodeCamp · 2024", issuer: "freeCodeCamp", year: "2024", id: "freecodecamp.org/certification/Lahiru_Asiri/javascript-algorithms-and-data-structures-v8", image: "/certificates/js-algorithms-data-structures.jpg" },
  { title: "Responsive Web Design", meta: "freeCodeCamp · 2024", issuer: "freeCodeCamp", year: "2024", id: "freecodecamp.org/certification/Lahiru_Asiri/responsive-web-design", image: "/certificates/responsive-web-design.jpg" },
  { title: "Problem Solving (Basic)", meta: "HackerRank · 2024", issuer: "HackerRank", year: "2024", id: "DB4F0B055A8A", image: "/certificates/problem-solving.jpg" },
  { title: "Java (Basic)", meta: "HackerRank · 2024", issuer: "HackerRank", year: "2024", id: "023277F62E09", image: "/certificates/java-basic.jpg" },
  { title: "JavaScript (Basic)", meta: "HackerRank · 2024", issuer: "HackerRank", year: "2024", id: "392DC6A2AF1B", image: "/certificates/javascript-basic.jpg" },
  { title: "Python (Basic)", meta: "HackerRank · 2024", issuer: "HackerRank", year: "2024", id: "EFE7659B2E12", image: "/certificates/python-basic.jpg" },
  { title: "CSS (Basic)", meta: "HackerRank · 2024", issuer: "HackerRank", year: "2024", id: "45BB4D7FFCD1", image: "/certificates/css-basic.jpg" },
  { title: "SQL (Intermediate)", meta: "Sololearn · 2024", issuer: "Sololearn", year: "2024", id: "CC-NVNMJESI", image: "/certificates/sql-intermediate.jpg" },
  { title: "JavaScript (Intermediate)", meta: "Sololearn · 2024", issuer: "Sololearn", year: "2024", id: "CC-D7MLH3MO", image: "/certificates/javascript-intermediate.jpg" },
  { title: "Java (Intermediate)", meta: "Sololearn · 2024", issuer: "Sololearn", year: "2024", id: "CC-NLH6S3TI", image: "/certificates/java-intermediate.jpg" },
  { title: "Angular", meta: "Sololearn · 2024", issuer: "Sololearn", year: "2024", id: "CC-4JBS5C5O", image: "/certificates/angular.jpg" },
  { title: "Front-end for Beginners", meta: "Sololearn · 2024", issuer: "Sololearn", year: "2024", id: "CC-ATRX0O34", image: "/certificates/front-end-for-beginners.jpg" },
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
