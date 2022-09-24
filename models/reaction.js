const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        // Use Mongoose's ObjectId data type
        // Default value is set to a new ObjectId
    },
    reactionBody: {
        type: String,
        type: Required
        // 280 character maximum
    },
    username: {
        type: String,
        type: Required
    },
    cretaedAt: {
        type: Date,
        // set defualt value to current timestamp
        // Use a getter method to format the timestamp on query
    }
})



// Schema Settings
// This will not be a model, but rather will be used as the 
// 'reaction' field's subdocument schema in the 'Thought' model.