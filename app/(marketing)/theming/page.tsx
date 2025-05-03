"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

export default function ThemingDemo() {
  const { showToast } = useToast();
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Adaptive Theming System</h1>
          <p className="text-lg opacity-80">
            Modern Auth&apos;s powerful theming engine creates a seamless experience across light and dark modes
          </p>
        </div>

        <div className="space-y-16">
          {/* Theme Architecture */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Advanced Theme Architecture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p>
                  Our theming system is engineered for maximum flexibility and developer experience, addressing common pain points in dark mode implementation:
                </p>
                <ul className="list-disc list-inside space-y-3 opacity-80">
                  <li>Zero theme flashing during page load</li>
                  <li>OS-level theme preference detection</li>
                  <li>User theme preference persistence</li>
                  <li>Smooth CSS transitions between themes</li>
                  <li>Contrast ratios that meet AA accessibility standards</li>
                  <li>Theme-consistent component library</li>
                  <li>Simple API for theme customization</li>
                </ul>
                <p>
                  Built on CSS variables and Tailwind CSS, the theming system provides fine-grained control while maintaining consistent visual hierarchy in both light and dark modes.
                </p>
              </div>
              
              <div className="border rounded-lg p-6 bg-primary/5 dark:bg-primary/10">
                <h3 className="text-xl font-semibold mb-4">Theme Provider Implementation</h3>
                <div className="font-mono text-sm opacity-80">
                  <pre className="whitespace-pre-wrap">
                    <code>
                      <span className="text-green-600 dark:text-green-400">{`// ThemeProvider.tsx`}</span>
                      {"\n"}import {"{ createContext, useState, useEffect }"} from &quot;react&quot;;{"\n\n"}
                      type Theme = &quot;light&quot; | &quot;dark&quot; | &quot;system&quot;;{"\n\n"}
                      interface ThemeContextType {"{"}{"\n"}
                      {"  "}theme: Theme;{"\n"}
                      {"  "}isDarkMode: boolean;{"\n"}
                      {"  "}setTheme: (theme: Theme) ={">"} void;{"\n"}
                      {"  "}toggleTheme: () ={">"} void;{"\n"}
                      {"}"}{"\n\n"}
                      export function ThemeProvider({"{ children }"}) {"{"}{"\n"}
                      {"  "}const [theme, setTheme] = useState{"<"}Theme{">"}(&quot;system&quot;);{"\n"}
                      {"  "}const [isDarkMode, setIsDarkMode] = useState(false);{"\n\n"}
                      {"  "}{`// Theme toggle and system detection logic`}{"\n"}
                      {"  "}{`// Read user preference from localStorage`}{"\n"}
                      {"  "}{`// Set CSS variables dynamically`}{"\n"}
                      {"}"}{"\n"}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Component Showcase */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Theme-Aware Components</h2>
            <p className="mb-6">
              Modern Auth&apos;s components automatically adapt to the current theme without any additional configuration:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Form Controls</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="input w-full" 
                      placeholder="you@modern-auth.example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <input 
                      type="password" 
                      className="input w-full" 
                      placeholder="••••••••••••"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Account Type
                    </label>
                    <select className="input w-full">
                      <option>Personal</option>
                      <option>Business</option>
                      <option>Enterprise</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      id="remember" 
                      type="checkbox" 
                      className="h-4 w-4 border-gray-300 rounded text-primary focus:ring-primary"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm">
                      Stay signed in
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Button System</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Primary Actions</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button>Sign Up</Button>
                      <Button size="sm">Log In</Button>
                      <Button size="lg">Get Started</Button>
                      <Button disabled>Processing...</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Secondary Actions</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline">Settings</Button>
                      <Button variant="outline" size="sm">Cancel</Button>
                      <Button variant="outline" size="lg">View Details</Button>
                      <Button variant="outline" disabled>Unavailable</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Tertiary Actions</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="ghost">Skip</Button>
                      <Button variant="ghost" size="sm">Back</Button>
                      <Button variant="ghost" size="lg">Learn More</Button>
                      <Button variant="ghost" disabled>Hidden</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Toast Notification System */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Theme-Aware Toast Notifications</h2>
            <p className="mb-6">
              Our toast notification system provides contextual feedback while automatically adapting to light and dark modes:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Toast Features</h3>
                  
                  <ul className="list-disc list-inside space-y-2 opacity-80">
                    <li>Four notification types with optimized contrast</li>
                    <li>Theme-aware styling for both light and dark modes</li>
                    <li>Customizable duration and message content</li>
                    <li>Accessible design with proper ARIA attributes</li>
                    <li>Smooth animations for entrance and exit</li>
                    <li>Global context-based API for app-wide access</li>
                    <li>Clean, minimal design that doesn&apos;t interrupt workflow</li>
                  </ul>
                  
                  <div className="pt-4 space-y-4">
                    <h4 className="text-lg font-medium">Try it yourself:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        onClick={() => showToast("This is an error notification", "error")}
                        variant="destructive"
                        size="sm"
                      >
                        Show Error Toast
                      </Button>
                      
                      <Button 
                        onClick={() => showToast("This is a warning notification", "warning")}
                        variant="secondary"
                        size="sm"
                      >
                        Show Warning Toast
                      </Button>
                      
                      <Button 
                        onClick={() => showToast("This is a success notification", "success")}
                        variant="primary"
                        size="sm"
                      >
                        Show Success Toast
                      </Button>
                      
                      <Button 
                        onClick={() => showToast("This is an info notification", "info")}
                        variant="outline"
                        size="sm"
                      >
                        Show Info Toast
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 dark:bg-primary/5 border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Toast Types</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-600 dark:bg-red-500 mr-2"></div>
                      <span className="font-medium">Error</span>
                      <span className="ml-2 opacity-70">- For critical issues requiring attention</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-amber-500 dark:bg-amber-400 mr-2"></div>
                      <span className="font-medium">Warning</span>
                      <span className="ml-2 opacity-70">- For important but non-critical notices</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-600 dark:bg-green-500 mr-2"></div>
                      <span className="font-medium">Success</span>
                      <span className="ml-2 opacity-70">- For confirmed actions or operations</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-500 mr-2"></div>
                      <span className="font-medium">Info</span>
                      <span className="ml-2 opacity-70">- For general information or updates</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 dark:bg-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Toast Implementation</h3>
                <div className="font-mono text-sm opacity-80">
                  <pre className="whitespace-pre-wrap">
                    <code>
                      <span className="text-green-600 dark:text-green-400">{`// Toast usage in components`}</span>
                      {"\n"}import {"{ useToast }"} from &apos;@/components/ui/Toast&apos;;{"\n\n"}
                      function ProfileForm() {"{"}{"\n"}
                      {"  "}const {"{ showToast }"} = useToast();{"\n\n"}
                      {"  "}{`// Define form submission handler`}{"\n"}
                      {"  "}function onSubmit(data) {"{"}{"\n"}
                      {"    "}try {"{"}{"\n"}
                      {"      "}{`// Update profile logic here`}{"\n"}
                      {"      "}showToast({"\n"}
                      {"        "}&quot;Profile updated successfully!&quot;,{"\n"}
                      {"        "}&quot;success&quot;{"\n"}
                      {"      "});{"\n"}
                      {"    }"} catch (error) {"{"}{"\n"}
                      {"      "}showToast({"\n"}
                      {"        "}&quot;Failed to update profile&quot;,{"\n"}
                      {"        "}&quot;error&quot;,{"\n"}
                      {"        "}8000 // custom duration in ms{"\n"}
                      {"      "});{"\n"}
                      {"    "}{"}"}{"\n"}
                      {"  "}{"}"}{"\n\n"}
                      {"  "}return ({"\n"}
                      {"    "}&lt;form&gt;{"\n"}
                      {"      "}&lt;Button type=&quot;submit&quot;&gt;Update Profile&lt;/Button&gt;{"\n"}
                      {"    "}&lt;/form&gt;{"\n"}
                      {"  "});{"\n"}
                      {"}"}{"\n\n"}
                      <span className="text-green-600 dark:text-green-400">{`// Toast automatically adapts to theme`}</span>{"\n"}
                      {`// The toast uses the current theme context`}{"\n"}
                      {`// No additional configuration needed!`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>
          
          {/* Developer Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Developer-First Customization</h2>
            <div className="border rounded-lg overflow-hidden">
              <div className="p-6 bg-primary/5 dark:bg-primary/10">
                <p className="mb-4">
                  Modern Auth&apos;s theming system is designed to be completely customizable while requiring minimal code changes.
                </p>
              </div>
              <div className="p-6 border-t">
                <h3 className="text-xl font-semibold mb-4">CSS Variables System</h3>
                <p className="mb-4 opacity-80">
                  Customize the entire theme by modifying a single set of CSS variables:
                </p>
                <div className="font-mono text-sm p-4 bg-primary/5 dark:bg-primary/10 rounded-md">
                  <div>
                    <span className="text-green-600 dark:text-green-400">{`/* globals.css */`}</span>{"\n"}
                    :root {"{"}{"\n"}
                    {"  "}{`/* Primary brand colors */`}{"\n"}
                    {"  "}--color-primary: #3B82F6;{"\n"}
                    {"  "}--color-primary-hover: #2563EB;{"\n"}
                    {"  "}--color-primary-light: rgba(59, 130, 246, 0.1);{"\n\n"}
                    
                    {"  "}{`/* Light mode variables */`}{"\n"}
                    {"  "}--background-color: #ffffff;{"\n"}
                    {"  "}--text-color: #171717;{"\n"}
                    {"  "}--border-color: #e5e7eb;{"\n"}
                    {"  "}--card-bg: #ffffff;{"\n"}
                    {"  "}--input-bg: #ffffff;{"\n"}
                    {"}"}{"\n\n"}
                    
                    .dark {"{"}{"\n"}
                    {"  "}{`/* Dark mode variables */`}{"\n"}
                    {"  "}--color-primary: #3B82F6; {`/* Same primary color */`}{"\n"}
                    {"  "}--color-primary-hover: #60a5fa;{"\n"}
                    {"  "}--background-color: #0f172a;{"\n"}
                    {"  "}--text-color: #f8fafc;{"\n"}
                    {"  "}--border-color: #374151;{"\n"}
                    {"}"}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Technical Benefits */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Why Choose Our Theming System</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Technical Benefits</h3>
                <ul className="space-y-2 opacity-80 list-disc list-inside">
                  <li>Zero flash of incorrect theme (FOIT)</li>
                  <li>Server-side rendering compatible</li>
                  <li>Automatic system preference detection</li>
                  <li>Theme persistence across sessions</li>
                  <li>Small runtime footprint (~1KB)</li>
                  <li>No external dependencies</li>
                  <li>Compatible with any UI framework</li>
                  <li>CSS variables for easy customization</li>
                  <li>Built-in prefers-color-scheme support</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">User Experience Benefits</h3>
                <ul className="space-y-2 opacity-80 list-disc list-inside">
                  <li>Consistent visual hierarchy in both modes</li>
                  <li>Reduced eye strain in dark environments</li>
                  <li>Battery savings on OLED screens</li>
                  <li>Smooth theme transitions</li>
                  <li>Respects user system preferences</li>
                  <li>Accessible color contrast ratios</li>
                  <li>Proper focus states in both themes</li>
                  <li>Polished, professional appearance</li>
                  <li>Carefully crafted color palette</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <div className="bg-primary/10 dark:bg-primary/5 rounded-xl p-8 text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Ready to Implement Modern Auth?</h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Add beautiful, accessible authentication with flawless theme support to your Next.js app in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/auth/register">
                <Button size="lg">Start Your Project</Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg">Explore Features</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}