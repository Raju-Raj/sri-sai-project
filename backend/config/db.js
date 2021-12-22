import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'

const connectDB=async()=>{
    try{
         const conn= await mongoose.connect('mongodb+srv://sri_sai:raju1997@cluster0.6mlne.mongodb.net/test',{
             useUndefinedTopology:true,
             useNewUrlParser:true,
             useCreateIndex:true
         })
         console.log(`MongoDB connected: $(conn.connection.host)`.cyan.underline)
    }catch(error){
        cosole.error(`Error:${error.message}`.red.underline.bold)
        process.exit(1)
    }
   
}

export default connectDB;