import bcrypt from "bcryptjs";
import { User } from "./auth.model";
import { LoginData, RegisterData } from "./auth.types";
import { generateToken } from "../../utils/jwt";

export const registerUser = async (data: RegisterData) => {
  const { name, email, password } = data;

  const existingUser = await User.findOne({ email }).select("-__v -password");
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = generateToken({ userId: newUser._id.toString() });

  return { newUser, token };
};

export const loginUser = async (data: LoginData) => {
  const { email, password } = data;

  const user = await User.findOne({ email }).select("-__v");
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({ userId: user._id.toString() });

  return { user, token };
};
