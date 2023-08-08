import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { Carousel, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';

export default function TravelPackages() {
  const [tourPackageData, setTourPackageData] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [searchText, setSearchText] = useState('');
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
  };
  const navigate = useNavigate();
  useEffect(() => {
    fetchTourPackageData();
  }, []);
  const fetchTourPackageData = async () => {
    try {
      const TourId = parseInt(localStorage.getItem('TourId'))
      if (TourId) {
        const response = await axios.get(`https://localhost:7068/api/Package/TourId/${TourId}`);
        setSelectedTour(response.data);
        setTourPackageData(response.data);  
      }
    } catch (error) {
      console.error('Error fetching tour package data:', error);
    }
  };


  const handleView = (tourPackage) => {
    localStorage.setItem('packageid', tourPackage.package_id);
    console.log("View button clicked for:", tourPackage.packagename);
    navigate('/bookings');
  };
  const filteredTourPackageData = tourPackageData.filter((tourPackage) =>
  tourPackage.hotel_nearby.includes(searchText) || tourPackage.speciality_of_the_place.includes(searchText)
);
  return (      

   
    <section className="my-background-radial-gradient overflow-hidden" style={{ marginTop: '50px' }}>
      {/* ...Rest of the component's code... */}
      <style>
        {`
      .nav-links li.search {
  margin-left: auto; /* Push the search input to the right */
  display: flex;
  align-items: center;
}

.nav-links li.search input {
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 16px;
  width: 200px; /* Adjust the width as needed */
}

@media screen and (max-width: 768px) {
  .nav-links li.search {
    margin-left: 10px; /* Adjust the margin for smaller screens */
    width: auto;
  }

  .nav-links li.search input {
    width: 100%; /* Make the search input take full width on smaller screens */
  }
}

`}
</style>
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
            <Nav.Link href="/admingallery">Destinations </Nav.Link>
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
      <div className="row">
          {filteredTourPackageData.map(tourPackages => (
            <div key={tourPackages.tourId} className="col mb-4">
              <div className="card my-bg-glass h-100">
                <img
                  src={`https://localhost:7068/uploads/${tourPackages.image}`}
                  className="card-img-top"
                  alt=""
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                  <div className="card-body">
                <h5 className="card-title">{tourPackages.packagename}</h5>
                <p className="card-text">
                <i class="bi bi-check-all"></i><strong>Hotel Name:</strong>{' '}
  <span style={{ fontStyle: 'italic' }}>{tourPackages.hotel_nearby}</span>
</p>
<p className="card-text">
<i class="bi bi-check-all"></i> <strong>Food Details:</strong>{' '}
  <span style={{ fontStyle: 'italic' }}> {tourPackages.food}</span>
</p>
<p className="card-text">
<i class="bi bi-check-all"></i> <strong>Speciality of the Place:</strong>{' '}
  <span style={{ fontStyle: 'italic' }}> {tourPackages.speciality_of_the_place}</span>
</p>
<p className="card-text">
<i class="bi bi-check-all"></i> <strong>Itinerary Details:</strong>{' '}
  <span style={{ fontStyle: 'italic' }}> {tourPackages.itenary}</span>
</p>

<p className="card-text">
<i class="bi bi-check-all"></i><strong>Vacation Type:</strong>{' '}
  <span style={{ fontStyle: 'italic' }}> {tourPackages.vacation_type}</span>
</p>
<p className="card-text">
<i class="bi bi-check-all"></i><strong>Duration:</strong>{' '}
  <span style={{ fontStyle: 'italic' }}> {tourPackages.duration}</span>
</p>  
<div className="d-flex justify-content-between align-items-center">
  <div className="price-box">
    <p className="starting-from">Starting from</p>
    <p className="price">
    <i class="bi bi-currency-rupee"></i> {tourPackages.price}
    </p>
    <p className="per-person">per person</p>
  </div>
  <Link to ='/bookings'className="btn btn-primary" onClick={() => handleView(tourPackages)}>
    Book Now
  </Link>
</div>


              </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>







     
    </section>
  );
}