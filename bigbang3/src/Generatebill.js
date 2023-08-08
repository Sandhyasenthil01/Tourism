import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Navbar, Nav, NavDropdown, Card, Button } from 'react-bootstrap';

import { PDFDownloadLink, PDFViewer, Page, Text, Document, View, StyleSheet } from '@react-pdf/renderer';
export default function Pdf() {
  const [bookingsWithPackages, setBookingsWithPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingsResponse = await axios.get('https://localhost:7077/api/Booking');
        const packagesResponse = await axios.get('https://localhost:7068/api/Package');
        const bookings = bookingsResponse.data;
        const packages = packagesResponse.data;
        const bookingsWithPackagesData = bookings
          .map((booking) => {
            const associatedPackage = packages.find((pkg) => pkg.packageid === booking.packageid);
            return { booking, associatedPackage };
          })
          .filter((data) => data.associatedPackage)
          .filter((data) => data.booking.isConfirmed === 1);

        setBookingsWithPackages(bookingsWithPackagesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
  };
  const getConfirmationStatus = (isConfirmed) => {
    return isConfirmed ? 'Successful' : 'Pending'; 
  };


  const formatDate = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    return dateObj.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  };
  
  
const calculateTourCost = (booking) => {
  const { passengers_count, associatedPackage } = booking;
  if (!associatedPackage) {
    return 0; 
  }
  const { price } = associatedPackage;
  return passengers_count * price;
};


  const styles = StyleSheet.create({
    page: {
      padding: '1cm',
    },
    heading: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: '1cm',
    },
    section: {
      marginBottom: '1cm',
    },
    packageName: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    packageText: {
      fontSize: 10,
    },
    footer: {
      fontSize: 10,
      textAlign: 'center',
    },
  });

  const packageIdFromStorage = sessionStorage.getItem('packageid');
  useEffect(() => {
    axios.get(`https://localhost:7068/api/Package/${packageIdFromStorage}`)
      .then(response => {
        const packageData = response.data;       
      })
      .catch(error => {
        console.error('Error fetching tour package:', error);
      });
  }, [packageIdFromStorage]);

  const PDFDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>TravelGo</Text>

{/* Home */}
<View style={{ ...styles.section, justifyContent: 'center', alignItems: 'center' }}>
  <Text>Welcome to TravelGo</Text>
</View>


{/* About */}
<View style={styles.section}>
  <Text style={{ ...styles.packageName, fontSize: 14 }}>About</Text>
  <Text style={{ fontSize: 12 }}>
    We are your gateway to extraordinary journeys, offering an exquisite array of destinations and unforgettable
    trips. Our dedicated team is committed to providing you with the finest travel experiences, tailored to your
    dreams and desires. Embark on a journey of a lifetime with us and let the adventure begin!
  </Text>
</View>

{bookingsWithPackages.map(({ booking, associatedPackage }) => (
  <View key={booking.booking_id} style={{ ...styles.card, marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '10px' }}>
    <Text style={{ ...styles.packageName, marginBottom: '5px' }}>Package Name: {associatedPackage.packageName}</Text>
    <Text style={{ marginBottom: '5px' }}>Booking Id: {booking.booking_id}</Text>
    <Text style={{ marginBottom: '5px' }}>Number of People: {booking.passengers_count}</Text>
    <Text style={{ marginBottom: '5px' }}>Booking Date: {formatDate(booking.bookingDate)}</Text>
    <Text>Booking-Confirmation: {getConfirmationStatus(booking.isConfirmed)}</Text>
    <img
      src={`https://localhost:7068/uploads/${associatedPackage.image}`}
      alt={associatedPackage.packageName}
      className='img-fluid rounded'
      style={{ maxWidth: '200px' }} 
    />
  </View>
))}


      </Page>
    </Document>
  );

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
          <Nav.Link onClick={handleLogout} href="/home">
          Logout
        </Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    <div style={{ marginTop: '8%' }} className="container">
      <h1>Confirmed Tours</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : bookingsWithPackages.length > 0 ? (
        <>
          {bookingsWithPackages.map(({ booking, associatedPackage }) => (
            <div key={booking.booking_id} className="card mb-4">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="card-body">
                    <p className="card-text">Booking Id: {booking.booking_id}</p>
                    <p className="card-text">Number of People: {booking.passengers_count}</p>
                    <p className="card-text">Booking Date: {formatDate(booking.bookingDate)}</p>
                    <p className="card-text">Booking-Confirmation: {getConfirmationStatus(booking.isConfirmed)}</p>
                  </div>
                  <PDFDownloadLink document={<PDFDocument booking={booking} associatedPackage={associatedPackage} />} fileName={`booking_${booking.booking_id}.pdf`}>
                    {({ loading: pdfLoading }) => (pdfLoading ? 'Generating PDF...' : 'Download PDF')}
                  </PDFDownloadLink>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="row justify-content-end">
                    <div className="col-md-8">
                      <img
                        src={`https://localhost:7068/uploads/${associatedPackage.image}`}
                        alt={associatedPackage.packageName}
                        className="img-fluid rounded"
                        style={{ maxWidth: '100%', maxHeight: '200px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <PDFViewer style={{ width: '100%', height: '800px' }}>
            <PDFDocument bookingsWithPackages={bookingsWithPackages} />
          </PDFViewer>
        </>
      ) : (
        <p>No confirmed tours found.</p>
      )}
    </div>
    </div>

  );
      }  