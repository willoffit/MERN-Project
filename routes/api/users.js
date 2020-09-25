const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const { json } = require("body-parser");

router.get("/", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ nousersfound: "No users found" }));
});

// router.patch("/:id", (req, res) => {
//   User.findOneAndUpdate({ id: req.params.id }, {
//     scores: req.body.scores,
//     group: req.body.group
//   }).then(user => res.json(user)).catch(err =>
//     res.status(404).json({ nouserfound: 'No user found with that ID' })
//   );
// });

router.patch("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => {
        const updatedUser = user;
        updatedUser.scores = req.body.scores;
        updatedUser.group = req.body.group;
        updatedUser.inProgress = req.body.inProgress;

        updatedUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log('ERROR:', err));
      })
    .catch(err => res.status(404).json({ nouserfound: "Could not find user" }))
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // Use the validations to send the error
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          newUser.password = hash;

          newUser
            .save()
            .then((user) => { 
                const payload = {
                  id: user.id,
                  username: user.username,
                  email: user.email,
                };
                jwt.sign(
                  payload,
                  keys.secretOrKey,
                  { expiresIn: 3600 },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token,
                    });
                  }
                );
              } 
            )
            .catch((err) => { 
              if (err.errors.username) {
                return res.status(400).json(err.errors.username)
              } else {
                return res.status(400).json(err)
              }
            });
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      // Use the validations to send the error
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    console.log(user)
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        // And here:
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
    });
  }
);

module.exports = router;
