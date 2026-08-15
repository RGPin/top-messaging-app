import { Schema } from "mongoose";
import type { Conversation, ConversationModelType } from "./types.js";

export const conversationSchema = new Schema<
  Conversation,
  ConversationModelType
>(
  {
    participants: [
      { type: Schema.Types.ObjectId, ref: "User", required: true },
    ],
    name: { type: String, default: "Group Chat" },
  },
  { timestamps: true },
);
