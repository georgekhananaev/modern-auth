import {Metadata} from "next";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/lib/auth/auth-options";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
    title: "Login | Modern Auth",
    description: "Login to your account",
};

export default async function LoginPage() {
    // Check if user is already logged in
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/dashboard");
    }

    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-70px)]">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Modern Auth</h1>
                    <p className="mt-2 text-gray-600">A secure authentication system</p>
                </div>

                <AuthForm type="login"/>

                <div className="mt-6 text-center">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-sm">
                        <h3 className="font-semibold mb-2">Demo Credentials</h3>
                        <p className="mb-1"><span className="font-medium">Email:</span> admin@modern-auth.example.com
                        </p>
                        <p><span className="font-medium">Password:</span> Password123!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}