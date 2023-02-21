const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');

// GET & POST /api/users
router.route('/').get(getUsers).post(createUser);

// GET /api/users/:userId
router.route('/:userId').get(getSingleUser)

// POST /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(getSingleUser);

module.exports = router;