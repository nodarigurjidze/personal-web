// Frontend/src/components/BottomNavbar.jsx
import { useState, useEffect, useRef } from "react";

export default function BottomNavbar({ onBottomActive }) {
  const [isStickyBottom, setIsStickyBottom] = useState(false);
  const [activeSection, setActiveSection] = useState("contact"); // ბოლოში ძირითადად კონტაქტია
  const navbarRef = useRef(null);

  useEffect(() => {
    // 1. ლოგიკა გაშეშებისთვის
    const handleScroll = () => {
      if (!navbarRef.current) return;
      const rect = navbarRef.current.getBoundingClientRect();
      
      if (rect.top <= 0) {
        setIsStickyBottom(true);
        onBottomActive(true);
      } else {
        setIsStickyBottom(false);
        onBottomActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // 2. Scrollspy ლოგიკა ქვედა ნავბარის ლინკებისთვის
    const sections = ["about", "about-me", "experience", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [onBottomActive]);

  return (
    <div ref={navbarRef} className="w-full h-[70px] bg-white relative z-40 flex justify-center items-center">
      <div
        className={`w-full max-w-5xl mx-auto px-6 py-3 transition-all duration-300 flex justify-center ${
          isStickyBottom
            ? "fixed top-0 left-0 right-0 z-50 animate-slideDown"
            : "relative"
        }`}
      >
        {/* Softswiss-ის სტილის მომრგვალებული, დახვეწილი თეთრი ბლოკი (image_43461a.jpg) */}
        <div className="bg-white border border-gray-100 shadow-xl rounded-full px-6 py-2 flex justify-center items-center">

          {/* მენიუს "Pill" სტილის ტაბები ზუსტად სურათის მიხედვით */}
          <div className="flex gap-1 bg-white p-1 rounded-full  mx-auto sm:mx-0">
            <a 
              href="#main" 
              className={`px-4 py-1.5 text-3xs font-bold tracking-wide rounded-full transition-all duration-300 uppercase ${
                activeSection === "about" 
                  ? "bg-white text-white shadow-sm" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Main
            </a>
            <a 
              href="#about-me" 
              className={`px-4 py-1.5 text-3xs font-bold tracking-wide rounded-full transition-all duration-300 uppercase ${
                activeSection === "about-me" 
                  ? "bg-blue-600 text-white shadow-sm" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              About Me
            </a>
            <a 
              href="#experience" 
              className={`px-4 py-1.5 text-3xs font-bold tracking-wide rounded-full transition-all duration-300 uppercase ${
                activeSection === "experience" 
                  ? "bg-blue-600 text-white shadow-sm" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className={`px-4 py-1.5 text-3xs font-bold tracking-wide rounded-full transition-all duration-300 uppercase ${
                activeSection === "contact" 
                  ? "bg-blue-600 text-white shadow-sm" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}