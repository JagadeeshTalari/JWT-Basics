const notFoundMiddleware = (req, res) => {
  return res.send(400).json({ msg: `Route not found` });
};

module.exports = notFoundMiddleware;
