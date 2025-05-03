'use client';

import {useEffect} from 'react';
import Button from '@/components/ui/Button';

interface GlobalErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({error, reset}: GlobalErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Global application error:', error);
    }, [error]);

    return (
        <html lang="en">
        <body>
        <div
            className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="text-center max-w-md">
                <div
                    className="w-24 h-24 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-red-600 dark:text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                <h1 className="mt-6 text-3xl font-bold">Application Error</h1>

                <p className="mt-4 text-lg opacity-80">
                    The application encountered a critical error and cannot continue.
                </p>

                <div className="mt-8">
                    <Button
                        onClick={() => reset()}
                        size="lg"
                    >
                        Try Again
                    </Button>
                </div>

                {error.digest && (
                    <p className="mt-8 text-sm opacity-60">
                        Error ID: {error.digest}
                    </p>
                )}
            </div>
        </div>
        </body>
        </html>
    );
}