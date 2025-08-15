import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button, Navbar } from "react-bootstrap";
import "./Navbar.scss";

function NavBar() {
  return (
    <>
      <Navbar className="nav-cont">
        <Container>
          <Nav className="me-auto gap-100">
            <NavLink className="nav-link" to="/home">
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
            <Button className="nav-button" variant="light">
              contact
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
