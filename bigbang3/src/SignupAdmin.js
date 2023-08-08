import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';

import { InputText } from 'primereact/inputtext';
            
export default function Admin() {
  const [admin_password, passwordupdate] = useState('');
  const [admin_name, userNameupdate] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLoginusingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('proceed');
      let inputobj = {
        admin_name: admin_name,
        admin_password: admin_password,
      };
      console.log(JSON.stringify(inputobj));
      fetch('https://localhost:7128/api/Token/Admin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(inputobj),
      })
        .then((res) => {
          return res.text();
        })
        .then((resp) => {
          console.log(resp);
          toast.success('Success');
          localStorage.setItem('token', resp);
          window.alert("Hi admin!");
          navigate('/accepted');
        })
        .catch((err) => {
          toast.error('Login Failed due to :' + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (admin_name === '' || admin_name === null) {
      result = false;
      toast.warning('Please Enter Username');
    }
    if (admin_password === '' || admin_password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  };
/* Admin.css */
<style dangerouslySetInnerHTML={{__html: `
.admin-container {
  background: rgba(255, 255, 255, 0.5); /* Transparent white background */
  backdrop-filter: blur(15px); /* Apply blur effect */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-content {
  background: rgba(255, 255, 255, 0.8); /* Slightly opaque background for the card */
  padding: 20px;
  border-radius: 10px;
}

.admin-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.admin-icon img {
  width: 100px; /* Adjust the width as needed */
  height: auto;
}

`}} />

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
    <div className="container"  style={{ backgroundImage: 'url("https://i.pinimg.com/474x/a8/2d/da/a82dda51c26745eb3a89bfe02ad8e2a2.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' , backdropFilter: 'blur(15px)', minHeight: '100vh', minWidth: '100%' }}>
      <div className="row justify-content-center mt-5" >
        <div className="col-lg-6">
          <div className="card"style={{marginTop: '200px'}}>
            <div className="card-header" >
              <h2 className="text-center">Admin Login</h2>
            </div>
            <div className="card-body" >
              <form onSubmit={ProceedLoginusingAPI}>
            
                <div className="form-group">
                  <label htmlFor="admin_name">Admin Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="admin_name"
                    value={admin_name}
                    onChange={(e) => userNameupdate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="admin_password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="admin_password"
                    value={admin_password}
                    onChange={(e) => passwordupdate(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-warning">
                    Login
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}
