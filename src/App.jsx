import { useState, useEffect } from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`portfolio-container ${theme}-theme`} style={{ minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
      {/* Background Glow Blobs */}
      <div className="ambient-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <button className="theme-switch-btn" onClick={toggleTheme} aria-label="Toggle Theme">
        {theme === 'dark' ? <FaSun size={20} color="#f59e0b" /> : <FaMoon size={20} color="#3b82f6" />}
      </button>

      {/* Sticky Header Navbar */}
      <Navbar expand="lg" className="navbar-glass py-3" variant={theme === 'dark' ? 'dark' : 'light'}>
        <Container>
          <Navbar.Brand href="#" className="navbar-brand-custom">
            ADISH K T
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
              <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
              <Nav.Link href="#experience" className="nav-link-custom">Experience</Nav.Link>
              <Nav.Link href="#education" className="nav-link-custom">Education</Nav.Link>
              <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
              <Nav.Link href="#certificates" className="nav-link-custom">Certifications</Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Home />
      <Container className="my-5">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </Container>
      
      <footer className="text-center py-4">
        &copy; {new Date().getFullYear()} Adish K T. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
