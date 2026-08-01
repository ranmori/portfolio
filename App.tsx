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

  return (
    <div className="min-h-screen font-sans text-base-content bg-black relative selection:bg-primary selection:text-primary-content flex flex-col">
      {/* ---- BACKGROUND: flat black, no gradients or texture ---- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black" />

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