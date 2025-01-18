import React from 'react';
import * as motion from 'motion/react-client';
import Photo from '../Assets/WhatsApp Image 2025-01-14 at 8.07.47 PM-fotor-20250117185835.png';
import { FileDown } from 'lucide-react';
import Resume from '../Assets/Susovan Mishra RESUME TYPE2 (3) version 666.pdf';
import Tilt from './Tilt';
import ParticlesBg from 'particles-bg'

export default function Example() {
  const tiltOptions = {
    scale: 0.9,
    speed: 400,
    max: 20,
  };

  const ball = {
    width: 350,
    height: 350,
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '300px',
  };

  return (
    <>
      <div className="bg-white">
     

        <div style={{ height: '100vh' }} className="mx-auto py-24 bg-gray-900 relative">
          {/* Particles Background */}
        
          {/* Main Content */}
          <div
            style={{ height: '80vh' }}
            className="relative justify-between isolate px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
          >
           
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <ParticlesBg color='#deeb34' type="cobweb" bg={true} />
              <h className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Hi, I'm <span className="text-yellow-300">Susovan Mishra</span>
              </h>
              <h2 className="mt-6 text-pretty text-lg/8 text-gray-300">
                I'm a Full-stack Developer, Web Designer, Programmer
              </h2>

              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#contacts"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact Me
                </a>
                <a
                  href={Resume}
                  className="rounded-md bg-yellow-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  download="Susovan_Resume.pdf"
                >
                  <FileDown />
                </a>
                <a href="#projects" className="text-sm/6 font-semibold text-white">
                  See my works <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="relative mt-20 h-100 flex-1">
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
                  <img
                    src={Photo}
                    alt="Profile"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Tilt>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
