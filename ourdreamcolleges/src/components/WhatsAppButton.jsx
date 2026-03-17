import React from 'react';
import { motion } from 'framer-motion';

// SVG Icon for WhatsApp
const WhatsAppIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="text-white"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const WhatsAppButton = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2 group cursor-pointer"
    >
      {/* Tooltip that shows on hover */}
      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-lg shadow-lg whitespace-nowrap">
          Chat with us!
        </div>
        {/* Little triangle pointing down */}
        <div className="w-3 h-3 bg-white rotate-45 mx-auto -mt-2 shadow-sm"></div>
      </div>

      <a 
        href="https://wa.me/918075089133" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-xl hover:bg-[#128C7E] transition-colors duration-300 hover:scale-105"
      >
        <WhatsAppIcon />
        
        {/* Pulsing rings animation */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
