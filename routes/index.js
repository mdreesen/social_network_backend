const router = require('express').Router();
const apiRoutes = require('./api')

// Import all the routes
// placeholder for importing all the routes
router.use('/api', apiRoutes)

// error handling for routes not found
router.use((req, res) => {
    res.status(404).send('Yikes, try again')
});

module.exports = router;