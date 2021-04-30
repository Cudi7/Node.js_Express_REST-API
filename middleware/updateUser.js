import userModel from '../mvc/models/userModel.js';
import bcrypt from 'bcrypt';

async function updateUser(req, res, next) {
  if (!userInfo) next();

  const id = req.params.id;
  const bcryptPassword = await bcrypt.hash(req.body.password, 10);

  const updatedUser = {
    name: req.body.name,
    email: req.body.email,
    password: bcryptPassword,
  };

  try {
    await userModel.findOneAndUpdate({ _id: id }, updatedUser, {
      new: true,
    });
  } catch (error) {
    console.log(error.message);
  }
  next();
}

export default updateUser;
