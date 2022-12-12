async function Authorization(req, res, next) {
  try {
    let { role } = req.user;
    if (role !== "Admin") {
      res.status(403).json("Forbidden");
    } else {
      next();
    }
  } catch (error) {
    res.status(403).json("Forbidden");
  }
}
module.exports = Authorization;
