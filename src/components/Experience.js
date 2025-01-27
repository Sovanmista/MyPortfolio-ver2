import React from 'react'
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";
function Experience() {
    const experiences = [
        {
          title: "Full-stack Developer Intern",
          company: "TastEzy marketplace llp",
          duration: "jan 2025 - Present",
          description: "Working on a food e-commerce website called TastEzy with a team of 10-12 employees.",
          link: "https://tastezy.in"
        }
      ];
  return (
    <div>
      <div className="px-8 md:px-20  py-20 bg-gray-800">
         <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-yellow-300 mb-8 text-center relative z-10"
              >  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#FFD700]">Experience</h2></motion.h2>
      
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-[#FFD700]">
              <div className="absolute -left-[9px] top-0">
                <div className="w-4 h-4 rounded-full bg-[#FFD700]" />
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-2 text-[#FFD700] mb-1">
                  <Briefcase size={18} />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </div>
                <a 
                  href={exp.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#FFD700] transition-colors"
                >
                  {exp.company}
                  <ExternalLink size={14} />
                </a>
              </div>
              <p className="text-gray-400 text-left">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
