import mongoose from "mongoose";
import Community from "../models/Community.js";

const createCommunity = async ({ name, description, host, category }) => {
  const inputErrors = [];
  if (!name) inputErrors.push("name cannot be empty");
  if (!description) inputErrors.push("description cannot be empty");
  if (!host) inputErrors.push("host cannot be empty");
  if (!category) inputErrors.push("category cannot be empty");

  if (inputErrors.length) throw new Error(inputErrors.join(", "));

  if (!mongoose.Types.ObjectId.isValid(host))
    throw new Error("host id is not a valid ObjectId");

  //verify if category is in: ["chess", "mern", "cooking", "tech", "jobs", "sports", "politics"]

  await new Community({ name, description, host, category }).save();
};

const getAllCommunities = async () => {
  //lean() is just converting mongoose object to plain JS object
  const communities = await Community.find().lean();
  return communities;
};

const getSpecificCommunity = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id))
    throw new Error("community id is not valid");

  // const community = await Community.findById(id).populate("host", "name -_id");
  const community = await Community.findById(id)
    .populate({
      path: "host",
      select: "name -_id",
    })
    .lean();

  /* 
  IF WE WANT TO MANIPULATE DATA, WE CAN DO THAT
  community.host = community.host.name; */

  return community;
};

export default {
  createCommunity,
  getAllCommunities,
  getSpecificCommunity,
};
