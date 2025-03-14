import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const taglines = [
  "Writing code that works 90% of the time… the other 10% keeps me humble.",
  "Turning caffeine into clean code and sleek web experiences.",
  "I break things, fix them, and pretend nothing ever happened.",
  "If debugging was an Olympic sport, I’d have at least a silver medal.",
  "Building web experiences so smooth, even your ex would want to come back.",
  "Making responsive designs because 'works on my machine' isn’t enough.",
  "Creating intuitive UIs so users don’t rage-quit.",
];


const Hero: React.FC = () => {


  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Mohammad Baqir Khan</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            Full Stack Developer | MERN Stack | UI/UX Engineer | Tech Enthusiast
            </h2>
            
            <p className=" h-12 text-lg text-gray-700 dark:text-gray-300 pt-2 pb-4 max-w-lg">
            <Typewriter
                words={taglines}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000} // Ensures full text types, waits, then deletes
              />
            </p>
            <div className="flex pt-8 space-x-4">
              <a 
                href="https://in.linkedin.com/in/mbaqirkhan110" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/mbaqirk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:workwithbaqir@gmail.com" 
                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors inline-block"
              >
               Get in Touch
              </a>
              
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20"></div>
              <img 
                src="/baqir.png" 
                alt="Mohammad Baqir Khan" 
                className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800"
                placeholder="blur" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
