import {getServerSession} from "next-auth/next";
import {authOptions} from "./auth-options";
import {UserSession} from "@/types/auth";

/**
 * Get the user's session data with strong typing
 */
export async function getSession(): Promise<UserSession | null> {
    const session = await getServerSession(authOptions);
    return session as UserSession | null;
}

/**
 * Check if the user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
    const session = await getSession();
    return !!session;
}

/**
 * Check if the user has a specific role
 */
export async function hasRole(role: string): Promise<boolean> {
    const session = await getSession();
    return session?.user?.role === role;
}

/**
 * Get the current user ID
 */
export async function getCurrentUserId(): Promise<string | null> {
    const session = await getSession();
    return session?.user?.id || null;
}

/**
 * Get the current user's data
 */
export async function getCurrentUser() {
    const session = await getSession();
    return session?.user || null;
}
