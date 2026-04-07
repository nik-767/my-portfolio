import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playModalOpenSound, playSubmitSound } from '../utils/audioEngine';

const inputStyle = {
  width: '100%',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '15px 20px',
  color: '#FFF',
  fontSize: '1.1rem',
  marginBottom: '20px',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.3s'
};

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setResult("");
      playModalOpenSound(); // Play aesthetic opening sound
    };
    window.addEventListener('OPEN_CONTACT', handleOpen);
    return () => window.removeEventListener('OPEN_CONTACT', handleOpen);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending Engine Initiated...");
    playSubmitSound(); // Play satisfying positive ping
    
    const formData = new FormData(event.target);
    formData.append("access_key", "2030fdab-4c6d-47e2-ba13-943e97c9bec2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Transmission Successful! Talk to you soon.");
        event.target.reset();
        setTimeout(() => {
          setIsOpen(false);
        }, 2500); // Wait bit to let user read success message
      } else {
        setResult("Transmission Error. Please try manually.");
      }
    } catch (err) {
      setResult("Network Error. Please try manually.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%', height: '100vh',
            backgroundColor: 'rgba(10, 10, 10, 0.8)',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget && !isSubmitting) setIsOpen(false);
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(15,15,15,0.95) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '60px',
              width: '90%',
              maxWidth: '600px',
              position: 'relative'
            }}
          >
            {/* Minimalist Close Button */}
            <button 
              type="button"
              onClick={() => { if (!isSubmitting) setIsOpen(false); }}
              style={{
                position: 'absolute', top: '20px', right: '30px', background: 'transparent',
                border: 'none', color: '#FFF', fontSize: '2.5rem', cursor: 'pointer', fontWeight: 200,
                lineHeight: 1
              }}
            >
              ×
            </button>

            <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Say <span className="accent-text">Hello.</span></h2>
            <p style={{ color: '#888', marginBottom: '40px', fontSize: '1.2rem' }}>Drop a line. Open to engineering opportunities.</p>

            <form onSubmit={onSubmit}>
              <input type="text" name="name" placeholder="Name" style={inputStyle} required disabled={isSubmitting} />
              <input type="email" name="email" placeholder="Email" style={inputStyle} required disabled={isSubmitting} />
              <textarea name="message" placeholder="Message" style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }} required disabled={isSubmitting} />
              
              <button 
                type="submit" 
                className="btn-primary" 
                disabled={isSubmitting}
                style={{ width: '100%', padding: '20px', fontSize: '1.2rem', marginTop: '10px', opacity: isSubmitting ? 0.5 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Message Display */}
              {result && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: 'center', marginTop: '20px', color: result.includes('Error') ? '#FF5555' : 'var(--accent-color, #00FFAA)', fontWeight: 'bold' }}
                >
                  {result}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
