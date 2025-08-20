import { Col, Container, Row } from "react-bootstrap";
import "./projectDes.scss";
import { project } from "../../data/data";
import React from "react";
import { useParams } from "react-router-dom";

function ProjectDesc() {
  const {id} = useParams();
  const projectDes = project.find(pro =>pro.id === parseInt(id) )
  return (
    <div className="detail-page">
      <Container>
        <Row className="justify-content-centre">
          <Col md={8} className="text-center">
            <img src="" alt=""  className="detail-image"/>
            <h1 className="detail-title mt-4">{projectDes.title}</h1>
            <p className="detaiil-description mt-3">
              {projectDes.des}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectDesc;
