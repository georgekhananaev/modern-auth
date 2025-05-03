"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { useTheme } from "@/context/theme/useTheme";

interface NewsletterProps {
    title?: string;
    description?: string;
    buttonText?: string;
    successMessage?: string;
    className?: string;
}

export default function Newsletter({
    title = "Join our newsletter",
    description = "Get product updates, company news, and more.",
    buttonText = "Subscribe",
    successMessage = "Thanks for subscribing!",
    className = "",
}: NewsletterProps) {
    const { isDarkMode } = useTheme();
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail("");
            // Add actual subscription logic here
        }
    };

    return (
        <div className={`pb-12 border-b border-zinc-100 dark:border-zinc-800 ${className}`}>
            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                    {description}
                </p>
                {isSubscribed ? (
                    <div className={`flex items-center justify-center gap-2 py-3 px-4 rounded-md ${
                        isDarkMode ? 'bg-zinc-800' : 'bg-zinc-50'
                    }`}>
                        <Check size={18} className="text-green-500" />
                        <span className="text-sm">{successMessage}</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`flex-1 px-4 py-2 text-sm rounded-md ${
                                isDarkMode
                                    ? 'bg-zinc-800 border-zinc-700 text-white'
                                    : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                            } border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            {buttonText}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}