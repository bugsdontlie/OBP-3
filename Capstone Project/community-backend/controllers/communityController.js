import communityService from "../services/communityService.js";

const createCommunity = async (req, res) => {
  try {
    const { name, description, category } = req.body;
    const host = req.user._id;

    await communityService.createCommunity({
      name,
      description,
      host,
      category,
    });
    res.json({
      data: {
        message: "community created successfully",
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to create community",
        info: err.message,
      },
      data: null,
    });
  }
};

const getAllCommunities = async (req, res) => {
  try {
    //call the service
    const communities = await communityService.getAllCommunities();

    res.json({
      data: {
        message: "successfully fetched all communities",
        communities,
      },
      error: null,
    });
  } catch (err) {
    console.log(err);

    res.json({
      error: {
        message: "failed to get all communities",
        info: err.message,
      },
      data: null,
    });
  }
};

const getSpecificCommunity = async (req, res) => {
  try {
    const { id } = req.query;

    const community = await communityService.getSpecificCommunity(id);

    res.json({
      data: {
        message: "successfully fetched community details",
        community,
      },
      error: null,
    });
  } catch (err) {
    // console.log("error in getSpecificCommunity function in communityController", err);
    console.log(err);

    res.json({
      data: null,
      error: {
        message: "failed to get specific community details",
        info: err.message,
      },
    });
  }
};

const getCommunityWithMembers = async (req, res) => {
  try {
    const { id } = req.query;
    const community = await communityService.getCommunityWithMembers(id);

    res.json({
      data: {
        message: "community with all members fetched successfully",
        community,
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      data: null,
      error: {
        message: "failed to get community details with memebers",
        info: err.message,
      },
    });
  }
};

const deleteCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: userId } = req.user;
    console.log({ id });

    await communityService.deleteCommunity({ id, userId });

    res.json({
      data: {
        message: "community deleted successfully",
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "unable to delete this community",
        info: err.message,
      },
      data: null,
    });
  }
};

export default {
  createCommunity,
  getAllCommunities,
  getSpecificCommunity,
  getCommunityWithMembers,
  deleteCommunity,
};
