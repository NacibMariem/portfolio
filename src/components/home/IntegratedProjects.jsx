import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
const projects = [
  {
    title: "ASSURINI",
    description: "Description of Project 1",
    images: [
        require("../../assets/img/project1-image1.png"),
        require("../../assets/img/project1-image2.png"),
        require("../../assets/img/project1-image3.png"),
        require("../../assets/img/project1-image4.png"),
    ],
    // video: require("../../assets/vids/project1-video.mp4"),
  },
  {
    title: "KADDEM",
    description: "Description of Project 2",
    images: [
      require("../../assets/img/project2-image1.png"),
      require("../../assets/img/project2-image2.png"),
    ],
  },
  {
    title: "ça Roule",
    description: "Description of Project 3",
    images: [
      require("../../assets/img/project3-image2.png"),
      require("../../assets/img/project3-image1.png"),
      require("../../assets/img/project3-image3.png"),
    ],
  },
  {
    title: "KOUJINTI | Mi COCINA",
    description: "Description of Project 4",
    images: [
        require("../../assets/img/project4-image1.png"),
        require("../../assets/img/project4-image2.png"),
        require("../../assets/img/project4-image3.png"),
        require("../../assets/img/project4-image4.png"),
    ],
    // video: require("../../assets/vids/project4-video.mp4"),
  },
  {
    title: "SANTEK",
    description: "Description of Project 5",
    images: [
        require("../../assets/img/project5-image1.png"),
        require("../../assets/img/project5-image2.png"),
        require("../../assets/img/project5-image3.png"),
        require("../../assets/img/project5-image4.png"),
    ],
    // video: require("../../assets/vids/project5-video.mp4"),
  },
  {
    title: "LAND OF GARGOYLES",
    description: "Description of Project 6",
    images: [
      require("../../assets/img/project6-image4.png"),
      require("../../assets/img/project6-image1.png"),
      require("../../assets/img/project6-image2.png"),
      require("../../assets/img/project6-image3.png"),
    ],
    // video: require("../../assets/vids/project6-video.mp4"),
  },
  // Add more projects here
];

const IntegratedProjects = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedProjectImages, setSelectedProjectImages] = useState([]);
  
    const openVideoModal = (video) => {
      setSelectedVideo(video);
      setShowVideoModal(true);
    };
  
    const closeVideoModal = () => {
      setSelectedVideo(null);
      setShowVideoModal(false);
    };
  
    const openImageModal = (images) => {
      setSelectedProjectImages(images);
      setShowImageModal(true);
    };
  
    const closeImageModal = () => {
      setSelectedProjectImages([]);
      setShowImageModal(false);
    };
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);

    const nextProject = () => {
      setActiveProjectIndex((activeProjectIndex + 1) % projects.length);
    };
    const prevProject = () => {
        setActiveProjectIndex(
            (activeProjectIndex - 1 + projects.length) % projects.length
          );        
        
      };
    const activeProject = projects[activeProjectIndex];
   
    return (
        <Container id="integrated-projects" className="py-5">
          <h2 className="display-3 text-center mb-5">Integrated Projects</h2>
          <Row className="justify-content-center">
        <Col className="justify-content-center" xs={12} md={12}>
        <Row className="mb-3">
                <Col xs={6}>
                  <button
                    className="btn btn-dark w-100"
                    onClick={prevProject}
                  >
                            <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
                  </button>
                </Col>
                <Col lg={6}>
                  <button
                    className="btn btn-dark w-75"
                    onClick={nextProject}
                  >
                            <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
                  </button>
                </Col>
              </Row>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <Card.Title>{activeProject.title}</Card.Title>
                  <Card.Text>{activeProject.description}</Card.Text>
                </div>
                {activeProject.video && (
                  <button
                    className="btn btn-primary"
                    onClick={() => openVideoModal(activeProject.video)}
                  >
                    View Video
                  </button>
                )}
              </div>
              <div className="project-media">
                <Carousel interval={null}>
                  {activeProject.images.map((image, imgIndex) => (
                    <Carousel.Item key={`image-${imgIndex}`}>
                      <img
                        src={image}
                        alt={`Project illustration of ${activeProjectIndex + 1} ${imgIndex + 1}`}
                        className="img-fluid"
                        onClick={() => openImageModal(activeProject.images)}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="mt-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => openImageModal(activeProject.images)}
                >
                  View Images
                </button>
              </div>
            </Card.Body>
          </Card>

        </Col>
      </Row> 
        <Modal
          show={showVideoModal}
          onHide={closeVideoModal}
          centered
          size="lg"
        >
          <Modal.Body className="p-0">
            {selectedVideo && (
              <video controls className="w-100">
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Modal.Body>
        </Modal>
  
        <Modal show={showImageModal} onHide={closeImageModal} centered size="xl">
          <Modal.Body className="p-0">
            <Carousel interval={null}>
              {selectedProjectImages.map((image, imgIndex) => (
                <Carousel.Item key={`project-image-${imgIndex}`}>
                  <img
                    src={image}
                    alt={`Project illustration of ${imgIndex + 1}`}
                    className="w-100"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      </Container>
    );
  };
  
  export default IntegratedProjects;