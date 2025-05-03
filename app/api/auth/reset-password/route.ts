import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db/connect";
import { User } from "@/lib/db/models/user";
import { verifyResetToken, hashPassword } from "@/lib/auth/password-utils";
import { validateResetPassword } from "@/lib/utils/validation";
import { ApiResponse } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body
    const validationResult = await validateResetPassword(body);

    if (!validationResult.success) {
      return NextResponse.json({
        success: false,
        message: "Validation failed",
        error: validationResult.errors,
      } as ApiResponse, { status: 400 });
    }

    // Verify reset token
    const { userId, valid } = verifyResetToken(body.token);

    if (!valid || !userId) {
      return NextResponse.json({
        success: false,
        message: "Invalid or expired reset token",
      } as ApiResponse, { status: 400 });
    }

    // Connect to database
    await connectToDatabase();

    // Find user by ID
    const user = await User.findById(userId);

    if (!user || !user.resetToken || user.resetToken !== body.token) {
      return NextResponse.json({
        success: false,
        message: "Invalid reset token",
      } as ApiResponse, { status: 400 });
    }

    // Check if token has expired in the database
    if (user.resetTokenExpiry && user.resetTokenExpiry < new Date()) {
      return NextResponse.json({
        success: false,
        message: "Reset token has expired",
      } as ApiResponse, { status: 400 });
    }

    // Hash the new password
    const hashedPassword = await hashPassword(body.password);

    // Update user password and clear reset token fields
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      success: true,
      message: "Password has been reset successfully",
    } as ApiResponse);

  } catch (error) {
    console.error("Error in reset password:", error);

    return NextResponse.json({
      success: false,
      message: "Failed to reset password",
      error: "Internal server error",
    } as ApiResponse, { status: 500 });
  }
}
