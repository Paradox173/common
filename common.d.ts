export interface BaseError {
    code: string;
    message: string;
    timestamp: Date;
    details?: any;
}
export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}
export interface HTTPOptions {
    timeout?: number;
    retries?: number;
    headers?: Record<string, string>;
}
export interface BaseConfig {
    debug?: boolean;
    environment?: 'development' | 'production' | 'test';
}
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
export declare const FCN_PATTERN: RegExp;
export declare const TRANSACTION_ID_PATTERN: RegExp;
export declare const OTP_PATTERN: RegExp;
//# sourceMappingURL=common.d.ts.map