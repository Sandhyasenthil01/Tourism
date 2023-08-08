import './Logintraveller.css';
import axios from 'axios';
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Navigation from './Navbar';

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
          <meta charSet="UTF-8" />
          <title> Login and Registration Form in HTML &amp; CSS | CodingLab </title>
<Navigation/>
        
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
                <form action="#">
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user" />
                      <input type="text" placeholder="Enter your username" required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock" />
                      <input type="password" placeholder="Enter your password" required />
                    </div>
                    <div className="button input-box">
                      <input type="submit" defaultValue="Sumbit" />
                    </div>
                    <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
                  </div>
                </form>
              </div>
              <div className="signup-form">
                <div className="title">Signup</div>
                <form onSubmit={this.createtraveller} action="#">
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
    <input type="submit" value="Submit" href="/home" /> 
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
