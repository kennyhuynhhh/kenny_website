import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "The Swamp of Life",
      description: "A grid-based simulation modelling predator-prey interactions between ducks, newts, and shrimp. Animals have life cycles (baby, hungry, dead) and interact based on terrain, proximity, and species behaviour.",
      features: [
        "Object-oriented species classes with unique movement, life cycle, and predator/prey logic",
        "CSV-driven terrain maps (e.g. swamp, land, water)",
        "Reproduction and predation based on proximity and state",
        "Hunger mechanics with targeted movement toward food",
        "Command-line interface with adjustable simulation parameters",
        "Visualised using Matplotlib with real-time updates"
      ],
      technologies: [
        "Python", "NumPy", "Matplotlib", "CSV parsing", "OOP"
      ],
      liveUrl: "#", // Update with real URL if available
      githubUrl: "#" // Update with real repo if available
    },
    {
      title: "FlowState",
      description: "A mobile-first student companion app designed to enhance wellbeing, focus, and academic productivity. Developed for the Learning Futures Challenge 2024, it supports both students and educators through mood tracking, study analytics, AI support, and interactive planning tools.",
      features: [
        "Role-based dashboards for students and teachers with stats, events, and tasks",
        "Mood tracking with mascot companion and wellbeing history",
        "AI-powered suggestions for study tips, wellbeing advice, and time management using Hugging Face’s Mixtral-8x7B model",
        "Guided meditations, VR experiences, breathing exercises, and relaxing sounds",
        "Embedded 360° calming videos via A-Frame for immersive wellbeing support",
        "Study session logging, learning style selection, and efficiency tracking",
        "Custom calendar with colour-coded events and deadline prioritisation",
        "Integrated AI chat assistant with markdown-formatted responses and wellness prompts"
      ],
      technologies: [
        "React Native", "Expo", "expo-router", "Hugging Face Inference API", "Mixtral-8x7B", "React Context", "A-Frame"
      ],
      liveUrl: "#", // Update with real URL if available
      githubUrl: "#" // Update with real repo if available
    },
    {
      title: "3D Portfolio Experience",
      description: "A fully navigable 3D portfolio scene built with Three.js and React Three Fiber. The experience simulates a virtual workspace featuring interactive objects like a monitor, tablet, and clipboard that reveal live content, embedded websites, and project highlights.",
      features: [
        "Immersive 3D scene created in Spline and exported as GLB",
        "Interactive camera transitions using modular CameraLerp system",
        "Monitor with iframe overlay showing a live website (GitHub Pages)",
        "Clipboard and tablet with embedded textures, resume display, and scrollable content",
        "Decal-based image projection for clean texture clarity on meshes",
        "Lighting and shadows optimised for visual fidelity and performance",
        "Orbit controls restricted on focus to maintain user immersion",
        "Built-in content gating — iframes and overlays only load on user interaction"
      ],
      technologies: [
        "React Three Fiber", "Drei", "Three.js", "Tailwind CSS", "Spline (GLB)", "GitHub Pages", "Decal", "iframe integration", "useFrame", "useGLTF"
      ],
      liveUrl: "#", // Update with real URL if available
      githubUrl: "#" // Update with real repo if available
    },
    {
      title: "Personal Portfolio Website",
      description: "A clean, single-page portfolio built with React and Vite, designed to showcase my professional experience, projects, certifications, and awards. Serves as a central hub for recruiters and collaborators.",
      features: [
        "Fully responsive layout with smooth navigation and scroll-based section anchors",
        "Organized sections: Hero, Experience, Projects, Certifications, Awards",
        "Clean typography, custom icons, and minimalist design for readability",
        "Hosted and embedded via iframe in a 3D portfolio scene (monitor interaction)",
        "Deployed with GitHub Pages and integrated with a custom domain"
      ],
      technologies: [
        "React", "Vite", "Tailwind CSS", "GitHub Pages", "Custom Domain", "HTML5/CSS3"
      ],
      liveUrl: "#", // You can update this with your real URL
      githubUrl: "#" // You can update this with your real repo
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
              <div className="flex-1 p-6 space-y-4">
                <h3 className="text-xl font-semibold primary-text">
                  {project.title}
                </h3>
                <p className="primary-text leading-relaxed">
                  {project.description}
                </p>
                <ul className="list-disc pl-6 primary-text">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 primary-bg secondary-text text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-2">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-1 primary-text transition-colors"
                  >
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-1 primary-text transition-colors"
                  >
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
              {/* Photo placeholder */}
              <div className="flex items-center justify-center p-4">
                <div style={{ width: 320, height: 320, borderRadius: 16, background: 'rgba(191,195,201,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: 20, fontWeight: 500 }}>
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