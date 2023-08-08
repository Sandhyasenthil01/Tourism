import React from 'react';
import { Carousel, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
  };
  return (
    <div>
                <style dangerouslySetInnerHTML={{__html: `
                /* HomePage.css */

                .quality-card {
                  background-color: #f0f0f0; /* Set your desired background color */
                  text-align: center;
                  padding: 20px;
                  border-radius: 10px;
                  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
                }
                
                .icon-container {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-bottom: 15px;
                  color: #ff5722; /* Set your desired icon color */
                }
                
                /* Add any additional styling you need */
                
                /* HomePage.css */

.tour-card {
  position: relative;
  overflow: hidden;
  border: none;
  transition: transform 0.3s;
}

.tour-card:hover {
  transform: scale(1.05);
}

.tour-card-img-wrapper {
  position: relative;
  overflow: hidden;
  height: 200px; /* Adjust the height as needed */
}

.tour-card-img-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the overlay color as needed */
  opacity: 0;
  transition: opacity 0.3s;
}

.tour-card:hover .tour-card-img-wrapper::before {
  opacity: 1;
}

.introduction-paragraph {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}
/* HomePage.css */

.introduction-section {
  background-color: #f8f9fa; /* Set your desired background color */
  padding: 30px 0;
}

.introduction-heading {
  font-size: 28px;
  font-weight: bold;
  color: #007bff; /* Set your desired heading color */
  margin-bottom: 20px;
}

.introduction-paragraph {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.introduction-section button {
  border: 2px solid #007bff; /* Set your desired button color */
  padding: 10px 30px;
  background: transparent;
  color: #007bff;
  cursor: pointer;
}

.introduction-section button:hover {
  background-color: #007bff;
  color: #fff;
}

/* HomePage.css */
/* HomePage.css */

.card-collage {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  margin: 20px;
}

.card-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
}

.card-item img {
  width: 100%;
  height: auto;
}

.card-item:hover {
  transform: scale(1.05);
}

.card-item button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.card-item:hover button {
  opacity: 1;
}
.social-icons {
  display: flex;
  gap: 20px; /* Adjust the gap as needed */
}

.social-icon {
  font-size: 24px; /* Adjust the icon size as needed */
  color: #333; /* Set your desired icon color */
}


`}} />

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
            <Nav.Link href="/G">Destinations </Nav.Link>
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

      {/* Image Slider */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/02/75/59/05/240_F_275590531_TNr4BtNNu0d4BV32wSEtjSPWfSnUb9mv.jpg"
            alt="First slide"
            style={{ width: '380px', height: '400px' }} 
          />
           <Carousel.Caption>
            <h3>Explore Amazing Destinations</h3>
            <p>Discover the beauty and adventure of our tour packages.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t3.ftcdn.net/jpg/03/10/41/40/240_F_310414014_rvZRc7JSj65gIcx6fKrhzEEA9Ic0fa1N.jpg"
            alt="Second slide"
            style={{ width: '380px', height: '400px' }} 

          />
           <Carousel.Caption>
           <h3>Your Dream Vacation Awaits</h3>
            <p>Choose from a variety of exciting tour packages.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/02/73/06/99/240_F_273069976_xPrryVJPPg7hWYfjfbPT26RAjcz8qOkd.jpg "
            alt="Second slide"
            style={{ width: '380px', height: '400px' }} 

          /> 
          <Carousel.Caption>
          <h3>Unforgettable Travel Experiences</h3>
          <p>Create memories that will last a lifetime with our tours.</p>
        </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items for additional images */}
      </Carousel>
  
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

<h2 className="text-center">Our Best Packages</h2>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mb-4">
          <Card className="tour-card">
                <div className="tour-card-img-wrapper">       
                       <Card.Img variant="top" src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Adventure Package" /> 
                       </div>
                                     <Card.Body>
                <Card.Title>Adventure Package</Card.Title>
                <Card.Text>Experience thrilling adventures in exotic locations.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="tour-card">
            <div className="tour-card-img-wrapper">       
                       <Card.Img variant="top" src="https://i.pinimg.com/474x/32/ad/d8/32add8a8ffbc5c102c0ce42ecd34e582.jpg" alt="Adventure Package" /> 
                       </div>              <Card.Body>
                <Card.Title>Luxury Getaway</Card.Title>
                <Card.Text>Indulge in luxury and relaxation with our premium packages.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="tour-card">
            <div className="tour-card-img-wrapper">       
                       <Card.Img variant="top" src="https://i.pinimg.com/474x/0f/1f/e3/0f1fe33b4ac17f7fc27c5a4b9afa4477.jpg" alt="Adventure Package" /> 
                       </div>              <Card.Body>
                <Card.Title>Cultural Exploration</Card.Title>
                <Card.Text>Immerse yourself in rich cultures and traditions.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12  text-center">
          <h2 className="introduction-heading">Welcome to XYZ Travel Agency</h2>
            <p className="introduction-paragraph"> Welcome to XYZ Travel Agency. Discover amazing destinations and create unforgettable memories with us.
  We offer a range of carefully crafted tour packages to suit your travel interests and preferences.
  Whether you seek adventure, luxury, or cultural experiences, we have the perfect journey for you.
</p>
          </div>
        </div>
      </div>
      <div className="card-collage">
        <div className="card-item card-1">
          <img src="https://i.pinimg.com/474x/38/e5/c7/38e5c784036d0d789c37a50e3e634432.jpg" alt="Package 1" />
          <Button variant="primary">Maldives</Button>
        </div>
        <div className="card-item card-2">
          <img src="https://i.pinimg.com/474x/48/83/64/488364d6f8f2dc41b4d21dd0630b573c.jpg" alt="Package 2" />
          <Button variant="primary">Bangok</Button>
        </div>
        <div className="card-item card-3">
          <img src="https://i.pinimg.com/474x/8f/f0/8f/8ff08f9f783b68d5077af620c46d5582.jpg" alt="Package 3" />
          <Button variant="primary">Andaman</Button>
        </div>
        <div className="card-item card-4">
          <img src="https://i.pinimg.com/474x/39/40/66/394066c260274d0db730009164e30fb9.jpg" alt="Package 4" />
          <Button variant="primary">Thailand</Button>
        </div>
        <div className="card-item card-4">
          <img src="https://i.pinimg.com/474x/5f/b4/ce/5fb4ceb79cfc3e71027db38cdcdc7fcd.jpg" alt="Package 4" />
          <Button variant="primary">Bali</Button>
        </div>
      </div>
      <div className="card mt-4 bg-primary text-white">
              <div className="card-body">
                <h5 className="card-title">Register with XYZ Travel Agency</h5>
                <p className="card-text">Join our amazing travel community and get access to exclusive deals and offers. Register now!</p>
                <Link to="/Login" className="btn btn-warning">
                  Register Now
                </Link>   
              </div>
            </div>
<br></br>
<h2 className="text-center mb-4" style={{ fontStyle: 'oblique', color: '#333' }}>
        Popular Packages
      </h2>
      <p className="text-center">
        Exclusive collection of resorts are selected carefully and handpicked such that they are unique on their own stay.
        All these premium properties will deliver the best vacation to the guests.
      </p>
      {/* Tour Cards */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mb-4">
            <Card className="tour-card">
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: 'none',
                  transition: 'transform 0.3s',
                }}
              >
                <img
                  src="https://i.pinimg.com/474x/9c/2e/36/9c2e36bee809304e5632d09de1c40178.jpg"
                  alt="Singapore"
                  style={{ width: '400px', height: '400px' }}
                />
                <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: '#fff',
                      padding: '20px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      opacity: 0.8,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
               
                  
                  }}
                >
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                      opacity: 1,
                    }}
                  >
                    <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>
                      Singapore
                    </h4>
                    <p style={{ fontSize: '14px' }}>4 days 3 nights</p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                      }}
                    >
                      <i
                        className="bi bi-people-fill"
                        style={{
                          fontSize: '18px',
                          margin: '0 8px',
                          color: '#ff5722',
                        }}
                      > 3</i>
                      <i
                        className="bi bi-currency-rupee"
                        style={{
                          fontSize: '17px',
                          margin: '0 8px',
                          color: '#ff5722',
                        }}
                      >45000</i>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* Add more similar cards for other tour packages */}


          <div className="col-md-4 mb-4">
          <Card className="tour-card">
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: 'none',
                  transition: 'transform 0.3s',
                }}
              >
                <img
                  src="https://i.pinimg.com/474x/01/1e/65/011e655237835f908bfd1f8a872e2d6a.jpg"
                  alt="Singapore"
                  style={{ width: '400px', height: '400px' }}
                />
                <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: '#fff',
                      padding: '20px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      opacity: 0.8,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
               
                  
                  }}
                >
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                      opacity: 1,
                    }}
                  >
                    <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>
                      Malaysia
                    </h4>
                    <p style={{ fontSize: '14px' }}>4 days 3 nights</p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                      }}
                    >
                      <i
                        className="bi bi-people-fill"
                        style={{
                          fontSize: '18px',
                          margin: '0 8px',
                          color: '#ff5722',
                        }}
                      > 3</i>
                      <i
                        className="bi bi-currency-rupee"
                        style={{
                          fontSize: '17px',
                          margin: '0 8px',
                          color: '#ff5722',
                        }}
                      >45000</i>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
          <Card className="tour-card">
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: 'none',
                  transition: 'transform 0.3s',
                }}
              >
                <img
                  src="https://i.pinimg.com/474x/be/08/d9/be08d9d7b0d57f9102f8d6ec3f9e2a0e.jpg"
                  alt="Singapore"
                  style={{ width: '400px', height: '400px' }}
                />
                <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: '#fff',
                      padding: '20px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      opacity: 0.8,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
               
                  
                  }}
                >
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                      opacity: 1,
                    }}
                  >
                    <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>
                      Paris
                    </h4>
                    <p style={{ fontSize: '14px' }}>4 days 3 nights</p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                      }}
                    >
                      <i
                        className="bi bi-people-fill"
                        style={{
                          fontSize: '18px',
                          margin: '0 8px',
                          color: '#ff5722',
                        }}
                      > 3</i>
                      <i
                        className="bi bi-currency-rupee"
                        style={{
                          fontSize: '17px',
                          margin: '0 8px',
                          color: '#ff5722',
                        }}
                      >45000</i>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
          <Card className="tour-card">
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: 'none',
                  transition: 'transform 0.3s',
                }}
              >
                <img
                  src="https://i.pinimg.com/474x/af/ea/ca/afeaca28a153b1066fedf7d58862c6c8.jpg"
                  alt="Singapore"
                  style={{ width: '400px', height: '400px' }}
                />
                <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: '#fff',
                      padding: '20px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      opacity: 0.8,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
               
                  
                  }}
                >
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                      opacity: 1,
                    }}
                  >
                    <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>
                      Italy
                    </h4>
                    <p style={{ fontSize: '14px' }}>4 days 3 nights</p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                      }}
                    >
                      <i
                        className="bi bi-people-fill"
                        style={{
                          fontSize: '18px',
                          margin: '0 8px',
                          color: '#ff5722',
                        }}
                      > 3</i>
                      <i
                        className="bi bi-currency-rupee"
                        style={{
                          fontSize: '17px',
                          margin: '0 8px',
                          color: '#ff5722',
                        }}
                      >45000</i>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Card 5 */}
          <div className="col-md-4 mb-4">
          <Card className="tour-card">
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: 'none',
                  transition: 'transform 0.3s',
                }}
              >
                <img
                  src="https://i.pinimg.com/474x/4f/fe/c0/4ffec039189bf5d455611f51b7040db7.jpg"
                  alt="Singapore"
                  style={{ width: '400px', height: '400px' }}
                />
                <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: '#fff',
                      padding: '20px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      opacity: 0.8,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
               
                  
                  }}
                >
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                      opacity: 1,
                    }}
                  >
                    <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>
                      Turkey
                    </h4>
                    <p style={{ fontSize: '14px' }}>4 days 3 nights</p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                      }}
                    >
                      <i
                        className="bi bi-people-fill"
                        style={{
                          fontSize: '18px',
                          margin: '0 8px',
                          color: '#ff5722',
                        }}
                      > 3</i>
                      <i
                        className="bi bi-currency-rupee"
                        style={{
                          fontSize: '17px',
                          margin: '0 8px',
                          color: '#ff5722',
                        }}
                      >45000</i>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

           {/* Card 6 */}
           <div className="col-md-4 mb-4">
           <Card className="tour-card">
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: 'none',
                  transition: 'transform 0.3s',
                }}
              >
                <img
                  src="https://i.pinimg.com/474x/b3/eb/67/b3eb671a4d30b6fc9c8362aa476b9d0d.jpg"
                  alt="Singapore"
                  style={{ width: '400px', height: '400px'}}
                />
                <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: '#fff',
                      padding: '20px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      opacity: 0.8,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
               
                  
                  }}
                >
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                      opacity: 1,
                    }}
                  >
                    <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>
                      SwitzerLand
                    </h4>
                    <p style={{ fontSize: '14px' }}>4 days 3 nights</p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                      }}
                    >
                      <i
                        className="bi bi-people-fill"
                        style={{
                          fontSize: '18px',
                          margin: '0 8px',
                          color: '#ff5722',
                        }}
                      > 3</i>
                      <i
                        className="bi bi-currency-rupee"
                        style={{
                          fontSize: '17px',
                          margin: '0 8px',
                          color: '#ff5722',
                        }}
                      >45000</i>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
        </div>
      </div>

      

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
  );
}

export default HomePage;
