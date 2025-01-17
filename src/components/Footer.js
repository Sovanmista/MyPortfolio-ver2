import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  const navigation = {
    solutions: [
      { name: 'Front-End Development', href: '#' },
      { name: 'Website Design', href: '#' },
      { name: 'Fullstack Development', href: '#' },
     
    ],
  
   
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://en-gb.facebook.com/people/Susovan-Mishra/pfbid02Xq9yNmTPbrFVPzQcXDhyDj2DuiUcJXLxHJWtK3m2JMu7Vb2Fa3GPaQzeq9NS1gSkl/' },
    
    { icon: Instagram, href: 'https://instagram.com/susovan_mishra_/' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/susovan-mishra-ab6998248/' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'susovanmishra0900@gmail.com', href: 'mailto:susovanmishra@gmail.com' },
    { icon: Phone, text: '+91 8972683565', href: 'tel:+08972683565' },
    { icon: MapPin, text: 'Garhbeta, Paschim Medinipur, West Bengal, 721127', href: '#' },
  ];

  return (
    <footer  className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div id='contacts' className="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-8 pb-12">
          {/* Company Info Section */}
          <div className="lg:col-span-2 ">
            <h2 className="text-white text-lg font-semibold mb-4">Susovan Mishra</h2>
            <p className="text-gray-400 mb-4">
              Learn, Implement, Grow, Repeat..
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(navigation).map(([title, items], index) => (
            <div key={title}>
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Susovan Mishra. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target='_blank'
                className="text-gray-400 hover:text-white transition-colors"
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;