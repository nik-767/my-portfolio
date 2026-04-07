import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const skills = [
  "HTML", "CSS", "JS", "Tailwind", 
  "React", "Python", "Flask", "Django", 
  "GenAI", "Docker", "Figma", "GSAP"
];

const Skills = () => {
  const containerRef = useRef(null);

  return (
    <section className="section-dark" style={{ padding: '100px 5%', overflow: 'hidden' }}>
      <div className="container">
        <h2 style={{ fontSize: '4.5rem', marginBottom: '30px', color: '#FFF' }}>
          Tech <span style={{ color: '#444' }}>Arsenal</span>
        </h2>
        <p style={{ color: 'var(--text-light)', opacity: 0.8, marginBottom: '60px', maxWidth: '600px', fontSize: '1.2rem' }}>
          A robust stack demands a flexible approach. Feel free to interact with my core engineering technologies.
        </p>

        {/* Improved Dynamic Flex Sandbox Container */}
        <div 
          ref={containerRef} 
          style={{ 
            width: '100%', 
            position: 'relative', 
            border: '1px solid rgba(255,255,255,0.05)', 
            borderRadius: '24px',
            backgroundColor: 'rgba(255,255,255,0.01)',
            padding: '50px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
              whileHover={{ scale: 1.15, zIndex: 10, borderColor: 'rgba(0, 255, 170, 0.8)', color: 'rgba(0, 255, 170, 1)' }}
              whileTap={{ scale: 0.95, cursor: 'grabbing', zIndex: 100 }}
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
              style={{
                position: 'relative',
                padding: '16px 32px',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-light)',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.1)',
                fontWeight: '600',
                letterSpacing: '0.5px',
                cursor: 'grab',
                userSelect: 'none',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.7)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
