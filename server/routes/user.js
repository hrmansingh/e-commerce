import express from "express";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("this is user login api");
});



export default router;
