import type { UserModelType, IUserStatics } from "./types.js";

export const userStatics: IUserStatics = {
  findByEmail: function (this: UserModelType, email: string) {
    return this.findOne({ email });
  },

  findActiveUsers: function (this: UserModelType) {
    return this.find({ avatar: { $ne: "" } });
  },
};
