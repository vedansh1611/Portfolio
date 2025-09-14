import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import { ThemeToggle } from "../ThemeToggle";
import React from "react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { text: "About", href: "#about" },
    { text: "Work", href: "#work" },
    { text: "Skills", href: "#skills" },
    { text: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800/50' 
            : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
          : isDarkMode 
            ? 'bg-gray-900/80 backdrop-blur-sm' 
            : 'bg-white/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className={`text-4xl font-heading font-bold cursor-pointer transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-[#222222]'
            }`}
            whileHover={{ 
              scale: 1.05,
              color: "#8B5CF6"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            V.
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.text}
                className={`font-body font-medium hover:text-[#8B5CF6] transition-colors duration-300 relative group ${
                  isDarkMode ? 'text-gray-200' : 'text-[#222222]'
                }`}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B5CF6] group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* CTA Button */}
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] text-white rounded-lg font-body font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
            >
              Let's Collaborate
              <ArrowRight size={16} />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-[#222222]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden border-t transition-colors duration-300 backdrop-blur-md ${
                isDarkMode 
                  ? 'border-gray-800 bg-gray-900/95' 
                  : 'border-gray-200 bg-white/95'
              }`}
            >
              <div className="py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.text}
                    className={`block w-full text-left px-4 py-3 font-body font-medium hover:text-[#8B5CF6] rounded-lg transition-all duration-300 ${
                      isDarkMode 
                        ? 'text-gray-200 hover:bg-gray-800' 
                        : 'text-[#222222] hover:bg-gray-50'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.text}
                  </motion.button>
                ))}
                <motion.button
                  className="w-full px-4 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] text-white rounded-lg font-body font-semibold flex items-center justify-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  onClick={() => scrollToSection('#contact')}
                >
                  Let's Collaborate
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
