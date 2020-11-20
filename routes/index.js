const router = require('express').Router();

// Import all the routes
// placeholder for importing all the routes

// error handling for routes not found
router.use((req, res) => {
    res.status(404).json({ message: '404 error, could not find the route! ' })
});

module.exports = router;