const { Schema, model, Types } = require('mongoose');
// may need to require user?
const dateFormat = require('../utils/dateFormat'); // using moment to format the date

// -=- REACTION MODEL -=-
// Not a model but the ThoughtSchema references this model
const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAt => dateFormat(createdAt)
    }
}, {
    toJSON: {
        getters: true
    },
    id: false
})

// -=- THOUGHT MODEL -=-
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now, // need to format the timestamp
        get: createdAtVal => dateFormat(createdAtVal) // formatting date and time
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema] // getting array of reactions for thoughts
}, {
    toJSON: {
        virtuals: true, // made virtual to get reaction count
        getters: true
    },
    id: false
});

// created virtual to get reaction count
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;