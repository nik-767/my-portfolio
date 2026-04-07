import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimeHeroBackground = () => {
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
      <motion.img 
        src="https://images.unsplash.com/photo-1542051812871-34f2cb5d5f13?auto=format&fit=crop&q=80&w=2000"
        alt="Cyberpunk Tokyo Aesthetic"
        style={{
          width: '110%', 
          height: '110%', 
          top: '-5%',
          left: '-5%',
          position: 'absolute',
          objectFit: 'cover',
          // Set to 0.6 opacity to ensure it is 100% visible immediately
          opacity: 0.6, 
          filter: 'grayscale(60%)',
          y,
          scale
        }}
      />
      {/* Vignette & Fade Gradients to seamlessly blend the anime image into the rest of the dark site */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50vh', background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, transparent 40%, var(--bg-primary) 100%)' }} />
    </div>
  );
};

export default AnimeHeroBackground;
