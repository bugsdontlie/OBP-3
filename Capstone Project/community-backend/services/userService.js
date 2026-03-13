import User from "../models/User.js";

const registerUser = async ({ name, email, password }) => {
  const user = new User({
    name,
    email,
    hashedPassword: password,
  });
  if (!name) throw new Error("name is empty");

  await user.save();
};

export default { registerUser };
