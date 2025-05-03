import ComingSoon from "@/components/common/ComingSoon";

export const metadata = {
  title: "Security Audit Log - Modern Auth",
  description: "Review detailed security audit logs for your account and organization",
};

export default function AuditLogPage() {
  return (
    <ComingSoon 
      title="Security Audit Log"
      description="Our comprehensive security audit log system is under development. Soon you'll be able to track all security events and user actions."
      starsGoal={250}
      additionalContent={
        <div className="text-sm bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md text-left">
          <p className="font-medium mb-2">Coming features:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Real-time audit logging</li>
            <li>Exportable audit reports</li>
            <li>Configurable alerts</li>
            <li>Advanced filtering</li>
          </ul>
        </div>
      }
    />
  );
}