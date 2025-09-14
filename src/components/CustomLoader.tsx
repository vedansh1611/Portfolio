import { motion } from "motion/react";

interface CustomLoaderProps {
  isLoading: boolean;
  isDarkMode?: boolean;
}

export function CustomLoader({ isLoading, isDarkMode = false }: CustomLoaderProps) {
  if (!isLoading) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0a0a0a]' : 'bg-white'
      }`}
    >
      <div className="relative">
        {/* Custom Geometric Loader */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height={200} width={200} className="relative z-10">
            <defs>
              {/* Gradients that adapt to theme */}
              <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
                <stop 
                  style={{
                    stopColor: isDarkMode ? '#1e1e1e' : '#1e2026', 
                    stopOpacity: 1
                  }} 
                  offset="20%" 
                />
                <stop 
                  style={{
                    stopColor: isDarkMode ? '#2a2a2a' : '#414750', 
                    stopOpacity: 1
                  }} 
                  offset="60%" 
                />
              </linearGradient>
              
              <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="gradiente2">
                <stop 
                  style={{
                    stopColor: isDarkMode ? '#8B5CF600' : '#d3a51000', 
                    stopOpacity: 1
                  }} 
                  offset="20%" 
                />
                <motion.stop 
                  style={{
                    stopColor: isDarkMode ? '#8B5CF654' : '#d3a51054', 
                    stopOpacity: 1
                  }} 
                  offset="100%" 
                  animate={{
                    stopColor: isDarkMode 
                      ? ['#8B5CF654', '#10B98154', '#8B5CF654']
                      : ['#d3a51054', '#8B5CF654', '#d3a51054']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </linearGradient>
              
              <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente3">
                <stop 
                  style={{
                    stopColor: isDarkMode ? '#8B5CF600' : '#d3a51000', 
                    stopOpacity: 1
                  }} 
                  offset="20%" 
                />
                <motion.stop 
                  style={{
                    stopColor: isDarkMode ? '#10B98154' : '#d3a51054', 
                    stopOpacity: 1
                  }} 
                  offset="100%"
                  animate={{
                    stopColor: isDarkMode 
                      ? ['#10B98154', '#8B5CF654', '#10B98154']
                      : ['#d3a51054', '#8B5CF654', '#d3a51054']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </linearGradient>
            </defs>

            <g style={{ order: -1 }}>
              {/* Animated boundary polygons */}
              <motion.polygon 
                transform="rotate(45 100 100)" 
                strokeWidth={1} 
                stroke={isDarkMode ? "#8B5CF6" : "#d3a410"} 
                fill="none" 
                points="70,70 148,50 130,130 50,150"
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.polygon 
                transform="rotate(45 100 100)" 
                strokeWidth={1} 
                stroke={isDarkMode ? "#10B981" : "#d3a410"} 
                fill="none" 
                points="70,70 148,50 130,130 50,150"
                animate={{
                  y: [0, 20, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* Main geometric shapes */}
              <polygon 
                transform="rotate(45 100 100)" 
                strokeWidth={2} 
                stroke="" 
                fill={isDarkMode ? "#2a2a2a" : "#414750"} 
                points="70,70 150,50 130,130 50,150" 
              />
              
              <polygon 
                strokeWidth={2} 
                stroke="" 
                fill="url(#gradiente)" 
                points="100,70 150,100 100,130 50,100" 
              />
              
              {/* Side panels with gradient fills */}
              <polygon 
                transform="translate(20, 31)" 
                strokeWidth={2} 
                stroke="" 
                fill={isDarkMode ? "#8B5CF6" : "#b7870f"} 
                points="80,50 80,75 80,99 40,75" 
              />
              
              <polygon 
                transform="translate(20, 31)" 
                strokeWidth={2} 
                stroke="" 
                fill="url(#gradiente2)" 
                points="40,-40 80,-40 80,99 40,75" 
              />
              
              <polygon 
                transform="rotate(180 100 100) translate(20, 20)" 
                strokeWidth={2} 
                stroke="" 
                fill={isDarkMode ? "#10B981" : "#d3a410"} 
                points="80,50 80,75 80,99 40,75" 
              />
              
              <polygon 
                transform="rotate(0 100 100) translate(60, 20)" 
                strokeWidth={2} 
                stroke="" 
                fill="url(#gradiente3)" 
                points="40,-40 80,-40 80,85 40,110.2" 
              />
              
              {/* Floating particles */}
              <motion.polygon 
                transform="rotate(45 100 100) translate(80, 95)" 
                strokeWidth={2} 
                stroke="" 
                fill={isDarkMode ? "#ffffff" : "#ffe4a1"} 
                points="5,0 5,5 0,5 0,0"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.polygon 
                transform="rotate(45 100 100) translate(80, 55)" 
                strokeWidth={2} 
                stroke="" 
                fill={isDarkMode ? "#8B5CF6" : "#ccb069"} 
                points="6,0 6,6 0,6 0,0"
                animate={{
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              <motion.polygon 
                transform="rotate(45 100 100) translate(70, 80)" 
                strokeWidth={2} 
                stroke="" 
                fill={isDarkMode ? "#10B981" : "#fff"} 
                points="2,0 2,2 0,2 0,0"
                animate={{
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* Base shadows */}
              <polygon 
                strokeWidth={2} 
                stroke="" 
                fill={isDarkMode ? "#1a1a1a" : "#292d34"} 
                points="29.5,99.8 100,142 100,172 29.5,130" 
              />
              
              <polygon 
                transform="translate(50, 92)" 
                strokeWidth={2} 
                stroke="" 
                fill={isDarkMode ? "#0f0f0f" : "#1f2127"} 
                points="50,50 120.5,8 120.5,35 50,80" 
              />
            </g>
          </svg>
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center ${
            isDarkMode ? 'text-white' : 'text-[#222222]'
          }`}
        >
          <motion.div
            className="text-xl font-heading font-semibold"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className={isDarkMode ? 'text-[#8B5CF6]' : 'text-[#8B5CF6]'}>
              Crafting Digital Experiences
            </span>
          </motion.div>
          
          <motion.div 
            className={`mt-2 text-sm font-body ${
              isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Loading your portfolio...
          </motion.div>
        </motion.div>

        {/* Ambient glow effect */}
        <motion.div
          className={`absolute inset-0 -z-10 rounded-full blur-3xl ${
            isDarkMode 
              ? 'bg-gradient-to-r from-[#8B5CF6]/20 to-[#10B981]/20' 
              : 'bg-gradient-to-r from-[#8B5CF6]/10 to-[#10B981]/10'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}