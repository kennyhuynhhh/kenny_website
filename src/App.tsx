import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Awards from './components/Awards';

const App = () => {
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    setIsInIframe(window.self !== window.top);
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(95deg, var(--background-accent) 0%, #fff 50%, #e5e7eb 100%)'
      }}
    >
      <Navigation />
      <div className="relative">
        <Hero />
        {/* Bouncing arrow at the bottom center of the Hero section */}
        <a
          href={isInIframe ? undefined : "#experience"}
          aria-label="Scroll down"
          className={`absolute left-1/2 transform -translate-x-1/2 bottom-8 animate-bounce z-10${isInIframe ? ' pointer-events-none cursor-not-allowed' : ''}`}
          style={{ display: 'block' }}
          onClick={isInIframe ? (e) => e.preventDefault() : undefined}
          tabIndex={isInIframe ? -1 : 0}
          aria-disabled={isInIframe ? 'true' : undefined}
        >
          <svg
            className="w-12 h-12"
            style={{ color: 'var(--accent-color)' }}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
      <Experience />
      <Projects />
      <Certifications />
      <Awards />
    </div>
  );
};

export default App;