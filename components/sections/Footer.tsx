"use client";

import React, {useCallback, useEffect, useState} from "react";
import Link from "next/link";
import {useTheme} from "@/context/theme/useTheme";
import {ArrowUp, ArrowUpRight, ChevronDown, ChevronUp, Moon, Sun} from "lucide-react";
import Newsletter from "@/components/common/Newsletter";

interface FooterProps {
    companyName?: string;
    links?: Array<{ label: string; href: string }>;
    className?: string;
}

interface CollapsibleSectionProps {
    title: string;
    children: React.ReactNode;
    isDarkMode: boolean;
}

// Scroll to the top component
const ScrollToTop = () => {
    const {isDarkMode} = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    // Function to check scroll position and update visibility
    const checkScrollPosition = useCallback(() => {
        const scrollY = window.scrollY;
        if (scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    // Add a scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);
        return () => window.removeEventListener('scroll', checkScrollPosition);
    }, [checkScrollPosition]);

    // Scroll to the top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12 pointer-events-none'
            } ${
                isDarkMode
                    ? 'bg-primary/90 hover:bg-primary'
                    : 'bg-primary/90 hover:bg-primary'
            }`}
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} color={'white'}/>
        </button>
    );
};

const CollapsibleSection = ({title, children}: CollapsibleSectionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-zinc-100 dark:border-zinc-800 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between text-left"
            >
                <span className="font-medium">{title}</span>
                {isOpen ? (
                    <ChevronUp size={18} className="text-muted-foreground"/>
                ) : (
                    <ChevronDown size={18} className="text-muted-foreground"/>
                )}
            </button>
            <div className={`mt-2 ${isOpen ? "block" : "hidden"} md:block`}>
                {children}
            </div>
        </div>
    );
};

export default function Footer({
                                   companyName = "Modern Auth",
                                   links = [
                                       {label: "Contact", href: "/contact"},
                                       {label: "Terms", href: "/terms"},
                                       {label: "Privacy", href: "/privacy"},
                                   ]
                               }: FooterProps) {
    const {isDarkMode, toggleTheme} = useTheme();
    const currentYear = new Date().getFullYear();
    const [mounted, setMounted] = useState(false);

    // Fix hydration issues by only rendering after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {/* ScrollToTop component */}
            <ScrollToTop/>

            <footer className={`py-2 w-full bg-card-bg ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="container mx-auto px-4">
                    {/* Newsletter section */}
                    <Newsletter/>

                    {/* Main footer content */}
                    <div className="py-8">
                        <div className="md:hidden">
                            {/* Mobile accordion view */}
                            <CollapsibleSection title="Features" isDarkMode={isDarkMode}>
                                <ul className="space-y-2 pl-2">
                                    <li>
                                        <Link href="/features"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            Overview
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/custom-components"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            Components
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/security"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            Security
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/user-management"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            User Management
                                        </Link>
                                    </li>
                                </ul>
                            </CollapsibleSection>

                            <CollapsibleSection title="Resources" isDarkMode={isDarkMode}>
                                <ul className="space-y-2 pl-2">
                                    <li>
                                        <Link href="/localization"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            Internationalization
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/rtl-support"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            RTL Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/social-login"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            Social Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/theming"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            Theming
                                        </Link>
                                    </li>
                                </ul>
                            </CollapsibleSection>

                            <CollapsibleSection title="Legal" isDarkMode={isDarkMode}>
                                <ul className="space-y-2 pl-2">
                                    {links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </CollapsibleSection>
                        </div>

                        {/* Desktop view */}
                        <div className="hidden md:grid md:grid-cols-4 gap-8 py-4">
                            <div>
                                <div className="flex items-center mb-6">
                                    <div
                                        className="p-1.5 rounded-md mr-2.5 flex items-center justify-center bg-primary shadow-sm">
                                        <span className="text-sm font-bold text-white">MA</span>
                                    </div>
                                    <span className="font-semibold">{companyName}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-6">
                                    The easy way to build secure, modern apps.
                                </p>
                                <div className="space-y-2">
                                    <a href="https://github.com/georgekhananaev/modern-auth" target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                                        GitHub
                                        <ArrowUpRight size={14}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/georgekhananaev/" target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                                        LinkedIn
                                        <ArrowUpRight size={14}/>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-medium mb-4">Features</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/features"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            Overview
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/custom-components"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            Components
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/security"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            Security
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/user-management"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            User Management
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-medium mb-4">Resources</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/localization"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            Internationalization
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/rtl-support"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            RTL Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/social-login"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            Social Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/theming"
                                              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            Theming
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-medium mb-4">Legal</h4>
                                <ul className="space-y-2">
                                    {links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Copyright bar */}
                    <div className={`py-6 border-t ${
                        isDarkMode ? 'border-zinc-800' : 'border-zinc-100'
                    } flex flex-col md:flex-row justify-between items-center`}>
                        <p className="text-xs text-muted-foreground mb-4 md:mb-0">
                            © {currentYear} {companyName} by George Khananaev. All rights reserved.
                        </p>

                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="flex gap-2 items-center group"
                                aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
                            >
                                <span
                                    className="text-xs text-muted-foreground group-hover:text-primary transition-colors">{isDarkMode ? 'Dark' : 'Light'} Mode</span>
                                <div className={`w-16 h-8 rounded-full p-1.5 flex items-center transition-all ${
                                    isDarkMode ? 'bg-zinc-800 justify-end' : 'bg-zinc-100 justify-start'
                                } group-hover:ring-1 group-hover:ring-primary`}>
                                    <div
                                        className="h-5 w-5 rounded-full flex items-center justify-center text-white shadow-md transition-all bg-primary group-hover:scale-110">
                                        {isDarkMode
                                            ? <Sun size={12} className="text-amber-100"/>
                                            : <Moon size={12} className="text-indigo-100"/>
                                        }
                                    </div>
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </footer>
        </>
    );
}