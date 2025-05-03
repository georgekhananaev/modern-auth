import ComingSoon from "@/components/common/ComingSoon";

export const metadata = {
    title: "GitHub Sign In - Modern Auth",
    description: "Sign in with your GitHub account",
};

export default function GitHubSignInPage() {
    return (
        <ComingSoon
            title="GitHub Sign In"
            description="We're integrating GitHub authentication to make signing in easy for developers and teams using GitHub. This feature is currently in development."
            starsGoal={140}
        />
    );
}