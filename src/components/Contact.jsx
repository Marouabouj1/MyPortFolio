const contactLinks = [
  {
    label: 'Email',
    value: 'marwabouj1@gmail.com',
    href: 'mailto:marwabouj1@gmail.com',
    external: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'maroua boujdain',
    href: 'https://www.linkedin.com/in/maroua-boujdain',
    external: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+212 659 822 236',
    href: 'tel:0659822236',
    external: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="contact-inner">
        <div className="section-header centered">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Work <span>Together</span></h2>
          <div className="section-line centered-line" />
          <p className="contact-subtitle">
            I'm open to new opportunities. Whether you have a project in mind or just want
            to connect — my inbox is always open.
          </p>
        </div>

        <div className="contact-cards">
          {contactLinks.map(({ label, value, href, external, icon }) => (
            <a
              key={label}
              href={href}
              className="contact-card"
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
            >
              <div className="contact-card-icon">{icon}</div>
              <div className="contact-card-text">
                <span className="contact-card-label">{label}</span>
                <span className="contact-card-value">{value}</span>
              </div>
              <div className="contact-card-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
