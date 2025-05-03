import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Protected routes that require authentication
const protectedRoutes = [
  "/dashboard",
  "/profile",
  "/settings",
  "/api/user",
];

// Public routes that don't require authentication
const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/reset-password",
];

// Marketing pages that don't require authentication are handled by the folder structure with (marketing) group

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Add security headers to all responses
  const response = NextResponse.next({
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      'Content-Security-Policy': process.env.NODE_ENV === 'production' 
        ? "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'"
        : "default-src 'self' *; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *; font-src 'self' data: *; connect-src 'self' *"
    }
  });

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route =>
    pathname.startsWith(route)
  );

  // Check if the route is an auth route
  const isAuthRoute = authRoutes.some(route =>
    pathname.startsWith(route)
  );
  
  // Get the token with secure validation
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  
  // Handle root route - this is needed since we moved the home page to the marketing group
  if (pathname === "/") {
    // Simply allow Next.js to handle the route mapping to the marketing group
    return response;
  }

  // If the route is protected and there's no token, redirect to login
  if (isProtectedRoute && !token) {
    const url = new URL("/auth/login", request.url);
    url.searchParams.set("callbackUrl", encodeURI(pathname));
    return NextResponse.redirect(url, {
      headers: response.headers
    });
  }

  // If the route is an auth route and there's a token, redirect to dashboard
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url), {
      headers: response.headers
    });
  }

  // For API routes that are protected, return 401 if no token
  if (pathname.startsWith("/api/") && isProtectedRoute && !token) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { 
        status: 401,
        headers: response.headers
      }
    );
  }

  // Check for admin routes with strict role validation
  if (pathname.startsWith("/admin") && (!token || token?.role !== "admin")) {
    return NextResponse.redirect(new URL("/dashboard", request.url), {
      headers: response.headers
    });
  }
  
  // Check token expiration for additional security
  const tokenExpiry = token?.exp ?? 0;
  const now = Math.floor(Date.now() / 1000);
  
  // If token is expired but still present, force re-authentication
  if (token && typeof tokenExpiry === 'number' && tokenExpiry < now) {
    // Clear the session on token expiry
    if (isProtectedRoute) {
      const url = new URL("/auth/login", request.url);
      return NextResponse.redirect(url, {
        headers: response.headers
      });
    }
  }

  // Continue for all other cases - apply security headers
  return response;
}

// Configure which routes use the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api/auth (NextAuth.js API routes)
     */
    "/((?!_next/static|_next/image|favicon.ico|public|api/auth).*)",
  ],
};
