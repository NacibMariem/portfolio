import React from "react";
import Container from "react-bootstrap/container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with respect by{" "}
        <a
          rel="noopener"
          href="https://github.com/nacib1999"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Mariem NACIB
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
