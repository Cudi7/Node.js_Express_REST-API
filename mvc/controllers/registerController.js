import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

async function registerController(req, res, next) {
  let message;

  console.log(res.existingUser);

  message = res.existingUser && `${res.existingUser.email} already in use`;

  if (!res.existingUser) {
    const { name, email, password } = req.body;

    const bcryptPassword = await bcrypt.hash(password, 10);

    try {
      const newUser = await userModel.create({
        name,
        email,
        password: bcryptPassword,
      });

      message = `Hello ${newUser.name} your account has been created!`;
      global.userInfo = req.body;
    } catch (error) {
      console.error(error.message);
    }
  }

  res.message = message;

  next();
}

export default registerController;
