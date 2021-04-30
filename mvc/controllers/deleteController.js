import userModel from '../models/userModel.js';

async function deleteController(req, res, next) {
  try {
    await userModel.remove({ _id: req.params.id });
    global.userInfo = undefined;
  } catch (error) {
    console.log(error.message);
  }

  next();
}

export default deleteController;
