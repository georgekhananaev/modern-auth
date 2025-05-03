"use client";

import React, {ReactNode} from "react";
import {useTheme} from "@/context/theme/useTheme";
import {cn} from "@/lib/utils/cn";

type ThemedContainerProps = {
    children: ReactNode;
    className?: string;
    variant?: "card" | "border" | "borderless" | null;
    rounded?: "none" | "sm" | "md" | "lg" | "xl";
    shadow?: "none" | "sm" | "md" | "lg" | "xl";
    padding?: "none" | "sm" | "md" | "lg" | "xl";
    hover?: boolean;
};

export function ThemedContainer({
                                    children,
                                    className = "",
                                    variant = "border",
                                    rounded = "lg",
                                    shadow = "sm",
                                    padding = "md",
                                    hover = false,
                                }: ThemedContainerProps) {
    const {isDarkMode} = useTheme();

    // Handle rounded corners
    const roundedClasses = {
        none: "",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
    };

    // Handle shadows
    const shadowClasses = {
        none: "",
        sm: isDarkMode ? "shadow-sm shadow-gray-800" : "shadow-sm",
        md: isDarkMode ? "shadow-md shadow-gray-800" : "shadow-md",
        lg: isDarkMode ? "shadow-lg shadow-gray-800" : "shadow-lg",
        xl: isDarkMode ? "shadow-xl shadow-gray-800" : "shadow-xl",
    };

    // Handle padding
    const paddingClasses = {
        none: "p-0",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
    };

    // Handle variant styles
    const variantClasses = {
        card: isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900",
        border: isDarkMode
            ? "border border-gray-700 bg-transparent"
            : "border border-gray-200 bg-white",
        borderless: "", // Empty string for borderless - no styles
        null: "", // Also empty for null variant
    };

    // Only apply shadow and rounded if the variant is not borderless or null
    const shouldApplyEffects = variant !== "borderless" && variant !== null;

    // Combine all classes
    const containerClasses = cn(
        shouldApplyEffects ? roundedClasses[rounded] : "",
        shouldApplyEffects ? shadowClasses[shadow] : "",
        paddingClasses[padding],
        variant ? variantClasses[variant] : "",
        hover && shouldApplyEffects ? "hover:shadow-lg transition-shadow duration-300" : "",
        className
    );

    return <div className={containerClasses}>{children}</div>;
}