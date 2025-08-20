import "./ourProject.scss";
import React from "react";
import { project } from "../../data/data";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Link } from "react-router-dom";

function OurProject({data}) {
  return (
    <div className="ourProject-cont">
      <div className="ourProject-title">
        <h1>{data.heading}</h1>
        <h2>
          {data.subHeading
          }
        </h2>
      </div>
      <div className="Cards-cont">
        {project.map((project) => (
          <Link to={`${project.id}`}>
          <ProjectCard
            title={project.title}
            subtitle={project.subtitle || project.body}
            key={project.id}
          />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OurProject;
