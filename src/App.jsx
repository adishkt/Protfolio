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
      <button className="theme-switch-btn" onClick={toggleTheme} aria-label="Toggle Theme">
        {theme === 'dark' ? <FaSun size={20} color="#f59e0b" /> : <FaMoon size={20} color="#3b82f6" />}
      </button>
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
