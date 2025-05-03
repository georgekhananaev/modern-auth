import ComingSoon from "@/components/common/ComingSoon";

export const metadata = {
    title: "Multi-Factor Authentication - Modern Auth",
    description: "Configure multi-factor authentication settings for your account",
};

export default function MFAPage() {
    return (
        <ComingSoon
            title="Multi-Factor Authentication"
            description="We're working on implementing secure multi-factor authentication to better protect your account. This feature will be available soon."
            starsGoal={150}
        />
    );
}