import express from 'express';
// import mongoose from 'mongoose'

import productRoutes from './routes/productRoutes.js'

import dotenv from 'dotenv';

import connectDB from './config/db.js'

import {notFound,errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()

const app=express();


app.get('/',(req,res)=>{
    res.send('API is running..')
})

app.use('/api/products',productRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT=process.env.REACT_APP_PORT||5000


app.listen(PORT,console.log(`Server is running in ${process.env.REACT_APP_NODE_ENV} mode on port ${process.env.REACT_APP_PORT}`))