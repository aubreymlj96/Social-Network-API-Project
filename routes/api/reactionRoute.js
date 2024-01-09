const router = require("express").Router();

const {
  removeReaction,
  addReaction
} = require("../../controllers/reactionController");

router.route("/:thoughtId/:id").delete(removeReaction);
router.route("/:thoughtId").post(addReaction);

module.exports = router;