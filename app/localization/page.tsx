import ComingSoon from "@/components/common/ComingSoon";

export const metadata = {
  title: "Multiple Languages Support - Modern Auth",
  description: "Internationalization and localization support for Modern Auth platform",
};

export default function LocalizationPage() {
  return (
    <ComingSoon 
      title="Multiple Languages Support"
      description="We're working on adding comprehensive internationalization and localization support to Modern Auth. Soon you'll be able to translate the platform into any language."
      starsGoal={180}
      additionalContent={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/50 text-left">
          <div>
            <h3 className="font-medium text-sm mb-2 flex items-center">
              <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-800/30 inline-flex items-center justify-center mr-2">
                <span className="text-blue-600 dark:text-blue-400">📚</span>
              </span>
              Supported Languages
            </h3>
            <ul className="text-xs space-y-1 ml-8 list-disc">
              <li>English</li>
              <li>Spanish</li>
              <li>French</li>
              <li>German</li>
              <li>Japanese</li>
              <li>+ More to come</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-2 flex items-center">
              <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-800/30 inline-flex items-center justify-center mr-2">
                <span className="text-blue-600 dark:text-blue-400">🔧</span>
              </span>
              Features
            </h3>
            <ul className="text-xs space-y-1 ml-8 list-disc">
              <li>Language switcher</li>
              <li>Auto-detection</li>
              <li>RTL support</li>
              <li>Date/time localization</li>
              <li>Number formatting</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}