// Frontend/src/components/Experience.jsx
import { FaBriefcase, FaCheckCircle, FaTools } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* სექციის სათაური */}
        <div className="text-center md:text-left mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded mx-auto md:mx-0"></div>
        </div>

        {/* მთავარი კარტა */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-xl hover:border-blue-500/50 transition-all duration-300">
          
          {/* კომპანია და პოზიცია */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                <FaBriefcase className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Junior Front-End Developer & QA Auditor
                </h3>
                <p className="text-blue-400 font-medium">Kafu People</p>
              </div>
            </div>
            
            <div className="text-left md:text-right">
              <span className="inline-block text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full mb-1">
                June 2026 - Present
              </span>
              <p className="text-xs text-slate-400">Tbilisi, Georgia (Remote)</p>
            </div>
          </div>

          {/* ძირითადი მოვალეობები და მიღწევები */}
          <div className="mt-6 space-y-4">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" /> Key Responsibilities
            </h4>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
              <li className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                <strong className="text-white block mb-1">UI Optimization</strong>
                Developing and maintaining responsive web interfaces, debugging codebase issues, and refactoring React components.
              </li>
              <li className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                <strong className="text-white block mb-1">Quality Assurance</strong>
                Conducting UI audits, identifying layout inconsistencies, and resolving visual and functional bugs to enhance site performance.
              </li>
              <li className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                <strong className="text-white block mb-1">Agile Workﬂow</strong>
                Collaborating closely within a structured Agile environment, managing sprints, and efficiently resolving technical tickets.
              </li>
              <li className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                <strong className="text-white block mb-1">Version Control</strong>
                Utilizing Git and GitHub for team codebase management, handling code reviews, and ensuring flawless deployment pipelines.
              </li>
            </ul>
          </div>

          {/* ტექნოლოგიები, რომლებსაც იყენებ ამ სამსახურში */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2 mb-3">
              <FaTools className="text-blue-500" /> Technologies & Tools Used
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-900 text-slate-300 border border-slate-700 px-3 py-1 rounded-md text-xs font-medium">React.js</span>
              <span className="bg-slate-900 text-slate-300 border border-slate-700 px-3 py-1 rounded-md text-xs font-medium">JavaScript (ES6+)</span>
              <span className="bg-slate-900 text-slate-300 border border-slate-700 px-3 py-1 rounded-md text-xs font-medium">Tailwind CSS</span>
              <span className="bg-slate-900 text-slate-300 border border-slate-700 px-3 py-1 rounded-md text-xs font-medium">HTML5 & CSS3</span>
              <span className="bg-slate-900 text-slate-300 border border-slate-700 px-3 py-1 rounded-md text-xs font-medium">Git / GitHub</span>
              <span className="bg-slate-900 text-slate-300 border border-slate-700 px-3 py-1 rounded-md text-xs font-medium">Jira / Agile</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}