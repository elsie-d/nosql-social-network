//const {ObjectId} = require('mongoose').Types;
const User = require('../models/User');

module.exports = {
    async createUser(req, res) {
        try {
          const user = await User.create(req.body);
          console.log(`Successfully created: ${user}`)
          res.json(user);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      }


}