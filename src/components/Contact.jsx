import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-dark" style={{ borderTop: '1px solid #333', padding: '120px 5% 60px 5%' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '4rem', marginBottom: '30px' }}>Let's Build Something <span className="accent-text">Great</span>.</h2>
        <p style={{ color: '#AAAAAA', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px auto', fontSize: '1.2rem' }}>
          I am currently open for exciting new engineering opportunities in the Python ecosystem. Whether you have a complex problem to solve or just want to say hi, I'll get back to you!
        </p>
        <button 
          className="btn-primary contact-trigger" 
          onClick={() => window.dispatchEvent(new Event('OPEN_CONTACT'))}
          style={{ padding: '20px 50px', fontSize: '1.2rem', cursor: 'pointer', border: 'none' }}
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Contact;
