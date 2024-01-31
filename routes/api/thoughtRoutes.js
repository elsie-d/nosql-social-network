const router = require('express').Router();

//test
router.get('/', (req,res) => {
    res.json({message: 'this works'})
})

//api/thoughts
/* router.route('/', (req, res)).get(
    ''
) */

module.exports = router;