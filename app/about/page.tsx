"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Minus } from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
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
        
        <div className="relative max-w-5xl mx-auto">
          <RevealOnScroll direction="up">
            <div className="space-y-8">
              <motion.div 
                className="inline-flex items-center gap-3 text-sm tracking-widest text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ gap: 16 }}
              >
                <motion.div
                  animate={{ scaleX: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Minus className="w-8 h-px bg-[#6fbf73]" />
                </motion.div>
                ABOUT US
              </motion.div>
              
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                NEO Institute
                <br />
                <motion.span 
                  className="font-bold bg-gradient-to-r from-[#6fbf73] via-white to-[#4b2e83] bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ["0%", "100%", "0%"]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  of Applied Art
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="max-w-2xl space-y-6 text-lg text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>
                  First Applied Art Institute in Dombivli, providing premium education in creative fields since 2014.
                </p>
              </motion.div>

              <motion.div 
                className="pt-8"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link href="/courses" className="inline-flex items-center gap-2 text-white font-medium group">
                  <span className="relative">
                    Explore our programs
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-px bg-[#6fbf73] group-hover:w-full transition-all duration-300"
                    />
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-[#6fbf73] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>


      {/* Numbers with Hover Effects */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { number: "500+", label: "Students Trained", color: "#6fbf73" },
                { number: "15+", label: "Expert Faculty", color: "#4b2e83" },
                { number: "10+", label: "Years Experience", color: "#e07a5f" },
                { number: "2500+", label: "Career Paths", color: "#6fbf73" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center group cursor-pointer relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: stat.color }}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <div className="relative">
                    <motion.div 
                      className="text-5xl md:text-6xl font-light mb-2"
                      style={{ color: stat.color }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-400 tracking-wide group-hover:text-white transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Who We Are with Parallax Effect */}
      <section className="py-32 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6fbf73]/5 rounded-full blur-3xl"
          style={{ y: 50 }}
          animate={{ 
            x: [0, 100, 0],
            y: [50, 150, 50]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <RevealOnScroll direction="left">
              <motion.div 
                className="space-y-8 sticky top-32"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-3 text-sm tracking-widest text-gray-400"
                  whileHover={{ gap: 16 }}
                >
                  <Minus className="w-8 h-px bg-white" />
                  WHO WE ARE
                </motion.div>
                
                <h2 className="text-5xl md:text-6xl font-light">
                  First in
                  <br />
                  <motion.span 
                    className="font-bold bg-gradient-to-r from-[#6fbf73] to-white bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                    style={{ display: "inline-block" }}
                  >
                    Dombivli
                  </motion.span>
                </h2>
              </motion.div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="space-y-8 text-gray-400 leading-relaxed">
                <motion.p 
                  className="text-lg"
                  whileHover={{ x: 10, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  NEO Institute of Applied Art is the first Applied Art Institute in Dombivli, providing premium
                  education in creative fields. We specialize in guiding students toward successful careers in
                  advertising and applied arts.
                </motion.p>
                <motion.p 
                  className="text-lg"
                  whileHover={{ x: 10, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  With a team of highly experienced professionals from the advertising and art industries, we ensure
                  every student receives world-class guidance and support to achieve their career goals.
                </motion.p>
                
                <div className="space-y-4 pt-8">
                  {[
                    { text: "Industry-aligned curriculum", icon: "📚" },
                    { text: "Experienced faculty members", icon: "👨‍🏫" },
                    { text: "Modern facilities and tools", icon: "🎨" },
                    { text: "Portfolio-building projects", icon: "💼" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-4 group cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10, scale: 1.05 }}
                    >
                      <motion.div 
                        className="w-8 h-8 bg-[#6fbf73]/10 rounded-full flex items-center justify-center group-hover:bg-[#6fbf73]/30 transition-all"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-sm">{item.icon}</span>
                      </motion.div>
                      <span className="text-white">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Vision & Mission with Advanced Hover Effects */}
      <section className="py-32 bg-gradient-to-b from-black via-[#4b2e83]/5 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <RevealOnScroll direction="up" delay={0.1}>
              <motion.div 
                className="relative group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#6fbf73]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-12 space-y-6 rounded-3xl group-hover:border-[#6fbf73]/50 transition-all duration-300">
                  <motion.div 
                    className="text-6xl font-light text-[#6fbf73]"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    01
                  </motion.div>
                  <h3 className="text-3xl font-light">Our Vision</h3>
                  <motion.div 
                    className="h-1 w-0 bg-[#6fbf73] group-hover:w-full transition-all duration-500"
                  />
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    To be the leading institute for applied art and advertising education, creating skilled professionals
                    who innovate and excel in the creative industry.
                  </p>
                </div>
              </motion.div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.2}>
              <motion.div 
                className="relative group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#4b2e83]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ scale: [1.1, 1, 1.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-12 space-y-6 rounded-3xl group-hover:border-[#4b2e83]/50 transition-all duration-300">
                  <motion.div 
                    className="text-6xl font-light text-[#4b2e83]"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    02
                  </motion.div>
                  <h3 className="text-3xl font-light">Our Mission</h3>
                  <motion.div 
                    className="h-1 w-0 bg-[#4b2e83] group-hover:w-full transition-all duration-500"
                  />
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    To provide comprehensive, industry-focused education empowering students with skills, knowledge, and
                    confidence to build successful careers.
                  </p>
                </div>
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy with Interactive Elements */}
      <section className="py-32 relative overflow-hidden">
        <motion.div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-[#6fbf73]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <RevealOnScroll direction="up">
            <div className="space-y-12">
              <motion.div 
                className="inline-flex items-center gap-3 text-sm tracking-widest text-gray-400"
                whileHover={{ gap: 24 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ scaleX: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Minus className="w-8 h-px bg-white" />
                </motion.div>
                PHILOSOPHY
                <motion.div
                  animate={{ scaleX: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Minus className="w-8 h-px bg-white" />
                </motion.div>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl font-light max-w-3xl mx-auto leading-tight"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span 
                  className="font-bold bg-gradient-to-r from-[#6fbf73] via-white to-[#4b2e83] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  Shaping the future
                </motion.span> of students is our primary goal
              </motion.h2>

              <div className="max-w-2xl mx-auto space-y-6 text-gray-400 leading-relaxed">
                <motion.p
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  We have designed a special syllabus tailored to current industry needs and provide thorough guidance
                  along with personalized attention to each student.
                </motion.p>
                <motion.p
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Our faculty members are highly experienced professionals from advertising and art industries, ensuring
                  world-class guidance for every student.
                </motion.p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Applied Art with Card Hover Effects */}
      <section className="py-32 bg-gradient-to-b from-black via-white/5 to-black relative overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#6fbf73]/10 rounded-full blur-3xl"
          animate={{ x: [-200, 0, -200] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <RevealOnScroll direction="up">
            <div className="mb-20">
              <motion.div 
                className="inline-flex items-center gap-3 text-sm tracking-widest text-gray-400 mb-8"
                whileHover={{ gap: 16 }}
              >
                <Minus className="w-8 h-px bg-white" />
                WHY APPLIED ART
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-light">
                Why Applied Art
                <br />
                <motion.span 
                  className="font-bold text-[#6fbf73]"
                  whileHover={{ scale: 1.05, display: "inline-block" }}
                >
                  & Advertising?
                </motion.span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-16">
            <RevealOnScroll direction="left">
              <motion.div 
                className="relative group cursor-pointer p-8 rounded-3xl"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#6fbf73]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative space-y-6">
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-[#6fbf73]/20 rounded-full flex items-center justify-center text-2xl"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      💼
                    </motion.div>
                    <div className="text-2xl font-light">Career Opportunities</div>
                  </motion.div>
                  <div className="space-y-4 text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    <p>
                      Applied art and advertising are among the most exciting and fastest-growing fields. Professionals
                      work in creative agencies, design studios, media companies, and as freelancers.
                    </p>
                    <p>
                      With <motion.span 
                        className="text-[#6fbf73] font-medium"
                        whileHover={{ scale: 1.1, display: "inline-block" }}
                      >
                        2,500+ career options
                      </motion.span> available, there's endless room for growth and exploration.
                    </p>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <motion.div 
                className="relative group cursor-pointer p-8 rounded-3xl"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#4b2e83]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative space-y-6">
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-[#4b2e83]/20 rounded-full flex items-center justify-center text-2xl"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      📈
                    </motion.div>
                    <div className="text-2xl font-light">Growth & Flexibility</div>
                  </motion.div>
                  <div className="space-y-4 text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    <p>
                      Whether you prefer a stable job in a reputed agency or want to work independently, the field offers
                      flexibility and global opportunities.
                    </p>
                    <p>
                      The creative industry values <motion.span 
                        className="text-[#e07a5f] font-medium"
                        whileHover={{ scale: 1.1, display: "inline-block" }}
                      >
                        innovation
                      </motion.span> and unique perspectives, making it ideal for entrepreneurial minds.
                    </p>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA with Gradient Animation */}
      <section className="py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#6fbf73]/10 via-transparent to-[#4b2e83]/10"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ backgroundSize: "200% 100%" }}
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <RevealOnScroll direction="up">
            <div className="space-y-12">
              <motion.h2 
                className="text-5xl md:text-7xl font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to
                <br />
                <motion.span 
                  className="font-bold bg-gradient-to-r from-[#6fbf73] via-white to-[#4b2e83] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  Create?
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-400 max-w-2xl mx-auto"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                Admissions open for 2025-26. Join a community of creative visionaries.
              </motion.p>

              <motion.div 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/courses">
                  <motion.div
                    className="inline-block relative group"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#6fbf73] to-[#4b2e83] rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <Button className="relative bg-white hover:bg-gray-100 text-black h-14 px-12 rounded-full font-medium text-lg">
                      Explore Courses →
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
