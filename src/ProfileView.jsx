// ProfileView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileView.css';

const ProfileView = () => {
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/patient/1');
        setPatientData(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
        setError('Failed to load patient data.');
      }
    };

    fetchPatientData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div className="patient-profile">
        <header className="profile-header">
          <h2>View patient</h2>
        </header>

        <div className="goal-reached">
          <h4>Goal reached</h4>
          <div className="circular-progress">
            <span>{patientData.goalReached}%</span>
          </div>
          <div className="progress-details">
            <div className="progress-detail">
              <span>EMG</span>
              <div className="emg-status">{patientData.emgStatus}</div>
            </div>
            <div className="progress-detail">
              <span>ROM</span>
              <div className="rom-status">{patientData.romStatus}</div>
            </div>
          </div>
        </div>

        <div className="patient-contact">
          <p><strong>Phone no.</strong> <a href={`tel:${patientData.phone}`}>{patientData.phone}</a></p>
          <p><strong>Mail ID</strong> <a href={`mailto:${patientData.email}`}>{patientData.email}</a></p>
          <p><strong>Affected side</strong> {patientData.affectedSide}</p>
          <p><strong>Condition</strong> {patientData.condition}</p>
          <p><strong>Speciality</strong> {patientData.specialty}</p>
        </div>

        <div className="medical-history">
          <h4>Medical history</h4>
          <p>{patientData.medicalHistory}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
