const router = require('express').Router();

const {
    getAllUsers,
    createUser
} = require('../../controllers/user-controller');
const { create } = require('../../models/User');

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

module.exports = router;