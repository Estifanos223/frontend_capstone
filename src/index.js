import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_up/Sign_Up';
import Notification from './Components/Notification/Notification';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <BrowserRouter> {/* <--- This is crucial: Wrap your entire App here */}

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/instant-consultation" element={<InstantConsultation />} />
       < Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Sign_Up />}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                 <Route path="/notification" element={<Notification/>}/>
      </Routes>

    </BrowserRouter>


  </React.StrictMode>
);


reportWebVitals();
