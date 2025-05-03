import {Metadata} from "next";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/lib/auth/auth-options";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
    title: "Register | Modern Auth",
    description: "Create a new account",
};

export default async function RegisterPage() {
    // Check if user is already logged in
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/dashboard");
    }

    // Check if demo mode is enabled
    const isDemoMode = process.env.DEMO === "true";

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Create Account</h1>
                    <p className="mt-2 text-gray-600">Sign up for a new account</p>

                    {isDemoMode && (
                        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md text-amber-700 text-sm">
                            <p className="font-medium">Demo Mode Activated</p>
                            <p className="mt-1">Registration is disabled. Please use the demo credentials provided on
                                the login page.</p>
                        </div>
                    )}
                </div>

                <AuthForm type="register"/>
            </div>
        </div>
    );
}
