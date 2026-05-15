import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username must be at most 15 characters")
    .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/, {
      message:
        "Username must start with a letter and contain only letters, numbers, and _",
    }),
  email: z
    .string()
    .email("Invalid email format")
    .regex(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, {
      message: "Only Gmail accounts are allowed",
    }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/, {
      message:
        "Password must contain uppercase, lowercase, and a special character",
    }),
});

export type SignupSchema = z.infer<typeof signupSchema>;
