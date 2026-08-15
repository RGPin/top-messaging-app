import mongoose from "mongoose";
import type { User, UserModelType } from "./types.js";
import { userMethods } from "./methods.js";
import { userStatics } from "./statics.js";

const userSchema = new mongoose.Schema<User, UserModelType>(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    avatarPath: { type: String, default: "" },
  },
  { timestamps: true },
);

Object.assign(userSchema.methods, userMethods);

Object.assign(userSchema.statics, userStatics);

export { userSchema };
