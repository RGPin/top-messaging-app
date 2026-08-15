import type { HydratedDocument, Model, Types } from "mongoose";

export interface Conversation {
  participants: Types.ObjectId[];
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IConversationMethods {
  processData(): void;
}

export interface IConversationStatics {
  getData(): void;
}

export type ConversationDocument = HydratedDocument<
  Conversation,
  IConversationMethods
>;

export type ConversationModelType = Model<
  Conversation,
  {},
  IConversationMethods
> &
  IConversationStatics;
