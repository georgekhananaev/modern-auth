"use client";

import React, {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {signIn} from "next-auth/react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Link from "next/link";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import Button from "@/components/ui/Button";
import {cn} from "@/lib/utils/cn";
import {
    ForgotPasswordFormFields,
    forgotPasswordSchema,
    LoginFormFields,
    loginSchema,
    RegisterFormFields,
    registerSchema,
    ResetPasswordFormFields,
    resetPasswordSchema
} from "@/types/auth";

type AuthFormType = "login" | "register" | "forgotPassword" | "resetPassword";

interface AuthFormProps {
    type: AuthFormType;
    resetToken?: string;
}

// Alert component
const Alert = ({type, children}: { type: 'error' | 'success', children: React.ReactNode }) => (
    <div className={cn(
        "p-3 text-sm rounded border",
        type === 'error' ? "bg-red-50 border-red-100 text-red-600" : "bg-green-50 border-green-100 text-green-600"
    )}>
        {children}
    </div>
);

// FormSection component for wrapping each form
const FormSection = ({
                         title,
                         description,
                         children
                     }: {
    title: string;
    description: string;
    children: React.ReactNode
}) => (
    <div className="w-full max-w-md space-y-6 p-8 rounded-lg shadow-lg bg-primary/10 dark:bg-primary/5">
        <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
            <p className="text-sm text-muted">{description}</p>
        </div>
        {children}
    </div>
);

export default function AuthForm({type, resetToken}: AuthFormProps) {
    // Route according to form type
    switch (type) {
        case "login":
            return <LoginForm/>;
        case "register":
            return <RegisterForm/>;
        case "forgotPassword":
            return <ForgotPasswordForm/>;
        case "resetPassword":
            return <ResetPasswordForm token={resetToken}/>;
        default:
            return null;
    }
}

// Login Form Component
function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<LoginFormFields>({
        resolver: zodResolver(loginSchema)
    });

    // Handle form submission
    const onSubmit = async (data: LoginFormFields) => {
        setIsLoading(true);
        setServerError(null);

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,
            });

            if (result?.error) {
                setServerError(result.error);
            } else {
                router.push(callbackUrl);
            }
        } catch (error) {
            console.error("Login error:", error);
            setServerError("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FormSection
            title="Sign In"
            description="Enter your email and password to access your account"
        >
            {serverError && <Alert type="error">{serverError}</Alert>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    label="Email"
                    type="email"
                    placeholder="user@modern-auth.example.com"
                    error={errors.email?.message}
                    disabled={isLoading}
                    {...register("email")}
                />

                <PasswordInput
                    label="Password"
                    placeholder="••••••••"
                    error={errors.password?.message}
                    disabled={isLoading}
                    showPasswordStrength={false}
                    {...register("password")}
                />

                <div className="text-right">
                    <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                    </Link>
                </div>

                <Button
                    type="submit"
                    fullWidth
                    isLoading={isLoading}
                >
                    Sign In
                </Button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/register" className="text-primary hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </FormSection>
    );
}

// Register Form Component
function RegisterForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<RegisterFormFields>({
        resolver: zodResolver(registerSchema)
    });

    // Handle form submission
    const onSubmit = async (data: RegisterFormFields) => {
        setIsLoading(true);
        setServerError(null);
        setSuccessMessage(null);

        // Check if demo mode is enabled
        try {
            const demoResponse = await fetch("/api/demo-status");
            const demoData = await demoResponse.json();

            if (demoData.demoMode) {
                setServerError("Registration is disabled in demo mode. Please use the demo credentials provided on the login page.");
                setIsLoading(false);
                return;
            }
        } catch (error) {
            console.error("Failed to check demo mode:", error);
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        try {
            const response = await fetch("/api/user", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (response.status === 409) {
                setServerError("An account with this email already exists.");
                return;
            }

            const result = await response.json();

            if (!response.ok) {
                if (result.errors && typeof result.errors === 'object') {
                    const firstError = Object.values(result.errors)[0] as string;
                    setServerError(firstError || result.message || "Registration failed");
                } else {
                    setServerError(result.error || result.message || "Registration failed");
                }
            } else {
                setSuccessMessage("Registration successful! You can now login.");
                setTimeout(() => router.push("/auth/login"), 2000);
            }
        } catch (err) {
            if (err instanceof Error) {
                if (err.name === 'AbortError') {
                    setServerError('Request timeout. Server is taking too long to respond.');
                } else {
                    console.error("Registration error:", err);
                    setServerError("An unexpected error occurred. Please try again.");
                }
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FormSection
            title="Create an Account"
            description="Fill in your details to create a new account"
        >
            {serverError && <Alert type="error">{serverError}</Alert>}
            {successMessage && <Alert type="success">{successMessage}</Alert>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    label="Full Name"
                    placeholder="John Doe"
                    error={errors.name?.message}
                    disabled={isLoading}
                    {...register("name")}
                />

                <Input
                    label="Email"
                    type="email"
                    placeholder="user@modern-auth.example.com"
                    error={errors.email?.message}
                    disabled={isLoading}
                    {...register("email")}
                />

                <PasswordInput
                    label="Password"
                    placeholder="••••••••"
                    error={errors.password?.message}
                    disabled={isLoading}
                    showPasswordStrength={true}
                    {...register("password")}
                />

                <PasswordInput
                    label="Confirm Password"
                    placeholder="••••••••"
                    error={errors.confirmPassword?.message}
                    disabled={isLoading}
                    {...register("confirmPassword")}
                />

                <Button
                    type="submit"
                    fullWidth
                    isLoading={isLoading}
                >
                    Sign Up
                </Button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="text-primary hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </FormSection>
    );
}

// Forgot Password Form Component
function ForgotPasswordForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ForgotPasswordFormFields>({
        resolver: zodResolver(forgotPasswordSchema)
    });

    // Handle form submission
    const onSubmit = async (data: ForgotPasswordFormFields) => {
        setIsLoading(true);
        setServerError(null);
        setSuccessMessage(null);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        try {
            const response = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email: data.email}),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            const result = await response.json();

            if (!response.ok) {
                if (response.status === 400) {
                    setServerError("Please provide a valid email address.");
                } else if (response.status === 429) {
                    setServerError("Too many requests. Please try again later.");
                } else {
                    setServerError(result.error || result.message || "Failed to send reset email");
                }
            } else {
                // Security best practice - don't reveal if email exists
                setSuccessMessage(
                    "If an account exists with this email, you'll receive a password reset link soon."
                );
            }
        } catch (err) {
            if (err instanceof Error && err.name === 'AbortError') {
                setServerError('Request timeout. Server is taking too long to respond.');
            } else {
                console.error("Forgot password error:", err);
                setServerError("An unexpected error occurred. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FormSection
            title="Forgot Password"
            description="Enter your email and we'll send you a reset link"
        >
            {serverError && <Alert type="error">{serverError}</Alert>}
            {successMessage && <Alert type="success">{successMessage}</Alert>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    label="Email"
                    type="email"
                    placeholder="user@modern-auth.example.com"
                    error={errors.email?.message}
                    disabled={isLoading}
                    {...register("email")}
                />

                <Button
                    type="submit"
                    fullWidth
                    isLoading={isLoading}
                >
                    Send Reset Link
                </Button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm">
                    Remember your password?{" "}
                    <Link href="/auth/login" className="text-primary hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </FormSection>
    );
}

// Reset Password Form Component
function ResetPasswordForm({token}: { token?: string }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ResetPasswordFormFields>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: token ? {token} : {}
    });

    // Handle form submission
    const onSubmit = async (data: ResetPasswordFormFields) => {
        if (!data.token) {
            setServerError("Missing reset token. Please request a new password reset link.");
            return;
        }

        setIsLoading(true);
        setServerError(null);
        setSuccessMessage(null);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        try {
            const response = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    token: data.token,
                    password: data.password,
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            const result = await response.json();

            if (!response.ok) {
                if (response.status === 400) {
                    if (result.message?.includes("token")) {
                        setServerError("Invalid or expired reset token. Please request a new password reset link.");
                    } else if (result.message?.includes("password")) {
                        setServerError("Invalid password. Please choose a stronger password.");
                    } else {
                        setServerError(result.error || result.message || "Failed to reset password");
                    }
                } else {
                    setServerError(result.error || result.message || "Failed to reset password");
                }
            } else {
                setSuccessMessage(
                    "Your password has been reset successfully! Redirecting to login..."
                );
                setTimeout(() => router.push("/auth/login"), 2000);
            }
        } catch (err) {
            if (err instanceof Error && err.name === 'AbortError') {
                setServerError('Request timeout. Server is taking too long to respond.');
            } else {
                console.error("Reset password error:", err);
                setServerError("An unexpected error occurred. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FormSection
            title="Reset Password"
            description="Enter your new password"
        >
            {serverError && <Alert type="error">{serverError}</Alert>}
            {successMessage && <Alert type="success">{successMessage}</Alert>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {token && (
                    <input type="hidden" value={token} {...register("token")} />
                )}

                <PasswordInput
                    label="New Password"
                    placeholder="••••••••"
                    error={errors.password?.message}
                    disabled={isLoading}
                    showPasswordStrength={true}
                    {...register("password")}
                />

                <PasswordInput
                    label="Confirm New Password"
                    placeholder="••••••••"
                    error={errors.confirmPassword?.message}
                    disabled={isLoading}
                    {...register("confirmPassword")}
                />

                <Button
                    type="submit"
                    fullWidth
                    isLoading={isLoading}
                >
                    Reset Password
                </Button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm">
                    Remember your password?{" "}
                    <Link href="/auth/login" className="text-primary hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </FormSection>
    );
}