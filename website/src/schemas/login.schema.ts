import { z } from "zod";

export const loginSchema = z.object({
  email: z
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

export type LoginSchema = z.infer<typeof loginSchema>;
