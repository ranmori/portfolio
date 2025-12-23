// src/components/Hero.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Code2,
  Folder,
  Mail,
  ArrowRight,
  Github,
  ExternalLink,
  Terminal,
  Sparkles,
  Palette,
} from "lucide-react";
import { HERO_DATA } from "../constants";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Hobbies from "./Hobbies";

/* -----------  import the three images  ----------- */
import img1 from "../assets/images/Profile3.webp";
import img2 from "../assets/images/profile.webp";
import img3 from "../assets/images/profile2.webp";
const profilePics = [img1, img2, img3];

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "profile" | "projects" | "skills" | "contact" | "hobbies"
  >("profile");

  /* -----------  automatic picture rotator  ----------- */
  const [picIndex, setPicIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setPicIndex((i) => (i + 1) % profilePics.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  // framer-motion helper
  const MotionDiv = motion.div as any;

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "hobbies", label: "Hobbies", icon: Palette },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-6xl flex flex-col h-full"
    >
      {/* Main OS Window */}
      <div className="bg-base-100/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 flex flex-col min-h-[70vh] md:min-h-[800px]">
        {/* Window Header / Tab Bar */}
        <div className="bg-base-200/50 border-b border-white/10 p-2 flex flex-col md:flex-row items-center gap-4 sticky top-0 z-20 backdrop-blur-md">
          {/* Window Controls (Mac Style) */}
          <div className="hidden md:flex gap-2 px-4">
            <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors shadow-sm"></div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex-1 flex justify-center md:justify-start overflow-x-auto w-full md:w-auto no-scrollbar gap-1 px-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-xl text-sm font-bold transition-all relative group whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                      : "hover:bg-base-content/5 text-base-content/70 hover:text-base-content"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                  {isActive && (
                    <MotionDiv
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-full mx-4 mb-1"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* User Status (Decoration) */}
          <div className="hidden md:flex items-center gap-3 px-4 opacity-60">
            <div className="text-xs font-mono">user@Naema-portfolio:~$</div>
            <div className="w-2 h-4 bg-primary animate-pulse"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto relative scrollbar-thin scrollbar-thumb-base-300 scrollbar-track-transparent">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {activeTab === "profile" && (
                <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
                  <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                    {/* Avatar Side */}
                    <div className="flex-shrink-0 relative group">
                      <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                      <MotionDiv
                        className="w-64 h-64 lg:w-80 lg:h-80 rounded-[2rem] overflow-hidden shadow-2xl relative border-4 border-base-100 z-10 bg-base-200"
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          src={profilePics[picIndex]}
                          alt="Profile"
                           width={600} height={400}
                           sizes="(max-width: 640px) 400px, 800px"
                           loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay Text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                          <div className="text-white">
                            <div className="font-bold text-xl">Naema Mohmed</div>
                            <div className="text-sm opacity-80">Open to relocation</div>
                          </div>
                        </div>
                      </MotionDiv>

                      {/* Floating Decor */}
                      <div className="absolute -top-6 -right-6 bg-base-100 p-4 rounded-2xl shadow-xl border border-white/10 z-20 animate-float-delayed">
                        <Sparkles className="text-yellow-400 w-8 h-8" />
                      </div>
                      <div className="absolute -bottom-6 -left-6 bg-base-100 p-4 rounded-2xl shadow-xl border border-white/10 z-20 animate-float">
                        <Terminal className="text-primary w-8 h-8" />
                      </div>
                    </div>

                    {/* Text Side */}
                    <div className="flex-1 text-center lg:text-left">
                      <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                          Open to Work
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                          Full Stack <br />
                          <span
                            className="text-5xl  lg:text-7xl font-extrabold text-transparent bg-clip-text
                                       bg-gradient-to-r from-base-content to-base-content/80
                                       dark:bg-gradient-to-r dark:from-base-100 dark:to-base-100/70
                                       [text-shadow:0_0_1px_rgba(255,255,255,0.8)]
                                       dark:[text-shadow:0_0_1px_rgba(0,0,0,0.6)]"
                          >
                            Engineer.
                          </span>
                        </h1>

                        <p className="text-lg opacity-70 mb-8 leading-relaxed max-w-2xl">
                          {HERO_DATA.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                          <button
                            onClick={() => setActiveTab("projects")}
                            className="btn btn-primary btn-lg rounded-2xl shadow-xl shadow-primary/20"
                          >
                            See Projects <ArrowRight size={18} />
                          </button>
                          <button
                            onClick={() => setActiveTab("contact")}
                            className="btn btn-ghost btn-lg rounded-2xl border border-base-content/10 bg-base-100/50 hover:bg-base-100"
                          >
                            Contact Me
                          </button>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50">
                          <div className="w-px h-10 bg-base-content/20"></div>
                          <div className="flex flex-col items-center lg:items-start">
                            <span className="text-3xl font-bold">10+</span>
                            <span className="text-xs uppercase tracking-wider">Prod Releases</span>
                          </div>
                          <div className="w-px h-10 bg-base-content/20"></div>
                          <div className="flex flex-col items-center lg:items-start">
                            <span className="text-3xl font-bold">0</span>
                            <span className="text-xs uppercase tracking-wider">Open Bugs (last 90d)</span>
                          </div>
                        </div>
                      </MotionDiv>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "projects" && <Projects />}
              {activeTab === "skills" && <Skills />}
              {activeTab === "hobbies" && <Hobbies />}
              {activeTab === "contact" && <Contact />}
            </MotionDiv>
          </AnimatePresence>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Hero;