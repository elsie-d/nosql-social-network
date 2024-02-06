const router = require('express').Router();


const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    addReaction,
    deleteReaction,
    deleteThought
} = require('../../controllers/thoughtController');

router.route('/')
.get(getThoughts)
.post(createThought);

router.route('/:thoughtId')
.put(updateThought)
.get(getThought)
.delete(deleteThought)

router.route('/:thoughtId/reactions')
.post(addReaction)


router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;