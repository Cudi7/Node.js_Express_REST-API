import express from 'express';
import findUser from '../middleware/findUser.js';
import updateUser from '../middleware/updateUser.js';
import deleteController from '../mvc/controllers/deleteController.js';

const route = express.Router();

route.get('/', (req, res) => {
  userInfo
    ? res.render('profile.ejs', {
        userName: userInfo.name,
        userEmail: userInfo.email,
        userId: userInfo._id,
      })
    : res.render('index.ejs');
});

route.delete('/delete/:id', deleteController, (req, res) => {
  res.render('error.ejs', { message: 'Profile Deleted 😥' });
});

route.patch('/update/:id', findUser, updateUser, (req, res) => {
  if (!userInfo) res.redirect('/');

  res.render('error.ejs', {
    message: 'Profile Updated!, logout to log in with your new user info',
  });
});

export default route;
