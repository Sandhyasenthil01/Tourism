import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function AdminPage() {

  const [activeSection, setActiveSection] = useState('content');
  const [agency, setagency] = useState([]);
  const [notApprovedagency, setNotApprovedagency] = useState([]);

  useEffect(() => {
    fetchApprovedagency();
    fetchNotApprovedagency();

  }, []);


  const fetchApprovedagency=()=>{
    fetch('https://localhost:7128/api/Agency/AcceptedAgents', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(response => response.json())
      .then(
        data => setagency(data),
        console.log(agency))
      .catch(error => console.log(error));
  }


const fetchNotApprovedagency=()=>{
    fetch('https://localhost:7128/api/Agency/RequestedAgents', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
        .then(response => response.json())
        .then(data => setNotApprovedagency(data))
        .catch(error => console.log(error));
    }
  

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
  

<div><nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Welcome Admin!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">

        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Activation/Deactivation 
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" onClick={() => handleSectionClick('agency')}>Requested agency</a></li>
              <li><a class="dropdown-item" onClick={() => handleSectionClick('getagency')}>Activated agency</a></li>
                
            </ul>
        
              <li className="nav-item">
                <a className="nav-link"  href="Gallery">Image Gallery</a>
              </li>
            
              <li className="nav-item">
              <a class="nav-link" onClick={() => { localStorage.removeItem("token") }}  href="/home">Logout</a>
              </li>
          </li>
          </li>

        
        </ul>
        
      </div>
    </div>
  </div>
</nav></div>
  
  
  
  
  {activeSection === 'content' && (
            <div style={{ backgroundImage: 'url("https://i.pinimg.com/564x/77/5e/42/775e42b1bba82d808fd151ccd3156a97.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' , backdropFilter: 'blur(15px)', minHeight: '100vh', minWidth: '100%' }}>

        <div className="content">
          <div className="context">
            <h1>Welcome admin!!</h1>
          </div>
          </div>
        </div>
      )}
  
      {activeSection === 'agency' && (
        <div style={{ backgroundImage: 'url("https://i.pinimg.com/564x/77/5e/42/775e42b1bba82d808fd151ccd3156a97.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' , backdropFilter: 'blur(15px)', minHeight: '100vh', minWidth: '100%' }}>
        <div className="agency" >
          <section className="my-background-radial-gradient overflow-hidden">
            <div className="my-agency-container container">
              <div className="my-page-heading">
                <h2>Requested agency</h2>
                <hr />
              </div>
              <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                  {notApprovedagency.map(agency => (
                    <div key={agency.agent_id} className="col">
                      <div className="card my-bg-glass">
                        <div className="card-body">
                        <img
                          src={`https://localhost:7128/uploads/${agency.agency_image}`}
                          className="card-img-top"
                          alt=""
                          style={{ width: '200px', height: '200px' }}/>

                        <div className="flex flex-wrap">
                          <br/>
                        <span className="inline-block w-1/2">
                        <p className="text-sm text-gray-600">Name: {agency.agent_name}</p>
                          <p className="text-sm text-gray-600">Phone: {agency.agent_phonenumber}</p>
                          <p className="text-sm text-gray-600">Email: {agency.agent_email}</p>
                        </span>
                      
                      </div><hr/>
                          
                          <div className="d-flex justify-content-center">
                          
                            <button type="button" className="btn btn-success me-2" onClick={() =>{
                              const requestBody = {
                              "id": agency.agent_id
                              };
                              console.log(requestBody);

                              fetch("https://localhost:7128/api/Agency/UpdateStatus", {
                              method: "PUT",
                              headers: {
                                  "Accept": "application/json",
                                  "Content-Type": "application/json"
                              },
                              body: JSON.stringify(requestBody)
                              })
                              .then(response => response.json())
                              .then(data => {
                              console.log(data); 
                              fetchNotApprovedagency();
                              fetchApprovedagency();
                              })
                              .catch(error => console.log(error));
                          }}>Accept</button>


                            <button type="button" className="btn btn-danger" onClick={() =>{
                              const requestBody = {
                                "id": agency.agent_id
                              };
                              console.log(requestBody);

                              fetch("https://localhost:7128/api/Agency/DeclineAgents ", {
                              method: "PUT",
                              headers: {
                                  "Accept": "application/json",
                                  "Content-Type": "application/json"
                              },
                              body: JSON.stringify(requestBody)
                              })
                              .then(response => response.json())
                              .then(data => {
                              console.log(data); 
                              fetchNotApprovedagency();
                              fetchApprovedagency();
                              })
                              .catch(error => console.log(error));
                          }}>Decline</button>


                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </div>
        </div>
      )}
  
      {activeSection === 'getagency' && (
        <div style={{ backgroundImage: 'url("https://i.pinimg.com/564x/77/5e/42/775e42b1bba82d808fd151ccd3156a97.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' , backdropFilter: 'blur(15px)', minHeight: '100vh', minWidth: '100%' }}> 
        <div className="getagency">
          <section className="my-background-radial-gradient overflow-hidden">
            <div className="my-agency-container container">
              <div className="my-page-heading">
                <h2>Activated agency</h2>
                
                <hr />
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                  {agency.map(agency => (
                    <div key={agency.agent_id} className="col">
                    
                      <div className="card my-bg-glass">
                      <br/>
                      <img
                  src={`https://localhost:7128/Uploads/${agency.agency_image}`}
                  className="card-img-top "
                  alt=""
                  style={{
                    width: '200px',
                    height: '200px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />

                <div className="card-body">
            <h5 className="card-title">{agency.agent_name}</h5>
            <div className="flex flex-wrap">
              <span className="inline-block w-1/2">
              <p className="text-sm text-gray-600">Name: {agency.agent_name}</p>
                          <p className="text-sm text-gray-600">Phone: {agency.agent_phonenumber}</p>
                          <p className="text-sm text-gray-600">Email: {agency.agent_email}</p>
              </span>
             
            </div>
          </div>
        </div>
      </div>   
      
  ))}
</div>
            </div>
            
          </section>
        </div>
        </div>
      )}
    </>
  );  
}

export default AdminPage;