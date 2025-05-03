"use client";

import React, {createContext, useContext, useState} from "react";

// Create context for Tabs state
type TabsContextType = {
    value: string;
    onChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function useTabs() {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error("Tabs components must be used within a Tabs provider");
    }
    return context;
}

interface TabsProps {
    defaultValue: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
    className?: string;
}

export function Tabs({defaultValue, onValueChange, children, className = ""}: TabsProps) {
    const [value, setValue] = useState(defaultValue);

    const onChange = (newValue: string) => {
        setValue(newValue);
        onValueChange?.(newValue);
    };

    return (
        <TabsContext.Provider value={{value, onChange}}>
            <div className={className}>{children}</div>
        </TabsContext.Provider>
    );
}

interface TabsListProps {
    children: React.ReactNode;
    className?: string;
}

export function TabsList({children, className = ""}: TabsListProps) {
    return <div className={className} role="tablist">{children}</div>;
}

interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

export function TabsTrigger({value, children, className = "", disabled = false}: TabsTriggerProps) {
    const {value: selectedValue, onChange} = useTabs();
    const isSelected = selectedValue === value;

    return (
        <button
            role="tab"
            aria-selected={isSelected}
            disabled={disabled}
            onClick={() => onChange(value)}
            className={`
        relative transition-all duration-200 outline-none
        ${isSelected ?
                "border-b-2 border-primary font-medium text-primary" :
                "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
        >
            {children}
            {isSelected && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"/>
            )}
        </button>
    );
}

interface TabsContentProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

export function TabsContent({value, children, className = ""}: TabsContentProps) {
    const {value: selectedValue} = useTabs();
    const isSelected = selectedValue === value;

    if (!isSelected) return null;

    return (
        <div
            role="tabpanel"
            tabIndex={0}
            className={className}
        >
            {children}
        </div>
    );
}