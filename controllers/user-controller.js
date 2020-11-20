const { User } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            /*.populate({
                path: 'thoughts',
                select: '-__v'
            })
            */
            // .select('-__v')
            // .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // create user
    createUser({ body }, res) {
        Pizza.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    }

    // update user

    // delete user
};

module.exports = userController;