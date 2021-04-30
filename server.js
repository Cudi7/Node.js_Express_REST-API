import express from 'express';
import dotenv from 'dotenv';
import methodOverride from 'method-override';

import connectDB from './config/db.js';
import indexRoute from './routes/indexRoute.js';
import registerRoute from './routes/registerRoute.js';
import logoutRoute from './routes/logoutRoute.js';
import usersRoute from './routes/usersRoute.js';
import profileRoute from './routes/profileRoute.js';

dotenv.config({ path: './config/.env' });

const app = express();
connectDB();

app.set('views', './mvc/views');

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));
app.use('/', indexRoute);
app.use('/users', usersRoute);
app.use('/register', registerRoute);
app.use('/profile', profileRoute);
app.use('/logout', logoutRoute);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

global.userInfo = undefined;
