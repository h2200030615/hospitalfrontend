import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const FeedbackForm = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    appointmentExperience: '',
    doctorService: '',
    treatment: '',
    medicationFacility: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Feedback:', formData);
    alert('Feedback submitted successfully!');
    navigate('/user');
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Appointment Experience</InputLabel>
            <Select
              name="appointmentExperience"
              value={formData.appointmentExperience}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value="excellent">Excellent</MenuItem>
              <MenuItem value="good">Good</MenuItem>
              <MenuItem value="average">Average</MenuItem>
              <MenuItem value="poor">Poor</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl fullWidth variant="outlined">
            <InputLabel>Doctor Service</InputLabel>
            <Select
              name="doctorService"
              value={formData.doctorService}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value="excellent">Excellent</MenuItem>
              <MenuItem value="good">Good</MenuItem>
              <MenuItem value="average">Average</MenuItem>
              <MenuItem value="poor">Poor</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl fullWidth variant="outlined">
            <InputLabel>Treatment</InputLabel>
            <Select
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value="excellent">Excellent</MenuItem>
              <MenuItem value="good">Good</MenuItem>
              <MenuItem value="average">Average</MenuItem>
              <MenuItem value="poor">Poor</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl fullWidth variant="outlined">
            <InputLabel>Medication Facility</InputLabel>
            <Select
              name="medicationFacility"
              value={formData.medicationFacility}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value="excellent">Excellent</MenuItem>
              <MenuItem value="good">Good</MenuItem>
              <MenuItem value="average">Average</MenuItem>
              <MenuItem value="poor">Poor</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="comments"
            label="Additional Comments"
            variant="outlined"
            fullWidth
            multiline
            value={formData.comments}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Feedback
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default FeedbackForm;
