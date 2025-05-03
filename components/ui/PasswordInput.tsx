"use client";

import React, { useState } from "react";
import Input, { InputProps } from "@/components/ui/Input";
import { Eye, EyeOff } from "lucide-react";

export interface PasswordInputProps extends Omit<InputProps, "type"> {
  showPasswordStrength?: boolean;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showPasswordStrength = false, className, value, onChange, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [strength, setStrength] = useState(0);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    // Password strength indicator logic
    const calculateStrength = (password: string): number => {
      if (!password) return 0;

      let score = 0;

      // Length check
      if (password.length >= 8) score += 1;
      if (password.length >= 12) score += 1;

      // Character type checks
      if (/[A-Z]/.test(password)) score += 1;
      if (/[a-z]/.test(password)) score += 1;
      if (/[0-9]/.test(password)) score += 1;
      if (/[^A-Za-z0-9]/.test(password)) score += 1;

      // Normalize to 0-4 range
      return Math.min(4, Math.floor(score / 1.5));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (showPasswordStrength) {
        setStrength(calculateStrength(e.target.value));
      }

      if (onChange) {
        onChange(e);
      }
    };

    const strengthLabels = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];
    const strengthColors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-lime-500", "bg-green-500"];

    return (
      <div className="space-y-1 w-full">
        <Input
          ref={ref}
          type={showPassword ? "text" : "password"}
          rightIcon={
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          }
          value={value}
          onChange={handleChange}
          className={className}
          {...props}
        />

        {showPasswordStrength && value && (
          <div className="mt-3 space-y-2">
            <div className="flex gap-1.5 h-1.5">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`h-full flex-1 rounded-full transition-all duration-300 ${
                    index < strength 
                      ? strengthColors[strength] 
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                  style={{ 
                    transform: index < strength ? 'scaleY(1.2)' : 'scaleY(1)',
                    opacity: index < strength ? '1' : '0.5'
                  }}
                />
              ))}
            </div>
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${strengthColors[strength]}`}></div>
              <p className="text-xs font-medium">
                Password strength: <span className="text-xs text-muted">{strengthLabels[strength]}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;