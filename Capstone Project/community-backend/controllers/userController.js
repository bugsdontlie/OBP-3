import userService from "../services/userService.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const token = await userService.registerUser({ name, email, password });

    res.cookie("token", token, {
      httpOnly: true,
      // secure: true//keep it for PRODUCTION
      sameSite: "lax", //strict, lax, none
      maxAge: 1 * 24 * 60 * 60 * 1000, //1 day
    });

    res.json({
      data: {
        message: "user registered successfully",
      },
      error: null,
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      error: {
        message: "failed to register user",
        info: err.message,
      },
      data: null,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser({ email, password });
    res.cookie("token", user.token, {
      httpOnly: true,
      // secure: true//keep it for PRODUCTION
      sameSite: "lax", //strict, lax, none
      maxAge: 1 * 24 * 60 * 60 * 1000, //1 day
    });

    res.json({
      data: {
        message: "user logged in successfully",
        user: user.user,
      },
      error: null,
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      error: {
        message: "failed to login user",
        info: err.message,
      },
      data: null,
    });
  }
};

const profile = (req, res) => {
  try {
    if (!req.user) throw new Error("user not found, maybe invalid token");
    res.json({ user: req.user });
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

export default {
  register,
  login,
  profile,
};
