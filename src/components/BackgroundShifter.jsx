import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BackgroundShifter = () => {
  useEffect(() => {
    const lightSections = document.querySelectorAll('.section-light');
    const darkSections = document.querySelectorAll('.section-dark');
    
    lightSections.forEach(sec => {
      ScrollTrigger.create({
        trigger: sec,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => gsap.to('body', { backgroundColor: '#FFFFFF', color: '#111111', duration: 0.5 }),
        onEnterBack: () => gsap.to('body', { backgroundColor: '#FFFFFF', color: '#111111', duration: 0.5 }),
      });
    });

    darkSections.forEach(sec => {
      ScrollTrigger.create({
        trigger: sec,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => gsap.to('body', { backgroundColor: '#1A1A1A', color: '#F4F4F4', duration: 0.5 }),
        onEnterBack: () => gsap.to('body', { backgroundColor: '#1A1A1A', color: '#F4F4F4', duration: 0.5 }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return null;
};

export default BackgroundShifter;
