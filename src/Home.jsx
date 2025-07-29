import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <div className="hero-section d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '70vh', background: '#000', color: '#fff' }}>
      <img
        src="https://ui-avatars.com/api/?name=Adish+K+T&background=222&color=fff&size=128"
        alt="Adish K T"
        className="rounded-circle mb-3"
        style={{ width: 128, height: 128, border: '4px solid #222' }}
      />
      <h1 className="display-4 fw-bold">Adish K T</h1>
      <h2 className="h4 mb-3" style={{ color: '#61dafb' }}>Fullstack Developer & Data Scientist</h2>
      <div className="mb-4">
        <a href="https://github.com/adishkt" target="_blank" rel="noopener noreferrer" className="mx-2 text-light" style={{ fontSize: 32 }}><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-2 text-light" style={{ fontSize: 32 }}><FaLinkedin /></a>
        <a href="mailto:adishadi01@email.com" className="mx-2 text-light" style={{ fontSize: 32 }}><FaEnvelope /></a>
      </div>
      <p className="lead mb-4">Welcome to my portfolio! Explore my projects, skills, and experience below.</p>
    </div>
  );
}

export default Home; 