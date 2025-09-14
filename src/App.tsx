import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Download, ExternalLink, Mail, Linkedin, Github, Star, Users, Award, Palette, Code, Figma as FigmaIcon, Play } from "lucide-react";
import { MusicPlayer } from "./components/MusicPlayer";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { CustomLoader } from "./components/CustomLoader";
import { ThemeProvider, useTheme } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import svgPaths from "./imports/svg-v43aerlv1n";

// Modern color scheme with soft neutrals and purple accent
const theme = {
  background: "#F5F5F5",
  text: "#222222", 
  accent: "#8B5CF6",
  secondary: "#10B981",
  neutral: "#6B7280",
  cardBg: "#FFFFFF"
};

// Removed - replaced with CustomLoader component

function Navigation() {
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

function HeroSection() {
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

function AboutSection() {
  const { isDarkMode } = useTheme();
  
  return (
    <section id="about" className={`py-24 lg:py-32 transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                  isDarkMode ? 'bg-[#8B5CF6]/20' : 'bg-[#8B5CF6]/10'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Users className="w-4 h-4 text-[#8B5CF6]" />
                <span className="font-body text-sm text-[#8B5CF6] font-medium">About Me</span>
              </motion.div>

              <motion.h2
                className={`text-4xl lg:text-5xl font-heading font-bold leading-tight transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-[#222222]'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Passionate Designer
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent">
                  Creating Impact
                </span>
              </motion.h2>
            </div>

            <motion.div
              className={`space-y-6 font-body text-lg leading-relaxed transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p>
                I'm a passionate designer based in <strong className={isDarkMode ? 'text-white' : 'text-[#222222]'}>India</strong>, blending creativity with functionality to create digital experiences that truly matter. Over the past 6+ months, I've worked on diverse projects spanning UI/UX design, web design, and branding.
              </p>
              
              <p>
                Each design I create tells a story while achieving measurable business goals. I believe in the power of thoughtful design to transform complex problems into elegant, intuitive solutions that users love.
              </p>

              <p>
                My expertise spans across <strong className={isDarkMode ? 'text-white' : 'text-[#222222]'}>Figma, Adobe XD, Illustrator, After Effects, Photoshop, and DaVinci Resolve</strong>, allowing me to bring concepts to life across multiple mediums and platforms.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: Star, title: "User-Centered", desc: "Designing with empathy and user needs at the core" },
                { icon: Award, title: "Quality Focus", desc: "Delivering polished, professional results every time" },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className={`p-6 rounded-xl transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/50 hover:bg-gray-600/60 hover:shadow-xl' 
                      : 'bg-[#F5F5F5] hover:bg-white hover:shadow-lg'
                  }`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <value.icon className="w-8 h-8 text-[#8B5CF6] mb-3" />
                  <h3 className={`font-heading font-semibold mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-[#222222]'
                  }`}>{value.title}</h3>
                  <p className={`font-body text-sm transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
                  }`}>{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU3NzM5NjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern workspace showcasing design process"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/20 to-transparent"></div>
              
              {/* Floating stats card */}
              <motion.div
                className={`absolute bottom-6 left-6 right-6 backdrop-blur-md rounded-xl p-6 shadow-lg transition-colors duration-500 ${
                  isDarkMode ? 'bg-gray-800/95 shadow-gray-900/50' : 'bg-white/95'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className={`text-2xl font-heading font-bold transition-colors duration-500 ${
                      isDarkMode ? 'text-white' : 'text-[#222222]'
                    }`}>15+</div>
                    <div className={`text-sm font-body transition-colors duration-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
                    }`}>Projects</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-heading font-bold transition-colors duration-500 ${
                      isDarkMode ? 'text-white' : 'text-[#222222]'
                    }`}>100%</div>
                    <div className={`text-sm font-body transition-colors duration-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
                    }`}>Client Satisfaction</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-heading font-bold transition-colors duration-500 ${
                      isDarkMode ? 'text-white' : 'text-[#222222]'
                    }`}>6+</div>
                    <div className={`text-sm font-body transition-colors duration-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
                    }`}>Months Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const { isDarkMode } = useTheme();
  
  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: FigmaIcon,
      skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping", "Design Systems"],
      description: "Creating intuitive and beautiful user interfaces with a focus on user experience."
    },
    {
      title: "Graphic Design",
      icon: Palette,
      skills: ["Illustrator", "Photoshop", "Canva", "Brand Identity", "Print Design", "Digital Art"],
      description: "Crafting compelling visual identities and marketing materials that capture attention."
    },
    {
      title: "Motion Graphics",
      icon: Play,
      skills: ["After Effects", "DaVinci Resolve", "Animation", "Video Editing", "Motion Design"],
      description: "Bringing designs to life through engaging animations and motion graphics."
    },
    {
      title: "Web Design",
      icon: Code,
      skills: ["HTML/CSS", "Responsive Design", "Web Standards", "Performance", "Accessibility"],
      description: "Building responsive, accessible websites that look great on every device."
    }
  ];

  return (
    <section id="skills" className={`py-24 lg:py-32 transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-[#F5F5F5]'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full transition-colors duration-500 ${
              isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Award className="w-4 h-4 text-[#8B5CF6]" />
            <span className="font-body text-sm text-[#8B5CF6] font-medium">What I Bring to the Table</span>
          </motion.div>

          <motion.h2
            className={`text-4xl lg:text-5xl font-heading font-bold leading-tight transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-[#222222]'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Skills & <span className="bg-gradient-to-r from-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent">Expertise</span>
          </motion.h2>

          <motion.p
            className={`text-xl font-body max-w-3xl mx-auto transition-colors duration-500 ${
              isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            A comprehensive toolkit of design and technical skills honed through hands-on experience and continuous learning.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-750 shadow-gray-900/50' 
                  : 'bg-white'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${
                  isDarkMode ? 'bg-[#8B5CF6]/20' : 'bg-[#8B5CF6]/10'
                }`}>
                  <category.icon className="w-8 h-8 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className={`text-xl font-heading font-bold transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-[#222222]'
                  }`}>{category.title}</h3>
                  <p className={`font-body text-sm transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
                  }`}>{category.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className={`px-3 py-2 rounded-lg font-body text-sm transition-all duration-300 cursor-default ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-[#8B5CF6]/20 text-gray-300 hover:text-[#8B5CF6]' 
                        : 'bg-[#F5F5F5] hover:bg-[#8B5CF6]/10 text-[#6B7280] hover:text-[#8B5CF6]'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className={`text-2xl font-heading font-bold mb-8 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-[#222222]'
          }`}>Favorite Tools</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Figma", color: "#F24E1E" },
              { name: "Adobe XD", color: "#FF61F6" },
              { name: "Illustrator", color: "#FF9A00" },
              { name: "Photoshop", color: "#31A8FF" },
              { name: "After Effects", color: "#9999FF" },
              { name: "DaVinci Resolve", color: isDarkMode ? "#5DADE2" : "#233A51" }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                className={`group px-6 py-3 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-default ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 shadow-gray-900/50' 
                    : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <span
                  className="font-body font-medium transition-colors duration-300"
                  style={{ color: tool.color }}
                >
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorkSection() {
  const { isDarkMode } = useTheme();
  
  const projects = [
    {
      title: "HealthCare Platform Redesign",
      category: "UI/UX Design",
      description: "A comprehensive redesign of a healthcare platform focusing on improving patient experience and doctor workflows. Increased user engagement by 45% and reduced task completion time by 30%.",
      image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1NzgyNTcwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Healthcare", "UI/UX", "Web Design"],
      year: "2024"
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Design",
      description: "Designed a intuitive mobile banking app with focus on security and ease of use. Featured advanced biometric authentication and personalized financial insights.",
      image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU3NzU1NjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["FinTech", "Mobile", "iOS/Android"],
      year: "2024"
    },
    {
      title: "Brand Identity & Website",
      category: "Graphic Design",
      description: "Complete brand identity and website design for a creative agency. Developed logo, color palette, typography system, and responsive website that increased client inquiries by 60%.",
      image: "https://images.unsplash.com/photo-1683818051102-dd1199d163b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc1NzcyNDM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Branding", "Web Design", "Identity"],
      year: "2024"
    },
    {
      title: "E-Learning Platform",
      category: "Web Design",
      description: "Designed and developed a modern e-learning platform with interactive course materials, progress tracking, and collaborative features for students and educators.",
      image: "./assets/Desktop - 9.jpg" , 
      tags: ["Education", "Web Platform", "UX"],
      year: "2024"
    },
    {
      title: "Logo Design Collection",
      category: "Logo Design",
      description: "A collection of distinctive logos created for various clients across different industries, focusing on memorable and scalable brand marks.",
      image: "https://shmector.com/_ph/13/188552034.png",
      tags: ["Logo", "Branding", "Identity"],
      year: "2024"
    },
    {
      title: "Design System Library",
      category: "Design Systems",
      description: "Comprehensive design system with 100+ components, design tokens, and documentation. Used across multiple products to ensure consistency and efficiency.",
      image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU3NzM5NjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Design System", "Components", "Documentation"],
      year: "2024"
    }
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'UI/UX Design', 'Mobile Design', 'Graphic Design', 'Web Design', 'Logo Design', 'Design Systems'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className={`py-24 lg:py-32 transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              isDarkMode ? 'bg-[#8B5CF6]/20' : 'bg-[#8B5CF6]/10'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Palette className="w-4 h-4 text-[#8B5CF6]" />
            <span className="font-body text-sm text-[#8B5CF6] font-medium">Selected Projects</span>
          </motion.div>

          <motion.h2
            className={`text-4xl lg:text-5xl font-heading font-bold leading-tight transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-[#222222]'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Featured <span className="bg-gradient-to-r from-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent">Work</span>
          </motion.h2>

          <motion.p
            className={`text-xl font-body max-w-3xl mx-auto transition-colors duration-500 ${
              isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Designs that merge aesthetics with usability, creating meaningful experiences that drive results.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#8B5CF6] text-white shadow-lg'
                  : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-md'
                    : 'bg-[#F5F5F5] text-[#6B7280] hover:bg-white hover:shadow-md'
              }`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`group relative rounded-2xl shadow-sm border overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                    : 'bg-white border-gray-100'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -12 }}
                layout
              >
                {/* Full Image Background */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Content that appears on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={false}
                  >
                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {/* Top Section - Category and Year */}
                      <motion.div
                        className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                      >
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-body font-medium border border-white/30">
                          {project.category}
                        </span>
                        <span className="text-xs font-body text-white/80">{project.year}</span>
                      </motion.div>

                      {/* Bottom Section - Main Content */}
                      <motion.div
                        className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                      >
                        <div>
                          <h3 className="text-xl font-heading font-bold text-white mb-2 leading-tight">
                            {project.title}
                          </h3>
                          
                          <p className="font-body text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white/90 rounded text-xs font-body border border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between">
                          <motion.button
                            className="flex items-center gap-2 text-white font-body font-medium text-sm hover:gap-3 transition-all duration-300 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => alert(`Viewing ${project.title} case study!`)}
                          >
                            View Case Study
                            <ArrowRight size={14} />
                          </motion.button>
                          
                          <motion.button
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-300"
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => alert(`Viewing ${project.title} case study!`)}
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] text-white rounded-lg font-body font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Loading more projects!")}
          >
            See My Design Journey
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { isDarkMode } = useTheme();
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content: "Vedansh's design work exceeded our expectations. His attention to detail and user-centric approach transformed our product's user experience. The design system he created has been instrumental in maintaining consistency across our platform.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4db?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen", 
      role: "CEO at StartupXYZ",
      content: "Working with Vedansh was a game-changer for our brand. His creative vision and professional execution helped us establish a strong visual identity that resonates with our target audience. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "Vedansh delivered exceptional designs that perfectly captured our brand essence. His collaborative approach and quick turnaround times made the entire project smooth and enjoyable. The results speak for themselves!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className={`py-24 lg:py-32 transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-[#F5F5F5]'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full ${
              isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-4 h-4 text-[#8B5CF6]" />
            <span className="font-body text-sm text-[#8B5CF6] font-medium">Testimonials</span>
          </motion.div>

          <motion.h2
            className={`text-4xl lg:text-5xl font-heading font-bold leading-tight transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-[#222222]'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            What Clients <span className="bg-gradient-to-r from-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent">Say</span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className={`rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative ${
                isDarkMode 
                  ? 'bg-gray-800 shadow-gray-900/50' 
                  : 'bg-white'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Quote Icon */}
              <div className={`absolute top-6 right-6 text-4xl font-serif ${
                isDarkMode ? 'text-[#8B5CF6]/30' : 'text-[#8B5CF6]/20'
              }`}>"</div>
              
              {/* Content */}
              <p className={`font-body leading-relaxed mb-6 relative z-10 transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
              }`}>
                {testimonial.content}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <ImageWithFallback
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className={`font-heading font-semibold transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-[#222222]'
                  }`}>{testimonial.name}</h4>
                  <p className={`font-body text-sm transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'
                  }`}>{testimonial.role}</p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#10B981] text-[#10B981]" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { isDarkMode } = useTheme();
  
  return (
    <section id="contact" className={`py-24 lg:py-32 transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-[#8B5CF6]/5 to-[#10B981]/5'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full ${
                  isDarkMode ? 'bg-gray-700/80' : 'bg-white/80'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Mail className="w-4 h-4 text-[#8B5CF6]" />
                <span className="font-body text-sm text-[#8B5CF6] font-medium">Let's Create Something Amazing</span>
              </motion.div>

              <motion.h2
                className={`text-4xl lg:text-5xl font-heading font-bold leading-tight transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-[#222222]'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Ready to bring your
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent">
                  vision to life?
                </span>
              </motion.h2>

              <motion.p
                className={`text-xl font-body leading-relaxed transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Have a project or collaboration in mind? I'm open for freelance, collaborations, and full-time opportunities. Let's connect and create something extraordinary together!
              </motion.p>
            </div>

            {/* Contact Methods */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700/60 hover:bg-gray-600/80' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}>
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-[#8B5CF6]/20' : 'bg-[#8B5CF6]/10'
                }`}>
                  <Mail className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div>
                  <div className={`font-heading font-semibold transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-[#222222]'
                  }`}>Email</div>
                  <div className={`font-body transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
                  }`}>vedansh.patel@example.com</div>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700/60 hover:bg-gray-600/80' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}>
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-[#10B981]/20' : 'bg-[#10B981]/10'
                }`}>
                  <Linkedin className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <div className={`font-heading font-semibold transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-[#222222]'
                  }`}>LinkedIn</div>
                  <div className={`font-body transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
                  }`}>linkedin.com/in/vedanshpatel</div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              {[
                { icon: Linkedin, href: "#", color: "#0077B5" },
                { icon: Github, href: "#", color: "#333" },
                { icon: Mail, href: "#", color: "#EA4335" },
              ].map((social, index) => (
                <motion.button
                  key={index}
                  className={`p-3 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/80 hover:bg-gray-600' 
                      : 'bg-white/80 hover:bg-white'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => alert("Social link clicked!")}
                >
                  <social.icon className="w-6 h-6" style={{ color: social.color }} />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right CTA */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={`backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden ${
              isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
            }`}>
              {/* Background Pattern */}
              <div className={`absolute inset-0 ${isDarkMode ? 'opacity-10' : 'opacity-5'}`}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8B5CF6] to-[#10B981]"></div>
              </div>

              <div className="relative space-y-8">
                <div className="text-center space-y-4">
                  <h3 className={`text-3xl font-heading font-bold transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-[#222222]'
                  }`}>
                    Start Your Project
                  </h3>
                  <p className={`font-body transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-[#6B7280]'
                  }`}>
                    Let's discuss your ideas and turn them into reality
                  </p>
                </div>

                <div className="space-y-4">
                  <motion.button
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] text-white rounded-xl font-body font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => alert("Opening email client...")}
                  >
                    <Mail size={20} />
                    Send Message
                  </motion.button>

                  <motion.button
                    className="w-full px-8 py-4 border-2 border-[#8B5CF6] text-[#8B5CF6] rounded-xl font-body font-semibold hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => alert("Scheduling call...")}
                  >
                    <ExternalLink size={20} />
                    Schedule Call
                  </motion.button>
                </div>

                <div className="text-center pt-4">
                  <p className={`font-body text-sm transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-400' : 'text-[#6B7280]'
                  }`}>
                    Usually responds within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { isDarkMode } = useTheme();
  
  return (
    <footer className={`py-16 text-white transition-colors duration-500 ${
      isDarkMode ? 'bg-black' : 'bg-[#222222]'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              className="text-4xl font-heading font-bold"
              whileHover={{ scale: 1.05 }}
            >
              V.
            </motion.div>
            <p className={`font-body leading-relaxed max-w-md transition-colors duration-500 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-400'
            }`}>
              Creating exceptional digital experiences that bridge creativity and functionality. Let's build something amazing together.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <motion.button
                  key={index}
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-white/15 hover:bg-white/25' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => alert("Social link clicked!")}
                >
                  <social.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Work', href: '#work' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <motion.button
                    className={`font-body transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    whileHover={{ x: 5 }}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <p className={`font-body transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-400'
              }`}>vedansh.patel@example.com</p>
              <p className={`font-body transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-400'
              }`}>+91 98765 43210</p>
              <p className={`font-body transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-400'
              }`}>Gujarat, India</p>
            </div>
          </div>
        </div>
        
        <div className={`border-t mt-12 pt-8 text-center transition-colors duration-500 ${
          isDarkMode ? 'border-gray-700' : 'border-gray-800'
        }`}>
          <p className={`font-body text-sm transition-colors duration-500 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-400'
          }`}>
            © 2025 Vedansh Patel. All rights reserved. • Built with passion for great design
          </p>
        </div>
      </div>
    </footer>
  );
}

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