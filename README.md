# HRMS Files Service

NestJS 12 + TypeScript service boundary for private employee documents and attachments. Separate from the API to isolate sensitive binary storage concerns.

## Local setup

1. `npm install`
2. Copy `.env.example` to `.env`; set the **same** MongoDB URI and database name used by `hrms-backend`.
3. `npm run start:dev` (health: `http://localhost:4100/api/v1/health`).

## Structure

```text
src/
  health/                        Health route
  files/file-metadata.schema.ts  Tenant-scoped MongoDB file metadata
  storage/storage-provider.ts    Interface for a future private object store
```

## Security

- This starter exposes **no upload, download, delete or list endpoints** until authentication and scoped permissions exist.
- The API must validate a user; this service must validate backend-to-backend requests and recheck the business/employee scope.
- MongoDB stores metadata, not file bytes. Use a private object store for production.
- HR files (national IDs, bank details, qualifications, contracts, payslips) are never public.
- Provider choice, malware scanning, allowed MIME types, file size limits and retention are implementation gates.

## Verification

`npm run build` and `npm test`.
