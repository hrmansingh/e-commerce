import { userModel } from "../models/user.js";
import { Router } from "express";

const router = Router();

// export const loginRoute = async (req, res) => {
//   res.send("This iis the login page API");
// };

router.get("/", (req, res) => {
  res.status(200).send("This iis the login page API");
});

router.post("/", async (req, res) => {
  try {
    const user = new userModel({
      name: "testjbjhbk43543user",
      // email: "test@gmail.com",
      // password: "test123",
    });
    const saved = await user.save();
    res.status(201).send(`This is the Register API ${saved}`);
  } catch (err) {
    console.log(err);
  }
});

export default router;
