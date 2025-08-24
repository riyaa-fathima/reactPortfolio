import React from "react";
import code from "../../assets/code.jpeg";
import "./projectCard.scss";

function ProjectCard({title,subtitle}) {
  return (
    <div className="project-card h-100">
      <div className="project-img">
        <img src={code} alt="code" />
      </div>
      <div className="project-des">
        <h1>{title}</h1>
        <h3>
         {subtitle}
        </h3>
      </div>
    </div>
  );
}

export default ProjectCard;
