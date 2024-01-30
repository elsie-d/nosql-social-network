const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
     userName: {
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
     thoughts: [thoughtSchema],
     friends: [userSchema],

     },       
     {
        toJSON: {
          getters: true,
        },
      }
);


// Reciew this -- specially the .set
userSchema
.virtual('friendCount')
.get(function(){
    const friendsTotal = aggregate.count("friends")
    console.log('friendsTotal')
    return friendsTotal;

})
.set(function (v){
    this.set({friendsTotal})
})

const user = model('user', userSchema)
module.exports = User


