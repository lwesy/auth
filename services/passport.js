const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");
const User = require("../models/user");

const localLogin = new LocalStrategy(
  { usernameField: "email" },
  (email, password, done) => {}
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: process.env.JWT_SECRET
};

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);

    if (user) {
      return done(null, user);
    }

    return done(null, false);
  } catch (err) {
    return done(err, false);
  }
});

passport.use(jwtLogin);
