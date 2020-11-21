const router = require('express').Router();

const {
    getAllUsers, // get all users
    getUserById, // get single user
    createUser, // create user
    updateUser, // update user
    deleteUser, // delete user
    addFriend, // add friend route
    removeFriend // remove friend
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

// add friend => /api/users/:<userId>/friends/
router
    .route('/:userId/friends')
    .put(addFriend)

// delete friend => /api/users/:<userId>/friends/:<friendId>
router
    .route('/:userId/friends/:friendId')
    .delete(removeFriend)


module.exports = router;