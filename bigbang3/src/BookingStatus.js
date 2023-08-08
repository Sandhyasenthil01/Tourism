import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Carousel, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';

export default function BookingStatus() {
  const [bookingData, setBookingData] = useState(null);
  const [tourPackage, setTourPackage] = useState(null);
  const [travellerData, setTravellerData] = useState(null); // State to store traveler's data
  
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
  };
  useEffect(() => {
    const storedTravellerId = localStorage.getItem('user_id');
    if (storedTravellerId) {
      axios
        .get(`https://localhost:7077/api/Traveller/${storedTravellerId}`)
        .then((response) => {
          setTravellerData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching traveler data:', error);
        });
    }
  }, []);
  useEffect(() => {
    const storedBookingId = localStorage.getItem('booking_id');
    const storedPackageId = localStorage.getItem('packageid');

    if (storedBookingId && storedPackageId) {
      fetch(`https://localhost:7077/api/Booking/${storedBookingId}`)
        .then((response) => response.json())
        .then((data) => {
          setBookingData(data);
        })
        .catch((error) => {
          console.error('Error fetching booking data from API:', error);
        });

      axios.get(`https://localhost:7068/api/Package/${storedPackageId}`)
        .then(response => {
          setTourPackage(response.data);
        })
        .catch(error => {
          console.error('Error fetching tour package:', error);
        });
    } else {
      console.error('BookingId or PackageId not found in Session Storage');
    }
  }, []);

  const location = useLocation();
  
  const numberOfPeople = location.state?.passengers_count || 1; // Get the number of persons from the state, default to 1 if not available.
  
  const getBookingStatus = (isConfirmed) => {
    return isConfirmed === 0 ? 'Requested' : 'Successful';
  };

  const handlePayNowClick = () => {
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
  };

  // Inside your BookingStatus component
const booking_id = localStorage.getItem('booking_id');

// Use booking_id in your API request
axios.get(`https://localhost:7077/api/Booking/${booking_id}`)
  .then((response) => {
    // Handle the API response here
  })
  .catch((error) => {
    console.error('Error fetching booking:', error);
  });

  return (
    <div> <Navbar bg="light" expand="lg">
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
    <div style={{ marginTop: '8%' }} className="container">
  <div className="row">
    <div className="col-md-6">
      <h1>Booking Status</h1>
      {bookingData ? (
        <>
          <p>Booking Id: {bookingData.booking_id}</p>
          <p>Booking Status: {getBookingStatus(bookingData.isConfirmed)}</p>
          <p>Number of People: {bookingData.passengers_count}</p>
        </>
      ) : (
        <p>Loading booking data...</p>
      )}
    </div>
    <div className="col-md-6">
      {travellerData ? (
        <>
          <h2>Traveler Details</h2>
          <p>Name: {travellerData.user_name}</p>
          <p>Email: {travellerData.user_password}</p>
        </>
      ) : (
        <p>Loading traveler details...</p>
      )}
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
    {tourPackage ? (
          
          <div className="card">
            <img
        src={`https://localhost:7068/uploads/${tourPackage.image}`}
        alt="Tour Package"
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <p className="card-text">Price: {tourPackage.price}</p>
              <p className="card-text">Duration: {tourPackage.duration}</p>
              <p className="card-text">Hotel: {tourPackage.hotel_nearby}</p>
              <hr/>
              <center><p>Total Price: {tourPackage.price * numberOfPeople}</p></center>
              
<div className="text-center">
  {bookingData && bookingData.isConfirmed === 1 ? (
   <div> <button className="btn btn-danger" disabled>
      Paid
    </button> 
       <Link to='/confirm' className="btn btn-danger" disabled>
       Generate Bill
     </Link></div>
  ) : (
    <Link
    to='/payment'
      className="btn btn-primary"
      onClick={handlePayNowClick}
      disabled={!bookingData || !tourPackage} // Disable button if data is not loaded
    >
      Pay Now
    </Link>
  )}
</div>
            </div>
          </div>
        ) : (
          <p>Loading tour package data...</p>
        )}
      </div>    
    <div className="col-md-6">
      {/* Traveler details content */}
    </div>
  </div>
</div>

  </div>
  );
}