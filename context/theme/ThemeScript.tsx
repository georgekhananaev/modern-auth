"use client";

// Theme script component for handling theme before hydration
export function ThemeScript() {
    return (
        <script
            id="theme-script"
            dangerouslySetInnerHTML={{
                __html: `
          (function() {
            try {
              // Try to get theme from localStorage
              const storedTheme = localStorage.getItem('theme');
              const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              // Check if dark mode should be applied
              const shouldApplyDark = 
                storedTheme === 'dark' || 
                (storedTheme === 'system' && userPrefersDark) || 
                (!storedTheme && userPrefersDark);
              
              // Apply dark class
              if (shouldApplyDark) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
              
              // Apply CSS variables for theme
              document.documentElement.style.setProperty(
                '--color-scheme', 
                shouldApplyDark ? 'dark' : 'light'
              );
              
              // Log theme state for debugging
              console.log('Theme initialized:', { 
                storedTheme, 
                userPrefersDark, 
                shouldApplyDark,
                resultClass: document.documentElement.classList.contains('dark') ? 'dark' : 'light'
              });
            } catch (e) {
              console.error('Error applying theme:', e);
            }
          })();
        `,
            }}
        />
    );
}