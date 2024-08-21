// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock patient data
const patientData = {
  id: 1,
  goalReached: 40,
  emgStatus: 'Normal',
  romStatus: 'Improving',
  phone: '8022334455',
  email: 'meenarabinsachin2@gmail.com',
  affectedSide: 'Bilateral',
  condition: 'Ortho',
  specialty: 'Osteoarthritis',
  medicalHistory: 'Hypertension, DM, Hypothyroidism'
};

// Routes
app.get('/patient/:id', (req, res) => {
  const patientId = parseInt(req.params.id, 10);
  if (patientId === patientData.id) {
    res.json(patientData);
  } else {
    res.status(404).json({ error: 'Patient not found' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
