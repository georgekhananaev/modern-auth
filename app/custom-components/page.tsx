"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { useTheme } from "@/context/theme/useTheme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

// Metadata is handled in a separate metadata.ts file for client components

export default function CustomComponentsPage() {
  useTheme(); // Used implicitly through the ThemedLink, Button, etc. components
  const [, setActiveTab] = useState("buttons");

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Custom Components Library</h1>
          <p className="text-lg opacity-80 max-w-3xl">
            A collection of reusable UI components built with accessibility and customization in mind
          </p>
        </div>

        <Tabs defaultValue="buttons" onValueChange={setActiveTab} className="mb-16">
          <div className="mb-6 overflow-x-auto">
            <TabsList className="w-full border-b border-gray-200 dark:border-gray-700 space-x-6">
              <TabsTrigger value="buttons" className="px-4 py-2">Buttons</TabsTrigger>
              <TabsTrigger value="navigation" className="px-4 py-2">Navigation</TabsTrigger>
              <TabsTrigger value="forms" className="px-4 py-2">Form Elements</TabsTrigger>
              <TabsTrigger value="feedback" className="px-4 py-2">Feedback</TabsTrigger>
              <TabsTrigger value="data" className="px-4 py-2">Data Display</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="buttons" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Button Variants</h2>
              <p className="opacity-80">
                Different button styles for various use cases and importance levels
              </p>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Primary</h3>
                    <div className="space-y-2">
                      <Button size="lg" className="w-full">Large</Button>
                      <Button className="w-full">Default</Button>
                      <Button size="sm" className="w-full">Small</Button>
                      <Button disabled className="w-full">Disabled</Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Secondary</h3>
                    <div className="space-y-2">
                      <Button variant="secondary" size="lg" className="w-full">Large</Button>
                      <Button variant="secondary" className="w-full">Default</Button>
                      <Button variant="secondary" size="sm" className="w-full">Small</Button>
                      <Button variant="secondary" disabled className="w-full">Disabled</Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Outline</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="lg" className="w-full">Large</Button>
                      <Button variant="outline" className="w-full">Default</Button>
                      <Button variant="outline" size="sm" className="w-full">Small</Button>
                      <Button variant="outline" disabled className="w-full">Disabled</Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Ghost</h3>
                    <div className="space-y-2">
                      <Button variant="ghost" size="lg" className="w-full">Large</Button>
                      <Button variant="ghost" className="w-full">Default</Button>
                      <Button variant="ghost" size="sm" className="w-full">Small</Button>
                      <Button variant="ghost" disabled className="w-full">Disabled</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Button with Icons</h2>
              <p className="opacity-80">
                Buttons can include icons to enhance visual communication
              </p>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Left Icon</h3>
                    <div className="space-y-2">
                      <Button className="w-full" leftIcon={<Icon name="Plus" size={16} />}>
                        Create New
                      </Button>
                      <Button variant="outline" className="w-full" leftIcon={<Icon name="Download" size={16} />}>
                        Download
                      </Button>
                      <Button variant="ghost" className="w-full" leftIcon={<Icon name="ArrowLeft" size={16} />}>
                        Go Back
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Right Icon</h3>
                    <div className="space-y-2">
                      <Button className="w-full" rightIcon={<Icon name="ArrowRight" size={16} />}>
                        Next Step
                      </Button>
                      <Button variant="outline" className="w-full" rightIcon={<Icon name="ExternalLink" size={16} />}>
                        View Documentation
                      </Button>
                      <Button variant="ghost" className="w-full" rightIcon={<Icon name="RefreshCw" size={16} />}>
                        Refresh
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="navigation" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Navigation Components</h2>
              <p className="opacity-80">
                Components for site navigation and user wayfinding
              </p>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Navigation Components</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/custom-components/navbar" 
                        className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="bg-primary rounded-md w-8 h-8 flex items-center justify-center text-white font-bold mr-2">
                              MA
                            </div>
                            <span className="font-bold">Modern Auth</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="hidden md:flex items-center space-x-1">
                              <span className="px-3 py-2 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</span>
                            </div>
                            <Button size="sm">Sign In</Button>
                          </div>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-900">
                          <h4 className="font-medium">Navbar Component</h4>
                          <p className="text-sm opacity-80 mt-1">Responsive navigation with dropdown menus</p>
                        </div>
                      </Link>
                      
                      <Link href="/custom-components/coming-soon" 
                        className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-20 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                          <Icon name="Clock" size={32} className="mr-2" />
                          <span className="text-lg font-bold">Coming Soon</span>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-900">
                          <h4 className="font-medium">Coming Soon Component</h4>
                          <p className="text-sm opacity-80 mt-1">Placeholder for features under development</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Breadcrumbs</h3>
                    <div className="flex items-center text-sm">
                      <Link href="#" className="hover:underline">Home</Link>
                      <Icon name="ChevronRight" size={16} className="mx-2 opacity-50" />
                      <Link href="#" className="hover:underline">Components</Link>
                      <Icon name="ChevronRight" size={16} className="mx-2 opacity-50" />
                      <span className="font-medium">Navigation</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Tabs</h3>
                    <div className="border-b border-gray-200 dark:border-gray-700">
                      <div className="flex space-x-6">
                        <button className="px-4 py-2 border-b-2 border-primary font-medium">Dashboard</button>
                        <button className="px-4 py-2 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600">Settings</button>
                        <button className="px-4 py-2 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600">Analytics</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="forms" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Form Elements</h2>
              <p className="opacity-80">
                Components for user input and form building
              </p>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Text Input</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your name" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Password Input</label>
                      <div className="relative">
                        <input 
                          type="password" 
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter your password" 
                        />
                        <button className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400">
                          <Icon name="Eye" size={18} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Select</label>
                      <select className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="" disabled selected>Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Checkbox</label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="checkbox1"
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <label htmlFor="checkbox1" className="ml-2 text-sm">Option 1</label>
                        </div>
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="checkbox2"
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <label htmlFor="checkbox2" className="ml-2 text-sm">Option 2</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Radio Buttons</label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input 
                            type="radio" 
                            id="radio1" 
                            name="radio-group"
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                          />
                          <label htmlFor="radio1" className="ml-2 text-sm">Option 1</label>
                        </div>
                        <div className="flex items-center">
                          <input 
                            type="radio" 
                            id="radio2" 
                            name="radio-group"
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                          />
                          <label htmlFor="radio2" className="ml-2 text-sm">Option 2</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Textarea</label>
                      <textarea 
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your message"
                        rows={3}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="feedback" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Feedback Components</h2>
              <p className="opacity-80">
                Components for providing feedback to the user
              </p>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Alert Variants</h3>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 flex items-start">
                        <Icon name="AlertCircle" size={20} className="mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Error</p>
                          <p className="text-sm opacity-90">There was a problem with your request.</p>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 flex items-start">
                        <Icon name="AlertTriangle" size={20} className="mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Warning</p>
                          <p className="text-sm opacity-90">Your account is approaching its usage limit.</p>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 flex items-start">
                        <Icon name="CheckCircle" size={20} className="mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Success</p>
                          <p className="text-sm opacity-90">Your changes have been saved successfully.</p>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 flex items-start">
                        <Icon name="Info" size={20} className="mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Information</p>
                          <p className="text-sm opacity-90">We&apos;ve updated our privacy policy.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Toast Notification</h3>
                    <div className="relative w-80 max-w-full">
                      <div className="absolute top-0 right-0 max-w-xs p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex items-start">
                        <Icon name="CheckCircle" size={20} className="mr-3 flex-shrink-0 mt-0.5 text-green-500" />
                        <div className="flex-1">
                          <p className="font-medium">Success</p>
                          <p className="text-sm opacity-90">Your profile has been updated.</p>
                        </div>
                        <button className="ml-4 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                          <Icon name="X" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-16">
                    <h3 className="text-lg font-medium">Progress Indicators</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Uploading file...</span>
                          <span>70%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-t-primary border-r-primary border-b-transparent border-l-transparent"></div>
                        <span>Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="data" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Data Display Components</h2>
              <p className="opacity-80">
                Components for displaying data and content
              </p>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="space-y-12">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Card</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
                        <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <Icon name="Image" size={32} className="text-gray-400 dark:text-gray-500" />
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-lg mb-2">Card Title</h4>
                          <p className="text-sm opacity-80 mb-4">This is a sample card component with an image placeholder, title, description, and a call-to-action button.</p>
                          <Button size="sm" variant="outline" className="w-full">Learn More</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Table</h3>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                          <tr>
                            <th className="text-left px-4 py-3 text-sm font-medium">Name</th>
                            <th className="text-left px-4 py-3 text-sm font-medium">Email</th>
                            <th className="text-left px-4 py-3 text-sm font-medium">Role</th>
                            <th className="text-left px-4 py-3 text-sm font-medium">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-3 text-sm">John Doe</td>
                            <td className="px-4 py-3 text-sm">john@example.com</td>
                            <td className="px-4 py-3 text-sm">Admin</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                Active
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm">Jane Smith</td>
                            <td className="px-4 py-3 text-sm">jane@example.com</td>
                            <td className="px-4 py-3 text-sm">User</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                                Inactive
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Badge</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                        Error
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                        Warning
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        Success
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        Info
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                        New
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Component Demo Footer with CTA */}
        <div className="bg-primary/10 dark:bg-primary/5 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Build with Modern Auth Components?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Get started with our customizable component library to create beautiful, accessible user interfaces
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/features">
              <Button size="lg">Explore Features</Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="outline" size="lg">Start Your Project</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}