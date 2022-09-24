const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String,
        type: Unique,
        type: Required,
        type: Trimmed
    },
    email: {
        type: String,
        type: Required,
        type: Unique,
     // type: Must match a valid e-mail address (look into Mongoose's matching validation) 
    },
    thoughts: [],
    friends: []
});

// Schema Settings
// Create a virtual called 'friendCount' that retrieves the
//  length of the user's 'friends' array field on query.