"use client";

import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { useDemoMode } from "@/context/demo/DemoContext";

export default function ToastDemo() {
  const { showToast } = useToast();
  const { isDemoMode, showDemoToast } = useDemoMode();

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Global Toast Demo</h2>
        <p className="text-sm text-muted mb-4">
          These toasts can be used anywhere in the application and don&apos;t require demo mode.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button 
            onClick={() => showToast("This is an error notification", "error")}
            variant="destructive"
          >
            Show Error Toast
          </Button>
          
          <Button 
            onClick={() => showToast("This is a warning notification", "warning")}
            variant="secondary"
          >
            Show Warning Toast
          </Button>
          
          <Button 
            onClick={() => showToast("This is a success notification", "success")}
            variant="primary"
          >
            Show Success Toast
          </Button>
          
          <Button 
            onClick={() => showToast("This is an info notification", "info")}
            variant="outline"
          >
            Show Info Toast
          </Button>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <h2 className="text-xl font-semibold mb-4">Demo Mode Toast Demo</h2>
        <p className="text-sm text-muted mb-4">
          These toasts only work when demo mode is enabled.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button 
            onClick={() => showDemoToast("This is a demo mode error notification", "error")}
            variant="destructive"
            disabled={!isDemoMode}
          >
            Show Demo Error Toast
          </Button>
          
          <Button 
            onClick={() => showDemoToast("This is a demo mode warning notification", "warning")}
            variant="secondary"
            disabled={!isDemoMode}
          >
            Show Demo Warning Toast
          </Button>
          
          <Button 
            onClick={() => showDemoToast("This is a demo mode success notification", "success")}
            variant="primary"
            disabled={!isDemoMode}
          >
            Show Demo Success Toast
          </Button>
        </div>
        
        {!isDemoMode && (
          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 rounded-lg">
            <p className="text-sm font-medium">Demo mode is not enabled</p>
            <p className="text-sm mt-1">
              Set <code className="bg-amber-100 dark:bg-amber-800 px-1 py-0.5 rounded">DEMO=true</code> in your environment variables to test demo mode toasts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}