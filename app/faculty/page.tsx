"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSectionHeading } from "@/components/animated-section-heading"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

const facultyMembers = [
  { name: "Pooja Dawkhar", specialization: "Applied Art & Design", experience: "12+ years" },
  { name: "Madhura Bugade", specialization: "Photography & Visual Arts", experience: "10+ years" },
  { name: "Dhanashri Jamdar", specialization: "Graphic Design & Branding", experience: "8+ years" },
  { name: "Expert Instructor", specialization: "UI/UX Design", experience: "7+ years" },
  { name: "Creative Director", specialization: "Film Making & Video", experience: "15+ years" },
  { name: "Art Director", specialization: "Digital Painting & Illustration", experience: "9+ years" },
  { name: "Design Lead", specialization: "Calligraphy & Typography", experience: "11+ years" },
  { name: "Software Specialist", specialization: "Professional Software Training", experience: "13+ years" },
]

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Page Header */}
      <section className="relative py-32 pt-40 overflow-hidden bg-gradient-to-b from-black via-[#6fbf73]/10 to-black border-b border-[#6fbf73]/10">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-[#6fbf73]/5 rounded-full blur-3xl top-0 right-0" />
          <div className="absolute w-96 h-96 bg-[#4b2e83]/5 rounded-full blur-3xl bottom-0 left-0" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold mb-6">
              Our
              <br />
              Faculty
            </AnimatedSectionHeading>
            <p className="text-xl text-gray-400 max-w-3xl">
              Meet the experienced professionals shaping the creative industry's next generation.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-32 bg-black border-t border-[#6fbf73]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyMembers.map((member, idx) => (
              <ScrollFadeIn key={idx} delay={idx * 40}>
                <div className="group text-center">
                  <div className="mb-6 aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-[#4b2e83]/20 to-[#6fbf73]/20 flex items-center justify-center relative border border-[#6fbf73]/20 group-hover:border-[#6fbf73]/60 transition">
                    <div className="text-6xl">👤</div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-[#6fbf73]/20 transition" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-[#6fbf73] mb-2">{member.specialization}</p>
                  <p className="text-xs text-gray-500">{member.experience} experience</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Faculty Matters */}
      <section className="py-32 bg-gradient-to-b from-black via-[#4b2e83]/5 to-black border-t border-[#6fbf73]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn className="mb-12">
            <AnimatedSectionHeading className="text-6xl md:text-7xl font-bold text-center">
              Why Our
              <br />
              Faculty Matters
            </AnimatedSectionHeading>
          </ScrollFadeIn>

          <div className="space-y-8 text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            <ScrollFadeIn>
              <p>
                Our faculty members are <strong className="text-[#6fbf73]">highly experienced professionals</strong> who
                have played a key role in shaping the careers of many successful students.
              </p>
            </ScrollFadeIn>
            <ScrollFadeIn>
              <p>
                With <strong className="text-[#6fbf73]">renowned and seasoned professionals</strong> from the fields of
                advertising and art, we assure you that every student will receive the{" "}
                <strong>best possible guidance</strong> to succeed in their chosen path.
              </p>
            </ScrollFadeIn>
            <ScrollFadeIn>
              <p>
                They bring <strong className="text-[#6fbf73]">real-world experience</strong> from top agencies and
                studios, providing practical insights and industry connections that accelerate student growth.
              </p>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
