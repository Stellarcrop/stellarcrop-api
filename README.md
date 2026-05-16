# StellarCrop API

Backend API for StellarCrop.

This service exposes business-domain endpoints that power the web app and operational tools. It sits between clients and chain/indexed data.

## Responsibilities

- Serve receipt, issuer, transfer, and market data
- Enforce domain-level validation and permissions
- Coordinate with indexer-derived state
- Provide stable API contracts for frontend clients

## Tech Stack

- Node.js + TypeScript
- Express
- PostgreSQL (optional in current scaffold)

## Local Development

```bash
npm install
cp .env.example .env
npm run dev
```

## Current Endpoints

- `GET /health`
- `GET /api/receipts`
- `GET /api/issuers`

When `DATABASE_URL` is not configured, list endpoints return empty arrays so local development can proceed without infra.

## Environment

See `.env.example` for current variables:
- `PORT`
- `NODE_ENV`
- `DATABASE_URL`
- `STELLAR_NETWORK_PASSPHRASE`
- `STELLAR_RPC_URL`

## What Is Left (Issue-Ready)
- Expand API surface for:
  - Transfers
  - Markets
  - Settings/preferences
- Add authN/authZ model for cooperative operators and farmers
- Add input validation and shared error envelopes
- Add DB migrations + seed scripts
- Add OpenAPI spec and endpoint-level tests

## Related Repositories

- `stellarcrop-web`
- `stellarcrop-indexer`
- `stellarcrop-contracts`
- `stellarcrop-shared`
