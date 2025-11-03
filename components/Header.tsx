
import React, { useState } from 'react';

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const NavLink: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="block lg:inline-block px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-600 rounded-md transition-colors duration-300"
  >
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Features', 'Portfolio', 'Resume', 'Testimonial', 'Clients', 'Pricing', 'Blog', 'Contacts'];
  
  const handleLinkClick = (section: string) => {
    scrollToSection(section.toLowerCase());
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-indigo-900/10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wider">
          <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>IFEANYI</a>
        </div>
        <nav className="hidden lg:flex lg:items-center lg:w-auto">
          <ul className="flex items-center space-x-2">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink onClick={() => handleLinkClick(item)}>{item}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gray-800">
          <ul className="flex flex-col items-center py-4">
             {navItems.map((item) => (
              <li key={item} className="w-full text-center">
                <NavLink onClick={() => handleLinkClick(item)}>{item}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
