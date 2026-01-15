import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Users, Clock, Target } from "lucide-react"
import { AnimatedSectionHeading } from "@/components/animated-section-heading"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

const coursesData = {
  1: {
    name: "Applied Art",
    description: "Master the fundamentals of visual arts and design principles",
    overview:
      "A comprehensive course designed to build strong foundations in applied art. Students learn various art forms, design principles, and creative techniques to express their artistic vision.",
    duration: "6 months",
    level: "Beginner to Advanced",
    students: "20",
    learningOutcomes: [
      "Master fundamental art principles and techniques",
      "Develop unique artistic style and voice",
      "Create a professional portfolio of original work",
      "Understand color theory and composition",
      "Learn digital and traditional art mediums",
    ],
    curriculum: [
      { module: "Introduction to Art", duration: "2 weeks" },
      { module: "Drawing Fundamentals", duration: "3 weeks" },
      { module: "Color Theory & Composition", duration: "3 weeks" },
      { module: "Digital Art Tools", duration: "4 weeks" },
      { module: "Portfolio Development", duration: "8 weeks" },
    ],
    tools: ["Adobe Creative Suite", "Procreate", "Sketchbook Pro", "Traditional Media", "3D Modeling Software"],
    careers: ["Graphic Designer", "Illustrator", "Art Director", "UX Designer", "Fine Artist"],
  },
  2: {
    name: "UI / UX Course",
    description: "Digital design for modern applications and web interfaces",
    overview:
      "Learn to design intuitive and beautiful user interfaces and experiences. This course covers design thinking, prototyping, user research, and industry best practices.",
    duration: "5 months",
    level: "Intermediate",
    students: "16",
    learningOutcomes: [
      "Understand UX design principles and methodologies",
      "Create wireframes and prototypes",
      "Conduct user research and testing",
      "Master design tools like Figma",
      "Build interactive prototypes",
    ],
    curriculum: [
      { module: "UX Fundamentals", duration: "2 weeks" },
      { module: "Design Thinking Workshop", duration: "2 weeks" },
      { module: "Wireframing & Prototyping", duration: "3 weeks" },
      { module: "User Research Methods", duration: "3 weeks" },
      { module: "Real-World Projects", duration: "8 weeks" },
    ],
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Protopie"],
    careers: ["UX Designer", "UI Designer", "Product Designer", "Interaction Designer", "User Researcher"],
  },
  3: {
    name: "Graphic Design Course",
    description: "Creative visual communication and brand design",
    overview:
      "Master the art of visual storytelling through graphic design. Learn brand identity design, layout principles, and create compelling designs for various media.",
    duration: "5 months",
    level: "Beginner to Advanced",
    students: "20",
    learningOutcomes: [
      "Master design software and tools",
      "Create compelling brand identities",
      "Design layouts for print and digital",
      "Develop strong typography skills",
      "Build a professional design portfolio",
    ],
    curriculum: [
      { module: "Design Fundamentals", duration: "2 weeks" },
      { module: "Typography & Layout", duration: "3 weeks" },
      { module: "Brand Identity Design", duration: "4 weeks" },
      { module: "Print & Digital Design", duration: "3 weeks" },
      { module: "Freelance Project Work", duration: "8 weeks" },
    ],
    tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop", "Procreate", "Affinity Designer"],
    careers: ["Graphic Designer", "Brand Designer", "Art Director", "Package Designer", "Creative Director"],
  },
}

