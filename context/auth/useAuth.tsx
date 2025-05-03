"use client";

import { createContext, useContext } from "react";
import { useSession } from "next-auth/react";
import type { AuthContextProps } from "./types";

// Create context with default values
const AuthContext = createContext<AuthContextProps>({
  session: null,
  status: "loading",
  isLoading: true,
  isAuthenticated: false,
});

// Provider component
export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  const value: AuthContextProps = {
    session,
    status,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }

  return context;
}