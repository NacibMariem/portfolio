import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const socialProjects = [
  {
    title: "Harassment Awareness",
    description: "Presenting our Harassment Awareness Project, a dedicated initiative aimed at shedding light on the pressing issue of harassment within school environments. With a focus on fostering safe and respectful educational spaces, our project strives to increase awareness and understanding of various forms of harassment that students may encounter.Our project's ultimate goal is to not only raise awareness but also to contribute to the cultivation of a positive and inclusive school environment where every individual feels valued and respected. Through collective efforts, we believe we can pave the way for a future free from harassment, enabling students to thrive academically and emotionally without fear or intimidation.",
    // video: require("../../assets/vids/Esprits Inclusifs+betisier.mp4"),
    video: "https://drive.google.com/file/d/1o_E3Tuznj8bTL-GksrxC5UySt01WM87W/preview",
    videoLink: "https://drive.google.com/file/d/1o_E3Tuznj8bTL-GksrxC5UySt01WM87W/view",
  },
  {
    title: "Time Travel Campaign",
    description: "Introducing our Time Travel Campaign, a unique and imaginative project conceived during our French class. With the goal of fostering innovation and creativity, we delve into the captivating concept of time travel. What sets this project apart is its integration of quantum mechanics, a modern scientific theory that adds a layer of depth to our exploration. By intertwining language, science, and creative thinking, we aim to transport our classmates into a realm where the boundaries of time blur and curiosity knows no bounds.",
    video:"https://drive.google.com/file/d/1qtzg9BWej1k4_75LkLUgf5AT2HjFrxeV/preview",
    videoLink:"https://drive.google.com/file/d/1qtzg9BWej1k4_75LkLUgf5AT2HjFrxeV/view",
    // video: require("../../assets/vids/VideoPublicitaire.mp4"),
  },
  // Add more projects here
];


const SocialProjects = () => {
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [selectedProjectDescription, setSelectedProjectDescription] = useState("");

  const openDescriptionModal = (description) => {
    setSelectedProjectDescription(description);
    setShowDescriptionModal(true);
  };

  const closeDescriptionModal = () => {
    setSelectedProjectDescription("");
    setShowDescriptionModal(false);
  };

  return (
    <Container id="social-projects" className="py-5">
      <h2 className="display-4 text-center mb-5">Social Projects</h2>
      <Row className="justify-content-center">
        {socialProjects.map((project, index) => (
          <Col key={`social-project-${index}`} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.description.substring(0, 30)}
                  {project.description.length > 30 && (
                    <span>
                      ...{" "}
                      <button
                        className="btn btn-link p-0"
                        onClick={() => openDescriptionModal(project.description)}
                      >
                        Read More
                      </button>
                    </span>
                  )}
                </Card.Text>
                <div className="video-container">
                  <iframe
                    title={`Video ${index + 1}`}
                    src={project.video}
                    className="w-100"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="text-center mt-2">
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on Google Drive
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showDescriptionModal} onHide={closeDescriptionModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Full Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedProjectDescription}</Modal.Body>
      </Modal>
    </Container>
  );
};

export default SocialProjects;