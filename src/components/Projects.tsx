import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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
      liveUrl: "#",
      githubUrl: "#"
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
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "FlowState",
      date: "2025",
      description: "An app for students and teachers to track wellbeing, boost focus, and plan studies with AI-powered support.",
      features: [
        "Role-based dashboards for students and teachers",
        "Mood tracking and wellbeing analytics",
        "AI  tips and wellness advice (Mixtral-8x7B)",
        "Guided meditations, VR, and calming 360° videos",
        "Custom calendar and study session logging"
      ],
      technologies: [
        "React Native", "Figma", "Hugging Face API", "Mixtral-8x7B", "A-Frame"
      ],
      liveUrl: "#",
      githubUrl: "#"
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
      liveUrl: "#",
      githubUrl: "#"
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
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light primary-text mb-4">
            Projects
          </h2>
          <p className="text-xl font-light primary-text">
            Selected works that showcase my development expertise
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
                    <h3 className="text-xl font-semibold primary-text m-0">
                      {project.title}
                    </h3>
                    {project.date && (
                      <span className="block text-xs primary-text mt-1 opacity-50">{project.date}</span>
                    )}
                  </div>
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
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-white"
                      >
                        Link
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-white"
                      >
                        Code
                      </a>
                    </div>
                  </div>
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
              {/* Photo placeholder */}
              <div className="flex items-center justify-center p-4">
                <div style={{ width: 300, height: 300, borderRadius: 16, background: 'rgba(191,195,201,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: 20, fontWeight: 500 }}>
                  Photo
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