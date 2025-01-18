import React, { useState } from "react";
import { Medal, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ParticlesBg from "particles-bg";
import Billit from "../Assets/screencapture-billit-8omd-vercel-app-2025-01-13-22_24_51.png";
import DineNow from "../Assets/screencapture-strong-concha-7b3c83-netlify-app-2025-01-17-15_47_30.png";
import Weather from "../Assets/Screenshot 2025-01-17 154930.png";
import SkillSwap from "../Assets/screencapture-skillswap-ver-1-netlify-app-2025-01-17-15_52_30.png";
import Dashboard from "../Assets/screencapture-glittery-sprinkles-227e0b-netlify-app-2025-01-17-15_55_27.png";
import Portfolio from "../Assets/Screenshot 2025-01-17 160028.png";

const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      name: "billit-solution to our billing and gst needs",
      issueDate: "Jan 2023",
      expiryDate: "Present",
      category: "Cloud Computing",
      credentialId: "AWS-123456",
      description:
        "Billit is a business management web application inspired by Vyapar, designed to meet the billing and GST needs of small to medium-sized enterprises (SMEs). Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), the platform offers features like inventory tracking, invoicing, expense management, and GST filing. It provides a responsive and scalable solution tailored to streamline financial operations for businesses. With a focus on user-centric design, Billit ensures an efficient and intuitive experience while addressing specific business requirements through close collaboration with clients.",
      image: Billit,
      live:"https://billit-8omd.vercel.app/",
      github:"https://github.com/Sovanmista/billit"
    },
    {
      id: 2,
      name: "DineNow-fullstack resturent ordering service",
      issueDate: "Oct 2024",
      expiryDate: "Nov 2024",
      category: "Data Engineering",
      credentialId: "GCP-789012",
      description:
        "DineNow is a modern food delivery application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It offers a seamless food ordering experience with a responsive and intuitive user interface. Users can explore a dynamic food menu featuring detailed descriptions and images, manage their carts efficiently, and place orders with ease. The platform includes a robust backend to ensure smooth data flow and real-time updates, while MongoDB handles data storage and management effectively. Designed with scalability in mind, DineNow is a comprehensive solution for enhancing the food delivery experience for both customers and businesses.",
      image: DineNow,
      live:"https://strong-concha-7b3c83.netlify.app/",
      github:"https://github.com/Sovanmista/DineNow"
    },
    {
      id: 3,
      name: "Live Weather App",
      issueDate: "Sept 2022",
      expiryDate: "Oct 2022",
      category: "AI/ML",
      credentialId: "STF-345678",
      description:
        "WeatherNow is a sleek and responsive weather application built using HTML, CSS, and JavaScript. The app allows users to search for any city and instantly view real-time weather conditions, including temperature and overall forecast. Powered by a reliable weather API, it delivers accurate and up-to-date data with a simple and intuitive interface. Designed with user experience in mind, WeatherNow combines functionality and aesthetics to provide an efficient way to stay informed about the weather, anytime and anywhere.",
      image: Weather,
      live:"https://harmonious-licorice-84c384.netlify.app/",
      github:"https://github.com/Sovanmista/Weatherapp"
    },
    {
      id: 4,
      name: "SkillSwap- skil sharing platform",
      issueDate: "Dec 2024",

      category: "AI/ML",
      credentialId: "STF-345678",
      description:
        "The frontend of SkillSwap is designed with a clean, user-friendly interface that prioritizes seamless interaction and an intuitive user experience. Built using React.js, it provides a dynamic and responsive layout that adapts perfectly to different screen sizes. The platform features a sleek homepage with easy navigation to explore various skills and user profiles. A comprehensive search and filter system allows users to quickly find the skills they are looking for based on categories or specific criteria. The skill posting and profile creation process is simplified with interactive forms. Users can easily connect via real-time chat and video call features, enhancing the collaboration experience. The design is modern and minimalistic, making it easy for users to engage with the platform while maintaining a smooth and consistent experience across devices.",
      image: SkillSwap,
      live:"https://skillswap-ver-1.netlify.app/",
     
    },
    {
      id: 5,
      name: "Attendance Dashboard",
      issueDate: "Oct 2024",

      category: "AI/ML",
      credentialId: "STF-345678",
      description:
        "Minimal and glassmorphic dashboard design",
      image: Dashboard,
      live:"https://glittery-sprinkles-227e0b.netlify.app/",
      github:"https://github.com/Sovanmista/Durga-assignment"
    },
    {
      id: 6,
      name: "Personal Portfolio Website",
      issueDate: "Dec 2024",

      category: "AI/ML",
      credentialId: "STF-345678",
      description:
        "The frontend of my previous portfolio website was designed to be clean and simple, focusing on showcasing my skills and projects in a visually appealing yet minimalistic manner. Built with React.js and styled using Bootstrap, the layout was responsive, ensuring it provided an optimal viewing experience across different devices. The homepage featured an introductory section, followed by detailed sections for my projects, skills, and a brief about me. I incorporated interactive elements such as hover effects and smooth transitions, which added to the user experience without overwhelming the design. The website also included a contact form and links to my social media profiles, allowing visitors to easily connect with me. Overall, the design aimed to keep things straightforward while making it easy for potential clients and employers to view my work and get in touch.",
      image: Portfolio,
      live:"https://susovanmishra-portfolio.netlify.app/",
      github:"https://github.com/Sovanmista/MyPortfolio"
    },
  ];

  return (
    <div id="projects" className="bg-gray-900 mx-auto py-10 px-4 sm:px-6 lg:px-20">
       
      <div className="text-center mb-12">
      
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-300 mb-6"
        >
          My Projects
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="bg-gray-800 bg-opacity-90 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="relative">
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mb-2">
                  {certificate.name}
                </h3>
                <div className="flex items-center text-sm text-white mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{certificate.issueDate}</span>
                  {certificate.expiryDate && <span className="ml-2">- {certificate.expiryDate}</span>}
                </div>
                <p className="text-white text-left text-opacity-85 mb-6">{certificate.description}</p>
                <div className="mt-auto flex items-center justify-between space-x-4">
                  <a
                    href={certificate.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-yellow-300 text-opacity-80 hover:text-yellow-500 transition-colors"
                  >
                    <span className="mr-1">Live Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={certificate.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-yellow-300 text-opacity-80 hover:text-yellow-500 transition-colors"
                  >
                    <span className="mr-1">GitHub</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;
