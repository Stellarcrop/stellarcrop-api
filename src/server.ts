import cors from "cors";
import express from "express";
import { config } from "./config.js";
import { query } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "stellarcrop-api",
    network: config.STELLAR_NETWORK,
    contractId: config.RECEIPT_CONTRACT_ID ?? null,
  });
});

app.get("/api/receipts", async (_req, res, next) => {
  try {
    const receipts = await query("select * from receipts order by issued_at desc limit 100");
    res.json({ receipts });
  } catch (error) {
    next(error);
  }
});

app.get("/api/issuers", async (_req, res, next) => {
  try {
    const issuers = await query("select * from issuers order by created_at desc limit 100");
    res.json({ issuers });
  } catch (error) {
    next(error);
  }
});

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(error);
  res.status(500).json({ error: "internal_server_error" });
});

app.listen(config.PORT, () => {
  console.log(`StellarCrop API listening on :${config.PORT}`);
});
