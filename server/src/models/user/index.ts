import mongoose from "mongoose";
import type { User, UserModelType } from "./types.js";
import { userSchema } from "./schema.js";

export const UserModel = mongoose.model<User, UserModelType>(
  "User",
  userSchema,
);

export * from "./types.js";
