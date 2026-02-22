const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

/* DB */
const { users, tokens } = require("./db");

/* APIs */
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("email or password missing");

    /* valid email will have atleast 1 char before '@',
     atleast 1 character and no special char between '@' & '.'
     and atleast 2 chars after '.' without any special characters
    */

    /* H.W. implement your own email validator
     then add a check to see if an email is valid or not*/

    //hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log({ hashedPassword });

    // save the user in DB
    users.push({ email, password: hashedPassword });
    console.log({ users });

    res.json({ message: "User saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Email or password empty");
    }

    const user = users.find((user) => user.email === email);

    if (!user) {
      throw new Error(`User with email as [${email}] doesn't exist`);
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      throw new Error("password is invalid");
    }

    const token = uuidv4();
    tokens.push({
      token,
      email,
    });

    res.json({ token });
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || "internal server error", error: err });
  }
});

const verifyToken = (req, res, next) => {
  try {
    //Bearer mytokenname
    const authorisationHeader = req.headers.authorization;
    console.log({ authorisationHeader });
    if (!authorisationHeader) {
      throw new Error("Auth header missing!!");
    }

    const authToken = authorisationHeader.split(" ")[1];

    console.log({ authToken, tokens });

    //finding this token in tokens array
    const tokenObj = tokens.find((ele) => ele.token === authToken);

    if (!tokenObj) {
      throw new Error("Auth token is invalid!!");
    }

    const user = users.find((user) => user.email === tokenObj.email);

    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message, error: err });
  }
};

app.get("/profile", verifyToken, (req, res) => {
  res.json({ user: req.user });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
