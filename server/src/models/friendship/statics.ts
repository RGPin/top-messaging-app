import type { FriendshipModelType, IFriendshipStatics } from "./types.js";

export const friendshipStatics: IFriendshipStatics = {
  getData: function (this: FriendshipModelType) {},
  sendFriendRequest: async function (
    this: FriendshipModelType,
    requesterId,
    recipientId,
  ) {
    // todo: check if request is existing before proceeding
    const [userA, userB] =
      requesterId.toString() < recipientId.toString()
        ? [requesterId, recipientId]
        : [recipientId, requesterId];

    return this.create({
      userA,
      userB,
      requesterId,
      status: "pending",
    });
  },
};
