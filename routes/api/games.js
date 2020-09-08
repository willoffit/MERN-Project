const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Game = require("../../models/Game");

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
  (req, res) => {
    const { errors, isValid } = validateGameInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // debugger;
    const newGame = new Game({
      category: req.body.category,
      groupId: req.body.groupId,
      questions: req.body.questions
    });

    newGame.save()
      .then((game) => res.json(game))
      .catch(err => console.log(err))
  }
);

router.delete("/:id", (req, res) => {
  Game.findByIdAndRemove(req.params.id);
});

module.exports = router;
