// server.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to allow cross-origin requests
app.use(express.json());

// Route to get weather data
app.get('/api/weather', async (req, res) => {
    const city = req.query.city; // Get city from query parameter
    const apiKey = process.env.WEATHER_API_KEY; // Get API key from environment variable

    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        res.json(response.data); // Send back the weather data
    } catch (error) {
        res.status(500).json({ message: 'Error fetching weather data', error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
