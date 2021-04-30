# React Redux TodoApp

> REST API with Node, Express, EJS and MongoDB (GET, POST, PATCH, DELETE)

## Table of contents

- [General info](#general-info)
- [Code Examples](#code-examples)
- [Features](#features)
- [Contact](#contact)

## General info

Following my desire to learn more about back-end technologies I completed what I believed was the entry point of any full stack developer, a REST API.
I created something fundamental and quick (even though it took a while) that I could do to practice node by itself, so later, I can integrate full applications using React

## Code Examples

```
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
```

## Features

User can:

- Register (we will check if the e-mail is already in use)
- Login (we will check if the e-mail exists or/and if the password is correct)
- Logout
- Delete Profile
- Update Profile
- Get a list of all the users info
- Get a single user info

## Technology used

The project is created with:

- node
- express
- dotenv,
- nodemon,
- bcrypt,
- ejs,
- mongodb
- mongoose,
- method-override

## Contact

Created by Cudi - feel free to contact me!
