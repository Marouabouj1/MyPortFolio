const education = [
  {
    degree: "Master's in Computer Engineering",
    school: 'Faculté des Sciences Tétouan — Université Abdelmalek Essaadi',
    period: '2023 – 2025',
    icon: '🎓',
  },
  {
    degree: 'Bachelor in Mathematics & Computer Science',
    school: 'Faculté des Sciences Tétouan — Université Abdelmalek Essaadi',
    period: '2019 – 2023',
    icon: '📚',
  },
  {
    degree: 'Baccalauréat in Physical Sciences',
    school: 'Lycée Ibn El Khatib, Tanger',
    period: '2019',
    icon: '🏫',
  },
]

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">My <span>Education</span></h2>
          <div className="section-line" />
        </div>
        <div className="edu-list">
          {education.map((edu, i) => (
            <div key={i} className="edu-card">
              <div className="edu-icon">{edu.icon}</div>
              <div className="edu-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-school">{edu.school}</p>
              </div>
              <span className="edu-period">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
