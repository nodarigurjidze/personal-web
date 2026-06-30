// Frontend/src/components/Contact.jsx
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-blue-50/30 px-6">
      <div className="max-w-xl mx-auto">
        
        {/* სექციის სათაური */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded mx-auto"></div>
          <p className="text-sm text-gray-500 mt-4 max-w-xs mx-auto">
            Have a question or want to work together? Drop a message!
          </p>
        </div>

        {/* გაუმჯობესებული ფორმის კონტეინერი */}
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="bg-white p-6 md:p-10 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 space-y-6"
        >
          
          {/* სახელი */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2 flex items-center gap-2">
              <FaUser className="text-blue-500" /> Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-gray-50/50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
              required
            />
          </div>

          {/* მაილი */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2 flex items-center gap-2">
              <FaEnvelope className="text-blue-500" /> Mail
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-50/50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
              required
            />
          </div>

          {/* შეტყობინება */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2 flex items-center gap-2">
              <FaCommentAlt className="text-blue-500" /> Message
            </label>
            <textarea
              rows="5"
              placeholder="Your message here..."
              className="w-full px-4 py-3 rounded-xl bg-gray-50/50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 resize-none"
              required
            ></textarea>
          </div>

          {/* გაგზავნის ღილაკი ანიმაციით */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm tracking-wide mt-2"
          >
            <span>Send Message</span>
            <FaPaperPlane className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </button>

        </form>

      </div>
    </section>
  );
}