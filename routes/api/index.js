const router = require("express").Router();
const userRoute = require("./userRoute");
const thoughtRoute = require("./thoughtRoute");
const reactionRoute = require("./reactionRoute");

router.use("/users", userRoute);
router.use("/thoughts", thoughtRoute);
router.use("/reactions", reactionRoute);

module.exports = router;