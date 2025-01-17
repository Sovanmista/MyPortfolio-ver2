import React from 'react';
import { GraduationCap, Calendar, MapPin, Building, Percent } from 'lucide-react';
import { motion } from "framer-motion";

const EducationTimeline = () => {
  const educationHistory = [
    {
      id: 3,
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "College of Engineering and Management, Kolaghat",
      location: "Mecheda, Purba Medinipur",
      period: "2020 - 2024",
      marks: "CGPA: 8.34"
    },
    {
      id: 1,
      degree: "Higher Secondary Education",
      institution: "Garhbeta High School",
      location: "Garhbeta, Paschim Medinipur, 721127",
      period: "2018-2019",
      marks: '69.4%'
    },
    {
      id: 2,
      degree: "Secondary Education",
      institution: "Garhbeta High School",
      location: "Garhbeta, Paschim Medinipur, 721127",
      period: "2016 - 2017",
      marks: '84.7%'
    }
  ];

  return (
    <div  className="relative mx-auto p-20 bg-gray-900 overflow-hidden min-h-screen">
      {/* Background Gradient Circle */}
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 w-[64rem] h-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#gradient)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
        
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-yellow-300 mb-8 text-center relative z-10"
      >
        Educational Journey
      </motion.h2>
      
      <div id='education' className="relative">
        {/* Timeline line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute left-4 md:left-1/2 w-0.5 bg-blue-200 transform -translate-x-1/2"
        />
        
        {educationHistory.map((education, index) => (
          <motion.div
            key={education.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut"
            }}
            className="mb-8 relative"
          >
            <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2 + 0.2,
                  type: "spring",
                  bounce: 0.5
                }}
              >
                <div className="w-3 h-3 bg-white rounded-full transform translate-x-0.5 translate-y-0.5" />
              </motion.div>
              
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} pl-12`}>
                <motion.div 
                  className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-3">
                    <GraduationCap className="w-6 h-6 text-blue-500 mr-2" />
                    <h3 className="text-xl font-bold text-yellow-300">{education.degree}</h3>
                  </div>
                  
                  <div className="flex items-center text-gray-300 mb-2">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{education.institution}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{education.location}</span>
                  </div>

                  <div className="flex items-center text-gray-300 mb-2">
                    <Percent className="w-4 h-4 mr-2" />
                    <span>{education.marks}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{education.period}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;