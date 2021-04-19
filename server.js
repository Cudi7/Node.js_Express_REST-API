import express from 'express'
import dotenv from 'dotenv'

dotenv.config({ path: './config/.env'})

const app = express();


const PORT = process.env.PORT || 5001;

app.get('/', (req, res)=>{
    res.send('Hi')
})

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`)
})