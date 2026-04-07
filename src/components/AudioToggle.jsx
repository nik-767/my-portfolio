import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ambientSynth } from '../utils/audioEngine';

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      ambientSynth.stop();
      setIsPlaying(false);
    } else {
      ambientSynth.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.button
      onClick={toggleAudio}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="audio-toggle-btn"
      style={{
        position: 'fixed',
        top: '40px',
        right: '40px',
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '50px',
        padding: '10px 20px',
        color: '#FFF',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        letterSpacing: '2px',
        cursor: 'pointer',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'all 0.3s'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      }}
    >
      <div style={{
        width: '8px', height: '8px', borderRadius: '50%',
        backgroundColor: isPlaying ? 'var(--accent-color)' : '#666',
        boxShadow: isPlaying ? '0 0 10px var(--accent-color)' : 'none',
        transition: 'all 0.3s'
      }} />
      <span>{isPlaying ? 'SOUND ON' : 'SOUND OFF'}</span>
    </motion.button>
  );
};

export default AudioToggle;
