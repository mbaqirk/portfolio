import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Qubis',
      description: 'A real-time chat application built with modern web technologies. Features include instant messaging, user authentication, and responsive design.',
      image: '/20250126_202126.png',
      technologies: ['React.js','Next.js', 'Convex', 'Clerk', 'Tailwind CSS', 'ShadCN'],
      github: 'https://github.com/chatwithqubis/qubis',
      live: 'https://qubis.vercel.app',
      featured: true
    },
    // {
    //   title: 'Portfolio Website',
    //   description: 'A modern, responsive portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS.',
    //   image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    //   technologies: ['React', 'Tailwind CSS', 'Vite'],
    //   github: 'https://github.com',
    //   live: 'https://mbaqirkhan.example.com',
    //   featured: false
    // },
    // {
    //   title: 'E-commerce Dashboard',
    //   description: 'An admin dashboard for e-commerce platforms with analytics, inventory management, and order processing features.',
    //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80',
    //   technologies: ['React', 'Next.js', 'ShadCN', 'API Integration', 'Chart.js'],
    //   github: 'https://github.com',
    //   live: 'https://dashboard-demo.example.com',
    //   featured: false
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project, index) => (
            <div key={index} className="mb-20">
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span className="ml-3 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">Featured</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-filter backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-1.5 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors text-sm"
                    >
                      <Github size={14} className="mr-1" />
                      Code
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;