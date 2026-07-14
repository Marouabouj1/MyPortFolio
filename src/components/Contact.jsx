export default function Contact() {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-banner">
        <div className="cta-left">
          <div className="cta-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div>
            <h2 className="cta-title">
              Let&apos;s Work<br />
              <em>Together.</em>
            </h2>
            <p className="cta-subtitle">I&apos;m open to new opportunities and collaborations.</p>
          </div>
        </div>
        <a href="mailto:marwabouj1@gmail.com" className="cta-btn">
          Get In Touch →
        </a>
      </div>
    </section>
  )
}
