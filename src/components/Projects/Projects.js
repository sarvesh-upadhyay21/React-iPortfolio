import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import vcProject from "../../Assets/Projects/vcProject.png";
// import listenToMeDoctor from "../../Assets/Projects/listenToMeDoctor.png";
// import iConnect from "../../Assets/Projects/iConnect.png";
// import realityDefender from "../../Assets/Projects/realityDefender.png";
// import allSober from "../../Assets/Projects/allSober.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={vcProject}
              isBlog={false}
              title="Reserve Video Conferencing (VC)"
              description="Developed NIC’s VC services used by top-level officials, including the Hon’ble President, Prime Minister, and Cabinet Secretaries across India, facilitating secure, high-profile communication."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={listenToMeDoctor}
              isBlog={false}
              title="Listen To Me, Doctor App"
              description="A digital platform for patients to record and share symptoms directly with healthcare providers. Includes voice recording for symptom description, enhancing patient-provider communication."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={iConnect}
              isBlog={false}
              title="IConnect 247 Debt Repayment App"
              description="An all-in-one debt repayment and customer self-service app, enabling payments, document sharing, live chat, and push notifications for streamlined debt management."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={realityDefender}
              isBlog={false}
              title="Reality Defender"
              description="Developed to detect threats from deepfakes and AI-generated misinformation, this project protects against fraud in call centers and verifies media for enterprise clients."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={allSober}
              isBlog={false}
              title="AllSober"
              description="All-in-one platform for treatment and sober living resources. Offers support for recovery, with resources for individuals seeking sobriety, all in one place."
              ghLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
