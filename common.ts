// Shared types between library and platform

// Common error handling
export interface BaseError {
  code: string;
  message: string;
  timestamp: Date;
  details?: any;
}

// Common validation patterns
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Common HTTP types
export interface HTTPOptions {
  timeout?: number;
  retries?: number;
  headers?: Record<string, string>;
}

// Common configuration
export interface BaseConfig {
  debug?: boolean;
  environment?: 'development' | 'production' | 'test';
}

// Utility types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Common constants
export const FCN_PATTERN = /^\d{10}$/;
export const TRANSACTION_ID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
export const OTP_PATTERN = /^\d{6}$/;