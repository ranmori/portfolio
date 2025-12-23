
import React, { useState, useEffect } from 'react';
import { Menu, Battery, Wifi, User, Sun, Moon, FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const [time, setTime] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Workaround for framer-motion type inference issues
  const MotionDiv = motion.div as any;
  const MotionA = motion.a as any;

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-2 pt-2 flex justify-center">
      <MotionDiv 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { y: -50, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
              duration: 0.6,
              ease: "circOut",
              staggerChildren: 0.15 
            }
          }
        }}
        className="navbar w-full max-w-6xl min-h-12 bg-base-100/80 backdrop-blur-md rounded-t-xl sm:rounded-xl border border-white/20 shadow-sm px-4"
      >
        {/* Left: User Profile */}
        <MotionDiv 
          variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          className="navbar-start w-auto mr-auto"
        >
          <div className="avatar placeholder online cursor-pointer hover:scale-105 transition-transform">
            <div className="bg-neutral-content text-neutral rounded-full w-8 h-8 border border-white/30 flex items-center justify-center">
              <User size={16} />
            </div>
          </div>
          <span className="ml-3 font-bold text-sm hidden sm:inline-block opacity-70">NaemaOS</span>
        </MotionDiv>
        
        {/* Center: Hidden on mobile, System Title */}
        <MotionDiv 
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          className="navbar-center hidden lg:flex"
        >
          <div className="text-xs font-mono opacity-50 tracking-widest uppercase">
            {time.toLocaleDateString(undefined, { weekday: 'short', month: 'long', day: 'numeric' })}
          </div>
        </MotionDiv>
        
        {/* Right: Status Icons & Menu */}
        <MotionDiv 
          variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
          className="navbar-end w-auto ml-auto flex items-center gap-3"
        >
           {/* RESUME BUTTON */}
           <MotionA 
             href="https://drive.google.com/file/d/1BCktlXoPY-qdERhJW3nyL-aT5G9efxBH/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
             className="btn btn-xs sm:btn-sm btn-ghost border border-white/10 hover:bg-primary hover:text-white mr-2 flex items-center gap-2 group"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
              <FileText size={14} className="group-hover:hidden" />
              <Download size={14} className="hidden group-hover:block" />
              <span className="hidden sm:inline text-xs font-bold">Resume</span>
           </MotionA>

           {/* Theme Toggle */}
          <button onClick={toggleTheme} className="btn btn-ghost btn-xs btn-circle">
  {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
</button>

          {/* System Icons */}
          <div className="hidden sm:flex items-center gap-2 px-2 border-l border-white/10 opacity-70">
            <Wifi size={16} />
            <Battery size={16} className="text-green-500" />
            <span className="text-xs font-mono font-bold">100%</span>
          </div>

          {/* Mobile Menu (Hamburger) */}
          <div className="dropdown dropdown-end">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost btn-sm btn-circle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={20} />
            </div>
            {isMobileMenuOpen && (
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100/95 backdrop-blur-xl rounded-2xl w-52 border border-white/10 origin-top-right">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="py-3 font-medium hover:bg-white/10">
                        {link.name}
                    </a>
                  </li>
                ))}
                <li className="mt-2 border-t border-white/10 pt-2">
                    <div className="text-xs opacity-50 px-4">System v2.0</div>
                </li>
              </ul>
            )}
          </div>
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};

export default Navbar;