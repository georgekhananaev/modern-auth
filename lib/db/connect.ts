import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import {User} from "./models/user";

// Use the authSource parameter to specify where authentication should occur
// Also specify the database name at the end
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/nexus_auth?authSource=admin";

// Simplified connection options
const options: mongoose.ConnectOptions = {
    // Set connection timeout
    connectTimeoutMS: 10000,
    // Retry on connection failure
    retryWrites: true
};

// Track connection status
let isConnected = false;

/**
 * Create default user if it doesn't exist
 */
async function createDefaultUserIfNotExists() {
    try {
        // User model is now imported at the top of the file

        // Check if the user already exists
        const existingUser = await User.findOne({email: "admin@modern-auth.example.com"});

        if (!existingUser) {
            console.log("Creating default admin user...");

            // Hash the password
            const salt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash("Password123!", salt);

            // Create the user
            await User.create({
                name: "Admin User",
                email: "admin@modern-auth.example.com",
                password: hashedPassword,
                role: "admin",
                emailVerified: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            });

            console.log("✅ Default user created successfully");
        }
    } catch (error) {
        console.error("❌ Error creating default user:", error);
    }
}

/**
 * Connect to MongoDB with connection pooling and error handling
 */
export const connectToDatabase = async (): Promise<void> => {
    // If already connected, reuse the connection
    if (isConnected) {
        return;
    }

    try {
        const db = await mongoose.connect(MONGODB_URI, options);

        isConnected = !!db.connections[0].readyState;

        console.log("✅ MongoDB connected successfully");

        // Create default user after successful connection
        await createDefaultUserIfNotExists();

    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);

        // Implement exponential backoff for retries in production
        if (process.env.NODE_ENV === "production") {
            console.log("Retrying connection in 5 seconds...");
            setTimeout(() => connectToDatabase(), 5000);
        }

        throw new Error("Failed to connect to database");
    }
};

/**
 * Disconnect from the database (useful for testing)
 */
export const disconnectFromDatabase = async (): Promise<void> => {
    if (!isConnected) {
        return;
    }

    try {
        await mongoose.disconnect();
        isConnected = false;
        console.log("✅ MongoDB disconnected successfully");
    } catch (error) {
        console.error("❌ MongoDB disconnection failed:", error);
        throw new Error("Failed to disconnect from database");
    }
};

