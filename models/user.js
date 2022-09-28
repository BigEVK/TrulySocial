const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
     // type: Must match a valid e-mail address (look into Mongoose's matching validation) 
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// Schema Settings
// Create a virtual called 'friendCount' that retrieves the
//  length of the user's 'friends' array field on query.

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
const User = model('User', UserSchema);


module.exports = User;
