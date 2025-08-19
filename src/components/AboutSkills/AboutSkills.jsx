import React from "react";
import "./aboutSkill.scss";
import AboutCard from "../AboutCard/AboutCard";
import { skills } from "../../data/data";

function AboutSkills() {
  return (
    <div className="aboutSkill-cont">
      <h1>Skills</h1>
      <div className="cards-cont">
        {skills.map((skill,index) => (
          <AboutCard name={skill.name} des={skill.des} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default AboutSkills;
