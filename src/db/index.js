import mongoose  from "mongoose";
import { DB_NAME } from "../Constants.js";

const connectDB = async()=>{
    try{
     const connectonInatance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`\n MongoDB connect !! DB HOST : ${connectonInatance.connection.host}`)

    }catch (error ){
console.log('connection error failed hahahahaha',error)
   process.exit(1)
    }
}
export default connectDB;