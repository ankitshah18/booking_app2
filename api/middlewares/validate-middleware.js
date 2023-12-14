const { parseAsync } = require("../validators/auth-validator");

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    // console.log(err);
    const status = 422;
    const message = "Enter all fields properly!";
    const extraDetails = err.errors[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };

    next(error);
  }
};

module.exports = validate;
