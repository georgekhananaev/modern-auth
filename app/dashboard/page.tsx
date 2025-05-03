import {Metadata} from "next";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/lib/auth/auth-options";
import UserProfile from "@/components/dashboard/UserProfile";
import ThemedPreElement from "@/components/common/ThemedPreElement";
import {UserSession} from "@/types/auth";
import {UserType} from "@/types/user";
import {ThemedContainer} from "@/components/common/ThemedContainer";

export const metadata: Metadata = {
    title: "Dashboard | Modern Auth",
    description: "User dashboard",
};

export default async function DashboardPage() {
    // Check if user is authenticated
    const session = await getServerSession(authOptions) as UserSession | null;

    if (!session) {
        redirect("/auth/login");
    }

    // Create a properly typed user object
    const user: UserType = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role,
        image: session.user.image
    };

    return (
        <div className="container py-8">
            <h1 className="page-heading">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                    <UserProfile user={user}/>
                </div>

                <ThemedContainer className="md:col-span-2" padding="md">
                    <h2 className="text-xl font-semibold mb-4">Welcome, {session.user.name}!</h2>
                    <p className="opacity-80 mb-6">
                        You&apos;ve successfully logged in to our modern authentication system.
                    </p>

                    <ThemedContainer variant="borderless" className="p-5 bg-gray-50 dark:bg-gray-800/50">
                        <h3 className="font-medium mb-3">Your Session:</h3>
                        <ThemedPreElement>
                            {JSON.stringify(session, null, 2)}
                        </ThemedPreElement>
                    </ThemedContainer>
                </ThemedContainer>
            </div>
        </div>
    );
}
