const Reaction = require('../models/reaction');
const Thought = require('../models/thought');

module.exports = {
    addReaction(req, res) {
        Thought.findOneAndUpdate(
          {_id: req.params.thoughtId},
          {$addToSet: {reactions: req.body}},
          {runValidators: true, new: true}
          )
          .then((thought) => res.json(thought))
          .catch((err) => res.status(500).json(err));
      },
    
      removeReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          {$pull: {
            reactions: {reactionId: req.params.id}
        }},
        { runValidators: true, new: true} 
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(`Reaction deleted`)
          )
          .catch((err) => res.status(500).json(err));
      },
}