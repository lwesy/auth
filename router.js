require("./services/passport");
const passport = require("passport");
const express = require("express");
const Authentication = require("./controllers/authentication");
const router = express.Router();

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSigin = passport.authenticate("local", { session: false });

router.get("/", requireAuth, (req, res) => {
  res.send({ msg: "Hello!" });
});
router.post("/signin", requireSigin, Authentication.signin);
router.post("/signup", Authentication.signup);

module.exports = router;
