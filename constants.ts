
import { Project, Skill, Experience, Painting, Book, CaseStudy, Contribution, Certificate } from './types';

export const HERO_DATA = {
  name: "Naema Mohmed",
  title: "Full Stack Engineer",
  tagline: "Sole engineer behind Wrenta — a workforce management and payroll platform live on web, iOS and Android.",
  description: "I'm the sole engineer on Wrenta, a multi-tenant workforce management platform that runs the day-to-day operations of a German security services company: 40 staff across 15 sites and 3,458 rostered hours in its first ~13 weeks live, load-tested to 500 users before launch. I own it end to end: a TypeScript/Express API on PostgreSQL and Prisma, a React dashboard, and a Flutter app on the App Store and Google Play. That means tenant isolation, DST-safe rosters, race-free shift claiming, server-verified GPS clock-ins and German payroll law — not just screens. Alongside it I contribute to open source (merged fixes in Sentry, PRs in asynq) and I'm growing into AI engineering — building models from first principles, an autograd engine and a GPT from scratch, and shipping LLM tools like Echo."};

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
      "Flutter",
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
      "Socket.io",
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
      "PostgreSQL",
      "SQL",
      "Prisma",
    ],
  },
  {
    category: "AI / ML",
    items: [
      "PyTorch",
      "Transformers & self-attention",
      "Backpropagation / autograd",
      "scikit-learn",
      "LLM function calling",
      "Gemma & Gemini APIs",
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
    company: "Wrenta (wrenta.co) — built for a German security services company",
    role: "Sole Engineer (Full Stack)",
    period: "2025 - Present",
    description: "Sole engineer on a multi-tenant workforce management and payroll platform in daily production use: 40 staff, 15 sites, 361 shifts and 3,458 rostered hours in ~13 weeks. Own the whole stack — 379 endpoints over 70 Postgres tables on Node.js/TypeScript/Express and Prisma, a React dashboard and a Flutter app on the App Store and Google Play, backed by ~926 automated tests. Load-tested to 500 users / 3,500 shifts before launch and fixed what it exposed: a double-reply crash, event-loop-blocking password hashing and a 2.1 MB roster payload. Built tenant isolation, compare-and-swap open-shift claiming, a DST-safe roster model, server-side GPS geofencing, refresh-token rotation with reuse detection, real-time chat over Socket.io, GDPR/DSGVO compliance, and the arithmetic German law requires: §3b EStG night premiums, ArbZG §4 breaks and gapless §14 UStG / GoBD invoice numbering.",
   },
  {
    company: "Tech4Dev — Women Techsters Fellowship",
    role: "Developer, AquaSense (Capstone Team)",
    period: "2025",
    description: "Ran alongside Wrenta. Developer on a 6-person cross-functional team of data scientists, product managers, and designers building AquaSense, an IoT water quality monitoring app. Placed Top 15 of 70 teams and presented to investors at the final showcase.",
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

export const CASE_STUDY: CaseStudy = {
  name: "Wrenta",
  pitch: "Workforce management & payroll for shift-based teams — web, iOS and Android.",
  summary:
    "Rosters, GPS-verified clock-ins, chat, payroll and invoicing for a German security services company, built and run by one engineer.",
  tags: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "React", "Flutter", "Socket.io", "Neon", "Render"],
  links: {
    siteUrl: "https://wrenta.co",
    appStoreUrl: "https://apps.apple.com/at/app/wrenta/id6795443951",
    playStoreUrl: "https://play.google.com/store/apps/details?id=co.wrenta.app",
  },
  stats: [
    { value: "40", label: "Staff live" },
    { value: "15", label: "Sites" },
    { value: "3,458", label: "Hours rostered" },
    { value: "379", label: "API endpoints" },
    { value: "70", label: "Postgres tables" },
    { value: "~926", label: "Automated tests" },
  ],
  loadTest: {
    intro:
      "Load-tested at 500 users / 3,500 shifts before launch. The test mattered because of what it found:",
    findings: [
      {
        title: "A timeout handler that killed the process",
        body: "The request-timeout handler replied twice — 594 occurrences in one run and one outright Node process death.",
      },
      {
        title: "Logins stalling the event loop",
        body: "bcryptjs at cost 12 took 289 ms per compare in pure single-threaded JS, so every login blocked every other request.",
      },
      {
        title: "Shipping the whole roster to everyone",
        body: "The roster sent 2.10 MB / 3,000 shifts to every viewer — including employees entitled to see six.",
      },
    ],
    before: [
      { value: "~1.1/s", label: "Logins" },
      { value: "8.9 s", label: "Roster p50 @ 50 users" },
      { value: "3 / 1,000", label: "Requests OK @ 500 users" },
    ],
  },
  tradeoffs: [
    {
      title: "Shifts in local wall-clock time, clock-ins in UTC",
      body: "“Store everything in UTC” is wrong for a recurring roster: a 07:00 shift must stay 07:00 across the daylight-saving change, while a clock-in must keep the instant it happened. Two kinds of timestamp in one schema means mixing them is a silent two-hour error — so the conversion lives in one module and the DST boundary is tested in both directions.",
    },
    {
      title: "Double-booking prevented in code, not yet by the database",
      body: "The right backstop is a Postgres EXCLUDE constraint over (userId, time-range) with btree_gist; it isn't built, so two managers booking the same person at the same instant could both pass. The race that actually happens — everyone claiming one open shift — is closed with a compare-and-swap UPDATE that re-asserts isOpenShift AND userId IS NULL: one writer wins, the rest match zero rows and get a 409.",
    },
    {
      title: "The geofence refuses only what it can place elsewhere",
      body: "Refusing clock-ins with no usable position lost the shifts of anyone indoors or with location off; accepting them everywhere makes “turn location off” the easiest way to clock in from home. It's now a per-site switch, default off, and an accepted-but-unplaceable entry is marked, not hidden — the hours are kept and the gap is visible to a manager.",
    },
    {
      title: "Refresh-token reuse revokes everything — after a 60 s grace",
      body: "Textbook reuse detection logged real employees out of every device at shift change, because a rotation can succeed server-side while the reply never reaches the phone. Inside 60 seconds a replay is a retry; past it, it's theft and every session goes. The revocation time isn't refreshed, so the window can't be held open by replaying on a timer.",
    },
  ],
  constraints: [
    {
      title: "Legal",
      body: "German invoice numbering is gapless under §14 UStG / GoBD, so a number is assigned only at issue — a draft can't show one. Night premiums follow §3b EStG (25% 20:00–06:00, 40% 00:00–04:00) and break minimums follow ArbZG §4. These aren't configuration; they're arithmetic the product has to get right.",
    },
    {
      title: "Operational",
      body: "A single Render instance on Neon Postgres with a driver-adapter pool. Rate limiters are in-memory — correct for one instance, wrong the moment it scales. That's the first thing that breaks on a second instance, and it's a known, bounded piece of work.",
    },
    {
      title: "Product",
      body: "Tenants are isolated by an organizationId predicate in every query rather than separate schemas — cheaper to run, but a missing predicate is a cross-tenant leak, not an error. One such bug existed and was fixed; the lesson is that it's a class of defect you test for, not one you notice.",
    },
    {
      title: "Team",
      body: "Sole engineer. The DB-level constraint, a Redis-backed limiter and horizontal scaling are deferred on purpose: one person shipping a live payroll system fixes the failure that is happening before the one that would happen at ten times the size.",
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 4,
    title: "Echo",
    description:
      "A personal safety AI built for the Kaggle x Google Gemma 4 Good Hackathon (14,523 entrants). Detects distress directly from native audio using Gemma 4 E4B, then escalates agentically through tiered responses driven by Gemma 4 26B A4B function calling. Multilingual by design, covering English, Yoruba, Igbo, and Nigerian Pidgin.",
    tags: ["Gemma 4", "Python", "Agentic AI", "Function Calling", "Audio AI", "Multilingual"],
    imageUrl: "https://picsum.photos/600/400?random=13",
    demoUrl: "https://www.kaggle.com/code/naemamohmed/echo-guardian-notebook",
    repoUrl: "https://github.com/ranmori/guardian/tree/main",
    category: "ai",
  },
  {
    id: 7,
    title: "Tiny AI Stack",
    description:
      "A 10.8M-parameter GPT and an autograd engine, built from scratch. The GPT trains on GPU over 1.1M characters of Shakespeare, grown from a bigram baseline to multi-head attention: validation loss 4.36 → 1.48, with best-checkpoint saving at the point it starts to overfit, and an ablation of six models showing what each piece adds.",
    tags: ["Python", "PyTorch", "Autograd", "Transformers", "Self-Attention"],
    imageUrl: "https://picsum.photos/600/400?random=16",
    repoUrl: "https://github.com/ranmori/Tiny_ai_stack",
    category: "ai",
  },
  {
    id: 8,
    title: "LLM Classification Baseline",
    description:
      "Log loss 1.025 (vs 1.099 for a blind three-way guess) on Kaggle's LLM Classification Finetuning competition: given a prompt and two chatbot responses, predict which one a human preferred, or a tie. The baseline any fine-tuned model has to beat.",
    tags: ["Kaggle", "LLM", "NLP", "Classification", "Python"],
    imageUrl: "https://picsum.photos/600/400?random=17",
    demoUrl: "https://www.kaggle.com/code/naemamohmed/llm-classfication-baseline",
    category: "ai",
  },
  {
    id: 1,
    title: "Mag Journal",
    description: "An AI-powered magazine-style web app with content suggestions and summaries, a clean reader interface, integrated background music, categorized article browsing, and instant client-side search. Built with Tailwind CSS for fully responsive and accessible UI, supporting rich user experiences.",
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "AI Integration", "Audio Features", "Responsive Design"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    demoUrl: "https://mag-journal.vercel.app",
    repoUrl: "https://github.com/ranmori/Mag_Journal",
    category: "web",
  },
  {
    id: 2,
    title: "Doc Meet - Appointment System",
    description: "MERN appointment platform connecting doctors and patients. Multi-role authentication (doctor, patient, admin), real-time availability and booking, an admin dashboard, JWT-secured APIs. Built for seamless user experience and maintainable, scalable code.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "REST API", "Authentication"],
    imageUrl: "https://picsum.photos/600/400?random=11",
    demoUrl: "https://appointment-system-onk5.vercel.app/",
    repoUrl: "https://github.com/ranmori/appointmentSystem",
    category: "web",
  },
  {
    id: 5,
    title: "AquaSense",
    description:
      "Cross-platform IoT water quality monitoring app built with a 6-person cross-functional team during the Women Techsters Fellowship. Placed Top 15 of 70 teams and was presented to investors at the final showcase.",
    tags: ["Flutter", "Dart", "Firebase", "Gemini API", "IoT"],
    imageUrl: "https://picsum.photos/600/400?random=14",
    category: "web",
  },
  {
    id: 6,
    title: "GoQueue",
    description:
      "A production-grade background job processor written in Go, covering queueing, worker concurrency, and retry semantics. Currently in progress.",
    tags: ["Go", "Concurrency", "Background Jobs", "In Progress"],
    imageUrl: "https://picsum.photos/600/400?random=15",
    category: "web",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "This site. A single-page 'OS window' layout with lazy-loaded sections, scroll-spy navigation, a live GitHub contribution heatmap, and a Gemini-powered assistant that answers questions about my work from the same data the page renders.",
    tags: ["TypeScript", "Vite", "React", "DaisyUI"],
    imageUrl: "https://picsum.photos/600/400?random=12",
    demoUrl: "https://naemamohmed.com",
    repoUrl: "https://github.com/ranmori/portfolio",
    category: "web",
  },
];

// verified against the GitHub API on 2026-10-18
export const CONTRIBUTIONS: Contribution[] = [
  { repo: "getsentry/sentry", title: "fix(java): Stop deobfuscating quoted values that are not classes", prUrl: "https://github.com/getsentry/sentry/pull/127244", status: "merged", lang: "Python" },
  { repo: "morluto/rea", title: "fix(javascript): bound value evaluation through nested closure aliases", prUrl: "https://github.com/morluto/rea/pull/1941", status: "merged", lang: "TypeScript" },
  { repo: "hibiken/asynq", title: "fix(rdb): set TTL on scheduler history key", prUrl: "https://github.com/hibiken/asynq/pull/1184", status: "open", lang: "Go" },
  { repo: "hibiken/asynq", title: "fix: parse username from Redis URIs in ParseRedisURI", prUrl: "https://github.com/hibiken/asynq/pull/1183", status: "open", lang: "Go" },
  { repo: "hibiken/asynq", title: "fix(inspector): return ErrQueueNotFound from queue-level methods", prUrl: "https://github.com/hibiken/asynq/pull/1180", status: "open", lang: "Go" },
  { repo: "hibiken/asynq", title: "fix(rdb): preserve underlying Redis errors instead of stringifying them", prUrl: "https://github.com/hibiken/asynq/pull/1179", status: "open", lang: "Go" },
  { repo: "morluto/rea", title: "fix(setup): report an uninspectable MSIX private copy at the write recheck", prUrl: "https://github.com/morluto/rea/pull/4525", status: "open", lang: "TypeScript" },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford Online · Coursera",
    date: "Sep 2026",
    url: "https://coursera.org/share/51b2316f56e9611bb47cf16aae1e045a",
  },
  {
    title: "Intermediate Machine Learning",
    issuer: "Kaggle Learn",
    url: "https://www.kaggle.com/learn/certification/naemamohmed/intermediate-machine-learning",
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

Open-source contributions:
${JSON.stringify(CONTRIBUTIONS, null, 2)}

Certificates:
${JSON.stringify(CERTIFICATES, null, 2)}

Featured case study (Wrenta):
${JSON.stringify(CASE_STUDY, null, 2)}

Projects:
${JSON.stringify(PROJECTS, null, 2)}

Hobbies & Interests:
${JSON.stringify(HOBBIES, null, 2)}

Be professional, concise, and helpful. If asked about contact info, suggest looking at the Contact section of the page.
If asked about something not in the data, politely say you don't have that information but can answer questions about Naema's engineering background.
`;