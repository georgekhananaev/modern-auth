"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { X, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { useTheme } from "@/context/theme/useTheme";

export type ToastType = "error" | "warning" | "success" | "info";

interface ToastContextProps {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  hideToast: () => void;
}

const ToastContext = createContext<ToastContextProps>({
  showToast: () => {},
  hideToast: () => {},
});

export const useToast = () => useContext(ToastContext);

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<ToastType>("info");
  const { isDarkMode } = useTheme();
  
  // Listen for demo toast events
  useEffect(() => {
    const handleDemoToast = (event: CustomEvent<{ message: string; type: ToastType }>) => {
      const { message, type } = event.detail;
      showToast(message, type);
    };
    
    document.addEventListener('demo-toast', handleDemoToast as EventListener);
    return () => document.removeEventListener('demo-toast', handleDemoToast as EventListener);
  }, []);
  
  const showToast = (newMessage: string, newType: ToastType = "info", duration: number = 5000) => {
    setMessage(newMessage);
    setType(newType);
    setIsVisible(true);
    
    // Auto-hide toast after specified duration
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    
    // Clear timeout if showToast is called again before the toast is hidden
    return () => clearTimeout(timer);
  };
  
  const hideToast = () => {
    // Apply fadeOut animation before removing from DOM
    const toastElement = document.querySelector('[data-toast]');
    if (toastElement) {
      toastElement.classList.remove('animate-fadeIn');
      toastElement.classList.add('animate-fadeOut');
      
      // Wait for animation to complete before hiding
      setTimeout(() => {
        setIsVisible(false);
      }, 200); // Match the animation duration
    } else {
      setIsVisible(false);
    }
  };

  // Get toast styles based on type and theme
  const getToastStyles = () => {
    switch (type) {
      case "error":
        return {
          bg: isDarkMode ? "bg-red-800" : "bg-red-500",
          border: isDarkMode ? "border border-red-900" : "border border-red-600",
          text: isDarkMode ? "text-red-50" : "text-white",
          icon: <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />,
          iconColor: isDarkMode ? "text-red-100" : "text-white",
          buttonHover: isDarkMode ? "hover:bg-red-900/50" : "hover:bg-red-600/50"
        };
      case "warning":
        return {
          bg: isDarkMode ? "bg-amber-700" : "bg-amber-500",
          border: isDarkMode ? "border border-amber-800" : "border border-amber-600",
          text: isDarkMode ? "text-amber-50" : "text-amber-950",
          icon: <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />,
          iconColor: isDarkMode ? "text-amber-100" : "text-amber-950",
          buttonHover: isDarkMode ? "hover:bg-amber-800/50" : "hover:bg-amber-600/50"
        };
      case "success":
        return {
          bg: isDarkMode ? "bg-green-800" : "bg-green-600",
          border: isDarkMode ? "border border-green-900" : "border border-green-700",
          text: isDarkMode ? "text-green-50" : "text-white",
          icon: <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />,
          iconColor: isDarkMode ? "text-green-100" : "text-white",
          buttonHover: isDarkMode ? "hover:bg-green-900/50" : "hover:bg-green-700/50"
        };
      case "info":
      default:
        return {
          bg: isDarkMode ? "bg-blue-800" : "bg-blue-600",
          border: isDarkMode ? "border border-blue-900" : "border border-blue-700",
          text: isDarkMode ? "text-blue-50" : "text-white",
          icon: <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />,
          iconColor: isDarkMode ? "text-blue-100" : "text-white",
          buttonHover: isDarkMode ? "hover:bg-blue-900/50" : "hover:bg-blue-700/50"
        };
    }
  };

  const toastStyles = getToastStyles();
  
  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      
      {/* Toast Notification */}
      {isVisible && (
        <div 
          className="fixed bottom-4 right-4 z-[9999] max-w-md animate-fadeIn"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-toast
        >
          <div className={`${toastStyles.bg} ${toastStyles.border} ${toastStyles.text} px-4 py-3.5 rounded-lg shadow-xl flex items-center justify-between`}>
            <div className="flex items-center">
              <span className={`${toastStyles.iconColor}`} aria-hidden="true">{toastStyles.icon}</span>
              <p className="mr-2 font-medium">{message}</p>
            </div>
            <button 
              onClick={hideToast} 
              className={`ml-2 flex-shrink-0 opacity-70 hover:opacity-100 rounded-full p-1 transition-all ${toastStyles.buttonHover}`}
              aria-label="Close notification"
            >
              <X size={18} className={toastStyles.iconColor} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}