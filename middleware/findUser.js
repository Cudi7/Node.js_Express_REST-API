import userModel from '../mvc/models/userModel.js';

async function findUser(req, res, next) {
  try {
    const existingUser = await userModel.find({ email: req.body.email });

    if (existingUser.length)
      res.existingUser = {
        email: existingUser[0].email,
        name: existingUser[0].name,
        _id: existingUser[0]._id,
      };
  } catch (error) {
    console.log(error.message);
  }

  next();
}

export default findUser;
