import mongoose from "mongoose";
import type { Friendship, FriendshipModelType } from "./types.js";
import { friendshipSchema } from "./schema.js";

export const FriendshipModel = mongoose.model<Friendship, FriendshipModelType>(
  "Friendship",
  friendshipSchema,
);

export * from "./types.js";
