import React from "react";
import { BrainCircuit, Code, Server } from "lucide-react"; // Import icons

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-gray-900/50 text-center transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-gray-800/50">
            <Code className="text-blue-600 dark:text-blue-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-semibold mb-3">Frontend Development</h3>
            <p className="text-gray-700 dark:text-gray-400">React.js, Next.js, TypeScript, Tailwind CSS, ShadCN</p>
          </div>

          {/* Backend Development */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-gray-900/50 text-center transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-gray-800/50">
            <Server className="text-green-600 dark:text-green-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-semibold mb-3">Backend Development</h3>
            <p className="text-gray-700 dark:text-gray-400">Node.js, Express.js, MongoDB, Convex, Clerk, API Integration</p>
          </div>

          {/* Other Tools & Technologies */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-gray-900/50 text-center transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-gray-800/50">
            <BrainCircuit className="text-yellow-600 dark:text-yellow-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-semibold mb-3">Other Tools & Technologies</h3>
            <p className="text-gray-700 dark:text-gray-400">Python, Git & GitHub, Figma, VSCode, SEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
