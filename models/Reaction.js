const {Schema, Types} = require('mongoose')


function formattingDate(currentDate){
    return currentDate.getMonth
    //See HW 6  & 14 for formtting  
    }


const reactionSchema = new Schema ({

    reactionID:{
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: true,
        maxlenght: 280, 
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (currentDate)=>formattingDate(currentDate)

    }
})




module.exports = reactionSchema