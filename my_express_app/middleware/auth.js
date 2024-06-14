const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access Denied'});

    try {
        const verified = jwt.verify(token, 'secretkey');
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json( { error: 'Invalid token' } );
    }
};