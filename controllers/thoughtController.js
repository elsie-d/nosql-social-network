const Thought = require('../models/Thought');

// Get all user thoughts
module.exports = {
    // Get ALL thoughts 
      async getThoughts(req, res) {
        try {
          const thought = await Thought.find();
          if(Thought === '[]'){
            res.json('no thoughts to display')
          }  
            
          res.json(thought);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },

    // Get a SINGLE thought
    async getThought(req, res){
        try{
    const thought = await thought.findOne({_id: req.params.thoughtId})
  
    .select('-__v');
    if (!thought){ 
      return res.status(404).json({message: 'thought ID not found'})
    }
    res.json({
      thought
       })

        }catch(err){res.json(err)}
    },  

    // Create thought  
    async createThought(req, res) {
        try {
          const thought = await Thought.create(req.body);
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },


    // Add reaction to thought
    async addReaction(req, res){
        console.log('you are reacting to a thought');
        console.log(req.body);

        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$addToSet: {reactions: req.body}},
                {runValidators: true, new: true}
            );
            if (!thought){
                res.status(404).json('Thought not found')
            }
            res.json(thought);

        } catch(err){
            res.status(404).json(err)
        }
    } ,
    
    // Delete Reaction
    async deleteReaction(req, res){

        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: req.body}},
                {runValidators: true, new: true}
            );
            if (!thought){
                res.status(404).json('Thought not found')
            }
            res.json(thought);

        } catch(err){
            res.status(404).json(err)
        }
    }    
}