import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle, GraduationCap } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Images and Overlays */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <div 
          className="absolute inset-0 w-full h-full bg-[url('/hero-student-bg.png')] bg-cover bg-left md:bg-right lg:bg-right-top bg-no-repeat"
        />
        {/* Gradient Overlays matching brand colors */}
        <div className="absolute inset-0 bg-odc-dark/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-odc-primary/95 via-odc-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-odc-dark pb-32 opacity-80" />
      </motion.div>



      {/* Hero Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-[calc(100vh-80px)] flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full mt-20">
          <div className="max-w-3xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-1 w-12 bg-odc-accent rounded-full"></span>
            <span className="text-odc-accent uppercase tracking-widest font-semibold text-sm">Best Educational Service</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight font-heading mb-4 sm:mb-6"
          >
            Bridging Dreams <br />
            To <span className="text-transparent bg-clip-text bg-gradient-to-r from-odc-accent to-[#7bedfa]">Degrees</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mb-8 sm:mb-10 leading-relaxed border-l-4 border-odc-secondary pl-4 py-1"
          >
            "EDUCATION IS NOT A BUSINESS.<br />
            WE DO IT AS A SERVICE."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <a 
              href="#services"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-odc-accent hover:bg-[#15aabf] text-gray-900 font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(29,196,217,0.7)] flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base"
            >
              Explore Services
              <ArrowRight size={20} />
            </a>
            
            <a 
              href="https://wa.me/918075089133"
              target="_blank"
              rel="noreferrer"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:border-odc-accent group w-full sm:w-auto text-sm sm:text-base"
            >
              <MessageCircle size={20} className="text-[#25D366] group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden lg:flex justify-end relative h-[500px] xl:h-[650px] w-full"
        >
          <img 
            src="/hero-student.png" 
            alt="Student holding notebooks" 
            className="object-contain h-full z-10 drop-shadow-2xl"
          />
          {/* Decorative glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-odc-accent/30 rounded-full blur-[80px] z-0 pointer-events-none"></div>
        </motion.div>
        
        </div>
      </motion.div>


    </section>
  );
};

export default Hero;
