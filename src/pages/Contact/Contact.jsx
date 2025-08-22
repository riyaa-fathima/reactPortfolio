import React, { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import riya from "../../assets/riya.jpeg";
import "./contact.scss";

function Contact() {
  const nameRef =useRef();
  const emailRef =useRef();
  const serviceRef =useRef();
  const helpRef =useRef();

  const handleSubmit =(e) =>{
    e.preventDefault();
    const form ={
      name:nameRef.current.value,
      email:emailRef.current.value,
      sevice:serviceRef.current.value,
      help:helpRef.current.value,
    };
  };

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
              <form action="" className="contact-form">
                <div className="form-top">
                  <div className="form-input">
                    <label> Name</label>
                    <input type="text" ref={nameRef} placeholder="name" />
                  </div>
                <div className="form-input">
                  <label> email</label>
                  <input type="email" ref={emailRef} placeholder="email" />
                </div>
                </div>

                <div className="form-btm">
                  <div className="form-input">
                    <label htmlFor="">Service neeeded</label>
                    <input type="text" ref={serviceRef}/>
                  </div>
                  <div className="form-input">
                    <label htmlFor="">How can i help you</label>
                    <textarea ref={helpRef}/>
                  </div>
                </div>
                <button className="contact-btn"type="submit" >Submit</button >
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
