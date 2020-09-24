const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require("mongoose-unique-validator");


const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  scores: {
    "Sports": { type: Array }, 
    "Geography": { type: Array }, 
    "History": { type: Array }, 
    "Film": { type: Array },
    "General Knowledge": { type: Array },
    "Science": { type: Array }
  },
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  inProgress: {
    type: Boolean, 
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

UserSchema.plugin(uniqueValidator);
const User = mongoose.model("User", UserSchema);
module.exports = User;

