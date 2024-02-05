const {Schema, model} = require('mongoose')
const reactionsSchema = require('./Reaction')

function formattingDate(currentDate){
return currentDate.getMonth
//See HW 6  & 14 for formtting  
}

const thoughtSchema = new Schema({

    thoughtText:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (currentDate)=>formattingDate(currentDate)

    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionsSchema]

},
{
    toJSON: {
      getters: true,
    },
  }
);



thoughtSchema
.virtual('reactionCount')
.get(function(){
return this.reactions.length

}) 


const Thought = model('Thought', thoughtSchema)
module.exports = Thought
