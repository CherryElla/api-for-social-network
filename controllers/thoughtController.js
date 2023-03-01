const {Thought, User} = require('../models')

module.exports = {
    // GET /api/thoughts
    getThoughts(req, res){
        Thought.find()
        .then((thoughts)=> res.json(thoughts))
        .catch((err)=> res.status(500).json(err))
    },
    getSingleThought(req,res){
        Thought.findOne({_id: req.params.thoughtId})
        .then((thought)=>
        !thought
        ? res.status(404).json({message: 'No thought with that ID'})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },

    // POST /api/thoughts/:userId
    createThought(req,res){
        Thought.create(req.body)
        .then((thought)=> {
            return User.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet: {thoughts: thought._id}},
                {new: true}
            )
        })
        .then((user)=>
        !user
        ? res.status(404).json({message: 'Thought created but no user found!'})
        : res.json(user)
        )
        .catch((err)=> {
            console.log(err)
            res.status(500).json(err)
        });
    },

    // PUT /api/thoughts/:thoughtId
    updateThought(req,res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {new: true}
            )
            .then((updatedThought)=>
            !updatedThought
            ? res.status(404).json({message: 'No thought found with that ID!'})
            : res.json(updatedThought)
            )
            .catch((err)=>
            res.status(500).json(err))
    },

    // DELETE /api/thoughts/:thoughtId
    deleteThought(req,res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {thoughts: {thoughtId: req.params.thoughtId}}},
            {new: true}
        )
        .then((thought)=> {
        !thought
        ? res.status(404).json({message: 'No thought found with that ID!'})
        : res.json(thought)}
        )

        .catch((err)=> res.status(500).json(err))
    }
    
};