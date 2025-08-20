import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import riya from "../../assets/riya.jpeg";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact-cont">
      <Container>
        <Row>
          <Col className="cont-img">
            <div className="cont-img-riya">
              <img src={riya} alt="contact-image" />
            </div>
          </Col>
          <Col>
            <div className="contact-title">
              <h1>Lets work together</h1>
              <p>
                I am a MERN stack developer who builds responsive websites and
                full-stack applications using MongoDB, Express, React, and
                Node.js
              </p>
            </div>
            <div>
              <form action="">
                <div>
                  <label> Name</label>
                  <input type="text" placeholder="name" />
                </div>
                <div>
                  <label> email</label>
                  <input type="email" placeholder="email" />
                </div>

                <div>
                  <div>
                    <label htmlFor="">Service neeeded</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">How can i help you</label>
                    <textarea />
                  </div>
                </div>
                <Button>Submit</Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
