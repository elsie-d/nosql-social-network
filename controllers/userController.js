//const {ObjectId} = require('mongoose').Types;
const  User = require('../models/User');
const Thought = require('../models/Thought');

module.exports = {
// Get ALL users 
  async getUsers(req, res) {
    try {
      const users = await User.find().populate('thoughts');

      const usersObj = {
        users,
       
      };

      res.json(usersObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

// Get SINGLE user

async getUser(req, res){
  try {
    const user = await User.findOne({_id: req.params.userId})
    .select('-__v');
    if (!user){ 
      return res.status(404).json({message: 'User ID not found'})
    }
    res.json({
      user
    })
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
},

// Create new user

  async createUser(req, res) {
      try {
      const user = await User.create(req.body);
      console.log(`Successfully created: ${user}`)
      res.json(user);
      } catch (err) {
      console.log(err);
      return res.status(500).json(err);
      }
      },

// Update user
 async updateUser(req,res){
  try {
    const user = await User.findOneAndUpdate(
      {_id: req.params.userId},
      {$set: req.body},
      {runValidators: true, new: true }
      )
    if(!user) {
      return res.status(404).json({message: 'User ID not Found'})
    }
    res.json(user)
  } catch (err) {
    res.status(500).json(err);
  }  
 },
 
 async deleteUser(req, res){
  try{
    const user = await User.findOneAndDelete({_id: req.params.userId})
    if (!user){
      res.status(404).json('User not found')
    }
    res.json('User succesfully deleted')

  }catch(err){
    res.status(500).json(err);
  }
 },

 // Add a new friend
 async addFriend(req, res){
  try{
    const updatedUser = await User.findOneAndUpdate(
      {_id: req.params.userId},
      {$addToSet: {friends: req.params.friendId}},
      {new: true}
    )
    res.json(updatedUser);
  }catch(err){res.json(err)}
 },

 //Remove Friend
 async deleteFriend(req, res){
  try{
    const updatedUser = await User.findOneAndUpdate(
      {_id: req.params.userId},
      {$pull: {friends: req.params.friendId}},
      {new: true}
    )
    res.json(updatedUser);
  }catch(err){res.json(err)}
 },
}


