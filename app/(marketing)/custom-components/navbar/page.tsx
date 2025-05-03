"use client";

import {useTheme} from "@/context/theme/useTheme";
import Navbar from "@/components/sections/Navbar";
import ThemedPreElement from "@/components/common/ThemedPreElement";
import ComingSoon from "@/components/common/ComingSoon";

export default function NavbarComponentPage() {
    const {isDarkMode} = useTheme();

    // Example usage code
    const navbarUsageCode = `// Basic usage
import Navbar from "@/components/sections/Navbar";

export default function MyPage() {
  return (
    <>
      <Navbar logoText="My App" />
      {/* Your page content here */}
    </>
  );
}`;

    const navbarPropsCode = `// Props
interface NavbarProps {
  logoText?: string;    // Custom text for the logo
  className?: string;   // Additional CSS classes
}`;

    const navLinkStructure = `// Navigation structure
interface NavLink {
  id: string;           // Unique identifier
  title: string;        // Display text
  href: string;         // Link URL
  iconName: IconName;   // Icon from the Icon component
  description?: string; // Optional description
  badge?: string;       // Optional badge text (e.g., "New", "Coming")
  badgeBackgroundColor?: string; // Badge styling
  badgeTextColor?: string;       // Badge styling
  children?: NavLink[]; // Nested menu items
}`;

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Navbar Component</h1>

            <div className="mb-8 rounded-lg shadow-md p-6" style={{
                backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(249, 250, 251, 0.8)',
                borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)',
            }}>
                <h2 className="text-xl font-semibold mb-3">Component Description</h2>
                <p className="mb-4">
                    The Navbar component is a responsive, feature-rich navigation bar that supports multi-level
                    dropdowns,
                    user authentication states, theme toggling, and mobile responsiveness. It&apos;s designed to provide
                    a
                    seamless navigation experience across all devices and screen sizes.
                </p>

                <h3 className="text-lg font-medium mb-2 mt-6">Features:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Responsive design with mobile menu support</li>
                    <li>Multi-level dropdown menus</li>
                    <li>Authentication-aware user section</li>
                    <li>Dark/light theme toggle button</li>
                    <li>Active link highlighting</li>
                    <li>Badge support for menu items</li>
                    <li>Keyboard navigation and accessibility</li>
                    <li>Smooth animations with Framer Motion</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">Usage:</h3>
                <div className="mb-6">
                    <ThemedPreElement>
                        {navbarUsageCode}
                    </ThemedPreElement>
                </div>

                <h3 className="text-lg font-medium mb-2">Props:</h3>
                <div className="mb-6">
                    <ThemedPreElement>
                        {navbarPropsCode}
                    </ThemedPreElement>
                </div>

                <h3 className="text-lg font-medium mb-2">Navigation Structure:</h3>
                <div className="mb-6">
                    <p className="mb-2 text-sm">
                        The Navbar component uses a nested structure for menu items. Each item can have children for
                        submenu dropdowns.
                    </p>
                    <ThemedPreElement>
                        {navLinkStructure}
                    </ThemedPreElement>
                </div>

                <h3 className="text-lg font-medium mb-2">Customization:</h3>
                <p className="mb-4">
                    To customize the navigation items, you&apos;ll need to modify the <code>initialNavLinks</code> array
                    in the Navbar component.
                    Each item can have its own icon, badge, description, and nested children items for dropdown menus.
                </p>
            </div>

            <div className="mt-12 mb-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Component Demo</h2>
            </div>

            <div className="mb-8 border rounded-lg shadow-md overflow-hidden" style={{
                borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)',
            }}>
                <div className="p-4 border-b" style={{
                    backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.7)' : 'rgba(249, 250, 251, 0.8)',
                    borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)',
                }}>
                    <h3 className="font-medium">Default Navbar</h3>
                    <p className="text-sm mt-1">This is the standard navbar used throughout the application.</p>
                </div>
                <div className="border" style={{
                    borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)',
                }}>
                    <Navbar/>
                </div>
            </div>

            <div className="mb-8 border rounded-lg shadow-md overflow-hidden" style={{
                borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)',
            }}>
                <div className="p-4 border-b" style={{
                    backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.7)' : 'rgba(249, 250, 251, 0.8)',
                    borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)',
                }}>
                    <h3 className="font-medium">Custom Logo Text</h3>
                    <p className="text-sm mt-1">Navbar with custom logo text.</p>
                </div>
                <div className="border" style={{
                    borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)',
                }}>
                    <Navbar logoText="Custom Brand"/>
                </div>
            </div>

            <div className="mt-16">
                <ComingSoon
                    title="Advanced Navbar Customization"
                    description="We're working on a comprehensive Navbar customization guide with additional examples and configuration options."
                    showBackButton={false}
                />
            </div>
        </div>
    );
}