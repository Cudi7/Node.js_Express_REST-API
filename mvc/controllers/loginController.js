import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

async function loginController(req, res, next) {
  const userInfo = res.existingUser?.email ? res.existingUser.email : false;

  const passwordValidation =
    userInfo && (await validatePassword(userInfo, req.body.password));

  let message;

  if (!userInfo) {
    message = `Email ${req.body.email} doesn't exist`;
  } else {
    message = passwordValidation
      ? `Welcome back ${userInfo}`
      : `Incorrect Password`;
  }

  if (passwordValidation) {
    res.login = true;
    res.userInfo = res.existingUser;
    global.userInfo = res.existingUser;
  } else {
    res.login = false;
    res.message = message;
  }

  next();
}

async function validatePassword(email, inputPassword) {
  try {
    const existingUser = await userModel.find({ email });

    return await bcrypt.compare(inputPassword, existingUser[0].password);
  } catch (error) {
    console.log(error.message);
  }
}

export default loginController;
