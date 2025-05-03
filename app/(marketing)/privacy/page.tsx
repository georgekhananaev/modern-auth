import {Metadata} from 'next/types';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | Modern Auth',
    description: 'Learn how Modern Auth collects, uses, and protects your personal information.',
    openGraph: {
        title: 'Privacy Policy | Modern Auth',
        description: 'Learn how Modern Auth collects, uses, and protects your personal information.',
        url: '/privacy',
        type: 'website',
        images: [
            {
                url: '/images/auth-hero-bg.webp',
                width: 1200,
                height: 630,
                alt: 'Modern Auth',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Privacy Policy | Modern Auth',
        description: 'Learn how Modern Auth collects, uses, and protects your personal information.',
        images: ['/images/auth-hero-bg.webp'],
    },
    alternates: {
        canonical: '/privacy',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
                {/* Header with updated styling */}
                <div className="mb-12 pb-8 border-b">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-sm opacity-70">Last updated: May 3, 2024</p>
                    <div className="flex flex-wrap gap-3 mt-6">
                        <Link
                            href="/terms"
                            className="text-sm px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Table of Contents */}
                <div className="mb-10 p-6 rounded-xl bg-primary/10 dark:bg-primary/5">
                    <h2 className="text-lg font-semibold mb-4">Contents</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#introduction" className="text-primary hover:underline">Introduction</a>
                        </li>
                        <li>
                            <a href="#information-we-collect" className="text-primary hover:underline">Information We
                                Collect</a>
                        </li>
                        <li>
                            <a href="#how-we-use" className="text-primary hover:underline">How We Use Your
                                Information</a>
                        </li>
                        <li>
                            <a href="#data-security" className="text-primary hover:underline">Data Security</a>
                        </li>
                        <li>
                            <a href="#cookies" className="text-primary hover:underline">Cookies and Tracking
                                Technologies</a>
                        </li>
                        <li>
                            <a href="#third-party" className="text-primary hover:underline">Third-Party Services</a>
                        </li>
                        <li>
                            <a href="#childrens-privacy" className="text-primary hover:underline">Children&apos;s
                                Privacy</a>
                        </li>
                        <li>
                            <a href="#changes" className="text-primary hover:underline">Changes to This Privacy
                                Policy</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-primary hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {/* Introduction */}
                    <section id="introduction" className="mb-10">
                        <p className="text-lg leading-relaxed">
                            At Modern Auth, we take your privacy seriously. This Privacy Policy explains how we collect,
                            use, disclose, and safeguard your information when you use our service.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section id="information-we-collect" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold">Information We Collect</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                We collect information you provide directly to us when you:
                            </p>
                            <ul className="list-disc pl-5 my-4">
                                <li>Create an account</li>
                                <li>Fill out forms on our website</li>
                                <li>Communicate with us</li>
                                <li>Use our authentication services</li>
                            </ul>

                            <p>
                                This information may include:
                            </p>
                            <ul className="list-disc pl-5 my-4">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Password (encrypted)</li>
                                <li>Profile information</li>
                                <li>Usage data</li>
                            </ul>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section id="how-we-use" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                We may use the information we collect from you to:
                            </p>
                            <ul className="list-disc pl-5 my-4">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions</li>
                                <li>Send you technical notices and support messages</li>
                                <li>Respond to your comments and questions</li>
                                <li>Develop new products and services</li>
                                <li>Monitor and analyze usage patterns</li>
                                <li>Detect, investigate, and prevent fraudulent activities</li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section id="data-security" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold">Data Security</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                We implement appropriate technical and organizational measures to protect the security
                                of
                                your personal information. However, please be aware that no method of transmission over
                                the
                                Internet or electronic storage is 100% secure and we cannot guarantee absolute security.
                            </p>
                        </div>
                    </section>

                    {/* Cookies and Tracking Technologies */}
                    <section id="cookies" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold">Cookies and Tracking Technologies</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                We use cookies and similar tracking technologies to track activity on our website and
                                collect
                                certain information. Cookies are files with a small amount of data which may include an
                                anonymous
                                unique identifier. You can instruct your browser to refuse all cookies or to indicate
                                when a cookie
                                is being sent.
                            </p>
                        </div>
                    </section>

                    {/* Third-Party Services */}
                    <section id="third-party" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold">Third-Party Services</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                Our service may contain links to third-party websites or services that are not owned or
                                controlled
                                by Modern Auth. We have no control over, and assume no responsibility for, the content,
                                privacy policies,
                                or practices of any third-party websites or services.
                            </p>
                        </div>
                    </section>

                    {/* Children's Privacy */}
                    <section id="childrens-privacy" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold">Children&apos;s Privacy</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                Our service does not address anyone under the age of 13. We do not knowingly collect
                                personally
                                identifiable information from children under 13. If we discover that a child under 13
                                has provided
                                us with personal information, we will delete this from our servers.
                            </p>
                        </div>
                    </section>

                    {/* Changes to This Privacy Policy */}
                    <section id="changes" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by
                                posting
                                the new Privacy Policy on this page and updating the &quot;last updated&quot; date at
                                the top of this page.
                            </p>
                        </div>
                    </section>

                    {/* Contact Us */}
                    <section id="contact" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold">Contact Us</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="mt-4 p-4 rounded-lg bg-primary/5 inline-block">
                                <a href="mailto:privacy@modern-auth.example.com"
                                   className="text-primary font-medium hover:underline flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    privacy@modern-auth.example.com
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
}