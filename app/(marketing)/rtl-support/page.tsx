import ComingSoon from "@/components/common/ComingSoon";

export const metadata = {
  title: "RTL Support - Modern Auth",
  description: "Right-to-left language support for Modern Auth platform",
};

export default function RtlSupportPage() {
  return (
    <ComingSoon 
      title="RTL Support"
      description="We're adding comprehensive support for right-to-left languages like Arabic, Hebrew, and Persian. This will include proper text alignment, UI mirroring, and cultural adaptations."
      starsGoal={150}
      additionalContent={
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800/50 text-left">
          <h3 className="font-medium text-sm mb-2 flex items-center">
            <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-800/30 inline-flex items-center justify-center mr-2">
              <span className="text-purple-600 dark:text-purple-400">🌍</span>
            </span>
            Supported RTL Languages
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
              </div>
              <span className="text-xs">Arabic</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
              </div>
              <span className="text-xs">Hebrew</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
              </div>
              <span className="text-xs">Persian (Farsi)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
              </div>
              <span className="text-xs">Urdu</span>
            </div>
          </div>
          
          <h3 className="font-medium text-sm mt-4 mb-2 flex items-center">
            <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-800/30 inline-flex items-center justify-center mr-2">
              <span className="text-purple-600 dark:text-purple-400">⚙️</span>
            </span>
            RTL Features
          </h3>
          <ul className="text-xs space-y-1 ml-4 list-disc grid grid-cols-2 gap-x-4">
            <li>Text alignment</li>
            <li>UI mirroring</li>
            <li>Bidirectional text</li>
            <li>Cultural adaptations</li>
            <li>Number formatting</li>
            <li>Date formatting</li>
          </ul>
        </div>
      }
    />
  );
}