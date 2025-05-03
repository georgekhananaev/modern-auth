"use client";

import { useState, useEffect, useRef, ReactElement } from "react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "@/context/theme/useTheme";
import Button from "@/components/ui/Button";
import Icon, { IconName } from "@/components/ui/Icon";
import ThemedLink from "@/components/common/ThemedLink";
import { AnimatePresence, motion } from "framer-motion";

// Define navigation link types with support for deep nesting
interface NavLink {
    id: string;
    title: string;
    href: string;
    iconName: IconName;
    description?: string;
    badge?: string;
    badgeBackgroundColor?: string;
    badgeTextColor?: string;
    children?: NavLink[];
}

export interface NavbarProps {
    logoText?: string;
    className?: string;
}

export default function Navbar({ logoText = "Modern Auth", className = "" }: NavbarProps) {
    const { data: session } = useSession();
    const pathname = usePathname();
    const { isDarkMode, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openMenuPaths, setOpenMenuPaths] = useState<{ [key: string]: boolean }>({});
    const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const navRef = useRef<HTMLElement>(null);

    // Fix hydration issues by only rendering after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle clicks outside the menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            // If clicking outside nav element, close mobile menu
            if (navRef.current && !navRef.current.contains(target)) {
                setIsMobileMenuOpen(false);
            }

            // Check if clicking outside any open menu
            Object.entries(openMenuPaths).forEach(([path, isOpen]) => {
                if (isOpen && menuRefs.current[path] && !menuRefs.current[path]?.contains(target)) {
                    // Don't close if clicking on the toggle button (parent will handle that)
                    const toggleId = `toggle-${path}`;
                    const toggleElement = document.getElementById(toggleId);
                    if (toggleElement && toggleElement.contains(target)) {
                        return;
                    }

                    // Close this menu path
                    setOpenMenuPaths(prev => ({
                        ...prev,
                        [path]: false
                    }));
                }
            });
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                // Close mobile menu
                setIsMobileMenuOpen(false);

                // Find the last opened menu and close only that one
                const openPaths = Object.entries(openMenuPaths)
                    .filter(([, isOpen]) => isOpen)
                    .map(([path]) => path);

                if (openPaths.length > 0) {
                    const lastPath = openPaths[openPaths.length - 1];
                    setOpenMenuPaths(prev => ({
                        ...prev,
                        [lastPath]: false
                    }));

                    // If a parent menu is still open, focus its toggle button
                    const pathParts = lastPath.split('.');
                    if (pathParts.length > 1) {
                        const parentPath = pathParts.slice(0, -1).join('.');
                        const parentToggle = document.getElementById(`toggle-${parentPath}`);
                        parentToggle?.focus();
                    }
                }
            }
        };

        // Add event listeners
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [openMenuPaths]);

    // Toggle mobile menu
    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen(prev => !prev);
        // Close all dropdown menus when toggling mobile menu
        setOpenMenuPaths({});
    };

    // Toggle dropdown menu
    const toggleMenu = (path: string, event?: React.MouseEvent<HTMLElement>): void => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        setOpenMenuPaths(prev => {
            const newState = { ...prev };
            const isCurrentlyOpen = Boolean(newState[path]);

            // If we're opening this menu, close all its siblings
            if (!isCurrentlyOpen) {
                // Get the parent path
                const pathParts = path.split('.');
                const parentPath = pathParts.slice(0, -1).join('.');

                // Close sibling menus (menus that share the same parent)
                Object.keys(newState).forEach(menuPath => {
                    // If this is a sibling (starts with parent path but isn't this path or a child of this path)
                    if (
                        menuPath !== path &&
                        (!parentPath || menuPath.startsWith(`${parentPath}.`)) &&
                        !menuPath.startsWith(`${path}.`)
                    ) {
                        newState[menuPath] = false;
                    }
                });
            }

            // Toggle this menu
            newState[path] = !isCurrentlyOpen;
            return newState;
        });
    };

    // Check if a path is active, including parent paths
    const isActiveLink = (path: string): boolean => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname === path || pathname.startsWith(`${path}/`);
    };

    // Check if a menu should be shown as active (if it or any child is active)
    const isMenuActive = (item: NavLink): boolean => {
        if (isActiveLink(item.href)) {
            return true;
        }

        if (item.children) {
            return item.children.some(child => isMenuActive(child));
        }

        return false;
    };

    // Handle link click - close menus
    const handleNavigation = (): void => {
        setIsMobileMenuOpen(false);
        setOpenMenuPaths({});
    };
    // Create initial navigation structure
    const initialNavLinks: NavLink[] = [
        {
            id: "home",
            title: "Home",
            href: "/",
            iconName: "Home",
            description: "Return to the home page"
        },
        {
            id: "features",
            title: "Features",
            href: "/features",
            iconName: "Settings",
            description: "Explore platform features",
            children: [
                {
                    id: "features.overview",
                    title: "Features Overview",
                    href: "/features",
                    iconName: "Settings",
                    description: "All available features"
                },
                {
                    id: "features.security",
                    title: "Security",
                    href: "/security",
                    iconName: "Shield",
                    description: "Security features and settings",
                    badge: "Coming",
                    badgeBackgroundColor: "#0ea5e9",
                    badgeTextColor: "white",
                    children: [
                        {
                            id: "features.security.mfa",
                            title: "Multi-Factor Auth",
                            href: "/security/mfa",
                            iconName: "Key",
                            description: "Configure multi-factor authentication"
                        },
                        {
                            id: "features.security.permissions",
                            title: "Permissions",
                            href: "/security/permissions",
                            iconName: "Lock",
                            description: "Role-based access control"
                        },
                        {
                            id: "features.security.audit",
                            title: "Audit Log",
                            href: "/security/audit",
                            iconName: "FileText",
                            description: "Security audit trail"
                        }
                    ]
                },
                {
                    id: "features.users",
                    title: "User Management",
                    href: "/user-management",
                    iconName: "Users",
                    description: "Manage platform users",
                    badge: "Coming",
                    badgeBackgroundColor: "#0ea5e9",
                    badgeTextColor: "white",
                    children: [
                        {
                            id: "features.users.roles",
                            title: "Roles",
                            href: "/user-management/roles",
                            iconName: "UserCog",
                            description: "Configure user roles"
                        },
                        {
                            id: "features.users.teams",
                            title: "Teams",
                            href: "/user-management/teams",
                            iconName: "Users",
                            description: "Organize users into teams",
                            children: [
                                {
                                    id: "features.users.teams.create",
                                    title: "Create Team",
                                    href: "/user-management/teams/create",
                                    iconName: "UserPlus",
                                    description: "Create a new team"
                                },
                                {
                                    id: "features.users.teams.permissions",
                                    title: "Team Permissions",
                                    href: "/user-management/teams/permissions",
                                    iconName: "Shield",
                                    description: "Configure team access"
                                }
                            ]
                        },
                        {
                            id: "features.users.invitations",
                            title: "Invitations",
                            href: "/user-management/invitations",
                            iconName: "Mail",
                            description: "Manage user invitations"
                        }
                    ]
                },
                {
                    id: "features.custom-components",
                    title: "Custom Components",
                    href: "/custom-components",
                    iconName: "Layers",
                    description: "UI component library",
                    badge: "New",
                    badgeBackgroundColor: "#2a48c6",
                    badgeTextColor: "white",
                    children: [
                        {
                            id: "features.custom-components.coming-soon",
                            title: "Coming Soon",
                            href: "/custom-components/coming-soon",
                            iconName: "Clock",
                            description: "Page placeholder component"
                        },
                        {
                            id: "features.custom-components.navbar",
                            title: "Navbar",
                            href: "/custom-components/navbar",
                            iconName: "Menu",
                            description: "Navigation component"
                        }
                    ]
                },
                {
                    id: "features.localization",
                    title: "Internationalization",
                    href: "/localization",
                    iconName: "Globe",
                    description: "Multiple languages support",
                    badge: "Coming",
                    badgeBackgroundColor: "#0ea5e9",
                    badgeTextColor: "white"
                },
                {
                    id: "features.rtl",
                    title: "RTL Support",
                    href: "/rtl-support",
                    iconName: "AlignRight",
                    description: "Right-to-left language support",
                    badge: "Coming",
                    badgeBackgroundColor: "#0ea5e9",
                    badgeTextColor: "white"
                },
                {
                    id: "features.social-login",
                    title: "Social Authentication",
                    href: "/social-login",
                    iconName: "LogIn",
                    description: "Sign in with social platforms",
                    badge: "Coming",
                    badgeBackgroundColor: "#0ea5e9",
                    badgeTextColor: "white",
                    children: [
                        {
                            id: "features.social-login.google",
                            title: "Google Sign In",
                            href: "/social-login/google",
                            iconName: "Search",
                            description: "Sign in with Google"
                        },
                        {
                            id: "features.social-login.github",
                            title: "GitHub Sign In",
                            href: "/social-login/github",
                            iconName: "Github",
                            description: "Sign in with GitHub"
                        },
                        {
                            id: "features.social-login.instagram",
                            title: "Instagram Sign In",
                            href: "/social-login/instagram",
                            iconName: "Camera",
                            description: "Sign in with Instagram"
                        }
                    ]
                },
                {
                    id: "features.theming",
                    title: "Theming",
                    href: "/theming",
                    iconName: "Palette",
                    description: "Customize platform appearance"
                },
                {
                    id: "features.error-pages",
                    title: "Error Pages",
                    href: "/error-examples",
                    iconName: "AlertOctagon",
                    description: "Error page examples",
                    children: [
                        {
                            id: "features.error-pages.not-found",
                            title: "404 - Not Found",
                            href: "/not-found",
                            iconName: "Search",
                            description: "Page not found example"
                        },
                        {
                            id: "features.error-pages.unauthorized",
                            title: "401 - Unauthorized",
                            href: "/error?code=401",
                            iconName: "Lock",
                            description: "Unauthorized access example"
                        },
                        {
                            id: "features.error-pages.forbidden",
                            title: "403 - Forbidden",
                            href: "/error?code=403",
                            iconName: "AlertCircle",
                            description: "Permission denied example"
                        },
                        {
                            id: "features.error-pages.server-error",
                            title: "500 - Server Error",
                            href: "/error?code=500",
                            iconName: "AlertTriangle",
                            description: "Server error example"
                        },
                        {
                            id: "features.error-pages.service-unavailable",
                            title: "503 - Service Unavailable",
                            href: "/error?code=503",
                            iconName: "Clock",
                            description: "Service unavailable example"
                        }
                    ]
                }
            ]
        },
        {
            id: "contact",
            title: "Contact",
            href: "/contact",
            iconName: "Mail",
            description: "Get in touch with us"
        }
    ];

    // Dashboard link only visible for logged-in users
    const dashboardLink: NavLink = {
        id: "dashboard",
        title: "Dashboard",
        href: "/dashboard",
        iconName: "LayoutDashboard",
        description: "View your personal dashboard"
    };

    // Create the final navigation structure based on auth state
    const navLinks = session
        ? [...initialNavLinks, dashboardLink]
        : initialNavLinks;

    // Generate menu ID from path
    const getMenuId = (path: string): string => `menu-${path.replace(/\./g, '-')}`;

    // Dropdown animations
    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -5,
            scale: 0.95,
            transition: { duration: 0.15, ease: "easeInOut" }
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.2, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: -5,
            scale: 0.95,
            transition: { duration: 0.15, ease: "easeInOut" }
        }
    };

    // Calculate dropdown position based on level
    const getDropdownPosition = (path: string, isMobile: boolean): Record<string, string | number> => {
        const level = path.split('.').length;

        if (isMobile) {
            return {};
        }

        if (level === 1) {
            return { top: "100%", left: 0 };
        }

        return { top: 0, left: "100%" };
    };

    // Render a menu item with its submenus
    const renderMenuItem = (item: NavLink, path: string, isMobile: boolean = false): ReactElement => {
        const hasChildren = Array.isArray(item.children) && item.children.length > 0;
        const isActive = isMenuActive(item);
        const menuPath = path ? `${path}.${item.id}` : item.id;
        const isOpen = Boolean(openMenuPaths[menuPath]);
        const level = menuPath.split('.').length;

        // Styling classes based on level and device
        const linkClasses = `
      flex items-center justify-between 
      ${level === 1 && !isMobile ? 'px-3 py-2' : 'px-3 py-2 text-xs'} 
      rounded-md transition-all duration-200
      ${isActive ? 'text-primary font-medium' : ''}
      ${isMobile ? 'hover:bg-primary/5' : level === 1 ? 'hover:bg-primary/5' : 'hover:bg-primary/5 hover:translate-x-1'}
      ${isMobile && level > 1 ? `pl-${4 + (level-1) * 3}` : ''}
      w-full
    `;

        // Menu item with children (dropdown)
        if (hasChildren) {
            return (
                <div key={menuPath} className={`relative ${isMobile ? 'w-full' : ''}`}>
                    {/* Menu toggle button */}
                    <button
                        id={`toggle-${menuPath}`}
                        aria-expanded={isOpen}
                        aria-controls={getMenuId(menuPath)}
                        aria-haspopup="menu"
                        onClick={(e) => toggleMenu(menuPath, e)}
                        className={linkClasses}
                    >
                        <div className="flex items-center space-x-2 truncate">
                            <Icon name={item.iconName} size={16} className="flex-shrink-0" />
                            <span>{item.title}</span>

                            {/* Badge if exists */}
                            {item.badge && (
                                <span
                                    className="text-xs px-1.5 py-0.5 rounded-full font-medium"
                                    style={{
                                        backgroundColor: item.badgeBackgroundColor || '#4f46e5',
                                        color: item.badgeTextColor || 'white'
                                    }}
                                >
                                  {item.badge}
                                </span>
                            )}
                        </div>

                        <Icon
                            name={isMobile || level === 1 ? "ChevronDown" : "ChevronRight"}
                            size={16}
                            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : level !== 1 && !isMobile ? 'rotate-0' : ''}`}
                        />
                    </button>

                    {/* Dropdown menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                id={getMenuId(menuPath)}
                                ref={(el) => { menuRefs.current[menuPath] = el; }}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={dropdownVariants}
                                className={`
                  z-50 
                  rounded-lg shadow-lg border text-sm
                  ${isMobile ? 'w-full mt-1' : 'min-w-[220px] max-w-[300px] absolute'}
                `}
                                style={{
                                    ...getDropdownPosition(menuPath, isMobile),
                                    backgroundColor: isDarkMode ? 'rgb(31, 41, 55)' : 'white',
                                    borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)'
                                }}
                            >
                                {/* Menu header with description */}
                                {item.description && (
                                    <div className="px-3 py-1.5 border-b"
                                         style={{ borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)' }}>
                                        <h3 className="text-xs font-medium">{item.title}</h3>
                                        <p className="text-xs mt-0.5 text-[11px]"
                                           style={{ color: isDarkMode ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)' }}>
                                            {item.description}
                                        </p>
                                    </div>
                                )}

                                {/* Menu items */}
                                <div className="p-1.5 space-y-0.5 w-full" role="menu" aria-label="Dropdown menu">
                                    {item.children!.map(child => renderMenuItem(child, menuPath, isMobile))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            );
        }

        // Regular menu item (no children)
        return (
            <ThemedLink
                key={menuPath}
                href={item.href}
                isActive={isActive}
                className={linkClasses}
                onClick={handleNavigation}
            >
                <div className="flex items-center space-x-2 truncate">
                    <Icon name={item.iconName} size={16} className="flex-shrink-0" />
                    <span>{item.title}</span>

                    {/* Badge if exists */}
                    {item.badge && (
                        <span
                            className="text-xs px-1.5 py-0.5 rounded-full font-medium"
                            style={{
                                backgroundColor: item.badgeBackgroundColor || '#4f46e5',
                                color: item.badgeTextColor || 'white'
                            }}
                        >
                          {item.badge}
                        </span>
                    )}
                </div>
            </ThemedLink>
        );
    };

    // Render user profile section
    const renderUserSection = (isMobile: boolean = false): ReactElement => {
        const profileMenuPath = "profile-menu";
        const isProfileMenuOpen = Boolean(openMenuPaths[profileMenuPath]);

        if (session) {
            return (
                <div className={`relative ${isMobile ? "w-full" : "ml-4"}`}>
                    <button
                        id={`toggle-${profileMenuPath}`}
                        onClick={(e) => toggleMenu(profileMenuPath, e)}
                        aria-expanded={isProfileMenuOpen}
                        aria-controls={`menu-${profileMenuPath}`}
                        aria-haspopup="menu"
                        className={`flex items-center p-1.5 rounded-full hover:bg-primary/10 transition-all hover:scale-105 ${isMobile ? "w-full justify-between" : ""}`}
                    >
                        <div className="flex items-center">
                            <div className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full shadow-sm">
                                <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
                                    {session.user?.name ? session.user.name.charAt(0).toUpperCase() : "U"}
                                </div>
                            </div>
                            {isMobile && (
                                <span className="ml-3">{session.user?.name || "User"}</span>
                            )}
                        </div>
                        <Icon
                            name="ChevronDown"
                            size={16}
                            className={`ml-1.5 transition-transform duration-200 ${isProfileMenuOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    <AnimatePresence>
                        {isProfileMenuOpen && (
                            <motion.div
                                id={`menu-${profileMenuPath}`}
                                ref={(el) => { menuRefs.current[profileMenuPath] = el; }}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={dropdownVariants}
                                className={`
                  rounded-lg shadow-lg border z-50 text-sm
                  ${isMobile ? "w-full mt-2" : "absolute right-0 mt-2 w-64"}
                `}
                                style={{
                                    backgroundColor: isDarkMode ? 'rgb(31, 41, 55)' : 'white',
                                    borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)'
                                }}
                            >
                                <div className="py-2 px-3 border-b"
                                     style={{ borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)' }}>
                                    <p className="text-xs font-medium">{session.user?.name || "User"}</p>
                                    <p className="text-xs truncate mt-0.5 text-[11px]"
                                       style={{ color: isDarkMode ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)' }}>
                                        {session.user?.email || ""}
                                    </p>
                                </div>
                                <div className="p-1.5 w-full" role="menu" aria-label="User menu">
                                    <ThemedLink
                                        href="/profile"
                                        className="flex w-full items-center px-3 py-2 text-sm rounded-md transition-all hover:translate-x-1 hover:bg-primary/5"
                                        onClick={handleNavigation}
                                    >
                                        <Icon name="User" size={16} className="mr-2" />
                                        Profile
                                    </ThemedLink>
                                    <ThemedLink
                                        href="/settings"
                                        className="flex w-full items-center px-3 py-2 text-sm rounded-md transition-all hover:translate-x-1 hover:bg-primary/5"
                                        onClick={handleNavigation}
                                    >
                                        <Icon name="Settings" size={16} className="mr-2" />
                                        Settings
                                    </ThemedLink>
                                    <button
                                        onClick={() => {
                                            handleNavigation();
                                            signOut();
                                        }}
                                        className="flex w-full items-center px-4 py-2.5 text-sm rounded-md transition-all hover:translate-x-1"
                                        style={{
                                            color: isDarkMode ? 'rgb(248, 113, 113)' : 'rgb(239, 68, 68)',
                                            backgroundColor: 'transparent'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.backgroundColor = isDarkMode
                                                ? 'rgba(239, 68, 68, 0.1)'
                                                : 'rgba(254, 226, 226, 1)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                        }}
                                        role="menuitem"
                                        aria-label="Sign out of your account"
                                    >
                                        <Icon name="LogOut" size={16} className="mr-2" />
                                        Sign Out
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            );
        }

        // Not logged in - render auth buttons
        return (
            <div className={isMobile ? "space-y-3 mt-4 w-full" : "ml-4 flex items-center space-x-3"}>
                <Button
                    variant="ghost"
                    size="sm"
                    className={isMobile ? "w-full" : ""}
                    onClick={handleNavigation}
                >
                    <ThemedLink href="/auth/login" className={isMobile ? "w-full flex justify-center" : "px-2"}>
                        Sign In
                    </ThemedLink>
                </Button>
                <Button
                    variant="primary"
                    size="sm"
                    className={`shadow-md hover:shadow-lg transition-all ${isMobile ? "w-full" : ""}`}
                    onClick={handleNavigation}
                >
                    <ThemedLink
                        href="/auth/register"
                        className={`text-white ${isMobile ? "w-full flex justify-center" : "px-2"}`}
                    >
                        Sign Up
                    </ThemedLink>
                </Button>
            </div>
        );
    };

    // Theme toggle button
    const renderThemeToggle = (): ReactElement | null => {
        if (!mounted) return null;

        return (
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-all dark:hover:bg-gray-700 hover:bg-gray-100"
                aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
            >
                {isDarkMode
                    ? <Icon name="Sun" size={20} className="text-amber-400" />
                    : <Icon name="Moon" size={20} className="text-indigo-400" />}
            </button>
        );
    };

    // The main rendering function
    return (
        <nav
            ref={navRef}
            className={`sticky top-0 z-50 backdrop-blur-md navbar border-b shadow-sm ${className}`}
            style={{
                backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                color: isDarkMode ? 'white' : 'inherit'
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <ThemedLink
                            href="/"
                            className="flex items-center text-xl font-bold text-primary hover:text-primary/80 transition-all hover:scale-105"
                            onClick={handleNavigation}
                        >
                            <div
                                className="p-1.5 rounded-lg mr-2.5 flex items-center justify-center"
                                style={{ backgroundColor: 'var(--color-primary)', boxShadow: 'var(--shadow-sm)' }}
                            >
                                <span className="text-sm font-bold text-white">MA</span>
                            </div>
                            <span className="text-primary font-bold">{logoText}</span>
                        </ThemedLink>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:justify-between lg:flex-1 lg:ml-6">
                        {/* Main Navigation Links */}
                        <div className="flex items-center space-x-2">
                            {navLinks.map(link => renderMenuItem(link, "", false))}
                        </div>

                        {/* Right side items */}
                        <div className="flex items-center pl-6 ml-6 border-l"
                             style={{ borderColor: isDarkMode ? 'rgba(75, 85, 99, 1)' : 'rgba(229, 231, 235, 1)' }}>
                            {renderThemeToggle()}
                            {renderUserSection()}
                        </div>
                    </div>

                    {/* Mobile top bar controls */}
                    <div className="flex lg:hidden items-center space-x-3">
                        {renderThemeToggle()}

                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-lg transition-all hover:bg-primary/10"
                            style={{ backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 1)' : 'rgba(243, 244, 246, 1)' }}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-haspopup="menu"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu with smooth transition */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden overflow-y-auto max-h-[calc(100vh-4rem)] border-b shadow-lg w-full"
                        style={{
                            backgroundColor: isDarkMode ? 'rgb(17, 24, 39)' : 'white',
                            color: isDarkMode ? 'white' : 'rgb(17, 24, 39)',
                            borderColor: isDarkMode ? 'rgba(75, 85, 99, 1)' : 'rgba(229, 231, 235, 1)'
                        }}
                    >
                        <div className="container mx-auto px-4 py-4 space-y-3 w-full" role="menu" aria-label="Mobile navigation menu">
                            {/* Search bar for mobile */}
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Icon name="Search" size={16} className="text-gray-400" />
                                </div>
                                <input
                                    type="search"
                                    className={`block w-full pl-10 pr-3 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${isDarkMode ? "placeholder:text-gray-400" : "placeholder:text-gray-500"}`}
                                    style={{
                                        backgroundColor: isDarkMode ? 'rgb(31, 41, 55)' : 'rgb(249, 250, 251)',
                                        borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(209, 213, 219)',
                                        color: isDarkMode ? 'white' : 'rgb(17, 24, 39)'
                                    }}
                                    placeholder="Search..."
                                    aria-label="Search"
                                    role="searchbox"
                                />
                            </div>

                            {/* Mobile navigation links */}
                            <div className="mt-2 space-y-1 w-full">
                                {navLinks.map(link => renderMenuItem(link, "", true))}
                            </div>

                            {/* Mobile user section */}
                            <div className="mt-6 pt-6 pb-4 border-t w-full"
                                 style={{ borderColor: isDarkMode ? 'rgba(75, 85, 99, 1)' : 'rgba(229, 231, 235, 1)' }}>
                                {session ? (
                                    <div className="px-4 py-2 w-full">
                                        <div className="flex items-center w-full">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md bg-primary">
                                                    <span className="text-base font-medium">
                                                        {session.user?.name ? session.user.name.charAt(0).toUpperCase() : "U"}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-sm font-medium">{session.user?.name || "User"}</p>
                                                <p className="text-xs truncate mt-0.5"
                                                   style={{ color: isDarkMode ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)' }}>
                                                    {session.user?.email || ""}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4 space-y-2 w-full">
                                            <ThemedLink
                                                href="/profile"
                                                className="flex items-center w-full py-2.5 px-3 rounded-lg text-sm transition-all hover:bg-primary/10 hover:translate-x-1"
                                                onClick={handleNavigation}
                                            >
                                                <Icon name="User" size={16} className="mr-2" />
                                                Profile
                                            </ThemedLink>
                                            <ThemedLink
                                                href="/settings"
                                                className="flex items-center w-full py-2.5 px-3 rounded-lg text-sm transition-all hover:bg-primary/10 hover:translate-x-1"
                                                onClick={handleNavigation}
                                            >
                                                <Icon name="Settings" size={16} className="mr-2" />
                                                Settings
                                            </ThemedLink>
                                            <button
                                                onClick={() => {
                                                    handleNavigation();
                                                    signOut();
                                                }}
                                                className="flex items-center w-full text-left py-2 px-3 rounded-lg text-sm transition-all hover:translate-x-1"
                                                style={{
                                                    color: isDarkMode ? 'rgb(248, 113, 113)' : 'rgb(239, 68, 68)',
                                                    backgroundColor: 'transparent'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.currentTarget.style.backgroundColor = isDarkMode
                                                        ? 'rgba(239, 68, 68, 0.1)'
                                                        : 'rgba(254, 226, 226, 1)';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                }}
                                                role="menuitem"
                                                aria-label="Sign out of your account"
                                            >
                                                <Icon name="LogOut" size={16} className="mr-2" />
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="px-4 py-3 w-full">
                                        {renderUserSection(true)}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}