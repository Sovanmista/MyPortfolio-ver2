import React from 'react';
import { FileDown } from 'lucide-react';
import Tilt from './Tilt';
import * as motion from 'motion/react-client';
import ParticlesBg from 'particles-bg';
import Resume from '../Assets/Susovan Mishra RESUME TYPE2 (3) version 666.pdf';
import Photo from '../Assets/WhatsApp Image 2025-01-14 at 8.07.47 PM-fotor-20250117185835.png';
export default function Example() {
  const tiltOptions = {
    scale: 0.9,
    speed: 400,
    max: 20,
  };

  const ball = {
    
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  };



  return (
    <>
      <div className="bg-white">
      
        <div className="min-h-screen bg-gray-900 relative py-12  lg:py-24">
          {/* Main Content */}
          <div className="isolate  sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:gap-x-20  ">
          <ParticlesBg color="#deeb34" type="cobweb" bg={true} />
            
            {/* Text Content */}
            <div className="w-full px-20 pt-12 lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Hi, I'm <span className="text-yellow-300">Susovan Mishra</span>
              </h1>
              <h2 className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300">
                I'm a Full-stack Developer, Web Designer, Programmer
              </h2>

              {/* Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#contacts"
               
                  className="w-full sm:w-auto rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact Me
                </a>
                <a
                  href={Resume}
                     download="Susovan_Resume.pdf"
                  className="w-full sm:w-auto rounded-md bg-yellow-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center justify-center gap-2"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>
                <a 
                  href="#projects" 
                  className="w-full sm:w-auto text-sm font-semibold text-white text-center"
                >
                  See my works <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="w-full lg:w-1/2 mt-12 pt-12 lg:mt-0 flex justify-center items-center">
              <div 
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative"
                style={{
                  maxWidth: '100%',
                  aspectRatio: '1/1'
                }}
              >
                  <motion.div
                style={ball}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.8 }}
              >
                <Tilt options={tiltOptions}>
                  <div className="rounded-full overflow-hidden">
                    <img
                      src={Photo}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Tilt>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}