import { Request, Response } from "express";
import { loginUser, registerUser } from "./auth.service";

export const loginController = async (req: Request, res: Response) => {
  try {
    const user = await loginUser(req.body);
    res.status(200).json({
      message: "Login successful",
      user: user,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const signupController = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({
      message: "User registered successfully",
      user: user,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
