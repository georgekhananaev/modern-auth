"use client";

import { useTheme } from "@/context/theme/useTheme";
import { ReactNode } from "react";

interface ThemedDropdownProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function ThemedDropdown({ children, className = "", id }: ThemedDropdownProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <div
      data-dropdown-content={id}
      className={`rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 overflow-hidden ${className}`}
      style={{
        backgroundColor: isDarkMode ? "#1e293b" : "#ffffff", // dark:bg-gray-800 : bg-white
        color: isDarkMode ? "#f8fafc" : "#171717",  // dark:text-gray-100 : text-gray-900
        borderColor: isDarkMode ? "#374151" : "#e5e7eb", // dark:border-gray-700 : border-gray-200
      }}
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}