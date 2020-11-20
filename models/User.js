const { Schema, model } = require('mongoose');
// need to require thought here

// User model
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: 'Username is required', // custom error message
        trim: true
    },
    email: {
        type: String,
        required: 'Email is required', // custom error message
        unique: true, // each email needs to be unique
        match: [/.+\@.+\..+/]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought' // referencing thoughts
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'friends' // referencing friends
    }]
}, {
    toJSON: {
        virtuals: true, // made UserSchema virtual
        getters: true // may not need this getter
    },
    id: false
});

// Create a virtual - friendCount. This retrieves the length of the users "friends" - 
// array on query
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create the User model
const User = model('User', UserSchema);

// export User model
module.exports = User;