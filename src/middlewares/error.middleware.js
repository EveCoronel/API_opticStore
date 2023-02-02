const { HTTP_STATUS } = require("../constants/api.constants");
const logger = require("../logger/logger");
const { errorResponse } = require("../utils/formatRes.utils");

const errorMiddleware = (error, req, res, next) => {
  logger.error(`unexpected error: ${error}`);
  const errorStatus = error.statusCode || HTTP_STATUS.INTERNAL_ERROR;
  const errorMessage = error.message || "There was an unexpected error";
  return res
    .status(errorStatus)
    .json(errorResponse(errorMessage, errorStatus));
};

module.exports = errorMiddleware;
