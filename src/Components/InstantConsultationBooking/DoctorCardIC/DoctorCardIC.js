import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCardIC.css';
import AppointmentFormIC from '../AppointmentFormIC/AppointmentFormIC'
import { v4 as uuidv4 } from 'uuid';


const DoctorCardIC = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBooking = () => {
    setShowModal(true);
  };

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
  };

  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
      id: uuidv4(),
      ...appointmentData,
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    setShowModal(false);
  };

  return (

    <div class="doctor-card-container">
        <img src="https://placehold.co/120x120/0d6efd/ffffff?text=DR" alt="Doctor Avatar" class="doctor-avatar"></img>
        <div className="doctor-name">Dr. Jiao Yang</div>
        <div className="doctor-specialty">Dentist</div>
        <div className="doctor-experience">9 years experience</div>
        <div className="rating-stars">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
        </div>



        <form id="bookingForm">
            <div class="mb-3 text-start">
                <label for="patientName" className="form-label">Name:</label>
                <input type="text" className="form-control" id="patientName" placeholder="Enter your name" required></input>
            </div>
            <div class="mb-3 text-start">
                <label for="phoneNumber" className="form-label">Phone Number:</label>
                <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    pattern="[0-9]{10}"
                    maxlength="10"
                    minlength="10"
                    title="Please enter exactly 10 digits for the phone number (e.g., 1234567890)"
                    placeholder="Enter 10-digit phone number"
                    required
                ></input>
                <div className="invalid-feedback">
                    Please enter exactly 10 digits for the phone number.
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Book Now</button>
        </form>
        <div id="feedbackMessage" className="feedback-message"></div>
    </div>


  );
};

export default DoctorCardIC;
