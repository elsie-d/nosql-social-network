//const {ObjectId} = require('mongoose').Types;
const User = require('../models/User');

module.exports = {
// Get users
  async getUsers(req, res) {
    try {
      const users = await User.find();

      const usersObj = {
        users,
       /* headCount: await headCount(), */
      };

      res.json(usersObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },



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


/* **`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id` */