# Naema Mohmed — Portfolio

Personal site of Naema Mohmed, full stack engineer and sole engineer behind [Wrenta](https://wrenta.co).

- Live: <https://naemamohmed.com>
- GitHub: <https://github.com/ranmori>

## Stack

React 19 · TypeScript · Vite 6 · Tailwind CSS 4 + DaisyUI 5 · Framer Motion · Gemini (`@google/genai`) for the on-page assistant. Deployed on Vercel.

## Run locally

```bash
npm install
echo "GEMINI_API_KEY=your-key" > .env.local   # only needed for the chat assistant
npm run dev                                   # http://localhost:3000
npm run build                                 # type-check + production build
```

## Editing content

All copy lives in [`constants.ts`](constants.ts): hero text, skills, experience, projects, the Wrenta case study (`CASE_STUDY`) and hobbies. The chat assistant's system prompt is built from the same data, so it stays in sync.

Wrenta screenshots: drop `wrenta-<n>-<name>.webp` (or `.png` / `.jpg`) into `assets/images/` and they appear in the case study automatically, in file-name order.
