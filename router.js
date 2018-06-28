module.exports = app => {
  app.get("/", (req, res, next) => {
    res.send(["fuck", "ass", "shit"]);
  });
};
