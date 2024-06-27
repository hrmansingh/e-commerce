import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv";
dotenv.config();

// import userRouter from "./routes/user";
// import { loginRoute, registerRoute } from "./routes/auth.js";

import registerRouter from "./routes/auth.js";

const db = async () => {
  mongoose.connect(`${process.env.DATABASE_URL}`);
  console.log("Database connected");
};
db();
function logger(req, res, next) {
  console.log("logger");
  next();
}
// app.use(logger);
app.use("/login", registerRouter);
app.use("/register", registerRouter);
app.get("/", (req, res) => {
  res.send("helo I'm the Home Page API");
});
app.get("/test", (req, res) => {
  res.send("helo I'm test");
});

const start = async () => {
  try {
    app.listen(3000, () => console.log("Server is running on port 3000"));
  } catch (err) {
    console.log(err);
  }
};

start();
