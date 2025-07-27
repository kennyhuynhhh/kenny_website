import React, { useState } from 'react';

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentExperiencePhotos, setCurrentExperiencePhotos] = useState<string[]>([]);

  const experiences = [
    {
      role: "Full-Stack Software Engineering Intern",
      company: "Atlassian",
      location: "Sydney",
      period: "Nov 2024 – Feb 2025",
      bullets: [
        "Received a graduate return offer for 2026 as an Associate Software Engineer",
        "Assigned to the DevAI - Autodev team, working with React, TypeScript (frontend), and Kotlin (backend).",
        "Worked with LLMs including Claude, OpenAI, and Gemini to enhance developer tooling.",
        "Collaborated in an Agile environment with designers and AI researchers to ship production-level features."
      ],
      photos: [
        "/kenny_website/photos/atlassian/photo1.png",
        "/kenny_website/photos/atlassian/photo2.png",
        "/kenny_website/photos/atlassian/photo3.png"
      ]
    },
    {
      role: "Calibration Technician",
      company: "Calibration and Testing Services",
      location: "Perth",
      period: "Jul 2023 – Present",
      bullets: [
        "Calibrated electrical, temperature, pressure and dimensional instruments to NATA standards.",
        "Calculated uncertainty and tolerances for high-accuracy equipment in compliance with ISO/IEC 17025.",
        "Developed calibration procedures using MET/CAL code development and Microsoft Excel.",
        "Built Arduino stepper motor systems to automate fixture positioning, with LCD, USB input, and limit switches."
      ],
      photos: [
        "/kenny_website/photos/cats/photo1.png",
        "/kenny_website/photos/cats/photo2.png",
        "/kenny_website/photos/cats/photo3.png"
      ]
    },
    {
      role: "Programmer – AI Model Trainer",
      company: "Scale AI",
      location: "San Francisco (Remote)",
      period: "Dec 2023 – Mar 2024",
      bullets: [
        "Contributed to the Bulba ICE and Dolphin Coding Projects for LLM development.",
        "Analysed and evaluated AI model outputs for code quality, correctness, and performance.",
        "Designed coding solutions across diverse domains to improve model reasoning and logic."
      ]
    },
    {
      role: "Civil Engineering Intern",
      company: "Laing O'Rourke",
      location: "Perth",
      period: "Nov 2023 – Feb 2024",
      bullets: [
        "Supported the MELconnx project (Morley-Ellenbrook Line) as part of METRONET, focusing on the Bayswater viaduct construction.",
        "Assisted with on-site inspections, technical drawings, construction sequencing and soil testing.",
        "Coordinated with structural teams to ensure alignment between design plans and implementation."
      ],
      photos: [
        "/kenny_website/photos/laingorourke/photo1.png",
        "/kenny_website/photos/laingorourke/photo2.png",
        "/kenny_website/photos/laingorourke/photo3.png",
        "/kenny_website/photos/laingorourke/photo4.png",
        "/kenny_website/photos/laingorourke/photo5.png",
        "/kenny_website/photos/laingorourke/photo6.png",
      ]
    },
    {
      role: "Civil Engineering Virtual Internship",
      company: "John Holland",
      location: "Remote",
      period: "Completed 2023",
      bullets: [
        "Completed job simulations on high-rise, bridge, and rail projects.",
        "Calculated concrete volumes for pile caps and abutments; compared subcontractor quotes.",
        "Reviewed design drawings for discrepancies and created task sequencing plans.",
        "Assessed CCTV placement at an island stop for safety compliance."
      ]
    }
  ];

  const openPhotoModal = (photos: string[]) => {
    setCurrentExperiencePhotos(photos);
    setCurrentPhotoIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === currentExperiencePhotos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? currentExperiencePhotos.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextPhoto();
    } else if (e.key === 'ArrowLeft') {
      prevPhoto();
    }
  };

  return (
    <>
      <section id="experience" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light primary-text mb-4">
              Experience
            </h2>
            <p className="text-xl font-light primary-text">
              Employment History and Internships
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div
                  className="relative rounded-2xl mb-8 flex flex-col justify-center px-8 py-8"
                  style={{
                    background: 'rgba(191,195,201,0.12)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)'
                  }}
                >
                  <div className="absolute -left-2 top-8 w-4 h-4 accent-bg rounded-full"></div>
                  <div className="space-y-4">
                    <div className="w-full">
                      <div className="flex items-start mb-1">
                        {/* Company Logo */}
                        {exp.company === "Atlassian" ? (
                          <img
                            src="/kenny_website/logos/atlassian.png"
                            alt="Atlassian Logo"
                            width={40}
                            height={40}
                            style={{ marginRight: 16, objectFit: 'contain' }}
                          />
                        ) : exp.company === "Calibration and Testing Services" ? (
                          <img
                            src="/kenny_website/logos/CATS.png"
                            alt="Calibration and Testing Services Logo"
                            width={40}
                            height={40}
                            style={{ marginRight: 16, objectFit: 'cover', borderRadius: '4px' }}
                          />
                        ) : exp.company === "Scale AI" ? (
                          <img
                            src="/kenny_website/logos/scale.png"
                            alt="Scale AI Logo"
                            width={40}
                            height={40}
                            style={{ marginRight: 16, objectFit: 'contain', borderRadius: '4px'}}
                          />
                        ) : exp.company === "Laing O'Rourke" ? (
                          <img
                            src="/kenny_website/logos/laingorourke.png"
                            alt="Laing O'Rourke Logo"
                            width={40}
                            height={40}
                            style={{ marginRight: 16, objectFit: 'contain', borderRadius: '4px' }}
                          />
                        ) : exp.company === "John Holland" ? (
                          <img
                            src="/kenny_website/logos/johnholland.png"
                            alt="John Holland Logo"
                            width={40}
                            height={40}
                            style={{ marginRight: 16, objectFit: 'contain', borderRadius: '4px' }}
                          />
                        ) : (
                          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: 16 }}>
                            <span style={{ color: 'var(--primary)', fontSize: 18 }}>Logo</span>
                          </div>
                        )}
                        <div className="flex-1 mb-2" style={{ marginTop: '-7px' }}>
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-medium primary-text m-0 p-0">{exp.role}</h3>
                            {exp.photos && exp.photos.length > 0 && (
                              <button
                                onClick={() => openPhotoModal(exp.photos)}
                                className="inline-flex items-center justify-center transition-all duration-200 cursor-pointer"
                                style={{
                                  color: 'var(--primary)',
                                  opacity: 0.6
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.opacity = '1';
                                  e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.opacity = '0.8';
                                  e.currentTarget.style.transform = 'scale(1)';
                                }}
                                title={`View ${exp.photos.length} photo${exp.photos.length > 1 ? 's' : ''}`}
                              >
                                <svg className="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </button>
                            )}
                          </div>
                          <span className="text-lg primary-text font-medium m-0 p-0">{exp.company}</span>
                          <span className="text-lg primary-text font-normal m-0 p-0"> - {exp.location}</span>
                        </div>
                        <div className="text-sm primary-text mb-2" style={{ whiteSpace: 'nowrap', textAlign: 'right', marginTop: '2px' }}>{exp.period}</div>
                      </div>
                      <ul className="list-disc pl-8 primary-text -mb-2">
                        {exp.bullets.map((item, idx) => (
                          <li key={idx} className="mb-1">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(8px)'
          }}
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              style={{ fontSize: '2rem' }}
            >
              ×
            </button>

            {/* Navigation Arrows */}
            {currentExperiencePhotos.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-200 z-10 flex items-center justify-center pb-1"
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
                  onClick={nextPhoto}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-200 z-10 flex items-center justify-center pb-1"
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
              </>
            )}

            {/* Photo Display */}
            <div className="relative">
              <img
                src={currentExperiencePhotos[currentPhotoIndex]}
                alt={`Photo ${currentPhotoIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              />
              
              {/* Photo Counter */}
              {currentExperiencePhotos.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                  {currentPhotoIndex + 1} / {currentExperiencePhotos.length}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;