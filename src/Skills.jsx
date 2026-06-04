const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'Java', 'C', 'SQL', 'HTML5', 'CSS3']
  },
  {
    title: 'Web & Mobile Development',
    skills: [
      'React.js', 'Node.js', 'Flutter', 'MERN Stack', 'Full Stack Development', 
      'Frontend Development', 'Backend Development', 'Web Development', 
      'REST APIs', 'API Development', 'Responsive Web Design', 
      'Authentication & Authorization', 'CRUD Operations', 'Workflow Automation'
    ]
  },
  {
    title: 'Data Science & Machine Learning',
    skills: [
      'Machine Learning', 'Data Science', 'Data Analysis', 'Data Visualization', 
      'Predictive Modeling', 'Feature Engineering', 'Exploratory Data Analysis (EDA)', 
      'Data Cleaning', 'XGBoost', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'
    ]
  },
  {
    title: 'Tools, Databases & Platforms',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Git', 'GitHub', 'GitHub Actions', 'Postman', 'Linux', 'Database Management']
  },
  {
    title: 'Professional & Soft Skills',
    skills: [
      'Problem Solving', 'Team Collaboration', 'Communication', 'Leadership', 
      'Time Management', 'Debugging', 'Project Management', 'Technical Leadership', 
      'Agile Development', 'Software Development', 'Mobile Application Development', 'Object-Oriented Programming (OOP)'
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section mb-5" style={{ color: 'var(--text-primary)', transition: 'all 0.3s ease' }}>
      <h2 className="mb-4" style={{ color: 'var(--accent-color)', transition: 'color 0.3s ease' }}>Skills & Expertise</h2>
      <div className="row">
        {skillCategories.map((category, catIdx) => (
          <div className="col-12 col-md-6 mb-4" key={catIdx}>
            <div className="p-3 h-100" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', borderRadius: 12, boxShadow: 'var(--shadow)', transition: 'all 0.3s ease' }}>
              <h5 className="fw-bold mb-3" style={{ color: 'var(--accent-color)' }}>{category.title}</h5>
              <div className="d-flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-badge" style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem', margin: 0 }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;