const Thought = require('../models/thought');
const User = require('../models/user');
const thoughtController = require('./thoughtController');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  getSingleUser(req, res) {
    console.log(req.params.id);
    User.findOne({ _id: req.params.id })
      .select('-__v')
      .populate('friends')
      .populate('thoughts')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => console.error(err));
  },

  createUser(req, res) {
    User.create({
        username: req.body.username,
        email: req.body.email
    })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
      User.findOneAndUpdate(
          { _id: req.params.id }, 
          {
            username: req.body.username,
            email: req.body.email
          }, 
          { new: true }, 
      )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

    deleteUser(req, res) {
        User.deleteOne({ _id: req.params.id })
            .then((user) =>
                !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user))
            .catch((err) => console.error(err));
    },

    addFriend(req, res) {
        console.log(req.params);
        User.findOne({ _id: req.params.id })
          // .select('')
          .then((user) => {
              return User.findOneAndUpdate (
                { _id: req.params.id}, 
                {$addToSet: {
                    friends: user._id
                }},
                { new: true} 
              );
          }).then((user) => 
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
    },

    deleteFriend(req, res) {
        User.findOne({ _id: req.params.id })
          // .select('')
          .then((user) => {
              return User.findOneAndUpdate (
                { _id: req.params.id}, 
                {$pull: {
                    friends: user._id
                }},
                { new: true} 
              );
          }).then((user) => 
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
    }
};