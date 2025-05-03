"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/theme/useTheme";

interface FooterProps {
  companyName?: string;
  links?: Array<{ label: string; href: string }>;
  className?: string;
}

export default function Footer({
  companyName = "Modern Auth",
  links = [
    { label: "Contact", href: "/contact" },
    { label: "Features", href: "/features" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
  className = "",
}: FooterProps) {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 border-t w-full bg-card-bg ${
      isDarkMode ? 'border-gray-700' : 'border-gray-200'
    } mt-auto ${className}`}>
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <p className="text-sm text-muted mb-2 md:mb-0">
            © {currentYear} {companyName} by George Khananaev. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}