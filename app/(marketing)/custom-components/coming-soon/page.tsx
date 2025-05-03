"use client";

import ComingSoon from "@/components/common/ComingSoon";
import {useTheme} from "@/context/theme/useTheme";

export default function ComingSoonComponentPage() {
    const {isDarkMode} = useTheme();

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Coming Soon Component</h1>

            <div className="mb-8 rounded-lg shadow-md p-6" style={{
                backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(249, 250, 251, 0.8)',
                borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)',
            }}>
                <h2 className="text-xl font-semibold mb-3">Component Description</h2>
                <p className="mb-4">
                    The ComingSoon component is a versatile placeholder for features that are still under development.
                    It provides a visually appealing interface with GitHub star progress tracking, email notification
                    functionality, and customizable messaging.
                </p>

                <h3 className="text-lg font-medium mb-2 mt-6">Features:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Customizable title and description</li>
                    <li>GitHub star goal progress tracking</li>
                    <li>Email notification system</li>
                    <li>Animated background and elements</li>
                    <li>Responsive design for all device sizes</li>
                    <li>Theme-aware with dark mode support</li>
                    <li>Navigation buttons for improved UX</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">Props:</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Prop</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Default</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">title</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">string</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">&quot;Coming Soon&quot;</td>
                            <td className="px-6 py-4 text-sm">The main title displayed on the component</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">description</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">string</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">&quot;We&apos;re working
                                hard...&quot;</td>
                            <td className="px-6 py-4 text-sm">Description text that appears below the title</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">showHomeButton</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">boolean</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">true</td>
                            <td className="px-6 py-4 text-sm">Whether to show the home navigation button</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">showBackButton</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">boolean</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">true</td>
                            <td className="px-6 py-4 text-sm">Whether to show the back navigation button</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">additionalContent</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">React.ReactNode</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">undefined</td>
                            <td className="px-6 py-4 text-sm">Custom content to display in the component</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">releaseProgress</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">number</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">random(10-80)</td>
                            <td className="px-6 py-4 text-sm">Progress percentage (0-100) for development status</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">starsGoal</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">number</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">random(50-250)</td>
                            <td className="px-6 py-4 text-sm">Target number of GitHub stars</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">currentStars</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">number</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">0</td>
                            <td className="px-6 py-4 text-sm">Current GitHub stars count</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-12 mb-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Component Demo</h2>
            </div>

            <ComingSoon
                title="Custom Component Demo"
                description="This is a demonstration of the Coming Soon component with custom content."
                additionalContent={
                    <div className="p-4 rounded-lg text-sm" style={{
                        backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : 'rgba(249, 250, 251, 0.8)',
                    }}>
                        <p className="font-medium mb-2">This is custom content inside the Coming Soon component.</p>
                        <p>You can add any React components here to customize the display.</p>
                    </div>
                }
            />
        </div>
    );
}