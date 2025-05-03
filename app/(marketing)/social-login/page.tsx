import ComingSoon from "@/components/common/ComingSoon";
import Link from "next/link";

export const metadata = {
    title: "Social Authentication - Modern Auth",
    description: "Sign in with popular social platforms like Google, GitHub, and Instagram",
};

export default function SocialLoginPage() {
    return (
        <ComingSoon
            title="Social Authentication"
            description="We're integrating popular social login providers to make signing in and registering even easier. Connect with your favorite platforms with just a click."
            starsGoal={200}
            additionalContent={
                <div className="grid gap-4 my-4">
                    <div
                        className="p-4 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/30 dark:to-teal-900/20 rounded-lg border border-green-100 dark:border-green-800/50 text-left">
                        <div className="flex flex-col space-y-4">
                            <h3 className="font-medium text-sm flex items-center">
                <span
                    className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-800/30 inline-flex items-center justify-center mr-2">
                  <span className="text-green-600 dark:text-green-400">🔐</span>
                </span>
                                Supported Providers
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div
                                    className="flex items-center p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 group hover:shadow-md transition-all">
                                    <div
                                        className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                             viewBox="0 0 24 24" fill="#EA4335">
                                            <path
                                                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-medium mb-0.5">Google</h4>
                                        <div className="text-[10px] opacity-70">Coming soon</div>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 group hover:shadow-md transition-all">
                                    <div
                                        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-900/30 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                             viewBox="0 0 24 24" fill="#24292e" className="dark:fill-white">
                                            <path
                                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-medium mb-0.5">GitHub</h4>
                                        <div className="text-[10px] opacity-70">Coming soon</div>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 group hover:shadow-md transition-all">
                                    <div
                                        className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                             viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                                            <defs>
                                                <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%"
                                                                y2="0%">
                                                    <stop offset="0%" stopColor="#FFDC80"/>
                                                    <stop offset="25%" stopColor="#FCAF45"/>
                                                    <stop offset="50%" stopColor="#F77737"/>
                                                    <stop offset="75%" stopColor="#F56040"/>
                                                    <stop offset="100%" stopColor="#C13584"/>
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-medium mb-0.5">Instagram</h4>
                                        <div className="text-[10px] opacity-70">Coming soon</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            href="/social-login/google"
                            className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
                        >
                            <span className="text-xs font-medium">Google Sign In</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="ml-1 group-hover:translate-x-1 transition-transform text-gray-400">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </Link>

                        <Link
                            href="/social-login/github"
                            className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
                        >
                            <span className="text-xs font-medium">GitHub Sign In</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="ml-1 group-hover:translate-x-1 transition-transform text-gray-400">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            }
        />
    );
}