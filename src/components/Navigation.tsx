import React, { useState, useEffect } from 'react';

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'awards', label: 'Awards' },
  ];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsInIframe(window.self !== window.top);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Update active section based on scroll position
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );
      const currentSection = sectionElements.find(element => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? 'rgba(62, 65, 71, 0.8)' : 'transparent',
        color: 'var(--primary)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Hamburger menu on the left for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(true)}
              className="focus:outline-none"
              aria-label="Open menu"
            >
              <svg className="w-7 h-7 primary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Desktop navigation */}
          <div className="hidden md:flex justify-center w-full">
            <div className="flex space-x-8">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <div key={section.id} className="flex flex-col items-center">
                    <a
                      href={`#${section.id}`}
                      className={`text-sm font-medium transition-all duration-200 hover:primary-text ${
                        isActive ? 'primary-text' : ''
                      } ${isInIframe ? 'pointer-events-none cursor-not-allowed' : ''}`}
                      onClick={isInIframe ? (e) => e.preventDefault() : undefined}
                      tabIndex={isInIframe ? -1 : 0}
                      aria-disabled={isInIframe ? 'true' : undefined}
                    >
                      {section.label}
                    </a>
                    {isActive && (
                      <span
                        className="mt-1 mx-auto"
                        style={{
                          display: 'block',
                          width: '24px',
                          height: '4px',
                          borderRadius: '9999px',
                          background: 'var(--primary)',
                        }}
                      ></span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Mobile menu panel */}
        {menuOpen && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50" onClick={() => setMenuOpen(false)}></div>
            {/* Panel */}
            <div className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-[rgba(62,65,71,0.98)] shadow-lg z-50 p-6 flex flex-col transition-transform duration-300">
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end mb-6 focus:outline-none"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 primary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col space-y-4">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`text-lg font-medium py-2 px-2 rounded transition-all duration-200 hover:primary-text ${
                        isActive ? 'primary-text' : ''
                      } ${isInIframe ? 'pointer-events-none cursor-not-allowed' : ''}`}
                      onClick={() => setMenuOpen(false)}
                      tabIndex={isInIframe ? -1 : 0}
                      aria-disabled={isInIframe ? 'true' : undefined}
                    >
                      {section.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;