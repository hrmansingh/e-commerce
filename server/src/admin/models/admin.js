import mongoose from "mongoose";
import { userSchema } from "../../common/schemas/userSchema.js";
// import userSchema from "../../common/schemas/userSchema.js";
// import userSchema from "../../common/schemas/user.js";
// import userSchema from "../schemas/userSchema";
// import userSchema from "../schemas/userSchema";

export const adminModel = mongoose.model("admins", userSchema);
