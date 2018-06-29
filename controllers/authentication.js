const User = require("../models/user");

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

    return res.send({ success: true });
  } catch (err) {
    if (err) {
      return next(err);
    }
  }
};
