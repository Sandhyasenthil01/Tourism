import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './SignupAdmin';
import Carousel from './Carousel';
import LoginSignupTraveller from './Logintravller';
import SignupTraveller from './SignupTraveller';
import ImageGallery from './PostGallery';
import SignupForm from './Registeragency';
import AdminPage from './AdminPage';
import HomePage from './Home';
import LoginAgency from './LoginAgency';
import Tourpost from './TourPost';
import BookingConfirmation from './BookingConfirmation';
import { BookingProvider  } from './BookingContext';
import TravelerBook from './Booking';
import AboutUs from './About';
import ContactPage from './Contact';
import GalleryAdmin from './GalleryAdmin';
import Spot from './SpotImage';
import Packages from './TourPac';
import PackageTour from './TourPackage';
import Bookings from './BookingPage';
import BookingStatus from './BookingStatus';
import Agentprofile from './Travelagentprofile';
import Profile from './Travelagentprofile';
import Payment from './Payment';
import Pdf from './Generatebill';
import Gallery from './Gallery';
import TravelPackages from './TourPackage';


function App() {
  return (
    <div>   
       <ToastContainer theme='colored'></ToastContainer>
   <BrowserRouter>
   <BookingProvider>
 <Routes>
 <Route path='/home'  element={<HomePage/>}/>

  <Route path='/Admin' Component={Admin}/>
  <Route path='/Login' Component={LoginSignupTraveller}/>
   <Route path='/Login' Component={SignupTraveller}/> 
  <Route path='/Gallery' Component={ImageGallery}/>
  <Route path='/G' Component={Gallery}/>

  <Route path='/regagency' Component={SignupForm}/>
  <Route path='/accepted' Component={AdminPage}/>
  <Route path='/package' element={<TravelPackages/>} />
  <Route path='/loginagency' Component={LoginAgency}/>
  <Route path='/tourpost' Component={Tourpost}/>
  <Route path="/bookingconfirmation" element={<BookingConfirmation />} />
  <Route path="/booking" element={<TravelerBook />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/pack" element={<Packages />} />
  <Route path="/bookings" element={<Bookings />} />
  <Route path="/bookstatus" element={<BookingStatus />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/payment" element={<Payment />} />
  <Route path="/confirm" element={<Pdf />} />
 </Routes>   
 </BookingProvider>
 </BrowserRouter>
 </div>
  );
}

export default App;
