/** Private binary storage boundary; must not be exposed as an HTTP endpoint. */
export interface StorageProvider {
  put(key: string, bytes: Uint8Array, contentType: string): Promise<void>;
  get(key: string): Promise<Uint8Array>;
  remove(key: string): Promise<void>;
}

// Production storage is not implemented until a provider is selected.
// Never expose public URLs for bank documents, contracts, IDs or payslips.
