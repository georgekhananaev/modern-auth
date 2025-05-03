import ComingSoon from "@/components/common/ComingSoon";

export const metadata = {
    title: "User Roles - Modern Auth",
    description: "Configure and manage user roles and permissions",
};

export default function UserRolesPage() {
    return (
        <ComingSoon
            title="User Roles Management"
            description="Our advanced role management system is coming soon. You'll be able to create custom roles with specific permissions."
            starsGoal={170}
            additionalContent={
                <div
                    className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-lg border border-blue-100 dark:border-blue-800/50 text-left">
                    <h3 className="font-medium text-sm mb-3 flex items-center">
            <span
                className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-800/30 inline-flex items-center justify-center mr-2">
              <span className="text-blue-600 dark:text-blue-400">👤</span>
            </span>
                        Role Management Features
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start space-x-2">
                            <div
                                className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            </div>
                            <div className="text-xs">Custom role creation</div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <div
                                className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            </div>
                            <div className="text-xs">Granular permissions</div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <div
                                className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            </div>
                            <div className="text-xs">Role hierarchy</div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <div
                                className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            </div>
                            <div className="text-xs">Role-based access control</div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <div
                                className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            </div>
                            <div className="text-xs">Permission inheritance</div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <div
                                className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            </div>
                            <div className="text-xs">Role assignment</div>
                        </div>
                    </div>
                </div>
            }
        />
    );
}