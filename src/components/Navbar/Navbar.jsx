import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button, Navbar } from "react-bootstrap";
import "./Navbar.scss";

function NavBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <Navbar expand="lg" className="nav-cont ">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-primary " />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className=" nav-des d-flex gap-1">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/project">
                Project
              </NavLink>
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </Nav>
            <Nav>
              <Button
                className="nav-button"
                variant="light"
                onClick={handleClick}
              >
                contact
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
