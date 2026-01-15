"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Send, Clock, ExternalLink } from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { StaggerChildren, StaggerItem } from "@/components/stagger-children"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section with Animated Background */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div 
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#6fbf73]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-10 w-[600px] h-[600px] bg-[#4b2e83]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up">
            <motion.div 
              className="inline-flex items-center gap-3 text-sm tracking-widest text-gray-400 mb-8"
              whileHover={{ gap: 16 }}
            >
              <motion.div className="w-8 h-px bg-white" />
              GET IN TOUCH
            </motion.div>
            <motion.h1 
              className="text-7xl md:text-8xl font-bold mb-8"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Let's Create
              <br />
              <motion.span 
                className="bg-gradient-to-r from-[#6fbf73] via-white to-[#4b2e83] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 100%" }}
              >
                Together
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl"
              whileHover={{ x: 5, color: "#ffffff" }}
            >
              Have questions about our courses or want to start your creative journey? 
              We'd love to hear from you.
            </motion.p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Visit Us",
                content: "A/5, Mai Mauli Apartment, 1st floor, Opp. Nana Nani Park, Gaondevi Mandir, Manpada Road",
                highlight: "Dombivli-East, Mumbai",
                color: "#6fbf73",
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us",
                content: "Pooja: 9970 352 380\nMadhura: 9004 072 938\nDhanashri: 8329 573 722",
                highlight: "Mon-Sat, 9AM-6PM",
                color: "#4b2e83",
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Us",
                content: "info@neoinstitute.com",
                highlight: "Response within 24 hours",
                color: "#e07a5f",
              },
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="group relative cursor-pointer"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="relative p-8 rounded-2xl border border-white/10 bg-black group-hover:bg-white/5 group-hover:border-white/20 transition-all">
                    <motion.div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all"
                      style={{ backgroundColor: `${item.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 5, backgroundColor: `${item.color}30` }}
                    >
                      <motion.div style={{ color: item.color }}>
                        {item.icon}
                      </motion.div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#6fbf73] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed whitespace-pre-line group-hover:text-gray-300 transition-colors">
                      {item.content}
                    </p>
                    <p className="text-sm mt-4 font-semibold" style={{ color: item.color }}>
                      {item.highlight}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Creative Contact Form with Animated Character */}
      <section className="py-32 relative overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6fbf73]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-6xl md:text-7xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
              >
                Send Your
                <br />
                <span className="bg-gradient-to-r from-[#6fbf73] to-[#4b2e83] bg-clip-text text-transparent">
                  Message
                </span>
              </motion.h2>
              <p className="text-gray-400 text-lg">Fill out the form and we'll get back to you shortly</p>
            </div>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Animated Character */}
            <RevealOnScroll direction="left">
              <motion.div 
                className="relative h-[500px] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Character Body */}
                <div className="relative">
                  {/* Head */}
                  <motion.div 
                    className="relative w-48 h-48 bg-gradient-to-br from-[#6fbf73]/20 to-[#4b2e83]/20 rounded-full border-4 border-white/20"
                    animate={{ 
                      y: focusedField ? [0, -5, 0] : [0, -10, 0] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {/* Eyes */}
                    <div className="absolute top-16 left-0 right-0 flex justify-center gap-8">
                      {/* Left Eye */}
                      <motion.div 
                        className="relative w-8 h-8 bg-white rounded-full overflow-hidden"
                        animate={{ 
                          scaleY: focusedField === "message" ? 0.1 : 1 
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="w-4 h-4 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          animate={{ 
                            x: focusedField === "name" ? -5 : focusedField === "email" ? 5 : 0,
                            y: focusedField === "phone" ? -3 : focusedField === "course" ? 3 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                      
                      {/* Right Eye */}
                      <motion.div 
                        className="relative w-8 h-8 bg-white rounded-full overflow-hidden"
                        animate={{ 
                          scaleY: focusedField === "message" ? 0.1 : 1 
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="w-4 h-4 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          animate={{ 
                            x: focusedField === "name" ? -5 : focusedField === "email" ? 5 : 0,
                            y: focusedField === "phone" ? -3 : focusedField === "course" ? 3 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </div>

                    {/* Mouth - Smiling Face */}
                    <motion.div 
                      className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                      animate={{ 
                        scale: focusedField ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="48" height="24" viewBox="0 0 48 24" className="text-white/80">
                        <motion.path
                          d="M 4 4 Q 24 20 44 4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          animate={{
                            d: focusedField 
                              ? "M 4 2 Q 24 24 44 2"  // Bigger smile when focused
                              : "M 4 4 Q 24 20 44 4"  // Normal smile
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </svg>
                    </motion.div>

                    {/* Typing indicator when focused */}
                    {focusedField && (
                      <motion.div
                        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white/10 px-6 py-3 rounded-full border border-white/20 min-w-[200px] text-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {focusedField === "name" && formData.name ? (
                          <motion.p 
                            className="text-[#6fbf73] font-semibold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            Hi {formData.name}! 👋
                          </motion.p>
                        ) : focusedField === "email" && formData.email ? (
                          <motion.p 
                            className="text-[#4b2e83] font-semibold text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            I'll reply to {formData.email} 📧
                          </motion.p>
                        ) : focusedField === "phone" && formData.phone ? (
                          <motion.p 
                            className="text-[#e07a5f] font-semibold text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            Got your number: {formData.phone} 📱
                          </motion.p>
                        ) : focusedField === "course" && formData.course ? (
                          <motion.p 
                            className="text-[#6fbf73] font-semibold text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            {formData.course.replace("-", " ").toUpperCase()} sounds amazing! 🎨
                          </motion.p>
                        ) : focusedField === "message" && formData.message ? (
                          <motion.p 
                            className="text-white font-semibold text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            I'm reading every word... 👀
                          </motion.p>
                        ) : (
                          <div className="flex gap-2 justify-center">
                            <motion.div 
                              className="w-2 h-2 bg-[#6fbf73] rounded-full"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div 
                              className="w-2 h-2 bg-[#6fbf73] rounded-full"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div 
                              className="w-2 h-2 bg-[#6fbf73] rounded-full"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        )}
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6fbf73]/20 to-[#4b2e83]/20 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 20, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </RevealOnScroll>

            {/* Contact Form */}
            <RevealOnScroll direction="right">
              <motion.form 
                className="space-y-6 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Name Field */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email Field */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition-all"
                      placeholder="+91 1234567890"
                    />
                  </motion.div>
                </div>

                {/* Course Select */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Course Interest</label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    onFocus={() => setFocusedField("course")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="">Select a course</option>
                    <option value="applied-art">Applied Art</option>
                    <option value="ui-ux">UI / UX Design</option>
                    <option value="graphic">Graphic Design</option>
                    <option value="photography">Photography</option>
                    <option value="film">Film Making</option>
                    <option value="calligraphy">Calligraphy</option>
                    <option value="digital">Digital Painting</option>
                  </select>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6fbf73] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your interest..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-[#6fbf73] hover:bg-[#5aa85c] text-black font-bold text-lg py-6 rounded-xl transition-all flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </motion.div>
              </motion.form>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up">
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className="w-16 h-16 rounded-xl bg-[#6fbf73]/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Clock className="w-8 h-8 text-[#6fbf73]" />
                    </motion.div>
                    <h3 className="text-4xl font-bold text-white">Visit Us</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                      { day: "Saturday", time: "10:00 AM - 5:00 PM" },
                      { day: "Sunday", time: "Closed", closed: true },
                    ].map((schedule, idx) => (
                      <motion.div
                        key={idx}
                        className="flex justify-between items-center py-3 border-b border-white/5"
                        whileHover={{ x: 10 }}
                      >
                        <span className="text-gray-300 font-medium">{schedule.day}</span>
                        <span className={schedule.closed ? "text-[#e07a5f]" : "text-white"}>
                          {schedule.time}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">Quick Response</h4>
                    <p className="text-gray-400 leading-relaxed">
                      We aim to respond to all inquiries within 24 hours during business days. 
                      For urgent matters, please call us directly.
                    </p>
                  </div>
                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 text-white transition-all"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MapPin className="w-5 h-5" />
                    Get Directions
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
