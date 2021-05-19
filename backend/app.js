const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const port = 8080;
const accessTokenSecret = "vungle";

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function authenticate(req, res, next) {
  const token = req.cookies.token || "";
  jwt.verify(token, accessTokenSecret, (err) => {
    if (err) {
      return res
        .sendStatus(403)
        .json({ message: "User is not authenticated." });
    }
    next();
  });
}

app.post("/auth", function (req, res) {
  const accessToken = jwt.sign("testToken", accessTokenSecret);
  res
    .status(200)
    .cookie("token", accessToken, { httpOnly: true })
    .json({ username: req.body.username });
});

app.post("/account", authenticate, function (req, res) {
  res.status(200).json({});
});

app.post("/account/edit", authenticate, function (req, res) {
  res.status(200).json({ username: req.body.username });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
