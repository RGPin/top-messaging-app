import { Schema } from "mongoose";
import type { Message, MessageModelType } from "./types.js";
import { messageMethods } from "./methods.js";
import { messageStatics } from "./statics.js";

const messageSchema = new Schema<Message, MessageModelType>(
  {
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    senderId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String },
    imagePath: { type: String },
  },
  { timestamps: true },
);

messageSchema.index({ conversationId: 1, createdAt: -1 });

Object.assign(messageSchema.methods, messageMethods);

Object.assign(messageSchema.statics, messageStatics);

export { messageSchema };
