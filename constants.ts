
import { Project, Skill, Experience, Painting, Book } from './types';

export const HERO_DATA = {
  name: "Naema Mohmed",
  title: "Full Stack Engineer",
  tagline: "Sole engineer behind Planno — a multi-tenant workforce management SaaS running in production.",
  description: "I'm the sole engineer on Planno, a multi-tenant workforce management platform built under contract for Square Security and serving 350+ live users. I own it end to end: a TypeScript/Express backend on PostgreSQL and Prisma, a React dashboard, and a Flutter mobile app. That means tenant isolation, scheduling logic that has to hold up against labor law, GPS-verified clock-ins, and GDPR compliance — not just screens. Alongside it I build across the stack, from frontend work in React and Flutter to backend services in Node and Go, and I reach for AI where it earns its place."};

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Go", "Dart", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: [
      "React 18+",
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
      "Sass",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication (JWT)",
    ],
  },
  {
    category: "State & Data",
    items: [
      "Redux Toolkit",
      "React Query",
      "Context API",
      "MongoDB",
      "SQL",
      "Prisma",
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      "Git & GitHub",
      "CI/CD (GitHub Actions)",
      "Postman",
      "VS Code",
      "AI-assisted coding (Copilot, Claude)",
    ],
  },
];


export const EXPERIENCE: Experience[] = [
   {
    company: "Planno — under contract for Square Security",
    role: "Sole Engineer (Full Stack)",
    period: "2025 - Present",
    description: "Sole engineer on a multi-tenant workforce management SaaS in production with 350+ live users, owning the entire stack: a Node.js/TypeScript/Express backend on PostgreSQL and Prisma, a React web dashboard, and a Flutter mobile app. Built tenant isolation middleware to keep every query scoped to its organization, a shift-collision engine that rejects overlapping assignments and enforces labor-law-compliant break periods, and server-side GPS geofencing using the Haversine formula so clock-ins are verified on the backend rather than trusted from the device. Added real-time chat and alerts over Socket.io, and carried out the GDPR/DSGVO compliance work the platform ships under.",
   },
  {
    company: "Tech4Dev — Women Techsters Fellowship",
    role: "Developer, AquaSense (Capstone Team)",
    period: "2025",
    description: "Ran alongside Planno. Developer on a 6-person cross-functional team of data scientists, product managers, and designers building AquaSense, an IoT water quality monitoring app. Placed Top 15 of 70 teams and presented to investors at the final showcase.",
  },
  {
    company: "Medina Dental Clinic / Sultan Dental Clinic",
    role: "General Dental Clinician",
    period: "2023 - 2024",
    description: "Worked in high-pressure clinical environments requiring precision, documentation, and ethical responsibility. Developed strong problem-solving, attention to detail, and communication skills transferable to software development and client-facing work.",
   },
  {
    company: "Upwork",
    role: "Freelance Designer (Remote)",
    period: "2020 - 2022",
    description: " Delivered branding, logo design, and digital assets for international clients.Applied UI/UX principles that now directly inform frontend development work.Collaborated remotely with clients, managing feedback, revisions, and deadlines."
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Mag Journal",
    description: "An AI-powered magazine-style web app with content suggestions and summaries, a clean reader interface, integrated background music, categorized article browsing, and instant client-side search. Built with Tailwind CSS for fully responsive and accessible UI, supporting rich user experiences.",
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "AI Integration", "Audio Features", "Responsive Design"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    demoUrl: "https://mag-journal.vercel.app",
    repoUrl: "https://github.com/ranmori/Mag_Journal",
  },
  {
  id: 2,
    title: "Doc Meet - Appointment System",
    description:"MERN appointment platform connecting doctors and patients.Multi-role authentication (doctor, patient, admin), real-time availability and booking, an admin dashboard, JWT-secured APIs. Built for seamless user experience and maintainable, scalable code.",
    tags: [ "React","Node.js","Express","MongoDB","JWT","Tailwind CSS","REST API", "Authentication"],
    imageUrl: "https://picsum.photos/600/400?random=11",
    demoUrl: "https://appointment-system-onk5.vercel.app/",
    repoUrl: "https://github.com/ranmori/appointmentSystem",
  },
  {
   id: 3,
    title: "Portfolio",
    description:
      "Personal site, Features automated résumé parsing, instant colour-theme switching, lazy-loaded interactive sections, and SEO/OG meta tuned for recruiter tracking links and 100 Lighthouse performance",
    tags: ["typescript", "Vite", "React", "Daisyui", "JavaScript"],
    imageUrl: "https://picsum.photos/600/400?random=12",
    demoUrl: "https://portfolio-seven-pi-11.vercel.app/",
    repoUrl: "https://github.com/ranmori/portfolio",
  },
  {
    id: 4,
    title: "Echo",
    description:
      "A personal safety AI built for the Kaggle x Google Gemma 4 Good Hackathon (14,523 entrants). Detects distress directly from native audio using Gemma 4 E4B, then escalates agentically through tiered responses driven by Gemma 4 26B A4B function calling. Multilingual by design, covering English, Yoruba, Igbo, and Nigerian Pidgin.",
    tags: ["Gemma 4", "Python", "Agentic AI", "Function Calling", "Audio AI", "Multilingual"],
    imageUrl: "https://picsum.photos/600/400?random=13",
    demoUrl: "https://www.kaggle.com/code/naemamohmed/echo-guardian-notebook",
    repoUrl: "https://github.com/ranmori/guardian/tree/main",
  },
  {
    id: 5,
    title: "AquaSense",
    description:
      "Cross-platform IoT water quality monitoring app built with a 6-person cross-functional team during the Women Techsters Fellowship. Placed Top 15 of 70 teams and was presented to investors at the final showcase.",
    tags: ["Flutter", "Dart", "Firebase", "Gemini API", "IoT"],
    imageUrl: "https://picsum.photos/600/400?random=14",
  },
  {
    id: 6,
    title: "GoQueue",
    description:
      "A production-grade background job processor written in Go, covering queueing, worker concurrency, and retry semantics. Currently in progress.",
    tags: ["Go", "Concurrency", "Background Jobs", "In Progress"],
    imageUrl: "https://picsum.photos/600/400?random=15",
  },
  {
    id: 7,
    title: "Autograd Engine & Digit Classifier",
    description:
      "A neural network autograd engine written from scratch, then extended into a working 10-class handwritten digit classifier with softmax and cross-entropy loss. Built to understand backpropagation at the implementation level rather than through a framework.",
    tags: ["Python", "Autograd", "Backpropagation", "Neural Networks"],
    imageUrl: "https://picsum.photos/600/400?random=16",
  },
];

