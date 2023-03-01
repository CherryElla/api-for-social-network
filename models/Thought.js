const { Schema, model} = require("mongoose");
const mongoose = require("mongoose");

// Schema for Reaction
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => { 
                return new mongoose.Types.ObjectId();
            },
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
            get: function (value) {
                return new Date(value).toLocaleString();
            },
        },
    },
    {
        id: false,
    }
);

// Schema for Thought model creation
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function (value) {
            return new Date(value).toLocaleString();
        },
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
});

// Virtual that retrieves the length of the thoughts reactions array field on query
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// Initialize Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
