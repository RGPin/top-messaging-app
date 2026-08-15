import { Schema } from "mongoose";
import type { Friendship, FriendshipModelType } from "./types.js";
import { friendshipMethods } from "./methods.js";
import { friendshipStatics } from "./statics.js";

const friendshipSchema = new Schema<Friendship, FriendshipModelType>(
  {
    userA: { type: Schema.Types.ObjectId, ref: "User", required: true },
    userB: { type: Schema.Types.ObjectId, ref: "User", required: true },
    requesterId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      required: true,
    },
  },
  { timestamps: true },
);

friendshipSchema.index({ userA: 1, userB: 1 }, { unique: true });

Object.assign(friendshipSchema.methods, friendshipMethods);

Object.assign(friendshipSchema.statics, friendshipStatics);

export { friendshipSchema };
