import ComingSoon from "@/components/common/ComingSoon";

export const metadata = {
    title: "Create Team - Modern Auth",
    description: "Create a new team for your organization",
};

export default function CreateTeamPage() {
    return (
        <ComingSoon
            title="Create Team"
            description="Our team creation functionality is under development. Soon you'll be able to create and configure teams with custom permissions."
            starsGoal={160}
            additionalContent={
                <div
                    className="p-4 rounded-lg border border-emerald-100 dark:border-emerald-800/50 bg-white dark:bg-gray-800 shadow-sm">
                    <h3 className="font-medium text-sm mb-3">Team Creator Preview</h3>

                    <div className="space-y-3">
                        <div className="space-y-1">
                            <label className="text-xs font-medium">Team Name</label>
                            <input
                                type="text"
                                placeholder="Enter team name"
                                className="w-full px-3 py-1.5 text-xs rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 opacity-60 cursor-not-allowed"
                                disabled
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-medium">Description</label>
                            <textarea
                                placeholder="Enter team description"
                                className="w-full px-3 py-1.5 text-xs rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 opacity-60 cursor-not-allowed"
                                rows={2}
                                disabled
                            ></textarea>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-medium">Team Type</label>
                            <select
                                className="w-full px-3 py-1.5 text-xs rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 opacity-60 cursor-not-allowed"
                                disabled
                            >
                                <option>Department</option>
                                <option>Project</option>
                                <option>Custom</option>
                            </select>
                        </div>

                        <div className="pt-2">
                            <button
                                className="w-full py-2 px-3 text-xs bg-emerald-500 text-white rounded-md opacity-60 cursor-not-allowed"
                                disabled
                            >
                                Create Team
                            </button>
                        </div>
                    </div>
                </div>
            }
        />
    );
}