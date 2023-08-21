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

  const [visibleCertificates, setVisibleCertificates] = useState(4);
  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState(
    0
  );

  const handleCertificateClick = (index) => {
    setSelectedCertificateIndex(index);
  };

  const loadMoreCertificates = () => {
    setVisibleCertificates((prevCount) => prevCount + 4);
  };

  const showLessCertificates = () => {
    setVisibleCertificates(4);
  };

  return (
    <Container id="certificates" className="py-5">
      <h2 className="display-4 text-center mb-5">Certificates</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {certificatePDFs.slice(0, visibleCertificates).map((certificate, index) => (
          <OverlayTrigger
            key={`certificate-${index}`}
            placement="top"
            overlay={<Tooltip>Click to view the certificate</Tooltip>}
          >
            <Card
              key={`certificate-${index}`}
              className={`m-3 certificate-card ${
                selectedCertificateIndex === index ? "selected" : ""
              }`}
              onClick={() => handleCertificateClick(index)}
              style={{
                cursor: "pointer",
                maxWidth: "200px",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s ease",
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
      {visibleCertificates < certificatePDFs.length ? (
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={loadMoreCertificates}>
            Load More
          </button>
        </div>
      ) : (
        <div className="text-center mt-3">
          <button className="btn btn-secondary" onClick={showLessCertificates}>
            Show Less
          </button>
        </div>
      )}
      <div className="certificate-frame mt-3" style={{ paddingTop: "20px" }}>
        <h4 className="text-center">
          {certificatePDFs[selectedCertificateIndex].name}
        </h4>
        <iframe
          title={`Certificate ${certificatePDFs[selectedCertificateIndex].name}`}
          src={certificatePDFs[selectedCertificateIndex].link}
          style={{ width: "100%", height: "500px" }}
        />
      </div>
    </Container>
  );
};

export default Certificates;
