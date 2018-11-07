const Validator = require('validator');
const _ = require('lodash');
module.exports = function validateContactFormInput(data) {
  let errors = {};

  //check if valid Email
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is not valid';
  }
  if (_.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!Validator.isLength(data.message, { min: 5, max: 200 })) {
    errors.message = 'Message must more than 6 characters';
  }
  if (_.isEmpty(data.message)) {
    errors.message = 'Message field is required';
  }
  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
