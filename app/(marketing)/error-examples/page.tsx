import ComingSoon from "@/components/common/ComingSoon";
import Link from "next/link";

export const metadata = {
  title: "Error Pages - Modern Auth",
  description: "Examples of error pages in Modern Auth platform",
};

export default function ErrorExamplesPage() {
  return (
    <ComingSoon 
      title="Error Pages"
      description="We're building a comprehensive set of beautiful, informative error pages to improve user experience when things go wrong."
      starsGoal={110}
      additionalContent={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <Link 
            href="/not-found" 
            className="group block p-5 rounded-lg border bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/30 dark:to-slate-900/20 hover:shadow-md transition-all border-gray-100 dark:border-gray-800/50"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800/30 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <span className="text-gray-600 dark:text-gray-400 text-lg font-bold">404</span>
              </div>
              <h3 className="font-medium">Not Found</h3>
            </div>
            <p className="text-sm opacity-80 pl-1">Page not found example</p>
            <div className="mt-3 flex justify-end">
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center">
                View
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
          
          <Link 
            href="/error?code=401" 
            className="group block p-5 rounded-lg border bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/20 hover:shadow-md transition-all border-yellow-100 dark:border-yellow-800/50"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-800/30 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <span className="text-yellow-600 dark:text-yellow-400 text-lg font-bold">401</span>
              </div>
              <h3 className="font-medium">Unauthorized</h3>
            </div>
            <p className="text-sm opacity-80 pl-1">Unauthorized access example</p>
            <div className="mt-3 flex justify-end">
              <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400 flex items-center">
                View
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
          
          <Link 
            href="/error?code=500" 
            className="group block p-5 rounded-lg border bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/20 hover:shadow-md transition-all border-red-100 dark:border-red-800/50"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-800/30 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <span className="text-red-600 dark:text-red-400 text-lg font-bold">500</span>
              </div>
              <h3 className="font-medium">Server Error</h3>
            </div>
            <p className="text-sm opacity-80 pl-1">Server error example</p>
            <div className="mt-3 flex justify-end">
              <span className="text-xs font-medium text-red-600 dark:text-red-400 flex items-center">
                View
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      }
    />
  );
}