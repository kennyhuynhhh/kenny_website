import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "Vice-Chancellor's List",
      organization: "Curtin University",
      issuer: "Professor Harlene Hayne, Vice-Chancellor",
      date: "Feb 2025",
      description: "Attained membership of the Vice-Chancellor's List in the 3rd year of my degree, awarded to the top 1% of students in the course (94.25% SWA)",
      type: "academic-excellence"
    },
    {
      title: "Toussaint & Richardson Scholarship",
      organization: "Curtin University",
      issuer: "Ron Toussaint and David Richardson",
      date: "May 2023",
      description: "Recipient of the Toussaint & Richardson Scholarship awarded on the basis of academic excellence (90.75% CWA)",
      type: "scholarship"
    },
    {
      title: "5x Recognition of Academic Achievement - Letter of Commendation",
      organization: "Curtin University",
      issuer: "Vishnu Pareek, Dean of Engineering",
      date: "2022-2024",
      description: "The Faculty of Science and Engineering commends me for my academic performance in my units for semester 2 in 2022, and semesters 1 & 2 in 2023 and 2024.",
      type: "academic-recognition"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'academic-excellence':
        return <Trophy size={20} className="text-yellow-500" />;
      case 'scholarship':
        return <Star size={20} className="text-blue-500" />;
      case 'academic-recognition':
        return <Award size={20} className="text-green-500" />;
      default:
        return <Trophy size={20} className="text-green-600" />;
    }
  };

  return (
    <section id="awards" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light primary-text mb-4">
            Awards
          </h2>
          <p className="text-xl font-light primary-text">
            Academic recognition and achievements
          </p>
        </div>

        <div className="space-y-6">
          {awards.map((award, index) => (
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
                  <img
                    src="/kenny_website/logos/curtin.jpeg"
                    alt="Curtin University Logo"
                    width={32}
                    height={32}
                    style={{ objectFit: 'contain', borderRadius: '8px', paddingTop: '4px' }}
                  />
                
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold primary-text">
                        {award.title}
                      </h3>
                      <p className="primary-text font-medium">
                        {award.organization}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm primary-text opacity-70">{award.date}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="primary-text text-sm opacity-80">
                      <span className="font-medium">Issued by:</span> {award.issuer}
                    </p>
                    <p className="primary-text leading-relaxed">
                      {award.description}
                    </p>
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

export default Awards;