import mongoose from "mongoose";

export default userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
