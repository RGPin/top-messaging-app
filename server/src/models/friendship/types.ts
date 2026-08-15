import type { HydratedDocument, Model, Types } from "mongoose";

type FriendshipStatus = "pending" | "accepted" | "rejected";

export interface Friendship {
  userA: Types.ObjectId;
  userB: Types.ObjectId;
  requesterId: Types.ObjectId;
  status: FriendshipStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IFriendshipMethods {
  processData(): void;
}

export interface IFriendshipStatics {
  getData(): void;
  sendFriendRequest(
    requesterId: Types.ObjectId,
    recipientId: Types.ObjectId,
  ): Promise<FriendshipDocument>;
}

export type FriendshipDocument = HydratedDocument<
  Friendship,
  IFriendshipMethods
>;

export type FriendshipModelType = Model<Friendship, {}, IFriendshipMethods> &
  IFriendshipStatics;
