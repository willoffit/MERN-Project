const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  questions: {
    type: Array,
    required: true
  }
});

const Game = mongoose.model("Game", GameSchema);
module.exports = Game; 