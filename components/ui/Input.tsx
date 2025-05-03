"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    type = "text",
    id,
    name,
    disabled,
    ...props
  }, ref) => {
    const generatedId = React.useId();
    const uniqueId = id || name || generatedId;

    return (
      <div className="space-y-2 w-full">
        {label && (
          <label
            htmlFor={uniqueId}
            className="block text-sm font-medium tracking-wide mb-1"
          >
            {label}
          </label>
        )}

        <div className="relative rounded-lg">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
              {leftIcon}
            </div>
          )}

          <input
            type={type}
            id={uniqueId}
            name={name}
            ref={ref}
            disabled={disabled}
            className={cn(
              "input",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              leftIcon && "pl-11",
              rightIcon && "pr-11",
              className
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${uniqueId}-error` : helperText ? `${uniqueId}-helper` : undefined}
            {...props}
          />

          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p
            id={`${uniqueId}-error`}
            className="mt-1.5 text-sm text-red-500 flex items-center"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-1.5 flex-shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}

        {!error && helperText && (
          <p
            id={`${uniqueId}-helper`}
            className="mt-1.5 text-sm text-muted"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;