const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  groupIds: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true,
  }
});

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;
