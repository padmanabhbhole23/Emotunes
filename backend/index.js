const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Use user routes
app.use('/api', userRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Emotunes Backend API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
