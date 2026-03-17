import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
  const branches = [
    { city: 'Palakkad (Head Office)', address: 'Madhava Arcade, QM63 9WQ, West Fort Road, Palat Junction, Kenathuparambu, Kunathurmedu, 678001' },
    { city: 'Mannarkkad', address: 'Main Road, Mannarkkad City Center, Near Bus Stand' },
    { city: 'Pattambi', address: 'Pattambi Town Square, Phase 2 Commercial Building' },
    { city: 'Bangalore', address: 'Koramangala 5th Block, Bangalore, Karnataka' }
  ];

  return (
    <footer id="contact" className="bg-odc-dark text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center overflow-hidden bg-white rounded-full h-16 w-16 shadow-lg shadow-black/20">
                <img src="/logo.png" alt="Our Dream Colleges Logo" className="h-full w-full object-cover scale-125" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white leading-tight">
                  OUR DREAM<br/>COLLEGES
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 italic leading-relaxed">
              "Education is not a business. We do it as a service."
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/dreameducationservice/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Medical Admissions', 'Engineering Admissions', 'Study Abroad', 'Gallery'].map((link, idx) => (
                <li key={idx}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-odc-accent transition-colors flex items-center gap-2">
                    <ArrowRight size={14} className="text-odc-primary" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-odc-accent shrink-0 mt-1" size={20} />
                <div>
                  <a href="tel:8075089133" className="block hover:text-white transition-colors font-semibold text-lg">80750 89133</a>
                  <span className="text-sm text-gray-500">Mon - Sun: 9:00 AM - 5:00 PM</span>
                </div>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <Mail className="text-odc-accent shrink-0" size={20} />
                <a href="mailto:info@ourdreamcolleges.in" className="hover:text-white transition-colors">info@ourdreamcolleges.in</a>
              </li>
            </ul>
          </div>

          {/* Branch Locations */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <MapPin className="text-odc-primary" size={20} /> Our Branches
            </h4>
            <div className="space-y-5">
              {branches.map((branch, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-gray-800 hover:border-odc-accent transition-colors">
                  <h5 className="text-white font-semibold text-sm">{branch.city}</h5>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{branch.address}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Our Dream Colleges. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
