import React from "react";
import "./hero.scss";
import { Col, Container, Row } from "react-bootstrap";
import riyaa from "../../assets/riyaa.jpeg";
function Hero() {
  return (
    <>
      <section className="hero-cont">
        <Container>
          <Row className="row-cont">
            <Col className="col-name">
              <div className="my-name">
                <span>Riya Fathima</span>
                <h1>Mern Stack</h1>
              </div>
            </Col>
            <Col className="my-img">
            <img src={riyaa} alt="riya" /></Col>
            <Col>
              <div className="my-prof">
                <h1>Developer</h1>
                <p>i am a aspiring mern stack developer</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Hero;
