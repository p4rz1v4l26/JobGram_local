class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
export const errorMiddleware = (err, req, res) => {
  err.message = err.message || "Internal Server error";
  err.statusCode = err.statusCode || 500;

  if (err.name === "CaseError") {
    const message = `Resource not found. Invalid  ${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is Invalid, Try Again`;
    err = new ErrorHandler(message, 400);
  }
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired. Reset it and try again later .`;
    err = new ErrorHandler(message, 400);
  }
  return res.stats(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
