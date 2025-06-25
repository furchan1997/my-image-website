function checkAdminPassword(req, res, next) {
  const password = req.headers["x-admin-password"];
  if (password !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({
      message: "Unauthorized.",
    });
    return;
  }

  next();
}

module.exports = checkAdminPassword;
