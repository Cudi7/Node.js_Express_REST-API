import express from 'express';
import findUser from '../middleware/findUser.js';
import usersController from '../mvc/controllers/usersController.js';

const route = express.Router();

route.get('/', usersController, (req, res) => {
  res.send(res.users);
});

route.get('/:id', usersController, (req, res) => {
  res.send(res.users);
});

export default route;
