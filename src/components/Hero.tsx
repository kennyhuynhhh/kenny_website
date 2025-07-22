import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    setIsInIframe(window.self !== window.top);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-light primary-text tracking-tight">
              Kenny Huynh
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto primary-text">
              Software Engineering Graduate. Mechanical Engineering Student.
            </p>
            <p className="primary-text">
              WORK IN PROGRESS LOL
            </p>
          </div>
          <div className="flex justify-center space-x-6 pt-8">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;