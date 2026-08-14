import type { UserDocument, IUserMethods } from "./types.js";

export const userMethods: IUserMethods = {
  comparePassword: function (
    this: UserDocument,
    candidatePassword: string,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(this.password === candidatePassword);
    });
  },

  getDisplayName: function (this: UserDocument): string {
    return this.name || this.email;
  },
};
