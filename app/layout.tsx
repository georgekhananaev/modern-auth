import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/app/AppProvider";
import { ThemeScript } from "@/context/theme/ThemeScript";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Modern Auth - Complete Authentication Solution",
    template: "%s | Modern Auth"
  },
  description: "A modern authentication system with Next.js, MongoDB, and TypeScript",
  keywords: ["authentication", "nextjs", "mongodb", "typescript", "auth", "security"],
  authors: [{ name: "George Khananaev" }],
  creator: "George Khananaev",
  publisher: "Modern Auth",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/reactatomics/modern-auth",
    siteName: "Modern Auth",
    title: "Modern Auth - Complete Authentication Solution",
    description: "A modern authentication system with Next.js, MongoDB, and TypeScript",
    images: [
      {
        url: "/images/auth-hero.svg",
        width: 1200,
        height: 630,
        alt: "Modern Auth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Auth - Complete Authentication Solution",
    description: "A modern authentication system with Next.js, MongoDB, and TypeScript",
    images: ["/images/auth-hero.svg"],
    creator: "@georgekhananaev",
  },
  metadataBase: new URL("https://github.com/reactatomics/modern-auth"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className}>
        <AppProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-4 pb-4">{children}</main>
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
