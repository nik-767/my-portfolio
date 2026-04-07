import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {

  return (
    <footer className="section-dark" style={{ color: '#FFF', position: 'relative', overflow: 'hidden', padding: '20px 0 50px 0', borderTop: 'none' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes customMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
      
      {/* Massive Marquee Seamlessly Looping */}
      <div style={{ width: '100%', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '50px', marginBottom: '50px' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content', animation: 'customMarquee 30s linear infinite' }}>
          <h1 style={{ fontSize: 'clamp(5rem, 15vw, 20rem)', margin: 0, fontWeight: 900, textTransform: 'uppercase', color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
            LET'S BUILD THE FUTURE TOGETHER&nbsp;—&nbsp;LET'S BUILD THE FUTURE TOGETHER&nbsp;—&nbsp;LET'S BUILD THE FUTURE TOGETHER&nbsp;—&nbsp;
          </h1>
          <h1 style={{ fontSize: 'clamp(5rem, 15vw, 20rem)', margin: 0, fontWeight: 900, textTransform: 'uppercase', color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
            LET'S BUILD THE FUTURE TOGETHER&nbsp;—&nbsp;LET'S BUILD THE FUTURE TOGETHER&nbsp;—&nbsp;LET'S BUILD THE FUTURE TOGETHER&nbsp;—&nbsp;
          </h1>
        </div>
      </div>

      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', position: 'relative', zIndex: 1 }}>
        
        {/* Engineering Ethos */}
        <div style={{ flex: '1 1 300px' }}>
          <p style={{ color: 'var(--accent-color, #00FFAA)', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '15px', fontWeight: 'bold' }}>The Ethos</p>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '300', color: '#AAA', lineHeight: 1.5, maxWidth: '300px' }}>
            Bridging the gap between <span style={{ color: '#FFF', fontWeight: 'bold' }}>heavy engineering</span> and <span style={{ color: '#FFF', fontWeight: 'bold' }}>pixel-perfect design</span>.
          </h3>
        </div>

        {/* CTA Button */}
        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="btn-primary"
            style={{
              padding: '20px 50px',
              borderRadius: '50px',
              background: '#FFF',
              color: '#000',
              textDecoration: 'none',
              fontWeight: 900,
              fontSize: '1.2rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 40px rgba(255,255,255,0.2)',
              border: '2px solid transparent',
              textAlign: 'center'
            }}
            onMouseOver={(e) => { e.target.style.background = '#000'; e.target.style.color = '#FFF'; e.target.style.borderColor = '#FFF'; }}
            onMouseOut={(e) => { e.target.style.background = '#FFF'; e.target.style.color = '#000'; e.target.style.borderColor = 'transparent'; }}
          >
            Download Resume (PDF)
          </a>
        </div>

        {/* Copyright */}
        <div style={{ flex: '1 1 300px', textAlign: 'right' }}>
          <p style={{ color: 'var(--accent-color, #00FFAA)', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 'bold' }}>Connect</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <a href="https://github.com/nik-767" target="_blank" rel="noreferrer" style={{ color: '#FFF', textDecoration: 'none', opacity: 0.7, transition: 'opacity 0.3s' }} onMouseOver={e=>e.target.style.opacity=1} onMouseOut={e=>e.target.style.opacity=0.7}>GitHub</a>
            <a href="https://www.linkedin.com/in/nikhil-kalra-343t" target="_blank" rel="noreferrer" style={{ color: '#FFF', textDecoration: 'none', opacity: 0.7, transition: 'opacity 0.3s' }} onMouseOver={e=>e.target.style.opacity=1} onMouseOut={e=>e.target.style.opacity=0.7}>LinkedIn</a>
            <a href="mailto:nikhilkalra124421@gmail.com" target="_self" style={{ color: '#FFF', textDecoration: 'none', opacity: 0.7, transition: 'opacity 0.3s' }} onMouseOver={e=>e.target.style.opacity=1} onMouseOut={e=>e.target.style.opacity=0.7}>Email</a>
          </div>
          <p style={{ color: '#555', fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} Nikhil Kalra. Engineered with React & Framer Motion.</p>
        </div>

      </div>

      {/* Subtle glowing orb at the bottom */}
      <div style={{ position: 'absolute', bottom: '-150px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'var(--accent-color, #00FFAA)', filter: 'blur(200px)', opacity: 0.1, zIndex: 0, pointerEvents: 'none' }}></div>
    </footer>
  );
};

export default Footer;
