
import { Project, Skill, Experience, Painting, Book } from './types';

export const HERO_DATA = {
  name: "Alex Dev",
  title: "Senior Frontend Engineer",
  tagline: "Building scalable, accessible, and pixel-perfect web experiences.",
  description: "I specialize in the React ecosystem, modern UI/UX with Tailwind CSS, and integrating AI-driven features using the Gemini API. With over 8 years of experience, I transform complex requirements into seamless user interfaces.",
};

export const SKILLS: Skill[] = [
  {
    category: "Frontend Core",
    items: ["React 18+", "TypeScript", "HTML5/CSS3", "Next.js", "Vite"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "DaisyUI", "Framer Motion", "Styled Components", "Sass"],
  },
  {
    category: "State & Data",
    items: ["Redux Toolkit", "React Query", "Zustand", "Context API", "GraphQL"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Jest/RTL", "CI/CD Actions", "Webpack"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "TechNova Solutions",
    role: "Senior Frontend Engineer",
    period: "2021 - Present",
    description: "Leading the frontend team in migrating a legacy monolith to a micro-frontend architecture using React and Module Federation. Improved site performance by 40%.",
  },
  {
    company: "Creative Pulse",
    role: "Frontend Developer",
    period: "2018 - 2021",
    description: "Developed interactive marketing campaigns and e-commerce platforms for high-profile clients. Implemented a custom design system using Tailwind CSS.",
  },
  {
    company: "StartUp Inc",
    role: "Junior Web Developer",
    period: "2016 - 2018",
    description: "Collaborated with designers to implement responsive landing pages. Maintained and updated the company's main React application.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Analytics Dashboard",
    description: "A comprehensive dashboard for visualizing AI model performance metrics. Features real-time data updates via WebSockets and interactive D3.js charts.",
    tags: ["React", "TypeScript", "D3.js", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce PWA",
    description: "A high-performance Progressive Web App for an online fashion retailer. Implemented offline capabilities and push notifications.",
    tags: ["Next.js", "PWA", "Stripe", "Zustand"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "TaskMaster Pro",
    description: "A collaborative project management tool inspired by Trello. Features drag-and-drop interfaces and real-time collaboration.",
    tags: ["React", "Firebase", "Beautiful DnD", "DaisyUI"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    demoUrl: "#",
    repoUrl: "#",
  },
];

export const HOBBIES: { paintings: Painting[]; books: Book[] } = {
  paintings: [
    { id: 1, title: "Neon Cityscape", style: "Digital / Cyberpunk", image: "https://picsum.photos/600/400?random=100" },
    { id: 2, title: "Abstract Thoughts", style: "Oil on Canvas", image: "https://picsum.photos/600/400?random=101" },
    { id: 3, title: "Mountain Solitude", style: "Watercolor", image: "https://picsum.photos/600/400?random=102" },
    { id: 4, title: "Code Structures", style: "Generative Art", image: "https://picsum.photos/600/400?random=103" },
  ],
  books: [
    { id: 1, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Tech" },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", category: "Tech" },
    { id: 3, title: "Dune", author: "Frank Herbert", category: "Sci-Fi" },
    { id: 4, title: "Atomic Habits", author: "James Clear", category: "Self Improvement" },
    { id: 5, title: "Snow Crash", author: "Neal Stephenson", category: "Cyberpunk" },
    { id: 6, title: "Refactoring", author: "Martin Fowler", category: "Tech" },
  ]
};

export const SYSTEM_PROMPT = `
You are the AI assistant for Alex Dev's portfolio website.
Your role is to answer questions about Alex's professional background, skills, and projects based on the following data:

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
If asked about something not in the data, politely say you don't have that information but can answer questions about Alex's engineering background.
`;
