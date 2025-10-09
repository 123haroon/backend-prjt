import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});

connectDB();

/*
import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const app =express()
( async() => {
    try{
  await   mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  //here app.on is a listner that show the error of express app
  app.on('error',(error)=>{
    console.log('Error',error)
    throw error
  })
     app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
     })
    }   catch (error){
        console.error("ERROR:", error)
        throw error
    }
  })();   
  */
