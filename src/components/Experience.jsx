import React from 'react';

const Experience = () => {
  const experiences = [
    {
      year: 'Feb 2026 - Mar 2026',
      role: 'Open Source Contributor',
      company: 'AboutCode (Remote)',
      bullets: [
        'Contributed to the ScanCode.io Django-based open-source project.',
        'Worked on backend debugging, issue analysis, and documentation.',
        'Used Git, GitHub, Docker, and collaborative development workflows.'
      ]
    },
    {
      year: 'Jun 2025 - Jul 2025',
      role: 'Frontend Developer Intern',
      company: 'CodSoft (Remote)',
      bullets: [
        'Developed responsive frontend interfaces and project-based web applications.',
        'Worked with Git version control and collaborative workflows.'
      ]
    }
  ];

  const education = [
    {
      year: '2023 - 2026',
      role: 'BCA (Bachelor of Computer Applications)',
      company: 'ATMS Group of Institutions'
    },
    {
      year: '2022 - 2023',
      role: 'Intermediate',
      company: 'Smt. Kamla Agarwal School'
    },
    {
      year: '2020 - 2021',
      role: 'Matriculation',
      company: 'Smt. Kamla Agarwal School'
    }
  ];

  return (
    <section id="experience" className="section-light experience-section">
      <div className="container experience-container">
        
        {/* Work Experience */}
        <h2 className="experience-title">Career Track</h2>
        <div className="experience-list-container">
          {experiences.map((item, index) => (
            <div key={index} className="experience-row">
              <div className="experience-year">{item.year}</div>
              <div className="experience-details">
                <div className="experience-role">{item.role}</div>
                <ul className="experience-bullets">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="experience-company">{item.company}</div>
            </div>
          ))}
        </div>

        {/* Education */}
        <h2 className="experience-title" style={{ marginTop: '80px' }}>Education</h2>
        <div className="experience-list-container">
          {education.map((item, index) => (
            <div key={index} className="experience-row">
              <div className="experience-year">{item.year}</div>
              <div className="experience-details">
                <div className="experience-role">{item.role}</div>
              </div>
              <div className="experience-company">{item.company}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
