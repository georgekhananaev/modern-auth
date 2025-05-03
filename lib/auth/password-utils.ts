import bcrypt from "bcryptjs";
import crypto from "crypto";
import {decryptData, encryptData} from "@/lib/utils/crypto";

/**
 * Hash a password with bcrypt
 */
export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(12); // Using a high cost factor for better security
    return bcrypt.hash(password, salt);
};

/**
 * Verify a password against a hash
 */
export const verifyPassword = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};

/**
 * Generate a random reset token for password recovery
 */
export const generateResetToken = (): string => {
    return crypto.randomBytes(32).toString("hex");
};

/**
 * Generate a secure time-limited token for password reset
 */
export const createResetToken = (userId: string, expiryMinutes: number = 60): string => {
    const expiryTime = Date.now() + expiryMinutes * 60 * 1000;
    const tokenData = JSON.stringify({
        userId,
        expires: expiryTime,
    });

    return encryptData(tokenData);
};

/**
 * Verify a password reset token
 */
export const verifyResetToken = (token: string): { userId: string, valid: boolean } => {
    try {
        const decryptedToken = decryptData(token);
        const tokenData = JSON.parse(decryptedToken);

        // Check if token has expired
        if (tokenData.expires < Date.now()) {
            return {userId: tokenData.userId, valid: false};
        }

        return {userId: tokenData.userId, valid: true};
    } catch {
        return {userId: "", valid: false};
    }
};
