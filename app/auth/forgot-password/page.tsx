import {Metadata} from "next";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/lib/auth/auth-options";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
    title: "Forgot Password | Modern Auth",
    description: "Reset your password",
};

export default async function ForgotPasswordPage() {
    // Check if user is already logged in
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/dashboard");
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Forgot Password</h1>
                    <p className="mt-2 text-gray-600">We&apos;ll send you a reset link</p>
                </div>

                <AuthForm type="forgotPassword"/>
            </div>
        </div>
    );
}
