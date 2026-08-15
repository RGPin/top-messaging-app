import type { Conversation, ConversationModelType } from "./types.js";
import { conversationSchema } from "./schema.js";
import mongoose from "mongoose";

export const ConversationModel = mongoose.model<
  Conversation,
  ConversationModelType
>("Conversation", conversationSchema);

export * from "./types.js";
