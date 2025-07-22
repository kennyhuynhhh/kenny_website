import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack Software Engineering Intern",
      company: "Atlassian",
      location: "Sydney",
      period: "Nov 2024 – Feb 2025",
      bullets: [
        "Developed full-stack features for the DevAI – Autodev team using React, TypeScript (frontend), and Kotlin (backend).",
        "Integrated and evaluated LLMs including Claude, OpenAI, and Gemini to enhance developer tooling.",
        "Collaborated in an Agile environment with designers and AI researchers to ship production-level features."
      ]
    },
    {
      role: "Calibration Technician",
      company: "Calibration and Testing Services",
      location: "Perth",
      period: "Jul 2023 – Present",
      bullets: [
        "Calibrated precision electrical, temperature, pressure and dimensional instruments to ISO/IEC 17025 and NATA standards.",
        "Calculated uncertainty and tolerances for high-accuracy equipment.",
        "Automated calibration procedures using MET/CAL scripting.",
        "Built Arduino stepper motor systems to automate fixture positioning, with LCD, USB input, and limit switches."
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
        "Designed and proposed coding solutions across diverse domains to improve model reasoning and logic."
      ]
    },
    {
      role: "Civil Engineering Intern",
      company: "Laing O’Rourke",
      location: "Perth",
      period: "Nov 2023 – Feb 2024",
      bullets: [
        "Supported the MELconnx project (Morley–Ellenbrook Line) as part of METRONET, focusing on the Bayswater viaduct construction.",
        "Assisted with on-site inspections, technical drawings, and construction sequencing.",
        "Coordinated with structural teams to ensure alignment between design plans and implementation."
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

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light primary-text mb-4">
            Experience
          </h2>
          <p className="text-xl font-light primary-text">
            Building digital solutions across various industries
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="pl-8 pb-12 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 accent-bg rounded-full"></div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-1">
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
                        style={{ marginRight: 16, objectFit: 'contain', borderRadius: '4px' }}
                      />
                    ) : exp.company === "Scale AI" ? (
                      <img
                        src="/kenny_website/logos/scale.png"
                        alt="Scale AI Logo"
                        width={40}
                        height={40}
                        style={{ marginRight: 16, objectFit: 'contain' }}
                      />
                    ) : exp.company === "Laing O’Rourke" ? (
                      <img
                        src="/kenny_website/logos/laingorourke.png"
                        alt="Laing O’Rourke Logo"
                        width={40}
                        height={40}
                        style={{ marginRight: 16, objectFit: 'contain',borderRadius: '4px'}}
                      />
                    ) : exp.company === "John Holland" ? (
                      <img
                        src="/kenny_website/logos/johnholland.png"
                        alt="John Holland Logo"
                        width={40}
                        height={40}
                        style={{ marginRight: 16, objectFit: 'contain', borderRadius: '4px'}}
                      />
                    ) : (
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: 16 }}>
                        <span style={{ color: 'var(--primary)', fontSize: 18 }}>Logo</span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-medium primary-text m-0 p-0">{exp.role}</h3>
                      <p className="text-lg primary-text font-medium m-0 p-0">{exp.company} — {exp.location}</p>
                    </div>
                    <div className="text-sm primary-text mb-2" style={{ marginLeft: 'auto', whiteSpace: 'nowrap' }}>{exp.period}</div>
                  </div>
                  <ul className="list-disc pl-8 primary-text">
                    {exp.bullets.map((item, idx) => (
                      <li key={idx} className="mb-1">{item}</li>
                    ))}
                  </ul>
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