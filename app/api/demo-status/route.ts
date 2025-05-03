import {NextResponse} from "next/server";

export async function GET() {
    // Read the DEMO environment variable (default to false if not set)
    const isDemoMode = process.env.DEMO === 'true';

    return NextResponse.json({
        demoMode: isDemoMode
    });
}