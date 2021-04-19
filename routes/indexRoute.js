import express from 'express';
import findUser from '../middleware/findUser.js';
import loginController from '../mvc/controllers/loginController.js';

const route = express.Router();

route.get('/', (req, res) => {
  res.render('index.ejs');
});

route.post('/login', findUser, loginController, (req, res) => {
  res.send(res.message);
});

export default route;
