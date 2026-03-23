import Community from "../models/Community.js";
import Event from "../models/Event.js";

const checkInputErrors = ({
  name,
  description,
  communityId,
  city,
  venue,
  time,
}) => {
  const inputErrors = [];
  if (!name) inputErrors.push("name is empty");
  if (!description) inputErrors.push("description is empty");
  if (description?.length > 1000)
    inputErrors.push("description length cannot be more than 1000");
  if (!communityId) inputErrors.push("communityId is empty");
  if (!city) inputErrors.push("city is empty");
  if (!venue) inputErrors.push("venue is empty");
  if (!time) inputErrors.push("time is empty");
  //not including capacity here, as it's optional
  //validate if time is in future, if not, add in input error saying "event time must be in future"
  return inputErrors;
};

const createEvent = async ({
  name,
  description,
  communityId,
  city,
  venue,
  time,
  capacity,
  hostId,
}) => {
  const inputErrors = checkInputErrors({
    name,
    description,
    communityId,
    city,
    venue,
    time,
  });

  if (inputErrors.length) throw new Error(inputErrors.join(", "));

  // checking if communityId is valid or not?
  const community = await Community.findById(communityId);

  if (!community) throw new Error("community id is invalid");

  //checking if this community as host as hostId

  if (community.host.toString() != hostId.toString())
    throw new Error(
      `current user is not a host of ${community.name} community`,
    );

  const event = new Event({ name, description, communityId, city, venue });
  if (capacity) event.capacity = capacity;
  event.time = new Date(time);

  await event.save();
};

const getAllEvents = async ({ city, keyword }) => {
  const filter = {
    time: { $gte: new Date() },
  };

  if (city) filter.city = { $regex: city, $options: "i" };

  if (keyword)
    filter.$or = [
      { name: { $regex: keyword, $options: "i" } },
      { description: { $regex: keyword, $options: "i" } },
    ];

  return await Event.find(filter);
};


export default {
  createEvent,
  getAllEvents,
};
