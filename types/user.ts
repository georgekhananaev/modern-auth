import {z} from "zod";

// Basic user type
export type UserType = {
    id: string;
    name: string;
    email: string;
    role: string;
    emailVerified?: Date | null;
    image?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
};

// User creation schema with validation
export const createUserSchema = z.object({
    name: z
        .string()
        .min(2, {message: "Name must be at least 2 characters"})
        .max(50, {message: "Name must be less than 50 characters"}),
    email: z
        .string()
        .email({message: "Please enter a valid email address"})
        .toLowerCase(),
    password: z
        .string()
        .min(8, {message: "Password must be at least 8 characters"})
        .max(100, {message: "Password must be less than 100 characters"})
        .regex(/[A-Z]/, {message: "Password must contain at least one uppercase letter"})
        .regex(/[a-z]/, {message: "Password must contain at least one lowercase letter"})
        .regex(/[0-9]/, {message: "Password must contain at least one number"})
        .regex(/[^A-Za-z0-9]/, {
            message: "Password must contain at least one special character"
        }),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

// User update schema
export const updateUserSchema = z.object({
    name: z
        .string()
        .min(2, {message: "Name must be at least 2 characters"})
        .max(50, {message: "Name must be less than 50 characters"})
        .optional(),
    email: z
        .string()
        .email({message: "Please enter a valid email address"})
        .toLowerCase()
        .optional(),
    image: z.string().url().optional().nullable(),
});

// User password change schema
export const changePasswordSchema = z.object({
    currentPassword: z.string(),
    newPassword: z
        .string()
        .min(8, {message: "Password must be at least 8 characters"})
        .max(100, {message: "Password must be less than 100 characters"})
        .regex(/[A-Z]/, {message: "Password must contain at least one uppercase letter"})
        .regex(/[a-z]/, {message: "Password must contain at least one lowercase letter"})
        .regex(/[0-9]/, {message: "Password must contain at least one number"})
        .regex(/[^A-Za-z0-9]/, {
            message: "Password must contain at least one special character"
        }),
    confirmNewPassword: z.string(),
}).refine(data => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
});