interface CourseDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = await params
  
  // Validate that id is one of the valid course IDs
  if (id !== '1' && id !== '2' && id !== '3') {
    notFound()
  }
  
  const course = coursesData[id as '1' | '2' | '3']

  if (!course) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-black border-b border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/courses"
            className="flex items-center gap-2 text-[#6fbf73] hover:text-[#e07a5f] transition font-medium"
          >
            <ArrowLeft size={18} />
            Back to Programs
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <section className="relative py-32 pt-20 overflow-hidden bg-gradient-to-b from-black via-[#4b2e83]/10 to-black border-b border-[#6fbf73]/10">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-[#4b2e83]/5 rounded-full blur-3xl top-0 left-0" />
          <div className="absolute w-96 h-96 bg-[#6fbf73]/5 rounded-full blur-3xl bottom-0 right-0" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold mb-6">
              {course.name}
            </AnimatedSectionHeading>
            <p className="text-xl text-gray-400 max-w-3xl">{course.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div>
                <p className="text-sm text-gray-500 mb-2">Duration</p>
                <p className="text-2xl font-bold text-[#6fbf73]">{course.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Level</p>
                <p className="text-lg font-bold text-gray-300">{course.level}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Batch Size</p>
                <p className="text-2xl font-bold text-[#6fbf73]">{course.students}+</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Format</p>
                <p className="text-lg font-bold text-gray-300">Classroom</p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-32 bg-black border-t border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-20">
              {/* Overview */}
              <ScrollFadeIn>
                <div>
                  <AnimatedSectionHeading className="text-5xl md:text-6xl font-bold mb-8">
                    Overview
                  </AnimatedSectionHeading>
                  <p className="text-gray-400 text-lg leading-relaxed">{course.overview}</p>
                </div>
              </ScrollFadeIn>

              {/* Learning Outcomes */}
              <ScrollFadeIn>
                <div>
                  <AnimatedSectionHeading className="text-5xl md:text-6xl font-bold mb-8">
                    What You'll
                    <br />
                    Learn
                  </AnimatedSectionHeading>
                  <ul className="space-y-4">
                    {course.learningOutcomes.map((outcome, idx) => (
                      <ScrollFadeIn key={idx} delay={idx * 30}>
                        <li className="flex gap-4">
                          <CheckCircle2 className="w-6 h-6 text-[#6fbf73] flex-shrink-0 mt-1" />
                          <span className="text-gray-300 text-lg">{outcome}</span>
                        </li>
                      </ScrollFadeIn>
                    ))}
                  </ul>
                </div>
              </ScrollFadeIn>

              {/* Curriculum */}
              <ScrollFadeIn>
                <div>
                  <AnimatedSectionHeading className="text-5xl md:text-6xl font-bold mb-8">
                    Curriculum
                  </AnimatedSectionHeading>
                  <div className="space-y-4">
                    {course.curriculum.map((item, idx) => (
                      <ScrollFadeIn key={idx} delay={idx * 30}>
                        <div className="flex gap-6 pb-6 border-b border-[#6fbf73]/10 last:border-0">
                          <div className="text-[#6fbf73] font-bold flex-shrink-0 w-20">Module {idx + 1}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-white text-lg">{item.module}</h4>
                            <p className="text-sm text-gray-500">{item.duration}</p>
                          </div>
                        </div>
                      </ScrollFadeIn>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>

              {/* Tools */}
              <ScrollFadeIn>
                <div>
                  <AnimatedSectionHeading className="text-5xl md:text-6xl font-bold mb-8">
                    Tools & Software
                  </AnimatedSectionHeading>
                  <div className="flex flex-wrap gap-3">
                    {course.tools.map((tool, idx) => (
                      <ScrollFadeIn key={idx} delay={idx * 25}>
                        <span className="px-4 py-2 bg-[#6fbf73]/20 text-[#6fbf73] rounded-full font-medium border border-[#6fbf73]/30">
                          {tool}
                        </span>
                      </ScrollFadeIn>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>

              {/* Career Opportunities */}
              <ScrollFadeIn>
                <div>
                  <AnimatedSectionHeading className="text-5xl md:text-6xl font-bold mb-8">
                    Career Path
                  </AnimatedSectionHeading>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.careers.map((career, idx) => (
                      <ScrollFadeIn key={idx} delay={idx * 40}>
                        <div className="p-6 rounded-lg bg-gradient-to-br from-[#4b2e83]/20 to-[#6fbf73]/20 border border-[#6fbf73]/20 hover:border-[#6fbf73]/60 transition">
                          <p className="font-semibold text-white">{career}</p>
                        </div>
                      </ScrollFadeIn>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Sidebar CTA */}
            <ScrollFadeIn className="md:col-span-1">
              <div className="sticky top-24 bg-[#0a0a0a] rounded-xl border border-[#6fbf73]/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Ready to
                  <br />
                  Enroll?
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <Clock className="w-5 h-5 text-[#6fbf73] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Duration</p>
                      <p className="font-bold text-white">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Target className="w-5 h-5 text-[#6fbf73] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Level</p>
                      <p className="font-bold text-white">{course.level}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Users className="w-5 h-5 text-[#6fbf73] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Batch Size</p>
                      <p className="font-bold text-white">Max {course.students}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full bg-[#6fbf73] hover:bg-[#5aa85c] text-black font-bold">
                    Apply Now
                  </Button>
                  <Button
                    size="lg"
                    className="w-full border-2 border-[#6fbf73] text-[#6fbf73] hover:bg-[#6fbf73]/20 bg-transparent font-bold"
                  >
                    WhatsApp Us
                  </Button>
                </div>

                <p className="text-center text-xs text-gray-600 mt-6">📞 9970352380</p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-32 bg-gradient-to-r from-[#4b2e83] via-[#6fbf73]/20 to-[#4b2e83] border-t border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold mb-8 text-white">
              Next Steps
            </AnimatedSectionHeading>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Contact us to learn more about this course and take the first step toward your career goals.
            </p>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-[#4b2e83] font-bold h-14 px-10 text-lg">
              Contact Us Today
            </Button>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
