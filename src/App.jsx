import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import './index.css';
import CustomCursor from './components/CustomCursor';
import BackgroundShifter from './components/BackgroundShifter';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';
import AudioToggle from './components/AudioToggle';
import Footer from './components/Footer';
import { playClickSound } from './utils/sound';

function App() {
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Avoid overlapping the UI click tick if clicking modal/audio triggers
      if (!e.target.closest('.audio-toggle-btn') && !e.target.closest('.contact-trigger') && !e.target.closest('form')) {
        playClickSound();
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.06, duration: 1.2, smoothWheel: true }}>
      <div className="app-container">
        <AudioToggle />
        <ContactModal />
        <CustomCursor />
        <BackgroundShifter />
        <Hero />
        <Services />
        <Skills />
        <Work />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
