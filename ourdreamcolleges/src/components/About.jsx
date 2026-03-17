import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, BookOpen, MapPin, Award } from 'lucide-react';

const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  
  const numMatches = value.match(/\d+/);
  const target = numMatches ? parseInt(numMatches[0], 10) : 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView && target > 0) {
      let startTimestamp = null;
      const duration = 2000;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * target));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };

      window.requestAnimationFrame(step);
    } else if (isInView && target === 0) {
      setCount(0);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    { title: 'Successful Placements', value: '500+', icon: <Users size={32} /> },
    { title: 'Partner Universities', value: '50+', icon: <BookOpen size={32} /> },
    { title: 'Countries', value: '15+', icon: <MapPin size={32} /> },
    { title: 'Years Experience', value: '10+', icon: <Award size={32} /> },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-odc-secondary/10 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-odc-accent/10 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          
          {/* Left Column - Content */}
          <div>
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
              <span className="h-0.5 w-8 bg-odc-accent"></span>
              <span className="text-odc-secondary font-bold tracking-wider uppercase text-sm">About Our Institution</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 leading-tight">
              Transforming Ambitions into <span className="text-odc-primary">Achievements</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6 leading-relaxed">
              Located in the heart of Palakkad at Madhava Arcade, <strong>Our Dream Colleges</strong> is a premier educational consultancy. We specialize in providing the best-in-class educational services and career counselling for students across India and abroad.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our guiding philosophy is simple yet profound: <span className="font-semibold text-odc-primary italic">"Education is not a business. We do it as a service."</span> This principle drives our commitment to ensuring every student finds the right path, whether in Medical, Engineering, Arts, or Science streams.
            </motion.p>

            <motion.div variants={itemVariants} className="bg-odc-light p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                <Award className="text-odc-accent" size={24} />
                Proven Track Record
              </h3>
              <p className="text-gray-600">
                We take immense pride in our <strong className="text-odc-primary">100% placement guidance</strong>. Our alumni have successfully secured admissions in top-tier institutions and are pursuing rewarding careers globally. Your success is our reputation.
              </p>
            </motion.div>

          </div>

          {/* Right Column - Stats & Image */}
          <div className="relative">
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                  <div className="text-odc-accent mb-4 p-3 bg-odc-accent/10 rounded-full">
                    {stat.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-1 font-heading">
                    <AnimatedCounter value={stat.value} />
                  </h4>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.title}</p>
                </div>
              ))}
            </motion.div>
            
            {/* Image placeholder with absolute styling for layered effect */}
            <motion.div variants={itemVariants} className="relative h-64 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-odc-primary/20 mix-blend-overlay" />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
