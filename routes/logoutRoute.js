import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
  userInfo = undefined;
  res.render('index.ejs');
});

export default route;
