import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const socialProjects = [
  {
    title: "Harassment Awareness",
    description: "Raising awareness about harassment issues in the community.",
    // video: require("../../assets/vids/Esprits Inclusifs+betisier.mp4"),
  },
  {
    title: "Time Travel Campaign",
    description: "Promoting time travel education for all ages.",
    // video: require("../../assets/vids/VideoPublicitaire.mp4"),
  },
  // Add more projects here
];


const SocialProjects = () => {
    return (
      <Container id="social-projects" className="py-5">
        <h2 className="display-4 text-center mb-5">Social Projects</h2>
        <Row className="justify-content-center">
          {socialProjects.map((project, index) => (
            <Col key={`social-project-${index}`} xs={12} sm={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="video-container">
                    <video controls className="w-100">
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default SocialProjects;