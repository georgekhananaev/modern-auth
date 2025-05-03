"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import {ThemedContainer} from "@/components/common/ThemedContainer";
import ThemedBox from "@/components/common/ThemedBox";

export default function FeaturesDemo() {
    const [isErrorMenuOpen, setIsErrorMenuOpen] = useState(false);

    // Close error menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isErrorMenuOpen && !(event.target as Element).closest('.error-menu-container')) {
                setIsErrorMenuOpen(false);
            }
        };

        if (isErrorMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isErrorMenuOpen]);

    return (
        <ThemedContainer variant="borderless" className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Authentication Platform</h1>
                    <p className="text-lg opacity-80 max-w-2xl mx-auto">
                        Comprehensive, secure, and developer-friendly authentication for modern applications
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Authentication Feature */}
                    <ThemedContainer padding="lg">
                        <h2 className="text-2xl font-bold mb-4">Enterprise-grade Authentication</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p>
                                    Modern Auth provides a battle-tested authentication infrastructure built on industry
                                    standards and
                                    designed for enterprise applications with stringent security requirements.
                                </p>
                                <ul className="list-disc list-inside space-y-2 opacity-80">
                                    <li>Advanced JWT implementation with automatic key rotation</li>
                                    <li>Argon2id password hashing with adaptive work factors</li>
                                    <li>Sophisticated CSRF protection with dual-token pattern</li>
                                    <li>Intelligent rate limiting with IP reputation analysis</li>
                                    <li>Secure HTTP-only cookies with SameSite and domain controls</li>
                                    <li>Session management with device fingerprinting</li>
                                    <li>OAuth 2.0 and OpenID Connect provider integrations</li>
                                    <li>SSO capabilities with SAML 2.0 support</li>
                                </ul>
                                <div className="pt-4">
                                    <Link href="/security">
                                        <Button variant="outline">
                                            Explore Security Architecture
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <ThemedContainer variant="borderless" className="bg-primary/10 dark:bg-primary/5 p-6"
                                             shadow="none" rounded="lg">
                                <p className="font-mono text-sm opacity-80">
                                    <span
                                        className="text-green-600 dark:text-green-400">{/* Modern JWT implementation with key rotation */}</span><br/>
                                    import {`{ jwtService }`} from &apos;@modern-auth/core&apos;;<br/><br/>

                                    <span
                                        className="text-green-600 dark:text-green-400">{/* Create a token with claims */}</span><br/>
                                    const token = await jwtService.createToken({`{`}<br/>
                                    &nbsp;&nbsp;subject: user.id,<br/>
                                    &nbsp;&nbsp;audience: &apos;api:access&apos;,<br/>
                                    &nbsp;&nbsp;claims: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;roles: user.roles,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;permissions: user.permissions,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;deviceId: fingerprint.id<br/>
                                    &nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;expiresIn: &apos;4h&apos;<br/>
                                    {`}`});<br/><br/>

                                    <span
                                        className="text-green-600 dark:text-green-400">{/* Verify with advanced validation */}</span><br/>
                                    try {`{`}<br/>
                                    &nbsp;&nbsp;const result = await jwtService.validateToken(token, {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;audience: &apos;api:access&apos;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;validateFingerprint: true,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;requirePermissions: [&apos;users:read&apos;]<br/>
                                    &nbsp;&nbsp;{`}`});<br/>
                                    &nbsp;&nbsp;return result.subject;<br/>
                                    {`}`} catch (error) {`{`}<br/>
                                    &nbsp;&nbsp;logger.security.warn(&apos;Invalid
                                    token&apos;, {`{ error, token: tokenMask(token) }`});<br/>
                                    &nbsp;&nbsp;throw new AuthError(&apos;INVALID_TOKEN&apos;);<br/>
                                    {`}`}
                                </p>
                            </ThemedContainer>
                        </div>
                    </ThemedContainer>

                    {/* User Management Feature */}
                    <ThemedContainer padding="lg">
                        <h2 className="text-2xl font-bold mb-4">Enterprise Identity Management</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p>
                                    Modern Auth delivers comprehensive identity and access management for organizations
                                    of any size.
                                    Our system handles millions of users with enterprise-ready performance and
                                    compliance.
                                </p>
                                <ul className="list-disc list-inside space-y-2 opacity-80">
                                    <li>Advanced user registration with identity verification</li>
                                    <li>Role-based access control with fine-grained permissions</li>
                                    <li>Multi-factor authentication with multiple methods</li>
                                    <li>Enterprise SSO integration capabilities</li>
                                    <li>Automated compliance workflows (GDPR, CCPA, HIPAA)</li>
                                    <li>Customizable security policies</li>
                                    <li>User directory integrations (LDAP, Active Directory)</li>
                                    <li>User impersonation with full audit trails</li>
                                </ul>
                                <div className="pt-4">
                                    <Link href="/user-management">
                                        <Button variant="outline">
                                            Explore Identity Platform
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <ThemedContainer variant="borderless" className="bg-primary/10 dark:bg-primary/5 p-6"
                                             shadow="none" rounded="lg">
                                <p className="font-mono text-sm opacity-80">
                                    <span
                                        className="text-green-600 dark:text-green-400">{/* Enterprise User Model */}</span><br/>
                                    const userSchema = new Schema({`{`}<br/>
                                    &nbsp;&nbsp;profile: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;firstName: {`{ type: String, required: true }`},<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;lastName: {`{ type: String, required: true }`},<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;displayName: String,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;avatarUrl: String,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;locale: {`{ type: String, default: 'en-US' }`}<br/>
                                    &nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;email: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;address: {`{ type: String, required: true, unique: true }`},<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;verified: {`{ type: Boolean, default: false }`},<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;verificationToken: {`{ type: String, select: false }`}<br/>
                                    &nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;security: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;password: {`{ type: String, required: true, select: false }`},<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;mfaEnabled: {`{ type: Boolean, default: false }`},<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;mfaMethods: [String],<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;passwordHistory: [{`{ type: String, select: false }`}],<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;lastPasswordChange: Date<br/>
                                    &nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;roles: [{`{ type: String, ref: 'Role' }`}],<br/>
                                    &nbsp;&nbsp;permissions: [String],<br/>
                                    &nbsp;&nbsp;status: {`{ type: String, enum: ['active', 'suspended', 'locked'], default: 'active' }`},<br/>
                                    &nbsp;&nbsp;metadata: {`{ type: Map, of: Schema.Types.Mixed }`}<br/>
                                    {`}`}, {`{ timestamps: true }`});<br/>
                                </p>
                            </ThemedContainer>
                        </div>
                    </ThemedContainer>

                    {/* Theme Feature */}
                    <ThemedContainer padding="lg">
                        <h2 className="text-2xl font-bold mb-4">Advanced Theming System</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p>
                                    Modern Auth includes a sophisticated theming engine that ensures consistent
                                    brand experiences while respecting user preferences and accessibility needs.
                                </p>
                                <ul className="list-disc list-inside space-y-2 opacity-80">
                                    <li>CSS variable-based theme architecture for maximum flexibility</li>
                                    <li>Hydration-safe implementation to eliminate FOUC (flash of unstyled content)</li>
                                    <li>Automatic system preference detection with media query subscriptions</li>
                                    <li>Persistent theme settings with local storage and server-side preference sync
                                    </li>
                                    <li>Smooth theme transitions with configurable animation durations</li>
                                    <li>WCAG 2.1 AA/AAA compliant color contrast in all themes</li>
                                    <li>Support for multiple theme variants beyond just light/dark</li>
                                    <li>Theme tokens API for consistent component styling</li>
                                </ul>
                                <div className="pt-4">
                                    <Link href="/theming">
                                        <Button variant="outline">
                                            Explore Theming Engine
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <ThemedContainer variant="borderless" className="bg-primary/10 dark:bg-primary/5 p-6"
                                             shadow="none" rounded="lg">
                                <p className="font-mono text-sm opacity-80">
                                    <span
                                        className="text-green-600 dark:text-green-400">{/* Modern theme architecture */}</span><br/>
                                    import {`{ createThemeContext }`} from &apos;@modern-auth/theme&apos;;<br/><br/>

                                    <span
                                        className="text-green-600 dark:text-green-400">{/* Define theme variants */}</span><br/>
                                    const themeConfig = {`{`}<br/>
                                    &nbsp;&nbsp;variants:
                                    [&apos;light&apos;, &apos;dark&apos;, &apos;highContrast&apos;],<br/>
                                    &nbsp;&nbsp;defaultVariant: &apos;system&apos;,<br/>
                                    &nbsp;&nbsp;transitionDuration: 200,<br/>
                                    &nbsp;&nbsp;tokens: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;light: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;primary: &apos;#0070f3&apos;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background: &apos;#ffffff&apos;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: &apos;#111827&apos;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/* Additional token definitions
                                    */<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;dark: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;primary: &apos;#3b82f6&apos;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background: &apos;#0f172a&apos;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text: &apos;#f3f4f6&apos;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/* Additional token definitions
                                    */<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;{`}`}<br/>
                                    {`}`};<br/><br/>

                                    <span
                                        className="text-green-600 dark:text-green-400">{/* Create theme context */}</span><br/>
                                    export const {`{ ThemeProvider, useTheme }`} = createThemeContext(themeConfig);
                                </p>
                            </ThemedContainer>
                        </div>
                    </ThemedContainer>

                    {/* Error Handling Feature */}
                    <ThemedContainer padding="lg">
                        <h2 className="text-2xl font-bold mb-4">Elegant Error Handling System</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p>
                                    Modern Auth provides a comprehensive error handling system that delivers
                                    consistent, user-friendly error responses across your entire application.
                                </p>
                                <ul className="list-disc list-inside space-y-2 opacity-80">
                                    <li>Centralized error management with consistent formatting</li>
                                    <li>Beautiful, theme-aware error pages for common HTTP status codes</li>
                                    <li>Detailed developer error information in development mode</li>
                                    <li>Structured error logging with context preservation</li>
                                    <li>Automatic retry mechanisms for transient failures</li>
                                    <li>Rate limiting with user-friendly messaging</li>
                                    <li>Internationalized error messages</li>
                                    <li>Security-conscious error reporting (no stack traces in production)</li>
                                </ul>
                                <div className="pt-4 relative error-menu-container">
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsErrorMenuOpen(!isErrorMenuOpen)}
                                    >
                                        View Error Pages
                                    </Button>

                                    {isErrorMenuOpen && (
                                        <ThemedContainer
                                            className="absolute mt-2 left-0 z-50 w-64 py-2 transition-all duration-200 animate-fadeIn error-menu-container"
                                            variant="card"
                                            shadow="md"
                                        >
                                            <ThemedBox border="bottom" className="px-4 py-2">
                                                <h3 className="font-medium text-sm">Error Page Examples</h3>
                                            </ThemedBox>
                                            <div className="py-1">
                                                <Link href="/not-found"
                                                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                    404 - Not Found
                                                </Link>
                                                <Link href="/error?code=401"
                                                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                    401 - Unauthorized
                                                </Link>
                                                <Link href="/error?code=403"
                                                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                    403 - Forbidden
                                                </Link>
                                                <Link href="/error?code=500"
                                                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                    500 - Server Error
                                                </Link>
                                                <Link href="/error?code=503"
                                                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                    503 - Service Unavailable
                                                </Link>
                                            </div>
                                        </ThemedContainer>
                                    )}
                                </div>
                            </div>
                            <ThemedContainer variant="borderless" className="bg-primary/10 dark:bg-primary/5 p-6"
                                             shadow="none" rounded="lg">
                                <p className="font-mono text-sm opacity-80">
                                    <span
                                        className="text-green-600 dark:text-green-400">{/* Centralized error handling */}</span><br/>
                                    import {`{ createErrorHandler }`} from &apos;@modern-auth/errors&apos;;<br/><br/>

                                    <span
                                        className="text-green-600 dark:text-green-400">{/* Define app error types */}</span><br/>
                                    const errorConfig = {`{`}<br/>
                                    &nbsp;&nbsp;types: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;AUTH: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INVALID_CREDENTIALS: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code: &apos;AUTH_001&apos;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;status: 401,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: &apos;Invalid username or
                                    password&apos;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACCOUNT_LOCKED: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code: &apos;AUTH_002&apos;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;status: 403,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: &apos;Account locked&apos;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retryAfter: 30<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;VALIDATION: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REQUIRED_FIELD: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code: &apos;VAL_001&apos;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;status: 400,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: &apos;Required field
                                    missing&apos;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                                    &nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;defaultError: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;code: &apos;ERR_999&apos;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;status: 500,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;message: &apos;An unexpected error occurred&apos;<br/>
                                    &nbsp;&nbsp;{`}`}<br/>
                                    {`}`};<br/><br/>

                                    <span
                                        className="text-green-600 dark:text-green-400">{/* Create error handler */}</span><br/>
                                    export const {`{ AppError, handleError }`} = createErrorHandler(errorConfig);<br/>
                                </p>
                            </ThemedContainer>
                        </div>
                    </ThemedContainer>

                    {/* Call to Action */}
                    <ThemedContainer variant="borderless" className="bg-primary/10 dark:bg-primary/5 p-8 text-center"
                                     rounded="xl">
                        <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Auth Experience?</h2>
                        <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                            Join thousands of developers building secure, enterprise-ready applications with Modern
                            Auth&apos;s authentication platform.
                        </p>
                        <div
                            className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 flex-wrap justify-center sm:gap-4 max-w-lg mx-auto">
                            <Link href="/auth/register" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto">Start Free Trial</Button>
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">Schedule Demo</Button>
                            </Link>
                        </div>
                        <p className="text-sm opacity-70 mt-6">
                            Enterprise packages with dedicated support and custom implementation available
                        </p>
                    </ThemedContainer>
                </div>
            </div>
        </ThemedContainer>
    );
}