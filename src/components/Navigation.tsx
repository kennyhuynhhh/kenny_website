import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const tabLabels: Record<string, string> = {
  '/': 'Home',
  '/experience': 'Experience',
  '/projects': 'Projects',
  '/certifications': 'Certifications',
  '/awards': 'Awards',
};

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: '/', label: 'Home' },
    { id: '/experience', label: 'Experience' },
    { id: '/projects', label: 'Projects' },
    { id: '/certifications', label: 'Certifications' },
    { id: '/awards', label: 'Awards' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="flex space-x-8">
            {sections.map((section) => {
              const isActive =
                location.pathname === section.id ||
                (section.id === '/' && location.pathname === '');
              return (
                <div key={section.id} className="flex flex-col items-center">
                  <Link
                    to={section.id}
                    className={`text-sm font-medium transition-all duration-200 hover:text-blue-600 ${
                      isActive ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {section.label}
                  </Link>
                  {isActive && (
                    <span className="mt-1 w-6 h-1 rounded-full bg-blue-600"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;