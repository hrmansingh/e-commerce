import { adminModel } from "../models/admin.js";
import { hashPass } from "./createAdmin.js";
import * as bcrypt from "bcrypt";

export default async function loginAdmin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await adminModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    const verifiedpass = await bcrypt.compare(password, user.password);

    if (verifiedpass) {
      res
        .status(200)
        .send({ message: "successfully login", status: "success" });
    } else {
      res.status(400).json({
        message: "Email/Password hash is incorrect",
        status: "failed",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: `error while login`, status: "failed" });
  }
}
