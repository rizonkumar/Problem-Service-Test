const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

/**
 * Represents a Gateway Timeout error (HTTP Status Code: 504).
 * This error occurs when the server did not receive a timely response from an upstream server it accessed to process the request.
 * @extends BaseError
 */
class GatewayTimeoutError extends BaseError {
  /**
   * Constructs a new GatewayTimeoutError instance.
   * @param {string} message - The error message.
   * @param {object} [data={}] - Additional data relevant to the error.
   */
  constructor(message = "Gateway Timeout", data = {}) {
    super(
      message,
      StatusCodes.GATEWAY_TIMEOUT,
      `The server did not receive a timely response from an upstream server it accessed to process the request.`,
      data
    );
  }
}

module.exports = GatewayTimeoutError;
