import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import {Metadata} from 'next/types';
import ThemedProfileAvatars from "@/components/common/ThemedProfileAvatars";
import {ThemedContainer} from "@/components/common/ThemedContainer";

export const metadata: Metadata = {
    title: "Modern Auth - Enterprise Authentication Platform",
    description: "Enterprise-grade authentication and identity management system built for modern applications with security, compliance, and scalability at its core.",
    keywords: ["enterprise authentication", "identity management", "GDPR compliance", "secure login", "JWT", "SSO", "MFA", "Next.js Auth", "OAuth 2.0"],
    openGraph: {
        title: "Modern Auth - Enterprise Authentication Platform",
        description: "Enterprise-grade authentication and identity management system built for modern applications with security, compliance, and scalability at its core.",
        url: "/",
        type: "website",
        images: [
            {
                url: "/images/auth-hero-bg.webp",
                width: 1200,
                height: 630,
                alt: "Modern Auth",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Modern Auth - Enterprise Authentication Platform",
        description: "Enterprise-grade authentication and identity management system built for modern applications with security, compliance, and scalability at its core.",
        images: ["/images/auth-hero-bg.webp"],
    },
    alternates: {
        canonical: "/",
    },
};

export default function Home() {

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between gap-16 mb-24">
                <div className="flex-1 space-y-6">
                    <div
                        className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                        Enterprise-ready Authentication
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Create secure and modern apps with ease.
                    </h1>
                    <p className="text-lg md:text-xl opacity-80 max-w-2xl">
                        Trusted by thousands of developers to build secure, compliant, and scalable applications with
                        enterprise-grade authentication.
                    </p>
                    <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:gap-4 pt-6">
                        <Link href="/auth/register" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto">Start Free Trial</Button>
                        </Link>
                        <Link href="/features" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">Explore Platform</Button>
                        </Link>
                    </div>
                    <ThemedProfileAvatars className="mt-8"/>
                </div>
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/images/auth-hero-bg.webp"
                        alt="Modern Authentication"
                        width={500}
                        height={500}
                        priority
                        className="max-w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Authentication Platform</h2>
                    <p className="text-lg opacity-80 max-w-2xl mx-auto">
                        Comprehensive security infrastructure designed for modern applications with enterprise
                        requirements
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <ThemedContainer padding="lg" hover={true}>
                        <div className="mb-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Military-grade Security</h3>
                        <p className="opacity-80">
                            Advanced protection with Argon2id hashing, automatic key rotation, JWT token validation, and
                            comprehensive OWASP compliance.
                        </p>
                    </ThemedContainer>

                    <ThemedContainer padding="lg" hover={true}>
                        <div className="mb-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Multi-factor Authentication</h3>
                        <p className="opacity-80">
                            Secure identity verification with multiple authentication factors, including TOTP, WebAuthn,
                            passwordless login, and recovery codes.
                        </p>
                    </ThemedContainer>

                    <ThemedContainer padding="lg" hover={true}>
                        <div className="mb-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Enterprise Identity Management</h3>
                        <p className="opacity-80">
                            Comprehensive user management with role-based access control, fine-grained permissions, and
                            GDPR/CCPA compliance tools.
                        </p>
                    </ThemedContainer>

                    <ThemedContainer padding="lg" hover={true}>
                        <div className="mb-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">OAuth 2.0 & OIDC</h3>
                        <p className="opacity-80">
                            Full implementation of OAuth 2.0 and OpenID Connect standards with support for social
                            logins, enterprise SSO, and custom identity providers.
                        </p>
                    </ThemedContainer>

                    <ThemedContainer padding="lg" hover={true}>
                        <div className="mb-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Adaptive Theming System</h3>
                        <p className="opacity-80">
                            Advanced theming engine with CSS variables, hydration-safe implementation, multiple theme
                            variants, and WCAG compliant color contrast.
                        </p>
                    </ThemedContainer>

                    <ThemedContainer padding="lg" hover={true}>
                        <div className="mb-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">API & SDK Ecosystem</h3>
                        <p className="opacity-80">
                            Complete API ecosystem with webhooks, rate-limiting, audit trails, and SDKs for major
                            languages to streamline authentication integration.
                        </p>
                    </ThemedContainer>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 text-center">
                <ThemedContainer className="max-w-3xl mx-auto bg-primary/10 dark:bg-primary/5" rounded="xl" padding="xl"
                                 hover={true}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Authentication?</h2>
                    <p className="text-lg opacity-80 mb-8">
                        Join thousands of developers building secure, enterprise-ready applications with Modern Auth.
                    </p>
                    <div
                        className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:gap-4 justify-center max-w-lg mx-auto">
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
            </section>
        </div>
    );
}