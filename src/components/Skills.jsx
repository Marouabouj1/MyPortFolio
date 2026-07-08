const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Angular'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['C#', 'ASP.NET', 'Entity Framework', 'Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'PHP', 'Laravel'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['SQL Server', 'MySQL', 'SQLite'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'IIS', 'REST API', 'Microservices'],
  },
  {
    category: 'Systems & Other',
    icon: '💻',
    skills: ['Ubuntu', 'Windows Server', 'C', 'C++'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Technical Skills</span>
          <h2 className="section-title">My <span>Tech Stack</span></h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid">
          {skillGroups.map(({ category, icon, skills }) => (
            <div key={category} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{icon}</span>
                <h3 className="skill-category">{category}</h3>
              </div>
              <div className="skill-tags">
                {skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
