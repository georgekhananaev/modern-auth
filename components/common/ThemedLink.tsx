"use client";

import Link from "next/link";
import {useTheme} from "@/context/theme/useTheme";
import {ReactNode} from "react";
import {cn} from "@/lib/utils/cn";

export interface ThemedLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    isActive?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    style?: React.CSSProperties;
}

export default function ThemedLink({
                                       href,
                                       children,
                                       className,
                                       isActive = false,
                                       onClick,
                                       style,
                                   }: ThemedLinkProps) {
    const {isDarkMode} = useTheme();

    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "flex items-center py-2 px-3 rounded-md transition-all",
                isActive && "text-primary font-medium",
                !isActive && "hover:opacity-80",
                className
            )}
            style={{
                ...style,
                backgroundColor: isActive
                    ? (isDarkMode ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.1)")
                    : "transparent"
            }}
        >
            {children}
        </Link>
    );
}