import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { isHostMiddleware } from "../middlewares/isHostMiddleware.js";
import eventController from "../controllers/eventController.js";

const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  isHostMiddleware,
  eventController.createEvent,
);

router.get("/all", eventController.getAllEvents);

router.get("/specific", eventController.getSpecificEvent);

export default router;
