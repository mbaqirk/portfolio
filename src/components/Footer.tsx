import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand & Description */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">
              m<span className="text-blue-600 dark:text-blue-400">b</span>k.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Full Stack Developer | MERN Stack | UI/UX Engineer | Tech Enthusiast
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {section}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Mohammad Baqir Khan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
