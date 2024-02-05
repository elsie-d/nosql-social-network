const router = require('express').Router();


const {
    getThoughts,
    createThought,
    addReaction,
    getThought
} = require('../../controllers/thoughtController');

router.route('/')
.get(getThoughts)
.post(createThought);

router.route('/:thoughtId')
.put(addReaction)
.get(getThought)
//.delete()

router.route('/:thoughtId/reactions')
//.post()


router.route('/:thoughtId/reactions/:reactionId')
//.delete()

module.exports = router;