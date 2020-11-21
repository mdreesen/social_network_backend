const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend // add friend route
} = require('../../controllers/user-controller');

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// add friend => /api/users/:<userId>/friends/:<friendId>
router
    .route('/:userId/friends')
    .put(addFriend)



module.exports = router;