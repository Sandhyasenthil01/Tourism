import axios from 'axios';
import { Card } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Tourpost = () => {
  const [newPackage, setNewPackage] = useState({
    food: '',
    hotel_nearby: '',
    spots_nearby: '',
    speciality_of_the_place: '',
    itenary: '',
    image: null,
    price: 0,
    vacation_type: '',
    duration: '',
  });
  const navigate = useNavigate();
  const apiUrl = 'https://localhost:7068/api/Package';
  useEffect(() => {
        
  
    // const isAuthenticated = localStorage.getItem('token');
    // const userRole = localStorage.getItem('role'); // Assuming role is stored in local storage
    
    // if (!isAuthenticated) {
    //   navigate('/loginagency'); // Redirect to the login page if not authenticated
    // } else if (userRole !== 'agent') {
    //   navigate('/loginagency'); // Redirect to a different page if the role is not "user"
    // } else {
    //   handleFormSubmit();
    // }
   
}, []);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('food', newPackage.food);
      formData.append('hotel_nearby', newPackage.hotel_nearby);
      formData.append('spots_nearby', newPackage.spots_nearby);
      formData.append('speciality_of_the_place', newPackage.speciality_of_the_place);
      formData.append('itenary', newPackage.itenary);
      formData.append('imageFile', newPackage.image);
      formData.append('price', newPackage.price);
      formData.append('vacation_type', newPackage.vacation_type);
      formData.append('duration', newPackage.duration);

      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('New tour package added successfully:', response.data);
      setNewPackage({
        food: '',
        hotel_nearby: '',
        spots_nearby: '',
        speciality_of_the_place: '',
        itenary: '',
        image: null,
        price: 0,
        vacation_type: '',
        duration: '',
      });
    } catch (error) {
      console.error('Error adding new tour package:', error);
    }
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setNewPackage({ ...newPackage, image: file });
  };

  return (
    <div className="container-sm mt-5"  style={{ maxWidth: '600px' }}>
      <Card>
        <Card.Body>
          <Card.Title>Add New Tour Package</Card.Title>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="food" className="form-label">Food </label>
              <input
                type="text"
                id="food"
                value={newPackage.food}
                onChange={(e) => setNewPackage({ ...newPackage, food: e.target.value })}
                className="form-control"
                required
              />
            </div>
       
        <div className="mb-3">
          <label htmlFor="hotel_nearby" className="form-label">Hotel </label>
          <input
            type="text"
            id="hotel_nearby"
            value={newPackage.hotel_nearby}
            onChange={(e) => setNewPackage({ ...newPackage, hotel_nearby: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="spots_nearby" className="form-label">Spot Nearby</label>
          <input
            type="text"
            id="spots_nearby"
            value={newPackage.spots_nearby}
            onChange={(e) => setNewPackage({ ...newPackage, spots_nearby: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="speciality_of_the_place" className="form-label">Speciality of the Place</label>
          <input
            type="text"
            id="speciality_of_the_place"
            value={newPackage.speciality_of_the_place}
            onChange={(e) => setNewPackage({ ...newPackage, speciality_of_the_place: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="itenary" className="form-label">Itinerary Details</label>
          <input
            type="text"
            id="itenary"
            value={newPackage.itenary}
            onChange={(e) => setNewPackage({ ...newPackage, itenary: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            id="price"
            value={newPackage.price}
            onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="vacation_type" className="form-label">Vacation Type</label>
          <input
            type="text"
            id="vacation_type"
            value={newPackage.vacation_type}
            onChange={(e) => setNewPackage({ ...newPackage, vacation_type: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration</label>
          <input
            type="text"
            id="duration"
            value={newPackage.duration}
            onChange={(e) => setNewPackage({ ...newPackage, duration: e.target.value })}
            className="form-control"
            required
          />
        </div>            <button type="submit" className="btn btn-primary">Add New Tour Package</button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Tourpost;
