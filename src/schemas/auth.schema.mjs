import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});
