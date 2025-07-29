import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma, FaPython } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import ProgressBar from 'react-bootstrap/ProgressBar';

const skills = [
  { name: 'React', icon: <FaReact color="#61dafb" />, level: 90 },
  { name: 'JavaScript', icon: <FaJs color="#f7df1e" />, level: 85 },
  { name: 'HTML5', icon: <FaHtml5 color="#e34c26" />, level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt color="#2965f1" />, level: 90 },
  { name: 'Python', icon: <FaPython color="#3776AB" />, level: 80 },
  { name: 'Machine Learning', icon: <GiBrain color="#fbbc05" />, level: 75 },
];

function Skills() {
  return (
    <section id="skills" className="skills-section mb-5" style={{ color: '#fff' }}>
      <h2 className="mb-3" style={{ color: '#61dafb' }}>Skills</h2>
      <div className="row">
        {skills.map((skill, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <div className="d-flex align-items-center mb-2">
              <span style={{ fontSize: 32, marginRight: 12 }}>{skill.icon}</span>
              <span className="fw-bold">{skill.name}</span>
            </div>
            <ProgressBar now={skill.level} label={`${skill.level}%`} variant="info" style={{ height: 18, background: '#222' }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills; 