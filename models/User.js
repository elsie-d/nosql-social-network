const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
     username: {
        type: String,
        trim: true,
        unique: true,
        required: true
     },
     email: {
        type: String,
        match: /.+\@.+\..+/,
        unique: true,
        required: true,

     },
     friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }  
     ], 
     thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
     ],
     },       
     {
        toJSON: {
          getters: true,
        },
      }
);



userSchema
.virtual('friendCount')
.get(function(){
    return this.friends.length

})


const User = model('User', userSchema)
module.exports = User


