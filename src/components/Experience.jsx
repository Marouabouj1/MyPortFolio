const experiences = [
  {
    title: 'Software Engineer',
    type: 'Full-time',
    company: 'GMD Metal — via HK Engineering',
    period: 'Feb 2026 – Present',
    location: 'Tanger',
    current: true,
    description: [
      'Finalization and improvement of a logistics management application',
      'Evolution of HRLink: HR management, org chart, attendance & reference data',
      'Maintenance and new features for stock and inventory management app',
      'Participated in production deployment of new app versions on company servers',
    ],
    tech: ['React.js', 'ASP.NET', 'Entity Framework', 'SQL Server', 'REST API', 'IIS', 'Git'],
  },
  {
    title: 'Full Stack Developer .NET / React',
    type: 'Free Internship',
    company: 'GMD Metal',
    period: 'Sep 2025 – Feb 2026',
    location: 'Tanger',
    current: false,
    description: [
      'Evolution of internal forms & requests management application',
      'Built a complaint and suggestion reporting management system',
      'Developed HRLINK: centralized employees, org structure, attendance & HR references',
    ],
    tech: ['React.js', 'ASP.NET', 'SQL Server', 'REST API'],
  },
  {
    title: 'Full Stack Developer .NET / React',
    type: 'PFE Internship',
    company: 'GMD Metal',
    period: 'Mar – Jul 2025',
    location: 'Tanger',
    current: false,
    description: [
      'Built a microservices-based forms & internal requests management application',
      'Integrated full validation workflows: submission, approval, tracking & processing',
    ],
    tech: ['React.js', 'ASP.NET', 'Microservices', 'SQL Server'],
  },
  {
    title: 'Full Stack Developer Spring Boot / Angular',
    type: 'PFE Internship',
    company: 'Arfos',
    period: 'Mar – May 2023',
    location: 'Tanger',
    current: false,
    description: [
      'Developed a web app for tracking employee work and task management',
      'Built dashboards for monthly and annual objective tracking',
    ],
    tech: ['Spring Boot', 'Angular', 'MySQL'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span className="section-tag">Work History</span>
        <h2 className="section-title">Professional <span>Experience</span></h2>
        <div className="section-line" />
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className={`timeline-item${exp.current ? ' current' : ''}`}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <div className="exp-meta">
                  <span className={`exp-badge${exp.current ? ' badge-current' : ''}`}>
                    {exp.type}
                  </span>
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">📍 {exp.location}</span>
                </div>
              </div>
              <ul className="exp-list">
                {exp.description.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
              <div className="exp-tech">
                {exp.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
