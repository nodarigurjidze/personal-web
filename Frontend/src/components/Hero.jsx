// Frontend/src/components/Hero.jsx
import myPhoto from "../assets/avatar.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Hero() {
  return (
    <section
      id="main"
      // min-h-screen გაშლის სექციას მთლიან ეკრანზე. flex და items-center კი შიგთავსს ვერტიკალურად გააცენტრებს.
      className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white px-6 py-12"
    >
      {/* w-full-ით ვუზრუნველყოფთ, რომ კონტეინერი ბოლომდე გაიწეროს შიგნით */}
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* მარცხენა მხარე: ტექსტი და ღილაკები */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Hello I'm  {"Nodari"} a <span className="text-blue-600">Junior Software Engineer</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Creating high-quality web applications with modern tools and best
            practices for exceptional user experiences.
          </p>

          <a
            href="/Nodari_Gurjidze - CV.pdf"
            download="Nodari_Gurjidze_CV.pdf"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Download Resume (CV)
          </a>

          {/* სოციალური აიქონები */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nodari-gurjidze-2911203a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-blue-600 shadow-md border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <FaLinkedinIn className="text-xl" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/nodarigurjidze"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-blue-600 shadow-md border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <FaGithub className="text-xl" />
            </a>

            {/* Mail */}
            <a
              href="mailto:nodari.gurjidze@example.com?subject=Job%20Opportunity"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-blue-600 shadow-md border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <IoMdMail className="text-xl" />
            </a>
          </div>
        </div>

        {/* მარჯვენა მხარე: ფოტო */}
        <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto md:mx-0 flex-shrink-0">
          <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-10"></div>
          <img
            src={myPhoto}
            alt="Nodari"
            className="w-full h-full object-cover rounded-2xl shadow-md border-2 border-white relative z-10"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300";
            }}
          />
        </div>

      </div>
    </section>
  );
}