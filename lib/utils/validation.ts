import { z } from "zod";
import {
  loginSchema,
  registerSchema,
  resetPasswordSchema,
  forgotPasswordSchema
} from "@/types/auth";

/**
 * Validate form data against schema with typed results and errors
 */
export async function validateFormData<T extends z.ZodType<unknown, z.ZodTypeDef>>(
  schema: T,
  data: unknown
): Promise<{
  success: boolean;
  data?: z.infer<T>;
  errors?: Record<string, string>;
}> {
  try {
    const validData = await schema.parseAsync(data);
    return { success: true, data: validData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Format errors for form display
      const formattedErrors: Record<string, string> = {};

      error.errors.forEach((err) => {
        if (err.path.length > 0) {
          const fieldName = err.path.join(".");
          formattedErrors[fieldName] = err.message;
        }
      });

      return {
        success: false,
        errors: formattedErrors,
      };
    }

    // Generic error
    return {
      success: false,
      errors: {
        _form: "Validation failed. Please check your inputs.",
      },
    };
  }
}

/**
 * Specialized validation helpers
 */
export const validateLogin = (data: unknown) => validateFormData(loginSchema, data);

export const validateRegistration = (data: unknown) => validateFormData(registerSchema, data);

export const validateForgotPassword = (data: unknown) => validateFormData(forgotPasswordSchema, data);

export const validateResetPassword = (data: unknown) => validateFormData(resetPasswordSchema, data);

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
}

/**
 * Validate password strength
 */
export function validatePasswordStrength(password: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number");
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push("Password must contain at least one special character");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
