import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';

const Imagegallery = () => {
  const [imagegallery, setImagegallery] = useState([]);
  const [tourName, setTourName] = useState("");
  const [locationImage, setLocationImage] = useState(null); 
  const [description, setDescription] = useState("");
  const [cardStyle, setCardStyle] = useState({
    transition: "box-shadow 0.3s",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchImagegallery();
  }, []);

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
    navigate(`/package/${tourId}`); 
  }

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("tourName", tourName);

    if (locationImage) {
        formData.append("imageFile", locationImage);
    }

    formData.append("description", description);

    axios.post('https://localhost:7128/api/Gallery', formData, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      enctype: 'multipart/form-data',
    })
      .then((response) => {
        console.log('Image added successfully:', response.data);
        toast.success('Image added successfully');
        fetchImagegallery(); 
        setTourName("");
        setLocationImage(null);
        setDescription("");
      })
      .catch((error) => {
        console.error('Error adding image:', error);
        toast.error('Error adding image');
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; 
    setLocationImage(file); 
  };

  return (
    <div>
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

    <div className="container">
      <h2>Image Gallery</h2>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="tourName" className="form-label">Tour Name</label>
          <input
            type="text"
            id="tourName"
            value={tourName}
            onChange={(e) => setTourName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="locationImage" className="form-label">Image</label>
          <input
            type="file"
            id="locationImage"
            onChange={handleImageChange} 
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Image</button>
      </form>
      <h2 className="mb-4">Image Gallery</h2>

      <div className="row">
        {imagegallery.map((image, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card card-small" style={cardStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
              <img src={`https://localhost:7128/uploads/${image.locationImage}`} alt={image.tourName} className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">{image.tourName}</h5>
                <p className="card-text">{image.description}</p>
                <button className="btn btn-primary" onClick={() => handleView(image.tourId)}>View Packages</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Imagegallery;
