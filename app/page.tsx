"use client"

import Link from "next/link"
import { ArrowRight, Play, Sparkles, Palette, TrendingUp } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { StaggerChildren, StaggerItem } from "@/components/stagger-children"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />

      {/* HERO - Full Screen Bold Typography */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 bg-[#6fbf73]/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: "10%", left: "10%" }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-[#4b2e83]/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ bottom: "10%", right: "10%" }}
          />
          <motion.div
            className="absolute w-72 h-72 bg-[#e07a5f]/10 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: "50%", right: "25%" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Announcement Badge */}
            <RevealOnScroll direction="scale" duration={0.6}>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#6fbf73]/10 rounded-full border border-[#6fbf73]/30"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-[#6fbf73]" />
                <span className="text-sm font-medium text-[#6fbf73]">First Ever in Dombivli</span>
              </motion.div>
            </RevealOnScroll>

            {/* Main Headline - Ultra Bold */}
            <RevealOnScroll direction="up" delay={0.2}>
              <motion.h1
                className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter"
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Shape the
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-[#6fbf73] via-[#4b2e83] to-[#e07a5f] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  Creative Future
                </motion.span>
              </motion.h1>
            </RevealOnScroll>

            {/* Subheading */}
            <RevealOnScroll direction="up" delay={0.4}>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                NEO Institute of Applied Art transforms ambitious students into industry-leading designers, artists, and
                creative professionals.
              </p>
            </RevealOnScroll>

            {/* CTA Buttons */}
            <RevealOnScroll direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
                <Link href="/apply">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }} 
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-block"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#6fbf73] to-[#5aa85c] rounded-lg blur-xl opacity-50"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <Button
                      size="lg"
                      className="relative bg-[#6fbf73] hover:bg-[#5aa85c] text-black font-bold h-12 px-8 text-base group"
                    >
                      Start Your Journey
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition" />
                    </Button>
                  </motion.div>
                </Link>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-block"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#4b2e83] to-[#6fbf73] rounded-lg blur-xl opacity-0"
                    whileHover={{ opacity: 0.5 }}
                  />
                  <Button
                    size="lg"
                    variant="outline"
                    className="relative border-2 border-[#4b2e83] text-white hover:bg-[#4b2e83]/10 h-12 px-8 text-base bg-transparent"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Story
                  </Button>
                </motion.div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#6fbf73]/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-[#6fbf73] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* IMMERSIVE SECTION - Creative Philosophy */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-[600px] h-[600px] bg-[#6fbf73]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-[#4b2e83]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* Left: Text Content */}
            <RevealOnScroll direction="left">
              <div className="space-y-8 sticky top-32">
                <div className="space-y-4">
                  <motion.h2 
                    className="text-5xl md:text-6xl font-bold leading-tight"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Where Creativity
                    <br />
                    <motion.span 
                      className="bg-gradient-to-r from-[#6fbf73] via-white to-[#4b2e83] bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      style={{ backgroundSize: "200% 100%" }}
                    >
                      Meets Excellence
                    </motion.span>
                  </motion.h2>
                  <motion.div 
                    className="h-1 w-24 bg-gradient-to-r from-[#6fbf73] to-[#4b2e83]"
                    whileInView={{ width: "8rem" }}
                    initial={{ width: 0 }}
                    transition={{ duration: 1 }}
                  />
                </div>

                <motion.p 
                  className="text-lg text-gray-400 leading-relaxed max-w-xl"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  NEO is not just an institute—it's a creative laboratory where ambitious students collaborate with
                  industry experts to push boundaries and create work that matters.
                </motion.p>

                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-block"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#4b2e83] to-[#6fbf73] rounded-lg blur-xl opacity-0"
                    whileHover={{ opacity: 0.6 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Button className="relative bg-[#4b2e83] hover:bg-[#3a1f5c] text-white h-12 px-8 text-base font-semibold">
                    Explore Our Approach
                  </Button>
                </motion.div>
              </div>
            </RevealOnScroll>

            {/* Right: Feature List */}
            <RevealOnScroll direction="right">
              <div className="space-y-6">
                <StaggerChildren className="space-y-6" staggerDelay={0.1}>
                  {[
                    { icon: Palette, title: "Industry Professionals", text: "Learn from award-winning experts actively shaping the creative industry" },
                    { icon: Sparkles, title: "Portfolio Building", text: "Build a competitive portfolio that opens doors to top agencies and studios" },
                    { icon: TrendingUp, title: "Modern Facilities", text: "Access cutting-edge creative studios and state-of-the-art equipment" },
                    { icon: Sparkles, title: "Creative Community", text: "Join a vibrant network of visionary creators and collaborative minds" },
                  ].map((item, idx) => (
                    <StaggerItem key={idx}>
                      <motion.div
                        className="group cursor-pointer"
                        whileHover={{ x: 10, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#6fbf73]/5 group-hover:border-[#6fbf73]/30 transition-all duration-300">
                          <motion.div 
                            className="w-12 h-12 bg-[#6fbf73]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#6fbf73]/20 transition-all"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <item.icon className="w-6 h-6 text-[#6fbf73]" />
                          </motion.div>
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-white group-hover:text-[#6fbf73] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* OUR PROGRAMS SECTION - Minimalist Clean Layout */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#6fbf73]/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <RevealOnScroll direction="up">
            <div className="mb-20">
              <motion.div 
                className="inline-flex items-center gap-3 text-sm tracking-widest text-gray-400 mb-8"
                whileHover={{ gap: 16 }}
              >
                <motion.div className="w-8 h-px bg-white" />
                OUR PROGRAMS
              </motion.div>
              <motion.h2 
                className="text-5xl md:text-7xl font-bold"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Transform Your
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-[#6fbf73] via-white to-[#4b2e83] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  Creative Vision
                </motion.span>
              </motion.h2>
            </div>
          </RevealOnScroll>

          {/* Programs Grid */}
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {[
              { title: "Applied Art", duration: "6 months", icon: "🎨", desc: "Master fundamental art principles and techniques" },
              { title: "Photography", duration: "4-6 months", icon: "📸", desc: "Professional photography and visual storytelling" },
              { title: "Graphic Design", duration: "6 months", icon: "🎭", desc: "Visual communication and brand design" },
              { title: "UI / UX Design", duration: "6 months", icon: "🎨", desc: "Digital experiences that engage users" },
              { title: "Film Making", duration: "6 months", icon: "🎬", desc: "Storytelling through motion and cinema" },
              { title: "Calligraphy", duration: "4 months", icon: "✒️", desc: "Traditional art of beautiful handwriting" },
              { title: "Software Training", duration: "3-6 months", icon: "💻", desc: "Photoshop, Illustrator, After Effects & more" },
              { title: "Digital Painting", duration: "4 months", icon: "🖌️", desc: "Master digital art and illustration" },
              { title: "Elementary Classes", duration: "Flexible", icon: "📚", desc: "Exam preparation courses" },
            ].map((program, idx) => (
              <StaggerItem key={idx}>
                <Link href="/courses">
                  <motion.div
                    className="group relative cursor-pointer"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-[#6fbf73]/10 to-[#4b2e83]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative p-8 rounded-2xl border border-white/10 bg-black group-hover:bg-white/5 group-hover:border-[#6fbf73]/30 transition-all duration-300">
                      <motion.div 
                        className="text-5xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {program.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#6fbf73] transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {program.desc}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full group-hover:bg-[#6fbf73]/10 group-hover:text-[#6fbf73] transition-colors">
                          {program.duration}
                        </span>
                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#6fbf73] group-hover:translate-x-2 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* View All Button */}
          <RevealOnScroll direction="up" delay={0.6} className="text-center mt-16">
            <Link href="/courses">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                className="relative inline-block"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#6fbf73] to-[#4b2e83] rounded-full blur-xl opacity-50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Button className="relative bg-[#6fbf73] hover:bg-[#5aa85c] text-black h-14 px-12 rounded-full font-bold text-lg">
                  Explore All Programs →
                </Button>
              </motion.div>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#4b2e83]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <RevealOnScroll direction="up">
            <div className="mb-20">
              <motion.div 
                className="inline-flex items-center gap-3 text-sm tracking-widest text-gray-400 mb-8"
                whileHover={{ gap: 16 }}
              >
                <motion.div className="w-8 h-px bg-white" />
                STUDENT EXCELLENCE
              </motion.div>
              <motion.h2 
                className="text-5xl md:text-7xl font-bold"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Inspiring
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-[#6fbf73] via-white to-[#4b2e83] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  Work Portfolio
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-400 mt-6 max-w-2xl"
                whileHover={{ x: 5, color: "#ffffff" }}
              >
                Discover the exceptional work created by our talented students. Each project represents dedication, creativity, and professional excellence.
              </motion.p>
            </div>
          </RevealOnScroll>

          {/* Stats Cards */}
          <StaggerChildren className="grid md:grid-cols-3 gap-8 mb-16" staggerDelay={0.1}>
            {[
              { number: "500+", label: "Projects Completed", icon: "🎨" },
              { number: "95%", label: "Placement Rate", icon: "💼" },
              { number: "50+", label: "Award Winning Work", icon: "🏆" },
            ].map((stat, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="group relative cursor-pointer"
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#6fbf73]/10 to-[#4b2e83]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="relative p-8 rounded-2xl border border-white/10 bg-black group-hover:bg-white/5 group-hover:border-[#6fbf73]/30 transition-all text-center">
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-5xl font-bold text-[#6fbf73] mb-2">{stat.number}</div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Portfolio Showcase */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <RevealOnScroll direction="left">
              <motion.div
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#6fbf73]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative h-full p-8 border border-white/10 rounded-2xl bg-white/5 group-hover:border-[#6fbf73]/30 transition-all">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <motion.div 
                        className="text-6xl mb-6"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                      >
                        🎨
                      </motion.div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#6fbf73] transition-colors">
                        Creative Design
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        Award-winning designs crafted by our students for real-world clients and creative competitions.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 group-hover:text-[#6fbf73] transition-colors">
                      <span className="text-sm">View Projects</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <motion.div
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#4b2e83]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative h-full p-8 border border-white/10 rounded-2xl bg-white/5 group-hover:border-[#4b2e83]/30 transition-all">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <motion.div 
                        className="text-6xl mb-6"
                        whileHover={{ scale: 1.2, rotate: -15 }}
                      >
                        📸
                      </motion.div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#4b2e83] transition-colors">
                        Visual Storytelling
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        Professional photography and film projects showcasing technical excellence and creative vision.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 group-hover:text-[#4b2e83] transition-colors">
                      <span className="text-sm">View Projects</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          </div>

          {/* CTA Button */}
          <RevealOnScroll direction="up" className="text-center">
            <Link href="/portfolio">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                className="relative inline-block"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#4b2e83] to-[#6fbf73] rounded-full blur-xl opacity-50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Button className="relative bg-[#4b2e83] hover:bg-[#3a1f5c] text-white h-14 px-12 rounded-full font-bold text-lg">
                  View Full Portfolio →
                </Button>
              </motion.div>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHY NEO - Feature Cards */}
      <section className="relative py-32 bg-gradient-to-b from-black via-[#4b2e83]/5 to-black border-t border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up">
            <motion.h2 
              className="text-6xl md:text-7xl font-bold mb-4 max-w-2xl"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Why Choose
              <br />
              <motion.span 
                className="bg-gradient-to-r from-[#6fbf73] via-white to-[#4b2e83] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 100%" }}
              >
                NEO
              </motion.span>
            </motion.h2>
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-[#6fbf73] to-[#4b2e83] mb-16"
              whileInView={{ width: "8rem" }}
              initial={{ width: 0 }}
              transition={{ duration: 1 }}
            />
          </RevealOnScroll>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {[
              {
                number: "01",
                icon: "🎓",
                title: "Industry Leaders",
                description: "Learn from award-winning professionals actively shaping the creative industry",
              },
              {
                number: "02",
                icon: "💼",
                title: "Portfolio First",
                description: "Build a competitive portfolio from day one with real-world project experience",
              },
              {
                number: "03",
                icon: "🏢",
                title: "Modern Facilities",
                description: "Access state-of-the-art studios, equipment, and creative spaces",
              },
              {
                number: "04",
                icon: "🚀",
                title: "Career Support",
                description: "Direct mentorship and job placement assistance from industry networks",
              },
              {
                number: "05",
                icon: "🤝",
                title: "Collaborative Culture",
                description: "Work with diverse creative minds across design, film, photography, and art",
              },
              {
                number: "06",
                icon: "🌍",
                title: "Global Recognition",
                description: "Graduate with credentials recognized across top design and advertising firms",
              },
            ].map((feature, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="group relative h-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6fbf73]/10 to-[#4b2e83]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-8 rounded-2xl border border-[#6fbf73]/20 bg-black hover:bg-[#6fbf73]/5 hover:border-[#6fbf73]/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{feature.icon}</div>
                      <h3 className="text-5xl font-bold text-[#6fbf73]/30 group-hover:text-[#6fbf73]/50 transition">
                        {feature.number}
                      </h3>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#4b2e83] via-[#6fbf73]/20 to-[#4b2e83]"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ backgroundSize: "200% 100%" }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-80 h-80 bg-[#6fbf73]/10 rounded-full blur-3xl"
            animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
            transition={{ duration: 20, repeat: Infinity }}
            style={{ top: "-20%", right: "10%" }}
          />
          <motion.div
            className="absolute w-80 h-80 bg-[#4b2e83]/10 rounded-full blur-3xl"
            animate={{ x: [100, -100, 100], y: [50, -50, 50] }}
            transition={{ duration: 25, repeat: Infinity }}
            style={{ bottom: "-20%", left: "10%" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll direction="scale">
            <motion.div
              className="text-7xl mb-8"
              animate={{ rotate: [0, 10, 0, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              whileHover={{ scale: 1.3, rotate: 15 }}
            >
              🎨
            </motion.div>
            <motion.h2 
              className="text-6xl md:text-7xl font-bold mb-6 text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ready to <motion.span 
                className="bg-gradient-to-r from-[#6fbf73] via-white to-[#6fbf73] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 100%" }}
              >
                Create?
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
              whileHover={{ scale: 1.05, color: "#ffffff" }}
            >
              Admissions are open for 2025-26. Join a community of creative visionaries and shape your future.
            </motion.p>
            <motion.div 
              whileHover={{ scale: 1.1, y: -5 }} 
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              <Link href="/apply">
                <motion.div className="relative inline-block">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#6fbf73] to-white rounded-full blur-xl opacity-50"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <Button size="lg" className="relative bg-white hover:bg-gray-100 text-[#4b2e83] font-bold h-14 px-10 text-lg rounded-full">
                    Apply Now →
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
