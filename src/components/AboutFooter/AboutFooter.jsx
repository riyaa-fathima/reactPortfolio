import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutFooter.scss";

const AboutFooter = () => {
  return (
    <section className="about-me py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={8} md={12} className="mb-4">
            <div className="about-box p-4">
              <h2 className="section-title">ABOUT ME</h2>
              <p className="description">
                Hi, i am <span className="highlight">Riya fathima</span> — I’m a
                MERN Stack developer passionate about creating modern,
                responsive, and user-friendly web applications.
              </p>

              <Row className="stats-row text-center">
                <Col>
                  <h3>0</h3>
                  <p>Years of Experience</p>
                </Col>
                <Col>
                  <h3>0</h3>
                  <p>Completed Projects</p>
                </Col>
                <Col>
                  <h3>0+</h3>
                  <p>Clients Worldwide</p>
                </Col>
              </Row>

              <div className="contact-info mt-4">
                <p>
                  <strong>Call today:</strong> 1234567
                </p>
                <p>
                  <strong>Email:</strong> riyafathima@example.com
                </p>
              </div>
            </div>
          </Col>

          <Col lg={4} md={12}>
            <div className="email-box p-4">
              <h5>Let’s Connect</h5>
              <p>
                <a href="mailto:designer@example.com">riyafatima@example.com</a>
              </p>
              <p>12344567</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutFooter;
