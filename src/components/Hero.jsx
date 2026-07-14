export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-top">
        <span className="hero-subtitle">Software Engineer &amp; Full Stack Developer</span>
        <div className="hero-line-accent" />
      </div>

      <div className="hero-main">
        <h1 className="hero-title">PORTFOLIO</h1>
        <div className="hero-photo">
          <div className="hero-photo-placeholder">MB</div>
        </div>
      </div>

      <div className="hero-content">
        <div>
          <p className="hero-tagline">
            I build secure<br />
            systems that<br />
            <em>scale</em> and <em>perform.</em>
          </p>
        </div>
        <div>
          <p className="hero-bio">
            Curious, rigorous and adaptable Software Engineer with solid
            experience in developing secure web systems. I design and build
            high-performance applications in agile environments, with a focus
            on code quality, data security and business process optimization.
            Currently at GMD Metal.
          </p>
          <div className="hero-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Tanger, Morocco
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-num">10+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-num">3+</span>
            <span className="stat-label">Years of Experience</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-num">15+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>
    </section>
  )
}
