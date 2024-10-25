import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../Assets/Sarvesh_4_2024.pdf";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={() => setShowPdf(!showPdf)}
            style={{ maxWidth: "250px" }}
          >
            {showPdf ? "Hide Resume" : "Show Resume"}
          </Button>
          &nbsp;
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {showPdf && (
          <Row className="resume">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>
        )}

        {/* Technology Details Section */}
        <Row className="container" style={{ marginTop: "2rem" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="React Web Development"
              description="Creating responsive and interactive web applications using React.js, ensuring a smooth and engaging user experience with efficient state management and component-based architecture."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Node.js Backend Development"
              description="Building scalable and high-performance server-side applications using Node.js, creating RESTful APIs, and integrating with various databases and third-party services."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="MongoDB Database Integration"
              description="Designing and implementing MongoDB database solutions, optimizing data models, and ensuring efficient data storage and retrieval for your applications."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="React Native Mobile Development"
              description="Developing cross-platform mobile applications for iOS and Android using React Native, providing a native look and feel while maintaining a single codebase."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Native Android Development"
              description="Creating native Android applications using Java or Kotlin, optimizing for performance and leveraging the full potential of Android devices and Google Play services."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="iOS App Development"
              description="Developing native iOS applications using Swift, focusing on smooth user experiences and adhering to Apple's design guidelines for seamless integration with iOS devices."
            />
          </Col>
        </Row>
        </Container>
      </Container>
    </div >
  );
}

export default ResumeNew;
