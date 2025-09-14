import { motion } from "motion/react";
import { Users, Star, Award } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import React from "react";

export function AboutSection() {
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
