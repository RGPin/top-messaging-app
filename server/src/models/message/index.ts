import mongoose from "mongoose";
import type { Message, MessageModelType } from "./types.js";
import { messageSchema } from "./schema.js";

export const MessageModel = mongoose.model<Message, MessageModelType>(
  "Message",
  messageSchema,
);

export * from "./types.js";
