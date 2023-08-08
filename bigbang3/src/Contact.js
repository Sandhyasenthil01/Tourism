import React from 'react';
import { Card } from 'react-bootstrap';
import { Carousel, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <div>                <style dangerouslySetInnerHTML={{__html: `.social-icons {
        display: flex;
        gap: 20px; /* Adjust the gap as needed */
      }
      
      .social-icon {
        font-size: 24px; /* Adjust the icon size as needed */
        color: #333; /* Set your desired icon color */
      }`}} />
  <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home">
        <img
          src=" https://t3.ftcdn.net/jpg/01/05/98/42/240_F_105984234_zUGphn1srJy0qnUA4YkV84VQyQV4mAXb.jpg"
          width="50"
          height="40"
          className="d-inline-block align-top"
          alt="Your Brand Logo"
        />
        {'Wander'}
      </Navbar.Brand>        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/package">Tour Packages </Nav.Link>
            <Nav.Link href="/about">About Us </Nav.Link>
            <Nav.Link href="/contact">Contact </Nav.Link>
            <Nav.Link href="/admingallery">Gallery </Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Admin">Admin</NavDropdown.Item>
              <NavDropdown.Item href="/Login">Traveller</NavDropdown.Item>
              <NavDropdown.Item href="/regagency">Traveller Agent</NavDropdown.Item>

            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    <div className="container mt-4">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card border="primary" className="h-100">
            <Card.Body>
              <div className="d-flex align-items-center">
                <i class="bi bi-telephone-fill"></i>
                <div className="ms-3">
                  <p>Questions about your trip?</p>
                  <p>Reach out to us anytime for assistance:</p>
                  <p>Email: info@tourismcompany.com</p>
                  <p>Phone: +1 (123) 456-7890</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card border="primary" className="h-100">
            <Card.Body>
              <div className="d-flex align-items-center">
                <i class="bi bi-geo-alt-fill"></i>
                <div className="ms-3">
                  <p>Visit Our Office</p>
                  <p>Come meet us in person at our office:</p>
                  <p>123 Tourist Street, Cityville, Country</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card border="primary" className="h-100">
            <Card.Body>
              <div className="d-flex align-items-center">
                <i class="bi bi-clock-fill"></i>
                <div className="ms-3">
                  <p>Opening Hours</p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <Card border="primary">
            <Card.Body>
              <h4>Contact Form</h4>
              <p>We'd love to hear from you! Use the form below to send us a message:</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br></br>

      <footer className="footer" style={{ backgroundColor: 'lightgrey' }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h4>Contact Us</h4>
        <p>Email: contact@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className="col-md-6">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="bi bi-instagram"></i>
          </a>
          {/* Add more social media links */}
        </div>
      </div>
      {/* Additional content */}
      <div className="col-md-6">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-md-6">
        <h4>Location</h4>
        <p>123 Main Street, City, Country</p>
      </div>
    </div>
  </div>
</footer>
</div>

    </div>
  );
};

export default ContactPage;
