import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ExternalLink, Palette } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import React from "react"

export function WorkSection() {
  const { isDarkMode } = useTheme();
  
  const projects = [
    {
      title: "HealthCare Platform Redesign",
      category: "UI/UX Design",
      description: "A comprehensive redesign of a healthcare platform focusing on improving patient experience and doctor workflows. Increased user engagement by 45% and reduced task completion time by 30%.",
      image: "/src/assets/Desktop - 10.jpg",
      tags: ["Healthcare", "UI/UX", "Web Design"],
      year: "2024"
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Design",
      description: "Designed a intuitive mobile banking app with focus on security and ease of use. Featured advanced biometric authentication and personalized financial insights.",
      image: "/src/assets/Desktop - 10.jpg",
      tags: ["FinTech", "Mobile", "iOS/Android"],
      year: "2024"
    },
    {
      title: "Brand Identity & Website",
      category: "Graphic Design",
      description: "Complete brand identity and website design for a creative agency. Developed logo, color palette, typography system, and responsive website that increased client inquiries by 60%.",
      image: "/src/assets/Desktop - 10.jpg",
      tags: ["Branding", "Web Design", "Identity"],
      year: "2024"
    },
    {
      title: "E-Learning Platform",
      category: "Web Design",
      description: "Designed and developed a modern e-learning platform with interactive course materials, progress tracking, and collaborative features for students and educators.",
      image: "/src/assets/Desktop - 10.jpg", 
      tags: ["Education", "Web Platform", "UX"],
      year: "2024"
    },
    {
      title: "Logo Design Collection",
      category: "Logo Design",
      description: "A collection of distinctive logos created for various clients across different industries, focusing on memorable and scalable brand marks.",
      image:'/src/assets/Desktop - 10.jpg',
      tags: ["Logo", "Branding", "Identity"],
      year: "2024"
    },
    {
      title: "Design System Library",
      category: "Design Systems",
      description: "Comprehensive design system with 100+ components, design tokens, and documentation. Used across multiple products to ensure consistency and efficiency.",
      image:'/src/assets/Desktop - 10.jpg',
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
          <AnimatePresence>
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
