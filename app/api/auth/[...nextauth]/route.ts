import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";

// Extend auth options to ensure redirection after signout works
const extendedAuthOptions = {
  ...authOptions,
  callbacks: {
    ...authOptions.callbacks,
    async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
      // If it's a signout operation, redirect to home page
      if (url.includes('signout')) {
        return baseUrl;
      }
      // Handle URLs that are internally available
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      }
      // Handle external URLs
      else if (new URL(url).origin === baseUrl) {
        return url;
      }
      return baseUrl;
    }
  }
};

const handler = NextAuth(extendedAuthOptions);

export { handler as GET, handler as POST };
