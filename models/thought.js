const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        // Must be bet 1 and 280 characters
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        // set default value to current timestamp
        default: Date.now,
        // Use a getter method to format the timestamp on query
        get: createdAtVal => moment(createdAtVal).format('MM DD, YYYY [at] hh:mm a')
    },
    username: {
        // the user that created this thought
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
        // these are like replies
        // array of nested documents created with the 'reactionSchema'      
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Schema Settings
// Create a virtual called 'reactionCount' that retrieves the length
//  of the thought's 'reactions' array field on query.
const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        rewuired: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MM DD, YYYY [at] hh:mm a')
    }
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought, ThoughtSchema');

module.exports = Thought;