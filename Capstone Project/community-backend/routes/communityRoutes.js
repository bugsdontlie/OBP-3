import express from "express";
import communityController from "../controllers/communityController.js";
import { isHostMiddleware } from "../middlewares/isHostMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// POST /api/community/create
router.post(
  "/create",
  authMiddleware,
  isHostMiddleware,
  communityController.createCommunity,
);

router.get("/all", communityController.getAllCommunities);
router.get("/specific", communityController.getSpecificCommunity);
router.get("/with-members", communityController.getCommunityWithMembers);
router.delete(
  "/:id",
  authMiddleware,
  isHostMiddleware,
  communityController.deleteCommunity,
);
export default router;
