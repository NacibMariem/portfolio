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
    description: " ASSURINI is a revolutionary project aimed at transforming the insurance industry. With innovative solutions and cutting-edge technologies, it aims to streamline insurance processes, enhance customer experience, and provide efficient claim management. Through strategic integration of AI and data analytics, ASSURINI promises to redefine the way insurance services are delivered, ensuring reliability and transparency.",
    images: [
        require("../../assets/img/project1-image1.png"),
        require("../../assets/img/project1-image2.png"),
        require("../../assets/img/project1-image3.png"),
        require("../../assets/img/project1-image4.png"),
    ],
    video: "https://drive.google.com/file/d/1bq9wfvpXUgcyOTgSLhtlqKGiEizwV5m-/preview",
    videoLink: "https://drive.google.com/file/d/1bq9wfvpXUgcyOTgSLhtlqKGiEizwV5m-/view",
  },
  {
    title: "KADDEM",
    description: "KADDEM is a dynamic project focused on empowering communities through digital tools. It aims to bridge the gap between educational resources and underserved areas. By leveraging technology, KADDEM facilitates access to quality learning materials, creating equal opportunities for growth and education for all. The project's vision is to pave the way for a brighter future by promoting knowledge and education.",
    images: [
      require("../../assets/img/project2-image1.png"),
      require("../../assets/img/project2-image2.png"),
    ],
  },
  {
    title: "ça Roule",
    description: "'ça Roule' introduces a transformative solution to urban mobility challenges. Through sustainable and innovative approaches, the project envisions creating a seamless transportation experience. By integrating smart technology and eco-friendly alternatives, ça Roule aims to alleviate traffic congestion and reduce carbon footprint, contributing to cleaner and more efficient urban living.",
    images: [
      require("../../assets/img/project3-image2.png"),
      require("../../assets/img/project3-image1.png"),
      require("../../assets/img/project3-image3.png"),
    ],
  },
  {
    title: "KOUJINTI | Mi COCINA",
    description: "KOUJINTI introduces a comprehensive desktop application tailored for efficient restaurant management. This innovative solution streamlines operations, from order processing to inventory management. With features like table reservations, menu updates, and customer feedback integration, KOUJINTI empowers restaurants to deliver exceptional dining experiences while enhancing productivity and customer satisfaction.",
    images: [
        require("../../assets/img/project4-image1.png"),
        require("../../assets/img/project4-image2.png"),
        require("../../assets/img/project4-image3.png"),
        require("../../assets/img/project4-image4.png"),
    ],
    video: "https://drive.google.com/file/d/1mg_2Fm6q7HjSU0r7O8jw2syhZnXpxmsq/preview",
    videoLink:"https://drive.google.com/file/d/1mg_2Fm6q7HjSU0r7O8jw2syhZnXpxmsq/view",
  },
  {
    title: "SANTEK",
    description: "SANTEK is a dynamic web application revolutionizing healthcare technology. Offering patients the convenience of scheduling online appointments with doctors, SANTEK's user-friendly interface makes medical consultations accessible and hassle-free. Furthermore, it provides a secure platform for patients to upload and share their health documents, fostering seamless communication and collaboration between patients and medical professionals.",
    images: [
        require("../../assets/img/project5-image1.png"),
        require("../../assets/img/project5-image2.png"),
        require("../../assets/img/project5-image3.png"),
        require("../../assets/img/project5-image4.png"),
    ],
    video:"https://drive.google.com/file/d/1FOdfOeSy76wudOCRuFBpot4qg-IT02sW/preview",
    videoLink:"https://drive.google.com/file/d/1FOdfOeSy76wudOCRuFBpot4qg-IT02sW/view",
  },
  {
    title: "LAND OF GARGOYLES",
    description: "Embark on an extraordinary journey into the captivating world of LAND OF GARGOYLES. Immerse yourself in this 2D adventure game where mythical creatures and epic quests await. Traverse through enchanting landscapes, solve puzzles, and unravel an immersive storyline that will keep you engaged and enchanted. LAND OF GARGOYLES redefines gaming with its artistic visuals and engaging gameplay.",
    images: [
      require("../../assets/img/project6-image4.png"),
      require("../../assets/img/project6-image1.png"),
      require("../../assets/img/project6-image2.png"),
      require("../../assets/img/project6-image3.png"),
    ],
    // video: require("../../assets/vids/project6-video.mp4"),
    video:"https://drive.google.com/file/d/15cDcR3jKye5Uci5hmWQpSNh5GAx1Ee8_/preview",
    videoLink:"https://drive.google.com/file/d/15cDcR3jKye5Uci5hmWQpSNh5GAx1Ee8_/view",
  },
  // Add more projects here
];

const IntegratedProjects = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedProjectImages, setSelectedProjectImages] = useState([]);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

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

  const nextProject = () => {
    setActiveProjectIndex((activeProjectIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProjectIndex(
      (activeProjectIndex - 1 + projects.length) % projects.length
    );
  };

  const activeProject = projects[activeProjectIndex];


  const [showDescriptionModal, setShowDescriptionModal] = useState(false);

  const openDescriptionModal = () => {
    setShowDescriptionModal(true);
  };

  const closeDescriptionModal = () => {
    setShowDescriptionModal(false);
  };

  return (
    <Container id="integrated-projects" className="py-5">
      <h2 className="display-3 text-center mb-5">Integrated Projects</h2>
      <Row className="justify-content-center">
        <Col className="justify-content-center" xs={12} md={12}>
          <Row className="mb-3">
            <Col xs={6}>
              <button className="btn btn-dark w-100" onClick={prevProject}>
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </button>
            </Col>
            <Col lg={6}>
              <button className="btn btn-dark w-100" onClick={nextProject}>
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
              <Card.Text>
                {activeProject.description.slice(0, 30)}
                {activeProject.description.length > 30 && (
                  <>
                    {" "}
                    <button
                      className="btn btn-link p-0"
                      onClick={openDescriptionModal}
                    >
                      Read More
                    </button>
                  </>
                )}
              </Card.Text>
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
                        alt={`Project illustration of ${
                          activeProjectIndex + 1
                        } ${imgIndex + 1}`}
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
            <iframe
              src={selectedVideo}
              title={`Video ${activeProjectIndex + 1}`}
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
            ></iframe>
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
      
      <Modal
        show={showDescriptionModal}
        onHide={closeDescriptionModal}
        centered
      >
        <Modal.Header closeButton> 
        <h4>{activeProject.title}</h4>

        </Modal.Header>
        <Modal.Body className="p-4">
          <p>{activeProject.description}</p>
        </Modal.Body>
      </Modal>
      
    </Container>
  );
};

export default IntegratedProjects;