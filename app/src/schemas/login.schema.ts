import { z } from "zod";
import { GMAIL_REGEX, STRONG_PASSWORD_REGEX } from "../constants/regex";

export const loginSchema = z.object({
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

export type LoginSchema = z.infer<typeof loginSchema>;
