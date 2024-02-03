const router = require('express').Router();

//test
router.get('/', (req,res) => {
    res.json({message: 'this works'})
})
 
// test post
/* router.post('/newuser', async (req, res) => {
    const testUser = await new User ({
        username: "elsieTest",
        email: "test@test.com"
    })
    await testUser.save()
    res.send("we're good")
})
 */

const {
    createUser,
} = require('../../controllers/userController.js');

router.route('/').post(createUser)


module.exports = router;