export const isMemberMiddleware = (req, res, next) => {
  try {
    if (req.user?.role != "member")
      throw new Error(
        "this api can only be accessed by member and not any host",
      );
    next();
  } catch (err) {
    console.log(err);

    return res.json({
      error: {
        message: "unable to fetch member dashboard",
        info: err.message,
      },
    });
  }
};
