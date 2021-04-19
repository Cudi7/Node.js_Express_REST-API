import express from 'express';

import findUser from '../middleware/findUser.js';
import registerController from '../mvc/controllers/registerController.js';

const route = express.Router();

route.get('/', (req, res) => {
  res.render('register.ejs');
});

route.post('/newuser', findUser, registerController, (req, res) => {
  res.send(res.message);
});

export default route;
