require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());
app.use(cors());

const { users } = require("./db");

// npm i express nodemon dotenv cors jsonwebtoken

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw new Error("Email or Password missing");

    const hashedPassword = await bcrypt.hash(password, 12);
    users.push({
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h", //7d 24h 30d
      },
    );

    res.json({
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "internal server error",
      error: err,
    });
  }
});

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    console.log({ token });

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = users.find((user) => user.email === payload.email);
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message || "internal server error",
      error,
    });
  }
};

app.get("/profile", verifyToken, (req, res) => {
  res.json({ user: req.user });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
