import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Library, Landmark, BookOpen } from 'lucide-react';

const CollegeLogos = () => {
  // Array of famous colleges/universities (mix of Indian and International)
  // Using lucide-react icons to create clean, professional placeholder "logos"
  const colleges = [
    { name: "AIIMS Delhi", type: "Medical", icon: <Building2 className="w-8 h-8 text-odc-accent" /> },
    { name: "IIT Madras", type: "Engineering", icon: <Library className="w-8 h-8 text-odc-primary" /> },
    { name: "Oxford University", type: "Global", icon: <Landmark className="w-8 h-8 text-[#002147]" /> },
    { name: "NIT Calicut", type: "Engineering", icon: <Building2 className="w-8 h-8 text-odc-accent" /> },
    { name: "Harvard University", type: "Global", icon: <BookOpen className="w-8 h-8 text-[#A51C30]" /> },
    { name: "CMC Vellore", type: "Medical", icon: <GraduationCap className="w-8 h-8 text-odc-primary" /> },
    { name: "Cambridge University", type: "Global", icon: <Landmark className="w-8 h-8 text-[#A3C1AD]" /> },
    { name: "NIMHANS Bangalore", type: "Medical", icon: <Building2 className="w-8 h-8 text-odc-accent" /> },
    { name: "Stanford University", type: "Global", icon: <Library className="w-8 h-8 text-[#8C1515]" /> },
    { name: "IIM Ahmedabad", type: "Management", icon: <BookOpen className="w-8 h-8 text-odc-primary" /> },
  ];

  // We duplicate the array to create a seamless infinite loop
  const duplicatedColleges = [...colleges, ...colleges];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Securing placements in top institutions worldwide
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Left gradient mask for smooth fade in */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* The Marquee Container */}
        <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused] items-center">
          {duplicatedColleges.map((college, index) => (
            <div 
              key={index} 
              className="flex-1 flex flex-col items-center justify-center min-w-[200px] md:min-w-[250px] gap-3 px-8 border-r border-gray-100 last:border-0 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              <div className="p-4 bg-gray-50 rounded-2xl shadow-sm">
                {college.icon}
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-800 font-heading whitespace-nowrap">{college.name}</h4>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{college.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right gradient mask for smooth fade out */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default CollegeLogos;
