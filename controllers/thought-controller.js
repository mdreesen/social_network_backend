const { Thought, User } = require('../models');

const thoughtController = {
    // find all thoughts
    findAllThoughts(req, res) {
        Thought.find({})
            .populate({
                path: 'reaction',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    // find one specific route
    findOneThought({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err))
    },

    // Add thought to each user
    addThought({ params, body }, res) {
        console.log(params)
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate({ _id: params.userId }, { $push: { thoughts: _id } }, { new: true });
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this ID' });
                    return
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err))
    },

    // update thought per user
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'There is not thought ID found' })
                    return
                }
                res.json(dbUserData)
            })
            .catch(err => res.json(err))
    },

    // Remove thought to each user
    removeThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
            .then(deletedThought => {
                if (!deletedThought) {
                    return res.status(404).json({ message: 'No thought with this id!' });
                }
                return User.findOneAndUpdate({ _id: params.userId }, { $pull: { thoughts: params.thoughtId } }, { new: true });
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No pizza found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // add reaction
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, { $push: { reactions: body } }, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No thought found with this id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // remove reaction
    removeReaction({ body }, res) {
        Thought.findOneAndUpdate({ $pull: { reactions: body } }, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No thought found with this id' })
                    return
                }
                res.json(dbUserData)
            })
            .catch(err => res.json(err));
    }

}

module.exports = thoughtController;