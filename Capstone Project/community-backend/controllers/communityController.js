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

export default {
  createCommunity,
};
