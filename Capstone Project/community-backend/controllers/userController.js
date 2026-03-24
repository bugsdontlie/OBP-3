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

const profile = (req, res) => {
  try {
    if (!req.user)
      throw new Error("user not found from token, please login/signup again");
    res.json({
      data: {
        message: "user details fetched successfully",
        user: req.user,
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "unable to find user details",
        info: err.message,
      },
    });
  }
};

const leaveCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: userId } = req.user; //using _id with name userId i.e., (userId = req.user._id)
    await userService.leaveCommunity({ userId, id });

    res.json({
      data: {
        message: "user left the community successfully",
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to remove user from this community",
        info: err.message,
      },
      data: null,
    });
  }
};

const dashboard = async (req, res) => {
  try {
    const { _id: id } = req.user;
    const dashboard = await userService.dashboard(id);

    res.json({
      data: {
        message: "successfully fetched the member dashboard",
        dashboard,
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to fetch the member dashboard",
        info: err.message,
      },
      data: null,
    });
  }
};

const getHostDashboard = async (req, res) => {
  try {
    const { _id: id } = req.user;
    const dashboard = await userService.getHostDashboard(id);

    res.json({
      data: {
        message: "host dashboard fetched successfully",
        dashboard,
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to fetch host dashboard",
        info: err.message,
      },
    });
  }
};

const toggleRSVP = async (req, res) => {
  try {
    const user = req.user;
    const { eventId } = req.query;

    await userService.toggleRSVP({ user, eventId });

    res.json({
      error: null,
      data: {
        message: "successfully toggled the RSVP for this event",
      },
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to toggle RSVP for this event",
        info: err.message,
      },
      data: null,
    });
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
    });

    res.json({
      data: {
        message: "user logged out successfully",
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to logout user",
        info: err.message,
      },
    });
  }
};

export default {
  register,
  login,
  joinCommunity,
  makeHost,
  profile,
  leaveCommunity,
  dashboard,
  getHostDashboard,
  toggleRSVP,
  logout,
};
