import Home from './Home';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Home />
      <Container className="my-5">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </Container>
      <footer className="text-center text-muted py-4" style={{ background: '#000' }}>
        &copy; {new Date().getFullYear()} Adish K T. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
