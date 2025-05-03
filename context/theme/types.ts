// Define theme types
export type Theme = "light" | "dark" | "system";

// Context props interface
export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Provider props interface
export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}