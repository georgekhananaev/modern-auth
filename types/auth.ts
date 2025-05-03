import { Session } from "next-auth";
import { z, ZodType } from "zod";

// Extended NextAuth Session with user role
export interface UserSession extends Session {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    image?: string;
  };
}

// Login form fields
export interface LoginFormFields {
  email: string;
  password: string;
}

// Registration form fields
export interface RegisterFormFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Password reset form fields
export interface ResetPasswordFormFields {
  password: string;
  confirmPassword: string;
  token: string;
}

// Forgot password form fields
export interface ForgotPasswordFormFields {
  email: string;
}

// Combined form fields type
export type AuthFormFields =
  | LoginFormFields
  | RegisterFormFields
  | ResetPasswordFormFields
  | ForgotPasswordFormFields;

// Schema type for form validation
export type AuthSchema = ZodType<
  LoginFormFields | RegisterFormFields | ResetPasswordFormFields | ForgotPasswordFormFields
>;

// Login validation schema
export const loginSchema = z.object({
  email: z.string()
    .min(5, { message: "Email is too short" })
    .max(100, { message: "Email is too long" })
    .email({ message: "Please enter a valid email" })
    .trim()
    .toLowerCase(),
  password: z.string()
    .min(1, { message: "Password is required" })
    .max(100, { message: "Password is too long" }),
});

// Register validation schema
export const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .trim()
    .refine(name => !/[<>]/.test(name), {
      message: "Name contains invalid characters"
    }),
  email: z.string()
    .min(5, { message: "Email is too short" })
    .max(100, { message: "Email is too long" })
    .email({ message: "Please enter a valid email" })
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(100, { message: "Password must be less than 100 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character"
    })
    .refine(password => !password.includes('password'), {
      message: "Password cannot contain the word 'password'"
    })
    .refine(password => password.trim().length === password.length, {
      message: "Password cannot start or end with whitespace"
    }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

// Forgot password validation schema
export const forgotPasswordSchema = z.object({
  email: z.string()
    .min(5, { message: "Email is too short" })
    .max(100, { message: "Email is too long" })
    .email({ message: "Please enter a valid email" })
    .trim()
    .toLowerCase(),
});

// Reset password validation schema
export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(100, { message: "Password must be less than 100 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character"
    })
    .refine(password => !password.includes('password'), {
      message: "Password cannot contain the word 'password'"
    })
    .refine(password => password.trim().length === password.length, {
      message: "Password cannot start or end with whitespace"
    }),
  confirmPassword: z.string(),
  token: z.string().min(10, { message: "Invalid token" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
