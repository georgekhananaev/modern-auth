"use client";

import { useTheme } from "@/context/theme/useTheme";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const GITHUB_REPO_URL = "https://github.com/georgekhananaev/modern-auth";

interface ComingSoonProps {
  title?: string;
  description?: string;
  showHomeButton?: boolean;
  showBackButton?: boolean;
  additionalContent?: React.ReactNode;
  starsGoal?: number;
  currentStars?: number;
}

export default function ComingSoon({
                                     title = "Coming Soon",
                                     description = "We're working hard to bring you this feature. Please check back later.",
                                     showHomeButton = true,
                                     showBackButton = true,
                                     additionalContent,
                                     starsGoal = Math.floor(Math.random() * 200) + 50,
                                     currentStars = 0
                                   }: ComingSoonProps) {
  const { isDarkMode } = useTheme();
  const router = useRouter();

  // Consolidated state
  const [formState, setFormState] = useState({
    email: "",
    isValid: false,
    isSubmitting: false,
    notified: false
  });

  const [githubState, setGithubState] = useState({
    stars: currentStars,
    isLoading: true,
    hasError: false
  });

  const [tooltipVisible, setTooltipVisible] = useState(false);

  // Validate email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Memoized background styles to prevent recalculation
  const backgroundElements = useMemo(() => {
    return Array.from({ length: 4 }).map((_, i) => {
      const width = Math.random() * 200 + 50;
      const height = Math.random() * 200 + 50;
      const posX = Math.random() * 100 - 50;
      const posY = Math.random() * 100 - 50;
      const hue = Math.random() * 60 + 200;

      return {
        key: `bg-element-${i}`,
        style: {
          width,
          height,
          x: `${posX}%`,
          y: `${posY}%`,
          backgroundColor: `hsl(${hue}, 70%, ${isDarkMode ? 40 : 70}%)`,
          filter: "blur(70px)",
          zIndex: -1
        },
        animate: {
          x: [`${posX}%`, `${posX + 10}%`, `${posX - 10}%`],
          y: [`${posY}%`, `${posY - 15}%`, `${posY + 5}%`]
        },
        transition: {
          duration: 30 + i * 5,
          repeat: Infinity,
          repeatType: "reverse" as const
        }
      };
    });
  }, [isDarkMode]);

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormState(prev => ({
      ...prev,
      email,
      isValid: validateEmail(email)
    }));
  };

  // Handle notification form submission
  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.isValid) return;

    setFormState(prev => ({ ...prev, isSubmitting: true }));

    // Simulate API call
    setTimeout(() => {
      setFormState(prev => ({
        ...prev,
        notified: true,
        isSubmitting: false
      }));
    }, 800);
  };

  // Fetch GitHub stars once on mount
  useEffect(() => {
    const controller = new AbortController();

    async function fetchGitHubStars() {
      try {
        // Extract repo info
        const repoPath = GITHUB_REPO_URL.split('github.com/')[1] || "georgekhananaev/modern-auth";

        const response = await fetch(`https://api.github.com/repos/${repoPath}`, {
          signal: controller.signal,
          cache: 'no-store'
        });

        if (!response.ok) throw new Error("GitHub API error");

        const data = await response.json();
        setGithubState({
          stars: data.stargazers_count || Math.floor(starsGoal * 0.4),
          isLoading: false,
          hasError: false
        });
      } catch (error) {
        console.warn("Error fetching GitHub stars:", error);
        setGithubState({
          stars: Math.floor(starsGoal * 0.4),
          isLoading: false,
          hasError: true
        });
      }
    }

    // Add delay to prevent race conditions and rate limiting
    const timeoutId = setTimeout(() => {
      fetchGitHubStars();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [starsGoal]);

  // Calculate progress percentage
  const progressPercentage = Math.min(
      Math.round((githubState.stars / starsGoal) * 100),
      100
  );

  return (
      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Simplified background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          {backgroundElements.map(elem => (
              <motion.div
                  key={elem.key}
                  className="absolute rounded-full"
                  style={elem.style}
                  animate={elem.animate}
                  transition={elem.transition}
              />
          ))}
        </div>

        <motion.div
            className="text-center max-w-xl rounded-2xl shadow-xl backdrop-blur-sm p-8 border relative z-10"
            style={{
              backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.8)',
              borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          {/* Progress indicator */}
          <div
              className="mb-8 flex justify-center relative"
              onMouseEnter={() => setTooltipVisible(true)}
              onMouseLeave={() => setTooltipVisible(false)}
          >
            <div
                className="w-20 h-20 rounded-full flex items-center justify-center relative"
                style={{
                  background: githubState.isLoading
                      ? 'linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.3))'
                      : `conic-gradient(var(--color-primary) ${progressPercentage}%, ${isDarkMode ? '#374151' : '#f3f4f6'} 0%)`,
                  backgroundSize: githubState.isLoading ? '200% 100%' : 'auto',
                  animation: githubState.isLoading ? 'shimmer 1.5s infinite' : 'none'
                }}
            >
              <style jsx>{`
              @keyframes shimmer {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
              }
            `}</style>

              <div
                  className="absolute inset-1.5 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: isDarkMode ? 'rgb(31, 41, 55)' : 'white',
                  }}
              >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                >
                  <Icon name="Settings" size={36} className="text-primary" />
                </motion.div>
              </div>

              {/* Progress tooltip */}
              {tooltipVisible && (
                  <div
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap"
                      style={{
                        backgroundColor: isDarkMode ? 'rgb(55, 65, 81)' : 'rgb(243, 244, 246)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                      }}
                  >
                    Star Progress: {githubState.isLoading ? "Loading..." : `${progressPercentage}%`}
                    {githubState.hasError && (
                        <span className="ml-1 text-amber-500" title="Could not connect to GitHub API">
                    <Icon name="AlertTriangle" size={10} className="inline ml-1" />
                  </span>
                    )}
                  </div>
              )}
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl font-bold mb-3">{title}</h1>
          <p
              className="mb-4 text-lg"
              style={{
                color: isDarkMode ? 'rgb(209, 213, 219)' : 'rgb(75, 85, 99)'
              }}
          >
            {description}
          </p>

          {/* Star Goal Section */}
          <div
              className="mb-5 text-sm"
              style={{
                color: isDarkMode ? 'rgb(229, 231, 235)' : 'rgb(55, 65, 81)'
              }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Icon name="Github" size={16} className="mr-1.5" />
                <span className="font-medium">GitHub Stars Goal:</span>
              </div>
              <span
                  className="py-1 px-2 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                    color: isDarkMode ? 'rgb(147, 197, 253)' : 'rgb(37, 99, 235)'
                  }}
              >
              {githubState.isLoading ? (
                  <span className="inline-flex items-center">
                  <Icon name="Loader" size={10} className="mr-1 animate-spin" />
                  Loading...
                </span>
              ) : (
                  <>{githubState.stars} / {starsGoal}</>
              )}
            </span>
            </div>

            <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    width: githubState.isLoading ? '30%' : `${progressPercentage}%`,
                  }}
              />
            </div>

            <div className="flex justify-between mt-1 text-xs opacity-70">
              <span>0</span>
              <span>{Math.round(starsGoal / 2)}</span>
              <span>{starsGoal}</span>
            </div>
          </div>

          {/* Additional Content */}
          {additionalContent && (
              <div className="my-6">{additionalContent}</div>
          )}

          {/* Notification Form */}
          <div className="mb-6 mt-8">
            {!formState.notified ? (
                <div>
                  <div className="mb-3">
                    <p
                        className="text-sm mb-1"
                        style={{ color: isDarkMode ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)' }}
                    >
                      Get notified when this feature launches:
                    </p>
                    <p className="text-xs italic mb-2" style={{ color: isDarkMode ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)' }}>
                      Help us reach our GitHub star goal! <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Star us on GitHub
                    </a>
                    </p>
                  </div>
                  <form onSubmit={handleNotify} className="flex">
                    <div className="relative flex-grow">
                      <input
                          type="email"
                          value={formState.email}
                          onChange={handleEmailChange}
                          placeholder="Enter your email"
                          className="w-full px-4 py-2.5 rounded-l-lg border transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-sm"
                          style={{
                            backgroundColor: isDarkMode ? 'rgba(55, 65, 81, 0.8)' : 'white',
                            borderColor: isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)',
                            color: isDarkMode ? 'white' : 'black'
                          }}
                          required
                      />
                    </div>
                    <button
                        type="submit"
                        disabled={!formState.isValid || formState.isSubmitting}
                        className={`px-4 py-2.5 rounded-r-lg text-white font-medium transition-all text-sm flex items-center ${
                            formState.isValid && !formState.isSubmitting
                                ? 'bg-primary hover:bg-primary/90'
                                : 'bg-gray-400 cursor-not-allowed'
                        }`}
                    >
                      {formState.isSubmitting ? (
                          <Icon name="Loader" size={16} className="mr-2 animate-spin" />
                      ) : (
                          <Icon name="Bell" size={16} className="mr-2" />
                      )}
                      Notify Me
                    </button>
                  </form>
                </div>
            ) : (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-green-700 dark:text-green-300 flex items-center">
                  <Icon name="CheckCircle" size={20} className="mr-2 flex-shrink-0" />
                  <div>
                    <p>Thanks! We&apos;ll notify you when this feature launches.</p>
                    <p className="text-xs mt-1">Don&apos;t forget to <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">star us on GitHub</a> to help us reach our goal!</p>
                  </div>
                </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {showBackButton && (
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="px-6 py-2.5 rounded-full transition-all hover:scale-105"
                    leftIcon={<Icon name="ArrowLeft" size={18} />}
                >
                  Go Back
                </Button>
            )}

            {showHomeButton && (
                <Button
                    variant="primary"
                    onClick={() => router.push('/')}
                    className="px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
                    leftIcon={<Icon name="Home" size={18} />}
                >
                  Home
                </Button>
            )}
          </div>
        </motion.div>
      </div>
  );
}