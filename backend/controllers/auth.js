const AuthService = require("../services/auth");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await AuthService.checkUser(email);

    if (!user) {
      return next({ error: "User does not exist." });
    }

    const isMatch = await user.comparePassword(password);
    if (isMatch === false) {
      return next({ error: "Invalid Password!" });
    }

    res.status(200).json({ user });
  } catch (error) {
    return next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    console.log("hello");
    const { firstName, lastName, dob, email, phone, password } = req.body;
    const existingUser = await AuthService.checkUser(email);

    if (existingUser) {
      return next({ msg: "User already exists." });
    }
    const user = await AuthService.registerUser(
      firstName,
      lastName,
      dob,
      email,
      phone,
      password
    );

    res.status(200).json({ user });
  } catch (error) {
    return next(error);
  }
};


