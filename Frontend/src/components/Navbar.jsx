// Frontend/src/components/Navbar.jsx
import { useState, useEffect } from "react";

export default function Navbar({ hideDueToBottom }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // თუ hideDueToBottom არის true, მთლიანი ნავბარის კონტეინერი მიდის ზემოთ (-translate-y-full) და ქრება
    <div className={`w-full absolute top-0 left-0 z-50 transition-transform duration-500 ${
      hideDueToBottom ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
    }`}>
      
      {/* 1. ზედა პატარა ნავბარი */}
      <div 
        className={`bg-slate-900 text-gray-400 text-xs py-2 px-6 flex justify-between items-center border-b border-slate-800 transition-all duration-300 ${
          isSticky ? "opacity-0 -translate-y-full h-0 overflow-hidden py-0 border-none" : "opacity-100"
        }`}
      >
        <div className="flex gap-4">
          <span>📧 nodogurjidze12@gmail.com</span>
          <span className="hidden sm:inline">📱 +995 598 48 42 60</span>
        </div>
        <div>
          <span className="text-blue-400 font-medium">Available for Work</span>
        </div>
      </div>

      {/* 2. მთავარი ნავბარი */}
      <nav
        className={`w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 transition-all duration-300 ${
          isSticky 
            ? "fixed top-0 left-0 shadow-lg bg-slate-950/95 py-3 border-slate-800" 
            : "relative"
        }`}
      >
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="#about" className="text-xl font-black text-white tracking-wider">
            Nodari<span className="text-blue-500">.Dev</span>
          </a>
          <div className="flex gap-6 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-blue-500 transition-colors">Main</a>
            <a href="#about-me" className="hover:text-blue-500 transition-colors">About Me</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

    </div>
  );
}