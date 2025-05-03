"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { ToastType } from "@/components/ui/Toast";

interface DemoContextProps {
  isDemoMode: boolean;
  showDemoToast: (customMessage?: string, type?: ToastType) => void;
}

const DemoContext = createContext<DemoContextProps>({
  isDemoMode: false,
  showDemoToast: () => {},
});

export const useDemoMode = () => useContext(DemoContext);

interface DemoProviderProps {
  children: React.ReactNode;
}

// Create a custom event for toast notifications
export const createToastEvent = (message: string, type: ToastType = "error") => {
  // Using custom events to communicate between contexts without direct dependencies
  const event = new CustomEvent("demo-toast", { 
    detail: { message, type }
  });
  document.dispatchEvent(event);
};

export function DemoProvider({ children }: DemoProviderProps) {
  const [isDemoMode, setIsDemoMode] = useState(false);
  
  useEffect(() => {
    // Check if DEMO mode is enabled on the client-side
    const checkDemoMode = async () => {
      try {
        const response = await fetch("/api/demo-status");
        const data = await response.json();
        setIsDemoMode(data.demoMode);
      } catch (error) {
        console.error("Failed to check demo mode status:", error);
        setIsDemoMode(false);
      }
    };
    
    checkDemoMode();
  }, []);
  
  const showDemoToast = (customMessage?: string, type: ToastType = "error") => {
    if (!isDemoMode) return;
    
    const message = customMessage || "This is a demo application. Account modifications are disabled.";
    createToastEvent(message, type);
  };
  
  return (
    <DemoContext.Provider value={{ isDemoMode, showDemoToast }}>
      {children}
    </DemoContext.Provider>
  );
}