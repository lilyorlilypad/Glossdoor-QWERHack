function finalErrorHandler(err, req, res, next) {
  return res.status(500).json({
    name: err.name,
    message: err.message,
  });
}

module.exports = { finalErrorHandler };
