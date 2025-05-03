import {NextRequest, NextResponse} from "next/server";
import {connectToDatabase} from "@/lib/db/connect";
import {User} from "@/lib/db/models/user";
import {hashPassword} from "@/lib/auth/password-utils";
import {validateRegistration} from "@/lib/utils/validation";
import {ApiResponse} from "@/types";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/lib/auth/auth-options";
import {UserSession} from "@/types/auth";

// Register a new user
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Validate request body
        const validationResult = await validateRegistration(body);

        if (!validationResult.success) {
            return NextResponse.json({
                success: false,
                message: "Validation failed",
                error: validationResult.errors,
            } as ApiResponse, {status: 400});
        }

        // Connect to database
        await connectToDatabase();

        // Check if user already exists
        const existingUser = await User.findOne({email: body.email});

        if (existingUser) {
            return NextResponse.json({
                success: false,
                message: "User already exists",
            } as ApiResponse, {status: 409});
        }

        // Hash password
        const hashedPassword = await hashPassword(body.password);

        // Create new user
        const newUser = await User.create({
            name: body.name,
            email: body.email,
            password: hashedPassword,
        });

        // Return user without sensitive data
        return NextResponse.json({
            success: true,
            message: "User created successfully",
            data: newUser.toSafeObject(),
        } as ApiResponse, {status: 201});

    } catch (error) {
        console.error("Error creating user:", error);

        return NextResponse.json({
            success: false,
            message: "Failed to create user",
            error: "Internal server error",
        } as ApiResponse, {status: 500});
    }
}

// Get current user
export async function GET() {
    try {
        const session = await getServerSession(authOptions) as UserSession | null;

        if (!session || !session.user) {
            return NextResponse.json({
                success: false,
                message: "Unauthorized",
            } as ApiResponse, {status: 401});
        }

        await connectToDatabase();

        const user = await User.findById(session.user.id);

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not found",
            } as ApiResponse, {status: 404});
        }

        return NextResponse.json({
            success: true,
            message: "User retrieved successfully",
            data: user.toSafeObject(),
        } as ApiResponse);

    } catch (error) {
        console.error("Error retrieving user:", error);

        return NextResponse.json({
            success: false,
            message: "Failed to retrieve user",
            error: "Internal server error",
        } as ApiResponse, {status: 500});
    }
}

// Update user
export async function PATCH(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions) as UserSession | null;

        if (!session || !session.user) {
            return NextResponse.json({
                success: false,
                message: "Unauthorized",
            } as ApiResponse, {status: 401});
        }

        const body = await req.json();

        await connectToDatabase();

        const user = await User.findById(session.user.id);

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not found",
            } as ApiResponse, {status: 404});
        }

        // Update allowed fields
        if (body.name) user.name = body.name;
        if (body.image) user.image = body.image;

        await user.save();

        return NextResponse.json({
            success: true,
            message: "User updated successfully",
            data: user.toSafeObject(),
        } as ApiResponse);

    } catch (error) {
        console.error("Error updating user:", error);

        return NextResponse.json({
            success: false,
            message: "Failed to update user",
            error: "Internal server error",
        } as ApiResponse, {status: 500});
    }
}
