import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaWhatsapp } from 'react-icons/fa';

// Floating WhatsApp button
function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919711459192?text=Hi%20Rishabh!%20I%20want%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white shadow-xl shadow-green-500/30"
      style={{
        background: 'linear-gradient(135deg, #30d158, #00c44a)',
        boxShadow: '0 0 30px rgba(48,209,88,0.4)',
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaWhatsapp />
      </motion.div>

      {/* Ripple */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ background: '#30d158' }} />
    </motion.a>
  );
}

// Section divider
function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.1), rgba(191,90,242,0.1), transparent)' }} />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen noise" style={{ background: '#030712' }}>
      <Navbar />
      
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Services />
        <Divider />
        <Pricing />
        <Divider />
        <Portfolio />
        <Divider />
        <Testimonials />
        <Divider />
        <Process />
        <Divider />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
