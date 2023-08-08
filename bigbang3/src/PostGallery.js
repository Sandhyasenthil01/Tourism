import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from 'axios';

const ImageGallery = () => {
  const [Gallery, setGallery] = useState([]);
  const [tourName, settourName] = useState("");
  const [locationImage, setlocationImage] = useState(null); // Change to null initially
  const [description, setdescription] = useState("");

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios.get('https://localhost:7128/api/Gallery', {
      
    })
      .then((response) => {
        const data = response.data;
        setGallery(data);
        toast.success('Gallery Details', {
          style: {
            background: '#5792FC',
            color: 'white'
          }
        });
      })
      .catch((error) => {
        console.error('Error fetching Gallery:', error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("tourName", tourName);

    if (locationImage) {
        formData.append("imageFile", locationImage);
    }

    formData.append("description", description);

    // Send the data to the server using axios
    axios.post('https://localhost:7128/api/Gallery', formData, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      enctype: 'multipart/form-data',
    })
      .then((response) => {
        // Handle the successful response (if needed)
        console.log('Image added successfully:', response.data);
        toast.success('Image added successfully');
        fetchGallery(); // Refresh the image gallery with updated data
        // Reset the form fields
        settourName("");
        setlocationImage(null);
        setdescription("");
      })
      .catch((error) => {
        console.error('Error adding image:', error);
        toast.error('Error adding image');
      });
  };

  // Handler for file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the input
    setlocationImage(file); 
  };

  return (
    <div>
      <div><nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/accepted">Welcome Admin!</a>
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
<br></br><br></br>
<br></br>
<div style={{ backgroundImage: 'url("https://i.pinimg.com/564x/77/5e/42/775e42b1bba82d808fd151ccd3156a97.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' , backdropFilter: 'blur(15px)', minHeight: '100vh', minWidth: '100%' }}>
    <div className="container">
      <h2>Image Gallery</h2>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="tourName" className="form-label">Tour Name</label>
          <input
            type="text"
            id="tourName"
            value={tourName}
            onChange={(e) => settourName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="locationImage" className="form-label">Image</label>
          <input
            type="file"
            id="locationImage"
            onChange={handleImageChange} 
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Image</button>
      </form>

      <div className="row">
        {Gallery.map((image, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <img src={`https://localhost:7128/uploads/${image.locationImage}`} alt={image.tourName} className="img-fluid" />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
  );
};

export default ImageGallery;