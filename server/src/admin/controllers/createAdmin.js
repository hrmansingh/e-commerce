import { adminModel } from "../models/admin.js";
import dotenv from "dotenv";
import * as bcrypt from "bcrypt";
dotenv.config();
export const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("requested body", req.body);
    const checkMail = await adminModel.findOne({ email: email });
    if (!checkMail) {
      const hashedPassword = await hashPass(password);
      const user = new adminModel({
        name: name,
        email: email,
        password: hashedPassword,
      });
      const saved = await user.save();
      res.status(200).send(`here is the admin route ${saved}`);
    } else {
      res
        .status(400)
        .json({ message: "Email already exists", status: "failed" });
    }
  } catch (err) {
    console.log("error in admin route", err);
    res.status(400).send({
      message: `error while creating admin ${err}`,
      status: "failed",
    });
  }
};

export const hashPass = async (realPass) => {
  try {
    console.log("saltin", process.env.salt);
    const salt = await bcrypt.genSalt(Number(process.env.salt));
    const hashPassword = await bcrypt.hash(realPass, salt);
    return hashPassword;
  } catch (err) {
    console.log("error hashing password", err);
    throw err;
  }
};
