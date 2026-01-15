"use client"

import Link from "next/link"
import { ArrowRight, Clock, Users, BookOpen } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { StaggerChildren, StaggerItem } from "@/components/stagger-children"
import { motion } from "framer-motion"

const coursesList = [
  {
    id: 1,
    name: "Applied Art",
    description: "Master the fundamentals of visual arts and design principles",
    level: "Beginner to Advanced",
    duration: "6 months",
    students: "20+",
    icon: "🎨",
  },
  {
    id: 2,
    name: "Intermediate Elementary Grade Exam Classes",
    description: "Prepare for grade exams with comprehensive guidance",
    level: "Intermediate",
    duration: "4 months",
    students: "15+",
    icon: "📚",
  },
  {
    id: 3,
    name: "J J School of Arts Entrance Exam Preparation",
    description: "Specialized classes for (MAH - AAC - CET) entrance exams",
    level: "Advanced",
    duration: "3 months",
    students: "10+",
    icon: "🎓",
  },
  {
    id: 4,
    name: "Basics and Advance Photography Course",
    description: "Learn photography from fundamentals to professional techniques",
    level: "Beginner to Advanced",
    duration: "5 months",
    students: "12+",
    icon: "📷",
  },
  {
    id: 5,
    name: "Basics and Advance Calligraphy Course",
    description: "Master the art of beautiful handwriting and lettering",
    level: "Beginner to Advanced",
    duration: "4 months",
    students: "18+",
    icon: "✏️",
  },
  {
    id: 6,
    name: "UI / UX Course",
    description: "Digital design for modern applications and web interfaces",
    level: "Intermediate",
    duration: "5 months",
    students: "16+",
    icon: "🖥️",
  },
  {
    id: 7,
    name: "360 Portfolio Course",
    description: "Build a comprehensive professional portfolio for job placement",
    level: "Advanced",
    duration: "6 months",
    students: "14+",
    icon: "💼",
  },
  {
    id: 8,
    name: "Graphic Design Course",
    description: "Creative visual communication and brand design",
    level: "Beginner to Advanced",
    duration: "5 months",
    students: "20+",
    icon: "🎭",
  },
  {
    id: 9,
    name: "Film Making Course",
    description: "Cinematic storytelling and professional video production",
    level: "Intermediate",
    duration: "6 months",
    students: "8+",
    icon: "🎬",
  },
  {
    id: 10,
    name: "Digital Painting Course",
    description: "Modern digital art techniques and creative expression",
    level: "Beginner to Advanced",
    duration: "4 months",
    students: "17+",
    icon: "🖌️",
  },
  {
    id: 11,
    name: "Software Training Course",
    description: "Master professional tools: Photoshop, Illustrator, After Effects, Premier Pro, Blender, Figma",
    level: "Beginner to Advanced",
    duration: "4 months",
    students: "22+",
    icon: "⚙️",
  },
]

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Page Header */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#4b2e83]/10 to-black border-b border-[#6fbf73]/10">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 bg-[#6fbf73]/10 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "10%", left: "5%" }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-[#4b2e83]/10 rounded-full blur-3xl"
            animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            style={{ bottom: "10%", right: "5%" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <RevealOnScroll direction="scale" duration={0.8}>
            <motion.div
              className="text-7xl mb-6"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              🏛️
            </motion.div>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
              Our
              <br />
              <span className="bg-gradient-to-r from-[#6fbf73] to-[#4b2e83] bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.4}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Specialized courses designed to develop industry-ready creatives with hands-on experience and professional
              mentorship.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-32 bg-black border-t border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {coursesList.map((course) => (
              <StaggerItem key={course.id}>
                <Link href={`/courses/${course.id}`}>
                  <motion.div
                    className="group h-full p-8 rounded-2xl bg-[#0a0a0a] border border-[#6fbf73]/20 hover:border-[#6fbf73]/60 hover:bg-[#6fbf73]/5 transition-all cursor-pointer overflow-hidden relative"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#6fbf73]/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300" />

                    <div className="text-4xl mb-4 relative z-10">{course.icon}</div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6fbf73] transition line-clamp-2">
                      {course.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">{course.description}</p>

                    <div className="space-y-2 mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-[#6fbf73]" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-[#6fbf73]" />
                        <span>{course.students} per batch</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-[#6fbf73]" />
                        <span>{course.level}</span>
                      </div>
                    </div>

                    <div className="border-t border-[#6fbf73]/10 pt-4 flex items-center text-[#6fbf73] font-semibold text-sm group-hover:text-[#e07a5f] transition">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-32 bg-gradient-to-b from-black via-[#4b2e83]/5 to-black border-t border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up">
            <h2 className="text-6xl md:text-7xl font-bold mb-4 max-w-2xl">
              Why Our
              <br />
              <span className="text-[#6fbf73]">Programs?</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#6fbf73] to-[#4b2e83] mb-16" />
          </RevealOnScroll>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {[
              {
                icon: "👨‍🏫",
                title: "Expert Instructors",
                description:
                  "Learn from industry professionals with years of experience in advertising and applied art.",
              },
              {
                icon: "🎯",
                title: "Career-Focused Curriculum",
                description: "Curriculum designed according to current industry demands and job market requirements.",
              },
              {
                icon: "💼",
                title: "Portfolio Development",
                description: "Build a professional portfolio throughout the course for job placement and freelancing.",
              },
              {
                icon: "🏢",
                title: "Modern Facilities",
                description: "State-of-the-art studios equipped with professional tools and software.",
              },
              {
                icon: "👥",
                title: "Personalized Attention",
                description: "Small batch sizes ensure every student receives personalized guidance and mentorship.",
              },
              {
                icon: "🚀",
                title: "Job Placement Support",
                description: "Career support and networking opportunities with leading companies and agencies.",
              },
            ].map((feature, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="group p-8 rounded-2xl border border-[#6fbf73]/20 bg-black hover:bg-[#6fbf73]/5 hover:border-[#6fbf73]/40 transition-all duration-300 h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-[#4b2e83] via-[#6fbf73]/20 to-[#4b2e83] border-t border-[#6fbf73]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll direction="up">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Ready to Start?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Choose a program and take the first step towards your creative career.
            </p>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-[#4b2e83] font-bold h-14 px-10 text-lg">
              Apply Now
            </Button>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
