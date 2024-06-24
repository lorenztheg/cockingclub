const {User} = require('../models');

module.exports = {
    async getUserById(req, res) {
        try {
            const user = await User.findByPk(req.params.userId);
            if (!user) {
                return res.status(404).send({
                    error: 'User not found'
                });
            }
            res.send(user.toJSON());
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to fetch the user' + err
            });
        }
    }
};