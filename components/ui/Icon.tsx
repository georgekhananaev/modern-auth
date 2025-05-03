"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils/cn";

// Type for all available Lucide icon names
export type IconName = keyof typeof LucideIcons;

export interface IconProps {
  name: IconName;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export default function Icon({
  name,
  size = 24,
  color,
  strokeWidth = 2,
  className,
}: IconProps) {
  // Check if the icon exists in Lucide
  if (!Object.prototype.hasOwnProperty.call(LucideIcons, name)) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  // Get the icon component
  const IconComponent = LucideIcons[name] as React.FC<LucideIcons.LucideProps>;

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={cn("flex-shrink-0", className)}
    />
  );
}