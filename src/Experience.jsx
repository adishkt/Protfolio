const experiences = [
  {
    company: 'Mulearn',
    role: 'Tech Lead',
    period: 'Aug 2024 - Present',
    description: 'Served as Tech Lead for Mulearn in college, leading technical initiatives, mentoring peers, and organizing tech events.'
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section mb-5" style={{ color: '#fff' }}>
      <h2 className="mb-3" style={{ color: '#61dafb' }}>Experience</h2>
      <div className="row">
        {experiences.map((exp, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="p-3 h-100" style={{ background: '#111', borderRadius: 12, boxShadow: '0 2px 8px #0008' }}>
              <h5 className="fw-bold mb-1">{exp.company}</h5>
              <div className="mb-1" style={{ color: '#61dafb' }}>{exp.role}</div>
              <div className="mb-2 text-muted" style={{ fontSize: 14 }}>{exp.period}</div>
              <div>{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience; 