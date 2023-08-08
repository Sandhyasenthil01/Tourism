import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Packages() {
  const [tourPackageData, setTourPackageData] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchTourPackageData();
  }, []);
  const fetchTourPackageData = async () => {
    try {
      const tourId = parseInt(localStorage.getItem('tourId'))
      if (tourId) {
        const response = await axios.get(`https://localhost:7068/api/Package/tourId/${tourId}`);
        setSelectedTour(response.data);
        setTourPackageData(response.data);  
      }
    } catch (error) {
      console.error('Error fetching tour package data:', error);
    }
  };

  const handlePackageButtonClick = (package_id) => {
    console.log(package_id);
    localStorage.setItem('package_id', package_id); 
    navigate(`/spot`);
  };

  return (
    <section className="my-background-radial-gradient overflow-hidden" style={{ marginTop: '50px' }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {tourPackageData.map(tourPackages => (
            <div key={tourPackages.tourId} className="col mb-4">
              <div className="card my-bg-glass h-100">
                <img
                  src={`https://localhost:7068/uploads/${tourPackages.image}`}
                  className="card-img-top"
                  alt=""
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="card-text">Price: {tourPackages.price}</p>
                  <p className="card-text">Duration: {tourPackages.duration}</p>
                  <p className="card-text">hotel_nearby: {tourPackages.hotel_nearby}</p>
                  <p className="card-text">food_details: {tourPackages.food_details}</p>
                  <p className="card-text">speciality_of_the_place: {tourPackages.speciality_of_the_place}</p>
                  <p className="card-text">vacation_type: {tourPackages.vacation_type}</p>

                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handlePackageButtonClick(tourPackages.package_id)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}