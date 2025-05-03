"use client";

import {ReactNode} from "react";
import {AuthProvider} from "../auth/AuthProvider";
import {ThemeProvider} from "../theme/ThemeProvider";
import {AuthContextProvider} from "../auth/useAuth";
import {DemoProvider} from "../demo/DemoContext";
import {ToastProvider} from "@/components/ui/Toast";

interface AppProviderProps {
    children: ReactNode;
}

export function AppProvider({children}: AppProviderProps) {
    return (
        <AuthProvider>
            <AuthContextProvider>
                <ThemeProvider defaultTheme="system">
                    <DemoProvider>
                        <ToastProvider>
                            {children}
                        </ToastProvider>
                    </DemoProvider>
                </ThemeProvider>
            </AuthContextProvider>
        </AuthProvider>
    );
}