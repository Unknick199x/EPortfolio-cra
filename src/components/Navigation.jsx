import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import BrandName from "../assets/images/LOGO.png";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg fixed-top">
      <Navbar.Brand href="#home">
        <img src={BrandName} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/Experience">Experience</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
