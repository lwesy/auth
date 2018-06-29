require("./services/passport");
const passport = require("passport");
const express = require("express");
const Authentication = require("./controllers/authentication");
const router = express.Router();

const requireAuth = passport.authenticate("jwt", { session: false });

router.get("/", requireAuth, (req, res) => {
  res.send({ msg: "Hello!" });
});
router.post("/signup", Authentication.signup);

module.exports = router;
