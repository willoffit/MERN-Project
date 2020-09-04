const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  groupIds: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  groups: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Group" }
  ]
});

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;