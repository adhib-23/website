const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory data storage (for demonstration purposes)
const userData = [];

// Route for form submission
app.post('/submit-details', (req, res) => {
    const { name, mobile, email, location } = req.body;

    // Basic validation
    if (!name || !mobile || !email || !location) {
        return res.status(400).json({ success: false, message: 'Invalid input. Please fill out all fields.' });
    }

    // Save the data
    userData.push({ name, mobile, email, location });

    console.log('Received User Data:', { name, mobile, email, location });

    // Respond with success
    res.status(200).json({ success: true, message: 'Details submitted successfully!' });
});

// Default route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
