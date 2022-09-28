const { Schema, model } = require('mongoose');

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


const Reaction = model('Reaction', ReactionSchema);
// Schema Settings
// This will not be a model, but rather will be used as the 
// 'reaction' field's subdocument schema in the 'Thought' model.

module.exports = Reaction;