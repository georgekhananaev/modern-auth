import ComingSoon from "@/components/common/ComingSoon";

export const metadata = {
  title: "User Invitations - Modern Auth",
  description: "Manage invitations for new users",
};

export default function InvitationsPage() {
  return (
    <ComingSoon 
      title="User Invitations"
      description="Our invitation management system is under development. Soon you'll be able to invite users and track invitation statuses."
      starsGoal={100}
      additionalContent={
        <div className="text-sm bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md text-left shadow-sm">
          <p className="font-medium mb-2">Coming features:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div>Bulk invitations</div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div>Custom invitation messages</div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div>Invitation expiration settings</div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div>Pre-assigned roles and teams</div>
            </div>
          </div>
        </div>
      }
    />
  );
}