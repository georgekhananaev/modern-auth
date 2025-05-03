import ComingSoon from "@/components/common/ComingSoon";

export const metadata = {
    title: "Teams Management - Modern Auth",
    description: "Organize users into teams and manage team permissions",
};

export default function TeamsPage() {
    return (
        <ComingSoon
            title="Teams Management"
            description="Our team management feature is under development. Soon you'll be able to organize users into teams and manage team-based permissions."
            starsGoal={180}
            additionalContent={
                <div
                    className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20 rounded-lg border border-green-100 dark:border-green-800/50 text-left">
                    <h3 className="font-medium text-sm mb-3 flex items-center">
            <span
                className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-800/30 inline-flex items-center justify-center mr-2">
              <span className="text-green-600 dark:text-green-400">👥</span>
            </span>
                        Team Management Features
                    </h3>

                    <div className="mb-4">
                        <div className="flex items-center p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm mb-3">
                            <div
                                className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold mr-2">P
                            </div>
                            <div>
                                <div className="text-xs font-medium">Product Team</div>
                                <div className="text-[10px] opacity-70">12 members</div>
                            </div>
                        </div>

                        <div className="flex -space-x-2 overflow-hidden">
                            {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'].map((color, index) => (
                                <div
                                    key={index}
                                    className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold ring-2 ring-white dark:ring-gray-800 ${color}`}
                                >
                                    {String.fromCharCode(65 + index)}
                                </div>
                            ))}
                            <div
                                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 ring-2 ring-white dark:ring-gray-800">
                                +7
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center p-1.5 bg-white/50 dark:bg-gray-800/50 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="text-green-600 dark:text-green-400 mr-1.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                                <path d="m18 14-6-6-6 6"/>
                            </svg>
                            Team Permissions
                        </div>
                        <div className="flex items-center p-1.5 bg-white/50 dark:bg-gray-800/50 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="text-green-600 dark:text-green-400 mr-1.5">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                            Member Management
                        </div>
                        <div className="flex items-center p-1.5 bg-white/50 dark:bg-gray-800/50 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="text-green-600 dark:text-green-400 mr-1.5">
                                <path d="M2 20h.01"/>
                                <path d="M7 20v-4"/>
                                <path d="M12 20v-8"/>
                                <path d="M17 20V8"/>
                                <path d="M22 4v16"/>
                            </svg>
                            Activity Analytics
                        </div>
                        <div className="flex items-center p-1.5 bg-white/50 dark:bg-gray-800/50 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="text-green-600 dark:text-green-400 mr-1.5">
                                <rect width="20" height="14" x="2" y="5" rx="2"/>
                                <line x1="2" x2="22" y1="10" y2="10"/>
                            </svg>
                            Resource Allocation
                        </div>
                    </div>
                </div>
            }
        />
    );
}