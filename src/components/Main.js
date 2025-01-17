import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import * as motion from "motion/react-client";
import Photo from "../Assets/WhatsApp Image 2025-01-14 at 8.07.47 PM.jpeg";
import { FileDown } from "lucide-react";
import Resume from "../Assets/Susovan Mishra RESUME TYPE2 (3) version 666.pdf";

 
const Portfolio = () => {
    const ball = {
        width: 350,
        height: 350,
        borderRadius: "50%",
        overflow: "hidden", // Ensures the image stays within the circular boundary
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "300px",
      };

  const projects = [
    { title: "AWS Solution to any billing and get needs", date: "Jan 2024" },
    { title: "Professional Data Engineer", date: "Jan 2024" },
    { title: "Machine Learning Specialization", date: "Jan 2024" },
    { title: "React Developer Certification", date: "Jan 2024" }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "College of Engineering and Management, Kolaghat",
      location: "Kolkata, West bengal",
      period: "2021-2024"
    },
    {
      degree: "Higher Secondary Education",
      school: "Garhbeta Ramsundar Institution",
      location: "Garhbeta, Paschim Medinipur, 721127",
      period: "2018-2020"
    },
    {
      degree: "Secondary Education",
      school: "Garhbeta High School",
      location: "Garhbeta, Paschim Medinipur, 721127",
      period: "2013-2018"
    }
  ];

  const certificates = [
    { title: "AWS Certified Solutions Architect", date: "Jan 24, 2024", issuer: "Amazon Web Services" },
    { title: "Professional Data Engineer", date: "Jan 24, 2024", issuer: "Google Cloud" },
    { title: "Machine Learning Specialization", date: "Jan 24, 2024", issuer: "Stanford University" },
    { title: "React Developer Certification", date: "Jan 24, 2024", issuer: "Meta" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header Section */}
      <div style={{ height: "100vh" }} className="mx-auto  py-24 bg-gray-900">
        <div
          style={{ height: "80vh" }}
          className="relative justify-between isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
        >
          
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Hi, I'm <span className="text-yellow-300">Susovan Mishra</span>
            </h>
            <h2 className="mt-6 text-pretty text-lg/8 text-gray-300">
              I'm a Full-stack Developer, Web Designer, Programmer
            </h2>

            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
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
              <a href="#" className="text-sm/6 font-semibold text-white">
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
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.8 }}
            >
              <img
                src={Photo} // Directly reference the imported image
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  // Ensures the image scales properly
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-yellow-400">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.date}</p>
              <ArrowUpRight className="mt-4 text-yellow-400" />
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-yellow-400">Educational Journey</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-gray-300">{edu.school}</p>
              <p className="text-gray-400">{edu.location}</p>
              <p className="text-yellow-400 mt-2">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-yellow-400">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-300">{cert.issuer}</p>
              <p className="text-yellow-400 mt-2">{cert.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-yellow-400">Contact sales</h2>
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-6 border border-gray-700">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 rounded-md p-2 border border-gray-600 focus:border-yellow-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 rounded-md p-2 border border-gray-600 focus:border-yellow-400 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <input 
                type="text" 
                className="w-full bg-gray-700 rounded-md p-2 border border-gray-600 focus:border-yellow-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-gray-700 rounded-md p-2 border border-gray-600 focus:border-yellow-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone number</label>
              <input 
                type="tel" 
                className="w-full bg-gray-700 rounded-md p-2 border border-gray-600 focus:border-yellow-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                className="w-full bg-gray-700 rounded-md p-2 h-32 border border-gray-600 focus:border-yellow-400 focus:outline-none"
              ></textarea>
            </div>
            <button className="w-full bg-yellow-400 text-black py-2 rounded-md hover:bg-yellow-300 transition-colors">
              Get started
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Susovan Mishra</h3>
              <p className="text-gray-400">Making the world a better place through constructing elegant hierarchies.</p>
              <p className="text-gray-400">susovan.mishra@gmail.com</p>
              <p className="text-gray-400">+91 987654321</p>
              <p className="text-gray-400">Garhbeta, Paschim Medinipur, West Bengal, 721127</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div className="text-center text-gray-400 mt-8">
            © 2024 Susovan Mishra. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;