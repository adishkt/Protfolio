import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="hero-section d-flex align-items-center" style={{ minHeight: '80vh' }}>
      <div className="container">
        <Row className="align-items-center">
          <Col lg={7} className="text-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="available-tag">
                <span className="pulse-dot" style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #10b981' }}></span>
                Available for Opportunities
              </div>
              <h1 className="hero-name">Adish K T</h1>
              <h2 className="hero-title">Fullstack Developer & Data Scientist</h2>
              <p className="hero-desc">
                Welcome to my portfolio! I build scalable web applications and analytical data science models to turn insights into functional design.
              </p>
              
              {/* CTA Buttons */}
              <div className="d-flex gap-3 mb-4 flex-wrap">
                <Button href="#projects" className="btn-primary-gradient">
                  View My Work
                </Button>
                <Button href="#contact" className="btn-secondary-outline">
                  Contact Me
                </Button>
              </div>

              {/* Social Icons */}
              <div className="d-flex gap-3 align-items-center">
                <a 
                  href="https://github.com/adishkt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ fontSize: 24, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-color)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/adish-k-t-887bb7258" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ fontSize: 24, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-color)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="mailto:adishadi01@email.com" 
                  style={{ fontSize: 24, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-color)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </Col>

          <Col lg={5} className="d-flex justify-content-center mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="profile-container-new"
            >
              <div className="profile-glow-ring"></div>
              <img
                src="/profile.jpg"
                alt="Adish K T"
                className="profile-img-new"
              />
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;