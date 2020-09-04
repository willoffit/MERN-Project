const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateGroupInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";

  // if (!Validator.isLength(data.name, { min: 1, max: 20 })) {
  //   errors.text = "Group name must be between 1 and 20 characters";
  // } 

  // if (Validator.isEmpty(data.members)) {
  //   errors.text = "Members field is required";
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
