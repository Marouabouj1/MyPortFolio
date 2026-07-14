const experiences = [
  {
    role: 'Software Engineer',
    type: 'Full-time',
    company: 'GMD Metal (via HK Engineering)',
    period: 'Feb 2026 – Present',
    location: 'Tanger',
  },
  {
    role: 'Full Stack .NET/React Developer',
    type: 'Internship',
    company: 'GMD Metal',
    period: 'Sept 2025 – Feb 2026',
    location: 'Tanger',
  },
  {
    role: 'Full Stack .NET/React Developer',
    type: 'PFE Internship',
    company: 'GMD Metal',
    period: 'March – July 2025',
    location: 'Tanger',
  },
  {
    role: 'Full Stack Spring Boot/Angular Developer',
    type: 'PFE Internship',
    company: 'Arfos',
    period: 'March – May 2023',
    location: 'Tanger',
  },
]

const education = [
  {
    degree: 'Master in Computer Engineering',
    school: 'Faculté des Sciences Tétouan — Université Abdelmalek Essaadi',
    year: '2023–2025',
  },
  {
    degree: 'License in Mathematics & Computer Science',
    school: 'Faculté des Sciences Tétouan — Université Abdelmalek Essaadi',
    year: '2019–2023',
  },
  {
    degree: 'Baccalaureate in Physical Sciences',
    school: 'Lycée Ibn El Khatib, Tanger',
    year: '2019',
  },
]

export default function Testimonials() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>

      <div className="testimonials-grid">
        {experiences.map(exp => (
          <div key={exp.period} className="testimonial-card">
            <p className="testimonial-name" style={{marginBottom: '4px'}}>{exp.role}</p>
            <p className="testimonial-role" style={{marginBottom: '12px'}}>{exp.type}</p>
            <p className="testimonial-text" style={{marginBottom: '12px', fontSize: '0.9rem'}}>{exp.company}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <div>
                <p className="testimonial-name">{exp.period}</p>
                <p className="testimonial-role">{exp.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-header" style={{marginTop: '64px'}}>
        <h2 className="section-title">Education</h2>
        <div className="section-line" />
      </div>

      <div className="testimonials-grid">
        {education.map(edu => (
          <div key={edu.year} className="testimonial-card">
            <p className="testimonial-name" style={{marginBottom: '8px'}}>{edu.degree}</p>
            <p className="testimonial-text" style={{fontSize: '0.85rem'}}>{edu.school}</p>
            <div className="testimonial-author" style={{marginTop: '16px'}}>
              <div className="testimonial-avatar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <p className="testimonial-name">{edu.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
