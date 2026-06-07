import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    color: "#00E5FF", // Neon Cyan
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    skills: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS", "React Router", "React Hook Form"]
  },
  {
    title: "Backend",
    color: "#00FFAA", // Neon Emerald/Mint
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    skills: ["Python", "Django", "Django REST Framework", "Flask", "JWT"]
  },
  {
    title: "Database",
    color: "#D500F9", // Neon Magenta/Purple
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    skills: ["PostgreSQL", "MySQL", "SQLite"]
  },
  {
    title: "Tools",
    color: "#FFD600", // Neon Gold/Amber
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: ["Git", "GitHub", "Figma", "Postman", "Vercel", "Netlify", "Render"]
  }
];

const CategoryCard = ({ category, index }) => {
  const containerRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      style={{
        position: 'relative',
        borderRadius: '24px',
        backgroundColor: 'rgba(255,255,255,0.015)',
        border: '1px solid rgba(255,255,255,0.05)',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minHeight: '340px',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        overflow: 'hidden'
      }}
      className="category-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = category.color + '44';
        e.currentTarget.style.boxShadow = `0 20px 40px -15px ${category.color}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
        e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0,0,0,0.5)';
      }}
    >
      {/* Category Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ color: category.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {category.icon}
        </div>
        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFF', letterSpacing: '0.5px' }}>
          {category.title}
        </h3>
      </div>

      {/* Sandbox Containment Area */}
      <div 
        ref={containerRef}
        style={{
          position: 'relative',
          flex: 1,
          width: '100%',
          minHeight: '180px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px dashed rgba(255,255,255,0.03)',
          borderRadius: '16px',
          padding: '15px',
          backgroundColor: 'rgba(0,0,0,0.15)'
        }}
      >
        {category.skills.map((skill, i) => (
          <motion.div
            key={skill}
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
            whileHover={{ 
              scale: 1.08, 
              zIndex: 10, 
              borderColor: category.color, 
              color: category.color,
              boxShadow: `0 0 15px ${category.color}44`
            }}
            whileTap={{ scale: 0.95, cursor: 'grabbing', zIndex: 100 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, type: 'spring', stiffness: 200, damping: 20 }}
            style={{
              position: 'relative',
              padding: '10px 18px',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-light)',
              borderRadius: '50px',
              border: '1px solid rgba(255,255,255,0.08)',
              fontWeight: '600',
              fontSize: '0.85rem',
              letterSpacing: '0.5px',
              cursor: 'grab',
              userSelect: 'none',
              backdropFilter: 'blur(5px)',
              transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s'
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="section-dark" style={{ padding: '100px 5%', overflow: 'hidden' }}>
      <div className="container">
        <h2 style={{ fontSize: '4.5rem', marginBottom: '30px', color: '#FFF' }}>
          Tech <span style={{ color: '#444' }}>Arsenal</span>
        </h2>
        <p style={{ color: 'var(--text-light)', opacity: 0.8, marginBottom: '60px', maxWidth: '600px', fontSize: '1.2rem' }}>
          A robust stack demands a flexible approach. Feel free to interact with my core engineering technologies.
        </p>

        {/* Bento Grid layout containing the categories */}
        <div className="skills-grid">
          {skillCategories.map((category, i) => (
            <CategoryCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
