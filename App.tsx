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
  /* single black-and-white theme */
  useEffect(() => {
    localStorage.removeItem('theme');
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const codeSnippet = `#!/bin/bash
# NaemaOS – developer-friendly runtime
echo "Booting portfolio environment…"
while true; do
  echo "Listening on port 443"
  sleep 2
done`.repeat(3);

  return (
    <div className="min-h-screen font-sans text-base-content bg-base-100 relative selection:bg-primary selection:text-primary-content flex flex-col">
      {/* ---- BACKGROUND LAYERS ---- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black" />
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.05) 2px, transparent 2px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.05]">
        <pre
          className="font-mono text-sm md:text-lg leading-loose text-white transform -rotate-12 scale-150 whitespace-pre-wrap max-w-[150%] select-none blur-[1px]"
        >
          {codeSnippet}
        </pre>
      </div>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[100px] animate-float-delayed" />
      </div>

      {/* ---- CONTENT ---- */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <Suspense fallback={<Loader />}>
          <main className="flex-grow flex flex-col items-center p-4 pt-24 pb-10">
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