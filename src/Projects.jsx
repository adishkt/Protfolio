import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const demoProjects = [
  {
    title: 'InvisiGuard – Child Safety Monitoring System',
    shortDesc: 'AI-powered child safety monitoring application with fall detection, geofencing, and emergency alerts.',
    detailedDesc: 'Developed a real-time child safety monitoring platform using Flutter, Python, and Firebase. Implemented machine learning-based fall detection, live GPS tracking, geofence monitoring, SOS alerts, cloud messaging, and secure authentication.',
    keyFeatures: [
      'Fall Detection using Machine Learning',
      'Real-time Location Tracking',
      'Geofencing',
      'SOS Emergency Alerts',
      'Firebase Authentication',
      'Push Notifications'
    ],
    techStack: ['Flutter', 'Python', 'Firebase', 'Machine Learning'],
    achievement: '🏆 Best Project of the Year – Computer Science Department',
    github: 'https://github.com/adishkt/invisiguard_final-year-project',
    image: '/invisipics/WhatsApp Image 2026-06-02 at 4.35.24 PM (1).jpeg',
    screenshots: [
      '/invisipics/WhatsApp Image 2026-06-02 at 4.35.24 PM (1).jpeg',
      '/invisipics/WhatsApp Image 2026-06-02 at 4.35.24 PM.jpeg',
      '/invisipics/WhatsApp Image 2026-02-28 at 9.16.12 PM (1).jpeg',
      '/invisipics/WhatsApp Image 2026-02-28 at 9.16.12 PM.jpeg',
      '/invisipics/WhatsApp Image 2026-02-28 at 9.16.13 PM (1).jpeg',
      '/invisipics/WhatsApp Image 2026-02-28 at 9.16.13 PM (2).jpeg',
      '/invisipics/WhatsApp Image 2026-02-28 at 9.16.13 PM.jpeg',
      '/invisipics/WhatsApp Image 2026-02-28 at 9.16.14 PM (1).jpeg',
      '/invisipics/WhatsApp Image 2026-02-28 at 9.16.14 PM.jpeg',
      '/invisipics/WhatsApp Image 2026-02-28 at 9.16.15 PM (1).jpeg',
      '/invisipics/WhatsApp Image 2026-02-28 at 9.16.15 PM.jpeg',
      '/invisipics/WhatsApp Image 2026-02-28 at 9.16.16 PM (1).jpeg',
      '/invisipics/WhatsApp Image 2026-02-28 at 9.16.16 PM (2).jpeg',
      '/invisipics/WhatsApp Image 2026-02-28 at 9.16.16 PM.jpeg'
    ]
  },
  {
    title: 'SNGCE Workflow Management System',
    shortDesc: 'Digital workflow automation platform developed for college administrative processes.',
    detailedDesc: 'Built a workflow management system for SNGCE to streamline document approvals and administrative operations. Implemented role-based access control for students, faculty, and administrators.',
    keyFeatures: [
      'Workflow Automation',
      'Role-Based Access Control',
      'Document Approval Tracking',
      'Administrative Process Management',
      'Secure User Management'
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB'],
    achievement: '🏆 Recognized and awarded for successfully developing and implementing the system for institutional use.',
    github: 'https://github.com/adishkt/Sngce_Workflow',
    demo: null,
    image: '/workflow.png',
    screenshots: ['/workflow.png', '/invisiguard.png', '/climate.png']
  },
  {
    title: 'Climate Impact Map & Analysis Platform',
    shortDesc: 'Machine learning-powered climate analytics and visualization platform.',
    detailedDesc: 'Developed an interactive platform to analyze climate trends using environmental datasets. Applied XGBoost models for predictive analysis and created visual dashboards and heatmaps.',
    keyFeatures: [
      'Climate Trend Prediction',
      'Interactive Dashboards',
      'Environmental Data Analysis',
      'Heatmap Visualizations',
      'Predictive Analytics'
    ],
    techStack: ['React.js', 'Python', 'XGBoost'],
    achievement: null,
    github: 'https://github.com/adishkt/Climate-And-GHG-Prediction',
    demo: 'https://climappsngce.netlify.app/',
    image: '/climate_2.png',
    screenshots: ['/climate_2.png', '/climate_1.png']
  },
  {
    title: 'University Management System',
    shortDesc: 'Comprehensive academic and administrative management platform.',
    detailedDesc: 'Built a role-based university management system for handling student records, faculty management, course administration, and academic operations through REST APIs.',
    keyFeatures: [
      'Student Management',
      'Faculty Administration',
      'Course Management',
      'REST API Architecture',
      'Database Integration'
    ],
    techStack: ['Node.js', 'MySQL'],
    achievement: null,
    github: 'https://github.com/adishkt/University-Management-System',
    demo: null,
    image: '/university.png',
    screenshots: ['/university.png', '/recipes.png', '/climate.png']
  },
  {
    title: 'Recipe Management Web Application',
    shortDesc: 'Responsive web application for organizing and managing recipes.',
    detailedDesc: 'Created a recipe management platform with full CRUD functionality, allowing users to add, edit, delete, search, and organize recipes efficiently.',
    keyFeatures: [
      'CRUD Operations',
      'Recipe Search',
      'Responsive Design',
      'MongoDB Integration'
    ],
    techStack: ['React.js', 'MongoDB'],
    achievement: null,
    github: 'https://github.com/adishkt/recipe-manager',
    demo: null,
    image: '/recipes.png',
    screenshots: ['/recipes.png', '/university.png', '/climate.png']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 70, damping: 14 } }
};

function ScreenshotGallery({ screenshots }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="gallery-container">
      <img
        src={screenshots[currentIdx]}
        alt={`Screenshot ${currentIdx + 1}`}
        className="gallery-slide"
      />
      {screenshots.length > 1 && (
        <>
          <button className="gallery-nav-btn prev" onClick={prevSlide} aria-label="Previous Slide">
            &#10094;
          </button>
          <button className="gallery-nav-btn next" onClick={nextSlide} aria-label="Next Slide">
            &#10095;
          </button>
          <div className="gallery-dots">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                className={`gallery-dot ${currentIdx === idx ? 'active' : ''}`}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <section id="projects" className="projects-section mb-5" style={{ color: 'var(--text-primary)', transition: 'all 0.3s ease' }}>
      <h2 className="mb-4" style={{ color: 'var(--accent-color)', transition: 'color 0.3s ease' }}>Projects</h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Row xs={1} md={2} lg={3} className="g-4">
          {demoProjects.map((proj, idx) => (
            <Col key={idx}>
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="h-100"
              >
                <Card className="h-100 project-card d-flex flex-column" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)' }}>
                  <div className="project-img-wrapper">
                    <Card.Img variant="top" src={proj.image} className="project-img" alt={proj.title} />
                  </div>
                  <Card.Body className="d-flex flex-column justify-content-between p-3">
                    <div>
                      <Card.Title className="fw-bold mb-2 h5" style={{ color: 'var(--text-primary)' }}>{proj.title}</Card.Title>
                      <div className="mb-2">
                        {proj.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                      <Card.Text className="small text-secondary mb-3">
                        {proj.shortDesc}
                      </Card.Text>
                    </div>
                    <Button 
                      variant="info" 
                      onClick={() => setSelectedProject(proj)}
                      className="w-100 fw-bold mt-auto"
                      style={{ background: 'var(--accent-color)', border: 'none', color: '#000' }}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>

      {/* Modern Read More Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="custom-modal-content"
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 18 } }}
              exit={{ y: 50, scale: 0.95, opacity: 0, transition: { duration: 0.2 } }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close-btn" 
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <Row>
                <Col lg={7} className="mb-4 mb-lg-0">
                  <h3 className="fw-bold mb-3" style={{ color: 'var(--accent-color)' }}>{selectedProject.title}</h3>
                  
                  <div className="mb-4">
                    {selectedProject.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-badge" style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>{tech}</span>
                    ))}
                  </div>

                  <h5 className="fw-bold mb-2">Description</h5>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{selectedProject.detailedDesc}</p>

                  <h5 className="fw-bold mt-4 mb-2">Key Features</h5>
                  <ul className="ps-3" style={{ color: 'var(--text-secondary)' }}>
                    {selectedProject.keyFeatures.map((feature, fIdx) => (
                      <li key={fIdx} className="mb-2">{feature}</li>
                    ))}
                  </ul>

                  {selectedProject.achievement && (
                    <div className="achievement-card">
                      <h6 className="fw-bold mb-1" style={{ color: '#eab308' }}>Recognition & Achievement</h6>
                      <p className="mb-0 small" style={{ color: 'var(--text-primary)' }}>{selectedProject.achievement}</p>
                    </div>
                  )}
                </Col>

                <Col lg={5} className="d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="fw-bold mb-3">Project Gallery</h5>
                    <ScreenshotGallery screenshots={selectedProject.screenshots} />
                  </div>

                  <div className="d-flex gap-3 mt-4 mt-lg-0">
                    <Button
                      variant="dark"
                      href={selectedProject.github}
                      target="_blank"
                      className="flex-grow-1 fw-bold d-flex align-items-center justify-content-center gap-2"
                      style={{ background: 'var(--btn-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)' }}
                    >
                      <FaGithub size={18} /> Source Code
                    </Button>
                    {selectedProject.demo && (
                      <Button
                        variant="info"
                        href={selectedProject.demo}
                        target="_blank"
                        className="flex-grow-1 fw-bold d-flex align-items-center justify-content-center gap-2"
                        style={{ background: 'var(--accent-color)', border: 'none', color: '#000' }}
                      >
                        <FaExternalLinkAlt size={16} /> Live Demo
                      </Button>
                    )}
                  </div>
                </Col>
              </Row>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </motion.div>
  );
}

export default Projects;