# StellarCrop API

This package is the starter backend for StellarCrop. It is intentionally small so it can later become a standalone `stellarcrop-api` repo.

## Current scope

- Health check endpoint.
- Placeholder receipt and issuer read endpoints.
- Typed environment config.
- Optional Postgres connection.

## Endpoints

- `GET /health`
- `GET /api/receipts`
- `GET /api/issuers`

## Run

```bash
cp .env.example .env
npm run dev -w @stellarcrop/api
```

If `DATABASE_URL` is not set, list endpoints return empty arrays. This lets contributors run the service before the database/indexer work is complete.
