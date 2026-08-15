import type { HydratedDocument, Model } from "mongoose";

export interface User {
  name: string;
  email: string;
  password: string;
  avatarPath: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserMethods {
  comparePassword(candidatePassword: string): Promise<boolean>;
  getDisplayName(): string;
}

export interface IUserStatics {
  findByEmail(email: string): Promise<UserDocument | null>;
  findActiveUsers(): Promise<UserDocument[]>;
}

export type UserDocument = HydratedDocument<User, IUserMethods>;

export type UserModelType = Model<User, {}, IUserMethods> & IUserStatics;
