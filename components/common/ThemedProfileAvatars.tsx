"use client";

import {useTheme} from "@/context/theme/useTheme";

interface ThemedProfileAvatarsProps {
    className?: string;
}

export default function ThemedProfileAvatars({className = ""}: ThemedProfileAvatarsProps) {
    const {isDarkMode} = useTheme();

    return (
        <div className={`flex items-center space-x-6 ${className}`}>
            <div className="flex -space-x-2">
                <div
                    className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center text-xs border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>AB
                </div>
                <div
                    className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'} flex items-center justify-center text-xs border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>CD
                </div>
                <div
                    className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} flex items-center justify-center text-xs border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>EF
                </div>
            </div>
            <span className="text-sm opacity-80">Trusted by 5000+ developers</span>
        </div>
    );
}