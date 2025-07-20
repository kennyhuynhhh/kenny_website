import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Led development of user-facing features for a platform serving 100k+ users. Implemented responsive designs and optimized performance.",
      technologies: ["React", "TypeScript", "Node.js", "AWS"]
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Developed custom web applications and e-commerce solutions. Collaborated with design teams to deliver pixel-perfect implementations.",
      technologies: ["JavaScript", "Vue.js", "SCSS", "Firebase"]
    },
    {
      role: "Junior Developer",
      company: "Startup Inc",
      period: "2019 - 2020",
      description: "Built responsive websites and learned modern development practices. Contributed to both frontend and backend development.",
      technologies: ["HTML", "CSS", "JavaScript", "Python"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Building digital solutions across various industries
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="border-l-2 border-gray-100 pl-8 pb-12 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">{exp.role}</h3>
                    <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;