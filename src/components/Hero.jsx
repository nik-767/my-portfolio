import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import MainAttraction3D from './MainAttraction3D';

// --- Components ---

// Magnetic Button Wrapper
const MagneticButton = ({ children, className, style, onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      style={{ position: 'relative', display: 'inline-block' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <div onClick={onClick} className={className} style={style}>
        {children}
      </div>
    </motion.div>
  );
};

// Tilt Portrait
const TiltPortrait = ({ src, alt, style }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          objectFit: 'cover',
          filter: 'grayscale(100%) contrast(1.2)',
          rotateX,
          rotateY,
          transformPerspective: 1000,
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        }}
      />
    </motion.div>
  );
};

// Scramble Text (Simple staggered characters for the subtitle)
const ScrambleText = ({ text }) => {
  const letters = text.split("");
  return (
    <span>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.01 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};


const StaggeredText = ({ text, delayOffset = 0, outlined = false }) => {
  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 150, rotate: 10, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.19, 1.0, 0.22, 1.0], // Super premium smooth spring-like ease
            delay: delayOffset + index * 0.05
          }}
          style={{
            fontSize: 'clamp(5rem, 12vw, 15rem)',
            lineHeight: 0.9,
            margin: 0,
            fontWeight: 900,
            textTransform: 'uppercase',
            display: 'inline-block',
            color: outlined ? 'transparent' : '#FFF',
            WebkitTextStroke: outlined ? '4px rgba(255,255,255,0.2)' : 'none'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Spotlight Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [mouseX, mouseY]);

  const spotlightBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`
  );

  return (
    <section ref={containerRef} className="section-dark flex-center hero-section" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Interactive Spotlight */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: spotlightBackground,
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      
      {/* Loading Overlay Sweep */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#050505', zIndex: 100, pointerEvents: 'none' }}
      />

      {/* Laugon-style Background Marquee */}
      <div style={{ position: 'absolute', top: '30%', left: '-10%', width: '150%', transform: 'rotate(-5deg)', zIndex: 0, opacity: 0.04, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
        <motion.h1 style={{ x: marqueeX, fontSize: '18rem', margin: 0, color: '#FFF' }}>
          ENGINEER DEVELOPER ENGINEER DEVELOPER ENGINEER DEVELOPER
        </motion.h1>
      </div>

      {/* Jaw-Dropping Centerpiece 3D Visual */}
      <MainAttraction3D />

      {/* Vertical Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', left: '2vw', top: '50%', transform: 'translateY(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '30px' }}
      >
        {[
          { name: 'GITHUB', url: 'https://github.com/nik-767' },
          { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/nikhil-kalra-343t' },
          { name: 'EMAIL', url: 'mailto:nikhilkalra124421@gmail.com' }
        ].map((link, i) => (
          <a key={i} href={link.url} target={link.url.startsWith('mailto') ? '_self' : '_blank'} rel="noreferrer" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '4px', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='#FFF'} onMouseOut={e=>e.target.style.color='rgba(255,255,255,0.4)'}>
            {link.name}
          </a>
        ))}
      </motion.div>

      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
          
          {/* Portrait Layer with Tilt Effect */}
          <motion.div 
            style={{ position: 'absolute', right: '10%', top: '0%', y: portraitY, width: '350px', height: '450px' }}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            <TiltPortrait src="/profile.png" alt="Nikhil Kalra" style={{ width: '100%', height: '100%' }} />
            
            {/* Floating Tech Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ position: 'absolute', top: '-10px', left: '-20px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '8px 16px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF', fontSize: '0.8rem', fontWeight: 'bold' }}
            >
              React / Three.js
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              style={{ position: 'absolute', bottom: '20px', right: '-30px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '8px 16px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF', fontSize: '0.8rem', fontWeight: 'bold' }}
            >
              Python / AWS
            </motion.div>
          </motion.div>
          
          {/* Giant Split Typography */}
          <div style={{ paddingTop: '100px', paddingBottom: '100px', position: 'relative', zIndex: 3 }}>
            <div style={{ paddingLeft: '0vw' }}>
              <StaggeredText text="NIKHIL" delayOffset={0.6} />
            </div>
            <div style={{ paddingLeft: '8vw' }}>
              <StaggeredText text="KALRA." delayOffset={0.8} outlined={true} />
            </div>
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '40px' }}
            >
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ position: 'absolute', width: '10px', height: '10px', backgroundColor: '#00FF00', borderRadius: '50%', animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
                <span style={{ position: 'relative', width: '8px', height: '8px', backgroundColor: '#00FF00', borderRadius: '50%' }}></span>
              </div>
              <span style={{ color: '#FFF', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Available for new opportunities</span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              style={{ maxWidth: '400px', marginTop: '20px', fontSize: '1.2rem', color: '#AAA', lineHeight: 1.6 }}
            >
              <ScrambleText text="Architecting scalable backend ecosystems and crafting immersive, animated frontend experiences. Based in the Cloud." />
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{ marginTop: '50px', display: 'flex', gap: '20px' }}
            >
              <MagneticButton>
                <a href="#work" className="btn-primary" style={{ display: 'inline-block', padding: '20px 40px', borderRadius: '50px', textDecoration: 'none', color: '#000', background: '#FFF' }}>Discover My Work</a>
              </MagneticButton>
              <MagneticButton>
                <button 
                  className="contact-trigger" 
                  onClick={() => window.dispatchEvent(new Event('OPEN_CONTACT'))}
                  style={{ padding: '20px 40px', borderRadius: '50px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF', fontSize: '1.1rem', cursor: 'pointer', transition: 'background 0.3s' }}
                  onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                  onMouseOut={(e) => e.target.style.background = 'transparent'}
                >
                  Get In Touch
                </button>
              </MagneticButton>
            </motion.div>
          </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 4 }}
      >
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div 
          style={{ width: '1px', height: '50px', background: 'rgba(255,255,255,0.2)', overflow: 'hidden', position: 'relative' }}
        >
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            style={{ width: '100%', height: '100%', background: '#FFF' }}
          />
        </motion.div>
      </motion.div>

      {/* Custom Laugon-style glowing blur elements */}
      <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 2, delay: 1 }}
          style={{ position: 'absolute', bottom: '-20%', right: '20%', width: '600px', height: '600px', backgroundColor: 'var(--accent-color, #333)', filter: 'blur(150px)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}
      />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;
