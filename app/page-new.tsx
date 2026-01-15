"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { AnimatedSectionHeading } from "@/components/animated-section-heading"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />

      {/* HERO - Full Screen Bold Typography */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-[#6fbf73]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-96 h-96 bg-[#4b2e83]/5 rounded-full blur-3xl bottom-0 right-0 animate-pulse animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Announcement Badge */}
            <ScrollFadeIn delay={0}>
              <div className="inline-block px-4 py-2 bg-[#6fbf73]/10 rounded-full border border-[#6fbf73]/30">
                <span className="text-sm font-medium text-[#6fbf73]">First Ever in Dombivli</span>
              </div>
            </ScrollFadeIn>

            {/* Main Headline - Ultra Bold */}
            <ScrollFadeIn delay={100}>
              <h1
                className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Shape the
                <br />
                <span className="bg-gradient-to-r from-[#6fbf73] via-[#4b2e83] to-[#e07a5f] bg-clip-text text-transparent">
                  Creative Future
                </span>
              </h1>
            </ScrollFadeIn>

            {/* Subheading */}
            <ScrollFadeIn delay={200}>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                NEO Institute of Applied Art transforms ambitious students into industry-leading designers, artists, and
                creative professionals.
              </p>
            </ScrollFadeIn>

            {/* CTA Buttons */}
            <ScrollFadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
                <Link href="/apply">
                  <Button
                    size="lg"
                    className="bg-[#6fbf73] hover:bg-[#5aa85c] text-black font-bold h-12 px-8 text-base group"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#4b2e83] text-white hover:bg-[#4b2e83]/10 h-12 px-8 text-base bg-transparent"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Story
                </Button>
              </div>
            </ScrollFadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#6fbf73]/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#6fbf73] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* IMMERSIVE SECTION - Creative Philosophy */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <ScrollFadeIn className="space-y-8">
              <div className="space-y-4">
                <AnimatedSectionHeading className="text-5xl md:text-6xl font-bold leading-tight">
                  Where Creativity
                  <br />
                  Meets Excellence
                </AnimatedSectionHeading>
                <div className="h-1 w-24 bg-gradient-to-r from-[#6fbf73] to-[#4b2e83]" />
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                NEO is not just an institute—it's a creative laboratory where ambitious students collaborate with
                industry experts to push boundaries and create work that matters.
              </p>

              <ul className="space-y-4 text-gray-300">
                {[
                  "Learn from award-winning industry professionals",
                  "Build a portfolio that opens doors",
                  "Access cutting-edge creative studios",
                  "Join a community of visionary creators",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#6fbf73] rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-[#4b2e83] hover:bg-[#3a1f5c] text-white h-12 px-8 text-base font-semibold">
                Explore Our Approach
              </Button>
            </ScrollFadeIn>

            {/* Right: Visual */}
            <ScrollFadeIn>
              <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#4b2e83]/20 to-[#6fbf73]/20 border border-[#6fbf73]/20 flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6fbf73]/10 to-[#4b2e83]/10 opacity-50" />
                <img
                  src="/images/whatsapp-20image-202026-01-14-20at-207.jpeg"
                  alt="Creative Studios"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* OUR PROGRAMS SECTION - Creative Artistic Layout */}
      <section className="relative py-32 bg-gradient-to-b from-black via-[#4b2e83]/5 to-black border-t border-[#6fbf73]/10 overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6fbf73]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#e07a5f]/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#4b2e83]/5 rounded-full blur-3xl animate-pulse animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Artistic Flair */}
          <ScrollFadeIn className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <AnimatedSectionHeading className="text-6xl md:text-8xl font-bold leading-none mb-4">
                  Our
                  <br />
                  <span className="bg-gradient-to-r from-[#6fbf73] via-[#4b2e83] to-[#e07a5f] bg-clip-text text-transparent">
                    Programs
                  </span>
                </AnimatedSectionHeading>
                <div className="h-1 w-32 bg-gradient-to-r from-[#6fbf73] to-[#4b2e83] mt-4" />
              </div>
              <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                Immersive courses crafted to transform passion into profession
              </p>
            </div>
          </ScrollFadeIn>

          {/* Masonry-style Creative Grid */}
          <div className="space-y-8">
            {/* Row 1: Featured Hero Card - UI/UX Design */}
            <ScrollFadeIn delay={0}>
              <Link href="/courses#ui-ux">
                <div className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-2xl hover:scale-[1.02]">
                  {/* Animated Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4b2e83] via-[#6fbf73]/40 to-[#e07a5f] opacity-95 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Animated Orbs */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#6fbf73]/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e07a5f]/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-110 transition-all duration-700" />

                  {/* Content */}
                  <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 gap-12 p-12 md:p-16">
                    <div className="flex flex-col justify-center">
                      <div className="inline-block mb-6">
                        <span className="text-sm font-bold text-[#6fbf73] bg-[#6fbf73]/20 px-4 py-2 rounded-full">
                          Most Popular
                        </span>
                      </div>
                      <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-500">✨</div>
                      <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        UI / UX Design
                      </h3>
                      <p className="text-white/90 text-lg leading-relaxed mb-8">
                        Create stunning digital experiences that users love. Master design thinking, prototyping, and user research.
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-white/70 text-sm bg-white/10 px-4 py-2 rounded-full">6 months</span>
                        <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col justify-center space-y-6">
                      {["Figma & Adobe XD", "Design Systems", "User Research", "Portfolio Projects"].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-white/90">
                          <div className="w-2 h-2 bg-[#6fbf73] rounded-full" />
                          <span className="text-lg">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollFadeIn>

            {/* Row 2: 3 Column Grid - Core Programs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Applied Art",
                  icon: "🎨",
                  description: "Master traditional & digital art fundamentals",
                  gradient: "from-[#4b2e83] to-[#6fbf73]/50",
                  duration: "6 months",
                  highlight: "Foundation Course",
                },
                {
                  name: "Graphic Design",
                  icon: "🎭",
                  description: "Visual storytelling and brand identity",
                  gradient: "from-[#e07a5f] to-[#4b2e83]/50",
                  duration: "6 months",
                  highlight: "Industry Ready",
                },
                {
                  name: "Photography",
                  icon: "📸",
                  description: "Capture light, emotion & narrative",
                  gradient: "from-[#6fbf73] to-[#e07a5f]/50",
                  duration: "4-6 months",
                  highlight: "Professional",
                },
              ].map((course, idx) => (
                <ScrollFadeIn key={idx} delay={50 + idx * 50}>
                  <Link href={`/courses#${course.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />

                      <div className="relative z-10 h-full flex flex-col justify-between p-8">
                        <div>
                          <span className="inline-block text-xs font-bold text-white/70 bg-white/10 px-3 py-1 rounded-full mb-4">
                            {course.highlight}
                          </span>
                          <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                            {course.icon}
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-[#6fbf73] transition-colors">
                            {course.name}
                          </h3>
                        </div>
                        <div>
                          <p className="text-white/80 text-sm mb-4 leading-relaxed">{course.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-white/60 bg-white/10 px-3 py-1.5 rounded-full">
                              {course.duration}
                            </span>
                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollFadeIn>
              ))}
            </div>

            {/* Row 3: 2 Column - Specialty Programs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Film Making",
                  icon: "🎬",
                  description: "Cinematic storytelling from script to screen",
                  gradient: "from-[#e07a5f] via-[#4b2e83]/50 to-[#6fbf73]/30",
                  duration: "6 months",
                  features: ["Script Writing", "Directing", "Post Production"],
                },
                {
                  name: "Digital Painting",
                  icon: "🖌️",
                  description: "Professional digital illustration techniques",
                  gradient: "from-[#6fbf73] via-[#e07a5f]/50 to-[#4b2e83]/30",
                  duration: "4 months",
                  features: ["Concept Art", "Character Design", "Environment"],
                },
              ].map((course, idx) => (
                <ScrollFadeIn key={idx} delay={200 + idx * 50}>
                  <Link href={`/courses#${course.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-85 group-hover:opacity-100 transition-opacity`} />
                      
                      <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:blur-2xl transition-all" />

                      <div className="relative z-10 h-full flex flex-col justify-between p-8">
                        <div>
                          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {course.icon}
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-3">{course.name}</h3>
                          <p className="text-white/80 text-sm mb-4">{course.description}</p>
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {course.features.map((feature, i) => (
                              <span key={i} className="text-xs text-white/70 bg-white/10 px-2.5 py-1 rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-white/60 bg-white/10 px-3 py-1.5 rounded-full">
                              {course.duration}
                            </span>
                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollFadeIn>
              ))}
            </div>

            {/* Row 4: Specialized Training - Compact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Calligraphy",
                  icon: "✒️",
                  description: "Beautiful handwriting art",
                  gradient: "from-[#4b2e83] to-[#6fbf73]",
                  duration: "4 months",
                },
                {
                  name: "Software Training",
                  icon: "💻",
                  description: "Adobe Suite mastery",
                  gradient: "from-[#e07a5f] to-[#4b2e83]",
                  duration: "3-6 months",
                },
                {
                  name: "Exam Preparation",
                  icon: "📚",
                  description: "Elementary certifications",
                  gradient: "from-[#6fbf73] to-[#e07a5f]",
                  duration: "Varies",
                },
              ].map((course, idx) => (
                <ScrollFadeIn key={idx} delay={300 + idx * 50}>
                  <Link href={`/courses#${course.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-80 group-hover:opacity-95 transition-opacity`} />
                      
                      <div className="relative z-10 h-full flex flex-col justify-between p-6">
                        <div>
                          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{course.icon}</div>
                          <h3 className="text-2xl font-bold text-white mb-2">{course.name}</h3>
                          <p className="text-white/70 text-sm">{course.description}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full">
                            {course.duration}
                          </span>
                          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollFadeIn>
              ))}
            </div>

            {/* Creative Callout Section */}
            <ScrollFadeIn delay={450}>
              <div className="relative mt-12 p-12 md:p-16 rounded-3xl bg-gradient-to-r from-[#6fbf73]/10 via-[#4b2e83]/10 to-[#e07a5f]/10 border border-[#6fbf73]/30 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDExMSwgMTkxLCAxMTUsIDAuMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-50" />
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Taught by{" "}
                    <span className="bg-gradient-to-r from-[#6fbf73] to-[#e07a5f] bg-clip-text text-transparent">
                      Industry Experts
                    </span>
                  </h3>
                  <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                    Learn from professionals actively working in advertising agencies, design studios, and creative firms
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>

          {/* View All CTA */}
          <ScrollFadeIn delay={500} className="text-center mt-20">
            <Link href="/courses">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-[#6fbf73] to-[#5aa85c] hover:from-[#5aa85c] hover:to-[#6fbf73] text-black font-bold rounded-full transition-all overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                  Explore All Programs
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
                </span>
              </button>
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* STUDENT WORK - Full Width Image Grid */}
      <section className="relative py-32 bg-black border-t border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold mb-16">
              Student
              <br />
              Excellence
            </AnimatedSectionHeading>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { span: "lg:col-span-2 lg:row-span-2", aspect: "aspect-square" },
              { span: "", aspect: "aspect-video" },
              { span: "", aspect: "aspect-video" },
              { span: "lg:col-span-2", aspect: "aspect-video" },
            ].map((item, idx) => (
              <ScrollFadeIn key={idx} delay={idx * 50}>
                <div className={`${item.span} ${item.aspect} rounded-xl overflow-hidden group relative cursor-pointer`}>
                  <img
                    src="/images/whatsapp-20image-202026-01-14-20at-207.jpeg"
                    alt={`Student Work ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-semibold">View Project</span>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn className="text-center mt-16">
            <Link href="/portfolio">
              <Button
                size="lg"
                className="bg-[#4b2e83] hover:bg-[#3a1f5c] text-white h-12 px-8 text-base font-semibold"
              >
                View Portfolio
              </Button>
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* WHY NEO - Feature Cards */}
      <section className="relative py-32 bg-gradient-to-b from-black via-[#4b2e83]/5 to-black border-t border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold mb-16 max-w-2xl">
              Why Choose
              <br />
              NEO
            </AnimatedSectionHeading>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Industry Leaders",
                description: "Learn from award-winning professionals actively shaping the creative industry",
              },
              {
                number: "02",
                title: "Portfolio First",
                description: "Build a competitive portfolio from day one with real-world project experience",
              },
              {
                number: "03",
                title: "Modern Facilities",
                description: "Access state-of-the-art studios, equipment, and creative spaces",
              },
              {
                number: "04",
                title: "Career Support",
                description: "Direct mentorship and job placement assistance from industry networks",
              },
              {
                number: "05",
                title: "Collaborative Culture",
                description: "Work with diverse creative minds across design, film, photography, and art",
              },
              {
                number: "06",
                title: "Global Recognition",
                description: "Graduate with credentials recognized across top design and advertising firms",
              },
            ].map((feature, idx) => (
              <ScrollFadeIn key={idx} delay={idx * 50}>
                <div className="group p-8 rounded-xl border border-[#6fbf73]/20 bg-[#6fbf73]/5 hover:bg-[#6fbf73]/10 hover:border-[#6fbf73]/40 transition-all duration-300">
                  <h3 className="text-5xl font-bold text-[#6fbf73]/40 mb-4 group-hover:text-[#6fbf73]/60 transition">
                    {feature.number}
                  </h3>
                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-r from-[#4b2e83] via-[#6fbf73]/20 to-[#4b2e83]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6fbf73]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4b2e83]/10 rounded-full blur-3xl" />
        </div>

        <ScrollFadeIn className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Ready to Create?
          </AnimatedSectionHeading>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Admissions are open for 2025-26. Join a community of creative visionaries and shape your future.
          </p>
          <Button size="lg" className="bg-white hover:bg-gray-100 text-[#4b2e83] font-bold h-14 px-10 text-lg">
            Apply Now
          </Button>
        </ScrollFadeIn>
      </section>

      <Footer />
    </main>
  )
}
