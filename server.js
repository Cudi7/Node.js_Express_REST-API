import express from 'express'
import dotenv from 'dotenv'
import ejs from 'ejs'

import connectDB from './config/db.js'
import homeRoute from './routes/homeRoute.js'


dotenv.config({ path: './config/.env'})
const app = express();
connectDB()
app.set('views', './mvc/views');


const PORT = process.env.PORT || 5001;

app.use('/', homeRoute)

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`)
})