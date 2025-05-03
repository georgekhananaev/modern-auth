import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with George Khananaev. Ask questions, request features, or get support for your authentication implementation.",
  keywords: ["contact", "support", "help", "questions", "feedback", "modern auth"],
  openGraph: {
    title: "Contact Us | Modern Auth",
    description: "Get in touch with George Khananaev. Ask questions, request features, or get support for your authentication implementation.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/images/auth-hero.svg",
        width: 1200,
        height: 630,
        alt: "Modern Auth Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Modern Auth",
    description: "Get in touch with George Khananaev. Ask questions, request features, or get support for your authentication implementation.",
    images: ["/images/auth-hero.svg"],
  },
  alternates: {
    canonical: "/contact",
  },
};