export const HOBBIES: { paintings: Painting[]; books: Book[] } = {
  paintings: [
    { id: 1, title: "Whales", style: "Acrylic", image: "https://picsum.photos/600/400?random=100" },
    { id: 2, title: "Abstract Thoughts", style: "Oil on Canvas", image: "https://picsum.photos/600/400?random=101" },
    { id: 3, title: "Water Solitude", style: "Watercolor", image: "https://picsum.photos/600/400?random=102" },
    { id: 4, title: "Code Structures", style: "Digital", image: "https://picsum.photos/600/400?random=103" },
  ],
   books: [
    { id: 1, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', category: 'Tech', cover: 'https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg', coverFile: 'thepragmaticprogrammer.webp' },
    { id: 2, title: 'Clean Code', author: 'Robert C. Martin', category: 'Tech', cover: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg', coverFile: 'CLEANCODE.webp' },
    { id: 3, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', cover: 'https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg', coverFile: 'dUNE.webp' },
    { id: 4, title: 'Atomic Habits', author: 'James Clear', category: 'Self Improvement', cover: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg', coverFile: 'atomichabits.webp' },
    { id: 5, title: 'Snow Crash', author: 'Neal Stephenson', category: 'Cyberpunk', cover: 'https://covers.openlibrary.org/b/isbn/9780553380958-L.jpg', coverFile: 'snowcrash.webp' },
    { id: 6, title: 'Refactoring', author: 'Martin Fowler', category: 'Tech', cover: 'https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg', coverFile: 'Refractoring.webp' },
  ],
};

export const SYSTEM_PROMPT = `
You are the AI assistant for Naema Mohmed's portfolio website.
Your role is to answer questions about Naema's professional background, skills, and projects based on the following data:

Name: ${HERO_DATA.name}
Title: ${HERO_DATA.title}
Tagline: ${HERO_DATA.tagline}
Bio: ${HERO_DATA.description}

Skills:
${JSON.stringify(SKILLS, null, 2)}

Experience:
${JSON.stringify(EXPERIENCE, null, 2)}

Projects:
${JSON.stringify(PROJECTS, null, 2)}

Hobbies & Interests:
${JSON.stringify(HOBBIES, null, 2)}

Be professional, concise, and helpful. If asked about contact info, suggest looking at the Contact section of the page.
If asked about something not in the data, politely say you don't have that information but can answer questions about Naema's engineering background.
`;