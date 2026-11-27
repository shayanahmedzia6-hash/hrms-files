# Working rules for the HRMS files service

- Employee documents are private and tenant-owned; every metadata document has `businessId`.
- No public upload/download endpoint without backend authentication, service identity and employee/branch authorization.
- Store bytes in a private storage adapter (provider to be chosen), metadata only in the shared Atlas database.
- No file URL or object-store key should expose employee bank details, IDs or payslips.
- Use a small NestJS feature folder per responsibility, tested and readable.
- Never commit `.env`, storage credentials or uploaded documents.
