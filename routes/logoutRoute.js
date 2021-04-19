import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
  console.log(req.body);
  res.render('index.ejs');
});

export default route;
