class HttpError {
  constructor(status, message, details) {
    this.statusCode = status;
    this.message = message;
    this.details = details;
  }
}

const successResponse = (data, statusCode = 200) => {
  return {
    success: true,
    statusCode,
    data,
  };
};

const errorResponse = (error, statusCode = 200) => {
  return {
    success: false,
    statusCode,
    message: error,
  };
};

module.exports = {
  successResponse,
  errorResponse,
  HttpError,
};
