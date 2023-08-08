import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Carousel, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
class LoginAgency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent_name: '',
      agent_password: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  handleLogout = () => {
    // Remove from localStorage
    localStorage.removeItem('token');

    // Remove from sessionStorage
    sessionStorage.removeItem('agent_id');
    sessionStorage.removeItem('role');
    window.alert("Hi agent!");

  };

  handleLogin = (e) => {
    e.preventDefault();
  
    const { agent_name, agent_password } = this.state;
  
       
    axios.post("https://localhost:7128/api/Token/Agents", { agent_name, agent_password })
        .then((response) => {
            
            console.log("Login successful:", response.data);
            localStorage.setItem('token', response.data.token);
          localStorage.setItem('agent_id', response.data.id); 
          localStorage.setItem('role','agency')
        })
        .catch((error) => {
            console.error("Login error:", error);
        });
};


  render() {
    const { agent_name, agent_password } = this.state;
    
    return (
        <div>  <Navbar bg="light" expand="lg">
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
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <form onSubmit={this.handleLogin}>
                <h2 className="text-center mb-4">Login</h2>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="agent_name"
                    name="agent_name"
                    value={agent_name}
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Enter your agent_name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="agent_password"
                    name="agent_password"
                    value={agent_password}
                    onChange={this.handleInputChange}
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Link to='/tourpost' type="submit" className="btn btn-primary btn-block">
                  Login
                </Link>
                <p className="text-center mt-3">
                  Don't have an account? <Link to="/regagency">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default LoginAgency;
