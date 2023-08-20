import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const experiences = [
  {
    company: "PwC",
    position: "Internship",
    duration: "May 2022 - July 2022",
    logo: require("../../assets/img/pwc-logo.png"),
  },
  {
    company: "Topnet",
    position: "Internship",
    duration: "January 2022 - March 2022",
    logo: require("../../assets/img/pwc-logo.png"),
  },
  {
    company: "Tunis Post",
    position: "Internship",
    duration: "June 2021 - August 2021",
    logo: require("../../assets/img/pwc-logo.png"),
  },
];

const Experiences = () => {
  return (
    <Container id="experiences" className="py-5">
      <h2 className="display-4 text-center mb-5">Experiences</h2>
      <Row className="justify-content-center">
        {experiences.map((experience, index) => (
          <Col xs={12} sm={6} md={4} key={`experience-${index}`}>
            <div className="text-center mb-4">
              <img
                src={experience.logo}
                alt={`${experience.company} Logo`}
                className="experience-logo"
              />
              <p className="mb-0 mt-3">{experience.company}</p>
              <p className="mb-0">{experience.position}</p>
              <p className="mb-0">{experience.duration}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experiences;
