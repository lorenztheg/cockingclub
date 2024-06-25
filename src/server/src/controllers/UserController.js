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
    },
    async updateUser(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({
                where: {
                    id: req.params.userId
                }
            });

            if (!user) {
                return res.status(404).send({
                    error: 'User not found'
                });
            }

            user.email = email;
            user.password = password;

            await user.save();

            res.send({
                message: 'User updated successfully',
                user
            });
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).send({
                error: 'An error occurred while trying to update the user'
            });
        }
    }
};