import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management and seamless checkout experience.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Interactive dashboard for data visualization with real-time charts and comprehensive reporting features.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and intuitive user interface.",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Selected works that showcase my development expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-2">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;