"use client";

import {useState} from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({
        type: null,
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulating form submission
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            setSubmitStatus({
                type: "success",
                message: "Your message has been sent! We'll get back to you soon.",
            });
        } catch {
            setSubmitStatus({
                type: "error",
                message: "Something went wrong. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <div
                        className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                        Enterprise Support
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch with Our Team</h1>
                    <p className="text-lg opacity-80">
                        Our authentication experts are ready to help you implement enterprise-grade security for your
                        applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-8 mb-16">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Sales & Partnerships</h3>
                            <p className="opacity-80">sales@modern-auth.example.com</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
                            <p className="opacity-80">Tel Aviv, Israel</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Enterprise Support</h3>
                            <p className="opacity-80">support@modern-auth.example.com</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Social</h3>
                            <div className="flex space-x-4">
                                <a href="https://twitter.com/georgekhananaev"
                                   className="hover:text-primary transition-colors" aria-label="Twitter">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                    </svg>
                                </a>
                                <a href="https://github.com/georgekhananaev"
                                   className="hover:text-primary transition-colors" aria-label="GitHub">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/georgekhananaev/"
                                   className="hover:text-primary transition-colors" aria-label="LinkedIn">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <Input
                                        type="text"
                                        label="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        label="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <Input
                                    type="text"
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="input w-full focus:border-primary"
                                />
                            </div>

                            {submitStatus.type && (
                                <div
                                    className={`p-4 rounded-md ${
                                        submitStatus.type === "success"
                                            ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                                            : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
                                    }`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            <div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="border rounded-lg p-8 text-center bg-primary/10 dark:bg-primary/5">
                    <h2 className="text-2xl font-bold mb-4">Enterprise Solutions</h2>
                    <p className="opacity-80 mb-6 max-w-xl mx-auto">
                        Need a customized authentication solution for your enterprise? Our team offers dedicated
                        support,
                        custom implementation, and tailored SLAs for businesses of all sizes.
                    </p>
                    <div
                        className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 flex-wrap justify-center sm:gap-4 max-w-lg mx-auto">
                        <Button size="lg" className="w-full sm:w-auto">Schedule Enterprise Demo</Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">View Documentation</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}