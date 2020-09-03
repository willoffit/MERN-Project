
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGameInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.category)) {
        errors.text = 'category field is required';
    }

    if (Validator.isEmpty(data.groupId)) {
      errors.text = "Group ID field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};