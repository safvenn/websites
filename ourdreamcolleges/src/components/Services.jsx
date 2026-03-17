import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Monitor, Palette, Plane, Compass } from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      title: 'Medical Admissions',
      description: 'Comprehensive guidance for MBBS, BDS, BAMS, BHMS, and other allied health science courses in top institutions.',
      icon: <Stethoscope size={40} className="text-odc-primary" />,
      color: 'bg-green-50'
    },
    {
      title: 'Engineering Admissions',
      description: 'Expert counselling for B.Tech/BE programs in premier engineering colleges across various specializations.',
      icon: <Monitor size={40} className="text-odc-accent" />,
      color: 'bg-cyan-50'
    },
    {
      title: 'Arts & Science',
      description: 'Find the perfect fit for B.Sc, B.A, B.Com, BBA, and specialized degree programs to match your career goals.',
      icon: <Palette size={40} className="text-purple-600" />,
      color: 'bg-purple-50'
    },
    {
      title: 'Study Abroad & Visa',
      description: 'End-to-end support for international universities including application, test prep, and visa processing guidance.',
      icon: <Plane size={40} className="text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Career Counselling',
      description: 'Uncertain about your future? Our experts help identify your strengths and map out a successful career trajectory.',
      icon: <Compass size={40} className="text-orange-500" />,
      color: 'bg-orange-50'
    }
  ];

  return (
    <section id="services" className="py-24 bg-odc-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-0.5 w-8 bg-odc-accent"></span>
            <span className="text-odc-secondary font-bold tracking-wider uppercase text-sm">What We Offer</span>
            <span className="h-0.5 w-8 bg-odc-accent"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6"
          >
            Our Educational Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            From choosing the right course to securing admission and organizing your visa, we provide personalized support every step of the way.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a href="#contact" className="text-odc-primary font-bold inline-flex items-center hover:text-odc-accent transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
