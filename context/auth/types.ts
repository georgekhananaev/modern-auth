import { ReactNode } from "react";
import { Session } from "next-auth";

export interface AuthContextProps {
  session: Session | null;
  status: "loading" | "authenticated" | "unauthenticated";
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface AuthProviderProps {
  children: ReactNode;
}