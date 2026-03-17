import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const EnquiryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    message: ''
  });

  // Auto open the modal after a few seconds when the website loads
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpened) {
        setIsOpen(true);
        setHasOpened(true);
      }
    }, 3000); // 3 seconds delay for better user experience

    return () => clearTimeout(timer);
  }, [hasOpened]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Construct the WhatsApp message text
    const text = `Hi, I am ${formData.name}.
I am interested in: ${formData.course}

Message: 
${formData.message}

Please contact me. Thank you!`;

    // Encode the URI for safety
    const encodedText = encodeURIComponent(text);
    
    // Hardcoded phone number from user prompt
    const phoneNumber = "918075089133";
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    
    // Close the popup after clicking send
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              // Exit animation flies it down to the bottom right corner (where the WA button is)
              exit={{ 
                opacity: 0, 
                scale: 0.1, 
                y: window.innerHeight / 2 - 80, 
                x: window.innerWidth / 2 - 80 
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-odc-primary p-6 relative">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
                <h3 className="text-2xl font-bold font-heading text-white mb-2">Quick Enquiry</h3>
                <p className="text-odc-light/90 text-sm">
                  Fill this out and we'll connect with you instantly on WhatsApp!
                </p>
              </div>

              {/* Form Body */}
              <div className="p-6 sm:p-8 bg-gray-50">
                <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Full Name *"
                      className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-odc-accent focus:border-odc-accent outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-odc-accent focus:border-odc-accent outline-none transition-all text-gray-700 bg-white shadow-sm"
                    >
                      <option value="" disabled>Select Program of Interest *</option>
                      <option value="Medical Admission">Medical Admission</option>
                      <option value="Engineering Admission">Engineering Admission</option>
                      <option value="Study Abroad">Study Abroad</option>
                      <option value="Arts & Science">Arts & Science</option>
                      <option value="General Career Counseling">General Career Counseling</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="3"
                      placeholder="How can we help you? *"
                      className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-odc-accent focus:border-odc-accent outline-none transition-all resize-none shadow-sm"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <Send size={20} />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
