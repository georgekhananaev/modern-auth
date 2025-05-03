"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = "primary",
    size = "md",
    fullWidth = false,
    children,
    isLoading,
    leftIcon,
    rightIcon,
    disabled,
    type = "button",
    ...props
  }, ref) => {
    // Create base button classes - improved with more modern transitions and effects
    const baseClasses = "btn group relative flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-50 active:scale-[0.98]";
    
    // Create variant classes - enhanced with modern styling
    const variantClasses = {
      primary: "btn-primary shadow-sm hover:shadow-md",
      secondary: "btn-secondary shadow-sm hover:shadow-md",
      outline: "btn-outline border hover:border-primary",
      ghost: "btn-ghost hover:bg-primary/5",
      link: "btn-link underline-offset-2", 
      destructive: "btn-destructive shadow-sm hover:shadow-md"
    };
    
    // Create size classes - more comfortable paddings
    const sizeClasses = {
      sm: "text-xs px-3 py-1.5 rounded-md",
      md: "text-sm px-4 py-2 rounded-lg",
      lg: "text-base px-6 py-3 rounded-lg",
      icon: "p-2 rounded-full aspect-square"
    };
    
    return (
      <button
        type={type}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          isLoading && "cursor-wait",
          className
        )}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        <span className="relative flex items-center justify-center">
          {isLoading && (
            <span className="mr-2 flex h-4 w-4 items-center justify-center">
              <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          )}
          {!isLoading && leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
          <span>{children}</span>
          {!isLoading && rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;