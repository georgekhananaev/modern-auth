import {NextRequest, NextResponse} from "next/server";
import {connectToDatabase} from "@/lib/db/connect";
import {User} from "@/lib/db/models/user";
import {createResetToken} from "@/lib/auth/password-utils";
import {validateForgotPassword} from "@/lib/utils/validation";
import {ApiResponse} from "@/types";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Validate request body
        const validationResult = await validateForgotPassword(body);

        if (!validationResult.success) {
            return NextResponse.json({
                success: false,
                message: "Validation failed",
                error: validationResult.errors,
            } as ApiResponse, {status: 400});
        }

        // Connect to database
        await connectToDatabase();

        // Check if user exists
        const user = await User.findOne({email: body.email});

        // For security reasons, don't reveal if the email exists or not
        if (!user) {
            // Still return success to prevent email enumeration
            return NextResponse.json({
                success: true,
                message: "If an account with this email exists, a password reset link has been sent.",
            } as ApiResponse);
        }

        // Generate reset token (token valid for 1 hour)
        // Assert that user._id exists and is a mongoose ObjectId
        const userId = user._id?.toString() || "";
        const resetToken = createResetToken(userId, 60);

        // Store token and expiry in the user document
        user.resetToken = resetToken;
        user.resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
        await user.save();

        // In a real application, you would send an email with the reset link
        // For this template, we'll just return the token for demonstration
        const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password/${encodeURIComponent(resetToken)}`;

        // Here you would typically call your email sending service
        console.log(`Password reset link: ${resetUrl}`);

        return NextResponse.json({
            success: true,
            message: "If an account with this email exists, a password reset link has been sent.",
            // Only include reset URL in development
            ...(process.env.NODE_ENV === "development" && {
                data: {resetUrl}
            }),
        } as ApiResponse);

    } catch (error) {
        console.error("Error in forgot password:", error);

        return NextResponse.json({
            success: false,
            message: "Failed to process forgot password request",
            error: "Internal server error",
        } as ApiResponse, {status: 500});
    }
}
