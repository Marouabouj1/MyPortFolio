const softSkills = [
  'Team Work', 'Adaptability', 'Responsibility',
  'Problem Solving', 'Fast Learner', 'Initiative', 'Positive Mindset',
]

const languages = [
  { lang: 'Arabic',  level: 'Native',        pct: 100 },
  { lang: 'French',  level: 'Advanced',       pct: 90  },
  { lang: 'English', level: 'Intermediate',   pct: 65  },
  { lang: 'Spanish', level: 'Basic',          pct: 25  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">Who I <span>Am</span></h2>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        <div className="about-left">
          <p className="about-bio">
            I'm a <strong>Software Engineer</strong> with a Master's degree in Computer Engineering
            from Université Abdelmalek Essaadi. Curious, rigorous, and adaptable, I specialize in
            building secure, high-performance web systems — from microservices APIs to full-featured
            front-end applications.
          </p>
          <p className="about-bio">
            I thrive in agile environments, with a strong focus on code quality, data security, and
            business process optimization. Currently building enterprise solutions at{' '}
            <strong>GMD Metal</strong>.
          </p>

          <div className="about-soft-skills">
            <h4>Soft Skills</h4>
            <div className="tags-wrap">
              {softSkills.map(s => (
                <span key={s} className="soft-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-right">
          <h4 className="lang-title">Languages</h4>
          <div className="languages-list">
            {languages.map(({ lang, level, pct }) => (
              <div key={lang} className="lang-item">
                <div className="lang-header">
                  <span className="lang-name">{lang}</span>
                  <span className="lang-level">{level}</span>
                </div>
                <div className="lang-bar-bg">
                  <div className="lang-bar-fill" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="about-info-cards">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <span>Tanger, Morocco</span>
            </div>
            <div className="info-card">
              <span className="info-icon">💼</span>
              <span>Open to new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
