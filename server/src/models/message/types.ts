import type { HydratedDocument, Model, Types } from "mongoose";

export interface Message {
  conversationId: Types.ObjectId;
  senderId: Types.ObjectId;
  text: string;
  imagePath: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IMessageMethods {
  processData(): void;
}

export interface IMessageStatics {
  getData(): void;
}

export type MessageDocument = HydratedDocument<Message, IMessageMethods>;

export type MessageModelType = Model<Message, {}, IMessageMethods> &
  IMessageStatics;
