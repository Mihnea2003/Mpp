/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const { signInWithEmailAndPassword } = require('firebase/auth');
const { FIREBASE_AUTH } = require('./firebaseConfig.js');
const jwt = require('jsonwebtoken');

// Importing shoeRoutes is assumed
const shoeRoutes = require('./routes/Shoesroutes.ts');

const app = express();
app.use(express.json());

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Use shoeRoutes for API routes
app.use('/api', shoeRoutes);

// Define the /login endpoint for user authentication
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Authenticate user using Firebase Auth
    const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    const userId = userCredential.user.uid;

    // Generate JWT token
    const token = jwt.sign({ userId }, 'your_secret_key', { expiresIn: '1h' });

    // Send the token in the response
    res.json({ token });
  } catch (error) {
    console.error('Eroare logging in:', error);
    res.status(401).json({ error: 'Authentication failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
