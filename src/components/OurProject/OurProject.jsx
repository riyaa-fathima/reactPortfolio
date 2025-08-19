import "./ourProject.scss";
import React from "react";
import { project } from "../../data/data";
import ProjectCard from "../ProjectCard/ProjectCard";

function OurProject() {
  return (
    <div className="ourProject-cont">
      <div className="ourProject-title">
        <h1>Featured project</h1>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          aperiam dolorem? Vel veritatis est cumque corrupti nam nemo labore,
          maxime quidem minus numquam voluptas atque aliquid voluptatum,
          cupiditate ratione totam.
        </h2>
      </div>
      <div className="Cards-cont">
        {project.map((project) =>(

       <ProjectCard key={project.id}/>
        ))}
      </div>
    </div>
  );
}

export default OurProject;
