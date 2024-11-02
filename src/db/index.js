import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB Connection ERROR : ", error);
        process.exit(1)
        //There are different types of exit methods
    }
}
export default connectDB;