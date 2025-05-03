"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {signOut} from "next-auth/react";
import Button from "@/components/ui/Button";
import {UserType} from "@/types/user";
import {LogOut, User} from "lucide-react";
import {useDemoMode} from "@/context/demo/DemoContext";
import {useToast} from "@/components/ui/Toast";
import ThemedBox from "@/components/common/ThemedBox";
import {ThemedContainer} from "@/components/common/ThemedContainer";

interface UserProfileProps {
    user: UserType;
}

export default function UserProfile({user}: UserProfileProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const {isDemoMode, showDemoToast} = useDemoMode();
    const {showToast} = useToast();

    const handleSignOut = async () => {
        setIsLoading(true);
        await signOut({redirect: false});
        showToast("Successfully signed out", "success");
        router.push("/auth/login");
    };

    return (
        <ThemedContainer padding="md" className="space-y-6">
            <div className="text-center">
                <div
                    className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                    {user.image ? (
                        <Image
                            src={user.image}
                            alt={user.name || "User profile picture"}
                            width={96}
                            height={96}
                            className="rounded-full object-cover"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl font-medium text-white">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </span>
                        </div>
                    )}
                </div>

                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-muted text-sm mt-1">{user.email}</p>

                <div
                    className="mt-3 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {user.role}
                </div>
            </div>

            <ThemedBox border="top" className="pt-5">
                <div className="space-y-2">
                    <p className="text-sm text-muted flex justify-between">
                        <span className="font-medium">User ID:</span>
                        <span className="truncate max-w-[180px]">{user.id}</span>
                    </p>
                    {user.emailVerified && (
                        <p className="text-sm text-muted flex justify-between">
                            <span className="font-medium">Email Verified:</span>
                            <span>{new Date(user.emailVerified).toLocaleDateString()}</span>
                        </p>
                    )}
                </div>
            </ThemedBox>

            <div className="space-y-3 pt-2">
                <Button
                    fullWidth
                    variant="outline"
                    onClick={() => {
                        if (isDemoMode) {
                            showDemoToast("Profile editing is disabled in demo mode.", "warning");
                        } else {
                            router.push("/profile");
                        }
                    }}
                    leftIcon={<User className="w-4 h-4"/>}
                >
                    Edit Profile
                </Button>

                {isDemoMode && (
                    <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg text-sm">
                        <p className="text-center text-muted">
                            <span className="font-medium">Demo Mode:</span> Profile editing is disabled
                        </p>
                    </div>
                )}

                <Button
                    fullWidth
                    variant="destructive"
                    onClick={handleSignOut}
                    isLoading={isLoading}
                    leftIcon={<LogOut className="w-4 h-4"/>}
                >
                    Sign Out
                </Button>
            </div>
        </ThemedContainer>
    );
}
