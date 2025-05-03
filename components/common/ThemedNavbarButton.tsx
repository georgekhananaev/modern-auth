"use client";

import { useTheme } from "@/context/theme/useTheme";
import React, { ReactNode } from "react";

interface ThemedNavbarButtonProps {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  dataDropdownToggle?: string;
}

export default function ThemedNavbarButton({
  children,
  className = "",
  isActive = false,
  onClick,
  dataDropdownToggle,
}: ThemedNavbarButtonProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <button
      onClick={onClick}
      data-dropdown-toggle={dataDropdownToggle}
      className={`flex items-center py-2 px-3 rounded-md transition-all ${
        isActive
          ? "text-primary font-medium"
          : "hover:opacity-80"
      } ${className}`}
      style={{
        backgroundColor: isActive 
          ? (isDarkMode ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.1)") 
          : "transparent"
      }}
    >
      {children}
    </button>
  );
}