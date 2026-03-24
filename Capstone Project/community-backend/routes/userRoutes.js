import express from "express";
import userController from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { isMemberMiddleware } from "../middlewares/isMemberMiddleware.js";
import { isHostMiddleware } from "../middlewares/isHostMiddleware.js";

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
/* Dashboard means member dashboard */
/* HostDashboard means host dashboard */
router.get(
  "/dashboard",
  authMiddleware,
  isMemberMiddleware,
  userController.dashboard,
);
router.get(
  "/host/dashboard",
  authMiddleware,
  isHostMiddleware,
  userController.getHostDashboard,
); // will be used for host dashboard

router.patch("/toggleRSVP", authMiddleware, userController.toggleRSVP);

router.get("/logout", authMiddleware, userController.logout);
export default router;
