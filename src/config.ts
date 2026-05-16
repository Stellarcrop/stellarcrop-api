import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(8787),
  DATABASE_URL: z.string().url().optional(),
  STELLAR_NETWORK: z.enum(["testnet", "mainnet"]).default("testnet"),
  RECEIPT_CONTRACT_ID: z.string().optional(),
});

export const config = envSchema.parse(process.env);
