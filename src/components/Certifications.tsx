import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-ASA-2023-001"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-2022-045"
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-FE-2022-789"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      credentialId: "CNCF-CKA-2021-567"
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
            Professional credentials that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="group p-6 secondary-bg rounded-xl hover:primary-bg hover:primary-text hover:shadow-md transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className="p-2 primary-bg rounded-lg transition-colors duration-200">
                  <Award size={20} className="primary-text" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold primary-text">
                    {cert.title}
                  </h3>
                  <p className="primary-text font-medium">
                    {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center text-sm primary-text">
                    <span>{cert.date}</span>
                    <span className="font-mono">{cert.credentialId}</span>
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