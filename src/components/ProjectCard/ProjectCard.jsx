import React from "react";
import code from "../../assets/code.jpeg";
import "./projectCard.scss";

function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={code} alt="code" />
      </div>
      <div className="project-des">
        <h1>project name</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est
          rerum earum asperiores officia optio itaque dolorem magnam nesciunt?
          Iure, accusamus maxime placeat libero eaque numquam velit autem at
          nulla.
        </h3>
      </div>
    </div>
  );
}

export default ProjectCard;
