"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function SecurityDemo() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Security</h1>
                    <p className="text-lg opacity-80">
                        Modern Auth implements industry-leading security practices to protect user data and prevent
                        unauthorized access
                    </p>
                </div>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Password Security</h2>
                        <div className="border rounded-lg overflow-hidden mb-6">
                            <div className="p-6 bg-primary/5 dark:bg-primary/10">
                                <p className="mb-4">
                                    Password security in Modern Auth is implemented using multiple layers of protection
                                    to ensure user credentials remain secure even in the event of a data breach.
                                </p>
                                <ul className="list-disc list-inside space-y-2 opacity-80">
                                    <li>Argon2id / bcrypt hashing with optimal work factors</li>
                                    <li>Multi-factor password strength validation</li>
                                    <li>Password breach detection against known compromised databases</li>
                                    <li>Cryptographically secure password reset flow</li>
                                    <li>Intelligent account lockout with exponential backoff</li>
                                    <li>Password history tracking to prevent reuse</li>
                                </ul>
                            </div>
                            <div className="p-6 border-t">
                                <p className="font-mono text-sm opacity-80">
                                    <span
                                        className="text-green-600 dark:text-green-400">{/* From lib/auth/password-utils.ts */}</span><br/>
                                    import bcrypt from &apos;bcryptjs&apos;;<br/><br/>

                                    <span
                                        className="text-green-600 dark:text-green-400">{/* Secure password hashing */}</span><br/>
                                    export const hashPassword = async (password: string):
                                    Promise&lt;string&gt; =&gt; {`{`}<br/>
                                    &nbsp;&nbsp;const salt = await bcrypt.genSalt(12); // Higher salt rounds = stronger
                                    hash<br/>
                                    &nbsp;&nbsp;return bcrypt.hash(password, salt);<br/>
                                    {`}`};<br/><br/>

                                    <span
                                        className="text-green-600 dark:text-green-400">{/* Secure password verification */}</span><br/>
                                    export const verifyPassword = async (password: string, hashedPassword: string):
                                    Promise&lt;boolean&gt; =&gt; {`{`}<br/>
                                    &nbsp;&nbsp;return bcrypt.compare(password, hashedPassword);<br/>
                                    {`}`};<br/>
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Authentication & Authorization</h2>
                        <div className="border rounded-lg overflow-hidden mb-6">
                            <div className="p-6 bg-primary/5 dark:bg-primary/10">
                                <p className="mb-4">
                                    Modern Auth uses a sophisticated JWT-based authentication system with a seamless
                                    integration with NextAuth.js for secure, token-based access control.
                                </p>
                                <ul className="list-disc list-inside space-y-2 opacity-80">
                                    <li>Short-lived, cryptographically signed JWT tokens</li>
                                    <li>Secure token refresh and rotation mechanisms</li>
                                    <li>HTTP-only, secure, SameSite cookies for token storage</li>
                                    <li>Complete session management and revocation</li>
                                    <li>Role-based permission system with granular access control</li>
                                    <li>Support for OAuth2 providers (GitHub, Google, etc.)</li>
                                </ul>
                            </div>
                            <div className="p-6 border-t">
                                <p className="font-mono text-sm opacity-80">
                                    <span
                                        className="text-green-600 dark:text-green-400">{/* From lib/auth/auth-options.ts */}</span><br/>
                                    <span
                                        className="text-green-600 dark:text-green-400">{/* NextAuth configuration */}</span><br/>
                                    export const authOptions: NextAuthOptions = {`{`}<br/>
                                    &nbsp;&nbsp;adapter: MongoDBAdapter(clientPromise),<br/>
                                    &nbsp;&nbsp;session: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;strategy: &quot;jwt&quot;,<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;maxAge: 30 * 24 * 60 * 60, // 30 days<br/>
                                    &nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;jwt: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;maxAge: 60 * 60, // 1 hour<br/>
                                    &nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;pages: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;signIn: &quot;/auth/login&quot;,<br/>
                                    &nbsp;&nbsp;{`}`},<br/>
                                    &nbsp;&nbsp;providers: [ /* ... */ ],<br/>
                                    &nbsp;&nbsp;callbacks: {`{`}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;/* JWT and session customization */
                                    &nbsp;&nbsp;{`}`}<br/>
                                    {`}`};<br/>
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Advanced Protection Layers</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="border rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-2">CSRF Protection</h3>
                                <p className="opacity-80">
                                    Modern Auth implements advanced Cross-Site Request Forgery protection with unique
                                    per-session tokens and strict SameSite cookie policies. All form submissions and API
                                    requests are validated against CSRF tokens to prevent malicious attacks.
                                </p>
                            </div>

                            <div className="border rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-2">XSS Prevention</h3>
                                <p className="opacity-80">
                                    Built-in XSS protections include content security policies, automatic output
                                    encoding, and context-specific input sanitization. React&apos;s inherent XSS
                                    protection adds another layer of defense against injection attacks.
                                </p>
                            </div>

                            <div className="border rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-2">Rate Limiting & Brute Force Protection</h3>
                                <p className="opacity-80">
                                    Sophisticated rate limiting is implemented on all authentication endpoints with
                                    IP-based tracking and exponential backoff. Suspicious activity detection
                                    automatically increases security levels when potential attacks are detected.
                                </p>
                            </div>

                            <div className="border rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-2">Data Validation</h3>
                                <p className="opacity-80">
                                    Every user input is validated through multiple layers using Zod schema validation
                                    both client-side and server-side. This type-safe approach ensures input consistency,
                                    prevents injection attacks, and guarantees data integrity.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Security Best Practices</h2>
                        <div className="border rounded-lg p-6 mb-6">
                            <p className="mb-4">
                                Modern Auth implements security best practices at every level of the application stack:
                            </p>
                            <ul className="list-disc list-inside space-y-2 opacity-80">
                                <li><span className="font-medium">OWASP Top 10 Compliance</span> - Protection against
                                    all common vulnerabilities
                                </li>
                                <li><span className="font-medium">GDPR-Readiness</span> - Built-in features for data
                                    minimization and user consent
                                </li>
                                <li><span className="font-medium">Security Headers</span> - Comprehensive HTTP security
                                    headers configuration
                                </li>
                                <li><span className="font-medium">Dependency Scanning</span> - Automated vulnerability
                                    detection in dependencies
                                </li>
                                <li><span className="font-medium">Audit Logging</span> - Detailed security event logging
                                    for forensic analysis
                                </li>
                                <li><span className="font-medium">Secure Defaults</span> - All security features enabled
                                    by default with secure configuration
                                </li>
                                <li><span className="font-medium">Principle of Least Privilege</span> - Granular
                                    permission system for limited access
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Multi-Factor Authentication</h2>
                        <div className="border rounded-lg p-6 mb-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Available MFA Methods</h3>
                                    <ul className="list-disc list-inside space-y-2 opacity-80">
                                        <li>Time-based One-Time Password (TOTP)</li>
                                        <li>WebAuthn/FIDO2 hardware security keys</li>
                                        <li>Email verification codes</li>
                                        <li>SMS verification (optional)</li>
                                        <li>Recovery codes for backup access</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">MFA Implementation</h3>
                                    <p className="opacity-80 mb-4">
                                        Our MFA implementation follows NIST guidelines for secure multi-factor
                                        authentication. The system is designed to be both secure and user-friendly, with
                                        step-by-step guidance for users setting up additional authentication factors.
                                    </p>
                                    <p className="opacity-80">
                                        Users can manage their MFA settings from their profile, including adding or
                                        removing authentication methods and generating new recovery codes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <div className="bg-primary/10 dark:bg-primary/5 rounded-xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Next-Level Security for Your Application</h2>
                        <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                            Implement Modern Auth to provide your users with enterprise-grade security protections
                            without the enterprise-level complexity.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/auth/register">
                                <Button size="lg">Get Started</Button>
                            </Link>
                            <Link href="/features">
                                <Button variant="outline" size="lg">Explore Features</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}