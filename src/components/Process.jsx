const steps = [
  { num: '01', name: 'Discover', desc: 'Understand your goals, audience and vision.' },
  { num: '02', name: 'Plan', desc: 'Research, strategy and architecture foundation.' },
  { num: '03', name: 'Develop', desc: 'Build clean, scalable and secure applications.' },
  { num: '04', name: 'Test', desc: 'Quality assurance, optimization and refinement.' },
  { num: '05', name: 'Deliver', desc: 'Deploy, monitor and launch successfully.' },
]

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="section-header">
        <h2 className="section-title">My Process</h2>
        <div className="section-line" />
      </div>

      <div className="process-grid">
        {steps.map((step, i) => (
          <div key={step.num} className="process-step">
            <div className="process-num">{step.num}</div>
            <div className="process-divider" />
            <h3 className="process-name">{step.name}</h3>
            <p className="process-desc">{step.desc}</p>
            {i < steps.length - 1 && <span className="process-arrow">→</span>}
          </div>
        ))}
      </div>
    </section>
  )
}
