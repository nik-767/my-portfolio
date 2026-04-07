import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, category, align, details, imageUrl, githubUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`project-card ${align === 'right' ? 'flex-reverse' : ''}`} 
      style={{ display: 'flex', flexDirection: 'column', marginBottom: '120px' }}>
      
      {/* Top Main Section */}
      <div style={{ display: 'flex', flexDirection: align === 'right' ? 'row-reverse' : 'row', alignItems: 'center', gap: '60px', width: '100%' }}>
        <div style={{ flex: 1, width: '100%' }}>
          <div className="project-image-container" style={{ width: '100%', height: '400px', backgroundColor: 'var(--bg-card)', borderRadius: '12px', overflow: 'hidden', position: 'relative', transition: 'transform var(--transition-smooth)', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
             
             {/* Dynamic Thumbnail Setup */}
             {imageUrl ? (
               <>
                 <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) contrast(1.2)' }} />
                 {/* Premium Overlay effect */}
                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10,10,10,0.8) 100%)' }}></div>
               </>
             ) : (
               <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, #111, #2a2a2a)' }}></div>
             )}
             
             <div style={{ position: 'absolute', bottom: '25px', right: '30px', color: '#FFF', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '50px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>VIEW DEMO &rarr;</div>
          </div>
        </div>
        <div style={{ flex: 1, textAlign: align === 'right' ? 'right' : 'left' }}>
          <p style={{ color: 'var(--accent-color, #AAA)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 800, marginBottom: '15px' }}>{category}</p>
          <h3 style={{ fontSize: '3rem', marginBottom: '25px', lineHeight: 1.1 }}>{title}</h3>
          <p style={{ color: 'var(--text-light, #CCC)', opacity: 0.8, marginBottom: '40px', maxWidth: '500px', marginLeft: align === 'right' ? 'auto' : '0', fontSize: '1.1rem' }}>
            A comprehensive implementation showcasing scalable backend mechanics seamlessly integrated with a high-end modern frontend user experience.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px', justifyContent: align === 'right' ? 'flex-end' : 'flex-start' }}>
            <button onClick={() => setIsExpanded(!isExpanded)} className="btn-primary" style={{ padding: '15px 30px', borderRadius: '50px', background: '#FFF', color: '#000', border: 'none', fontWeight: 'bold', cursor: 'pointer', transition: 'opacity 0.3s' }} onMouseOver={e=>e.target.style.opacity='0.8'} onMouseOut={e=>e.target.style.opacity='1'}>
              {isExpanded ? 'Close Case Study' : 'View Deep Dive'}
            </button>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" style={{ color: '#FFF', textDecoration: 'none', opacity: 0.6, fontWeight: 'bold', transition: 'opacity 0.3s', display: 'flex', alignItems: 'center', gap: '8px' }} onMouseOver={e=>e.currentTarget.style.opacity='1'} onMouseOut={e=>e.currentTarget.style.opacity='0.6'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Source
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Case Study Deep Dive */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 60 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ overflow: 'hidden', padding: '0 20px' }}
          >
            <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
              <div>
                <h4 style={{ color: 'var(--accent-color, #FFF)', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>The Challenge</h4>
                <p style={{ opacity: 0.8, lineHeight: 1.8, color: '#CCC' }}>{details.challenge}</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-color, #FFF)', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Architecture</h4>
                <p style={{ opacity: 0.8, lineHeight: 1.8, color: '#CCC' }}>{details.architecture}</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-color, #FFF)', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Outcome</h4>
                <p style={{ opacity: 0.8, lineHeight: 1.8, color: '#CCC' }}>{details.outcome}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="work" className="section-dark" style={{ paddingBottom: '100px' }}>
      <div className="container">
        <h2 style={{ fontSize: '4.5rem', marginBottom: '100px', color: '#FFF' }}>
          Selected <span style={{ color: '#444' }}>Works</span>
        </h2>
        
        <ProjectCard 
          title="MindMateAI Career Advisor" 
          category="Artificial Intelligence" 
          align="left" 
          imageUrl="https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1000&auto=format&fit=crop"
          githubUrl="https://github.com/nik-767/MindMateAI-Career-Advisor.git"
          details={{
            challenge: "Creating a personalized roadmap generator that scales across millions of potential career trajectories while maintaining sub-second response times.",
            architecture: "Built on AWS Lambda leveraging a distributed Redis caching layer and streaming ChatGPT completions via WebSockets to the React frontend.",
            outcome: "Reduced average query time by 85% and processed thousands of successful comprehensive roadmaps during public beta."
          }}
        />
        
        <ProjectCard 
          title="CloudSaver AI" 
          category="Hackathon Project" 
          align="right" 
          imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
          githubUrl="https://github.com/nik-767/CloudSaver-ai.git"
          details={{
            challenge: "Aggregating scattered cloud usage data to pinpoint and automatically resolve redundant high-cost infrastructure securely.",
            architecture: "A complex data pipeline utilizing Node.js microservices, PostgreSQL, and OAuth2 securely scanning AWS/GCP telemetry data.",
            outcome: "Won first place in the hackathon, capable of identifying an average of $300/mo savings for test accounts within 10 seconds."
          }}
        />
      </div>
    </section>
  );
};

export default Work;
