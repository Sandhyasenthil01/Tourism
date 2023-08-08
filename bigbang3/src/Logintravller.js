import './Logintraveller.css';
import axios from 'axios';
import React, { Component } from 'react';
import { Carousel, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';

class LoginSignupTraveller extends Component  {
    constructor(props) {  
        super(props);
        this.state = {
            traveller: [],
            user_id: 0,
            user_name: "",
            email: "",
            user_password: ""
        };
    }

  
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleLogin = (e) => {
        e.preventDefault();
        const { user_name, user_password } = this.state;

       
        axios.post("https://localhost:7077/api/Token/Traveller", { user_name, user_password })
            .then((response) => {
                
                console.log("Login successful:", response.data);
                localStorage.setItem('token', response.data.token);
          localStorage.setItem('user_id', response.data.id); // Store the traveller_agent_id with the correct property name
          window.alert("Hi traveller!");
          
            })
            .catch((error) => {
                console.error("Login error:", error);
            });
    };
    handleSignup = (e) => {
        e.preventDefault();
        const { user_name, email, user_password } = this.state;

       
        axios.post("https://localhost:7077/api/Traveller", { user_name, email, user_password })
            .then((response) => {
                console.log("Signup successful:", response.data);
            })
            .catch((error) => {
                console.error("Signup error:", error);
            });
    };
    createtraveller = () => {
        const {
            user_name,
            email,
            user_password
        } = this.state;

        const traveller = {
            user_name,
            email,
            user_password
        };
  
        axios
        .post("https://localhost:7077/api/Traveller", traveller)
        .then((response) => {
            console.log("traveller created:", response.data);
            this.fetchPatients();
            this.resetForm();
        })
        .catch((error) => {
            console.error("Error creating patient:", error);
        });
};

resetForm = () => {
    this.setState({
        user_name: "",
        email: "",
        user_password: ""
    });
};
  
render() {
    const {
        user_name,
        email,
        user_password
    } = this.state;


      return (
        <div>
                          <style dangerouslySetInnerHTML={{__html: `
                          /* Google Font Link */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif;
}
body{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eb71a6;
  padding: 30px;
}
.container{
  position: absolute;
  max-width: 850px;
  width: 1500%;
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  perspective: 2700px;
left:240px;
top:110px;
}
.container .cover{
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 50%;
  z-index: 98;
  transition: all 1s ease;
  transform-origin: left;
  transform-style: preserve-3d;
}
.container #flip:checked ~ .cover{
  transform: rotateY(-180deg);
}
 .container .cover .front,
 .container .cover .back{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.cover .back{
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
.container .cover::before,
.container .cover::after{
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  z-index: 12;
}
.container .cover::after{
  opacity: 0.3;
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
.container .cover img{
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 10;
}
.container .cover .text{
  position: absolute;
  z-index: 130;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cover .text .text-1,
.cover .text .text-2{
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  text-align: center;
}
.cover .text .text-2{
  font-size: 15px;
  font-weight: 500;
}
.container .forms{
  height: 100%;
  width: 100%;
  background: #fff;
}
.container .form-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-content .login-form,
.form-content .signup-form{
  width: calc(100% / 2 - 25px);
}
.forms .form-content .title{
  position: relative;
  font-size: 24px;
  font-weight: 500;
  color: #333;
}
.forms .form-content .title:before{
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 25px;
  background: #7d2ae8;
}
.forms .signup-form  .title:before{
  width: 20px;
}
.forms .form-content .input-boxes{
  margin-top: 30px;
}
.forms .form-content .input-box{
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  margin: 10px 0;
  position: relative;
}
.form-content .input-box input{
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding: 0 30px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}
.form-content .input-box input:focus,
.form-content .input-box input:valid{
  border-color: #7d2ae8;
}
.form-content .input-box i{
  position: absolute;
  color: #7d2ae8;
  font-size: 17px;
}
.forms .form-content .text{
  font-size: 14px;
  font-weight: 500;
  color: #333;
}
.forms .form-content .text a{
  text-decoration: none;
}
.forms .form-content .text a:hover{
  text-decoration: underline;
}
.forms .form-content .button{
  color: #fff;
  margin-top: 40px;
}
.forms .form-content .button input{
  color: #fff;
  background: #7d2ae8;
  border-radius: 6px;
  padding: 0;
  cursor: pointer;
  transition: all 0.4s ease;
}
.forms .form-content .button input:hover{
  background: #5b13b9;
}
.forms .form-content label{
  color: #5b13b9;
  cursor: pointer;
}
.forms .form-content label:hover{
  text-decoration: underline;
}
.forms .form-content .login-text,
.forms .form-content .sign-up-text{
  text-align: center;
  margin-top: 25px;
}
.container #flip{
  display: none;
}
@media (max-width: 730px) {
  .container .cover{
    display: none;
  }
  .form-content .login-form,
  .form-content .signup-form{
    width: 100%;
  }
  .form-content .signup-form{
    display: none;
  }
  .container #flip:checked ~ .forms .signup-form{
    display: block;
  }
  .container #flip:checked ~ .forms .login-form{
    display: none;
  }
}
`}} />

          <meta charSet="UTF-8" />
          <title> Login and Registration Form in HTML &amp; CSS | CodingLab </title>

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
            <Nav.Link href="/home">
            Logout
          </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
          <div className="container">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img src="https://t4.ftcdn.net/jpg/05/91/65/69/240_F_591656910_2nuNBWh0luTdc4LVGH1VmyJ0scMdi0Ec.jpg" alt="" />
              <div className="text">
                <span className="text-1">Some of your best ideas come  <br />when you're on vacation.</span>
                <span className="text-2">Let's explore</span>
              </div>
            </div>
            <div className="back">
              <img className="backImg" src="https://t4.ftcdn.net/jpg/05/91/65/69/240_F_591656910_2nuNBWh0luTdc4LVGH1VmyJ0scMdi0Ec.jpg" alt=""/>
              <div className="text">
                <span className="text-1">Complete miles of journey <br /> with one step</span>
                <span className="text-2">Let's get started</span>
              </div>
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Login</div>
                <form onSubmit={this.handleLogin} action="#">
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user" />
                      <input type="text"  id="user_name"
            name="user_name"
            value={user_name}
            onChange={this.handleInputChange}
            placeholder="Enter your name" required />                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock" />
                      <input type="password"
                       id="user_password"
                       name="user_password"
                       value={user_password}
                       onChange={this.handleInputChange}
                        placeholder="Enter your password" required />                    </div>
                    <div className="button input-box">
                      <input type="submit" defaultValue="Sumbit" href="/home" />
                    </div>
                    <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Signup now</label></div>
                  </div>
                </form>
              </div>
              <div className="signup-form">
                <div className="title">Signup</div>
                <form onSubmit={this.handleSignup} action="#">
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user" />
                      <input type="text"  id="user_name"
            name="user_name"
            value={user_name}
            onChange={this.handleInputChange}
            placeholder="Enter your name" required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope" />
                      <input type="text" 
                       id="email"
                       name="email"
                       value={email}
                       onChange={this.handleInputChange}
                       placeholder="Enter your email" required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock" />
                      <input type="password"
                       id="user_password"
                       name="user_password"
                       value={user_password}
                       onChange={this.handleInputChange}
                        placeholder="Enter your password" required />
                    </div>
                    <div className="button input-box">
    <input type="submit" value="Submit" />
  </div>
                    <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
      }
    }

      export default LoginSignupTraveller;
