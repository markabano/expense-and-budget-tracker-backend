import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  //Database
  DB_NAME: z.string(),
  DB_HOST: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_PORT: z.string().default("3306"),

  //JWT Token
  JWT_TOKEN: z.string(),
});

const env = envSchema.parse(process.env);

export default env;
