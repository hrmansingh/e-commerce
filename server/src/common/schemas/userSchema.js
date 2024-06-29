import mongoose, { Schema } from "mongoose";

export const userSchema = Schema({
  name: String,
  email: String,
  password: String,
});
