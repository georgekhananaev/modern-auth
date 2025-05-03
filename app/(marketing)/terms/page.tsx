import {Metadata} from 'next/types';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service | Modern Auth',
    description: 'Read the terms and conditions for using the Modern Auth service.',
    openGraph: {
        title: 'Terms of Service | Modern Auth',
        description: 'Read the terms and conditions for using the Modern Auth service.',
        url: '/terms',
        type: 'website',
        images: [
            {
                url: '/images/auth-hero.svg',
                width: 1200,
                height: 630,
                alt: 'Modern Auth',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Terms of Service | Modern Auth',
        description: 'Read the terms and conditions for using the Modern Auth service.',
        images: ['/images/auth-hero.svg'],
    },
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsOfServicePage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
                {/* Header with updated styling */}
                <div className="mb-12 pb-8 border-b">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-sm opacity-70">Last updated: May 3, 2024</p>
                    <div className="flex flex-wrap gap-3 mt-6">
                        <Link
                            href="/privacy"
                            className="text-sm px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                        >
                            Privacy Policy
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
                    <ul className="space-y-2 text-sm grid md:grid-cols-2">
                        <li>
                            <a href="#introduction" className="text-primary hover:underline">Introduction</a>
                        </li>
                        <li>
                            <a href="#acceptance" className="text-primary hover:underline">1. Acceptance of Terms</a>
                        </li>
                        <li>
                            <a href="#description" className="text-primary hover:underline">2. Description of
                                Service</a>
                        </li>
                        <li>
                            <a href="#accounts" className="text-primary hover:underline">3. User Accounts</a>
                        </li>
                        <li>
                            <a href="#conduct" className="text-primary hover:underline">4. User Conduct</a>
                        </li>
                        <li>
                            <a href="#intellectual-property" className="text-primary hover:underline">5. Intellectual
                                Property</a>
                        </li>
                        <li>
                            <a href="#liability" className="text-primary hover:underline">6. Limitation of Liability</a>
                        </li>
                        <li>
                            <a href="#termination" className="text-primary hover:underline">7. Termination</a>
                        </li>
                        <li>
                            <a href="#changes" className="text-primary hover:underline">8. Changes to Terms</a>
                        </li>
                        <li>
                            <a href="#governing-law" className="text-primary hover:underline">9. Governing Law</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-primary hover:underline">10. Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {/* Introduction */}
                    <section id="introduction" className="mb-10">
                        <div className="p-6 rounded-lg bg-primary/10 dark:bg-primary/5 border border-primary/10">
                            <p className="text-lg leading-relaxed">
                                Welcome to Modern Auth. These Terms of Service (&quot;Terms&quot;) govern your access to
                                and use of our
                                website and services. By accessing or using Modern Auth, you agree to be bound by these
                                Terms.
                            </p>
                        </div>
                    </section>

                    {/* 1. Acceptance of Terms */}
                    <section id="acceptance" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="font-bold">1</span>
                            </div>
                            <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                By accessing or using our service, you agree to be bound by these Terms. If you disagree
                                with
                                any part of the terms, you may not access the service.
                            </p>
                        </div>
                    </section>

                    {/* 2. Description of Service */}
                    <section id="description" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="font-bold">2</span>
                            </div>
                            <h2 className="text-2xl font-bold">Description of Service</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                Modern Auth provides authentication and user management services for web applications.
                                Our service
                                includes user registration, login, password management, and related features to help
                                developers
                                implement secure authentication systems.
                            </p>
                        </div>
                    </section>

                    {/* 3. User Accounts */}
                    <section id="accounts" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="font-bold">3</span>
                            </div>
                            <h2 className="text-2xl font-bold">User Accounts</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                To use certain features of our service, you may need to create an account. You are
                                responsible for:
                            </p>
                            <ul className="list-disc pl-5 my-4 space-y-2">
                                <li>Maintaining the confidentiality of your account credentials</li>
                                <li>All activities that occur under your account</li>
                                <li>Notifying us immediately of any unauthorized use of your account</li>
                            </ul>
                        </div>
                    </section>

                    {/* 4. User Conduct */}
                    <section id="conduct" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="font-bold">4</span>
                            </div>
                            <h2 className="text-2xl font-bold">User Conduct</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                You agree not to:
                            </p>
                            <div className="my-4 space-y-2">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-4 w-4 text-red-600 dark:text-red-400" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </div>
                                    <p>Use the service for any illegal purpose</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div
                                        className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-4 w-4 text-red-600 dark:text-red-400" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </div>
                                    <p>Violate any applicable laws or regulations</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div
                                        className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-4 w-4 text-red-600 dark:text-red-400" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </div>
                                    <p>Attempt to gain unauthorized access to our systems</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div
                                        className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-4 w-4 text-red-600 dark:text-red-400" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </div>
                                    <p>Interfere with the proper functioning of the service</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div
                                        className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-4 w-4 text-red-600 dark:text-red-400" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </div>
                                    <p>Use the service to transmit harmful code or content</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5. Intellectual Property */}
                    <section id="intellectual-property" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="font-bold">5</span>
                            </div>
                            <h2 className="text-2xl font-bold">Intellectual Property</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <div
                                className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-400 dark:border-yellow-600 p-4 my-4">
                                <p className="text-yellow-800 dark:text-yellow-200">
                                    The service and its original content, features, and functionality are owned by
                                    Modern Auth and
                                    are protected by international copyright, trademark, patent, trade secret, and other
                                    intellectual
                                    property laws.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 6. Limitation of Liability */}
                    <section id="liability" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="font-bold">6</span>
                            </div>
                            <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                In no event shall Modern Auth, its directors, employees, partners, agents, suppliers, or
                                affiliates
                                be liable for any indirect, incidental, special, consequential, or punitive damages,
                                including
                                without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                            </p>
                        </div>
                    </section>

                    {/* 7. Termination */}
                    <section id="termination" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="font-bold">7</span>
                            </div>
                            <h2 className="text-2xl font-bold">Termination</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                We may terminate or suspend your account and access to the service immediately, without
                                prior notice
                                or liability, for any reason, including without limitation if you breach the Terms.
                            </p>
                        </div>
                    </section>

                    {/* 8. Changes to Terms */}
                    <section id="changes" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="font-bold">8</span>
                            </div>
                            <h2 className="text-2xl font-bold">Changes to Terms</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                We reserve the right to modify or replace these Terms at any time. We will provide
                                notice of any
                                changes by posting the new Terms on this page and updating the &quot;last
                                updated&quot; date.
                            </p>
                        </div>
                    </section>

                    {/* 9. Governing Law */}
                    <section id="governing-law" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="font-bold">9</span>
                            </div>
                            <h2 className="text-2xl font-bold">Governing Law</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of the United
                                States,
                                without regard to its conflict of law provisions.
                            </p>
                        </div>
                    </section>

                    {/* 10. Contact Us */}
                    <section id="contact" className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="font-bold">10</span>
                            </div>
                            <h2 className="text-2xl font-bold">Contact Us</h2>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/20 ml-5">
                            <p>
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <div className="mt-4 p-4 rounded-lg bg-primary/5 inline-block">
                                <a href="mailto:legal@modern-auth.example.com"
                                   className="text-primary font-medium hover:underline flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    legal@modern-auth.example.com
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Call to Action */}
                <div className="my-12 p-6 rounded-xl bg-primary/10 dark:bg-primary/5 text-center">
                    <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
                    <p className="mb-4 opacity-80">Create an account and experience Modern Auth today</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/auth/register"
                            className="px-6 py-2 rounded-md bg-primary hover:bg-primary/90 text-white transition-colors"
                        >
                            Create Account
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-2 rounded-md border border-primary/20 hover:bg-primary/5 transition-colors"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}