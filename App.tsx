import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  // Theme state: defaults to 'winter' (Light/Blue) or 'black' (Dark/Black)
  const [theme, setTheme] = useState<string>('winter');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'winter';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'winter' ? 'black' : 'winter';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const codeSnippet = `
// Initialize Digital Existence
import { Life, Universe } from 'reality';

function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const compileSkills = async () => {
       await loadModule('React');
       await loadModule('Next.js');
       await loadModule('AI_Integration');
       return "Ready";
    };
    
    compileSkills().then(() => setLoaded(true));
  }, []);

  return (
    <div className="experience">
       {loaded ? <Masterpiece /> : <Loading />}
    </div>
  );
}
  `.repeat(3);

  return (
    <div className="min-h-screen font-sans text-base-content bg-base-100 relative selection:bg-primary selection:text-primary-content overflow-hidden flex flex-col">
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Gradient Base */}
      <div className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-700 ${
        theme === 'winter' 
          ? 'bg-gradient-to-br from-[#f8f6f4] via-[#e8e3dd] to-[#f0ebe5]' 
          : 'bg-gradient-to-br from-black via-[#050505] to-[#0a0a0a]'
      }`}></div>
      
      {/* 2. Polka Dot Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4]" style={{
        backgroundImage: `radial-gradient(circle, ${theme === 'winter' ? 'rgba(100, 100, 100, 0.2)' : 'rgba(255, 255, 255, 0.05)'} 2px, transparent 2px)`,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0'
      }}></div>

      {/* 3. Blended Code Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.03] dark:opacity-[0.05]">
        <pre className="font-mono text-sm md:text-lg leading-loose text-current transform -rotate-12 scale-150 whitespace-pre-wrap max-w-[150%] select-none blur-[1px]">
           {codeSnippet}
        </pre>
      </div>

      {/* 4. Decorative Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[100px] animate-float"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[100px] animate-float-delayed"></div>
      </div>
      
      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col h-full min-h-screen">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        
        {/* Main Application Container */}
        <main className="flex-grow flex flex-col items-center justify-center p-4 pt-20 pb-10">
          <Hero />
        </main>
        
        <Footer />
        <GeminiChat />
      </div>
    </div>
  );
};

export default App;