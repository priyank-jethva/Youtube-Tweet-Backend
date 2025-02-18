// require('dotenv').config({path: './.env'})
// // require('dotenv').config()
// console.log(process.env) // { PORT: '8000', DB_URL: 'mongodb://localhost:27017/notes' }
// // import dotenv from "dotenv";
import connectDB from "./db/index.js"
import { app } from "./app.js";

// dotenv.config({
//     path: "./env"
// })

console.log("hello");


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log(`MongoDB not connected! ${err}`);
})