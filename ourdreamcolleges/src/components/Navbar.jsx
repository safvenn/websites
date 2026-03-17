import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      // Hide if scrolling down past 100px, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center justify-center overflow-hidden bg-white rounded-full h-12 w-12 shadow-sm drop-shadow-md">
              <img src="/logo.png" alt="Our Dream Colleges Logo" className="h-full w-full object-cover scale-125" />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-xl leading-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                OUR DREAM COLLEGES
              </span>
              <span className={`text-[10px] uppercase tracking-wider font-semibold ${isScrolled ? 'text-odc-secondary' : 'text-gray-200'}`}>
                Bridging Dreams to Degrees
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-colors hover:text-odc-accent ${isScrolled ? 'text-gray-700' : 'text-gray-100'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 shadow-md ${
                isScrolled 
                ? 'bg-odc-accent text-odc-primary hover:bg-[#15aabf]' 
                : 'bg-odc-accent text-odc-primary hover:bg-[#15aabf]'
              }`}
            >
              <Phone size={16} />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-800 font-medium w-full text-center py-2 hover:bg-gray-50 hover:text-odc-primary"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:8075089133"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-odc-primary text-white font-semibold"
          >
            <Phone size={18} />
            <span>Call Us Now</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
