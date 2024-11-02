import dotenv from "dotenv"
import connectDB from "./db/index.js";

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is runninng at PORT : ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed!!", err);
})












// import express from "express";
// const app = express();



// ;( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error)=>{
//             console.log("ERR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is litening on PORT ${process.env.PORT}`);

//         })

        
//     } catch (error) {
//         console.log("Error: ", error)
//         throw err 
//     }
// })()