const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  group: {
    type: Integer,
    required: true
  },
  category: {
    type: String,
    required: true,
  }
});

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;
