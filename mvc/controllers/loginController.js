function loginController(req, res, next) {
  const userInfo = res.existingUser && [
    res.existingUser[0].email,
    res.existingUser[0].name,
  ];

  const message = userInfo
    ? `Welcome back ${userInfo[1]}`
    : `Email ${req.body.email} doesn't exist`;

  res.message = message;
  next();
}

export default loginController;
