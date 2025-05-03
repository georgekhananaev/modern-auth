import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/auth-options";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Reset Password | Modern Auth",
  description: "Create a new password",
};

interface ResetPasswordPageProps {
  params: Promise<{
    token: string;
  }>;
}

export default async function ResetPasswordPage({ params }: ResetPasswordPageProps) {
  const { token } = await params;

  // Check if user is already logged in
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  // Decode the token from URL
  const decodedToken = decodeURIComponent(token);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="mt-2 text-gray-600">Create a new password for your account</p>
        </div>

        <AuthForm type="resetPassword" resetToken={decodedToken} />
      </div>
    </div>
  );
}
