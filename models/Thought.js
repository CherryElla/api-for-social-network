const {Schema, model} = require('mongoose')
const reactionSchema = require('./Reaction')

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
        reactions: [reactionSchema]
});

const reactionSchema = new Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        get: function(value) {
            return new Date(value).toLocaleString()
        }
    },
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