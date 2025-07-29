import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const demoProjects = [
  {
    title: 'Climate And Air index  Prediction ',
    desc: 'Climate Change Prediction and Air index Analaysis using Machine Learning and React',
    link: 'https://climappsngce.netlify.app/',
  }
  // Add more repositories here as needed, following the same format.
];

function Projects() {
  return (
    <section id="projects" className="projects-section mb-5" style={{ color: '#fff' }}>
      <h2 className="mb-3" style={{ color: '#61dafb' }}>Projects</h2>
      <Row xs={1} md={2} className="g-4">
        {demoProjects.map((proj, idx) => (
          <Col key={idx}>
            <Card bg="dark" text="light" className="mb-3 h-100">
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.desc}</Card.Text>
                <Button variant="info" href={proj.link} target="_blank" disabled>
                  View Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Projects; 