const {Schema, model} = require("mongoose");

// Schema for Reaction model creation
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

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction