import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


  
export default function Bookings() {
  const isLoggedIn = localStorage.getItem('user_id') && localStorage.getItem('token');

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_id: isLoggedIn ? localStorage.getItem('user_id') : '',
    packageid: isLoggedIn ? localStorage.getItem('packageid') : '',
    email:'',
    phone_number:'',
    residence: '',
    passengers_count: 1, 
    price:'',
    bookingDate: '',
  });
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleNumberOfPeopleChange = (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, passengers_count: parseInt(value, 10) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (isLoggedIn) {
      const bookingData = {
        user_id: localStorage.getItem('user_id'),
        packageid: localStorage.getItem('packageid'),
        email: document.querySelector('[name="email"]').value,
        residence: document.querySelector('[name="residence"]').value,
        passengers_count: parseInt(document.querySelector('[name="numberOfPeople"]').value, 10),
        phone_number: document.querySelector('[name="phone_number"]').value,
        price: parseInt(document.querySelector('[name="price"]').value, 10),
        bookingDate: document.querySelector('[name="bookingDate"]').value,
      };
  
      axios
        .post('https://localhost:7077/api/Booking', bookingData)
        .then((response) => {
          const booking_id = response.data.booking_id;
          localStorage.setItem('booking_id', booking_id);
          console.log(localStorage.getItem('packageid'));
          console.log('Booking created successfully:', response.data);
          navigate('/bookstatus', { state: { passengers_count: bookingData.passengers_count } });
        })
        .catch((error) => {
          console.error('Error creating booking:', error);
        });
    } else {
      alert('Login first to book the details.');
    }
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

      <br/><br/><br/>
      <h2>Booking Form</h2>
      {isLoggedIn ? (
        <div className="container mt-5">
          <form onSubmit={handleSubmit} className="shadow p-4 rounded">
            <div className="mb-3">
              <label htmlFor="residence" className="form-label">Residence:</label>
              <input
                type="text"
                name="residence"
                value={formData.residence}
                onChange={handleInputChange}
                required
                className="form-control"
                placeholder="Enter Residence"
              />
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-control"
                placeholder="Enter email"
              />
              <label htmlFor="phone_number" className="form-label">Phone:</label>
              <input
                type="number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                required
                className="form-control"
                placeholder="Enter Phone"
              />
              <label htmlFor="price" className="form-label">Price:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                className="form-control"
                placeholder="Enter price"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="numberOfPeople" className="form-label">Number of People:</label>
              <select
                name="numberOfPeople"
                value={formData.passengers_count}
                onChange={handleNumberOfPeopleChange}
                required
                className="form-select"
              >
                
                {Array.from({ length: 10 }, (_, index) => index + 1).map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="bookingDate" className="form-label">Booking Date:</label>
              <input
                type="date"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-block">Book Now</button>
            </div>
          </form>
        </div>
      ) : (
        <p>Login first to book the details.</p>
      )}
    </div>
  );
}