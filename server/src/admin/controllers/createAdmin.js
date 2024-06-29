import { adminModel } from "../models/admin.js";
import dotenv from "dotenv";
import * as bcrypt from "bcrypt";
import { Statuses } from "../../constant.js";
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
      console.log(`here is the admin route ${saved}`, "sucess");
      res.status(Statuses.CREATED).send({
        message: `successfully admin created!...`,
        status: "success",
      });
    } else {
      res
        .status(Statuses.BAD_REQUEST)
        .json({ message: "Email already exists", status: "failed" });
    }
  } catch (err) {
    console.log("error in admin route", err);
    res.status(Statuses.BAD_REQUEST).send({
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
