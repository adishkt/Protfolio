import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <div className="hero-section d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '70vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}>
      <img
        src="/profile.jpg"
        alt="Adish K T"
        className="rounded-circle mb-3"
        style={{ width: 128, height: 128, objectFit: 'cover', border: '4px solid var(--glass-border)', transition: 'border-color 0.3s ease' }}
      />
      <h1 className="display-4 fw-bold">Adish K T</h1>
      <h2 className="h4 mb-3" style={{ color: 'var(--accent-color)', transition: 'color 0.3s ease' }}>Fullstack Developer & Data Scientist</h2>
      <div className="mb-4">
        <a href="https://github.com/adishkt" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ fontSize: 32, color: 'var(--text-primary)', transition: 'color 0.3s ease' }}><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ fontSize: 32, color: 'var(--text-primary)', transition: 'color 0.3s ease' }}><FaLinkedin /></a>
        <a href="mailto:adishadi01@email.com" className="mx-2" style={{ fontSize: 32, color: 'var(--text-primary)', transition: 'color 0.3s ease' }}><FaEnvelope /></a>
      </div>
      <p className="lead mb-4" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}>Welcome to my portfolio! Explore my projects, skills, and experience below.</p>
    </div>
  );
}

export default Home; 