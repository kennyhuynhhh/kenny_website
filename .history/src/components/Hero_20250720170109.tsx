import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 tracking-tight">
              Kenny Huynh
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
              hi
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium">
              View Work
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-gray-400 transition-colors duration-200 font-medium">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;