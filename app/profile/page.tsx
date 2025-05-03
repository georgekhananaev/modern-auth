import {Metadata} from "next";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/lib/auth/auth-options";
import {UserSession} from "@/types/auth";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Profile | Modern Auth",
    description: "User profile settings",
};

export default async function ProfilePage() {
    // Check if user is authenticated
    const session = await getServerSession(authOptions) as UserSession | null;

    if (!session || !session.user) {
        redirect("/auth/login");
    }

    // Check if demo mode is enabled
    const isDemoMode = process.env.DEMO === "true";

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

            {isDemoMode && (
                <div
                    className="max-w-2xl mx-auto mb-6 p-4 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-700 dark:text-amber-300">
                    <p className="text-sm font-medium">Demo Mode: Profile editing is disabled</p>
                    <p className="text-sm mt-1">Changes to your profile will not be saved in demo mode.</p>
                </div>
            )}

            <div className="p-6 rounded-lg shadow max-w-2xl mx-auto bg-primary/10 dark:bg-primary/5">
                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    defaultValue={session.user.name || ""}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    defaultValue={session.user.email || ""}
                                    disabled
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                <input
                                    type="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                <input
                                    type="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New
                                    Password</label>
                                <input
                                    type="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-6 flex justify-end space-x-3">
                        <Button size="lg" disabled={isDemoMode}>
                            Save Changes
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
