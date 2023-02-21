const User = require('../models/User')

module.exports = {
    getUsers(req,res){
        User.find()
        .then((users)=> res.json(users))
        .catch((err)=> res.status(500).json(err))
    },
    getSingleUser(req,res) {
        User.findOne({_id: req.params.userId})
        .select('-__V')
        .populate('thoughts', 'friends')
        .then((user)=> !user
        ? res.status(404).json({message: 'No user exists with that ID'})
        : res.json(user)
        )
        .catch((err)=> res.status(500).json(err))
}}