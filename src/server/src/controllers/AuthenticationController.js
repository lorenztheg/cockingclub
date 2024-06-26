const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    });
}

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body);
            res.send(user.toJSON());
        } catch (err) {
            console.log(err);
            res.status(400).send({
                error: 'This email account is already in use.'
            });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect.'
                });
            }
            const isPasswordValid = password === user.password;
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect.'
                });
            }
            const userJson = user.toJSON();
            console.log('Setting cookie ' + jwtSignUser(userJson));
            const token = jwtSignUser({ id: user.id });
            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                maxAge: 3600000,
                sameSite: 'lax'
            });
            res.send({
                user: userJson,
                token: token,
            });
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: 'An error has occured trying to log in.'
            });
        }
    },
    async logout(req, res) {
    try {
        res.clearCookie('token');
        res.status(200).send({
            message: 'Logout successful'
        });
    } catch (err) {
        res.status(500).send({
            error: 'An error has occurred trying to log out.'+err
        });
    }
}
}
