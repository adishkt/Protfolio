const education = [
  {
    school: 'Sree Narayana Gurukulam College of Engineering',
    degree: 'BTech Computer Science and Engineering',
    period: '2022 - Present'
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
    <section id="education" className="education-section mb-5" style={{ color: '#fff' }}>
      <h2 className="mb-3" style={{ color: '#61dafb' }}>Education</h2>
      <div className="row">
        {education.map((edu, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <div className="p-3 h-100" style={{ background: '#111', borderRadius: 12, boxShadow: '0 2px 8px #0008' }}>
              <h5 className="fw-bold mb-1">{edu.school}</h5>
              <div className="mb-1" style={{ color: '#61dafb' }}>{edu.degree}</div>
              <div className="mb-2 text-muted" style={{ fontSize: 14 }}>{edu.period} | Grade: {edu.grade}</div>
              <div>{edu.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education; 