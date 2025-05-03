import CryptoJS from "crypto-js";

// Use environment variables in production, using fallbacks here for development only
const SECRET_KEY = process.env.ENCRYPTION_KEY || "thisIsADevelopmentKeyChangeInProduction";
const IV_LENGTH = 16; // AES block size

/**
 * Encrypt data using AES-256-CBC with a random IV
 */
export const encryptData = (data: string): string => {
  // Generate a random IV
  const iv = CryptoJS.lib.WordArray.random(IV_LENGTH);

  // Encrypt the data
  const encrypted = CryptoJS.AES.encrypt(data, SECRET_KEY, {
    iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  });

  // Combine IV and encrypted data for storage/transmission
  // IV needs to be stored with the encrypted data for decryption
  const ivHex = iv.toString(CryptoJS.enc.Hex);
  const encryptedHex = encrypted.toString();

  return `${ivHex}:${encryptedHex}`;
};

/**
 * Decrypt data encrypted with encryptData
 */
export const decryptData = (encryptedData: string): string => {
  // Split IV and encrypted data
  const [ivHex, encryptedHex] = encryptedData.split(":");

  if (!ivHex || !encryptedHex) {
    throw new Error("Invalid encrypted data format");
  }

  // Convert IV from hex to WordArray
  const iv = CryptoJS.enc.Hex.parse(ivHex);

  // Decrypt the data
  const decrypted = CryptoJS.AES.decrypt(encryptedHex, SECRET_KEY, {
    iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
};

/**
 * Securely hash data (for non-password use cases)
 */
export const hashData = (data: string): string => {
  return CryptoJS.SHA256(data).toString();
};

/**
 * Generate a secure random string (for CSRF tokens, etc.)
 */
export const generateSecureToken = (length: number = 32): string => {
  return CryptoJS.lib.WordArray.random(length / 2).toString();
};
