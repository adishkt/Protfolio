import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Mulearn',
    role: 'Tech Lead',
    period: 'Aug 2024 - May 2026',
    description: 'Served as Tech Lead for Mulearn in college, leading technical initiatives, mentoring peers, and organizing tech events.'
  },
];

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <section id="experience" className="experience-section mb-5" style={{ color: 'var(--text-primary)', transition: 'all 0.3s ease' }}>
        <h2 className="mb-3" style={{ color: 'var(--accent-color)', transition: 'color 0.3s ease' }}>Experience</h2>
        <div className="row">
          {experiences.map((exp, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="p-3 h-100" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', borderRadius: 12, boxShadow: 'var(--shadow)', transition: 'all 0.3s ease' }}>
                <h5 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>{exp.company}</h5>
                <div className="mb-1" style={{ color: 'var(--accent-color)', transition: 'color 0.3s ease' }}>{exp.role}</div>
                <div className="mb-2" style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{exp.period}</div>
                <div style={{ color: 'var(--text-secondary)' }}>{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Experience; 