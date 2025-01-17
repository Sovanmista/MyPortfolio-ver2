import React, { useState } from 'react';
import { Medal, Calendar, ExternalLink, Search, Tag } from 'lucide-react';
import Tilt from "./Tilt";
import Meta from '../Assets/Screenshot 2025-01-17 164231.png'
import Ardent from '../Assets/Screenshot 2025-01-17 164447.png'
import tcs from '../Assets/Screenshot 2025-01-17 164619.png'
const CertificatesSection = () => {
  const tiltOptions = {
    scale: 0.9,
    speed: 400,
    max: 20,
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const certificates = [
    {
      id: 1,
      name: "Fullstack developer crtification",
      organization: "Ardent Computech Pvt Ltd",
      issueDate: "2022",
      expiryDate: "Dec 2026",
      category: "Cloud Computing",
      credentialId: "AWS-123456",
      image: Ardent,
    },
    {
      id: 2,
      name: "Frontend developer capstone",
      organization: "META",
      issueDate: "Jan 2025",
      expiryDate: "Nov 2025",
      category: "Data Engineering",
      credentialId: "GCP-789012",
      image: Meta,
    },
    {
      id: 3,
      name: "Codevita Rank Certificate",
      organization: "Tata Consutensy Services",
      issueDate: "Mar 2024",
      expiryDate: null,
      category: "AI/ML",
      credentialId: "STF-345678",
      image: tcs,
    }
  ];

  const categories = ['All', ...new Set(certificates.map(cert => cert.category))];

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id='certificates' className=" bg-gray-900 mx-auto p-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">My Certificates</h2>
        <p className="text-gray-400">Professional certifications and achievements</p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
        
        
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map(certificate => (
           <Tilt options={tiltOptions}>
          <div key={certificate.id} className="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="relative ">
              <img
              // style={{ height:"50vh"}}
                src={certificate.image}
                alt={certificate.name}
                className="w-full max-h-50 h-50 object-cover rounded-t-xl"
              />
              
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">{certificate.name}</h3>
                  <p className="text-white text-opacity-80 flex items-center">
                    <Medal className="h-4 w-4 mr-2" />
                    {certificate.organization}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-300 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Issued: {certificate.issueDate}</span>
                
              </div>

             
            </div>
          </div>
          </Tilt>
        ))}
      </div>

      {filteredCertificates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No certificates found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CertificatesSection;