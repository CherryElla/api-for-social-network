const {Schema, model} = require('mongoose')

// Schema for User model creation
const userSchema = new Schema(
    {
        username: {
            type: String, 
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            match: []
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }],
            friends: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'user'
                },
            ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

userSchema.virtual('friendCount').get(function() {
    let friendCount = `${this.friends}`
    return friendCount.length
})

// Initialize User model
const User = model('user', userSchema);

module.exports = User