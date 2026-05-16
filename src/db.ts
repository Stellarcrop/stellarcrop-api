import pg from "pg";
import type { QueryResultRow } from "pg";
import { config } from "./config.js";

export const pool = config.DATABASE_URL
  ? new pg.Pool({ connectionString: config.DATABASE_URL })
  : null;

export async function query<T extends QueryResultRow = QueryResultRow>(
  sql: string,
  params: unknown[] = [],
): Promise<T[]> {
  if (!pool) {
    return [];
  }

  const result = await pool.query<T>(sql, params);
  return result.rows;
}
