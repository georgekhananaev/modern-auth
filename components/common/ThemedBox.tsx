"use client";

import {useTheme} from "@/context/theme/useTheme";
import React, {ReactNode} from "react";
import {cn} from "@/lib/utils/cn";

interface ThemedBoxProps {
    children: ReactNode;
    className?: string;
    border?: "none" | "top" | "bottom" | "left" | "right" | "all";
}

export default function ThemedBox({
                                      children,
                                      className = "",
                                      border = "none",
                                  }: ThemedBoxProps) {
    const {isDarkMode} = useTheme();

    // Border style based on theme mode
    const borderStyle = isDarkMode ? "border-gray-700" : "border-gray-200";

    // Define border classes based on the variant
    const borderClasses = {
        none: "",
        top: `border-t ${borderStyle}`,
        bottom: `border-b ${borderStyle}`,
        left: `border-l ${borderStyle}`,
        right: `border-r ${borderStyle}`,
        all: `border ${borderStyle}`,
    };

    return (
        <div className={cn(borderClasses[border], className)}>
            {children}
        </div>
    );
}