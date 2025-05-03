'use client';

import {useEffect} from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
            <div className="text-center max-w-lg">
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
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>

                <div className="mt-8 space-y-6">
                    <h2 className="text-3xl font-bold">Something Went Wrong</h2>

                    <p className="text-lg opacity-80">
                        We apologize for the inconvenience. An unexpected error has occurred.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <Button
                            onClick={() => reset()}
                            size="lg"
                        >
                            Try Again
                        </Button>
                        <Link href="/">
                            <Button
                                variant="outline"
                                size="lg"
                            >
                                Return Home
                            </Button>
                        </Link>
                    </div>
                </div>

                {error.digest && (
                    <p className="mt-8 text-sm opacity-60">
                        Error ID: {error.digest}
                    </p>
                )}
            </div>
        </div>
    );
}