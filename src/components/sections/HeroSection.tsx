import { motion } from "motion/react";
import { ArrowRight, Download, Palette, Code } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import { Figma as FigmaIcon } from 'lucide-react';
import React from "react"

export function HeroSection() {
  const { isDarkMode } = useTheme();
  
  return (
    <section className={`relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-black' 
        : 'bg-gradient-to-br from-[#F5F5F5] to-white'
    }`}>
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Welcome Badge */}
            <motion.div
              className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full border border-[#8B5CF6]/20 shadow-sm ${
                isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              <span className={`font-body text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
              }`}>Available for projects</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className={`text-5xl lg:text-7xl font-heading font-bold leading-tight transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-[#222222]'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Crafting
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent">
                  Meaningful
                </span>
                <br />
                Digital Experiences
              </motion.h1>
              
              <motion.p
                className={`text-xl lg:text-2xl font-body leading-relaxed max-w-2xl transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                I'm <strong className={isDarkMode ? 'text-white' : 'text-[#222222]'}>Vedansh Patel</strong> — a UI/UX, graphic, and web designer with 6+ months of experience creating intuitive, user-focused designs that bridge creativity with functionality.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] text-white rounded-lg font-body font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-[#8B5CF6] text-[#8B5CF6] rounded-lg font-body font-semibold hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                 
                onClick={() => alert("CV download started!")}
              >
                <Download size={18} />
                Download CV
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <div className="text-center">
                <div className={`text-3xl font-heading font-bold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-[#222222]'
                }`}>15+</div>
                <div className={`text-sm font-body transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'
                }`}>Projects</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-heading font-bold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-[#222222]'
                }`}>6+</div>
                <div className={`text-sm font-body transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'
                }`}>Months Exp</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-heading font-bold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-[#222222]'
                }`}>100%</div>
                <div className={`text-sm font-body transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'
                }`}>Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px]">
              {/* Main gradient circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B5CF6]/20 via-[#10B981]/10 to-transparent"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Secondary ring */}
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-[#8B5CF6]/20"
                animate={{
                  rotate: [360, 0]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Floating design tools */}
              <motion.div
                className={`absolute top-10 right-10 p-3 rounded-xl shadow-lg transition-colors duration-500 ${
                  isDarkMode ? 'bg-gray-800 shadow-gray-900/50' : 'bg-white shadow-gray-300/50'
                }`}
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FigmaIcon className="w-6 h-6 text-[#8B5CF6]" />
              </motion.div>

              <motion.div
                className={`absolute bottom-10 left-10 p-3 rounded-xl shadow-lg transition-colors duration-500 ${
                  isDarkMode ? 'bg-gray-800 shadow-gray-900/50' : 'bg-white shadow-gray-300/50'
                }`}
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Palette className="w-6 h-6 text-[#10B981]" />
              </motion.div>

              <motion.div
                className={`absolute top-1/2 left-0 p-3 rounded-xl shadow-lg transform -translate-y-1/2 transition-colors duration-500 ${
                  isDarkMode ? 'bg-gray-800 shadow-gray-900/50' : 'bg-white shadow-gray-300/50'
                }`}
                animate={{
                  x: [0, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <Code className="w-6 h-6 text-[#8B5CF6]" />
              </motion.div>

              {/* Central text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className={`text-4xl lg:text-6xl font-heading font-bold mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-[#222222]'
                  }`}>
                    Design
                  </div>
                  <div className={`text-lg font-body transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'
                  }`}>
                    UI/UX • Graphic • Web
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl"></div>
    </section>
  );
}
