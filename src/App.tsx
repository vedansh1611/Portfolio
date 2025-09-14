import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MusicPlayer } from "./components/MusicPlayer";
import { CustomLoader } from "./components/CustomLoader";
import { ThemeProvider, useTheme } from "./components/ThemeProvider";
import { Navigation } from "./components/sections/Navigation";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { WorkSection } from "./components/sections/WorkSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/sections/Footer";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Increased for custom loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-[#F5F5F5]'
    }`}>
      <AnimatePresence>
        {isLoading && <CustomLoader isLoading={isLoading} isDarkMode={isDarkMode} />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <WorkSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
          <MusicPlayer />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}