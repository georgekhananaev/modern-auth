"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Suspense } from "react";

function ErrorContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "500";
  
  const errorConfig: Record<string, { title: string; description: string; action: string; icon: string }> = {
    "401": {
      title: "Unauthorized",
      description: "You need to be authenticated to access this resource.",
      action: "Please log in to continue.",
      icon: "🔒"
    },
    "403": {
      title: "Forbidden",
      description: "You don't have permission to access this resource.",
      action: "Contact your administrator if you need access.",
      icon: "⛔"
    },
    "404": {
      title: "Not Found",
      description: "The page you're looking for doesn't exist or has been moved.",
      action: "Check the URL or go back to the homepage.",
      icon: "🔍"
    },
    "500": {
      title: "Server Error",
      description: "Something went wrong on our end. Our team has been notified.",
      action: "Please try again later.",
      icon: "🛠️"
    },
    "503": {
      title: "Service Unavailable",
      description: "The service is temporarily unavailable or under maintenance.",
      action: "Please try again later.",
      icon: "🚧"
    }
  };

  const error = errorConfig[code] || errorConfig["500"];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-lg mx-auto text-center">
        <div className="text-6xl mb-6">{error.icon}</div>
        <h1 className="text-4xl font-bold mb-4">{code} - {error.title}</h1>
        <p className="text-lg opacity-80 mb-6">
          {error.description}
        </p>
        <p className="mb-8 opacity-70">
          {error.action}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={() => window.history.back()}>
            Go Back
          </Button>
          <Link href="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
        
        <div className="mt-16 p-6 bg-primary/5 dark:bg-primary/10 rounded-lg text-left">
          <h2 className="text-lg font-semibold mb-2">For Developers</h2>
          <div className="font-mono text-sm opacity-80 bg-white dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <pre>
              {`{
  "status": ${code},
  "code": "ERR_${code}",
  "message": "${error.title}",
  "requestId": "req_${Math.random().toString(36).substring(2, 10)}",
  "timestamp": "${new Date().toISOString()}"
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="text-6xl mb-6">⏳</div>
        <h1 className="text-4xl font-bold mb-4">Loading...</h1>
      </div>
    }>
      <ErrorContent />
    </Suspense>
  );
}