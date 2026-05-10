import { Request, Response } from "express";
import { getUserProfile } from "./user.service";

export const getProfileController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const profile = await getUserProfile(userId);
    res.status(200).json({
      message: "Profile retrieved successfully",
      user: profile,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
