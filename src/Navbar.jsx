
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nav.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="fullscreen-navbar" fixed='top' style={{ fontSize: '38px',backgroundColor:"black" }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className='fw-bolder sofia-regular' style={{ color:'aliceblue', fontSize: "40px" }}>
          RESTO-WEB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" style={{ paddingLeft: "250px", color:"black" }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/Menu" style={{ paddingLeft: "150px", color: "black" }}>Menu</Nav.Link>
            <Nav.Link as={Link} to="/Feedback" style={{ paddingLeft: "150px", color: "black" }}>Feedback</Nav.Link>
            <Nav.Link as={Link} to="/Contact" style={{ paddingLeft: "130px", color: "black" }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

