"use client";

import { useTheme } from "@/context/theme/useTheme";
import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface ThemedPreElementProps {
  children: ReactNode;
  className?: string;
}

export default function ThemedPreElement({ children, className }: ThemedPreElementProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <pre
      className={cn(
        "p-4 rounded text-sm overflow-x-auto",
        className
      )}
      style={{
        backgroundColor: isDarkMode ? "var(--primary-dark-bg, #1f2937)" : "var(--primary-light-bg, #e5e7eb)",
        color: isDarkMode ? "var(--primary-dark-text, #ffffff)" : "var(--primary-light-text, #1f2937)",
      }}
    >
      {children}
    </pre>
  );
}