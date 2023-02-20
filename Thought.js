const {Schema, model} = require('mongoose')

// Schema for Thought model creation
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function(value) {
                return new Date(value).toLocaleString()
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            // array of nested docs created with reactionSchema
        ]
});

// Virtual that retrieves the length of the thoughts reactions array field on query
thoughtSchema.virtual('reactionCount')
.get(function()
{
    let reactionCount = this.reactions
    return reactionCount.length
})

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought