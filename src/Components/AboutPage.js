import React from "react";
import { Typography, Container } from '@mui/material';

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        <span style={{ fontSize: "30px", fontWeight: "bold" }}>About Health Connect</span>
      </Typography>
      <Typography variant="body1" paragraph style={{ fontSize: "1.2rem" }}>
        Welcome to Health Connect, your all-in-one solution for managing appointments, gathering feedback, checking available slots, and accessing information about doctors. Health Connect is designed to simplify and streamline healthcare management, putting patients and providers at the forefront of every interaction.
      </Typography>
      <Typography variant="body1" paragraph style={{ fontSize: "1.2rem" }}>
      <Typography variant="h2" component="h1" gutterBottom>
        <span style={{ fontSize: "30px", fontWeight: "bold" }}>Our mission</span>
      </Typography> At Health Connect, our mission is to empower both healthcare providers and patients with innovative tools and resources. We aim to enhance patient care, improve operational efficiency, and foster meaningful connections between patients and healthcare professionals.
      </Typography>
      <Typography variant="h2" component="h1" gutterBottom>
        <span style={{ fontSize: "30px", fontWeight: "bold" }}>Our Vision</span>
      </Typography>
      <Typography variant="body1" paragraph style={{ fontSize: "1.2rem" }}>
      
We envision a future where healthcare is seamless, accessible, and patient-centered. Through intuitive technology and personalized experiences, we strive to revolutionize the way healthcare services are delivered and experienced.

Features and Functionality
Appointment Booking: Easily schedule appointments online, anytime, anywhere.
Feedback Collection: Gather valuable feedback from patients to continuously improve services.
Available Slots: Quickly check available time slots for appointments, ensuring convenience for both patients and providers.
Doctor Information: Access comprehensive information about doctors, including specialties, qualifications, and availability.
      </Typography>
      <Typography variant="h2" component="h1" gutterBottom>
        <span style={{ fontSize: "30px", fontWeight: "bold" }}> Our Commitment</span>
      </Typography>
      <Typography variant="body1" paragraph style={{ fontSize: "1.2rem" }}>
     
At Health Connect, we are committed to excellence and innovation in healthcare management. We are constantly evolving and improving our platform to meet the dynamic needs of healthcare providers and patients alike.

Thank you for choosing Health Connect to streamline your healthcare experience. Together, we can build a healthier future for all.
      </Typography>
    </Container>
  );
};

export default AboutPage;