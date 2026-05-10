import { User } from "../auth/auth.model";

export const getUserProfile = async (userId: string) => {
  const userInfo = await User.findById(userId).select("-_id -__v -password");

  if (!userInfo) {
    throw new Error("User does not exist");
  }

  return userInfo;
};
