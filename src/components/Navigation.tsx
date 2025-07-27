import React, { useState, useEffect } from 'react';

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'awards', label: 'Awards' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
  ];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);

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
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center">
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
    </nav>
  );
};

export default Navigation;