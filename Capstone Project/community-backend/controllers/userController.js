import userService from "../services/userService.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await userService.registerUser({ name, email, password });

    res.send("User added to db");
  } catch (err) {
    console.log(err.message);
    res.send("failed to save user in db");
  }
};

const login = (req, res) => {};

export default {
  register,
  login,
};
