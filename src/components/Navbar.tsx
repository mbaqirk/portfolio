import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl px-6 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
      }`}
      style={{ width: '90%', maxWidth: '1100px' }}
    >
      <nav className="flex justify-between items-center py-4">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight">
          Mohammad<span className="text-blue-600 dark:text-blue-400"> Baqir</span> <span className="text-xl font-bold tracking-tight"> K.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-2xl">
          <ul className="py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;










// import React, { useState, useEffect } from 'react';
// import { Moon, Sun, Menu, X } from 'lucide-react';

// interface NavbarProps {
//   theme: string;
//   toggleTheme: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' 
//           : 'bg-transparent'
//       }`}
//     >
//       <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <a href="#home" className="text-xl font-bold tracking-tight">
//           Mohammad<span className="text-blue-600 dark:text-blue-400"> Baqir</span> <span className="text-xl font-bold tracking-tight"> K.</span>
//         </a>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           <ul className="flex space-x-6">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a 
//                   href={link.href} 
//                   className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <button 
//             onClick={toggleTheme} 
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
//             aria-label="Toggle theme"
//           >
//             {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
//           </button>
//         </div>

//         {/* Mobile Navigation Toggle */}
//         <div className="flex items-center md:hidden">
//           <button 
//             onClick={toggleTheme} 
//             className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
//             aria-label="Toggle theme"
//           >
//             {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
//           </button>
//           <button 
//             onClick={toggleMenu} 
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
//           <ul className="py-4 px-6 space-y-4">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a 
//                   href={link.href} 
//                   className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;