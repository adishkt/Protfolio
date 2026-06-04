import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <section id="contact" className="contact-section mb-5" style={{ color: 'var(--text-primary)', transition: 'all 0.3s ease' }}>
        <h2 className="mb-3" style={{ color: 'var(--accent-color)', transition: 'color 0.3s ease' }}>Contact</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Email: adishadi01@email.com</p>
        <p style={{ color: 'var(--text-secondary)' }}>LinkedIn: <a href="https://www.linkedin.com/in/adish-k-t-887bb7258" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', transition: 'color 0.3s ease' }}>www.linkedin.com/in/adish-k-t-887bb7258</a></p>
      </section>
    </motion.div>
  );
}

export default Contact; 