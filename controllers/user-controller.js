const { User } = require('../models');

const userController = {
    // get all users
    getOneUser(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    }

    // get one user

    // create user

    // update user

    // delete user
};

module.exports = userController;