// App.tsx
import "./App.css";
import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import { Mail, Linkedin, Github, Twitter, MapPin, Send, ArrowUpRight } from 'lucide-react'; // keep existing imports

const Hero      = React.lazy(() => import('./components/Hero'));
const Footer    = React.lazy(() => import('./components/Footer'));
const GeminiChat = React.lazy(() => import('./components/GeminiChat'));

/* ---------- skeleton while chunks load ---------- */
const Loader = () => (
  <div className="flex-grow grid place-content-center text-base-content/50">
    <span className="loading loading-spinner loading-md" />
  </div>
);

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  /* restore user (or OS) preference */
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initial =
      saved ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  const codeSnippet = `#!/bin/bash
# NaemaOS – developer-friendly runtime
echo "Booting portfolio environment…"
while true; do
  echo "Listening on port 443"
  sleep 2
done`.repeat(3);

  return (
    <div className="min-h-screen font-sans text-base-content bg-base-100 relative selection:bg-primary selection:text-primary-content overflow-hidden flex flex-col">
      {/* ---- BACKGROUND LAYERS (theme-aware) ---- */}
      <div
        className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-700 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-black via-[#050505] to-[#0a0a0a]'
            : 'bg-gradient-to-br from-[#f8f6f4] via-[#e8e3dd] to-[#f0ebe5]'
        }`}
      />
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle, ${
            theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(100,100,100,0.2)'
          } 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.03] dark:opacity-[0.05]">
        <pre
          className={`font-mono text-sm md:text-lg leading-loose text-current transform -rotate-12 scale-150 whitespace-pre-wrap max-w-[150%] select-none blur-[1px] ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          {codeSnippet}
        </pre>
      </div>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[100px] animate-float-delayed" />
      </div>

      {/* ---- CONTENT ---- */}
      <div className="relative z-10 flex flex-col h-full min-h-screen">
        <Navbar toggleTheme={toggleTheme} theme={theme} />

        <Suspense fallback={<Loader />}>
          <main className="flex-grow flex flex-col items-center justify-center p-4 pt-20 pb-10">
            <Hero />
          </main>
          <Footer />
          <GeminiChat />
        </Suspense>
      </div>
    </div>
  );
};

export default App;