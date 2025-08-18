import "./App.scss";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/Navbar";
import Skill from "./components/Skill/Skill";

function App() {
  return (
    <div className="main-cont">
      <NavBar />
      <Hero />
      <Skill/>
    </div>
  );
}

export default App;
