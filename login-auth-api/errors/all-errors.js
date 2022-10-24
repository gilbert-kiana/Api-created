const CustomAPIError = require("./custom-api");
const UnauthenticatedError = require("./unauthenticated");
const BadRequestError = require("./bad-request");
const NotFoundError = require("./not-found");

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  BadRequestError,
  NotFoundError,
};
