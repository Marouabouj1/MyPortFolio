const services = [
  {
    name: 'Frameworks',
    desc: 'React.js, Angular, Spring Boot, ASP.NET, Django, Flask, Laravel',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Languages',
    desc: 'C#, Java, Python, C++, C, JavaScript, TypeScript, PHP',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    name: 'Databases',
    desc: 'MySQL, SQL Server, SQLite, Entity Framework',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    name: 'Web Development',
    desc: 'HTML, CSS, JavaScript, TypeScript, PHP, REST APIs',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    name: 'DevOps & Systems',
    desc: 'Git, GitHub, IIS, Ubuntu, Windows Server, CI/CD deployment',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="skills" className="services-section">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-line" />
      </div>

      <div className="services-layout">
        <div />
        <div className="services-list">
          {services.map(service => (
            <div key={service.name} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
          <p className="services-more">And more →</p>
        </div>
      </div>
    </section>
  )
}
