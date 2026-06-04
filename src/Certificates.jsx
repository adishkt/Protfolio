const certifications = [
  {
    title: 'Full Stack Development (MERN) Certification',
    issuer: 'ICT Academy',
    description: 'Successfully completed a Full Stack Development (MERN) certification program focused on building modern web applications using MongoDB, Express.js, React.js, and Node.js. Gained hands-on experience in frontend development, backend API creation, database management, authentication, and full-stack application deployment. Developed real-world projects following industry-standard development practices.'
  },
  {
    title: 'Python Programming Certification',
    issuer: 'Capabl',
    description: 'Completed a Python Programming certification covering core programming concepts, data structures, object-oriented programming, data analysis, and machine learning fundamentals. Applied Python for data preprocessing, exploratory data analysis, predictive modeling, and real-world data science projects during internship training.'
  },
  {
    title: 'Data Science Certification',
    issuer: 'Capabl',
    description: 'Successfully completed a comprehensive Data Science training program covering data analysis, statistics, machine learning, data preprocessing, feature engineering, and predictive modeling using Python. Gained practical experience working with real-world datasets and applying analytical techniques to extract insights and build data-driven solutions.'
  }
];

function Certificates() {
  return (
    <section id="certificates" className="certificates-section mb-5" style={{ color: 'var(--text-primary)', transition: 'all 0.3s ease' }}>
      <h2 className="mb-3" style={{ color: 'var(--accent-color)', transition: 'color 0.3s ease' }}>Certifications</h2>
      <div className="row">
        {certifications.map((cert, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="p-3 h-100" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', borderRadius: 12, boxShadow: 'var(--shadow)', transition: 'all 0.3s ease' }}>
              <h5 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>{cert.title}</h5>
              <div className="mb-2" style={{ color: 'var(--accent-color)', fontWeight: 500, transition: 'color 0.3s ease' }}>{cert.issuer}</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: 0 }}>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
