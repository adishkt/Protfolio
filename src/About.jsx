function About() {
  return (
    <section id="about" className="about-section mb-5" style={{ color: 'var(--text-primary)', transition: 'all 0.3s ease' }}>
      <h2 className="mb-3" style={{ color: 'var(--accent-color)', transition: 'color 0.3s ease' }}>About Me</h2>
      <div style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease', lineHeight: '1.6' }}>
        <p className="mb-3">
          I am a recent Computer Science Engineering graduate with a strong interest in Full Stack Development, Software Engineering, and Data Science. I have hands-on experience building scalable web applications using React.js, Node.js, MongoDB, and Python, along with developing machine learning and data analytics solutions.
        </p>
        <p className="mb-3">
          Throughout my academic journey, I have worked on real-world projects including a child safety monitoring system, a workflow management platform implemented for my college, and data-driven analytics applications. My projects have earned recognition such as the Best Project of the Year award and institutional appreciation for digital transformation initiatives.
        </p>
        <p className="mb-3">
          I completed internships in Full Stack Development and Data Science, where I gained practical experience in web development, RESTful APIs, database management, machine learning, and data analysis. I also served as a MuLearn Tech Lead, contributing to technical communities and mentoring fellow students.
        </p>
        <p className="mb-0">
          I am passionate about solving real-world problems through technology and continuously expanding my skills in software development, cloud technologies, and emerging technologies. Currently, I am seeking opportunities as a Software Engineer, Full Stack Developer, or Backend Developer where I can contribute, learn, and grow professionally.
        </p>
      </div>
    </section>
  );
}

export default About; 