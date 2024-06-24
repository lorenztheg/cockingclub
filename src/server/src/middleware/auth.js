const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send({ error: 'No token provided.' });
    }
    jwt.verify(token.split(' ')[1], config.authentication.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Failed to authenticate token.' });
        }
        req.userId = decoded.id;
        next();
    });
};