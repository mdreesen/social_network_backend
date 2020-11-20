const moment = require('moment')

// using moment.js to format dates
const dateFormat = function() {
    moment().format('MMMM Do YYYY, h:mm:ss a');
}

module.exports = dateFormat