import "./instantpiop.css"



function Instantpop(){
    return(
        <div className="doctor-card-container">
        <img src="https://placehold.co/120x120/0d6efd/ffffff?text=DR" alt="Doctor Avatar" className="doctor-avatar"></img>
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

        <div className="appointment-booked-message">Appointment Booked!</div>
        <div className="booked-details">
            <p><strong>Name:</strong> Peter</p>
            <p><strong>Phone Number:</strong> 1234567890</p>
        </div>
        <button type="button" className="btn btn-primary btn-cancel">Cancel Appointment</button>
    </div>
    );
}

export default Instantpop;