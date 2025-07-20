import React from 'react';
import { Trophy, Star } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "Best Innovation Award",
      organization: "Tech Conference 2023",
      description: "Recognized for developing an innovative solution that improved user engagement by 150%",
      year: "2023",
      type: "innovation"
    },
    {
      title: "Employee of the Year",
      organization: "Current Company",
      description: "Outstanding performance and leadership in delivering high-quality projects",
      year: "2022",
      type: "performance"
    },
    {
      title: "Hackathon Winner",
      organization: "Global Developer Challenge",
      description: "First place winner for building a sustainable tech solution in 48 hours",
      year: "2022",
      type: "competition"
    },
    {
      title: "Community Contributor",
      organization: "Open Source Foundation",
      description: "Recognized for significant contributions to open source projects",
      year: "2021",
      type: "community"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'innovation':
        return <Star size={20} className="text-yellow-600" />;
      case 'competition':
        return <Trophy size={20} className="text-blue-600" />;
      default:
        return <Trophy size={20} className="text-green-600" />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case 'innovation':
        return 'bg-yellow-100 group-hover:bg-yellow-200';
      case 'competition':
        return 'bg-blue-100 group-hover:bg-blue-200';
      default:
        return 'bg-green-100 group-hover:bg-green-200';
    }
  };

  return (
    <section id="awards" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Awards
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Recognition for excellence and innovation in technology
          </p>
        </div>

        <div className="space-y-6">
          {awards.map((award, index) => (
            <div key={index} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg transition-colors duration-200 ${getIconBg(award.type)}`}>
                  {getIcon(award.type)}
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {award.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                  </div>
                  
                  <p className="text-blue-600 font-medium">
                    {award.organization}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {award.description}
                  </p>
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