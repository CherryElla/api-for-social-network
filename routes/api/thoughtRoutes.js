const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController')

const {
  createReaction,
  deleteReaction,
} = require('../../controllers/reactionController')


// GET & POST /api/thoughts
router.route('/').get(getThoughts);

// POST /api/user/:userId/thoughts
router.route('/:userId/thoughts/').post(createThought)

// GET & PUT & DELETE /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)

// POST /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction)

// DELETE /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)


module.exports = router






