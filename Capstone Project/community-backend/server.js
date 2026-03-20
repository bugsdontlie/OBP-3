import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import communityRoutes from "./routes/communityRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 4000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/community";
connectDb(MONGO_URI);

app.use("/api/user", userRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/event", eventRoutes);

app.listen(PORT, () => {
  console.log("Server is listening to PORT: ", PORT);
});

/* 

server-> routes-> controllers-> services-> Models

1. server.js: create a route if not created already
2. xyzRoutes.js: now in route, create a HTTP API (ex: POST /login), with a controller
3. xyzController.js: now in controller, create a function that handles req & res and 
  inside this function call any suitable service
4. xyzService.js: now for a controller, create a service and inside this service, write buisness logic 
  and access DB
*/
