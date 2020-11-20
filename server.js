const express = require('express').Router();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// I don't think we need this
app.use(express.static('public'));
//
app.use(require('./routes'));

// -=- Connect to mongoose -=-
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// using to debug mongo queries if any issues
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected to social_network_backend on localhost:${PORT}`));