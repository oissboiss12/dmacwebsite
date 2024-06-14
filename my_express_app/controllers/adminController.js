const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const { blacklistToken } = require('../middleware/tokenBlacklist');
const jwt = require('jsonwebtoken');

// Function for logging in
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(400).json({ error: 'Invalid email' });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

        const token = jwt.sign({ id: admin._id }, 'secretkey', { expiresIn: '2h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
};

// Function for logging out
exports.signout = async (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
        const decodedToken = jwt.verify(token, 'secretkey');
        const expiresIn = decodedToken.exp - Math.floor(Date.now() / 1000);

        await blacklistToken(token, expiresIn); // Ensure blacklistToken is awaited
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error logging out' });
    }
};
