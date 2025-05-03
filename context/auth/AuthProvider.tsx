"use client";

import { SessionProvider } from "next-auth/react";
import type { AuthProviderProps } from "./types";

export function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}