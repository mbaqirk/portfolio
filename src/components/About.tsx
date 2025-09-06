import { GraduationCap } from 'lucide-react';
import React from 'react';

const About: React.FC = () => {
  const education = [
    {
      level: `Master of Computer Application`,
      institution: 'Integral University, Lucknow',
      period: 'Currently Pursuing',
      details: '2025-Present'
    },
    {
      level: `Bachelor of Computer Application`,
      institution: 'Integral University, Lucknow',
      period: 'Completed',
      details: '2022-2025'
    },
    {
      level: 'Intermediate',
      institution: 'St. Joseph Sr. Sec. School, Jaunpur',
      period: 'Completed',
      details: '2022'
    },
    {
      level: 'High School',
      institution: 'St. Joseph Sr. Sec. School, Jaunpur',
      period: 'Completed',
      details: '2020'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        
        {/* About Me Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg p-10">
          <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-300 font-medium">
            I am a Full Stack Web Developer passionate about building seamless and engaging digital experiences. 
            As a student at Integral University, Lucknow, I actively apply my academic knowledge to real-world projects. 
            My expertise lies in modern web technologies, AI, and problem-solving, enabling me to create dynamic, user-focused applications.
          </p>
        </div>

        {/* Education Section */}
        <div className="text-center mt-20 mb-12">
          <h2 className="text-4xl font-bold mb-4">My Journey</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-blue-600 dark:bg-blue-400"></div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Graduation Cap Icon with Circle (Now Properly Spaced) */}
                <div className="w-12 h-12 flex items-center justify-center border-4 border-blue-600 dark:border-blue-400 rounded-full bg-white dark:bg-gray-900">
                  <GraduationCap size={22} className="text-blue-600 dark:text-blue-400" />
                </div>

                {/* Education Card (Properly Aligned Next to Icon) */}
                <div className="ml-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all w-full">
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-bold">{item.period}</p>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{item.level}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{item.institution}</p>
                  {item.details && <p className="mt-2 text-gray-600 dark:text-gray-400">{item.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
};

export default About;







// import { GraduationCap } from 'lucide-react';
// import React from 'react';

// const About: React.FC = () => {
//   const education = [
//     {
//       level: `Bachelor's of Computer Application`,
//       institution: 'Integral University, Lucknow',
//       period: 'Currently Pursuing',
//       details: '2022-Present'
//     },
//     {
//       level: 'Intermediate',
//       institution: 'St. Joseph Sr. Sec. School, Jaunpur',
//       period: 'Completed',
//       details: '2022'
//     },
//     {
//       level: 'High School',
//       institution: 'St. Joseph Sr. Sec. School, Jaunpur',
//       period: 'Completed',
//       details: '2020'
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
//           <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
//         </div>
        
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
//             <div className="p-8">
//               <p className="text-lg leading-relaxed mb-8">
//               I am a Full Stack web developer with a strong passion for building seamless and engaging digital experiences. As a student at Integral University, Lucknow, I actively apply my academic knowledge to real-world projects. My interests lie in modern web technologies, AI, and problem-solving, allowing me to create dynamic, user-focused applications. I enjoy crafting responsive and efficient solutions that enhance user interaction and functionality.
//               </p>
              
//                {/* Education Timeline */}
//               <h3 className="text-2xl font-semibold mb-6">Education</h3>
//               <div className="relative border-l-4 border-blue-600 dark:border-blue-400 pl-6 space-y-8">
//                 {education.map((item, index) => (
//                   <div key={index} className="relative group">
//                     {/* Degree Icon */}
//                     <div className="absolute -left-5 top-1 text-blue-600 dark:text-blue-400">
//                       <GraduationCap size={24} />
//                     </div>

//                     <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-all">
//                       <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{item.level}</h4>
//                       <p className="text-gray-700 dark:text-gray-300">{item.institution}</p>
//                       <p className="text-gray-500 dark:text-gray-400 text-sm">{item.period}</p>
//                       {item.details && <p className="mt-2 text-gray-600 dark:text-gray-300">{item.details}</p>}
//                     </div>
//                   </div>
//                 ))}
//               </div>

              
//               <div className="mt-8">
//                 <h3 className="text-2xl font-semibold mb-4">Interests</h3>
//                 <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
//                   <li>Exploring modern web frameworks and libraries for scalable development</li>
//                   <li>Crafting intuitive user interfaces with a focus on seamless user experience</li>
//                   <li>Leveraging Artificial Intelligence to enhance web applications</li>
//                   <li>Solving complex problems through algorithmic thinking and optimization</li>
//                   <li>Contributing to open-source projects and collaborating with the developer community</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
