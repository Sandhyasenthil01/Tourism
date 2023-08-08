import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agent_name: "",
            agent_phonenumber: "",
            agent_email: "",
            agent_password: "",
            locationImage: null,
            emailError: "",
            passwordError: "",
            phoneNumberError: "",
            usernameError: "",
            imageError: "",
        };
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    validatePassword(password) {

        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
        return regex.test(password);
    }

    validatePhoneNumber(phoneNumber) {
        return phoneNumber.match(/^\d{10}$/);
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleImageChange = (event) => {
        const file = event.target.files[0];
        this.setState({ locationImage: file });
    };

    handleSignup = (e) => {
        e.preventDefault();
        const {
            agent_name,
            agent_phonenumber,
            agent_email,
            agent_password,
            locationImage,
            agency_image,
        } = this.state;

        // Perform validations
        const emailError = this.validateEmail(agent_email) ? "" : "Invalid email address";
        const passwordError = this.validatePassword(agent_password) ? "" : "Password must be at least 8 characters,one uppercase,one special character and number";
        const phoneNumberError = this.validatePhoneNumber(agent_phonenumber) ? "" : "Invalid phone number";
        const usernameError = agent_name ? "" : "Username is required";
        const imageError = locationImage ? "" : "Image is required";

        if (emailError || passwordError || phoneNumberError|| usernameError || imageError) {
            this.setState({ emailError, passwordError, phoneNumberError ,usernameError, imageError });
            return;
        }

        const formData = new FormData();
        formData.append('agent_name', agent_name);
        formData.append('agency_image', agency_image);
        if (locationImage) {
            formData.append("imageFile", locationImage);
        }
        formData.append('agent_phonenumber', agent_phonenumber);
        formData.append('agent_email', agent_email);
        formData.append('agent_password', agent_password);

        axios
            .post("https://localhost:7128/api/Agency", formData)
            .then((response) => {
                console.log("Travel agency created:", response.data);
                // Perform any necessary actions after successful signup
                this.resetForm();
            })
            .catch((error) => {
                if (error.response) {
                    console.error("Error creating agency:", error.response.data);
                } else {
                    console.error("Error creating agency:", error.message);
                }
            });
    };

    resetForm = () => {
        this.setState({
            agent_name: "",
            agent_phonenumber: "",
            agent_email: "",
            agent_password: "",
            locationImage: null,
            emailError: "",
            passwordError: "",
            phoneNumberError: "",
            usernameError: "",
            imageError: "",
        });
    };

    render() {
        const {
            agent_name,
            agent_phonenumber,
            agent_email,
            agent_password,
            emailError,
            passwordError,
            phoneNumberError,
            usernameError,
            imageError,
        } = this.state;

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
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
                      <style dangerouslySetInnerHTML={{__html: `

      .btn-pink {
  background-color: #FF1493; /* Your desired pink color */
  border-color: #FF1493;
}

.btn-pink:hover {
  background-color: #FF0066; /* Hover color */
  border-color: #FF0066;
}
`}} />

   <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div style={{ backgroundColor: '#ffe4e1', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <form onSubmit={this.handleSignup} action="#">
          <h2 className="text-center mb-4">Sign Up</h2>
          <p className="text-center mt-3">
            Already have an account? <a href="/loginagency">Log in</a>
          </p>
          <div className="form-group">
                    <label style={{ color: '#FF1493' }}>Username</label>
                    <input
                        type="text"
                        id="agent_name"
                        name="agent_name"
                        value={agent_name}
                        onChange={this.handleInputChange}
                        className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                        placeholder="Enter your name"
                        required
                    />
                    {usernameError && <div className="invalid-feedback">{usernameError}
              </div>}                </div>
              <div className="form-group">
                    <label htmlFor="agency_image" style={{ color: '#FF1493' }}>Image</label>
                    <input
                        type="file"
                        className={`form-control ${imageError ? 'is-invalid' : ''}`}
                        id="agency_image"
                        onChange={this.handleImageChange}
                    />
                    {imageError && <div className="invalid-feedback">{imageError}</div>}
                </div>
                <div className="form-group">
                    <label style={{ color: '#FF1493' }}>Phone Number</label>
                    <input
                        type="text"
                        id="agent_phonenumber"
                        name="agent_phonenumber"
                        value={agent_phonenumber}
                        onChange={this.handleInputChange}
                        className={`form-control ${phoneNumberError ? 'is-invalid' : ''}`}
                        placeholder="Enter your number"
                        required
                    />
                    {phoneNumberError && <div className="invalid-feedback">{phoneNumberError}</div>}
                </div>
                <div className="form-group">
                    <label style={{ color: '#FF1493' }}>Email</label>
                    <input
                        type="text"
                        id="agent_email"
                        name="agent_email"
                        value={agent_email}
                        onChange={this.handleInputChange}
                        className={`form-control ${emailError ? 'is-invalid' : ''}`}
                        placeholder="Enter your email"
                        required
                    />
                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <div className="form-group">
                    <label style={{ color: '#FF1493' }}>Password</label>
                    <input
                        type="password"
                        id="agent_password"
                        name="agent_password"
                        value={agent_password}
                        onChange={this.handleInputChange}
                        className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                        placeholder="Enter your password"
                        required
                    />
                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>
                <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-pink">
            Sign Up
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>


    </div>            </div>
        );
    }
}

export default SignupForm;
