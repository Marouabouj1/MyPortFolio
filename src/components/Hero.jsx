export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
      </div>

      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            Maroua <span>Boujdain</span>
          </h1>
          <p className="hero-title">
            <span className="typewriter">Software Engineer &amp; Full Stack Developer</span>
          </p>
          <p className="hero-bio">
            Passionate about building secure, high-performance web systems.
            Specialized in React, ASP.NET, and modern full-stack architectures.
            Currently shipping enterprise solutions at GMD Metal.
          </p>
          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
          <div className="hero-socials">
            <a href="mailto:marwabouj1@gmail.com" aria-label="Email" title="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/maroua-boujdain"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="tel:0659822236" aria-label="Phone" title="Phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-wrap">
            <div className="avatar-glow" />
            <div className="avatar-circle">
              {/* Replace the <span> below with <img src="your-photo.jpg" alt="Maroua Boujdain" /> when ready */}
              <span>MB</span>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-mouse">
          <div className="scroll-dot-inner" />
        </div>
      </div>
    </section>
  )
}
