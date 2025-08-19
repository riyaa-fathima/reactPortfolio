import React from "react";
import "./abourCard.scss";

function AboutCard({name,des}) {
  return (
    <div className="about-card">
      <h3> {name}</h3>
      <p>{des}</p>
    </div>
  );
}

export default AboutCard;
