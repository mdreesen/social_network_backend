const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -=- Connect to mongoose -=-
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_network', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// using to debug mongo queries if any issues
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`Connected to social_network_backend on localhost:${PORT}`));