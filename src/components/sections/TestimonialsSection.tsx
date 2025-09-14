import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import React from "react"

export function TestimonialsSection() {
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
