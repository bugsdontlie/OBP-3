import express from "express";
import userController from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", userController.register);
router.get("/login", userController.login);
router.patch("/join-community", authMiddleware, userController.joinCommunity);
router.patch("/make-host", authMiddleware, userController.makeHost);
router.get("/me", authMiddleware, userController.profile)

export default router;
