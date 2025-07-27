import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [projectPhotoIndices, setProjectPhotoIndices] = useState<{ [key: string]: number }>({});
  const projects = [
    {
      title: "Personal Portfolio Website",
      date: "2025",
      description: "A single-page portfolio built with React and Vite to showcase my experience, projects, and credentials.",
      features: [
        "Responsive layout with smooth navigation",
        "Organized sections for experience, projects, and more",
        "Minimalist, clean and simple design",
        "Embedded within a my 3D portfolio experience"
      ],
      technologies: [
        "React", "Vite", "Tailwind CSS", "GitHub Pages"
      ],
      liveUrl: "https://kennyhuynh.github.io/portfolio-website/",
      photos: [
        "/kenny_website/photos/portfolio/photo1.png",
        "/kenny_website/photos/portfolio/photo2.png"
      ]
    },
    {
      title: "3D Portfolio Experience",
      date: "2025",
      description: "A 3D web portfolio built with React Three Fiber, simulating a virtual workspace with interactive objects and embedded live content. Inspired by my own workspace.",
      features: [
        "Immersive 3D scene with free movement and viewing",
        "Interactive camera transitions and clickable objects",
        "Live website and interface overlays on object displays",
        "Optimised lighting for aesthetics and performance"
      ],
      technologies: [
        "React Three Fiber", "Drei", "Three.js", "Spline (GLB)", "iframe"
      ],
      liveUrl: "https://kennyhuynhhh.github.io/kennyhuynh1/",
      photos: [
        "/kenny_website/photos/3d-portfolio/photo1.png",
        "/kenny_website/photos/3d-portfolio/photo2.png",
        "/kenny_website/photos/3d-portfolio/photo3.png"
      ]
    },
    {
      title: "FlowState",
      date: "2025",
      description: "An app for students and teachers to track wellbeing, boost focus, and plan studies with AI-powered support.",
      features: [
        "Role-based dashboards for students and teachers",
        "Mood tracking and wellbeing analytics",
        "AI assistant for study tips and wellness advice (Mixtral-8x7B)",
        "Guided meditations, VR, and 360° video integration",
        "Custom calendar, study session logging and app integration"
      ],
      technologies: [
        "React Native", "Figma", "Hugging Face API", "Mixtral-8x7B", "A-Frame"
      ],
      liveUrl: "https://flowstate-app.netlify.app",
      githubUrl: "https://www.youtube.com/watch?v=MaTzbHRm1Hs",
      photos: [
        "/kenny_website/photos/flowstate/photo1.png",
        "/kenny_website/photos/flowstate/photo2.png",
        "/kenny_website/photos/flowstate/photo3.png",
        "/kenny_website/photos/flowstate/photo4.png",
        
      ]
    },
    {
      title: "TBAG (Team Building Atlassian Games)",
      date: "2025",
      description: "A Slack bot game suite built at Atlassian’s ShipIt 60 Hackathon to boost team connection with daily multiplayer games.",
      features: [
        "ShipIt 60 finalist: Top 3 teams",
        "Interactive mini-games for team bonding (Squiddle, Glassbridge, Tug of Squid)",
        "Real-time scoring and global leaderboard",
        "24/7 Slack bot (Python, Flask, Atlas microservice)",
      ],
      technologies: [
        "Python", "Flask", "Slack API", "Atlas", "Figma"
      ],
      liveUrl: "https://drive.google.com/file/d/1_BK6CiyGIM6QFDJK1CZf8hg1c8f51OD2/edit",
      githubUrl: "",
      photos: [
        "/kenny_website/photos/tbag/photo1.png",
        "/kenny_website/photos/tbag/photo2.png",
        "/kenny_website/photos/tbag/photo3.png",
        "/kenny_website/photos/tbag/photo4.png",
      ]
    },
    {
      title: "The Swamp of Life",
      date: "2022",
      description: "A Python simulation of predator-prey dynamics in a swamp, with animal interaction based on terrain and behaviour.",
      features: [
        "Object-oriented species classes with unique movement, life cycle, and predator/prey logic",
        "CSV-driven terrain maps (e.g. swamp, land, water)",
        "Reproduction and predation based on proximity and state",
        "Hunger mechanics with targeted movement toward food",
      ],
      technologies: [
        "Python", "NumPy", "Matplotlib", "CSV parsing", "OOP"
      ],
      liveUrl: "",
      githubUrl: "",
      photos: [
        "/kenny_website/photos/swamp/photo1.png",
        "/kenny_website/photos/swamp/photo2.png",
      ]
    }
  ];

  const nextProjectPhoto = (projectTitle: string, photos: string[]) => {
    setProjectPhotoIndices((prev) => {
      const currentIndex = prev[projectTitle] || 0;
      const nextIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
      return { ...prev, [projectTitle]: nextIndex };
    });
  };

  const prevProjectPhoto = (projectTitle: string, photos: string[]) => {
    setProjectPhotoIndices((prev) => {
      const currentIndex = prev[projectTitle] || 0;
      const prevIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
      return { ...prev, [projectTitle]: prevIndex };
    });
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light primary-text mb-4">
            Projects
          </h2>
          <p className="text-xl font-light primary-text">
            Technical Projects & Personal Initiatives
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-row rounded-2xl transition-all duration-300 mb-8"
              style={{
                background: 'rgba(191,195,201,0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)'
              }}
            >
              <div className="flex-1 p-6 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold primary-text m-0">
                        {project.title}
                      </h3>
                      {project.title === "TBAG (Team Building Atlassian Games)" && (
                        <div className="relative group">
                          <svg 
                            className="w-5 h-5 transition-all duration-200 cursor-pointer" 
                            style={{ 
                              color: 'var(--primary)', 
                              opacity: 0.95,
                              filter: 'drop-shadow(0 0 2px rgba(255, 215, 0, 0.2))'
                            }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            onMouseEnter={(e) => {
                              e.currentTarget.style.opacity = '1';
                              e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.opacity = '0.7';
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-[var(--secondary)] text-xs px-3 py-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                            Atlassian Intern ShipIt 60 Finalists: Top 3 Teams
                          </div>
                        </div>
                      )}
                      {project.title === "FlowState" && (
                        <div className="relative group">
                          <svg 
                            className="w-5 h-5 transition-all duration-200 cursor-pointer" 
                            style={{ 
                              color: 'var(--primary)', 
                              opacity: 0.7,
                              filter: 'drop-shadow(0 0 2px rgba(255, 215, 0, 0.3))'
                            }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            onMouseEnter={(e) => {
                              e.currentTarget.style.opacity = '1';
                              e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.opacity = '0.7';
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-[var(--secondary)] text-xs px-3 py-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                            Curtin Learning Futures Challenge 2025: Top 2 Teams
                          </div>
                        </div>
                      )}
                    </div>
                    {project.date && (
                      <span className="block text-xs primary-text mt-1 opacity-50">{project.date}</span>
                    )}
                  </div>
                  {project.liveUrl && (
                    <div className="relative group flex items-center">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md hover:bg-[rgba(191,195,201,0.12)] transition-colors flex items-center justify-center"
                        style={{ width: 24, height: 24 }}
                      >
                        <ExternalLink size={20} className="primary-text" />
                      </a>
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-[var(--secondary)] text-xs px-3 py-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto z-20 flex flex-col items-center gap-1">
                        {project.title === "FlowState" ? (
                          <>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-white"
                            >
                              App
                            </a>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-white"
                            >
                              Demo
                            </a>
                          </>
                        ) : project.title === "TBAG (Team Building Atlassian Games)" ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                          >
                            Demo/Trailer
                          </a>
                        ) : (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                          >
                            Link
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <p className="primary-text leading-relaxed">
                  {project.description}
                </p>
                <ul className="list-disc pl-6 primary-text">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">{feature}</li>
                  ))}
                </ul>
                <div className="h-2"></div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-md primary-text"
                      style={{
                        background: 'rgba(255,255,255,0.12)',
                        border: '1px solid rgba(255,255,255,0.18)',
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                        // color removed to use primary-text
                        boxShadow: '0 0 8px 1px rgba(255,255,255,0.18)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Photo Gallery */}
              <div className="flex items-center justify-center p-4 relative">
                <div 
                  style={{ 
                    width: 300, 
                    height: 300, 
                    borderRadius: 16, 
                    background: 'rgba(191,195,201,0.08)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--primary)', 
                    fontSize: 20, 
                    fontWeight: 500,
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  {project.photos && project.photos.length > 0 ? (
                    <>
                      <img
                        src={project.photos[projectPhotoIndices[project.title] || 0]}
                        alt={`${project.title} photo ${(projectPhotoIndices[project.title] || 0) + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: 16
                        }}
                      />
                      {project.photos.length > 1 && (
                        <>
                          <button
                            onClick={() => prevProjectPhoto(project.title, project.photos)}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-200 z-10 flex items-center justify-center pb-1"
                            style={{ 
                              fontSize: '1.5rem',
                              width: '35px',
                              height: '35px',
                              background: 'rgba(0, 0, 0, 0.5)',
                              borderRadius: '50%',
                              backdropFilter: 'blur(8px)',
                              lineHeight: '1'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                            }}
                          >
                            ‹
                          </button>
                          <button
                            onClick={() => nextProjectPhoto(project.title, project.photos)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-200 z-10 flex items-center justify-center pb-1"
                            style={{ 
                              fontSize: '1.5rem',
                              width: '35px',
                              height: '35px',
                              background: 'rgba(0, 0, 0, 0.5)',
                              borderRadius: '50%',
                              backdropFilter: 'blur(8px)',
                              lineHeight: '1'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                            }}
                          >
                            ›
                          </button>
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                            {(projectPhotoIndices[project.title] || 0) + 1} / {project.photos.length}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <span>Photo</span>
                  )}
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