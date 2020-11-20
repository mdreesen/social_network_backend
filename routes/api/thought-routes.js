const router = require('express').Router();

const {
    findAllThoughts,
    findOneThought,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// find all thoughts => /api/thoughts
router.route('/')
    .get(findAllThoughts)

// find specific thought => 
router.route('/:thoughtId')
    .get(findOneThought)

// Add thought => /api/thoughts/<userId>
router.route('/:userId')
    .post(addThought);

// Remove, update => /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId')
    .delete(removeThought)
    .put(updateThought);

// add reaction => /api/thoughts/<thoughtId>/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)


module.exports = router;