import React from "react";
import "./aboutMe.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import riyaa from "../../assets/riyaa.jpeg";

function AboutMe() {
  return (
    <div className="about-cont">
      <Container>
        <Row>
          <Col className="about-content">
            <h1> ABOUT ME</h1>
            <div>
              <h3>Riya fathima</h3>
              <p>
                I’m a MERN Stack developer passionate about creating modern,
                responsive, and user-friendly web applications. I enjoy solving
                problems, learning new technologies, and building projects that
                make a real impact."
              </p>
            </div>

            <div className="social-media">
              <a href="https://www.linkedin.com/in/riya-fathima-ab8384367/" >
                <FaLinkedin  />
              </a >
              <a href="https://github.com/riyaa-fathima">
                <FaInstagram />
              </a >
              <a href="https://github.com/riyaa-fathima">
                <FaGithub />
              </a >
            </div>
          </Col>
          <Col className="myimg-cont">
            <div className="myimg">
              <img src={riyaa} alt="code-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
