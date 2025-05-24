import "./Navbar.css";
import React from "react";
// Function component for the main App
function Navbar() {

    // Render the main App component
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-transparent">
                <div className="container-fluid">
                    <h1 className="navbar-brand mb-0 h1" href="#">Stay Healthy</h1>
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/instant-consultation">Appointments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Health Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Reviews</a>
                        </li>
                    
                        <li className="nav-item">
                        <p className="nav-link"><b>Welcomem Yonatan</b></p>
                        </li>

                        <li className="nav-item">
                            <button className="blacktext btn btn-outline-info rounded-pill">Logout</button>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

// Export the App component as the default export
export default Navbar;