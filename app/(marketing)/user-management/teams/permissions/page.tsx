import ComingSoon from "@/components/common/ComingSoon";

export const metadata = {
    title: "Team Permissions - Modern Auth",
    description: "Configure team access and permissions",
};

export default function TeamPermissionsPage() {
    return (
        <ComingSoon
            title="Team Permissions"
            description="Our team permission management system is coming soon. You'll be able to configure detailed access controls for teams."
            starsGoal={190}
            additionalContent={
                <div
                    className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/20 rounded-lg border border-purple-100 dark:border-purple-800/50 text-left">
                    <h3 className="font-medium text-sm mb-3 flex items-center">
            <span
                className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-800/30 inline-flex items-center justify-center mr-2">
              <span className="text-purple-600 dark:text-purple-400">🔐</span>
            </span>
                        Permission Management
                    </h3>

                    <div className="bg-white dark:bg-gray-800 rounded-md p-3 shadow-sm mb-3">
                        <div className="flex justify-between items-center mb-2">
                            <div className="text-xs font-medium">Product Team</div>
                            <div
                                className="text-[10px] px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                                Active
                            </div>
                        </div>

                        <div className="space-y-2">
                            {[
                                {name: 'View dashboard', checked: true},
                                {name: 'Manage users', checked: true},
                                {name: 'Edit settings', checked: false},
                                {name: 'Export data', checked: true},
                                {name: 'Delete resources', checked: false},
                            ].map((permission, index) => (
                                <div key={index} className="flex items-center">
                                    <div
                                        className={`w-3.5 h-3.5 rounded border flex items-center justify-center mr-2 ${permission.checked ? 'bg-purple-500 border-purple-500' : 'border-gray-300 dark:border-gray-600'}`}
                                    >
                                        {permission.checked && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </div>
                                    <span className="text-[10px]">{permission.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-xs text-center italic opacity-70 mb-1">Coming with powerful permission
                        management tools
                    </div>
                </div>
            }
        />
    );
}