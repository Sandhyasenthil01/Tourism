import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';

const GalleryAdmin = () => {
  const [imagegallery, setImagegallery] = useState([]);
  const [tourName, setTourName] = useState("");
  const [locationImage, setLocationImage] = useState(null); 
  const [description, setDescription] = useState("");
  const [cardStyle, setCardStyle] = useState({
    transition: "box-shadow 0.3s",
  });

  useEffect(() => {
    fetchImagegallery();
  }, []);
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
  };
  const handleHover = () => {
    setCardStyle({
      ...cardStyle,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
    });
  };

  const handleLeave = () => {
    setCardStyle({
      ...cardStyle,
      boxShadow: "none",
      cursor: "default",
    });
  };

  const handleView = (image) => {
    localStorage.setItem('selectedTourId', image.tourId);

    console.log("View button clicked for:", image.tourName);
  };
  
  const fetchImagegallery = () => {
    axios.get('https://localhost:7128/api/Gallery')
      .then((response) => {
        const data = response.data;
        setImagegallery(data);
        toast.success('Imagegallery Details', {
          style: {
            background: '#5792FC',
            color: 'white'
          }
        });
      })
      .catch((error) => {
        console.error('Error fetching Imagegallery:', error);
      });
  };

  return (
    <div>
           {/* Navbar */}
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
            <Nav.Link onClick={handleLogout} href="/home">
            Logout
          </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
      <Carousel style={{ width: '50%', margin: 'auto' }}>
        {imagegallery.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`https://localhost:7128/uploads/${image.locationImage}`}
              alt={image.tourName}
              style={{ width: '100%', height: '300px' }}
            />
            <Carousel.Caption>
              <h3>{image.tourName}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="container">
        <h2 className="mb-4">Image Gallery</h2>
        <div className="row">
          {imagegallery.map((image, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card card-small" style={cardStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                <img src={`https://localhost:7128/uploads/${image.locationImage}`} alt={image.tourName} className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{image.tourName}</h5>
                  <p className="card-text">{image.description}</p>
                  <button className="btn btn-primary" onClick={() => handleView(image)}>View Packages</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryAdmin;
