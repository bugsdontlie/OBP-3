import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
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

app.listen(PORT, () => {
  console.log("Server is listening to PORT: ", PORT);
});
