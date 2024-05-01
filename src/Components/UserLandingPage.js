import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Box from "@mui/material/Box";

const UserLandingPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('/api/user')
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('User data not available');
                }
            })
            .then((data) => setUser(data))
            .catch((error) => {
                console.error('Error fetching user data:', error);
                navigate('/');
            });
    }, [navigate]);

    const handleLogout = () => {
        fetch('/api/logout', {
            method: 'GET',
        })
            .then((response) => {
                if (response.status === 200) {
                    navigate('/');
                } else {
                    throw new Error('Logout failed');
                }
            })
            .catch((error) => {
                console.error('Error logging out:', error);
            });
    };

    return (
        <>
            <div className="page-wrapper p-0 overflow-hidden">
                <header className="header">
                    <nav className="navbar navbar-expand-lg py-0">
                        <div className="container ">
                            <img src="logo.png" alt="Logo" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mx-auto"></div> {/* Placeholder for centering */}
                                <Button color="inherit" component={Link} to="/PaymentsPage">Payments</Button>
                                <Button onClick={handleLogout}>Logout</Button>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="body-wrapper overflow-hidden">
                    <section className="blackbox-overlay">
                        <div className="container">
                            <h2>Welcome, {user.name}!</h2>
                            <div className="row align-items-center">
                                <div className="col-xl-6">
                                    <div className="hero-content my-11 my-xl-0">
                                        <h1 className="fw-bolder mb-8 fs-13">Join the Circle of Wellness- <span className="text-primary"> Health Connect</span></h1>
                                        <p className="fs-5 mb-5 text-dark fw-normal">Linking Health and Compassion – Welcome to Health Connect, Your Trusted Medical Companion.</p>
                                        <div className="d-sm-flex align-items-center gap-3">
                                            <div className="mb-3 mb-sm-0">
                                                <Button color="inherit" component={Link} to="/AppointmentPage">Book An Appointment</Button>
                                            </div>
                                            <div className="mb-3 mb-sm-0">
                                                <Button color="inherit" component={Link} to="/ViewDoctorsPage">View Doctors</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Box m={7}/>

                    <section className="bg-primary pt-5 pt-xl-9 pb-8">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-8 col-xl-5 pt-lg-8 mb-7 mb-lg-0">
                                    <h2 className="fs-12 text-white text-center text-lg-start fw-bolder mb-8">
                                        Elevating Lives through Connections – Discover Health Connect:
                                        Nurturing Your Vitality.
                                    </h2>
                                    <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                                        <Button color="inherit" component={Link} to="/Login">Login</Button>
                                        <Button color="inherit" component={Link} to="/FeedbackForm">Feedback</Button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-xl-5">
                                    <div className="text-center text-lg-end">
                                        <img
                                            src="business-woman-checking-her-mail.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className="footer-part pt-8 pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="text-center">
                                    <img
                                        src="your-footer-image.png"
                                        alt=""
                                        className="img-fluid pb-3"
                                    />
                                    <p className="mb-0 text-dark">
                                        All rights reserved by Health Connect.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div
                    className="offcanvas offcanvas-start modernize-lp-offcanvas"
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header p-4">
                        <img
                            src="logo-dark.svg"
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

export default UserLandingPage;
