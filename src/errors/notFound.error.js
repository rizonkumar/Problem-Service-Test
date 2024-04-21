const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFound extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      "Resource Not Found",
      StatusCodes.NOT_FOUND,
      `The requested resource: ${resourceName} with the value ${resourceValue} not found`,
      {
        resourceName,
        resourceValue,
      }
    );
  }
}

module.exports = NotFound;
