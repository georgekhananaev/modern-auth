import {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {connectToDatabase} from "@/lib/db/connect";
import {User} from "@/lib/db/models/user";
import {verifyPassword} from "./password-utils";
import {UserType} from "@/types/user";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                }

                await connectToDatabase();

                const user = await User.findOne({email: credentials.email});

                if (!user) {
                    throw new Error("User not found");
                }

                const isPasswordValid = await verifyPassword(
                    credentials.password,
                    user.password
                );

                if (!isPasswordValid) {
                    throw new Error("Invalid password");
                }

                // Handle MongoDB's ObjectId
                const userId = user._id?.toString() || String(user._id) || "";
                return {
                    id: userId,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.role = (user as UserType).role;
            }
            return token;
        },
        async session({session, token}) {
            if (token && session.user) {
                // Add user data to session with type assertion
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const user = session.user as any;
                user.id = token.id as string;
                user.email = token.email as string;
                user.name = token.name as string;
                user.role = token.role as string;
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth/login",
        newUser: "/auth/register",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    secret: process.env.NEXTAUTH_SECRET || "your-super-secret-key-change-this-in-production",
};
