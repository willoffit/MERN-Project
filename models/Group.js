const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  game: { type: mongoose.Schema.Types.ObjectId, ref: "Group" }
});

const Group = mongoose.model("Group", GroupSchema);
module.exports = Group;



