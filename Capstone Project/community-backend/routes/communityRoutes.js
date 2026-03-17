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

router.post("/join", (req, res) => {});

export default router;
