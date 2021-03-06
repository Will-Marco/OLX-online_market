const Joi = require("joi");

module.exports = class Validations {
  static async SignUpValidation(data) {
    return await Joi.object({
      name: Joi.string()
        .required()
        .min(3)
        .max(32)
        .trim()
        .error(new Error("Name is Invalid")),
      email: Joi.string()
        .email()
        .required()
        .trim()
        .lowercase()
        .error(new Error("Email is Invalid")),
      password: Joi.string().required().error(new Error("Password is Invalid")),
    }).validateAsync(data);
  }
};
