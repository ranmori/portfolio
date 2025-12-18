
import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a href="#about" className="link link-hover">About</a>
        <a href="#projects" className="link link-hover">Projects</a>
        <a href="#contact" className="link link-hover">Contact</a>
      </nav> 
      <aside>
        <p>Copyright © {year} - All right reserved by Naema Mohmed</p>
      </aside>
    </footer>
  );
};

export default Footer;