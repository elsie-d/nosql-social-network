const router = require('express').Router();

//test
router.get('/', (req,res) => {
    res.json({message: 'this works too'})
})



module.exports = router;