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

const joinCommunity = async (req, res) => {
  try {
    const { communityId } = req.query;

    await userService.joinCommunity({ userId: req.user._id, communityId });

    res.json({
      data: {
        message: "user has successfully joined the community",
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to add user in community",
        info: err.message,
      },
    });
  }
};

const makeHost = async (req, res) => {
  try {
    const userId = req.user._id;
    await userService.makeHost(userId);
    res.json({
      data: {
        message: "user role changed to host",
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to upgrade user to host",
        info: err.message,
      },
      data: null,
    });
  }
};

export default {
  register,
  login,
  joinCommunity,
  makeHost,
};
