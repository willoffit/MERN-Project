const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const bodyParser = require("body-parser");
const db = require("./config/keys").mongoURI;
const passport = require("passport");

const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "app.js"));
  });
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(passport.initialize());

require("./config/passport")(passport);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));
const port = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);

app.listen(port, () => console.log(`Server is running on port ${port}`));
