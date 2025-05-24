import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sign_Up from './Components/Sign_up/Sign_Up';
import Login from './Components/Login/Login';
import Instant_Consultation from './Components/Instant Consultation/Instant Consultation';
import Instantpop from './Components/Instant Consultation/instantpop';
//import InstantConsultation from './components/InstantConsultation/InstantConsultation'; 
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import DoctorCardIC from './Components/InstantConsultationBooking/DoctorCardIC/DoctorCardIC';
import Notification from './Components/Notification/Notification';
import Review_Form from './Components/Rview Form/ReviewForm';
const Main = () => <h1>Hello world</h1>;
function App() {
  return (


    <>


      <Review_Form></Review_Form>


    </>
  );
}

export default App;
