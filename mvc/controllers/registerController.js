import userModel from '../models/userModel.js';

async function registerController(req, res, next) {
  if (!res.existingUser) {
    const { name, email, password } = req.body;

    try {
      const newUser = await userModel.create({
        name,
        email,
        password,
      });
      res.newUser = newUser;
    } catch (error) {
      console.error(error.message);
    }
  }
  next();
}

export default registerController;
