"use client";

import { useTheme } from "@/context/theme/useTheme";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// GitHub repository URL from env, with a fallback
const GITHUB_REPO_URL = process.env.NEXT_PUBLIC_GITHUB_REPO_URL || "https://github.com/georgekhananaev/modern-auth";

interface ComingSoonProps {
  title?: string;
  description?: string;
  showHomeButton?: boolean;
  showBackButton?: boolean;
  additionalContent?: React.ReactNode;
  releaseProgress?: number; // 0-100
  starsGoal?: number; // GitHub stars goal for release
  currentStars?: number; // Current GitHub stars
}

// CSS keyframes for loading animation
const shimmerAnimation = `
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;

export default function ComingSoon({
  title = "Coming Soon",
  description = "We're working hard to bring you this feature. Please check back later.",
  showHomeButton = true,
  showBackButton = true,
  additionalContent,
  releaseProgress = Math.floor(Math.random() * 70) + 10, // Random progress between 10-80%
  starsGoal = generateRandomStarsGoal(),
  currentStars: initialStars = 0 // Will be overridden by fetched value
}: ComingSoonProps) {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const [notified, setNotified] = useState(false);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [stars, setStars] = useState(initialStars);
  const [isLoading, setIsLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(false);
  
  // Fetch GitHub stars
  useEffect(() => {
    async function fetchGitHubStars() {
      try {
        setIsLoading(true);
        const repoOwnerAndName = GITHUB_REPO_URL.split('github.com/')[1];
        const response = await fetch(`https://api.github.com/repos/${repoOwnerAndName}`);
        
        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}`);
        }
        
        const data = await response.json();
        setStars(data.stargazers_count);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
        setStars(initialStars || Math.floor(starsGoal * 0.4)); // Fallback value
        setErrorLoading(true);
        setIsLoading(false);
      }
    }
    
    fetchGitHubStars();
  }, [starsGoal, initialStars]);
  
  // Validate email
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  }, [email]);
  
  // Simulate notification submission
  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setNotified(true);
      setIsSubmitting(false);
    }, 1000);
  };
  
  // Generate a random progress animation duration between 20-40s
  const progressAnimDuration = Math.random() * 20 + 20;
  
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Add global style for shimmer animation */}
      <style jsx global>{shimmerAnimation}</style>
      
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 - 50 + "%",
              backgroundColor: `hsl(${Math.random() * 60 + 200}, 70%, ${isDarkMode ? 40 : 70}%)`,
              filter: "blur(70px)",
              zIndex: -1
            }}
            animate={{
              x: [
                `${Math.random() * 100 - 50}%`, 
                `${Math.random() * 100 - 50}%`,
                `${Math.random() * 100 - 50}%`
              ],
              y: [
                `${Math.random() * 100 - 50}%`, 
                `${Math.random() * 100 - 50}%`,
                `${Math.random() * 100 - 50}%`
              ],
              scale: [1, 1.2, 0.9, 1.1, 1]
            }}
            transition={{
              duration: Math.random() * 50 + 50,
              repeat: Infinity,
              repeatType: "reverse",
            }}
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
        <motion.div 
          className="mb-8 flex justify-center relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            style={{
              background: isLoading 
                ? 'linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.3))' 
                : `conic-gradient(var(--color-primary) ${Math.round((stars / starsGoal) * 100)}%, ${isDarkMode ? '#374151' : '#f3f4f6'} 0%)`,
              backgroundSize: isLoading ? '200% 100%' : 'auto',
              animation: isLoading ? 'shimmer 1.5s infinite' : 'none'
            }}
          >
            <div 
              className="absolute inset-1.5 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: isDarkMode ? 'rgb(31, 41, 55)' : 'white',
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: progressAnimDuration, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <Icon name="Settings" size={36} className="text-primary" />
              </motion.div>
            </div>
            
            {/* Progress tooltip */}
            {tooltipVisible && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap"
                style={{
                  backgroundColor: isDarkMode ? 'rgb(55, 65, 81)' : 'rgb(243, 244, 246)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                Star Progress: {isLoading ? "Loading..." : `${Math.round((stars / starsGoal) * 100)}%`}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        
        <motion.h1 
          className="text-3xl font-bold mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="mb-4 text-lg"
          style={{
            color: isDarkMode ? 'rgb(209, 213, 219)' : 'rgb(75, 85, 99)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
        
        <motion.div
          className="mb-5 text-sm"
          style={{
            color: isDarkMode ? 'rgb(229, 231, 235)' : 'rgb(55, 65, 81)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
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
              {isLoading ? (
                <span className="inline-flex items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mr-1"
                  >
                    <Icon name="Loader" size={10} />
                  </motion.div>
                  Loading...
                </span>
              ) : (
                <>{stars} / {starsGoal}</>
              )}
            </span>
          </div>
          
          <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full"
              style={{ 
                backgroundColor: 'var(--color-primary)',
                width: isLoading ? '30%' : `${Math.min(Math.round((stars / starsGoal) * 100), 100)}%`,
                backgroundImage: isLoading ? 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light), var(--color-primary))' : 'none',
                backgroundSize: isLoading ? '200% 100%' : 'auto'
              }}
              initial={{ width: 0 }}
              animate={{ 
                width: isLoading ? '30%' : `${Math.min(Math.round((stars / starsGoal) * 100), 100)}%`,
                backgroundPosition: isLoading ? ['0% 0%', '100% 0%', '0% 0%'] : '0% 0%'
              }}
              transition={{ 
                duration: isLoading ? 1.5 : 1, 
                repeat: isLoading ? Infinity : 0,
                delay: 0.5 
              }}
            />
          </div>
          
          <div className="flex justify-between mt-1 text-xs opacity-70">
            <span>0</span>
            <span>{Math.round(starsGoal / 2)}</span>
            <span>{starsGoal}</span>
          </div>
        </motion.div>
        
        {additionalContent && (
          <motion.div 
            className="my-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {additionalContent}
          </motion.div>
        )}
        
        {/* Notification form */}
        <motion.div
          className="mb-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {!notified ? (
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  disabled={!isValid || isSubmitting}
                  className={`px-4 py-2.5 rounded-r-lg text-white font-medium transition-all text-sm flex items-center ${
                    isValid && !isSubmitting 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <Icon name="Loader" size={16} />
                    </motion.div>
                  ) : (
                    <Icon name="Bell" size={16} className="mr-2" />
                  )}
                  Notify Me
                </button>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-green-700 dark:text-green-300 flex items-center"
            >
              <Icon name="CheckCircle" size={20} className="mr-2 flex-shrink-0" />
              <div>
                <p>Thanks! We'll notify you when this feature launches.</p>
                <p className="text-xs mt-1">Don't forget to <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">star us on GitHub</a> to help us reach our goal!</p>
              </div>
            </motion.div>
          )}
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
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
        </motion.div>
      </motion.div>
    </div>
  );
}

// Helper function to generate a random stars goal between 50-250
function generateRandomStarsGoal(): number {
  // Generate random number between 50 and 250
  return Math.floor(Math.random() * (250 - 50 + 1)) + 50;
}