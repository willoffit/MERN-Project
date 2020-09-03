const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Game = require("../../models/Game");
// const User = require("../../models/User");
// const validateGroupInput = require("../../validation/groups");


module.exports = router;

router.get("/test", (req, res) =>
  res.json({ msg: "This is the games route" })
);

const validateGameInput = require("../../validation/games");



router.get("/:id", (req, res) => {
    Game.findById(req.params.id)
      .then((game) => res.json(Game))
      .catch((err) =>
        res.status(404).json({ nogamefound: "No game found with that ID" })
      );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateGameInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const userIds = req.members.map(member => {
      return User.find({ username: member }).then(user => res.json(user));
    });

    const newGame = new Game({
      category: req.body.category,
      group: req.body.groupId,
    });

    newGame.save().then((game) => res.json(game));
  }
);

router.delete("/:id", (req, res) => {
  Game.findByIdAndRemove(req.params.id);
});