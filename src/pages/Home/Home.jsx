import React from "react";
import "./home.scss";
import NavBar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Skill from "../../components/Skill/Skill";
import AboutFooter from "../../components/AboutFooter/AboutFooter";

function Home() {
  return (
    <div className="main-cont">
      <Hero />
      <Skill />
      <AboutFooter/>
    </div>
  );
}

export default Home;
