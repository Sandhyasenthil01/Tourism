import React from 'react';
import { Carousel, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';


const AboutUs = () => {

    const customDivider = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E";

  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: `
        .about-us {
          padding: 50px 0;
          background-color: #f8f9fa;
        }
           
        .icon-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 15px;
            color: #ff5722; /* Set your desired icon color */
          }
          
        .quality-card {
          background-color: #f0f0f0;
          text-align: center;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 1s forwards;
        }

        .quality-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .quality-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .quality-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
  


      <nav style={{'--bs-breadcrumb-divider': `url(${customDivider})`}} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/home">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">About Us</li>
      </ol>
    </nav>


    <div className="container mt-4">
        {/* Introductory picture */}
        <div className="text-center mb-4">
          <img src="https://t3.ftcdn.net/jpg/00/88/24/18/240_F_88241838_hi4AmHHbZ7m2lDl5ywKpGSdArfx33pUa.jpg" alt="Introductory" className="img-fluid" />
          <p className="mt-3">Discover Your Dream Destinations with Us</p>
        </div>

        <h2 className="text-center mb-4">Why Choose Us?</h2>

        <p className="slide-up">
          Welcome to our tourism website! We are passionate about providing you with
          unforgettable travel experiences. Whether you're looking for adventure, relaxation,
          or cultural exploration, we have the perfect destinations and packages for you.
        </p>
        <p className="slide-up">
          Our team of dedicated travel experts is committed to making your dream vacation a reality.
          With years of experience in the industry, we ensure that every detail of your trip is taken care of.
        </p>
        <p className="slide-up">
          Explore our wide range of tour packages, from exotic beach getaways to thrilling mountain expeditions.
          We believe that travel is a journey of discovery, and we're here to help you create memories that last a lifetime.
        </p>
        <p className="slide-up">
          Contact us today to start planning your next adventure!
        </p>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <Card className="quality-card">
              <Card.Body>
                <div className="icon-container">
                  <i className="fa fa-heartbeat fa-3x" aria-hidden="true"></i>
                </div>
                <Card.Title>Unmatched Quality</Card.Title>
                <Card.Text>Experience the highest standards in travel.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="quality-card">
              <Card.Body>
                <div className="icon-container">
                  <i className="fa fa-star fa-3x" aria-hidden="true"></i>
                </div>
                <Card.Title>5-Star Accommodation</Card.Title>
                <Card.Text>Luxurious stays for a comfortable journey.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="quality-card">
              <Card.Body>
                <div className="icon-container">
                  <i className="fa fa-map-signs fa-3x" aria-hidden="true"></i>
                </div>
                <Card.Title>Expert Guides</Card.Title>
                <Card.Text>Explore with knowledgeable and friendly guides.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Explore Our Offerings</h2>
        <div className="row">
          <div className="col-md-3 mb-6">
            <div className="d-flex">
              {/* Image on the left */}
              <img
                src="https://t3.ftcdn.net/jpg/01/15/89/66/240_F_115896652_50izDX6bu8SNZ1xX8NPwXjQK63vveHVa.jpg" // Replace with your image URL
                alt="Offering"
                className="img-fluid me-3"
                style={{ width: '800px' }}
              />
              <div>
                <h5>Adventure Tours</h5>
                <p>Embark on thrilling adventures and explore the unknown.</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <br></br>
    </div>
  );
};

export default AboutUs;
