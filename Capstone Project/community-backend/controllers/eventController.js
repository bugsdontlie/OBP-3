import eventService from "../services/eventService.js";

const createEvent = async (req, res) => {
  try {
    const { name, description, communityId, city, venue, time, capacity } =
      req.body;

    const hostId = req.user._id;

    await eventService.createEvent({
      name,
      description,
      communityId,
      city,
      venue,
      time,
      capacity,
      hostId,
    });

    res.json({
      data: {
        message: "event created successfully",
      },
      error: null,
    });
  } catch (err) {
    console.log(req.user.email);
    console.log("====================");

    console.log(err);
    res.json({
      data: null,
      error: {
        message: "failed to create this event",
        info: err.message,
      },
    });
  }
};

export default {
  createEvent,
};
