const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const adminRoute = require('./routes/admin-route');
const testRoute = require('./routes/testimonials-route');
const newsRoute = require('./routes/news-route');
const connectDB = require('./config/db');
const { isBlacklisted } = require('./middleware/tokenBlacklist'); // Ensure you use the correct function for middleware
require('dotenv').config(); // Make sure to install dotenv

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Initialize Redis client - port is 6379
// Ensure that redis is installed on the device first and run it (e.g. CMD as Admin ->  redis-server )
// Redis Installer v5.0.14.1 - https://github.com/tporadowski/redis/releases/download/v5.0.14.1/Redis-x64-5.0.14.1.msi
const client = redis.createClient({
    url: 'redis://127.0.0.1:6379'
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

client.on('connect', () => {
    console.log('Connected to Redis');
});

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Use isBlacklisted middleware for routes that require authentication
app.use(isBlacklisted);

// Routes
app.use('/api/v1.0/admin', adminRoute);
app.use('/api/v1.0/news', newsRoute);
app.use('/api/v1.0/testimonials', testRoute);


// Email route
app.post('/send', (req, res) => {
    const { firstName, lastName, email, phone, company, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.ionos.co.uk',
        port: 587,
        secure: false, // use TLS
        auth: {
            user: 'adele@dmactruckandtrailer.co.uk',
            pass: 'Adele2022@'
        }
    });

    const mailOptions = {
        from: 'adele@dmactruckandtrailer.co.uk',
        to: 'info@dmactruckandtrailer.co.uk',
        subject: 'Contact Form Submission',
        text: `
        First-Name: ${firstName}    Last-Name: ${lastName}\n
        Email: ${email}\n
        Phone: ${phone}\n
        Company: ${company}\n
        Message: ${message}
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});