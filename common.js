"use strict";
// Shared types between library and platform
Object.defineProperty(exports, "__esModule", { value: true });
exports.OTP_PATTERN = exports.TRANSACTION_ID_PATTERN = exports.FCN_PATTERN = void 0;
// Common constants
exports.FCN_PATTERN = /^\d{10}$/;
exports.TRANSACTION_ID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
exports.OTP_PATTERN = /^\d{6}$/;
//# sourceMappingURL=common.js.map