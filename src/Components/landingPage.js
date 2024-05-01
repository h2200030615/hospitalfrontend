import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import "./Home.css"; // Import your CSS file

const LandingPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then((response) => {
        if (response.status === 200) {
          return response.json(); // Parse the response body as JSON
        } else {
          throw new Error('User not authenticated');
        }
      })
      .then((data) => {
        console.log(data); // Log the data here
        setUser(data.data);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);
  
  useEffect(() => {
    if (user) {
      navigate('/user')
    }
  }, [user, navigate]);

  return (
    <>
      <div className="page-wrapper p-0 overflow-hidden">
        <header className="header">
          <nav className="navbar navbar-expand-lg py-0">
            <div className="container">
              <img src="logo.png" alt="Logo" />  
              <button
                className="navbar-toggler border-0 p-0 shadow-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <i className="ti ti-menu-2 fs-9" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* Remove the buttons from the navbar-nav div */}
              </div>
              <div className="navbar-buttons">
                <Button color="inherit" component={Link} to="/AboutPage">About</Button>
                <Button color="inherit" component={Link} to="/PaymentsPage">Payments</Button>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/SignUp">Register</Button>
              </div>
            </div>
          </nav>
        </header>
        <div className="body-wrapper overflow-hidden">
          <section className="blackbox-overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div className="hero-content my-11 my-xl-0">
                  <Box m={15}/>
                    {/* Combined h1 element */}
                    <h1 className="fw-bolder mb-8 fs-13">Join the Circle of Wellness- <span className="text-primary"></span></h1>
                    {/* End of combined h1 element */}
                    <p className="fs-5 mb-5 text-dark fw-normal">Linking Health and Compassion – Welcome to Health Connect, Your Trusted Medical Companion.</p>
                    <div className="d-sm-flex align-items-center gap-3">
                      <Button color="inherit" component={Link} to="/AppointmentPage">Book An Appointment</Button>
                      <Button color="inherit" component={Link} to="/ViewDoctorsPage">View Doctors</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Box m={20}/>
          <section className="bg-primary pt-5 pt-xl-9 pb-8">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-8 col-xl-5 pt-lg-8 mb-7 mb-lg-0">
                  <h2 className="fs-12 text-white text-center text-lg-start fw-bolder mb-8">
                    Elevating Lives through Connections – Discover Health Connect: Nurturing Your Vitality.
                  </h2>
                  <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button color="inherit" component={Link} to="/FeedbackForm">Feedback</Button>
                  </div>
                </div>
                <div className="col-lg-5 col-xl-5">
                  <div className="text-center text-lg-end">
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div
          className="offcanvas offcanvas-start modernize-lp-offcanvas"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header p-4">
            <img
              src="{{ url_for('static', filename='landing/dist/images/logos/logo-dark.svg') }}"
              alt=""
              className="img-fluid"
              width={150}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
