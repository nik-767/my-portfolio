import React from 'react';

const Experience = () => {
  const roles = [
    { year: 'Phase 01', role: 'Web Development Intern', company: 'Industry Experience' },
    { year: 'Phase 02', role: 'Hackathon Project Built', company: 'Competitive Building' },
    { year: 'Phase 03', role: 'Open Source Contribution', company: 'Global Community' }
  ];

  return (
    <section id="experience" className="section-light" style={{ padding: '120px 5%' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '60px', fontWeight: 900 }}>Career Track</h2>
        <div style={{ borderTop: '2px solid #EAEAEA' }}>
          {roles.map((item, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px 0', borderBottom: '1px solid #EAEAEA', transition: 'background-color 0.3s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#FAFAFA'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
              <div style={{ width: '25%', color: '#666', fontWeight: 600 }}>{item.year}</div>
              <div style={{ width: '45%', fontWeight: '800', fontSize: '1.4rem' }}>{item.role}</div>
              <div style={{ width: '30%', textAlign: 'right', color: '#333', fontSize: '1.1rem' }}>{item.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
