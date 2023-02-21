const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  createReaction,
  deleteReaction,
  updateThought,
  deleteThought
} = require('../../controllers/userController');

// GET & POST /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// GET /api/users/:userId
router.route('/:userId').get(getSingleThought)

// PUT & DELETE /api/thoughts/:thoughtId
router.route('/thoughts/:thoughtId').put(updateThought).delete(deleteThought)

// POST /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction)

// DELETE /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)


module.exports = router







module.exports = router;