import React from 'react';

const DomainCard = ({ title, description, tags }) => (
  <div style={{ marginBottom: '40px', padding: '40px', backgroundColor: 'var(--bg-card)', borderRadius: '8px', borderLeft: '4px solid var(--accent-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform var(--transition-fast)' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{title}</h3>
    <p style={{ marginBottom: '25px', color: 'var(--text-muted)' }}>{description}</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {tags.map(tag => (
        <span key={tag} style={{ padding: '6px 14px', fontSize: '0.85rem', fontWeight: 600, backgroundColor: 'rgba(0, 255, 170, 0.1)', color: 'var(--accent-color)', borderRadius: '20px' }}>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="section-light text-dark">
      <div className="container">
        <h2 style={{ fontSize: '3.5rem', marginBottom: '60px', borderBottom: '2px solid #EAEAEA', paddingBottom: '20px', fontWeight: 900 }}>
          What I <span className="accent-text" style={{ color: '#00cc88' }}>Actually</span> Do
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          <DomainCard 
            title="Frontend Engineering"
            description="Crafting immersive, high-performance user interfaces and fluid micro-interactions with modern toolings."
            tags={['React', 'GSAP', 'Framer Motion']}
          />
          <DomainCard 
            title="Backend Architecture"
            description="Designing robust, highly-concurrent server-side logic and database schemas for data-heavy applications."
            tags={['Python', 'Django', 'Flask', 'Docker', 'Postgres']}
          />
          <DomainCard 
            title="Generative AI Integration"
            description="Building intelligent pipelines and automated workflows powered by modern Gen-AI models and custom AI projects."
            tags={['Gen-AI', 'Prompt Engineering', 'AI Pipelines']}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
