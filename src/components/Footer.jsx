export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">MB.</span>
        <p className="footer-text">Maroua Boujdain — Software Engineer</p>
        <p className="footer-copy">© {new Date().getFullYear()} · Built with React &amp; Vite</p>
      </div>
    </footer>
  )
}
