const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const adminRoute = require('./routes/admin-route');
const testRoute = require('./routes/testimonials-route');
const newsRoute = require('./routes/news-route');
const connectDB = require('./config/db');
const { isBlacklisted } = require('./middleware/tokenBlacklist'); // Ensure you use the correct function for middleware

const app = express();

// Connect Database
connectDB();

// Initialize Redis client - port is 6379
//Ensure that redis is installed prior on the device first and run it (e.g. CMD as Admin ->  redis-server )
//Redis Installer v5.0.14.1 - https://github.com/tporadowski/redis/releases/download/v5.0.14.1/Redis-x64-5.0.14.1.msi
const client = redis.createClient({
    url: 'redis://127.0.0.1:6379'
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});


// Middleware
app.use(express.json());

// Use isBlacklisted middleware for routes that require authentication
app.use(isBlacklisted);

// Routes
app.use('/api/v1.0/admin', adminRoute);
app.use('/api/v1.0/news', newsRoute);
app.use('/api/v1.0/testimonials', testRoute);

// Get PORT from environment and store in Express
const PORT = process.env.PORT || 5000;

//Application server port is 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
