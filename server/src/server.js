import express from "express";
import mongoose from "mongoose";
import { Router } from "express";
import dotenv from "dotenv";
import adminRouter from "./admin/routes/index.js";
import cors from "cors";
const app = express();
const router = Router();
app.use(express.json());
app.use(cors("*"));
dotenv.config();

// ------------------connecttion------------------------------------

//connecting the mongodb
const db = async () => {
  mongoose.connect(`${process.env.DATABASE_URL}`);
  console.log("Database connected");
};
db();
//starting the server
const start = async () => {
  try {
    app.listen(process.env.port, () =>
      console.log(`Server is running on port ${process.env.port} `)
    );
  } catch (err) {
    console.log(err);
  }
};
start();

// ------------------------------------------------------------------

//defining different domain routes
app.get("/", (req, res) => {
  res.send("helo I'm the Home Page API");
});
app.get("/test", (req, res) => {
  res.send("helo I'm test");
});

//adminRoutes
app.use("/admin", adminRouter);

// function logger(req, res, next) {
//   console.log("logger");
//   next();
// }
// app.use(logger);
