import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app =express();

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))

app.use(express.json({limit:"8kb"}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import

import userRouter from "./routes/user.routes.js"
//route declatration

app.use("/api/v1/users",userRouter);

export { app }