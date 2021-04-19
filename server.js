import express from 'express';
import dotenv from 'dotenv';
import ejs from 'ejs';

import connectDB from './config/db.js';
import indexRoute from './routes/indexRoute.js';
import registerRoute from './routes/registerRoute.js';
import logoutRoute from './routes/logoutRoute.js';

dotenv.config({ path: './config/.env' });
const app = express();
connectDB();

app.set('views', './mvc/views');

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoute);
app.use('/register', registerRoute);
app.use('/logout', logoutRoute);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
