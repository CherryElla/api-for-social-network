const User = require("../models/User");

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select("-__V")
            .populate(["thoughts", "friends"])
            .then((user) =>
                !user
                    ? res
                          .status(404)
                          .json({ message: "No user exists with that ID" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    // PUT /api/users/:userId
    updateUser(req,res){
        User.findOneAndUpdate({_id: req.params.userId},
            {$set: req.body},
            {new: true, runValidators: true}
            )
            .then((updatedUser)=>
            !updatedUser
            ? res.status(404).json({message: 'No user found with that ID!'})
            : res.json(updatedUser)
            )
            .catch((err)=>
            res.status(500).json(err))
    },
    // DELETE /api/users/:userId
    deleteUser(req,res) {
        User.findOneAndDelete({_id: req.params.userId})
        .then((deletedUser)=>
        !deletedUser
        ? res.status(404).json({message: 'No user found with that ID!'})
        : res.json(deletedUser)
        )
        .catch((err)=>
        res.status(500).json(err)
        )
        .then(()=>{
            res.json({message: 'User deleted successfully!'})
        }
        )
        .catch((err)=> res.status(500).json(err))
    }
};
