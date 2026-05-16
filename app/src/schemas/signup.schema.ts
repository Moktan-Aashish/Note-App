import { z } from "zod";
import {
  GMAIL_REGEX,
  STRONG_PASSWORD_REGEX,
  USERNAME_REGEX,
} from "../constants/regex";

export const signupSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username must be at most 15 characters")
    .regex(
      USERNAME_REGEX,
      "Username must start with a letter and contain only letters, numbers, and _",
    ),

  email: z
    .string()
    .email("Invalid email format")
    .regex(GMAIL_REGEX, "Only Gmail accounts are allowed"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      STRONG_PASSWORD_REGEX,
      "Password must contain uppercase, lowercase, and a special character",
    ),
});

export type SignupSchema = z.infer<typeof signupSchema>;
