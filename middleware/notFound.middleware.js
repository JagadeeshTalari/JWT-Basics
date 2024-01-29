const notFoundMiddleware = (req, res) => {
  return res.send(404).json({ msg: `Route not found` });
};

module.exports = notFoundMiddleware;
