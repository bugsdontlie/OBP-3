import express from "express";
import userController from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", userController.register);
router.get("/login", userController.login);
router.patch("/join-community", authMiddleware, userController.joinCommunity);
router.patch("/make-host", authMiddleware, userController.makeHost);
router.get("/me", authMiddleware, userController.profile);
router.patch(
  "/leave-community/:id",
  authMiddleware,
  userController.leaveCommunity,
);

export default router;
