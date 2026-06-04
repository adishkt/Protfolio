const education = [
  {
    school: 'Sree Narayana Gurukulam College of Engineering',
    degree: 'BTech Computer Science and Engineering',
    period: '2022 - 2026',
    grade: 'CGPA: 8.327'
  },
  {
   school: 'GVHSS Madapally',
    degree: 'Higher Secondary',
    period: '2019 - 2021',
    grade: '96%'
  }
];

function Education() {
  return (
    <section id="education" className="education-section mb-5" style={{ color: 'var(--text-primary)', transition: 'all 0.3s ease' }}>
      <h2 className="mb-3" style={{ color: 'var(--accent-color)', transition: 'color 0.3s ease' }}>Education</h2>
      <div className="row">
        {education.map((edu, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <div className="p-3 h-100" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', borderRadius: 12, boxShadow: 'var(--shadow)', transition: 'all 0.3s ease' }}>
              <h5 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>{edu.school}</h5>
              <div className="mb-1" style={{ color: 'var(--accent-color)', transition: 'color 0.3s ease' }}>{edu.degree}</div>
              <div className="mb-2" style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{edu.period} {edu.grade ? `| Grade: ${edu.grade}` : ''}</div>
              <div style={{ color: 'var(--text-secondary)' }}>{edu.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education; 