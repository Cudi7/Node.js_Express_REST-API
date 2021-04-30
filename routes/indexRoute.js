import express from 'express';
import findUser from '../middleware/findUser.js';
import loginController from '../mvc/controllers/loginController.js';

const route = express.Router();

route.get('/', (req, res) => {
  userInfo ? res.redirect('/dashboard') : res.render('index.ejs');
});

route.get('/dashboard', (req, res) => {
  userInfo ? res.render('dashboard.ejs') : res.redirect('/');
});

route.post('/dashboard', findUser, loginController, (req, res) => {
  if (res.login) {
    res.render('dashboard.ejs');
  } else {
    res.render('error.ejs', { message: res.message });
  }
});

export default route;
