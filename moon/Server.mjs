import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import './config/db.mjs'
import router from './Routes/StdRoute.mjs'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

const std = router

app.use('/std',std)



app.get('/hello',(req, res)=>{
    res.send('welcome')
})


app.listen(process.env.PORT,(req, res)=>{
    console.log(`Server connected PORT:${process.env.PORT}`);
    
})