import User from "../models/User.js";
import Community from "../models/Community.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const registerUser = async ({ name, email, password }) => {
  const inputErrors = [];

  if (!name) inputErrors.push("Name is required");
  if (!email) inputErrors.push("Email is required");
  if (!password) inputErrors.push("Password is required");

  if (password?.length < 6)
    inputErrors.push("password length must be atleast 6 characters");

  if (name.length < 10 || name.length > 100)
    inputErrors.push("Name length must be in range [10, 100]");

  const existingUser = await User.findOne({ email: email });

  if (existingUser) inputErrors.push(`Email: ${email} already exists`);

  if (inputErrors.length) throw new Error(inputErrors.join(", "));

  //IF WE ARE REACHING THIS LINE OF CODE, THEN THERE'S NO INPUT ERRORS AND WE CAN SAFELY STORE THE VALID USER

  //HASHING THE PASSWORD

  const hashedPassword = await bcrypt.hash(password, 10); //salt between 5 to 12 is considered a good hash

  const user = new User({
    name,
    email,
    hashedPassword,
  });

  await user.save();

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
};

const loginUser = async ({ email, password }) => {
  const inputErrors = [];

  if (!email) inputErrors.push("Email is required");
  if (!password) inputErrors.push("Password is required");

  if (password?.length < 6)
    inputErrors.push("password length must be atleast 6 characters");

  if (inputErrors.length) throw new Error(inputErrors.join(", "));

  const existingUser = await User.findOne({ email }).select("+hashedPassword");

  if (!existingUser) {
    throw new Error(`user with this email (${email}) doesn't exists`);
  }

  const validPassword = await bcrypt.compare(
    password,
    existingUser.hashedPassword,
  );
  if (!validPassword) {
    throw new Error("invalid password");
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET);

  const user = existingUser;

  return { token, user };
};

const joinCommunity = async ({ userId, communityId }) => {
  if (!communityId) {
    throw new Error("community id is not valid");
  }

  if (!mongoose.Types.ObjectId.isValid(communityId))
    throw new Error("communityId is not a valid ObjectId");

  const existingCommunity = await Community.findById(communityId);
  if (!existingCommunity) {
    throw new Error("community id is not valid");
  }

  //if user already exists in community??

  await User.findByIdAndUpdate(userId, {
    $addToSet: {
      joinedCommunities: communityId,
    },
  });
};

const makeHost = async (userId) => {
  await User.findByIdAndUpdate(userId, {
    $set: { role: "host" },
  });
};

const leaveCommunity = async ({ id, userId }) => {
  if (!mongoose.Types.ObjectId.isValid(id))
    throw new Error("given id is not a valid mongoose id");

  //checking if this community actually exists or not
  const community = await Community.findById(id);

  if (!community) throw new Error("no community exists with this id");

  await User.findByIdAndUpdate(userId, {
    $pull: {
      joinedCommunities: id,
    },
  });
};

export default {
  registerUser,
  loginUser,
  joinCommunity,
  makeHost,
  leaveCommunity,
};
