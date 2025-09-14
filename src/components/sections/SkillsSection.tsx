import { motion } from "motion/react";
import { Award, Palette, Code, Figma as FigmaIcon, Play } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import React from "react"

export function SkillsSection() {
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
