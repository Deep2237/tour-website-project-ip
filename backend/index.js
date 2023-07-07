import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import tourRoute from '../backend/routes/tours.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            // useNewUrlParser :true,
            // useUnifiedTopology :true,
        });

        console.log("mongo connected");
    }
    catch(err){
        console.log("connection failed")
    }
}

app.get('/',(req,res)=>{
    res.send("api is working");
})


app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/tours',tourRoute);

app.listen(port,()=>{
    connect();
    console.log('server on port',port);
})