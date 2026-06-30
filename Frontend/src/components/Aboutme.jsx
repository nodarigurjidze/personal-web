import { FaUserGraduate, FaCode, FaNetworkWired, FaBriefcase } from "react-icons/fa";
export default function AboutMe() {

    return (
        <section id="about-me" className="py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* სექციის სათაური */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded mx-auto md:mx-0"></div>
        </div>

        {/* მთავარი Grid სტრუქტურა */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* მარცხენა სვეტი: პროფილის აღწერა (იკავებს 1 სვეტს) */}
          <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <FaUserGraduate className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Profile Summary</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Hello i'm Nodari Highly motivated 3rd-year Computer Science student at TSU with a strong foundation in core web technologies like <strong className="text-gray-800">HTML5 & CSS3 (Flexbox/Grid), JavaScript, React.js,</strong> and <strong className="text-gray-800">Node.js</strong>. Alongside front-end development, experienced in <strong className="text-gray-800">Linux (Ubuntu/Debian) & Windows administration, Networking (TCP/IP, DNS, RDP), SQL Basics,</strong> and <strong className="text-gray-800">Git & GitHub</strong>. A quick learner with a background in <strong className="text-gray-800">IT Project Management</strong>, committed to starting immediately and contributing effectively to technical teams.
              </p>
            </div>
            
            {/* პატარა საინფორმაციო ბლოკი ქვემოთ */}
            <div className="border-t border-gray-100 pt-4 mt-4 text-xs text-gray-500 space-y-2">
              <p>📍 Based in: Tbilisi, Georgia</p>
              <p>🗣️ Languages: Georgian (Native), English (B2)</p>
            </div>
          </div>

          {/* მარჯვენა სვეტი: განათლება, გამოცდილება და სკილები (იკავებს 2 სვეტს) */}
          <div className="md:col-span-2 space-y-6">
            
            {/* ბარათი 1: სამუშაო გამოცდილება */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FaBriefcase className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Work Experience</h3>
              </div>
              
              <div className="border-l-2 border-blue-100 pl-4 ml-2">
                <div className="relative mb-2">
                  <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-blue-600"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h4 className="font-semibold text-gray-900">Junior Front-End Developer & QA Auditor</h4>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">June 2026 - Present</span>
                  </div>
                  <p className="text-sm font-medium text-gray-500">Kafu People | Remote</p>
                </div>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1 ml-1 leading-relaxed">
                  <li>Developing and maintaining responsive web interfaces using modern standards.</li>
                  <li>Debugging codebase issues, refactoring components, and resolving UI bugs to optimize performance.</li>
                  <li>Collaborating in an Agile environment, handling technical tickets (Jira), and managing version control via Git/GitHub.</li>
                </ul>
              </div>
            </div>

            {/* ბარათი 2: განათლება */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FaUserGraduate className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="border-l-2 border-blue-100 pl-4 ml-2 space-y-4">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-blue-600"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h4 className="font-semibold text-gray-900">Bachelor of Computer Science (3rd Year)</h4>
                    <span className="text-xs font-medium text-gray-500">2023 - Present</span>
                  </div>
                  <p className="text-sm text-gray-500">Ivane Javakhishvili Tbilisi State University (TSU)</p>
                </div>
              </div>
            </div>

            {/* ბარათი 3: ტექნიკური სკილები მოკლედ */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FaCode className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Core Highlights</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg font-medium">HTML5 & CSS3 (Flexbox/Grid)</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg font-medium">React.js</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg font-medium">JavaScript</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg font-medium">Node.js</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg font-medium">Linux (Ubuntu/Debian)</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg font-medium">CQL Basics</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg font-medium">Git & GitHub</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg font-medium">Networking (TCP/IP, DNS, RDP)</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg font-medium">IT Project Management</span>
                
                
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    );

}

