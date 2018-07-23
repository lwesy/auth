const jwt = require("jwt-simple");

const User = require("../models/user");

const getTokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET);
};

exports.signin = async (req, res, next) => {
  return res.send({ token: getTokenForUser(req.user) });
};

exports.signup = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password! " });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(422).send({ error: "Email is already in use." });
    }

    const user = new User({ email, password });
    await user.save();

    return res.send({ token: getTokenForUser(user) });
  } catch (err) {
    return next(err);
  }
};
