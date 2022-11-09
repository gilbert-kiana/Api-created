const { StatusCodes } = require("http-status-codes");

const errorHanderMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong try again later",
  };

  if (err.name === "ValidationErron") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.StatusCode = 400;
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field please choose another one`;
    customError.StatusCode = 404;
  }

  if (err.name === "CastError") {
    customError.msg = `No item found with id:${err.value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHanderMiddleware;
