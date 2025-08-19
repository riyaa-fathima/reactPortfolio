import React, { useState } from "react";
import code from "../../assets/code.jpeg";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./skill.scss";

function Skill() {
  const [toggle, setToggle] = useState(null);

  const skills = [
    {
      title: "Full-Stack Web Development",
      content:
        "Building complete web applications using MongoDB, Express, React, and Node.js (MERN)",
    },
    {
      title: "Frontend Development",
      content:
        "Optimizing performance and reusability with modern React practices",
    },
    {
      title: "Backend Development",
      content: "Authentication, authorization, and secure data handling",
    },
  ];

  const handleToggle = (index) => {
    setToggle(toggle === index ? null : index);
  };

  return (
    <div className="skill-cont">
      <div className="skills">
        <div className="skill-head">
          <h1>What can I do</h1>
          <p>
            I am a MERN stack developer who builds responsive websites and
            full-stack applications using MongoDB, Express, React, and Node.js
          </p>
        </div>

        {skills.map((skill, index) => (
          <div>
            <div key={index} className="skill-each">
              <div className="skill-title" onClick={() => handleToggle(index)}>
                <h3>{skill.title}</h3>
                <div className={`arrow ${toggle === index ? "open" : ""}`}>
                  <RiArrowDropDownLine size={30} />
                </div>
              </div>

              {toggle === index && (
                <div
                  className={`skill-content ${toggle === index ? "open" : ""}`}
                >
                  <p>{skill.content}</p>
                </div>
              )}
            </div>
          </div>
        ))}

      </div>
        <div className="skill-img">
          <img src={code} alt="code" />
        </div>
    </div>
  );
}

export default Skill;
