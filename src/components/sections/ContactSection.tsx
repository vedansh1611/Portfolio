import { motion } from "motion/react";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import React from "react";

export function ContactSection() {
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
