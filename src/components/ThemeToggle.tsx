import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import React from "react"

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-3 rounded-full transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:bg-gray-700/80' 
          : 'bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white'
      } shadow-lg hover:shadow-xl`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDarkMode ? 0 : 1,
            opacity: isDarkMode ? 0 : 1,
            rotate: isDarkMode ? 180 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Sun className="w-6 h-6 text-amber-500" />
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDarkMode ? 1 : 0,
            opacity: isDarkMode ? 1 : 0,
            rotate: isDarkMode ? 0 : -180,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Moon className="w-6 h-6 text-blue-400" />
        </motion.div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className={`absolute inset-0 rounded-full blur-lg -z-10 ${
          isDarkMode ? 'bg-blue-400/20' : 'bg-amber-500/20'
        }`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}