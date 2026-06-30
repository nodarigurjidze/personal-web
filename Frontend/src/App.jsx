// Frontend/src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Aboutme from './components/Aboutme';
import BottomNavbar from './components/BottomNavbar';

export default function App() {
  return (
    <div className=" bg-slate-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <BottomNavbar/>
        <Aboutme />
        <Experience />
        <Contact />
      </main>
      <footer className="py-6 text-center text-sm">
        &copy; 2026 Nodari Gurjidze. Built with React, Vite & Node.js
      </footer>
    </div>
  );
}