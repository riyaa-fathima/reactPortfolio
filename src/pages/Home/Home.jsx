import React from "react";
import "./home.scss";
import NavBar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Skill from "../../components/Skill/Skill";

function Home() {
  return (
    <div className="main-cont">
      <Hero />
      <Skill />
    </div>
  );
}

export default Home;
