const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const groups = require("./routes/api/groups");
const games = require("./routes/api/games");
const bodyParser = require("body-parser");
const db = require("./config/keys").mongoURI;
const passport = require("passport");
const cors = require("cors");

const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
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


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/groups", groups);
app.use("/api/games", games);


app.listen(port, () => console.log(`Server is running on port ${port}`));
