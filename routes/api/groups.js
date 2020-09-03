const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// const passport = require("passport");
const Group = require("../../models/Group");
const User = require("../../models/User");
const validateGroupInput = require("../../validation/groups");
module.exports = router;

router.get("/test", (req, res) =>
  res.json({ msg: "This is the groups route" })
);

router.get("/:id", (req, res) => {
    Group.findById(req.params.id)
      .then((group) => res.json(Group))
      .catch((err) =>
        res.status(404).json({ nogroupfound: "No group found with that ID" })
      );
});



router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateGroupInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const userIds = []

    req.body.members.split(" ").forEach(member => {
      await User.findOne({ username: member }, (error, user) => {
        userIds.push(user._id);
      })
    });

    const newGroup = new Group({
      name: req.body.name,
      members: userIds
    });

    newGroup.save().then((group) => res.json(group));
  }
);

// router.update(
//   "/",
//   // passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateGroupInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const userIds = req.body.members
//       .split(" ")
//       .map((member) =>
//         User.findOne({ username: member }).then((user) => res.json(user._id))
//       );

//     const newGroup = new Group({
//       name: req.body.name,
//       members: userIds,
//     });

//     newGroup.save().then((group) => res.json(group));
//   }
// );

router.delete("/:id", (req, res) => {
  Group.findByIdAndRemove(req.params.id);
});