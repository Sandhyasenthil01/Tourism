import React from 'react';
import { Carousel, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
const Navigation = () => {
  
  return (
    <div>
<Navbar bg="light" expand="lg">
<Navbar.Brand href="#home">Your Brand</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <NavDropdown title="Tours" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Package 1</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Package 2</NavDropdown.Item>
      {/* Add more NavDropdown.Items for additional packages */}
    </NavDropdown>
  </Nav>
  {/* Admin Link (Right Side) */}
  <div className="ml-auto"></div>
  <Nav>
    <Nav.Link href="/Admin">Admin</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
</div>
  )
}
export default Navigation;
