import { UserType } from "./user";
import { AuthFormFields, UserSession } from "./auth";

export type { UserType, AuthFormFields, UserSession };

// Common response type
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    total: number;
    pages: number;
    page: number;
    limit: number;
  };
}
