const router = require('express').Router();

// Adding the routes here
const userRoutes = require('./user-routes');
// Adding Thought routes here
const thoughtRoutes = require('./thought-routes');

// User routes
router.use('/users', userRoutes);
// thought routes
router.use('/thoughts', thoughtRoutes);

module.exports = router;