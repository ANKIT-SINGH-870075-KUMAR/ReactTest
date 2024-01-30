import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config({ path: "./backend/config/config.env" });

export const app = express()


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser())


import { userRouter } from "./routes/User.js"
app.use(`${process.env.base_url}/api/v1`, userRouter);
