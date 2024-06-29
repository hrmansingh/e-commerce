import { adminModel } from "../models/user.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("This iis the login page API");
});

router.post("/", async (req, res) => {
  try {
    const user = new adminModel({
      name: "QuadB",
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
