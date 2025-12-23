
import { Project, Skill, Experience, Painting, Book } from './types';

export const HERO_DATA = {
  name: "Naema Mohmed",
  title: "Full Stack Developer",
  tagline: "Building scalable, accessible, and pixel-perfect web experiences.",
  description: "A MERN developer building end-to-end web applications with a strong focus on clean architecture, accessible UI, and real-world usability. I ship production-ready features, translate Figma designs into scalable code, and integrate AI-driven functionality where it adds real value."};

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3"],
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
    company: "Independent / Contract",
    role: "Freelance Frontend developer",
    period: "2023 - Present",
    description: "Built and shipped responsive, accessible web interfaces using React and modern frontend tooling. Focused on clean UI, performance optimization, and maintainable component architecture. Worked with REST APIs, Git/GitHub workflows, and AI-assisted tools (Copilot, Claude) to improve development speed and code quality.",
   },
  {
    company: "Upwork",
    role: "Freelance Designer (Remote)",
    period: "2018 - 2022",
    description: " Delivered branding, logo design, and digital assets for international clients.Applied UI/UX principles that now directly inform frontend development work.Collaborated remotely with clients, managing feedback, revisions, and deadlines."
  },
  
 
  {
    company: "Medina Dental Clinic / Sultan Dental Clinic",
    role: "General Dental Clinician",
    period: "2023 - 2024",
    description: "Worked in high-pressure clinical environments requiring precision, documentation, and ethical responsibility. Developed strong problem-solving, attention to detail, and communication skills transferable to software development and client-facing work.",
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
      "personal site, Features automated résumé parsing, instant colour-theme switching, lazy-loaded interactive sections, and SEO/OG meta tuned for recruiter tracking links and 100 Lighthouse performance",
    tags: ["typescript", "Vite", "React", "Daisyui", "JavaScript"],
    imageUrl: "https://picsum.photos/600/400?random=12",
    demoUrl: "#", // optional – deploy if you want
    repoUrl: "https://github.com/ranmori/portfolio",
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