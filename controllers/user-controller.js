const { User } = require('../models');

const userController = {
    // create user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    // get all users
    getAllUsers(req, res) {
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
    },

    // look for one user
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'There is no user by that ID' })
                    return
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400)
            })
    },

    // update user
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with this ID' })
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user by this ID' })
                    return
                }
                res.json(dbUserData)
            })
            .catch(err => res.json(err))
    },

    // add new friend to friend list
    addFriend({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.userId }, { $push: { friends: body.userId } }, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // delete friend from friend list
    /*
    removeFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.userId }, { $pull: { friends: { friendId: params.friendId } } }, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No thought found with this id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    */
    removeFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.userId }, { $pull: { friends: { friendId: params.friendId } } }, { new: true })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err))
    }



};

module.exports = userController;