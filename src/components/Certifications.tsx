import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Python (Basic) Skill Certification",
      issuer: "HackerRank",
      date: "2023",
      description: "Passed HackerRank Python Timed Assessment.",
      content: "Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects, Types and Classes.",
      verificationLink: "https://www.hackerrank.com/certificates/566d8e8f8486"
    },
    {
      title: "Build a Machine Learning Model with Python",
      issuer: "Codecademy",
      date: "2023",
      description: "Completed Codecademy's Course for Machine Learning Models, and created my own model.",
      content: "Machine Learning, Regression, Classification, Clustering Methods, Neural Networks, Supervised & Unsupervised Learning.",
      verificationLink: "https://www.codecademy.com/profiles/kenstar1910/certificates/5cab64c55f1de8039db366ef"
    },
    {
      title: "Back-End Engineering Simulation",
      issuer: "Lyft",
      date: "2024",
      description: "Completed the Back-End Engineering job simulation, taking over the development of an unfinished project for the Lyft Rentals team.",
      content: "Drafted a UML class diagram representing a new reorganized architecture. Refactored a messy codebase inherited from another team to accurately reflect my new design. Implemented unit tests and added new functionality using test-driven development.",
      verificationLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Lyft/xSw9echtixLAoPdsH_Lyft_zP8hQLEsvTuRJKaKJ_1711701603248_completion_certificate.pdf"
    },
    {
      title: "NSW Government Digital Simulation",
      issuer: "NSW Government",
      date: "2024",
      description: "Completed a job simulation focused on digital solutions for the NSW Government.",
      content: "Developed communicated policy ideas to reduce data breaches. Identified customer requirements for an End of Life Journey service offering.",
      verificationLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/NSW%20Government/cyvjFvbkyoWcsFNhM_NSW%20Government_zP8hQLEsvTuRJKaKJ_1711659992122_completion_certificate.pdf"
    }
  ];

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light primary-text mb-4">
            Certifications
          </h2>
          <p className="text-xl font-light primary-text">
          Professional development and completed courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(191,195,201,0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)'
              }}
            >
                              <div className="flex items-start space-x-4">
                  {cert.issuer === "HackerRank" ? (
                    <img
                      src="/kenny_website/logos/hackerrank.png"
                      alt="HackerRank Logo"
                      width={32}
                      height={32}
                      style={{ objectFit: 'contain', borderRadius: '8px', paddingTop: '4px' }}
                    />
                  ) : cert.issuer === "Codecademy" ? (
                    <img
                      src="/kenny_website/logos/codecademy.png"
                      alt="Codecademy Logo"
                      width={32}
                      height={32}
                      style={{ objectFit: 'contain', borderRadius: '8px', paddingTop: '4px' }}
                    />
                  ) : cert.issuer === "Lyft" ? (
                    <img
                      src="/kenny_website/logos/lyft.png"
                      alt="Lyft Logo"
                      width={32}
                      height={32}
                      style={{ objectFit: 'contain', borderRadius: '8px', paddingTop: '4px' }}
                    />
                  ) : cert.issuer === "NSW Government" ? (
                    <img
                      src="/kenny_website/logos/nsw-government.png"
                      alt="NSW Government Logo"
                      width={32}
                      height={32}
                      style={{ objectFit: 'contain', borderRadius: '8px', paddingTop: '4px' }}
                    />
                  ) : (
                    <Award size={32} className="primary-text" style={{ paddingTop: '4px' }} />
                  )}
                
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold primary-text text-lg">
                        {cert.title}
                      </h3>
                      <p className="primary-text font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm primary-text opacity-70">{cert.date}</span>
                      {cert.verificationLink && (
                        <a
                          href={cert.verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-md hover:bg-[rgba(191,195,201,0.12)] transition-colors flex items-center justify-center"
                          title="Verify Certificate"
                        >
                          <ExternalLink size={16} className="primary-text" />
                        </a>
                      )}
                    </div>
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

export default Certifications;