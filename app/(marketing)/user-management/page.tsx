"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function UserManagementDemo() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Enterprise User Management</h1>
                    <p className="text-lg opacity-80">
                        Scalable, secure, and comprehensive user management system built for modern applications
                    </p>
                </div>

                <div className="space-y-16">
                    {/* User Registration Flow */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Secure User Registration Flow</h2>
                        <div className="border rounded-lg overflow-hidden">
                            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                                <div className="p-6">
                                    <div
                                        className="flex justify-center items-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                                        <span className="text-lg font-bold">1</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Streamlined Onboarding</h3>
                                    <p className="opacity-80">
                                        Intuitive sign-up with robust validation, CAPTCHA protection, and customizable
                                        fields. Supports OAuth providers including Google, GitHub, and Microsoft.
                                    </p>
                                </div>

                                <div className="p-6">
                                    <div
                                        className="flex justify-center items-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                                        <span className="text-lg font-bold">2</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Multi-stage Verification</h3>
                                    <p className="opacity-80">
                                        Battle-tested email verification process with secure tokens, expiration
                                        controls, and configurable retry policies. Optional phone verification for
                                        enhanced security.
                                    </p>
                                </div>

                                <div className="p-6">
                                    <div
                                        className="flex justify-center items-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                                        <span className="text-lg font-bold">3</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Customizable Profile Setup</h3>
                                    <p className="opacity-80">
                                        Progressive profile enrichment with schema validation, custom fields, avatar
                                        management, and role assignment capabilities. Supports immediate or phased data
                                        collection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Profile Management */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Advanced Profile Management</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="space-y-4 mb-6">
                                    <p>
                                        Modern Auth provides enterprise-grade profile management capabilities with:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 opacity-80">
                                        <li>Self-service personal information management with field validation</li>
                                        <li>PBKDF2 password hashing with secure credential rotation</li>
                                        <li>Advanced role and permission management with fine-grained controls</li>
                                        <li>Detailed access logs with IP tracking and geo-location</li>
                                        <li>Avatar management with image optimization and CDN support</li>
                                        <li>GDPR-compliant data management and removal capabilities</li>
                                        <li>Multi-language support with user preference persistence</li>
                                        <li>Secure API access token management for authorized integrations</li>
                                    </ul>
                                </div>
                                <div className="border-l-4 border-primary pl-4 py-2 mb-6">
                                    <p className="italic opacity-80">
                                        &quot;Modern Auth&apos;s profile management solution reduced our customer
                                        support burden by 65% while significantly improving our security posture and
                                        compliance status.&quot;
                                    </p>
                                    <p className="text-sm opacity-70 mt-2">— Enterprise SaaS Customer</p>
                                </div>
                                <Link href="/features">
                                    <Button variant="outline">
                                        Explore Enterprise Features
                                    </Button>
                                </Link>
                            </div>

                            <div className="border rounded-lg overflow-hidden shadow-sm">
                                <div className="p-4 border-b bg-primary/5 dark:bg-primary/10">
                                    <h3 className="font-medium">Enterprise User Profile</h3>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div
                                            className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                                            JD
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold">John Doe</h4>
                                            <p className="opacity-70">john.doe@enterprise.com</p>
                                            <span
                                                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400 mt-1">
                        Verified
                      </span>
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        <div>
                                            <h5 className="text-sm font-medium opacity-70 mb-2">Personal
                                                Information</h5>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm opacity-70">First Name</p>
                                                    <p>John</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm opacity-70">Last Name</p>
                                                    <p>Doe</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm opacity-70">Organization</p>
                                                    <p>Acme Inc.</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm opacity-70">Role</p>
                                                    <p>Administrator</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-medium opacity-70 mb-2">Security Details</h5>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm opacity-70">Member Since</p>
                                                    <p>Jan 15, 2023</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm opacity-70">Last Login</p>
                                                    <p>Today, 10:45 AM</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm opacity-70">2FA Status</p>
                                                    <p className="flex items-center">
                                                        <span
                                                            className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                                                        Enabled
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm opacity-70">Password Updated</p>
                                                    <p>14 days ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Password Management */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Enterprise-grade Credential Management</h2>
                        <div className="border rounded-lg">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Advanced Password Recovery</h3>
                                    <ol className="space-y-4 list-decimal list-inside">
                                        <li className="opacity-80">
                                            Password reset initiated via secure email or authenticated recovery channel
                                        </li>
                                        <li className="opacity-80">
                                            Cryptographically secure one-time tokens generated with HMAC-SHA256
                                            signatures
                                        </li>
                                        <li className="opacity-80">
                                            Recovery tokens with configurable TTL (defaults to 15 minutes) and
                                            single-use enforcement
                                        </li>
                                        <li className="opacity-80">
                                            Multi-stage verification with optional secondary verification (SMS,
                                            authenticator app)
                                        </li>
                                        <li className="opacity-80">
                                            Rate limiting and brute force protection with escalating timeouts
                                        </li>
                                        <li className="opacity-80">
                                            Automated security notifications to all registered user devices
                                        </li>
                                        <li className="opacity-80">
                                            Session invalidation with configurable scope (current, all, selective)
                                        </li>
                                        <li className="opacity-80">
                                            Comprehensive audit logging for compliance and security operations
                                        </li>
                                    </ol>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Military-grade Password Security</h3>
                                    <ul className="space-y-4 list-disc list-inside opacity-80">
                                        <li>
                                            Zero-knowledge credential architecture with Argon2id hashing (memory-hard
                                            KDF)
                                        </li>
                                        <li>
                                            Adaptive work factors automatically tuned to hardware capabilities
                                        </li>
                                        <li>
                                            Configurable password policy enforcement
                                            <ul className="pl-6 mt-2 space-y-1 list-disc list-inside">
                                                <li>Configurable length requirements (12+ characters recommended)</li>
                                                <li>Character class enforcement (uppercase, lowercase, numeric,
                                                    special)
                                                </li>
                                                <li>Dictionary attack protection with common password rejection</li>
                                                <li>Context-aware password strength estimation (zxcvbn algorithm)</li>
                                                <li>Breach database integration (haveibeenpwned API)</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Customizable rotation policies with escalating requirements
                                        </li>
                                        <li>
                                            Password history management with configurable reuse prevention
                                        </li>
                                        <li>
                                            Proximity and similarity detection to prevent minor password variations
                                        </li>
                                        <li>
                                            Native support for passkeys and WebAuthn for passwordless authentication
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Account Management */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Enterprise Account Lifecycle Management</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="border rounded-lg p-6">
                                <div className="text-primary mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Multi-factor Identity Verification</h3>
                                <p className="opacity-80">
                                    Enterprise-grade identity verification with multiple authentication factors
                                    including email, phone, authenticator apps, hardware keys, and biometrics. Supports
                                    FIDO2 standards and adaptive authentication based on risk factors.
                                </p>
                            </div>

                            <div className="border rounded-lg p-6">
                                <div className="text-primary mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Advanced Security Monitoring</h3>
                                <p className="opacity-80">
                                    Comprehensive security monitoring with real-time anomaly detection, behavior
                                    analytics, and threat intelligence integration. Includes detailed session tracking,
                                    device fingerprinting, and geographic analysis with suspicious login alerting.
                                </p>
                            </div>

                            <div className="border rounded-lg p-6">
                                <div className="text-primary mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Compliance-focused Account Management</h3>
                                <p className="opacity-80">
                                    Comprehensive data management workflows for GDPR, CCPA, HIPAA, and other regulatory
                                    frameworks. Includes data portability exports, right-to-be-forgotten workflows,
                                    consent management, and automatic data minimization with configurable retention
                                    policies.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <div className="bg-primary/10 dark:bg-primary/5 rounded-xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Authentication Experience?</h2>
                        <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                            Join thousands of developers building secure, scalable applications with Modern Auth&apos;s
                            enterprise-ready authentication platform.
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
                            Enterprise packages with dedicated support and SLA available
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}