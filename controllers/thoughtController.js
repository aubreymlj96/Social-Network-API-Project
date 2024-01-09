const Thought = require('../models/thought');
const User = require('../models/user');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.id })
      .select('-__v')
      .populate('reactions')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => console.error(err));
  },

  createThought(req, res) {
    Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.username
    })
    .then((thought) => res.json(thought))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
  })
},

 async updateThought(req, res) {
      const thoughtUpdate = await Thought.findOneAndUpdate(
          { _id: req.params.id }, 
          {$set: req.body},
          { runValidators: true, new: true });
          if (!thoughtUpdate){
            return res.status(404).json({message: "No thought with this Id!"})
          }
        
          res.json(thoughtUpdate);
          console.log("Thought Updated Successfully!")
          // res.status(500).json(err);
        },

  deleteThought(req, res) {
    Thought.deleteOne({ _id: req.params.id })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

};