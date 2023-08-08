import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { BookingContext } from './BookingContext';
const TravelerBook = () => {
  const { setBookingDetails } = useContext(BookingContext);
  const navigate = useNavigate(); // Get the history object
  const [activeSection, setActiveSection] = useState('signin');
  const [formData, setFormData] = useState({
    user_id: 0,
    email: '',
    phone_number: 0,
    residence: '',
    passengers_count: 0,
    bookingDate: '',
  });
  const connexionRef = useRef(null);
  const generatePDF = () => {
    const input = document.getElementById('booking-form');
    const pdf = new jsPDF('p', 'px', 'a4');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 40, 40, 500, 500);
      pdf.save('booking_form.pdf');
    });
  };
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    formData.isConfirmed = false;
    axios
      .post('https://localhost:7077/api/Booking', formData)
      .then((response) => {
        console.log('Booking success:', response.data);
        setFormData({
            user_id: 0,
            email: '',
            phone_number: 0,
            residence: '',
            passengers_count: 0,
          bookingDate: '2023-08-03T18:40:57.004Z',
        });
        setBookingDetails(formData); 
        navigate('/bookingconfirmation');
        // Update the booking details in the context
      })
      .catch((error) => {
        console.error('Error occurred during booking:', error);
      });
  };

  const handleConnexionClick = () => {
    connexionRef.current.classList.remove('remove-section');
  };

  return (
    <div>
      
      <div className="content">
        <div className="container">
         
          <div className="menu">
            <a
              href="#connexion"
              className={`btn-connexion ${activeSection === 'signin' ? 'active' : ''}`}
              onClick={() => handleConnexionClick()}
            >
              <h2 style={{ fontWeight: 'bold', fontSize: '15px', color: '#333' }}>SIGN IN</h2>
            </a>
          </div>
          {activeSection === 'signin' && (
            <div ref={connexionRef} className="connexion">
              <form onSubmit={handleSubmit}>
                <label style={{ fontWeight: 'bold', fontSize: '10px', color: '#333' }}>USERNAME</label>
                <input
                  name="user_id"
                  type="number" 
                  value={formData.user_id}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  required/>

                <label style={{ fontWeight: 'bold', fontSize: '10px', color: '#333' }}>EMAIL</label>
                <input
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required/>

            <label style={{ fontWeight: 'bold', fontSize: '10px', color: '#333' }}>PHONE NUMBER</label>
                <input
                  name="phone_number"
                  type="number" 
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required/>
                <label style={{ fontWeight: 'bold', fontSize: '10px', color: '#333' }}>CITY OF RESIDENCE</label>
                <input
                  name="residence"
                  type="text"
                  value={formData.residence}
                  onChange={handleChange}
                  placeholder="Enter your city of residence"
                  required/>

                <label style={{ fontWeight: 'bold', fontSize: '10px', color: '#333' }}> Passengers Count</label>
                <input
                  name="passengers_count"
                  type="number" 
                  value={formData.passengers_count}
                  onChange={handleChange}
                  placeholder="Enter the number of people"
                  required/>

              

                <label style={{ fontWeight: 'bold', fontSize: '10px', color: '#333' }}>BOOKING DATE</label>
                <input
                  name="bookingDate"
                  type="datetime-local"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  required/>

                <input className="submit" value="Book Now" type="submit" />
              </form>
              
             
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default TravelerBook;