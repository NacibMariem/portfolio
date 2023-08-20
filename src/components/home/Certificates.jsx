import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Certificates = () => {
  const certificateDirectory = require.context(
    "../../editable-stuff/",
    false,
    /Certificate .*\.pdf$/ 
  );

  const certificatePDFs = certificateDirectory.keys().map((key) => {
    const certificateName = key.match(/Certificate (.*)\.pdf$/)[1];
    return {
      name: certificateName,
      link: certificateDirectory(key),
    };
  });

  const [selectedCertificate, setSelectedCertificate] = useState(
    certificatePDFs[0]
  );

  const scrollToCertificateFrame = () => {
    const frame = document.getElementById("certificate-frame");
    if (frame) {
      frame.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container id="certificates" className="py-5">
      <h2 className="display-4 text-center mb-5">Certificates</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {certificatePDFs.map((certificate, index) => (
          <OverlayTrigger
            key={`certificate-${index}`}
            placement="top"
            overlay={<Tooltip>Click to view the certificate</Tooltip>}
          >
            <Card
              className="m-3"
              onClick={() => {
                setSelectedCertificate(certificate);
                scrollToCertificateFrame();
              }}
              style={{
                cursor: "pointer",
                maxWidth: "300px",
                border: "none",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s ease",
                borderRadius: "10px",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
              }}
            >
              <Card.Body>
                <Card.Title className="text-center">
                  {certificate.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </OverlayTrigger>
        ))}
      </div>
      <div
        id="certificate-frame"
        className="certificate-frame mt-3"
        style={{ paddingTop: "20px" }}
      >
        <h4 className="text-center">{selectedCertificate.name}</h4>
        <iframe
          title={`Certificate ${selectedCertificate.name}`}
          src={selectedCertificate.link}
          style={{ width: "100%", height: "500px" }}
        />
      </div>
    </Container>
  );
};

export default Certificates;
