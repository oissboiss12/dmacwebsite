const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const twilio = require('twilio');

dotenv.config();

const adminRoute = require('./routes/admin-route');
const testRoute = require('./routes/testimonials-route');
const newsRoute = require('./routes/news-route');
const connectDB = require('./config/db');
const { isBlacklisted } = require('./middleware/tokenBlacklist');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use isBlacklisted middleware for routes that require authentication
app.use(isBlacklisted);

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

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