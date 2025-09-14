import { motion } from "motion/react";
import { Linkedin, Github, Mail } from "lucide-react"; // Updated 'LinkedIn' to 'Linkedin'
import { useTheme } from "../ThemeProvider";
import React from "react";

export function Footer() {
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
                { icon: Linkedin, href: "www.linkedin.com/in/vedanshkumargothi" },
                { icon: Github, href: "https://github.com/vedansh1611" }, // Updated 'Github' to 'Github'
                { icon: Mail, href: "vedanshpatel1611@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-white/15 hover:bg-white/25' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
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
              }`}>vedanshpatel1611@gmail.com</p>
              <p className={`font-body transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-400'
              }`}>+91 9265746728</p>
              <p className={`font-body transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-400'
              }`}>Mumbai, India</p>
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