const { Thought} = require('../models')

// POST /api/thoughts/:thoughtId/reactions
module.export = {
    createReaction(req,res) {
        const {reactionBody, username} = req.body
        Thought.findByIdAndUpdate(
            req.params.thoughtId,
            {$push: {reactions: { reactionBody, username}}},
            {new: true, runValidators: true}
            )
            .then((updatedThought)=>
                !updatedThought
                ? res.status(404).json({message: 'No thought found with that ID!'})
                : res.json(updatedThought)
            )
            .catch((err)=>
            res.status(500).json(err))
    }
}

// DELETE /api/thoughts/:thoughtId/reactions/:reactionId
module.exports = {
    deleteReaction(req,res) {
        Thought.findByIdAndDelete(
            req.params.thoughtId,
            {$pull: {reactions: {reactionId: req.params.reactionId}}},
            {new: true}
        )
        .then((deletedThought)=> 
        ! deletedThought
        ? res.status(404).json({message: 'No thought found with that ID!'})
        : res.json(deletedThought)
        )
        .catch((err)=> res.status(500).json(err))
    }
}