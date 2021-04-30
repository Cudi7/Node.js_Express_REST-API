import userModel from '../models/userModel.js';

async function usersController(req, res, next) {
  try {
    const userResponse = req.params.id
      ? await userModel.findById(req.params.id)
      : await userModel.find({});
    console.log(userResponse);
    res.users = userResponse;
  } catch (error) {
    console.log(error.message);
  }

  next();
}

export default usersController;
