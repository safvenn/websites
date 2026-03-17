import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollegeLogos from './components/CollegeLogos';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import EnquiryModal from './components/EnquiryModal';

function App() {
  return (
    <div className="min-h-screen bg-odc-light text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CollegeLogos />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <EnquiryModal />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
