import { useState, useEffect } from 'react'

const navItems = ['Works', 'Skills', 'Process', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        MB<span style={{background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>.</span>
      </a>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {navItems.map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          </li>
        ))}
        <li>
          <a
            href="mailto:marwabouj1@gmail.com"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get In Touch
          </a>
        </li>
      </ul>
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
