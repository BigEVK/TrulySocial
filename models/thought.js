const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        type: Required,
        // Must be bet 1 and 280 characters
    },
    createdAt: {
        type: Date,
        // set default value to current timestamp
        // Use a getter method to format the timestamp on query
    },
    username: {
        // the user that created this thought
        type: String,
        type: Required
    },
    reactions: {
        // these are like replies
        // array of nested documents created with the 'reactionSchema'      
    },
});

// Schema Settings
// Create a virtual called 'reactionCount' that retrieves the length
//  of the thought's 'reactions' array field on query.