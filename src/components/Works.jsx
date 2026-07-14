const projects = [
  {
    name: 'HRLink',
    type: 'HR Management System — Employee management, org chart, attendance & HR references',
    year: '2025–2026',
    tech: 'React.js · ASP.NET · SQL Server',
  },
  {
    name: 'Logistics Management',
    type: 'Stock & inventory management application with evolving modules and bug fixes',
    year: '2026',
    tech: 'React.js · ASP.NET · Entity Framework',
  },
  {
    name: 'Forms & Requests Manager',
    type: 'Microservices-based app with validation workflows for submission, approval & tracking',
    year: '2025',
    tech: '.NET · React · REST API',
  },
  {
    name: 'Reporting System',
    type: 'Employee complaints & suggestions platform — submission, tracking & processing',
    year: '2025',
    tech: 'React.js · ASP.NET · SQL Server',
  },
  {
    name: 'Employee Tracker',
    type: 'Task management app with monthly/annual goal tracking charts',
    year: '2023',
    tech: 'Spring Boot · Angular',
  },
]

export default function Works() {
  return (
    <section id="works" className="section">
      <div className="section-header">
        <h2 className="section-title">Selected Works</h2>
        <div className="section-line" />
      </div>

      <div className="works-grid">
        {projects.map(project => (
          <div key={project.name} className="work-card">
            <div className="work-thumb">
              {project.name}
            </div>
            <div className="work-info">
              <h3 className="work-name">{project.name}</h3>
              <p className="work-type">{project.type}</p>
              <p className="work-tech">{project.tech}</p>
              <p className="work-year">{project.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
