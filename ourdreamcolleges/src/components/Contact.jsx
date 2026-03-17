import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-odc-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-odc-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-1 w-8 bg-odc-accent rounded-full"></span>
            <span className="text-odc-primary font-bold uppercase tracking-wider text-sm">Get In Touch</span>
            <span className="h-1 w-8 bg-odc-accent rounded-full"></span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-odc-dark font-heading mb-4 sm:mb-6"
          >
            Start Your Journey With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have questions about admissions, courses, or study abroad options? Send us a message and our expert counselors will get back to you shortly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left items-start">
          
          {/* Contact Info Widget */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 bg-odc-primary rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden h-full flex flex-col justify-between"
          >
            {/* Widget Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold mb-8">Contact Information</h3>
              <ul className="space-y-8">
                <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                  <div className="mt-1 p-3 bg-white/10 rounded-full flex-shrink-0">
                    <Phone size={24} className="text-odc-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-300 text-sm uppercase tracking-wider mb-1">Call Us</h4>
                    <p className="text-xl">+91 80750 89133</p>
                  </div>
                </li>
                <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                  <div className="mt-1 p-3 bg-white/10 rounded-full flex-shrink-0">
                    <Mail size={24} className="text-odc-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-300 text-sm uppercase tracking-wider mb-1">Email Us</h4>
                    <p className="text-lg lg:text-base xl:text-lg text-gray-100">info@ourdreamcolleges.in</p>
                  </div>
                </li>
                <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                  <div className="mt-1 p-3 bg-white/10 rounded-full flex-shrink-0">
                    <MapPin size={24} className="text-odc-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-300 text-sm uppercase tracking-wider mb-1">Head Office</h4>
                    <p className="text-gray-100 leading-relaxed">
                      Madhava Arcade<br />
                      Palakkad, Kerala
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-gray-300 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                We are currently open for counseling
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-odc-accent focus:border-odc-accent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-odc-accent focus:border-odc-accent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-odc-accent focus:border-odc-accent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help you?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-odc-accent focus:border-odc-accent outline-none transition-all resize-none"
                  placeholder="Tell us about your educational goals..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                    submitStatus === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-odc-primary text-white hover:bg-odc-secondary hover:-translate-y-1 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : submitStatus === 'success' ? (
                    'Message Sent Successfully!'
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="ml-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
