import express from 'express'


const route = express.Router()


route.get('/', (req, res)=>{
    res.render('index.ejs')
})

route.get('/register', (req, res)=>{
    res.render('register.ejs')
})


export default route